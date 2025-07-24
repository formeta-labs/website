// src/lib/types/contact.ts

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  service: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  priority: 'normal' | 'urgent';
  gdprConsent: boolean;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
}

export interface ContactApiData {
  name: string;
  email: string;
  company?: string;
  message: string;
}
