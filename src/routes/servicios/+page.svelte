<script lang="ts">
	import ServiceModal from '$lib/components/ServiceModal.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let selectedService: any = null;
	let showModal = false;
	let particlesContainer: HTMLElement;
	let mouseX = 0;
	let mouseY = 0;
	
	// Parallax mouse tracking
	onMount(() => {
		if (browser) {
			// Mouse tracking for parallax effect
			const handleMouseMove = (e: MouseEvent) => {
				mouseX = (e.clientX - window.innerWidth / 2) / 100;
				mouseY = (e.clientY - window.innerHeight / 2) / 100;
			};
			
			// Create particle system
			createParticleSystem();
			
			window.addEventListener('mousemove', handleMouseMove);
			
			return () => {
				window.removeEventListener('mousemove', handleMouseMove);
			};
		}
	});
	
	function createParticleSystem() {
		if (!particlesContainer) return;
		
		const canvas = document.createElement('canvas');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.style.position = 'absolute';
		canvas.style.top = '0';
		canvas.style.left = '0';
		canvas.style.pointerEvents = 'none';
		canvas.style.zIndex = '1';
		particlesContainer.appendChild(canvas);
		
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		
		const particles: Array<{
			x: number;
			y: number;
			size: number;
			speedX: number;
			speedY: number;
			opacity: number;
			color: string;
		}> = [];
		
		// Create 30 particles
		for (let i = 0; i < 30; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * 3 + 1,
				speedX: (Math.random() - 0.5) * 0.5,
				speedY: (Math.random() - 0.5) * 0.5,
				opacity: Math.random() * 0.5 + 0.2,
				color: Math.random() > 0.5 ? 'rgba(74, 144, 226, ' : 'rgba(167, 139, 250, '
			});
		}
		
		function animate() {
			if (!ctx) return;
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			particles.forEach(particle => {
				particle.x += particle.speedX;
				particle.y += particle.speedY;
				
				// Bounce off edges
				if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
				if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
				
				// Draw particle as pixel square
				ctx.fillStyle = particle.color + particle.opacity + ')';
				ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
				
				// Draw connections between nearby particles
				particles.forEach(otherParticle => {
					const dx = particle.x - otherParticle.x;
					const dy = particle.y - otherParticle.y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					
					if (distance < 100) {
						ctx.strokeStyle = particle.color + (0.1 * (1 - distance / 100)) + ')';
						ctx.lineWidth = 1;
						ctx.beginPath();
						ctx.moveTo(particle.x, particle.y);
						ctx.lineTo(otherParticle.x, otherParticle.y);
						ctx.stroke();
					}
				});
			});
			
			requestAnimationFrame(animate);
		}
		
		animate();
		
		// Resize handler
		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		
		window.addEventListener('resize', handleResize);
	}
	
	const services = [
		{
			id: 'web-development',
			title: 'Desarrollo Web Avanzado',
			subtitle: 'READY',
			icon: 'rocket',
			badgeColor: 'bg-green-600',
			description: 'Desarrollo full-stack moderno con SvelteKit, TypeScript y diseño pixel art para máximo impacto visual y conversión',
			shortDesc: 'Full-stack moderno + Pixel Art + Enterprise UX',
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind', 'Docker', 'PostgreSQL'],
			features: [
				'SvelteKit + TypeScript full-stack',
				'Diseño pixel art moderno único',
				'PWA y mobile-first responsive',
				'SEO avanzado y Core Web Vitals',
				'CI/CD automatizado con Docker',
				'Analytics y monitorización',
				'E-commerce y payments integration',
				'Mantenimiento y soporte 24/7'
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
			title: 'RAG + IA Local',
			subtitle: 'ADVANCED',
			icon: 'cpu',
			badgeColor: 'bg-purple-600',
			description: 'Sistemas de IA completamente locales con RAG y MCP Protocol para soberanía total de datos empresariales',
			shortDesc: 'IA local + RAG + MCP Protocol - Sin dependencias cloud',
			techStack: ['Ollama', 'pgvector', 'RAG', 'MCP', 'Docker', 'TypeScript'],
			features: [
				'Procesamiento 100% local (sin cloud)',
				'RAG con vectorización de documentos',
				'MCP Protocol para integración empresarial',
				'Modelos Llama 3.1 optimizados',
				'Indexación automática de documentos',
				'API REST para integración',
				'Dashboard de analytics IA',
				'Escalabilidad horizontal'
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
			title: 'Automatizaciones n8n',
			subtitle: 'ENTERPRISE',
			icon: 'zap',
			badgeColor: 'bg-orange-600',
			description: 'Orquestación de procesos empresariales con n8n, reduciendo tiempos operativos y dependencia de desarrollos ad-hoc',
			shortDesc: 'Automatización empresarial + n8n + Integración APIs',
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

<svelte:head>
	<title>Servicios Enterprise - Formeta Labs | Web, RAG IA, VeriCRM, Automatizaciones</title>
	<meta name="description" content="Servicios enterprise de Formeta: Desarrollo Web avanzado, RAG + IA Local, VeriCRM con cumplimiento AEAT y Automatizaciones n8n." />
	<meta name="keywords" content="desarrollo web, SvelteKit, IA local, RAG, VeriFactu, CRM, automatización, n8n, empresas, digitalización" />
	<meta property="og:title" content="Servicios Enterprise - Formeta Labs" />
	<meta property="og:description" content="Cuatro servicios core: Desarrollo Web moderno, RAG + IA Local, VeriCRM con VeriFactu y Automatizaciones empresariales." />
	<meta property="og:type" content="website" />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[70vh] bg-gradient-to-br from-formeta-text via-formeta-primary to-formeta-secondary overflow-hidden">
	<!-- Background Patterns -->
	<div class="absolute inset-0 opacity-5">
		<div class="pattern-circuits h-full w-full"></div>
	</div>
	
	<!-- Floating Technical Elements -->
	<div class="absolute top-20 left-20 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		<Icon name="rocket" size={16} className="inline mr-2" color="white" />
		WEB.MODERN
	</div>
	<div class="absolute top-32 right-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		<Icon name="cpu" size={16} className="inline mr-2" color="white" />
		RAG.LOCAL
	</div>
	<div class="absolute bottom-40 left-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		<Icon name="shield-check" size={16} className="inline mr-2" color="white" />
		VERICRM.CRITICAL
	</div>
	<div class="absolute bottom-32 right-20 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		<Icon name="zap" size={16} className="inline mr-2" color="white" />
		N8N.AUTO
	</div>
	
	<div class="relative z-10 container-formeta flex items-center min-h-[70vh]">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<span class="text-white/80 text-lg font-mono">///</span>
				<span class="text-white/80 text-lg font-mono">SERVICIOS ENTERPRISE</span>
			</div>
			
			<h1 class="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
				SOLUCIONES
				<br>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
					TECNOLÓGICAS
				</span>
			</h1>
			
			<p class="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
				Cuatro servicios core diseñados para empresas que necesitan <strong>desarrollo web moderno</strong>, 
				<strong>IA local sin dependencias cloud</strong>, <strong>cumplimiento VeriFactu obligatorio</strong> 
				y <strong>automatización empresarial avanzada</strong>.
			</p>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
				<div class="text-center">
					<div class="text-3xl font-bold text-white mb-1">4</div>
					<div class="text-sm text-white/80 font-bold">Servicios Core</div>
					<div class="text-xs text-white/60">Web, RAG, VeriCRM, n8n</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-white mb-1">48h</div>
					<div class="text-sm text-white/80 font-bold">Deployment</div>
					<div class="text-xs text-white/60">VeriFactu crítico</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-white mb-1">99.9%</div>
					<div class="text-sm text-white/80 font-bold">Uptime SLA</div>
					<div class="text-xs text-white/60">Garantizado</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-white mb-1">100%</div>
					<div class="text-sm text-white/80 font-bold">Local + Secure</div>
					<div class="text-xs text-white/60">IA + VeriFactu</div>
				</div>
			</div>
			
			<div class="flex flex-wrap gap-4">
				<a href="#servicios" class="bg-white text-formeta-primary px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-200 border-2 border-white">
					VER SERVICIOS
				</a>
				<a href="/contacto" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-formeta-primary transition-all duration-200">
					CONSULTA TÉCNICA
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Services Grid -->
<section id="servicios" class="py-20 bg-white">
	<div class="container-formeta">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
				Portfolio <span class="text-formeta-primary">Enterprise</span>
			</h2>
			<p class="text-lg text-formeta-text/80 max-w-3xl mx-auto">
				Cuatro servicios especializados: <strong>Desarrollo Web moderno</strong>, <strong>RAG + IA Local</strong>, 
				<strong>VeriCRM con cumplimiento AEAT</strong> y <strong>Automatizaciones empresariales</strong>.
			</p>
		</div>
		
		<!-- Services Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
			{#each services as service}
				<div class="group bg-white/80 backdrop-blur-xl border-2 border-formeta-text/10 hover:border-formeta-primary/50 transition-all duration-500 hover:shadow-2xl p-8 relative overflow-hidden hover:scale-105 hover:rotate-1 transform-gpu perspective-1000">
					<!-- Animated background gradient -->
					<div class="absolute inset-0 bg-gradient-to-br from-formeta-primary/5 to-formeta-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					
					<!-- Floating particles effect -->
					<div class="absolute top-0 left-0 w-full h-full pointer-events-none">
						<div class="absolute top-1/4 left-1/4 w-2 h-2 bg-formeta-primary/20 animate-pulse pixel-dot"></div>
						<div class="absolute top-1/2 right-1/3 w-1 h-1 bg-formeta-secondary/30 animate-bounce pixel-dot"></div>
						<div class="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-formeta-primary/25 animate-pulse pixel-dot"></div>
					</div>
					
					<!-- Urgency Badge with glow -->
					{#if service.urgency}
						<div class="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs font-bold animate-pulse shadow-lg shadow-red-600/30">
							<span class="inline-block mr-1">🚨</span>
							OBLIGATORIO 2026
						</div>
					{/if}
					
					<!-- Service Header -->
					<div class="flex items-start justify-between mb-6 relative z-10">
						<div class="flex items-center gap-4">
							<div class="p-3 bg-gradient-to-br from-formeta-primary to-formeta-secondary text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 pixel-shadow">
								<Icon name={service.icon} size={32} />
							</div>
							<div>
								<div class="flex items-center gap-3 mb-2">
									<h3 class="text-2xl font-bold text-formeta-text pixel-text-shadow">{service.title}</h3>
									<span class="px-3 py-1 text-xs font-bold text-white {service.badgeColor} pixel-badge">
										{service.subtitle}
									</span>
								</div>
								<p class="text-formeta-text/70 font-mono text-sm pixel-glow">{service.shortDesc}</p>
							</div>
						</div>
					</div>
					
					<!-- Description -->
					<p class="text-formeta-text/80 mb-6 leading-relaxed">
						{service.description}
					</p>
					
					<!-- Tech Stack -->
					<div class="mb-6">
						<h4 class="text-sm font-bold text-formeta-text/70 mb-3 uppercase tracking-wide">Tech Stack</h4>
						<div class="flex flex-wrap gap-2">
							{#each service.techStack as tech}
								<span class="bg-formeta-primary/10 text-formeta-primary px-3 py-1 text-xs font-mono border border-formeta-primary/20">
									{tech}
								</span>
							{/each}
						</div>
					</div>
					
					<!-- Key Features -->
					<div class="mb-6">
						<h4 class="text-sm font-bold text-formeta-text/70 mb-3 uppercase tracking-wide">Características Clave</h4>
						<ul class="space-y-2">
							{#each service.features.slice(0, 4) as feature}
								<li class="flex items-start gap-2">
									<span class="text-formeta-primary mt-2 block w-1 h-1 bg-formeta-primary flex-shrink-0"></span>
									<span class="text-sm text-formeta-text/80">{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
					
					<!-- Metrics -->
					<div class="mb-6">
						<h4 class="text-sm font-bold text-formeta-text/70 mb-3 uppercase tracking-wide">Métricas</h4>
						<div class="grid grid-cols-2 gap-4">
							{#each Object.entries(service.metrics) as [key, value]}
								<div class="text-center">
									<div class="text-lg font-bold text-formeta-primary">{value}</div>
									<div class="text-xs text-formeta-text/60 uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
								</div>
							{/each}
						</div>
					</div>
					
					<!-- Benefits -->
					<div class="mb-6">
						<h4 class="text-sm font-bold text-formeta-text/70 mb-3 uppercase tracking-wide">Beneficios Empresariales</h4>
						<ul class="space-y-2">
							{#each service.benefits as benefit}
								<li class="flex items-start gap-2">
									<Icon name="check-circle" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
									<span class="text-sm text-formeta-text/80">{benefit}</span>
								</li>
							{/each}
						</ul>
					</div>
					
					<!-- Pricing & Implementation -->
					<div class="mb-8 bg-formeta-light/20 p-4 border border-formeta-primary/20">
						<div class="grid grid-cols-2 gap-4 text-center">
							<div>
								<div class="text-lg font-bold text-formeta-primary">{service.pricing}</div>
								<div class="text-xs text-formeta-text/60">Precio desde</div>
							</div>
							<div>
								<div class="text-lg font-bold text-formeta-primary">{service.implementation}</div>
								<div class="text-xs text-formeta-text/60">Implementación</div>
							</div>
						</div>
						<div class="mt-3 text-center">
							<div class="text-sm font-bold text-green-600">✓ {service.guarantee}</div>
						</div>
					</div>
					
					<!-- Action Button -->
					<a 
						href={service.id === 'web-development' ? '/contacto?servicio=web' : 
							   service.id === 'rag-ia-local' ? '/contacto?servicio=rag' :
							   service.id === 'vericrm' ? '/contacto?servicio=vericrm' :
							   service.id === 'automatizaciones' ? '/contacto?servicio=automatizacion' : '/contacto'}
						class="block w-full bg-formeta-text text-white py-3 px-6 font-bold uppercase tracking-wide hover:bg-formeta-primary transition-all duration-200 text-center group-hover:bg-formeta-primary"
					>
						{#if service.urgency}
							IMPLEMENTACIÓN EXPRESS
						{:else}
							SOLICITAR INFORMACIÓN
						{/if}
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- VeriCRM Urgency Section -->
<section class="bg-red-600 text-white py-16">
	<div class="container-formeta">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl font-bold mb-6">
				VeriCRM: CRM + VeriFactu OBLIGATORIO desde 2026
			</h2>
			<p class="text-xl mb-8 leading-relaxed">
				El Real Decreto 1007/2023 establece la obligatoriedad del sistema VeriFactu. 
				<strong>Tu empresa necesita CRM con cumplimiento VeriFactu integrado YA</strong> para evitar sanciones de la AEAT.
			</p>
			
			<div class="grid md:grid-cols-3 gap-6 mb-8">
				<div class="bg-white/10 backdrop-blur-sm p-4 border border-white/20">
					<div class="text-2xl font-bold mb-2">48h</div>
					<div class="text-sm">Implementación VeriFactu crítica</div>
				</div>
				<div class="bg-white/10 backdrop-blur-sm p-4 border border-white/20">
					<div class="text-2xl font-bold mb-2">100%</div>
					<div class="text-sm">Cumplimiento AEAT garantizado</div>
				</div>
				<div class="bg-white/10 backdrop-blur-sm p-4 border border-white/20">
					<div class="text-2xl font-bold mb-2">CRM</div>
					<div class="text-sm">Gestión completa integrada</div>
				</div>
			</div>
			
			<div class="flex flex-col md:flex-row gap-4 justify-center">
				<a href="/contacto?servicio=vericrm&urgente=true" class="bg-white text-red-600 px-8 py-4 font-bold text-lg hover:bg-red-50 transition-all duration-200">
					AUDITORÍA VERIFACTU GRATUITA
				</a>
				<a href="/contacto?servicio=vericrm" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200">
					VERICRM IMPLEMENTACIÓN EXPRESS
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Custom Solutions CTA -->
<section class="bg-formeta-text text-white py-20">
	<div class="container-formeta">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-8">
				¿Necesitas una solución <span class="text-formeta-primary">personalizada</span>?
			</h2>
			<p class="text-xl mb-8 leading-relaxed opacity-90">
				Cada empresa tiene desafíos únicos. Desarrollamos soluciones a medida que se adaptan 
				específicamente a tus procesos de negocio y requisitos técnicos.
			</p>
			
			<div class="grid md:grid-cols-2 gap-8 mb-12">
				<div class="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
					<h3 class="text-2xl font-bold mb-4">Consulta Técnica</h3>
					<ul class="text-left space-y-2 mb-6">
						<li>• Auditoría de sistemas existentes</li>
						<li>• Assessment de cumplimiento VeriFactu</li>
						<li>• Roadmap de digitalización</li>
						<li>• Análisis de ROI y costes</li>
					</ul>
					<a href="/contacto" class="block bg-formeta-primary text-white py-3 px-6 font-bold text-center hover:bg-formeta-secondary transition-colors">
						Solicitar Consulta
					</a>
				</div>
				
				<div class="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
					<h3 class="text-2xl font-bold mb-4">Demo Enterprise</h3>
					<ul class="text-left space-y-2 mb-6">
						<li>• Demo en vivo de las soluciones</li>
						<li>• POC con tus datos reales</li>
						<li>• Testing VeriFactu + IA Local</li>
						<li>• Propuesta técnica detallada</li>
					</ul>
					<a href="/contacto" class="block bg-white text-formeta-text py-3 px-6 font-bold text-center hover:bg-formeta-light transition-colors">
						Agendar Demo
					</a>
				</div>
			</div>
			
			<p class="text-formeta-light">
				<strong>Garantía de respuesta en 2 horas</strong> • Contacto directo con el equipo técnico
			</p>
		</div>
	</div>
</section>

<!-- Service Modal -->
{#if showModal && selectedService}
	<ServiceModal service={selectedService} on:close={closeModal} />
{/if}

<style>
	.pattern-circuits {
		background-image: 
			linear-gradient(45deg, transparent 35%, rgba(255, 255, 255, 0.03) 35%, rgba(255, 255, 255, 0.03) 65%, transparent 65%),
			linear-gradient(-45deg, transparent 35%, rgba(255, 255, 255, 0.02) 35%, rgba(255, 255, 255, 0.02) 65%, transparent 65%);
		background-size: 30px 30px;
	}
</style>
