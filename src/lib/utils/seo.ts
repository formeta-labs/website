// src/lib/utils/seo.ts
import type { ComponentType } from 'svelte';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export interface JSONLDData {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: any;
}

// Configuración base de la empresa
export const SITE_CONFIG = {
  name: 'Formeta Labs',
  url: 'https://formetalabs.com',
  description: 'Especialistas en automatización empresarial, desarrollo web y cumplimiento VeriFactu. Soluciones de IA para empresas.',
  author: 'Formeta Labs',
  social: {
    twitter: '@formetalabs',
    linkedin: 'https://linkedin.com/company/formetalabs'
  },
  contact: {
    email: 'contacto@formetalabs.com',
    phone: '+34 XXX XXX XXX',
    address: {
      streetAddress: 'Calle Principal, 123',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      postalCode: '28001',
      addressCountry: 'ES'
    }
  },
  logo: '/images/loofo-formeta.svg',
  ogImage: '/images/og/formeta-labs-default.jpg'
} as const;

// Generar título optimizado para SEO
export function generateTitle(pageTitle?: string): string {
  if (!pageTitle) return SITE_CONFIG.name;
  return `${pageTitle} | ${SITE_CONFIG.name}`;
}

// Generar URL canónica
export function generateCanonical(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

// Generar Open Graph image URL
export function generateOGImage(imagePath?: string): string {
  if (!imagePath) return `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`;
  return imagePath.startsWith('http') ? imagePath : `${SITE_CONFIG.url}${imagePath}`;
}

// Schema.org Organization
export function generateOrganizationSchema(): JSONLDData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': SITE_CONFIG.name,
    'url': SITE_CONFIG.url,
    'description': SITE_CONFIG.description,
    'logo': `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': SITE_CONFIG.contact.email,
      'telephone': SITE_CONFIG.contact.phone,
      'contactType': 'customer service',
      'areaServed': 'ES',
      'availableLanguage': 'Spanish'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': SITE_CONFIG.contact.address.streetAddress,
      'addressLocality': SITE_CONFIG.contact.address.addressLocality,
      'addressRegion': SITE_CONFIG.contact.address.addressRegion,
      'postalCode': SITE_CONFIG.contact.address.postalCode,
      'addressCountry': SITE_CONFIG.contact.address.addressCountry
    },
    'sameAs': [
      SITE_CONFIG.social.linkedin
    ]
  };
}

// Schema.org LocalBusiness
export function generateLocalBusinessSchema(): JSONLDData {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': SITE_CONFIG.name,
    'description': SITE_CONFIG.description,
    'url': SITE_CONFIG.url,
    'telephone': SITE_CONFIG.contact.phone,
    'email': SITE_CONFIG.contact.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': SITE_CONFIG.contact.address.streetAddress,
      'addressLocality': SITE_CONFIG.contact.address.addressLocality,
      'addressRegion': SITE_CONFIG.contact.address.addressRegion,
      'postalCode': SITE_CONFIG.contact.address.postalCode,
      'addressCountry': SITE_CONFIG.contact.address.addressCountry
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '40.4168',
      'longitude': '-3.7038'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday', 
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '09:00',
      'closes': '18:00'
    }
  };
}

// Schema.org Service
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  category?: string;
}): JSONLDData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.description,
    'url': service.url,
    'provider': {
      '@type': 'Organization',
      'name': SITE_CONFIG.name,
      'url': SITE_CONFIG.url
    },
    'areaServed': 'ES',
    'availableLanguage': 'Spanish',
    ...(service.price && { 'offers': {
      '@type': 'Offer',
      'price': service.price,
      'priceCurrency': 'EUR'
    }}),
    ...(service.category && { 'serviceType': service.category })
  };
}

// Schema.org WebSite
export function generateWebSiteSchema(): JSONLDData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SITE_CONFIG.name,
    'url': SITE_CONFIG.url,
    'description': SITE_CONFIG.description,
    'publisher': {
      '@type': 'Organization',
      'name': SITE_CONFIG.name
    },
    'inLanguage': 'es-ES',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${SITE_CONFIG.url}/servicios?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

// Schema.org FAQ
export function generateFAQSchema(faqs: Array<{question: string; answer: string}>): JSONLDData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

// Schema.org BreadcrumbList
export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string; url: string}>): JSONLDData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

// Datos SEO predefinidos para páginas específicas
export const SEO_PAGES = {
  home: {
    title: 'Formeta Labs - Automatización Empresarial y Desarrollo Web',
    description: 'Especialistas en automatización empresarial, desarrollo web y cumplimiento VeriFactu. Soluciones de IA personalizadas para impulsar tu negocio.',
    keywords: 'automatización empresarial, desarrollo web, VeriFactu, IA empresarial, consultoría tecnológica, Madrid',
    ogType: 'website' as const
  },
  servicios: {
    title: 'Servicios de Tecnología Empresarial',
    description: 'Descubre nuestros servicios: VeriFactu, automatización con IA, desarrollo web y soluciones RAG/MCP para empresas.',
    keywords: 'servicios tecnológicos, VeriFactu, automatización IA, desarrollo web, RAG, MCP',
    ogType: 'website' as const
  },
  nosotros: {
    title: 'Sobre Formeta Labs - Expertos en Tecnología Empresarial',
    description: 'Conoce a Formeta Labs, tu socio tecnológico especializado en automatización empresarial y soluciones innovadoras.',
    keywords: 'sobre nosotros, equipo, experiencia, tecnología empresarial, automatización',
    ogType: 'website' as const
  },
  contacto: {
    title: 'Contacto - Formeta Labs',
    description: 'Contacta con Formeta Labs para transformar tu empresa con tecnología. Consultoría gratuita y soluciones personalizadas.',
    keywords: 'contacto, consultoría, presupuesto, automatización empresarial, desarrollo web',
    ogType: 'website' as const
  },
  verifactu: {
    title: 'Servicios VeriFactu - Cumplimiento Normativo Garantizado',
    description: 'Implementación y mantenimiento VeriFactu. Cumple la normativa con nuestro sistema automatizado y soporte especializado.',
    keywords: 'VeriFactu, cumplimiento normativo, facturación electrónica, AEAT, automatización fiscal',
    ogType: 'service' as const
  },
  automatizacion: {
    title: 'Automatización con IA - Optimiza tus Procesos Empresariales',
    description: 'Automatiza procesos empresariales con IA. Reduce costes, mejora eficiencia y transforma tu negocio con tecnología avanzada.',
    keywords: 'automatización IA, procesos empresariales, inteligencia artificial, eficiencia, optimización',
    ogType: 'service' as const
  },
  ragmcp: {
    title: 'Soluciones RAG y MCP - IA Conversacional Empresarial',
    description: 'Implementa sistemas RAG y MCP para mejorar la atención al cliente y gestión documental con IA conversacional avanzada.',
    keywords: 'RAG, MCP, IA conversacional, chatbots empresariales, gestión documental',
    ogType: 'service' as const
  },
  webdevelopment: {
    title: 'Desarrollo Web Profesional - Soluciones Digitales',
    description: 'Desarrollo web profesional con tecnologías modernas. Sitios web, aplicaciones y e-commerce optimizados para tu negocio.',
    keywords: 'desarrollo web, aplicaciones web, e-commerce, sitios web profesionales, SvelteKit, React',
    ogType: 'service' as const
  }
} as const;

export type SEOPageKey = keyof typeof SEO_PAGES;