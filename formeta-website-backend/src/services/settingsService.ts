import fs from 'fs';
import path from 'path';
import { prisma } from '../config/database';

interface SMTPSettings {
  host: string;
  port: number;
  user: string;
  password: string;
  from: string;
  to: string;
}

interface SystemSettings {
  siteName: string;
  maxContactsPerPage: number;
  enableRegistration: boolean;
  maintenanceMode: boolean;
}

interface Settings {
  smtp: SMTPSettings;
  system: SystemSettings;
}

class SettingsService {
  private settingsFile = path.join(process.cwd(), 'settings.json');

  async getSettings(): Promise<Settings> {
    try {
      // Try to read from file first
      if (fs.existsSync(this.settingsFile)) {
        const data = fs.readFileSync(this.settingsFile, 'utf-8');
        return JSON.parse(data);
      }

      // Return default settings if file doesn't exist
      return this.getDefaultSettings();
    } catch (error) {
      console.error('Error reading settings:', error);
      return this.getDefaultSettings();
    }
  }

  async updateSettings(settings: Settings): Promise<Settings> {
    try {
      // Save to file
      fs.writeFileSync(this.settingsFile, JSON.stringify(settings, null, 2));
      
      // Update environment variables for SMTP
      process.env.SMTP_HOST = settings.smtp.host;
      process.env.SMTP_PORT = settings.smtp.port.toString();
      process.env.SMTP_USER = settings.smtp.user;
      process.env.SMTP_PASSWORD = settings.smtp.password;
      process.env.SMTP_FROM = settings.smtp.from;
      process.env.SMTP_TO = settings.smtp.to;

      return settings;
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error;
    }
  }

  async getSystemStatus() {
    try {
      const userCount = await prisma.user.count();
      const contactCount = await prisma.contact.count();
      const processedContacts = await prisma.contact.count({
        where: { processed: true }
      });

      return {
        users: userCount,
        contacts: contactCount,
        processedContacts,
        pendingContacts: contactCount - processedContacts,
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
        nodeVersion: process.version,
        environment: process.env.NODE_ENV || 'development'
      };
    } catch (error) {
      console.error('Error getting system status:', error);
      throw error;
    }
  }

  private getDefaultSettings(): Settings {
    return {
      smtp: {
        host: process.env.SMTP_HOST || 'mail.smtp2go.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        user: process.env.SMTP_USER || 'formeta',
        password: process.env.SMTP_PASSWORD || '',
        from: process.env.SMTP_FROM || 'info@formeta.es',
        to: process.env.SMTP_TO || 'correo_destino@formeta.es'
      },
      system: {
        siteName: 'Formeta Labs',
        maxContactsPerPage: 10,
        enableRegistration: false,
        maintenanceMode: false
      }
    };
  }
}

export default new SettingsService();
