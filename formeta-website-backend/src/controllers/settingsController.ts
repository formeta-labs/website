import { Request, Response } from 'express';
import { z } from 'zod';
import settingsService from '../services/settingsService';

// Validation schema for settings
const settingsSchema = z.object({
  smtp: z.object({
    host: z.string().min(1),
    port: z.number().int().min(1).max(65535),
    user: z.string().min(1),
    password: z.string().min(1),
    from: z.string().email(),
    to: z.string().email()
  }),
  system: z.object({
    siteName: z.string().min(1),
    maxContactsPerPage: z.number().int().min(5).max(100),
    enableRegistration: z.boolean(),
    maintenanceMode: z.boolean()
  })
});

class SettingsController {
  async getSettings(req: Request, res: Response) {
    try {
      const settings = await settingsService.getSettings();
      
      res.json({
        success: true,
        data: settings
      });
    } catch (error) {
      console.error('Error getting settings:', error);
      res.status(500).json({
        success: false,
        message: 'Error getting settings'
      });
    }
  }

  async updateSettings(req: Request, res: Response) {
    try {
      const validation = settingsSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({
          success: false,
          message: 'Invalid settings data',
          errors: validation.error.issues
        });
      }

      const settings = await settingsService.updateSettings(validation.data);
      
      res.json({
        success: true,
        data: settings,
        message: 'Settings updated successfully'
      });
    } catch (error) {
      console.error('Error updating settings:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating settings'
      });
    }
  }

  async getSystemStatus(req: Request, res: Response) {
    try {
      const status = await settingsService.getSystemStatus();
      
      res.json({
        success: true,
        data: status
      });
    } catch (error) {
      console.error('Error getting system status:', error);
      res.status(500).json({
        success: false,
        message: 'Error getting system status'
      });
    }
  }
}

export default new SettingsController();
