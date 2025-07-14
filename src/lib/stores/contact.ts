import { writable } from 'svelte/store';

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  serviceType?: string;
  budgetRange?: string;
}

export const contactForm = writable<ContactForm>({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  serviceType: '',
  budgetRange: '',
});

export const formSubmissionStatus = writable<'idle' | 'submitting' | 'success' | 'error'>('idle');

export async function submitContactForm(formData: ContactForm) {
  formSubmissionStatus.set('submitting');
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      formSubmissionStatus.set('success');
      contactForm.set({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        serviceType: '',
        budgetRange: '',
      });
      return { success: true };
    } else {
      const error = await response.json();
      formSubmissionStatus.set('error');
      return { success: false, error: error.message };
    }
  } catch (error) {
    formSubmissionStatus.set('error');
    return { success: false, error: 'Error de conexión' };
  }
}
