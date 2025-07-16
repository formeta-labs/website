import * as nodemailer from 'nodemailer';
import { ContactRequest } from '../types/contact';

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = this.createTransporter();
  }

  private createTransporter(): nodemailer.Transporter {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
      },
    });
  }

  private generateContactEmailText(contactData: ContactRequest): string {
    return `
NUEVO CONTACTO DESDE EL SITIO WEB DE FORMETA

Nombre: ${contactData.name}
Email: ${contactData.email}
${contactData.company ? `Empresa: ${contactData.company}` : ''}

Mensaje:
${contactData.message}

---
Recibido el ${new Date().toLocaleDateString('es-ES', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
Enviado desde: ${process.env.FRONTEND_URL || 'http://localhost:5173'}
    `;
  }

  private generateConfirmationEmailText(contactData: ContactRequest): string {
    return `
¡Gracias por contactarnos!

Hola ${contactData.name},

Hemos recibido tu mensaje y queremos agradecerte por ponerte en contacto con nosotros.

Resumen de tu consulta:
- Nombre: ${contactData.name}
- Email: ${contactData.email}
${contactData.company ? `- Empresa: ${contactData.company}` : ''}
- Mensaje: "${contactData.message}"

Nuestro equipo revisará tu consulta y te responderemos lo antes posible.

Si tienes alguna pregunta urgente, no dudes en contactarnos directamente.

¡Gracias por tu interés en Formeta!

---
Formeta
📧 ${process.env.SMTP_FROM || 'info@formeta.es'}
🌐 ${process.env.FRONTEND_URL || 'http://localhost:5173'}
    `;
  }

  async sendNotificationEmail(contactData: ContactRequest): Promise<void> {
    // En desarrollo, simular el envío
    if (process.env.NODE_ENV === 'development') {
      console.log('🔄 MODO DESARROLLO - Simulando envío de email:');
      console.log('═══════════════════════════════════════════════════════════');
      console.log('📧 Email de notificación:');
      console.log(`   De: "Formeta Website" <${process.env.SMTP_FROM || 'info@formeta.es'}>`);
      console.log(`   Para: ${process.env.SMTP_TO || 'info@formeta.es'}`);
      console.log(`   Asunto: 🔔 Nuevo contacto de ${contactData.name}`);
      console.log('   Contenido:');
      console.log('');
      console.log(this.generateContactEmailText(contactData));
      console.log('═══════════════════════════════════════════════════════════');
      console.log('✅ Email simulado enviado exitosamente');
      return;
    }

    // En producción, enviar el email real
    const emailOptions = {
      from: `"Formeta Website" <${process.env.SMTP_FROM || 'info@formeta.es'}>`,
      to: process.env.SMTP_TO || 'info@formeta.es',
      subject: `🔔 Nuevo contacto de ${contactData.name}`,
      text: this.generateContactEmailText(contactData),
    };

    try {
      await this.transporter.sendMail(emailOptions);
      console.log(`✅ Email de contacto enviado exitosamente para: ${contactData.email}`);
    } catch (error) {
      console.error('❌ Error enviando email de contacto:', error);
      throw error;
    }
  }

  async sendConfirmationEmail(contactData: ContactRequest): Promise<void> {
    // En desarrollo, simular el envío
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 Email de confirmación:');
      console.log(`   De: "Formeta" <${process.env.SMTP_FROM || 'info@formeta.es'}>`);
      console.log(`   Para: ${contactData.email}`);
      console.log(`   Asunto: ✅ Hemos recibido tu mensaje - Formeta`);
      console.log('   Contenido:');
      console.log('');
      console.log(this.generateConfirmationEmailText(contactData));
      console.log('═══════════════════════════════════════════════════════════');
      console.log('✅ Email de confirmación simulado enviado exitosamente');
      return;
    }

    // En producción, enviar el email real
    const emailOptions = {
      from: `"Formeta" <${process.env.SMTP_FROM || 'info@formeta.es'}>`,
      to: contactData.email,
      subject: '✅ Hemos recibido tu mensaje - Formeta',
      text: this.generateConfirmationEmailText(contactData),
    };

    try {
      await this.transporter.sendMail(emailOptions);
      console.log(`✅ Email de confirmación enviado exitosamente para: ${contactData.email}`);
    } catch (error) {
      console.error('❌ Error enviando email de confirmación:', error);
      throw error;
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('✅ Conexión SMTP verificada exitosamente');
      return true;
    } catch (error) {
      console.error('❌ Error verificando conexión SMTP:', error);
      return false;
    }
  }
}

export default new EmailService();
