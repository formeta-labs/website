// src/lib/composables/useContactForm.ts
import { get } from 'svelte/store';
import { contactService, APIError } from '../services/api';
import { contactFormData, contactFormState, setSubmissionState, resetContactForm } from '../stores/contact';
import type { ContactFormData } from '../types/contact';

export function useContactForm() {
  
  async function submitForm(formElement: HTMLFormElement): Promise<boolean> {
    const formData = get(contactFormData);
    
    // Client-side validation
    if (!formElement.checkValidity()) {
      return false;
    }
    
    if (!formData.gdprConsent) {
      setSubmissionState({
        submitMessage: 'Debes aceptar el tratamiento de datos para continuar.',
        submitSuccess: false
      });
      return false;
    }
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmissionState({
        submitMessage: 'Por favor, completa todos los campos obligatorios.',
        submitSuccess: false
      });
      return false;
    }
    
    // Set loading state
    setSubmissionState({
      isSubmitting: true,
      submitMessage: '',
      submitSuccess: false
    });
    
    try {
      const response = await contactService.submitContact(formData);
      
      // Success
      setSubmissionState({
        isSubmitting: false,
        submitSuccess: true,
        submitMessage: getSuccessMessage(formData),
        lastSubmissionId: response.id
      });
      
      // Reset form after successful submission
      resetContactForm();
      
      return true;
      
    } catch (error) {
      let errorMessage = 'Error al enviar la solicitud. Por favor, inténtalo de nuevo.';
      
      if (error instanceof APIError) {
        if (error.status === 429) {
          // Use the improved rate limit message from backend
          errorMessage = error.message || 'Límite de mensajes alcanzado. Espera un momento antes de intentarlo de nuevo.';
          
          // If backend provides additional info, use it
          if (error.data?.contactAlternatives?.email) {
            errorMessage += `\n\nAlternativas de contacto:\n📧 Email: ${error.data.contactAlternatives.email}`;
            if (error.data.contactAlternatives.phone) {
              errorMessage += `\n📞 Teléfono: ${error.data.contactAlternatives.phone}`;
            }
          }
        } else if (error.status === 400) {
          errorMessage = error.message || 'Datos del formulario no válidos. Por favor, revisa los campos.';
        } else if (error.status === 0) {
          errorMessage = 'No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.';
        } else {
          errorMessage = error.message || errorMessage;
        }
      }
      
      setSubmissionState({
        isSubmitting: false,
        submitSuccess: false,
        submitMessage: errorMessage
      });
      
      return false;
    }
  }
  
  function getSuccessMessage(formData: ContactFormData): string {
    // Different messages based on service priority
    if (formData.service === 'verifactu') {
      return '🚨 SOLICITUD VERIFACTU RECIBIDA - Respuesta garantizada en 2 horas. Un especialista en compliance te contactará inmediatamente.';
    } else if (formData.service === 'ia-local' || formData.service === 'audit') {
      return '🤖 SOLICITUD IA EMPRESARIAL RECIBIDA - Te contactaremos en 4 horas para agendar demo técnica personalizada.';
    } else {
      return '✅ SOLICITUD RECIBIDA CORRECTAMENTE - Te contactaremos en menos de 24 horas con una propuesta personalizada.';
    }
  }
  
  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validateName(name: string): boolean {
    return name.trim().length >= 2 && name.trim().length <= 100;
  }
  
  function validateMessage(message: string): boolean {
    return message.trim().length >= 10 && message.trim().length <= 2000;
  }
  
  function validateCompany(company: string): boolean {
    return !company || company.trim().length <= 100;
  }
  
  return {
    submitForm,
    validateEmail,
    validateName,
    validateMessage,
    validateCompany
  };
}
