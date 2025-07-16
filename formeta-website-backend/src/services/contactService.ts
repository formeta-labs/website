// src/services/contactService.ts
import { prisma } from '../config/database';
import { Contact as PrismaContact } from '../generated/prisma';

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
  gdprConsent: boolean;
}

export interface ContactResponse {
  id: string;
  name: string;
  email: string;
  company?: string | null;
  position?: string | null;
  phone?: string | null;
  service?: string | null;
  projectType?: string | null;
  budget?: string | null;
  timeline?: string | null;
  priority?: string | null;
  message: string;
  gdprConsent: boolean;
  processed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class ContactService {
  async createContact(contactData: ContactRequest): Promise<ContactResponse> {
    const contact = await prisma.contact.create({
      data: {
        name: contactData.name,
        email: contactData.email,
        company: contactData.company || null,
        position: contactData.position || null,
        phone: contactData.phone || null,
        service: contactData.service || null,
        projectType: contactData.projectType || null,
        budget: contactData.budget || null,
        timeline: contactData.timeline || null,
        priority: contactData.priority || null,
        message: contactData.message,
        gdprConsent: contactData.gdprConsent,
        processed: false
      }
    });

    return contact;
  }

  async getAllContacts(): Promise<ContactResponse[]> {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return contacts;
  }

  async getContactById(id: string): Promise<ContactResponse | null> {
    const contact = await prisma.contact.findUnique({
      where: { id }
    });

    return contact;
  }

  async updateContact(id: string, updates: Partial<ContactRequest>): Promise<ContactResponse> {
    const contact = await prisma.contact.update({
      where: { id },
      data: {
        ...updates,
        updatedAt: new Date()
      }
    });

    return contact;
  }

  async markAsProcessed(id: string): Promise<ContactResponse> {
    const contact = await prisma.contact.update({
      where: { id },
      data: {
        processed: true,
        updatedAt: new Date()
      }
    });

    return contact;
  }

  async deleteContact(id: string): Promise<boolean> {
    try {
      await prisma.contact.delete({
        where: { id }
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async getContactStats(): Promise<{
    total: number;
    processed: number;
    pending: number;
    byService: Record<string, number>;
    byPriority: Record<string, number>;
  }> {
    const [total, processed, pending, byService, byPriority] = await Promise.all([
      prisma.contact.count(),
      prisma.contact.count({ where: { processed: true } }),
      prisma.contact.count({ where: { processed: false } }),
      prisma.contact.groupBy({
        by: ['service'],
        _count: { service: true },
        where: { service: { not: null } }
      }),
      prisma.contact.groupBy({
        by: ['priority'],
        _count: { priority: true },
        where: { priority: { not: null } }
      })
    ]);

    const serviceStats = byService.reduce((acc, item) => {
      if (item.service) {
        acc[item.service] = item._count.service;
      }
      return acc;
    }, {} as Record<string, number>);

    const priorityStats = byPriority.reduce((acc, item) => {
      if (item.priority) {
        acc[item.priority] = item._count.priority;
      }
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      processed,
      pending,
      byService: serviceStats,
      byPriority: priorityStats
    };
  }
}

export const contactService = new ContactService();
