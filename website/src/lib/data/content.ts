export const services = [
  {
    id: 'gestion-empresarial',
    title: 'Gestión Empresarial',
    description: 'Soluciones completas de ERP y CRM adaptadas a tu negocio',
    icon: 'Building',
    features: [
      'Gestión de clientes y ventas',
      'Control de inventario',
      'Facturación automática',
      'Reporting y análisis',
      'Integración con sistemas existentes'
    ],
    technologies: ['SvelteKit', 'PostgreSQL', 'Docker', 'Traefik']
  },
  {
    id: 'digitalizacion',
    title: 'Digitalización',
    description: 'Transformación digital completa de procesos empresariales',
    icon: 'FileDigit',
    features: [
      'Digitalización de documentos',
      'Automatización de procesos',
      'Workflow management',
      'Archivo digital seguro',
      'Búsqueda inteligente'
    ],
    technologies: ['Paperless-NGX', 'OCR', 'AI/ML', 'Cloud Storage']
  },
  {
    id: 'automatizacion',
    title: 'Automatización',
    description: 'Automatización de procesos y flujos de trabajo',
    icon: 'Zap',
    features: [
      'Automatización de tareas',
      'Integración entre sistemas',
      'Notificaciones automáticas',
      'Procesos programados',
      'Monitoring y alertas'
    ],
    technologies: ['n8n', 'Zapier', 'APIs', 'Webhooks']
  },
  {
    id: 'verifactu',
    title: 'VeriFactu',
    description: 'Sistema de verificación de facturas conforme a normativa',
    icon: 'Shield',
    features: [
      'Verificación automática AEAT',
      'Cumplimiento normativo',
      'Trazabilidad completa',
      'Reporting oficial',
      'Integración con sistemas de facturación'
    ],
    technologies: ['API AEAT', 'Certificados digitales', 'XML/JSON']
  },
  {
    id: 'consultoria',
    title: 'Consultoría IT',
    description: 'Asesoramiento tecnológico y estratégico',
    icon: 'Target',
    features: [
      'Análisis de necesidades',
      'Arquitectura de soluciones',
      'Migración de sistemas',
      'Optimización de procesos',
      'Formación y soporte'
    ],
    technologies: ['Metodologías ágiles', 'DevOps', 'Cloud', 'Security']
  },
  {
    id: 'hosting-cloud',
    title: 'Hosting & Cloud',
    description: 'Infraestructura segura y escalable',
    icon: 'Cloud',
    features: [
      'Hosting web profesional',
      'Servidores dedicados',
      'Backup automático',
      'Certificados SSL',
      'Monitoreo 24/7'
    ],
    technologies: ['Proxmox', 'Docker', 'Traefik', 'Cloudflare']
  }
];

export const testimonials = [
  {
    name: 'María González',
    company: 'Empresa Ejemplo S.L.',
    role: 'Directora General',
    content: 'Formeta transformó completamente nuestra gestión empresarial. El sistema es intuitivo y nos ha ahorrado horas de trabajo manual.',
    rating: 5
  },
  {
    name: 'Carlos Ruiz',
    company: 'Industrias Tech',
    role: 'CTO',
    content: 'La automatización de procesos que implementó Formeta nos permitió reducir errores en un 90% y mejorar la eficiencia operativa.',
    rating: 5
  },
  {
    name: 'Ana López',
    company: 'Consultora Digital',
    role: 'CEO',
    content: 'El soporte técnico es excepcional y la plataforma se adapta perfectamente a nuestras necesidades específicas.',
    rating: 5
  }
];

export const stats = [
  { value: '150+', label: 'Clientes Satisfechos' },
  { value: '99.9%', label: 'Uptime Garantizado' },
  { value: '24/7', label: 'Soporte Técnico' },
  { value: '5 años', label: 'Experiencia' }
];

export const blogPosts = [
  {
    id: 1,
    title: 'Cómo Implementar VeriFactu en tu Empresa',
    excerpt: 'Guía completa para cumplir con la nueva normativa de verificación de facturas de la AEAT.',
    category: 'Normativa',
    publishedAt: '2024-01-15',
    slug: 'como-implementar-verifactu',
    image: '/blog/verifactu-guide.jpg'
  },
  {
    id: 2,
    title: 'Automatización de Procesos: Casos de Éxito',
    excerpt: 'Descubre cómo nuestros clientes han optimizado sus procesos con n8n y automatización.',
    category: 'Automatización',
    publishedAt: '2024-01-10',
    slug: 'automatizacion-procesos-casos-exito',
    image: '/blog/automation-success.jpg'
  },
  {
    id: 3,
    title: 'Digitalización de Documentos: Mejores Prácticas',
    excerpt: 'Tips y estrategias para una digitalización eficiente con Paperless-NGX.',
    category: 'Digitalización',
    publishedAt: '2024-01-05',
    slug: 'digitalizacion-documentos-mejores-practicas',
    image: '/blog/digitalization-guide.jpg'
  }
];
