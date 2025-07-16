import { Request, Response, NextFunction } from 'express';
import { ContactRequest, ContactResponse } from '../types/contact';
import emailService from '../services/emailService';
import { contactService } from '../services/contactService';
import * as csvWriter from 'csv-writer';
import path from 'path';
import fs from 'fs';

class ContactController {
  submitContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const contactData: ContactRequest = req.body;

      // Validar datos requeridos
      const validation = this.validateContactData(contactData);
      if (!validation.isValid) {
        res.status(400).json({
          success: false,
          message: validation.message,
        } as ContactResponse);
        return;
      }

      // Sanitizar datos
      const sanitizedData = this.sanitizeContactData(contactData);

      // Guardar contacto en base de datos
      const savedContact = await contactService.createContact({
        name: sanitizedData.name,
        email: sanitizedData.email,
        company: sanitizedData.company,
        position: sanitizedData.position,
        phone: sanitizedData.phone,
        service: sanitizedData.service,
        projectType: sanitizedData.projectType,
        budget: sanitizedData.budget,
        timeline: sanitizedData.timeline,
        priority: sanitizedData.priority,
        message: sanitizedData.message,
        gdprConsent: sanitizedData.gdprConsent || false
      });

      // Enviar email de notificación
      await emailService.sendNotificationEmail(sanitizedData);

      // Enviar email de confirmación (opcional, no bloquea si falla)
      try {
        await emailService.sendConfirmationEmail(sanitizedData);
      } catch (confirmationError) {
        console.warn('⚠️  Error enviando confirmación, pero el mensaje principal se envió:', confirmationError);
      }

      // Respuesta exitosa
      res.status(201).json({
        success: true,
        message: 'Mensaje enviado correctamente',
        data: {
          id: savedContact.id,
          timestamp: savedContact.createdAt
        }
      } as ContactResponse);

    } catch (error) {
      console.error('❌ Error in contact submission:', error);
      next(error);
    }
  };

  private validateContactData(data: ContactRequest): { isValid: boolean; message: string } {
    const { name, email, message } = data;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return { isValid: false, message: 'El nombre es requerido' };
    }

    if (!email || typeof email !== 'string' || !this.isValidEmail(email)) {
      return { isValid: false, message: 'El email debe ser válido' };
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return { isValid: false, message: 'El mensaje es requerido' };
    }

    if (name.length > 100) {
      return { isValid: false, message: 'El nombre no puede exceder 100 caracteres' };
    }

    if (message.length > 2000) {
      return { isValid: false, message: 'El mensaje no puede exceder 2000 caracteres' };
    }

    return { isValid: true, message: 'Datos válidos' };
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private sanitizeContactData(data: ContactRequest): ContactRequest {
    const sanitize = (str: string | undefined): string => {
      if (!str) return '';
      return str.trim().replace(/[<>]/g, '');
    };

    return {
      name: sanitize(data.name),
      email: sanitize(data.email),
      company: sanitize(data.company),
      position: sanitize(data.position),
      phone: sanitize(data.phone),
      service: sanitize(data.service),
      projectType: sanitize(data.projectType),
      budget: sanitize(data.budget),
      timeline: sanitize(data.timeline),
      priority: sanitize(data.priority),
      message: sanitize(data.message),
      gdprConsent: Boolean(data.gdprConsent)
    };
  }

  getAllContacts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const contacts = await contactService.getAllContacts();
      
      res.json({
        success: true,
        data: contacts,
        count: contacts.length
      });
    } catch (error) {
      console.error('❌ Error getting contacts:', error);
      next(error);
    }
  };

  getContactStats = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const stats = await contactService.getContactStats();
      
      res.json({
        success: true,
        data: stats
      });
    } catch (error) {
      console.error('❌ Error getting contact stats:', error);
      next(error);
    }
  };

  markContactAsProcessed = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const contact = await contactService.markAsProcessed(id);
      
      res.json({
        success: true,
        data: contact,
        message: 'Contact marked as processed'
      });
    } catch (error) {
      console.error('❌ Error marking contact as processed:', error);
      next(error);
    }
  };

  testEmailConnection = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const isConnected = await emailService.testConnection();
      
      res.json({
        success: isConnected,
        message: isConnected 
          ? 'Conexión SMTP funcionando correctamente' 
          : 'Error en la conexión SMTP',
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('❌ Error testing email connection:', error);
      next(error);
    }
  };

  exportContacts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { format = 'csv' } = req.query;
      const contacts = await contactService.getAllContacts();

      if (format === 'csv') {
        // Crear directorio temp si no existe
        const tempDir = path.join(__dirname, '../temp');
        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir, { recursive: true });
        }

        const csvWriterInstance = csvWriter.createObjectCsvWriter({
          path: path.join(tempDir, 'contacts.csv'),
          header: [
            { id: 'name', title: 'Nombre' },
            { id: 'email', title: 'Email' },
            { id: 'company', title: 'Empresa' },
            { id: 'position', title: 'Cargo' },
            { id: 'phone', title: 'Teléfono' },
            { id: 'service', title: 'Servicio' },
            { id: 'priority', title: 'Prioridad' },
            { id: 'message', title: 'Mensaje' },
            { id: 'processed', title: 'Procesado' },
            { id: 'createdAt', title: 'Fecha Creación' },
          ]
        });

        const records = contacts.map(contact => ({
          name: contact.name,
          email: contact.email,
          company: contact.company || '',
          position: contact.position || '',
          phone: contact.phone || '',
          service: contact.service || '',
          priority: contact.priority || '',
          message: contact.message,
          processed: contact.processed ? 'Sí' : 'No',
          createdAt: new Date(contact.createdAt).toLocaleDateString('es-ES'),
        }));

        await csvWriterInstance.writeRecords(records);
        
        const filePath = path.join(tempDir, 'contacts.csv');
        
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="contactos.csv"');
        
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
        
        fileStream.on('end', () => {
          try {
            fs.unlinkSync(filePath); // Eliminar archivo temporal
          } catch (err) {
            console.error('Error deleting temp file:', err);
          }
        });
      } else {
        res.json({
          success: true,
          data: contacts
        });
      }
    } catch (error) {
      console.error('❌ Error exporting contacts:', error);
      next(error);
    }
  };
}

export default new ContactController();
