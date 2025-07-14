import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.smtp2go.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'formeta.es',
    pass: process.env.SMTP_PASSWORD || 'YOUR_SMTP2GO_API_KEY'
  }
});

export async function sendContactNotification(contactData: any) {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM || 'web@formeta.es',
      to: 'info@formeta.es',
      subject: `Nuevo contacto desde la web: ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nuevo Contacto desde la Web</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Información del Contacto</h3>
            <p><strong>Nombre:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.company ? `<p><strong>Empresa:</strong> ${contactData.company}</p>` : ''}
            ${contactData.phone ? `<p><strong>Teléfono:</strong> ${contactData.phone}</p>` : ''}
            ${contactData.serviceType ? `<p><strong>Servicio:</strong> ${contactData.serviceType}</p>` : ''}
            ${contactData.budgetRange ? `<p><strong>Presupuesto:</strong> ${contactData.budgetRange}</p>` : ''}
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Mensaje</h3>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;">
              <strong>Recordatorio:</strong> Responder en las próximas 24 horas para mantener la calidad del servicio.
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent successfully');
  } catch (error) {
    console.error('Error sending contact notification:', error);
    throw error;
  }
}

export async function sendContactConfirmation(contactData: any) {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM || 'web@formeta.es',
      to: contactData.email,
      subject: 'Confirmación de contacto - Formeta',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">Formeta</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Soluciones de Gestión Empresarial</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1f2937; margin-top: 0;">¡Gracias por contactarnos!</h2>
            
            <p style="color: #4b5563; line-height: 1.6;">
              Hola ${contactData.name},
            </p>
            
            <p style="color: #4b5563; line-height: 1.6;">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo en las próximas 24 horas.
            </p>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #1f2937; margin-top: 0;">Resumen de tu consulta:</h3>
              <p style="margin: 5px 0;"><strong>Servicio:</strong> ${contactData.serviceType || 'No especificado'}</p>
              <p style="margin: 5px 0;"><strong>Presupuesto:</strong> ${contactData.budgetRange || 'No especificado'}</p>
            </div>
            
            <p style="color: #4b5563; line-height: 1.6;">
              Mientras tanto, puedes visitar nuestro sitio web para conocer más sobre nuestros servicios.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://formeta.es" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visitar Formeta.es
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Formeta - Soluciones de Gestión Empresarial<br>
                Email: info@formeta.es | Teléfono: +34 900 000 000<br>
                <a href="https://formeta.es" style="color: #2563eb;">www.formeta.es</a>
              </p>
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending contact confirmation:', error);
    throw error;
  }
}
