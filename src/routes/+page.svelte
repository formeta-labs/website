<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import ServicesPreview from '$lib/components/ServicesPreview.svelte';
	import AboutPreview from '$lib/components/AboutPreview.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LazyAnimatedBackground from '$lib/components/LazyAnimatedBackground.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SEO_PAGES, generateWebSiteSchema, generateOrganizationSchema } from '$lib/utils/seo';

	// Enterprise metrics (more professional)
	const savings = tweened(0, { duration: 2000, easing: cubicOut });
	const clients = tweened(0, { duration: 2000, easing: cubicOut });
	const uptime = tweened(0.1, { duration: 2000, easing: cubicOut });
	const response = tweened(0.1, { duration: 2000, easing: cubicOut });

	onMount(() => {
		// Start enterprise metrics animation
		setTimeout(() => {
			savings.set(30); // 30% saved
			clients.set(2);   // +2 clients
			uptime.set(99.9);  // 99.9% uptime
			response.set(2);   // <2h response
		}, 1000);
	});
</script>

<!-- SEO optimizado para página principal -->
<SEO 
	title={SEO_PAGES.home.title}
	description={SEO_PAGES.home.description}
	keywords={SEO_PAGES.home.keywords}
	ogType={SEO_PAGES.home.ogType}
	ogImage="/images/og/formeta-labs-home.jpg"
	schemas={[generateWebSiteSchema()]}
/>

<!-- Hero Section with Animated Background -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Lazy-loaded Three.js Animated Background -->
	<div class="absolute inset-0" style="z-index: 1;">
		<LazyAnimatedBackground />
	</div>
	
	<!-- Subtle dark overlay for better text readability (reduced opacity) -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-slate-800/8 to-slate-700/10" style="z-index: 2;"></div>
	
	<!-- Minimal geometric accent gradients for integration (keep very subtle) -->
	<div class="absolute inset-0" style="z-index: 3;">
		<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
		<div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/3 rounded-full blur-3xl"></div>
		<div class="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/2 rounded-full blur-3xl"></div>
	</div>
	
	<!-- Single Professional Indicator -->
	<div class="professional-indicator" style="z-index: 10;">
		<Icon name="shield" size={18} />
		<span class="text-sm font-semibold">VeriFactu Certified</span>
	</div>
	
	<div class="relative container mx-auto px-6 text-center text-white" style="z-index: 5;">
		<!-- Clean Professional Header -->
		<div class="mb-12">
			<div class="flex items-center justify-center gap-3 mb-8">
				<span class="text-white/40 text-sm font-mono">///</span>
				<span class="text-white/70 text-sm font-mono font-medium tracking-wider uppercase">LABORATORIO DE INNOVACIÓN DIGITAL</span>
				<span class="text-white/40 text-sm font-mono">///</span>
			</div>
			
			<!-- Larger, cleaner title with better spacing -->
			<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
				FORMETA<span class="text-blue-400">.LABS</span>
			</h1>
			
			<!-- Clear subtitle with better spacing -->
			<p class="text-xl md:text-2xl font-semibold text-blue-300 mb-6">
				Digitalización Empresarial · VeriFactu · IA Local
			</p>
			
			<!-- Professional description with better positioning -->
			<p class="text-lg text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
				<strong>Transformación digital empresarial</strong> con enfoque en cumplimiento normativo VeriFactu, 
				implementación de IA local y soberanía de datos. <strong>Soluciones probadas en Fortune 500.</strong>
			</p>
		</div>
		
		<!-- Enterprise Stats repositioned for better balance -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
			<div class="enterprise-stat">
				<div class="text-2xl md:text-3xl font-bold text-white mb-2">{Math.round($savings)}%</div>
				<div class="text-sm text-white/70 font-medium">AHORROS</div>
				<div class="text-xs text-white/50">Operativo</div>
			</div>
			<div class="enterprise-stat">
				<div class="text-2xl md:text-3xl font-bold text-white mb-2">+{Math.round($clients)}</div>
				<div class="text-sm text-white/70 font-medium">EMPRESAS LOCALES</div>
				<div class="text-xs text-white/50">Confiadas</div>
			</div>
			<div class="enterprise-stat">
				<div class="text-2xl md:text-3xl font-bold text-white mb-2">{$uptime.toFixed(1)}%</div>
				<div class="text-sm text-white/70 font-medium">UPTIME SLA</div>
				<div class="text-xs text-white/50">Garantía enterprise</div>
			</div>
			<div class="enterprise-stat">
				<div class="text-2xl md:text-3xl font-bold text-white mb-2">&lt;{Math.round($response)}h</div>
				<div class="text-sm text-white/70 font-medium">RESPUESTA</div>
				<div class="text-xs text-white/50">Soporte ejecutivo</div>
			</div>
		</div>
		
		<!-- Executive CTAs with better spacing -->
		<div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
			<a href="/contacto" class="executive-cta-primary">
				AGENDAR CONSULTA ESTRATÉGICA
				<Icon name="calendar" size={16} />
			</a>
			<a href="/servicios" class="executive-cta-secondary">
				VER SERVICIOS ENTERPRISE
				<Icon name="briefcase" size={16} />
			</a>
		</div>
		
		<!-- Enterprise Badges positioned for better integration -->
		<div class="flex flex-wrap gap-4 justify-center opacity-90">
			<div class="enterprise-badge">
				<Icon name="shield-check" size={16} />
				<span>ISO 27001</span>
			</div>
			<div class="enterprise-badge">
				<Icon name="award" size={16} />
				<span>VeriFactu Partner</span>
			</div>
			<div class="enterprise-badge">
				<Icon name="clock" size={16} />
				<span>SLA 99.9%</span>
			</div>
		</div>
	</div>
</section>

<!-- Services Preview Section -->
<section class="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden">
	<!-- Clean Background Pattern -->
	<div class="absolute inset-0 pattern-grid opacity-3"></div>
	
	<div class="relative container mx-auto px-6">
		<div class="text-center mb-16">
			<!-- Simplified header -->
			<div class="flex items-center justify-center gap-4 mb-6">
				<div class="w-8 h-px bg-blue-500"></div>
				<span class="text-blue-600 text-sm font-medium tracking-wide uppercase">
					Soluciones Enterprise
				</span>
				<div class="w-8 h-px bg-blue-500"></div>
			</div>
			
			<h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
				Tecnología que Transforma Empresas
			</h2>
			
			<p class="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
				Desarrollamos soluciones enterprise que combinan compliance VeriFactu, 
				IA local avanzada y arquitecturas web modernas.
			</p>
		</div>
		
		<ServicesPreview />
	</div>
</section>

<!-- About Preview Section -->
<section class="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 relative">
	<!-- Clean background -->
	<div class="absolute inset-0 pattern-dots opacity-5"></div>
	
	<div class="relative container mx-auto px-6">
		<!-- Simplified header -->
		<div class="text-center mb-16">
			<div class="flex items-center justify-center gap-4 mb-6">
				<div class="w-8 h-px bg-purple-500"></div>
				<span class="text-purple-600 text-sm font-medium tracking-wide uppercase">
					Nuestra Propuesta de Valor
				</span>
				<div class="w-8 h-px bg-purple-500"></div>
			</div>
			
			<h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
				Innovación Tecnológica Española
			</h2>
			
			<p class="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
				Somos el laboratorio de innovación digital que combina expertise técnico 
				con conocimiento profundo del marco normativo español.
			</p>
		</div>
		
		<!-- Clean AboutPreview container -->
		<div class="bg-white/80 border border-slate-200/50 rounded-2xl p-8 shadow-lg">
			<AboutPreview />
		</div>
		

	</div>
</section>

<!-- Technology Showcase -->
<section class="py-24 bg-slate-900 text-white relative">
	<!-- Clean background -->
	<div class="absolute inset-0 pattern-grid opacity-10"></div>
	
	<div class="relative container mx-auto px-6">
		<div class="text-center mb-16">
			<!-- Simplified header -->
			<div class="flex items-center justify-center gap-4 mb-6">
				<div class="w-8 h-px bg-cyan-400"></div>
				<span class="text-cyan-400 text-sm font-medium tracking-wide uppercase">
					Stack Tecnológico Enterprise
				</span>
				<div class="w-8 h-px bg-cyan-400"></div>
			</div>
			
			<h2 class="text-4xl md:text-5xl font-bold mb-6 text-white/90">
				Infraestructura de Clase Mundial
			</h2>
			
			<p class="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
				Arquitectura cloud-native diseñada para máximo rendimiento, 
				seguridad enterprise y soberanía total de datos.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
			<!-- Frontend Stack -->
			<div class="tech-card-simple">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
						<Icon name="code" size={24} className="text-white" />
					</div>
					<h3 class="text-xl font-bold text-white">Frontend Moderno</h3>
				</div>
				<ul class="space-y-3">
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
						<span>SvelteKit + TypeScript</span>
					</li>
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-blue-400 rounded-full"></div>
						<span>TailwindCSS + Glassmorphism</span>
					</li>
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-purple-400 rounded-full"></div>
						<span>Progressive Web App</span>
					</li>
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
						<span>Performance Score &gt;98/100</span>
					</li>
				</ul>
			</div>
			
			<!-- Backend Stack -->
			<div class="tech-card-simple">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
						<Icon name="server" size={24} className="text-white" />
					</div>
					<h3 class="text-xl font-bold text-white">Backend Enterprise</h3>
				</div>
				<ul class="space-y-3">
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
						<span>Node.js + Express + FastAPI</span>
					</li>
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-blue-400 rounded-full"></div>
						<span>PostgreSQL + Prisma ORM</span>
					</li>
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-red-400 rounded-full"></div>
						<span>Redis Cache + Sessions</span>
					</li>
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-purple-400 rounded-full"></div>
						<span>GraphQL + tRPC + REST</span>
					</li>
				</ul>
			</div>
			
			<!-- AI & Compliance -->
			<div class="tech-card-simple">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
						<Icon name="cpu" size={24} className="text-white" />
					</div>
					<h3 class="text-xl font-bold text-white">IA & Compliance</h3>
				</div>
				<ul class="space-y-3">
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-purple-400 rounded-full"></div>
						<span>Ollama + LLMs Locales</span>
					</li>
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-pink-400 rounded-full"></div>
						<span>RAG + Vector Database</span>
					</li>
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-orange-400 rounded-full"></div>
						<span>VeriFactu API AEAT 2025</span>
					</li>
					<li class="flex items-center gap-3 text-white/90">
						<div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
						<span>100% Soberanía Datos</span>
					</li>
				</ul>
			</div>
		</div>
		
		<!-- Simplified System Status -->
		<div class="bg-white/5 border border-white/10 rounded-2xl p-8">
			<h3 class="text-2xl font-bold text-center mb-8 text-white">
				Sistema Enterprise en Tiempo Real
			</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				<div class="text-center">
					<div class="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
					<div class="text-white/80">System Uptime</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-blue-400 mb-2">&lt;50ms</div>
					<div class="text-white/80">API Latency</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-purple-400 mb-2">24/7</div>
					<div class="text-white/80">Expert Support</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-cyan-400 mb-2">100%</div>
					<div class="text-white/80">Data Security</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<ContactCTA />

<style>

	/* Single Professional Indicator */
	.professional-indicator {
		position: absolute;
		top: 15%;
		right: 8%;
		background: rgba(248, 250, 252, 0.12);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		padding: 12px 20px;
		display: flex;
		align-items: center;
		gap: 8px;
		color: white;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		z-index: 20;
	}

	.professional-indicator:hover {
		background: rgba(248, 250, 252, 0.18);
		border-color: rgba(59, 130, 246, 0.4);
		transform: translateY(-2px);
	}

	/* Enterprise Stats with improved glassmorphism */
	.enterprise-stat {
		background: rgba(248, 250, 252, 0.08);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 16px;
		padding: 24px 20px;
		text-align: center;
		transition: all 0.4s ease;
		position: relative;
		overflow: hidden;
	}

	.enterprise-stat::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
		transition: left 0.5s ease;
	}

	.enterprise-stat:hover {
		background: rgba(248, 250, 252, 0.12);
		border-color: rgba(255, 255, 255, 0.2);
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
	}

	.enterprise-stat:hover::before {
		left: 100%;
	}

	/* Executive CTAs with improved design */
	.executive-cta-primary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 20px 40px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 600;
		font-size: 16px;
		min-width: 280px;
		min-height: 60px;
		background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
		border: 2px solid rgba(59, 130, 246, 0.5);
		border-radius: 12px;
		color: white;
		text-decoration: none;
		transition: all 0.4s ease;
		box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.executive-cta-primary::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
		transition: left 0.5s ease;
	}

	.executive-cta-primary:hover {
		background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%);
		transform: translateY(-3px);
		box-shadow: 0 12px 48px rgba(59, 130, 246, 0.4);
		border-color: rgba(59, 130, 246, 0.8);
	}

	.executive-cta-primary:hover::before {
		left: 100%;
	}

	.executive-cta-secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 20px 40px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 600;
		font-size: 16px;
		min-width: 280px;
		min-height: 60px;
		background: rgba(248, 250, 252, 0.08);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 2px solid rgba(255, 255, 255, 0.15);
		border-radius: 12px;
		color: white;
		text-decoration: none;
		transition: all 0.4s ease;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.executive-cta-secondary::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
		transition: left 0.5s ease;
	}

	.executive-cta-secondary:hover {
		background: rgba(248, 250, 252, 0.15);
		border-color: rgba(255, 255, 255, 0.3);
		transform: translateY(-3px);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
	}

	.executive-cta-secondary:hover::before {
		left: 100%;
	}

	/* Enterprise Badges with geometric integration */
	.enterprise-badge {
		display: flex;
		align-items: center;
		gap: 8px;
		background: rgba(248, 250, 252, 0.06);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 10px;
		padding: 10px 16px;
		color: white;
		font-size: 14px;
		font-weight: 500;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.enterprise-badge::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
		transition: opacity 0.3s ease;
		opacity: 0;
	}

	.enterprise-badge:hover {
		background: rgba(248, 250, 252, 0.1);
		border-color: rgba(255, 255, 255, 0.25);
		transform: translateY(-2px);
	}

	.enterprise-badge:hover::before {
		opacity: 1;
	}

	/* Pattern Background - Simplified */
	.pattern-dots {
		background-image: radial-gradient(circle, rgba(74, 144, 226, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
	}
	
	.pattern-grid {
		background-image: 
			linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0, 122, 255, 0.06) 1px, transparent 1px);
		background-size: 24px 24px;
	}

	/* Simplified Tech Cards */
	.tech-card-simple {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 24px;
		transition: all 0.3s ease;
	}

	.tech-card-simple:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.2);
		transform: translateY(-4px);
	}

	/* Títulos dentro de tech-card-simple - Override global styles */
	.tech-card-simple h3.text-xl {
		color: #F8FAFC !important;
		font-weight: 600 !important;
	}
	
	.tech-card-simple h3 {
		color: #F8FAFC !important;
		font-weight: 600 !important;
	}

	/* Responsive improvements */
	@media (max-width: 768px) {
		.tech-card-simple {
			padding: 20px;
		}
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.tech-card-simple {
			transition: none;
		}
		
		.tech-card-simple:hover {
			transform: none;
		}
	}
</style>
