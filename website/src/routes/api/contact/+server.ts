import { json } from '@sveltejs/kit';
import { prisma } from '$lib/server/db';
import { sendContactNotification, sendContactConfirmation } from '$lib/server/email';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return json({ error: 'Nombre, email y mensaje son requeridos' }, { status: 400 });
    }

    // Create contact form entry
    const contactForm = await prisma.contactForm.create({
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        phone: formData.phone || null,
        message: formData.message,
        serviceType: formData.serviceType || null,
        budgetRange: formData.budgetRange || null,
        status: 'pending'
      }
    });

    // Send email notifications
    try {
      await sendContactNotification(contactForm);
      await sendContactConfirmation(contactForm);
      console.log('Email notifications sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue with success response even if email fails
    }

    return json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      id: contactForm.id 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return json({ error: 'Error interno del servidor' }, { status: 500 });
  }
};
