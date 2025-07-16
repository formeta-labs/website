export interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  position?: string;
  phone?: string;
  service?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  priority?: string;
  message: string;
  gdprConsent?: boolean;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
  text?: string;
}
