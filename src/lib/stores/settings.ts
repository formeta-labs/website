import { writable } from 'svelte/store';
import { browser } from '$app/environment';

interface SiteSettings {
	siteName: string;
	siteDescription: string;
	contactEmail: string;
	maintenanceMode: boolean;
	allowRegistration: boolean;
	maxFileSize: number;
	enableNotifications: boolean;
	themeMode: 'light' | 'dark' | 'auto';
	defaultUserRole: 'user' | 'admin';
	sessionTimeout: number;
	enableAnalytics: boolean;
	analyticsId: string;
	enableDebugMode: boolean;
}

const defaultSettings: SiteSettings = {
	siteName: 'Formeta Intranet',
	siteDescription: 'Portal interno de Formeta Labs',
	contactEmail: 'admin@formeta.es',
	maintenanceMode: false,
	allowRegistration: false,
	maxFileSize: 10, // MB
	enableNotifications: true,
	themeMode: 'dark',
	defaultUserRole: 'user',
	sessionTimeout: 480, // minutes (8 hours)
	enableAnalytics: false,
	analyticsId: '',
	enableDebugMode: false
};

// Store para las configuraciones
export const siteSettings = writable<SiteSettings>(defaultSettings);

// Funciones para manejar las configuraciones
export function loadSettings(): SiteSettings {
	if (!browser) return defaultSettings;
	
	try {
		const saved = localStorage.getItem('formeta_site_settings');
		if (saved) {
			const parsed = JSON.parse(saved);
			const merged = { ...defaultSettings, ...parsed };
			siteSettings.set(merged);
			return merged;
		}
	} catch (error) {
		console.error('Error loading settings:', error);
	}
	
	return defaultSettings;
}

export function saveSettings(settings: SiteSettings): void {
	if (!browser) return;
	
	try {
		localStorage.setItem('formeta_site_settings', JSON.stringify(settings));
		siteSettings.set(settings);
		console.log('Settings saved successfully');
	} catch (error) {
		console.error('Error saving settings:', error);
		throw new Error('No se pudieron guardar las configuraciones');
	}
}

export function resetSettings(): void {
	if (!browser) return;
	
	try {
		localStorage.removeItem('formeta_site_settings');
		siteSettings.set(defaultSettings);
		console.log('Settings reset to defaults');
	} catch (error) {
		console.error('Error resetting settings:', error);
	}
}

export function exportSettings(): string {
	let currentSettings = defaultSettings;
	siteSettings.subscribe(value => currentSettings = value)();
	return JSON.stringify(currentSettings, null, 2);
}

export function importSettings(settingsJson: string): void {
	try {
		const imported = JSON.parse(settingsJson);
		const merged = { ...defaultSettings, ...imported };
		saveSettings(merged);
		console.log('Settings imported successfully');
	} catch (error) {
		console.error('Error importing settings:', error);
		throw new Error('Formato de configuración inválido');
	}
}

// Inicializar configuraciones al cargar
if (browser) {
	loadSettings();
}
