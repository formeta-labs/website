import { writable } from 'svelte/store';

export interface NavigationItem {
  title: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

export const publicNavigation: NavigationItem[] = [
  { title: 'Inicio', href: '/' },
  { title: 'Servicios', href: '/servicios' },
  { title: 'Sobre Nosotros', href: '/nosotros' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contacto', href: '/contacto' },
];

export const dashboardNavigation: NavigationItem[] = [
  { title: 'Panel Principal', href: '/dashboard', icon: 'home' },
  { title: 'Herramientas', href: '/dashboard/tools', icon: 'tools' },
  { title: 'Proyectos', href: '/dashboard/projects', icon: 'folder' },
  { title: 'Configuración', href: '/dashboard/settings', icon: 'settings' },
];

export const toolsNavigation: NavigationItem[] = [
  { title: 'Vikunja', href: 'https://vikunja.formeta.es', icon: 'check-square' },
  { title: 'n8n', href: 'https://n8n.formeta.es', icon: 'zap' },
  { title: 'Paperless', href: 'https://paperless.formeta.es', icon: 'file-text' },
  { title: 'Bitwarden', href: 'https://bitwarden.formeta.es', icon: 'lock' },
  { title: 'Form.io', href: 'https://formio.formeta.es', icon: 'edit' },
  { title: 'Linkwarden', href: 'https://linkwarden.formeta.es', icon: 'bookmark' },
  { title: 'Grafana', href: 'https://grafana.formeta.es', icon: 'bar-chart' },
  { title: 'Matomo', href: 'https://matomo.formeta.es', icon: 'trending-up' },
  { title: 'Ollama', href: 'https://ollama.formeta.es', icon: 'cpu' },
  { title: 'Lobechat', href: 'https://lobechat.formeta.es', icon: 'message-circle' },
];

export const currentPage = writable<string>('/');
