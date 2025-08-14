<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ServiceModal from '$lib/components/ServiceModal.svelte';
	import Icon from '$lib/components/Icon.svelte';
	
	const dispatch = createEventDispatcher();
	
	let selectedService: any = null;
	let showModal = false;
	
	const services = [
		{
			id: 'web-development',
			title: 'Web Development',
			icon: 'code',
			iconColor: 'text-formeta-primary',
			gradient: 'from-formeta-primary to-formeta-secondary',
			description: 'Desarrollo web moderno con tecnologías de vanguardia para empresas',
			shortDesc: 'Sitios web responsive y aplicaciones enterprise modernas',
			pricing: 'desde 2.500€',
			timeline: '2-6 semanas',
			variants: [
				'Basic: estructura estática, responsive, HTML/CSS/JS',
				'Component: desarrollo modular con SvelteKit y Tailwind',
				'Integration: integración con APIs y sistemas externos'
			],
			features: [
				'Diseño responsive y móvil-first',
				'Optimización SEO y rendimiento Web Vitals',
				'Integración con CMS y APIs REST/GraphQL',
				'Glassmorphism moderno y estética empresarial',
				'Hosting, SSL y mantenimiento incluido'
			]
		},
		{
			id: 'rag-mcp',
			title: 'IA & RAG Systems',
			icon: 'cpu',
			iconColor: 'text-formeta-accent',
			gradient: 'from-formeta-accent to-formeta-primary',
			description: 'Sistemas de IA local para gestión documental empresarial inteligente',
			shortDesc: 'Recuperación de información con IA para empresas y PYMEs',
			pricing: 'desde 4.500€',
			timeline: '3-8 semanas',
			variants: [
				'Implementación de sistemas RAG personalizados',
				'Integración MCP para gestión de contexto avanzado',
				'Procesamiento multimodal de documentos con IA'
			],
			features: [
				'Búsqueda semántica con embeddings locales',
				'Procesamiento de documentos PDF/Word/Excel',
				'API REST/GraphQL para integración enterprise',
				'Dashboard de administración con analytics',
				'IA completamente local - 100% soberanía de datos'
			]
		},
		{
			id: 'automatizacion',
			title: 'Automatización de Procesos',
			icon: 'settings',
			iconColor: 'text-formeta-secondary',
			gradient: 'from-formeta-secondary to-formeta-accent',
			description: 'Flujos de trabajo automatizados para tu empresa',
			pricing: 'desde 1.800€',
			timeline: '2-4 semanas',
			shortDesc: 'Reportes, emails y procesos repetitivos automatizados',
			variants: [
				'Generación automática de reportes semanales',
				'Envíos de correos automáticos personalizados',
				'Flujos de trabajo con n8n y webhooks'
			],
			features: [
				'Integración con Gmail y servicios de email',
				'Reportes automáticos en PDF',
				'Notificaciones inteligentes',
				'Dashboard de monitoreo',
				'APIs personalizadas para integración'
			]
		},
		{
			id: 'verifactu-crm',
			title: 'VeriFactu & CRM',
			icon: 'shield',
			iconColor: 'text-green-500',
			gradient: 'from-green-500 to-formeta-primary',
			description: 'Sistema unificado de compliance VeriFactu y CRM empresarial',
			pricing: 'desde 3.500€',
			timeline: '4-8 semanas',
			shortDesc: 'Compliance automático + gestión de clientes integrada',
			variants: [
				'Compliance VeriFactu completo',
				'CRM empresarial con automatización',
				'Sistema unificado de gestión'
			],
			features: [
				'Integración completa AEAT VeriFactu',
				'Gestión avanzada de clientes y ventas',
				'Automatización de procesos',
				'Facturación y compliance unificado',
				'Reportes y analytics empresariales'
			]
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

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
	{#each services as service}
		<div class="service-card-modern group" on:click={() => openServiceModal(service)} on:keydown={(e) => e.key === 'Enter' && openServiceModal(service)} tabindex="0" role="button">
			<div class="service-icon-container mb-6">
				<div class="service-icon {service.iconColor} bg-opacity-20" style="background-color: {service.iconColor === 'text-formeta-primary' ? '#007AFF' : service.iconColor === 'text-formeta-accent' ? '#FF6B6B' : service.iconColor === 'text-formeta-secondary' ? '#4ECDC4' : '#10B981'}">
					<Icon name={service.icon} size={24} className="text-white" />
				</div>
				<h3 class="text-heading font-bold text-formeta-text mt-4 group-hover:text-formeta-primary transition-colors">
					{service.title}
				</h3>
			</div>
			
			<p class="text-body-small text-formeta-text/80 mb-6 leading-relaxed">
				{service.shortDesc}
			</p>
			
			<div class="service-meta mb-6">
				<div class="flex justify-between items-center text-body-small">
					<span class="font-semibold text-formeta-primary">{service.pricing}</span>
					<span class="text-formeta-text/60">{service.timeline}</span>
				</div>
			</div>
			
			<button class="service-cta-button group/button w-full">
				<span>Ver Detalles</span>
				<Icon name="arrow-right" size={16} className="text-white/80 group-hover/button:translate-x-1 transition-transform" />
			</button>
		</div>
	{/each}
</div>

<div class="text-center mt-12">
	<a href="/servicios" class="btn-primary">
		Todos los Servicios
		<Icon name="arrow-right" size={16} className="ml-2" />
	</a>
</div>

<!-- Service Modal -->
{#if showModal && selectedService}
	<ServiceModal service={selectedService} on:close={closeModal} />
{/if}

<style>
	/* Service cards with modern glassmorphism */
	.service-card-modern {
		background: rgba(248, 250, 252, 0.6);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(30, 41, 59, 0.08);
		border-radius: 16px;
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
		transform: translateY(-6px);
		border-color: rgba(0, 122, 255, 0.15);
		box-shadow: 
			0 20px 40px rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(0, 122, 255, 0.05),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.service-card-modern:hover::before {
		opacity: 1;
	}
	
	.service-icon-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.service-icon {
		width: 56px;
		height: 56px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 8px 16px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
	}

	.group:hover .service-icon {
		transform: rotate(5deg) scale(1.1);
		box-shadow: 
			0 12px 24px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.3);
	}
	
	.service-meta {
		border-top: 1px solid rgba(30, 41, 59, 0.08);
		padding-top: 16px;
	}

	.service-cta-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 14px 24px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
		background: rgba(0, 122, 255, 0.1);
		border: 1px solid rgba(0, 122, 255, 0.2);
		border-radius: 8px;
		color: #007AFF;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.service-cta-button:hover {
		background: #007AFF;
		color: white;
		border-color: #007AFF;
		transform: translateY(-1px);
	}
	
	.btn-primary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 16px 32px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 16px;
		background: rgba(248, 250, 252, 0.8);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(0, 122, 255, 0.2);
		border-radius: 12px;
		color: #007AFF;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
	}

	.btn-primary:hover {
		background: #007AFF;
		color: white;
		border-color: #007AFF;
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 122, 255, 0.2);
	}
	
	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.service-card-modern,
		.service-icon,
		.service-cta-button,
		.btn-primary {
			animation: none;
			transition: none;
		}
		
		.group:hover .service-icon,
		.service-card-modern:hover,
		.service-cta-button:hover,
		.btn-primary:hover {
			transform: none;
		}
	}
	
	/* Mobile responsive improvements */
	@media (max-width: 768px) {
		.service-card-modern {
			padding: 24px 20px;
		}
		
		.service-icon {
			width: 48px;
			height: 48px;
		}
		
		.service-cta-button {
			padding: 12px 20px;
			font-size: 13px;
		}
	}
</style>
