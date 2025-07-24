// src/lib/stores/cookieConsent.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface CookieConsentSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

// Default settings
const defaultSettings: CookieConsentSettings = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: new Date().toISOString()
};

// Create the store
function createCookieConsentStore() {
  const { subscribe, set, update } = writable<CookieConsentSettings | null>(null);

  return {
    subscribe,
    
    // Initialize store from localStorage
    init: () => {
      if (browser) {
        const stored = localStorage.getItem('formeta-cookie-consent');
        if (stored) {
          try {
            const settings = JSON.parse(stored);
            set(settings);
            return settings;
          } catch (error) {
            console.warn('Error parsing cookie consent settings:', error);
            localStorage.removeItem('formeta-cookie-consent');
          }
        }
      }
      return null;
    },

    // Save consent settings
    saveConsent: (settings: Partial<CookieConsentSettings>) => {
      const fullSettings: CookieConsentSettings = {
        ...defaultSettings,
        ...settings,
        timestamp: new Date().toISOString()
      };
      
      if (browser) {
        localStorage.setItem('formeta-cookie-consent', JSON.stringify(fullSettings));
      }
      
      set(fullSettings);
      return fullSettings;
    },

    // Accept all cookies
    acceptAll: () => {
      const settings = {
        necessary: true,
        analytics: true,
        marketing: false, // Marketing cookies still need explicit opt-in for Spanish law
        timestamp: new Date().toISOString()
      };
      
      if (browser) {
        localStorage.setItem('formeta-cookie-consent', JSON.stringify(settings));
      }
      
      set(settings);
      return settings;
    },

    // Accept only necessary cookies
    acceptNecessary: () => {
      const settings = {
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString()
      };
      
      if (browser) {
        localStorage.setItem('formeta-cookie-consent', JSON.stringify(settings));
      }
      
      set(settings);
      return settings;
    },

    // Reject all non-necessary cookies
    rejectAll: () => {
      const settings = {
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString()
      };
      
      if (browser) {
        localStorage.setItem('formeta-cookie-consent', JSON.stringify(settings));
      }
      
      set(settings);
      return settings;
    },

    // Check if consent is needed
    needsConsent: (): boolean => {
      if (!browser) return false;
      
      const stored = localStorage.getItem('formeta-cookie-consent');
      if (!stored) return true;
      
      try {
        const settings = JSON.parse(stored);
        const consentDate = new Date(settings.timestamp);
        const now = new Date();
        const monthsAgo = new Date(now.setMonth(now.getMonth() - 12));
        
        // Consent expires after 12 months (Spanish law requirement)
        return consentDate < monthsAgo;
      } catch (error) {
        return true;
      }
    },

    // Clear consent (for testing or privacy settings reset)
    clearConsent: () => {
      if (browser) {
        localStorage.removeItem('formeta-cookie-consent');
      }
      set(null);
    },

    // Check if specific cookie type is allowed
    isAllowed: (cookieType: keyof Omit<CookieConsentSettings, 'timestamp'>): boolean => {
      if (!browser) return false;
      
      const stored = localStorage.getItem('formeta-cookie-consent');
      if (!stored) return false;
      
      try {
        const settings = JSON.parse(stored);
        return settings[cookieType] === true;
      } catch (error) {
        return false;
      }
    }
  };
}

export const cookieConsent = createCookieConsentStore();

// Helper functions for analytics integration
export const canUseAnalytics = (): boolean => {
  if (!browser) return false;
  return cookieConsent.isAllowed('analytics');
};

export const canUseMarketing = (): boolean => {
  if (!browser) return false;
  return cookieConsent.isAllowed('marketing');
};

// Initialize Google Analytics only if consent is given
export const initAnalytics = () => {
  if (canUseAnalytics()) {
    // Initialize Google Analytics or other analytics tools here
    console.log('Analytics initialized with user consent');
    
    // Example Google Analytics initialization:
    // gtag('config', 'GA_MEASUREMENT_ID');
  }
};

// GDPR/LOPD compliance utilities
export const getConsentRecord = () => {
  if (!browser) return null;
  
  const stored = localStorage.getItem('formeta-cookie-consent');
  if (!stored) return null;
  
  try {
    const settings = JSON.parse(stored);
    return {
      ...settings,
      userAgent: navigator.userAgent,
      ipAddress: '[Not stored for privacy]', // IP should be anonymized
      consentMethod: 'explicit',
      legalBasis: 'consent',
      dataController: 'Formeta Labs S.L.',
      retentionPeriod: '12 months'
    };
  } catch (error) {
    return null;
  }
};