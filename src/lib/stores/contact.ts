// src/lib/stores/contact.ts
import { writable } from 'svelte/store';
import type { ContactFormData, ContactResponse } from '../types/contact';

export interface ContactFormState {
  isSubmitting: boolean;
  submitMessage: string;
  submitSuccess: boolean;
  lastSubmissionId?: string;
}

export const contactFormState = writable<ContactFormState>({
  isSubmitting: false,
  submitMessage: '',
  submitSuccess: false,
  lastSubmissionId: undefined
});

export const contactFormData = writable<ContactFormData>({
  name: '',
  email: '',
  company: '',
  position: '',
  phone: '',
  service: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  priority: 'normal',
  gdprConsent: false
});

// Helper functions
export function resetContactForm() {
  contactFormData.set({
    name: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    priority: 'normal',
    gdprConsent: false
  });
}

export function setSubmissionState(state: Partial<ContactFormState>) {
  contactFormState.update(current => ({
    ...current,
    ...state
  }));
}

export function clearSubmissionMessage() {
  contactFormState.update(current => ({
    ...current,
    submitMessage: '',
    submitSuccess: false
  }));
}
