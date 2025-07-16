// src/lib/services/api.ts
import type { ContactFormData, ContactResponse } from '../types/contact';

const API_BASE_URL = 'http://localhost:3000/api';

export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: any,
    public data?: any
  ) {
    super(message);
    this.name = 'APIError';
    this.data = response || data; // Ensure data is available
  }
}

export class ContactService {
  private static instance: ContactService;
  
  private constructor() {}
  
  static getInstance(): ContactService {
    if (!ContactService.instance) {
      ContactService.instance = new ContactService();
    }
    return ContactService.instance;
  }
  
  async submitContact(formData: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || undefined,
          message: this.formatMessage(formData)
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new APIError(
          data.message || 'Error al enviar el formulario',
          response.status,
          data
        );
      }
      
      return data;
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      
      // Network or other errors
      throw new APIError(
        'Error de conexión. Por favor, inténtalo de nuevo.',
        0,
        error
      );
    }
  }
  
  private formatMessage(formData: ContactFormData): string {
    let message = formData.message;
    
    // Add structured information to the message
    const additionalInfo = [];
    
    if (formData.position) {
      additionalInfo.push(`Cargo: ${formData.position}`);
    }
    
    if (formData.phone) {
      additionalInfo.push(`Teléfono: ${formData.phone}`);
    }
    
    if (formData.service) {
      const serviceName = this.getServiceName(formData.service);
      additionalInfo.push(`Servicio: ${serviceName}`);
    }
    
    if (formData.projectType) {
      const projectTypeName = this.getProjectTypeName(formData.projectType);
      additionalInfo.push(`Tipo de proyecto: ${projectTypeName}`);
    }
    
    if (formData.budget) {
      const budgetName = this.getBudgetName(formData.budget);
      additionalInfo.push(`Presupuesto: ${budgetName}`);
    }
    
    if (formData.timeline) {
      const timelineName = this.getTimelineName(formData.timeline);
      additionalInfo.push(`Cronograma: ${timelineName}`);
    }
    
    if (formData.priority && formData.priority !== 'normal') {
      additionalInfo.push(`Prioridad: ${formData.priority.toUpperCase()}`);
    }
    
    if (additionalInfo.length > 0) {
      message += '\n\n--- Información adicional ---\n';
      message += additionalInfo.join('\n');
    }
    
    return message;
  }
  
  private getServiceName(serviceId: string): string {
    const serviceNames: Record<string, string> = {
      'verifactu': 'VeriFactu Compliance (CRÍTICO - 2025)',
      'ia-local': 'IA Empresarial Local (RAG + MCP)',
      'crm-enterprise': 'CRM Enterprise Multi-tenant',
      'web-development': 'Desarrollo Web Avanzado',
      'automation': 'Automatización de Procesos',
      'consulting': 'Consultoría Técnica',
      'audit': 'Auditoría Digital & Compliance',
      'custom': 'Proyecto Personalizado'
    };
    return serviceNames[serviceId] || serviceId;
  }
  
  private getProjectTypeName(typeId: string): string {
    const typeNames: Record<string, string> = {
      'new': 'Proyecto Nuevo',
      'upgrade': 'Actualización/Migración',
      'integration': 'Integración Sistemas',
      'consulting': 'Consultoría/Auditoría',
      'maintenance': 'Mantenimiento/Soporte'
    };
    return typeNames[typeId] || typeId;
  }
  
  private getBudgetName(budgetId: string): string {
    const budgetNames: Record<string, string> = {
      'startup': '< 5.000€ (Startup/PYME)',
      'professional': '5.000€ - 15.000€ (Profesional)',
      'enterprise': '15.000€ - 50.000€ (Enterprise)',
      'corporate': '> 50.000€ (Corporativo)',
      'consulting': 'Consulta presupuesto'
    };
    return budgetNames[budgetId] || budgetId;
  }
  
  private getTimelineName(timelineId: string): string {
    const timelineNames: Record<string, string> = {
      'urgent': 'Urgente (< 1 mes)',
      'fast': 'Rápido (1-3 meses)',
      'normal': 'Normal (3-6 meses)',
      'flexible': 'Flexible (> 6 meses)'
    };
    return timelineNames[timelineId] || timelineId;
  }
  
  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/test`);
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error testing API connection:', error);
      return false;
    }
  }
}

// Export singleton instance
export const contactService = ContactService.getInstance();
