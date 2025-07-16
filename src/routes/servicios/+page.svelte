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

<svelte:head>
	<title>Servicios Empresariales - Formeta Labs | Desarrollo Web, IA Local, VeriCRM, Automatización</title>
	<meta name="description" content="Servicios empresariales de Formeta: Desarrollo Web profesional, Inteligencia Artificial Local, VeriCRM con cumplimiento AEAT y Automatización empresarial." />
	<meta name="keywords" content="desarrollo web empresarial, SvelteKit, IA local empresarial, RAG, VeriFactu, CRM empresarial, automatización, digitalización empresas" />
	<meta property="og:title" content="Servicios Empresariales - Formeta Labs" />
	<meta property="og:description" content="Soluciones tecnológicas empresariales: Desarrollo Web profesional, IA Local empresarial, VeriCRM con VeriFactu y Automatización empresarial." />
	<meta property="og:type" content="website" />
</svelte:head>

<!-- Hero Section with Particles -->
<section class="relative min-h-[70vh] bg-gradient-to-br from-formeta-text via-formeta-primary to-formeta-secondary overflow-hidden">
	<!-- Particles Container -->
	<div bind:this={particlesContainer} class="absolute inset-0 z-0"></div>
	
	<!-- Pattern Background -->
	<div class="absolute inset-0 opacity-10 z-5">
		<div class="pattern-circuits h-full w-full"></div>
	</div>
	
	<!-- Parallax Floating Elements -->
	<div class="absolute inset-0 z-10">
		<!-- Floating Code Tag -->
		<div 
			class="absolute top-20 left-20 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-4 py-2 text-white text-sm font-mono transition-transform duration-100 pixel-float"
			style="transform: translate({mouseX * 0.5}px, {mouseY * 0.5}px)"
		>
			<Icon name="rocket" size={16} className="inline mr-2" color="white" />
			▦▦▦ WEB.MODERN
		</div>
		
		<!-- Floating Tech Badge -->
		<div 
			class="absolute top-32 right-32 bg-formeta-primary/20 backdrop-blur-sm border-2 border-formeta-primary/50 px-3 py-2 text-white text-xs font-bold transition-transform duration-100 pixel-float"
			style="transform: translate({mouseX * -0.3}px, {mouseY * -0.3}px)"
		>
			<Icon name="cpu" size={16} className="inline mr-2" color="white" />
			<span class="mr-1">◆</span> RAG.LOCAL
		</div>
		
		<!-- Floating VeriCRM Critical -->
		<div 
			class="absolute bottom-40 left-32 bg-red-500/20 backdrop-blur-sm border-2 border-red-500/50 px-3 py-2 text-white text-xs font-mono transition-transform duration-100 pixel-float"
			style="transform: translate({mouseX * 0.7}px, {mouseY * 0.7}px)"
		>
			<Icon name="shield-check" size={16} className="inline mr-2" color="white" />
			▲ VERICRM.CRITICAL ▲
		</div>
		
		<!-- Floating Automation -->
		<div 
			class="absolute bottom-32 right-20 bg-green-500/20 backdrop-blur-sm border-2 border-green-500/50 px-3 py-2 text-white text-xs font-bold transition-transform duration-100 pixel-float"
			style="transform: translate({mouseX * -0.5}px, {mouseY * -0.5}px)"
		>
			<Icon name="zap" size={16} className="inline mr-2" color="white" />
			● N8N.AUTO ●
		</div>
	</div>
	
	<div class="relative z-20 container-formeta flex items-center min-h-[70vh]">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<span class="text-white/80 text-lg font-mono">///</span>
				<span class="text-white/80 text-lg font-mono">SERVICIOS TECNOLÓGICOS EMPRESARIALES</span>
			</div>
			
			<h1 class="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
				SOLUCIONES
				<br>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
					DIGITALES
				</span>
			</h1>
			
			<p class="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
				<strong>Cuatro servicios especializados</strong> diseñados para empresas que necesitan 
				<strong>desarrollo web empresarial</strong>, <strong>inteligencia artificial local</strong>, 
				<strong>cumplimiento VeriFactu obligatorio</strong> y <strong>automatización avanzada</strong>.
			</p>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
				<div class="text-center bg-white/5 backdrop-blur-sm border border-white/20 p-4 pixel-card">
					<div class="text-3xl font-bold text-white mb-1">4</div>
					<div class="text-sm text-white/80 font-bold">Servicios Core</div>
					<div class="text-xs text-white/60">Web, RAG, VeriCRM, n8n</div>
				</div>
				<div class="text-center bg-white/5 backdrop-blur-sm border border-white/20 p-4 pixel-card">
					<div class="text-3xl font-bold text-white mb-1">48h</div>
					<div class="text-sm text-white/80 font-bold">Deployment</div>
					<div class="text-xs text-white/60">VeriFactu crítico</div>
				</div>
				<div class="text-center bg-white/5 backdrop-blur-sm border border-white/20 p-4 pixel-card">
					<div class="text-3xl font-bold text-white mb-1">99.9%</div>
					<div class="text-sm text-white/80 font-bold">Uptime SLA</div>
					<div class="text-xs text-white/60">Garantizado</div>
				</div>
				<div class="text-center bg-white/5 backdrop-blur-sm border border-white/20 p-4 pixel-card">
					<div class="text-3xl font-bold text-white mb-1">100%</div>
					<div class="text-sm text-white/80 font-bold">Local + Secure</div>
					<div class="text-xs text-white/60">IA + VeriFactu</div>
				</div>
			</div>
			
			<div class="flex flex-wrap gap-4">
				<a href="#servicios" class="bg-white text-formeta-primary px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-300 border-2 border-white hover:scale-105 transform-gpu">
					VER SERVICIOS
				</a>
				<a href="/contacto" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-formeta-primary transition-all duration-300 hover:scale-105 transform-gpu">
					CONSULTA TÉCNICA
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Services Grid -->
<section id="servicios" class="py-20 bg-white relative overflow-hidden">
	<!-- Decorative background patterns -->
	<div class="absolute inset-0 opacity-5">
		<div class="pattern-dots h-full w-full"></div>
	</div>
	
	<!-- Floating decorative elements -->
	<div class="absolute top-10 left-10 text-formeta-primary/20 text-6xl font-mono">▦</div>
	<div class="absolute top-20 right-20 text-formeta-secondary/20 text-4xl font-mono">◆</div>
	<div class="absolute bottom-20 left-20 text-formeta-primary/20 text-5xl font-mono">●</div>
	<div class="absolute bottom-10 right-10 text-formeta-secondary/20 text-3xl font-mono">▲</div>
	
	<div class="container-formeta relative z-10">
		<!-- Section Header with decorative elements -->
		<div class="text-center mb-16">
			<div class="flex items-center justify-center gap-4 mb-6">
				<span class="text-formeta-primary text-2xl font-mono">◆</span>
				<span class="text-formeta-text/60 text-sm font-mono uppercase tracking-wider">SERVICIOS TECNOLÓGICOS</span>
				<span class="text-formeta-primary text-2xl font-mono">◆</span>
			</div>
			
			<h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
				Servicios <span class="text-formeta-primary">Empresariales</span>
			</h2>
			
			<div class="flex items-center justify-center gap-2 mb-6">
				<span class="text-formeta-primary font-mono">▦▦▦</span>
				<p class="text-lg text-formeta-text/80 max-w-3xl mx-auto">
					Soluciones especializadas: <strong>Desarrollo Web Empresarial</strong>, <strong>Inteligencia Artificial Local</strong>, 
					<strong>Sistema VeriCRM con cumplimiento AEAT</strong> y <strong>Automatización Avanzada</strong>
				</p>
				<span class="text-formeta-primary font-mono">▦▦▦</span>
			</div>
			
			<!-- Service indicators -->
			<div class="flex justify-center gap-6 mb-8">
				<div class="flex items-center gap-2 bg-formeta-primary/10 px-4 py-2 border border-formeta-primary/20">
					<span class="text-formeta-primary font-mono text-xl">●</span>
					<span class="text-sm font-bold text-formeta-text">WEB EMPRESARIAL</span>
				</div>
				<div class="flex items-center gap-2 bg-formeta-secondary/10 px-4 py-2 border border-formeta-secondary/20">
					<span class="text-formeta-secondary font-mono text-xl">◆</span>
					<span class="text-sm font-bold text-formeta-text">IA LOCAL</span>
				</div>
				<div class="flex items-center gap-2 bg-red-500/10 px-4 py-2 border border-red-500/20">
					<span class="text-red-500 font-mono text-xl">▲</span>
					<span class="text-sm font-bold text-formeta-text">VERICRM</span>
				</div>
				<div class="flex items-center gap-2 bg-green-500/10 px-4 py-2 border border-green-500/20">
					<span class="text-green-500 font-mono text-xl">▦</span>
					<span class="text-sm font-bold text-formeta-text">AUTOMATIZACIÓN</span>
				</div>
			</div>
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
					
					<!-- Tech Stack Enterprise -->
					<div class="mb-6">
						<div class="flex items-center gap-2 mb-3">
							<span class="text-formeta-secondary font-mono">▦</span>
							<h4 class="text-sm font-bold text-formeta-text/70 uppercase tracking-wide">Tech Stack Empresarial</h4>
							<span class="text-formeta-secondary font-mono">▦</span>
						</div>
						<div class="flex flex-wrap gap-2">
							{#each service.techStack as tech, index}
								<span class="group relative bg-formeta-primary/10 text-formeta-primary px-4 py-2 text-sm font-mono border border-formeta-primary/20 hover:bg-formeta-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg transform-gpu pixel-button">
									<!-- Tech icon based on name -->
									<span class="mr-2">
										{#if tech.includes('Svelte')}
											🚀
										{:else if tech.includes('TypeScript')}
											💪
										{:else if tech.includes('Docker')}
											🐳
										{:else if tech.includes('PostgreSQL')}
											🗄️
										{:else if tech.includes('Ollama')}
											🤖
										{:else if tech.includes('n8n')}
											⚡
										{:else if tech.includes('AEAT')}
											🏛️
										{:else}
											⚙️
										{/if}
									</span>
									{tech}
									
									<!-- Hover tooltip -->
									<div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-formeta-text text-white p-2 text-xs w-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
										{#if tech.includes('Svelte')}
											Framework full-stack con SSR
										{:else if tech.includes('TypeScript')}
											Tipado estático enterprise
										{:else if tech.includes('Docker')}
											Containerización robusta
										{:else if tech.includes('PostgreSQL')}
											Base de datos escalable
										{:else if tech.includes('Ollama')}
											IA local sin dependencias
										{:else if tech.includes('n8n')}
											Automatización avanzada
										{:else if tech.includes('AEAT')}
											Integración oficial AEAT
										{:else}
											Tecnología enterprise
										{/if}
										<div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-formeta-text"></div>
									</div>
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
					
					<!-- Metrics with animations -->
					<div class="mb-6">
						<div class="flex items-center gap-2 mb-3">
							<span class="text-formeta-primary font-mono">◆</span>
							<h4 class="text-sm font-bold text-formeta-text/70 uppercase tracking-wide">Métricas en Tiempo Real</h4>
							<span class="text-formeta-primary font-mono">◆</span>
						</div>
						<div class="grid grid-cols-2 gap-4">
							{#each Object.entries(service.metrics) as [key, value], index}
								<div class="text-center bg-gradient-to-br from-formeta-primary/10 to-formeta-secondary/10 p-4 border border-formeta-primary/20 relative overflow-hidden pixel-card">
									<!-- Animated background bar -->
									<div class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-formeta-primary to-formeta-secondary w-0 group-hover:w-full transition-all duration-1000 delay-{index * 200}"></div>
									
									<!-- Metric value with glow -->
									<div class="text-lg font-bold text-formeta-primary mb-1 pixel-glow">{value}</div>
									
									<!-- Mini chart indicator -->
									<div class="flex justify-center mb-1">
										{#each Array(4) as _, i}
											<div class="w-1 h-{i + 2} bg-formeta-primary/30 mx-0.5 group-hover:bg-formeta-primary transition-colors duration-300 delay-{i * 100}"></div>
										{/each}
									</div>
									
									<div class="text-xs text-formeta-text/60 uppercase font-mono">
										{#if key === 'performance'}
											● {key.replace(/([A-Z])/g, ' $1').trim()}
										{:else if key === 'deployment'}
											▲ {key.replace(/([A-Z])/g, ' $1').trim()}
										{:else if key === 'mobile'}
											◆ {key.replace(/([A-Z])/g, ' $1').trim()}
										{:else}
											▦ {key.replace(/([A-Z])/g, ' $1').trim()}
										{/if}
									</div>
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
		animation: circuitPulse 4s ease-in-out infinite;
	}
	
	/* Professional Modern Effects */
	.pixel-dot {
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}
	
	.pixel-shadow {
		box-shadow: 
			2px 2px 0px rgba(74, 144, 226, 0.3),
			4px 4px 0px rgba(74, 144, 226, 0.2),
			6px 6px 0px rgba(74, 144, 226, 0.1);
	}
	
	.pixel-button {
		position: relative;
		overflow: hidden;
		transition: all 0.3s ease;
	}
	
	.pixel-button:hover::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		animation: shimmer 0.6s ease-out;
	}
	
	.pixel-badge {
		position: relative;
		clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%);
	}
	
	.pixel-badge-large {
		position: relative;
		clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%);
	}
	
	.pixel-float {
		animation: pixelFloat 3s ease-in-out infinite;
	}
	
	.pixel-card {
		position: relative;
		transition: all 0.3s ease;
	}
	
	.pixel-card:hover {
		transform: scale(1.05) rotate(1deg);
		box-shadow: 
			4px 4px 0px rgba(74, 144, 226, 0.3),
			8px 8px 0px rgba(74, 144, 226, 0.2);
	}
	
	/* Pattern Backgrounds Enhanced */
	.pattern-dots {
		background-image: radial-gradient(circle, rgba(74, 144, 226, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
		animation: patternMove 20s linear infinite;
	}
	
	/* Enhanced Animations */
	@keyframes shimmer {
		0% { left: -100%; }
		100% { left: 100%; }
	}
	
	@keyframes pixelFloat {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		25% { transform: translateY(-3px) rotate(0.5deg); }
		50% { transform: translateY(-6px) rotate(-0.5deg); }
		75% { transform: translateY(-3px) rotate(0.5deg); }
	}
	
	@keyframes patternMove {
		0% { background-position: 0 0; }
		100% { background-position: 20px 20px; }
	}
	
	@keyframes circuitPulse {
		0%, 100% { opacity: 0.3; }
		50% { opacity: 0.6; }
	}
	
	/* 3D Transform Utilities */
	.perspective-1000 {
		perspective: 1000px;
	}
	
	.transform-gpu {
		transform: translateZ(0);
		will-change: transform;
	}
	
	/* Glassmorphism Enhanced */
	:global(.group:hover .bg-white\/80) {
		background: rgba(255, 255, 255, 0.9) !important;
		backdrop-filter: blur(20px);
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.pixel-text-shadow {
			text-shadow: 
				1px 1px 0px rgba(0, 0, 0, 0.5),
				2px 2px 0px rgba(0, 0, 0, 0.3);
		}
		
		.pixel-float {
			animation-duration: 4s;
		}
		
		.pixel-card:hover {
			transform: scale(1.02);
		}
	}
	
	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.pixel-float,
		.pattern-dots,
		.pattern-circuits {
			animation: none;
		}
		
		.pixel-card:hover {
			transform: none;
			box-shadow: none;
		}
	}
</style>
