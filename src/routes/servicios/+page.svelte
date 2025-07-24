<script lang="ts">
	import ServiceModal from '$lib/components/ServiceModal.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import SEO from '$lib/components/SEO.svelte';
	import { SEO_PAGES } from '$lib/utils/seo';
	
	let selectedService: any = null;
	let showModal = false;
	
	// Hero metrics animation
	const projects = tweened(0, { duration: 2000, easing: cubicOut });
	const satisfaction = tweened(0, { duration: 2000, easing: cubicOut });
	const industries = tweened(0, { duration: 2000, easing: cubicOut });
	const delivery = tweened(0, { duration: 2000, easing: cubicOut });
	
	// Initialize any browser-specific functionality
	onMount(() => {
		if (browser) {
			// Start metrics animation
			setTimeout(() => {
				projects.set(150);
				satisfaction.set(98.5);
				industries.set(12);
				delivery.set(95);
			}, 800);
		}
	});
	
	const services = [
		{
			id: 'web-development',
			title: 'Desarrollo Web Empresarial',
			subtitle: 'PROFESIONAL',
			icon: 'rocket',
			badgeColor: 'bg-green-600',
			description: 'Desarrollo full-stack moderno con SvelteKit, TypeScript y diseño profesional para máximo impacto visual y conversión empresarial',
			shortDesc: 'Full-stack empresarial + Diseño profesional + UX/UI avanzado',
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind', 'Docker', 'PostgreSQL'],
			features: [
				'SvelteKit + TypeScript full-stack',
				'Diseño empresarial moderno y profesional',
				'PWA y mobile-first responsive',
				'SEO avanzado y Core Web Vitals',
				'CI/CD automatizado con Docker',
				'Analytics y monitorización empresarial',
				'E-commerce y systems integration',
				'Mantenimiento y soporte empresarial 24/7'
			],
			metrics: {
				performance: '95+ Score',
				deployment: '< 70% TTM',
				mobile: '100% Responsive',
				seo: 'Optimized'
			},
			urgency: false,
			benefits: [
				'Sitios web únicos con identidad distintiva',
				'Performance superior y carga ultrarrápida',
				'Optimización SEO y conversión garantizada',
				'Escalabilidad enterprise y mantenimiento'
			],
			pricing: 'Desde 2.500€',
			implementation: '2-4 semanas',
			guarantee: 'Satisfacción garantizada o reembolso completo'
		},
		{
			id: 'rag-ia-local',
			title: 'Inteligencia Artificial Local',
			subtitle: 'EMPRESARIAL',
			icon: 'cpu',
			badgeColor: 'bg-purple-600',
			description: 'Sistemas de IA completamente locales con RAG y MCP Protocol para soberanía total de datos empresariales y cumplimiento GDPR',
			shortDesc: 'IA local empresarial + RAG + MCP Protocol - Sin dependencias cloud',
			techStack: ['Ollama', 'pgvector', 'RAG', 'MCP', 'Docker', 'TypeScript'],
			features: [
				'Procesamiento 100% local (sin dependencias cloud)',
				'RAG con vectorización avanzada de documentos',
				'MCP Protocol para integración empresarial segura',
				'Modelos Llama 3.1 optimizados para empresa',
				'Indexación automática de documentos corporativos',
				'API REST empresarial para integración',
				'Dashboard analytics de IA para management',
				'Escalabilidad horizontal y alta disponibilidad'
			],
			metrics: {
				processing: '100% Local',
				latency: '<200ms',
				accuracy: '94%',
				documents: '50k+'
			},
			urgency: false,
			benefits: [
				'Soberanía completa de datos empresariales',
				'Sin costes cloud recurrentes ni vendor lock-in',
				'Integración perfecta con sistemas existentes',
				'Performance y privacidad máxima garantizada'
			],
			pricing: 'Desde 4.500€',
			implementation: '3-6 semanas',
			guarantee: 'ROI positivo en 6 meses o mejoras gratuitas'
		},
		{
			id: 'vericrm',
			title: 'VeriCRM Enterprise',
			subtitle: 'PRODUCTIVIDAD',
			icon: 'dollar-sign',
			description: 'CRM enterprise con integración VeriFactu nativa para cumplimiento automático AEAT y gestión completa de clientes',
			shortDesc: 'CRM + VeriFactu AEAT + Facturación - Obligatorio 2026',
			techStack: ['SvelteKit', 'PostgreSQL', 'AEAT API', 'Docker', 'Prisma'],
			features: [
				'Integración directa API AEAT VeriFactu',
				'Gestión completa de clientes y leads',
				'Facturación automática con hash criptográfico',
				'Envío automático en tiempo real a AEAT',
				'Dashboard de compliance y auditoría',
				'Multi-tenant (SaaS ready)',
				'Reportes de cumplimiento normativo',
				'Soporte técnico especializado VeriFactu'
			],
			metrics: {
				compliance: '100%',
				accuracy: '99.95%',
				uptime: '99.9%',
				transactions: '1.2k+/día'
			},
			urgency: true,
			benefits: [
				'Cumplimiento VeriFactu automático y garantizado',
				'CRM enterprise con facturación integrada',
				'Sin sanciones AEAT - Tranquilidad total',
				'ROI inmediato por automatización de procesos'
			],
			pricing: 'Desde 3.500€',
			implementation: '48h para VeriFactu crítico',
			guarantee: 'Cumplimiento legal 100% o reembolso total'
		},
		{
			id: 'automatizaciones',
			title: 'Automatización Empresarial',
			subtitle: 'PRODUCTIVIDAD',
			icon: 'zap',
			badgeColor: 'bg-orange-600',
			description: 'Orquestación de procesos empresariales con n8n, reduciendo tiempos operativos y dependencia de desarrollos manuales',
			shortDesc: 'Automatización empresarial avanzada + Integración APIs + Workflows',
			techStack: ['n8n', 'Node.js', 'Docker', 'PostgreSQL', 'Webhooks'],
			features: [
				'Flujos visuales low-code con n8n',
				'Integración con APIs existentes',
				'Procesamiento automático de datos',
				'Notificaciones y alertas inteligentes',
				'Sincronización entre sistemas',
				'Escalabilidad horizontal garantizada',
				'Dashboard de monitorización',
				'Desarrollo y mantenimiento incluido'
			],
			metrics: {
				efficiency: '+80%',
				integration: '100+ APIs',
				uptime: '99.9%',
				deployment: '48h'
			},
			urgency: false,
			benefits: [
				'Reducción drástica de tareas manuales',
				'Integración perfecta entre herramientas',
				'ROI inmediato por eficiencia operativa',
				'Escalabilidad sin límites de crecimiento'
			],
			pricing: 'Desde 1.500€',
			implementation: '1-3 semanas',
			guarantee: 'Eficiencia +50% o optimización gratuita'
		}
	];
	
	function openServiceModal(service: any) {
		selectedService = service;
		showModal = true;
	}
	
	function closeModal() {
		showModal = false;
		selectedService = null;
	}
</script>

<!-- SEO optimizado para página de servicios -->
<SEO 
	title={SEO_PAGES.servicios.title}
	description={SEO_PAGES.servicios.description}
	keywords={SEO_PAGES.servicios.keywords}
	ogType={SEO_PAGES.servicios.ogType}
	ogImage="/images/og/formeta-labs-servicios.jpg"
/>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 overflow-hidden">
	<!-- Unique geometric overlay patterns -->
	<div class="absolute inset-0">
		<div class="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-purple-950/20"></div>
		<div class="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(59,130,246,0.1),transparent)] opacity-50"></div>
		<div class="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
	</div>
	
	<!-- Floating content indicator -->
	<div class="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
		<div class="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl shadow-2xl">
			<Icon name="layers" size={20} className="text-blue-400" />
			<span class="text-white font-mono text-sm font-semibold tracking-wide">SERVICIOS EMPRESARIALES</span>
			<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
		</div>
	</div>
	
	<!-- Dynamic ASCII art patterns -->
	<div class="absolute inset-0 font-mono text-blue-400/20 select-none pointer-events-none">
		<div class="absolute top-16 left-16 text-4xl animate-pulse">{'{ }'}</div>
		<div class="absolute top-32 right-20 text-3xl animate-bounce delay-1000">[ ]</div>
		<div class="absolute bottom-20 left-12 text-5xl animate-pulse delay-500">( )</div>
		<div class="absolute bottom-32 right-16 text-2xl animate-bounce delay-700">{'< >'}</div>
		<div class="absolute top-1/2 left-8 text-xl opacity-40">/// </div>
		<div class="absolute top-1/3 right-8 text-xl opacity-40"> ///</div>
	</div>
	
	<div class="relative container mx-auto px-6 text-center text-white z-10">
		<!-- Unique header design -->
		<div class="mb-10">
			<div class="flex items-center justify-center gap-4 mb-8">
				<span class="w-12 h-px bg-gradient-to-r from-transparent to-blue-400"></span>
				<span class="text-blue-300/80 text-sm font-mono font-medium tracking-[0.2em] uppercase">CATÁLOGO EMPRESARIAL</span>
				<span class="w-12 h-px bg-gradient-to-l from-transparent to-blue-400"></span>
			</div>
			
			<h1 class="text-6xl md:text-8xl font-bold mb-6 leading-none">
				<span class="text-white">Servicios</span>
				<span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Especializados</span>
			</h1>
			
			<div class="max-w-4xl mx-auto mb-8">
				<p class="text-xl md:text-2xl text-blue-200 font-medium mb-4 leading-relaxed">
					<strong>Cuatro pilares tecnológicos</strong> diseñados para empresas que buscan 
					<strong class="text-blue-400">excelencia digital</strong>
				</p>
				<p class="text-lg text-white/80 leading-relaxed">
					Desarrollo Web Avanzado • IA Empresarial Local • VeriCRM Compliance • Automatización Inteligente
				</p>
			</div>
		</div>
		
		<!-- Unique metrics design -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
					{Math.round($projects)}+
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Proyectos</div>
				<div class="text-xs text-white/60">Completados</div>
			</div>
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
					{$satisfaction.toFixed(1)}%
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Satisfacción</div>
				<div class="text-xs text-white/60">Cliente</div>
			</div>
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
					{Math.round($industries)}+
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Industrias</div>
				<div class="text-xs text-white/60">Atendidas</div>
			</div>
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
					{Math.round($delivery)}%
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Entrega</div>
				<div class="text-xs text-white/60">A tiempo</div>
			</div>
		</div>
		
		<!-- Unique CTA design -->
		<div class="flex flex-col sm:flex-row gap-6 justify-center mb-8">
			<a href="#servicios-grid" class="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
				<span class="flex items-center gap-3">
					EXPLORAR SERVICIOS
					<Icon name="arrow-down" size={16} className="group-hover:translate-y-1 transition-transform" />
				</span>
			</a>
			<a href="/contacto" class="group bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
				<span class="flex items-center gap-3">
					CONSULTA ESTRATÉGICA
					<Icon name="calendar" size={16} className="group-hover:rotate-12 transition-transform" />
				</span>
			</a>
		</div>
		
		<!-- Unique feature badges -->
		<div class="flex flex-wrap gap-4 justify-center">
			<div class="bg-gradient-to-r from-blue-600/20 to-blue-400/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 flex items-center gap-2">
				<Icon name="shield-check" size={16} className="text-blue-400" />
				<span class="text-sm font-medium text-blue-200">Enterprise Grade</span>
			</div>
			<div class="bg-gradient-to-r from-purple-600/20 to-purple-400/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 flex items-center gap-2">
				<Icon name="zap" size={16} className="text-purple-400" />
				<span class="text-sm font-medium text-purple-200">Implementación Rápida</span>
			</div>
			<div class="bg-gradient-to-r from-green-600/20 to-green-400/10 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 flex items-center gap-2">
				<Icon name="award" size={16} className="text-green-400" />
				<span class="text-sm font-medium text-green-200">Soporte 24/7</span>
			</div>
		</div>
	</div>
</section>

<!-- Services Grid -->
<section id="servicios-grid" class="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
	<!-- Glassmorphism background elements -->
	<div class="absolute inset-0">
		<div class="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/8 rounded-full blur-3xl"></div>
		<div class="absolute top-1/2 left-1/2 w-64 h-64 bg-green-400/6 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-6 shadow-lg">
				<Icon name="layers" size={20} className="text-formeta-primary" />
				<span class="text-sm font-medium text-formeta-primary font-semibold tracking-wide">CATÁLOGO EMPRESARIAL</span>
			</div>
			<h2 class="text-5xl font-extrabold text-formeta-text mb-6">Servicios Especializados</h2>
			<p class="text-lg text-formeta-secondary max-w-3xl mx-auto leading-relaxed">
				<strong class="text-formeta-primary">Cuatro pilares tecnológicos</strong> diseñados para empresas que buscan 
				excelencia digital y ventaja competitiva sostenible.
			</p>
		</div>
		
		<!-- Services Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
			{#each services as service, index}
				<div class="glass-card group relative overflow-hidden p-8 hover:scale-[1.02] transition-all duration-300">
					<!-- Enhanced glassmorphism background -->
					<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="absolute inset-0 border border-white/20 rounded-2xl"></div>
					

					
					<!-- Service Header -->
					<div class="relative z-10 text-center mb-6">
						<div class="w-20 h-20 bg-gradient-to-br from-formeta-primary/80 to-formeta-accent/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-sm border border-white/30">
							<Icon name={service.icon} size={40} className="text-white" />
						</div>
						<h3 class="text-2xl font-bold text-formeta-text mb-2 group-hover:text-formeta-primary transition-colors">
							{service.title}
						</h3>
						{#if service.subtitle}
							<span class="inline-block px-4 py-2 text-xs font-bold text-white rounded-full bg-gradient-to-r from-formeta-primary to-formeta-accent mb-3 shadow-lg backdrop-blur-sm">
								{service.subtitle}
							</span>
						{/if}
						<p class="text-formeta-secondary leading-relaxed">{service.shortDesc}</p>
					</div>
					
					<!-- Description -->
					<div class="relative z-10 mb-6">
						<p class="text-formeta-text leading-relaxed text-center">
							{service.description}
						</p>
					</div>
					
					<!-- Tech Stack -->
					<div class="relative z-10 mb-6">
						<div class="flex items-center gap-2 mb-3">
							<Icon name="code" size={16} className="text-formeta-primary" />
							<h4 class="text-sm font-bold text-formeta-text uppercase tracking-wide">Stack Tecnológico</h4>
						</div>
						<div class="flex flex-wrap gap-2">
							{#each service.techStack as tech}
								<span class="bg-white/30 text-formeta-primary px-3 py-1 rounded-lg text-sm font-medium hover:bg-white/40 transition-colors duration-200 backdrop-blur-sm border border-white/20 shadow-sm">
									{tech}
								</span>
							{/each}
						</div>
					</div>
					
					<!-- Key Features -->
					<div class="relative z-10 mb-6">
						<h4 class="text-sm font-bold text-formeta-text mb-3 uppercase tracking-wide flex items-center gap-2">
							<Icon name="check-circle" size={16} className="text-green-500" />
							Características Principales
						</h4>
						<ul class="space-y-2">
							{#each service.features.slice(0, 4) as feature}
								<li class="flex items-start gap-3">
									<div class="w-2 h-2 bg-formeta-primary rounded-full mt-2 flex-shrink-0"></div>
									<span class="text-sm text-formeta-text">{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
					
					<!-- Metrics -->
					<div class="relative z-10 mb-6">
						<h4 class="text-sm font-bold text-formeta-text mb-3 uppercase tracking-wide flex items-center gap-2">
							<Icon name="bar-chart" size={16} className="text-formeta-accent" />
							Métricas Clave
						</h4>
						<div class="grid grid-cols-2 gap-3">
							{#each Object.entries(service.metrics) as [key, value]}
								<div class="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-center border border-white/30 shadow-sm">
									<div class="text-lg font-bold text-formeta-primary">{value}</div>
									<div class="text-xs text-formeta-secondary uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
								</div>
							{/each}
						</div>
					</div>
					
					<!-- Benefits -->
					<div class="relative z-10 mb-6">
						<h4 class="text-sm font-bold text-formeta-text mb-3 uppercase tracking-wide flex items-center gap-2">
							<Icon name="award" size={16} className="text-orange-500" />
							Beneficios Empresariales
						</h4>
						<ul class="space-y-2">
							{#each service.benefits.slice(0, 3) as benefit}
								<li class="flex items-start gap-3">
									<Icon name="check-circle" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
									<span class="text-sm text-formeta-text">{benefit}</span>
								</li>
							{/each}
						</ul>
					</div>
					
					<!-- Pricing & Implementation -->
					<div class="relative z-10 mb-6 bg-white/15 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-lg">
						<div class="grid grid-cols-2 gap-4 text-center">
							<div>
								<div class="text-xl font-bold text-formeta-primary">{service.pricing}</div>
								<div class="text-xs text-formeta-secondary">Desde</div>
							</div>
							<div>
								<div class="text-xl font-bold text-formeta-accent">{service.implementation}</div>
								<div class="text-xs text-formeta-secondary">Implementación</div>
							</div>
						</div>
						<div class="mt-3 text-center">
							<div class="text-sm font-medium text-green-600 flex items-center justify-center gap-1">
								<Icon name="shield-check" size={14} />
								{service.guarantee}
							</div>
						</div>
					</div>
					
					<!-- Action Button -->
					<div class="relative z-10">
						<a 
							href={service.id === 'web-development' ? '/servicios/web-development' : 
								   service.id === 'rag-ia-local' ? '/servicios/rag-mcp' :
								   service.id === 'vericrm' ? '/servicios/verifactu-compliance' :
								   service.id === 'automatizaciones' ? '/servicios/automatizacion' : '/contacto'}
							class="group w-full bg-gradient-to-r from-formeta-primary to-formeta-accent hover:from-formeta-primary/90 hover:to-formeta-accent/90 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
						>
							<span>
								{#if service.urgency}
									Implementación Urgente
								{:else}
									Ver Detalles y Precios
								{/if}
							</span>
							<Icon name="arrow-right" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
						</a>
					</div>
				</div>
			{/each}
		</div>
		
		<!-- Enterprise Value Proposition -->
		<div class="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 border border-blue-500/20 shadow-2xl relative overflow-hidden">
			<!-- Background pattern -->
			<div class="absolute inset-0 opacity-10">
				<div class="pattern-circuit h-full w-full"></div>
			</div>
			
			<!-- Floating elements -->
			<div class="absolute top-6 right-6 animate-pulse">
				<Icon name="star" size={48} className="text-blue-400/30" />
			</div>
			<div class="absolute bottom-6 left-6 animate-bounce">
				<Icon name="rocket" size={36} className="text-purple-400/30" />
			</div>
			
			<div class="relative z-10">
				<div class="text-center mb-12">
					<div class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 px-6 py-3 rounded-full mb-6">
						<Icon name="award" size={20} className="text-blue-400" />
						<span class="text-sm font-bold text-blue-300 uppercase tracking-wide">VENTAJA COMPETITIVA</span>
					</div>
					<h3 class="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
						¿Por qué elegir <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Formeta Labs</span>?
					</h3>
					<p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Experiencia empresarial, tecnología de vanguardia y resultados <strong class="text-blue-400">garantizados</strong> 
						para tu transformación digital
					</p>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<!-- Calidad Enterprise -->
					<div class="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 text-center">
						<div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
							<Icon name="shield-check" size={36} className="text-white" />
						</div>
						<h4 class="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
							Calidad Enterprise
						</h4>
						<p class="text-gray-300 leading-relaxed text-sm">
							Estándares profesionales y código mantenible a largo plazo con arquitectura escalable
						</p>
						
						<!-- Metrics indicator -->
						<div class="mt-4 bg-green-500/20 rounded-lg p-3">
							<div class="text-2xl font-black text-green-400 mb-1">99.8%</div>
							<div class="text-xs text-green-300 uppercase tracking-wide">Uptime garantizado</div>
						</div>
					</div>
					
					<!-- Implementación Rápida -->
					<div class="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 text-center">
						<div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
							<Icon name="zap" size={36} className="text-white" />
						</div>
						<h4 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
							Implementación Express
						</h4>
						<p class="text-gray-300 leading-relaxed text-sm">
							Metodología ágil con entregas incrementales y feedback continuo para resultados inmediatos
						</p>
						
						<!-- Metrics indicator -->
						<div class="mt-4 bg-blue-500/20 rounded-lg p-3">
							<div class="text-2xl font-black text-blue-400 mb-1">48h</div>
							<div class="text-xs text-blue-300 uppercase tracking-wide">Tiempo mínimo</div>
						</div>
					</div>
					
					<!-- Soporte 24/7 -->
					<div class="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 text-center">
						<div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
							<Icon name="headphones" size={36} className="text-white" />
						</div>
						<h4 class="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
							Soporte Especializado
						</h4>
						<p class="text-gray-300 leading-relaxed text-sm">
							Equipo técnico senior disponible 24/7 con expertise en tu sector y tecnologías
						</p>
						
						<!-- Metrics indicator -->
						<div class="mt-4 bg-purple-500/20 rounded-lg p-3">
							<div class="text-2xl font-black text-purple-400 mb-1">24/7</div>
							<div class="text-xs text-purple-300 uppercase tracking-wide">Disponibilidad</div>
						</div>
					</div>
					
					<!-- ROI Garantizado -->
					<div class="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105 text-center">
						<div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
							<Icon name="trending-up" size={36} className="text-white" />
						</div>
						<h4 class="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
							ROI Garantizado
						</h4>
						<p class="text-gray-300 leading-relaxed text-sm">
							Métricas claras y resultados medibles con garantía de retorno de inversión positivo
						</p>
						
						<!-- Metrics indicator -->
						<div class="mt-4 bg-orange-500/20 rounded-lg p-3">
							<div class="text-2xl font-black text-orange-400 mb-1">350%</div>
							<div class="text-xs text-orange-300 uppercase tracking-wide">ROI promedio</div>
						</div>
					</div>
				</div>
				
				<!-- Bottom CTA -->
				<div class="text-center mt-12">
					<div class="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
						<p class="text-white mb-4">
							<strong>Más de 150+ empresas</strong> han transformado su negocio con nuestras soluciones
						</p>
						<div class="flex flex-wrap gap-3 justify-center">
							<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-gray-300">
								✓ Garantía de satisfacción 100%
							</div>
							<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-gray-300">
								✓ Soporte técnico incluido
							</div>
							<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-gray-300">
								✓ Escalabilidad empresarial
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



<!-- Enterprise Solutions CTA -->
<section class="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
	<!-- Animated background -->
	<div class="absolute inset-0 opacity-20">
		<div class="pattern-circuit h-full w-full animate-pulse"></div>
	</div>
	
	<!-- Floating tech elements -->
	<div class="absolute top-12 left-12 animate-float">
		<Icon name="settings" size={72} className="text-blue-400/30" />
	</div>
	<div class="absolute top-20 right-20 animate-pulse">
		<Icon name="cpu" size={48} className="text-purple-400/30" />
	</div>
	<div class="absolute bottom-12 left-20 animate-bounce">
		<Icon name="rocket" size={60} className="text-blue-500/30" />
	</div>
	<div class="absolute bottom-20 right-12 animate-ping">
		<Icon name="star" size={36} className="text-purple-500/30" />
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full mb-8">
				<Icon name="cpu" size={24} className="text-blue-400" />
				<span class="text-lg font-bold uppercase tracking-wide">SOLUCIONES ENTERPRISE</span>
				<Icon name="cpu" size={24} className="text-purple-400" />
			</div>
			
			<h2 class="text-5xl md:text-7xl font-black mb-8 leading-tight">
				¿Necesitas una solución <br>
				<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">personalizada</span>?
			</h2>
			
			<p class="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto text-gray-300">
				Cada empresa tiene desafíos únicos. Desarrollamos soluciones a medida que se adaptan 
				específicamente a tus procesos de negocio y requisitos técnicos más exigentes.
			</p>
		</div>
		
		<!-- Enterprise Services Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
			<!-- Technical Consultation -->
			<div class="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
				<div class="flex items-center gap-4 mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
						<Icon name="brain" size={32} className="text-white" />
					</div>
					<div>
						<h3 class="text-3xl font-bold text-white">Consulta Técnica Avanzada</h3>
						<p class="text-blue-300 font-medium">Análisis profundo y roadmap estratégico</p>
					</div>
				</div>
				
				<div class="space-y-6 mb-8">
					<div>
						<h4 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
							<Icon name="search" size={20} className="text-blue-400" />
							Auditoría Técnica Completa
						</h4>
						<ul class="space-y-2 text-gray-300">
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Auditoría completa de sistemas existentes y arquitectura</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Assessment detallado de cumplimiento VeriFactu y normativas</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Roadmap de digitalización y transformación tecnológica</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Análisis ROI detallado con métricas específicas</span>
							</li>
						</ul>
					</div>
					
					<div>
						<h4 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
							<Icon name="target" size={20} className="text-purple-400" />
							Estrategia Empresarial
						</h4>
						<ul class="space-y-2 text-gray-300">
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Plan de migración sin interrupciones de servicio</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Cronograma de implementación por fases</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Análisis de riesgos y plan de contingencia</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Presupuesto detallado y opciones de financiación</span>
							</li>
						</ul>
					</div>
				</div>
				
				<a 
					href="/contacto?servicio=consultoria"
					class="group/btn w-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
				>
					<Icon name="calendar" size={20} />
					<span>Solicitar Consulta Técnica</span>
					<Icon name="arrow-right" size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
				</a>
			</div>
			
			<!-- Enterprise Demo -->
			<div class="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
				<div class="flex items-center gap-4 mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
						<Icon name="monitor" size={32} className="text-white" />
					</div>
					<div>
						<h3 class="text-3xl font-bold text-white">Demo Enterprise en Vivo</h3>
						<p class="text-purple-300 font-medium">POC con datos reales de tu empresa</p>
					</div>
				</div>
				
				<div class="space-y-6 mb-8">
					<div>
						<h4 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
							<Icon name="play-circle" size={20} className="text-purple-400" />
							Demostración Interactiva
						</h4>
						<ul class="space-y-2 text-gray-300">
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Demo en vivo de todas las soluciones empresariales</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>POC (Proof of Concept) con tus datos y procesos reales</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Testing completo VeriFactu + IA Local integrada</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Simulación de workflows específicos de tu sector</span>
							</li>
						</ul>
					</div>
					
					<div>
						<h4 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
							<Icon name="file-text" size={20} className="text-blue-400" />
							Documentación Técnica
						</h4>
						<ul class="space-y-2 text-gray-300">
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Propuesta técnica detallada y personalizada</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Arquitectura de solución específica para tu empresa</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>SLA y garantías de rendimiento específicas</span>
							</li>
							<li class="flex items-start gap-3">
								<div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
								<span>Plan de soporte técnico 24/7 especializado</span>
							</li>
						</ul>
					</div>
				</div>
				
				<a 
					href="/contacto?servicio=demo"
					class="group/btn w-full bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
				>
					<Icon name="play" size={20} />
					<span>Agendar Demo Enterprise</span>
					<Icon name="arrow-right" size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
				</a>
			</div>
		</div>
		
		<!-- Guarantee & Support -->
		<div class="text-center">
			<div class="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-green-400/30">
				<div class="flex items-center justify-center gap-3 mb-4">
					<Icon name="shield-check" size={32} className="text-green-400" />
					<h3 class="text-2xl font-bold text-white">Garantía Enterprise Total</h3>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
					<div class="flex items-center gap-3">
						<Icon name="clock" size={20} className="text-blue-400 flex-shrink-0" />
						<span><strong class="text-white">Respuesta garantizada en 2 horas</strong> para consultas técnicas</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="users" size={20} className="text-purple-400 flex-shrink-0" />
						<span><strong class="text-white">Contacto directo</strong> con el equipo técnico senior</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="award" size={20} className="text-green-400 flex-shrink-0" />
						<span><strong class="text-white">Garantía de satisfacción 100%</strong> o devolución total</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Service Modal -->
{#if showModal && selectedService}
	<ServiceModal service={selectedService} on:close={closeModal} />
{/if}

<style>
	/* Pattern animations for modern backgrounds */
	.pattern-grid {
		background-image: 
			linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
		animation: patternShift 20s linear infinite;
	}
	
	.pattern-circuit {
		background-image: 
			radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 2px, transparent 2px),
			radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
		background-size: 30px 30px;
		animation: circuitPulse 8s ease-in-out infinite;
	}
	
	@keyframes patternShift {
		0% { background-position: 0 0; }
		100% { background-position: 20px 20px; }
	}
	
	@keyframes circuitPulse {
		0%, 100% { opacity: 0.3; }
		50% { opacity: 0.8; }
	}
	
	@keyframes floatSlow {
		0%, 100% { 
			transform: translateY(0px) rotate(0deg); 
		}
		33% { 
			transform: translateY(-8px) rotate(1deg); 
		}
		66% { 
			transform: translateY(-4px) rotate(-1deg); 
		}
	}
	
	.animate-float {
		animation: floatSlow 6s ease-in-out infinite;
	}
	
	/* Modern Glassmorphism Service Cards */
	.service-card-modern {
		background: rgba(248, 250, 252, 0.6);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(30, 41, 59, 0.08);
		border-radius: 20px;
		padding: 32px 24px;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
		cursor: pointer;
	}

	.service-card-modern::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(0, 122, 255, 0.03), rgba(255, 107, 107, 0.02));
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: -1;
	}

	.service-card-modern:hover {
		transform: translateY(-8px);
		border-color: rgba(0, 122, 255, 0.15);
		box-shadow: 
			0 24px 48px rgba(0, 0, 0, 0.1),
			0 0 0 1px rgba(0, 122, 255, 0.05),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.service-header {
		position: relative;
		z-index: 10;
		text-align: center;
	}

	.service-icon-container {
		display: flex;
		justify-content: center;
	}

	.service-icon {
		width: 64px;
		height: 64px;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 8px 16px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
	}

	.group:hover .service-icon {
		transform: rotate(5deg) scale(1.1);
		box-shadow: 
			0 12px 24px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.3);
	}

	.service-badge {
		display: inline-block;
		padding: 4px 12px;
		border-radius: 16px;
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: white;
		margin-top: 8px;
	}

	.service-description {
		position: relative;
		z-index: 10;
	}

	.tech-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 12px;
		font-size: 12px;
		font-weight: 500;
		background: rgba(0, 122, 255, 0.1);
		border: 1px solid rgba(0, 122, 255, 0.2);
		border-radius: 8px;
		color: #007AFF;
		transition: all 0.3s ease;
	}

	.tech-badge:hover {
		background: #007AFF;
		color: white;
		border-color: #007AFF;
		transform: translateY(-1px);
		box-shadow: 0 4px 8px rgba(0, 122, 255, 0.2);
	}

	.service-cta-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 16px 24px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
		background: rgba(0, 122, 255, 0.9);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(0, 122, 255, 0.3);
		border-radius: 12px;
		color: white;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 
			0 6px 12px rgba(0, 122, 255, 0.25),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		position: relative;
		z-index: 10;
	}

	.service-cta-button:hover {
		background: #007AFF;
		transform: translateY(-2px);
		box-shadow: 
			0 8px 16px rgba(0, 122, 255, 0.35),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
	}

	.pattern-circuits {
		background-image: 
			linear-gradient(45deg, transparent 35%, rgba(255, 255, 255, 0.03) 35%, rgba(255, 255, 255, 0.03) 65%, transparent 65%),
			linear-gradient(-45deg, transparent 35%, rgba(255, 255, 255, 0.02) 35%, rgba(255, 255, 255, 0.02) 65%, transparent 65%);
		background-size: 30px 30px;
		animation: circuitPulse 4s ease-in-out infinite;
	}
	
	/* Mobile responsive improvements */
	@media (max-width: 768px) {
		.service-card-modern {
			padding: 24px 20px;
			border-radius: 16px;
		}
		
		.service-icon {
			width: 56px;
			height: 56px;
		}
		
		.service-cta-button {
			padding: 14px 20px;
			font-size: 13px;
		}
		
		.tech-badge {
			padding: 4px 8px;
			font-size: 11px;
		}
	}

	/* Professional Floating Indicator for Services */
	.floating-indicator-services {
		position: absolute;
		top: 120px;
		right: 80px;
		z-index: 20;
		animation: floatSlow 6s ease-in-out infinite;
	}

	@media (max-width: 1024px) {
		.floating-indicator-services {
			top: 100px;
			right: 40px;
		}
	}

	@media (max-width: 768px) {
		.floating-indicator-services {
			display: none;
		}
	}

	.pattern-dots {
		background-image: radial-gradient(circle, rgba(74, 144, 226, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
		animation: patternMove 20s linear infinite;
	}
	
	@keyframes patternMove {
		0% { background-position: 0 0; }
		100% { background-position: 20px 20px; }
	}
	
	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.pattern-grid,
		.pattern-circuit,
		.animate-float,
		.service-card-modern,
		.service-icon,
		.service-cta-button,
		.tech-badge,
		.pattern-dots,
		.pattern-circuits,
		.floating-indicator-services {
			animation: none;
			transition: none;
		}
		
		.group:hover .service-icon,
		.service-card-modern:hover,
		.service-cta-button:hover,
		.tech-badge:hover {
			transform: none;
		}
	}
</style>
