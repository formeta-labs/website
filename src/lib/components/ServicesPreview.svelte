<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ServiceModal from '$lib/components/ServiceModal.svelte';
	
	const dispatch = createEventDispatcher();
	
	let selectedService: any = null;
	let showModal = false;
	
	const services = [
		{
			id: 'web-development',
			title: 'Web Design/Development',
			icon: '▦',
			description: 'Desarrollo web moderno con tecnologías de vanguardia',
			shortDesc: 'Sitios web responsive y aplicaciones modernas',
			variants: [
				'Basic: estructura estática, responsive, HTML/CSS/JS',
				'Component: desarrollo modular con React y Tailwind',
				'Integration: integración con APIs y sistemas externos'
			],
			features: [
				'Diseño responsive y móvil-first',
				'Optimización SEO y rendimiento',
				'Integración con CMS y APIs',
				'Pixel art moderno y estética brutalista',
				'Hosting y mantenimiento incluido'
			]
		},
		{
			id: 'rag-mcp',
			title: 'RAG & MCP',
			icon: '●',
			description: 'Sistemas de gestión documental inteligente',
			shortDesc: 'Recuperación de información para empresas y PYMEs',
			variants: [
				'Implementación de sistemas RAG personalizados',
				'Integración MCP para gestión de contexto',
				'Procesamiento de documentos con IA'
			],
			features: [
				'Búsqueda semántica avanzada',
				'Procesamiento de documentos PDF/Word',
				'API REST para integración',
				'Dashboard de administración',
				'Análisis de contenido con IA'
			]
		},
		{
			id: 'automatizacion',
			title: 'Automatización de Procesos',
			icon: '▲',
			description: 'Flujos de trabajo automatizados para tu empresa',
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
			icon: '◆',
			description: 'Sistema unificado de compliance VeriFactu y CRM empresarial',
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

<section class="bg-formeta-gray pattern-grid section-spacing">
	<div class="container-formeta">
		<div class="text-center mb-12">
			<h2 class="text-36 font-bold text-formeta-white mb-6">
				NUESTROS <span class="text-gradient">SERVICIOS</span>
			</h2>
			<p class="text-16 text-formeta-light max-w-2xl mx-auto">
				Cuatro servicios principales diseñados para transformar tu empresa 
				con tecnología moderna y estética pixel art distintiva.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each services as service}
				<div class="service-card" on:click={() => openServiceModal(service)} on:keydown={(e) => e.key === 'Enter' && openServiceModal(service)} tabindex="0" role="button">
					<div class="service-icon text-formeta-action text-48 mb-4">
						{service.icon}
					</div>
					<h3 class="text-16 font-semibold text-formeta-white mb-3 uppercase tracking-pixel">
						{service.title}
					</h3>
					<p class="text-14 text-formeta-light mb-6 leading-relaxed">
						{service.shortDesc}
					</p>
					<button class="btn-service">
						VER DETALLES
					</button>
				</div>
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<a href="/servicios" class="btn-secondary">
				TODOS LOS SERVICIOS
			</a>
		</div>
	</div>
</section>

<!-- Service Modal -->
{#if showModal && selectedService}
	<ServiceModal service={selectedService} on:close={closeModal} />
{/if}

<style>
	.text-gradient {
		background: linear-gradient(180deg, #4A90E2 0%, #A78BFA 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	
	.pattern-grid {
		background-image: 
			linear-gradient(rgba(167, 139, 250, 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgba(167, 139, 250, 0.05) 1px, transparent 1px);
		background-size: 20px 20px;
	}
	
	.section-spacing {
		padding: 4rem 0;
	}
	
	@media (min-width: 768px) {
		.section-spacing {
			padding: 6rem 0;
		}
	}
	
	.container-formeta {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}
	
	@media (min-width: 768px) {
		.container-formeta {
			padding: 0 2rem;
		}
	}
	
	@media (min-width: 1024px) {
		.container-formeta {
			padding: 0 3rem;
		}
	}
	
	.service-card {
		background: rgba(26, 26, 26, 0.9);
		border: 2px solid #4A90E2;
		padding: 2rem 1.5rem;
		text-align: center;
		transition: all 0.2s ease;
		box-shadow: 4px 4px 0px rgba(74, 144, 226, 0.3);
		cursor: pointer;
	}
	
	.service-card:hover {
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0px rgba(74, 144, 226, 0.3);
		border-color: #007AFF;
	}
	
	.service-card:focus {
		outline: none;
		border-color: #007AFF;
		box-shadow: 6px 6px 0px rgba(74, 144, 226, 0.3), 0 0 0 2px #007AFF;
	}
	
	.service-icon {
		font-family: 'Geist Mono', monospace;
		font-weight: bold;
		margin-bottom: 1rem;
	}
	
	.btn-service {
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 12px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		border: 2px solid #007AFF;
		background: transparent;
		color: #007AFF;
		padding: 8px 16px;
		transition: all 0.1s ease;
		box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
	
	.btn-service:hover {
		background: #007AFF;
		color: white;
		transform: translate(-1px, -1px);
		box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.5);
	}
	
	.btn-secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 32px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		border: 2px solid #A78BFA;
		background: #A78BFA;
		color: white;
		transition: all 0.1s ease;
		box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
		text-decoration: none;
	}
	
	.btn-secondary:hover {
		transform: translate(-1px, -1px);
		box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);
	}
	
	.tracking-pixel {
		letter-spacing: 1.2px;
	}
	
	.text-36 {
		font-size: 36px;
		line-height: 1.2;
	}
	
	.text-48 {
		font-size: 48px;
		line-height: 1.1;
	}
	
	.text-16 {
		font-size: 16px;
		line-height: 1.5;
	}
	
	.text-14 {
		font-size: 14px;
		line-height: 1.4;
	}
</style>
