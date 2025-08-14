<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { debug } from '$lib/utils/debug';
	
	// Calculator State
	let projectType: 'landing' | 'corporate' | 'ecommerce' | 'webapp' | 'custom' = 'landing';
	let pages = 1;
	let design: 'template' | 'custom' | 'premium' = 'template';
	let features: string[] = [];
	let complexity: 'basic' | 'advanced' | 'enterprise' = 'basic';
	let timeline: 'express' | 'standard' | 'relaxed' = 'standard';
	let maintenance = false;
	let hosting = false;
	
	// Project Types
	const projectTypes = {
		landing: { name: 'Landing Page', basePrice: 599, pages: 1 },
		corporate: { name: 'Web Corporativa', basePrice: 1299, pages: 5 },
		ecommerce: { name: 'Tienda Online', basePrice: 2499, pages: 10 },
		webapp: { name: 'Aplicación Web', basePrice: 4999, pages: 15 },
		custom: { name: 'Proyecto Personalizado', basePrice: 7999, pages: 20 }
	};
	
	// Features with prices
	const featureOptions = [
		{ id: 'cms', name: 'CMS Personalizado', price: 599 },
		{ id: 'ecommerce', name: 'Funcionalidad E-commerce', price: 1299 },
		{ id: 'blog', name: 'Sistema de Blog', price: 399 },
		{ id: 'multiidioma', name: 'Multi-idioma', price: 699 },
		{ id: 'seo', name: 'SEO Avanzado', price: 499 },
		{ id: 'analytics', name: 'Analytics & Tracking', price: 299 },
		{ id: 'forms', name: 'Formularios Avanzados', price: 399 },
		{ id: 'payments', name: 'Pasarelas de Pago', price: 799 },
		{ id: 'api', name: 'Integración APIs', price: 899 },
		{ id: 'auth', name: 'Sistema Login/Registro', price: 699 },
		{ id: 'calendar', name: 'Sistema de Reservas', price: 1099 },
		{ id: 'chat', name: 'Chat en Vivo', price: 299 }
	];
	
	// Complexity multipliers
	const complexityMultipliers = {
		basic: { name: 'Básico', multiplier: 1, description: 'Funcionalidades estándar' },
		advanced: { name: 'Avanzado', multiplier: 1.5, description: 'Lógica compleja y custom' },
		enterprise: { name: 'Enterprise', multiplier: 2.2, description: 'Arquitectura escalable' }
	};
	
	// Design multipliers
	const designMultipliers = {
		template: { name: 'Plantilla Premium', multiplier: 1, description: 'Adaptación de template' },
		custom: { name: 'Diseño Personalizado', multiplier: 1.8, description: 'Diseño desde cero' },
		premium: { name: 'Diseño Premium', multiplier: 2.5, description: 'Diseño y UX avanzado' }
	};
	
	// Timeline multipliers
	const timelineMultipliers = {
		express: { name: 'Express (50% menos tiempo)', multiplier: 1.5, weeks: 0.5 },
		standard: { name: 'Estándar', multiplier: 1, weeks: 1 },
		relaxed: { name: 'Sin Prisa (más económico)', multiplier: 0.85, weeks: 1.5 }
	};
	
	// Reactive variable for calculated price
	let calculatedPrice: any = null;

	// Calculate price
	$: {
		let basePrice = projectTypes[projectType as keyof typeof projectTypes].basePrice;
		
		// Add pages cost (after first included pages)
		const includedPages = projectTypes[projectType as keyof typeof projectTypes].pages;
		if (pages > includedPages) {
			basePrice += (pages - includedPages) * 199;
		}
		
		// Add features
		const featuresPrice = features.reduce((sum, featureId) => {
			const feature = featureOptions.find(f => f.id === featureId);
			return sum + (feature ? feature.price : 0);
		}, 0);
		
		// Apply multipliers
		const subtotal = (basePrice + featuresPrice);
		const complexityPrice = subtotal * complexityMultipliers[complexity as keyof typeof complexityMultipliers].multiplier;
		const designPrice = complexityPrice * designMultipliers[design as keyof typeof designMultipliers].multiplier;
		const timelinePrice = designPrice * timelineMultipliers[timeline as keyof typeof timelineMultipliers].multiplier;
		
		// Add maintenance and hosting
		let monthlyExtras = 0;
		if (maintenance) monthlyExtras += 99;
		if (hosting) monthlyExtras += 29;
		
		calculatedPrice = {
			total: Math.round(timelinePrice),
			monthly: monthlyExtras,
			breakdown: {
				base: basePrice,
				features: featuresPrice,
				pages: pages > includedPages ? (pages - includedPages) * 199 : 0,
				complexity: Math.round(subtotal * (complexityMultipliers[complexity as keyof typeof complexityMultipliers].multiplier - 1)),
				design: Math.round(complexityPrice * (designMultipliers[design as keyof typeof designMultipliers].multiplier - 1)),
				timeline: Math.round(designPrice * (timelineMultipliers[timeline as keyof typeof timelineMultipliers].multiplier - 1))
			},
			weeks: Math.round(pages * timelineMultipliers[timeline as keyof typeof timelineMultipliers].weeks * complexityMultipliers[complexity as keyof typeof complexityMultipliers].multiplier)
		};
		
		// Also set window property for compatibility
		(window as any).calculatedPrice = calculatedPrice;
	}
	
	let contactForm = {
		nombre: '',
		empresa: '',
		email: '',
		telefono: '',
		proyecto: '',
		presupuesto: '',
		timeline: '',
		mensaje: ''
	};
	
	function handleSubmit() {
		debug.log('Enviando consulta Web Development:', contactForm);
	}
	
	function copyCalculatorResults() {
		const results = calculatedPrice;
		const text = `Presupuesto Web Development:
		
Proyecto: ${projectTypes[projectType as keyof typeof projectTypes].name}
Páginas: ${pages}
Diseño: ${designMultipliers[design as keyof typeof designMultipliers].name}
Complejidad: ${complexityMultipliers[complexity as keyof typeof complexityMultipliers].name}
Timeline: ${timelineMultipliers[timeline as keyof typeof timelineMultipliers].name}
Features: ${features.map(f => featureOptions.find(opt => opt.id === f)?.name).join(', ')}

PRECIO TOTAL: ${results.total}€
${results.monthly > 0 ? `Servicios mensuales: ${results.monthly}€/mes` : ''}
Tiempo estimado: ${results.weeks} semanas`;
		
		navigator.clipboard.writeText(text);
	}
</script>

<svelte:head>
	<title>Desarrollo Web Profesional - SvelteKit, React, Next.js | Formeta Labs</title>
	<meta name="description" content="Desarrollo web profesional con SvelteKit, React, Next.js. Webs corporativas, tiendas online, aplicaciones web. Calculadora de precios online. Desde 599€.">
	<meta name="keywords" content="desarrollo web, SvelteKit, React, Next.js, web development, diseño web, tienda online, aplicación web, calculadora precios">
	<meta property="og:title" content="Desarrollo Web Profesional - Calculadora de Precios">
	<meta property="og:description" content="Desarrollo web moderno con tecnologías de vanguardia. Calcula el precio de tu proyecto web al instante.">
	<meta property="og:type" content="product">
	<link rel="canonical" href="https://formeta-labs.com/servicios/web-development">
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
	<!-- Professional geometric patterns -->
	<div class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"></div>
	<div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(74,144,226,0.1),transparent_70%)]"></div>
	<div class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_70%)]"></div>
	
	<!-- Floating Professional Indicator -->
	<div class="floating-indicator-webdev">
		<div class="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
			<Icon name="code" size={24} className="text-blue-400" />
			<span class="text-white font-mono text-sm font-medium">WEB DEVELOPMENT ENTERPRISE</span>
		</div>
	</div>
	
	<!-- ASCII Decorative Shapes -->
	<div class="absolute top-20 left-12 text-blue-400/30 text-6xl font-mono select-none">&lt;/&gt;</div>
	<div class="absolute top-32 right-16 text-indigo-400/25 text-4xl font-mono select-none">{'{ }'}</div>
	<div class="absolute bottom-24 left-20 text-blue-400/20 text-5xl font-mono select-none">⚡</div>
	<div class="absolute bottom-12 right-12 text-indigo-400/30 text-3xl font-mono select-none">▲</div>
	<div class="absolute top-1/2 left-8 text-blue-400/15 text-2xl font-mono select-none transform -translate-y-1/2">&lt;/&gt;</div>
	<div class="absolute top-1/3 right-8 text-indigo-400/20 text-2xl font-mono select-none">{'{ }'}</div>
	
	<div class="relative container mx-auto px-6 text-center text-white z-10">
		<!-- Hero Section Header -->
		<div class="flex items-center justify-center gap-3 mb-8">
			<span class="text-blue-400/60 text-sm font-mono">///</span>
			<span class="text-white/80 text-sm font-mono font-medium tracking-wider uppercase">DESARROLLO WEB EMPRESARIAL</span>
			<span class="text-blue-400/60 text-sm font-mono">///</span>
		</div>
		
		<!-- Main Headlines -->
		<h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
			<span class="text-white">Web</span>
			<span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Development</span>
		</h1>
		
		<div class="mb-8">
			<p class="text-xl text-white/90 font-medium mb-4 max-w-4xl mx-auto leading-relaxed">
				<strong>Arquitectura web empresarial</strong> con SvelteKit, Next.js y tecnologías modernas
				<strong class="text-blue-400">con soberanía digital garantizada</strong>
			</p>
			<p class="text-lg text-white/75 max-w-3xl mx-auto">
				SvelteKit · Next.js · TypeScript · Performance 95+ · Core Web Vitals · Responsive
			</p>
		</div>
		
		<!-- Enterprise Metrics Grid -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-blue-400 mb-2">95+</div>
				<div class="text-sm text-white/80 font-medium">Lighthouse Score</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-indigo-400 mb-2">&lt;2s</div>
				<div class="text-sm text-white/80 font-medium">Time to Interactive</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-green-400 mb-2">100%</div>
				<div class="text-sm text-white/80 font-medium">Código Español</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-orange-400 mb-2">24h</div>
				<div class="text-sm text-white/80 font-medium">Presupuesto</div>
			</div>
		</div>
		
		<!-- Hero Feature Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="zap" size={28} className="text-blue-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Performance Enterprise</h3>
				<p class="text-sm text-white/70">Optimización avanzada y Core Web Vitals</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="shield" size={28} className="text-indigo-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Soberanía Digital</h3>
				<p class="text-sm text-white/70">100% código español y normativa GDPR</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="layers" size={28} className="text-green-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Escalabilidad Total</h3>
				<p class="text-sm text-white/70">Arquitectura robusta y mantenible</p>
			</div>
		</div>
		
		<!-- Enterprise Badges -->
		<div class="flex flex-wrap justify-center gap-4 mb-10">
			<div class="bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-blue-400 text-sm font-bold">⚡ SVELTEKIT + NEXT.JS</span>
			</div>
			<div class="bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-indigo-400 text-sm font-bold">🛡️ TYPESCRIPT ENTERPRISE</span>
			</div>
			<div class="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-green-400 text-sm font-bold">📊 PERFORMANCE 95+</span>
			</div>
		</div>
		
		<!-- Executive CTAs -->
		<div class="flex flex-col sm:flex-row gap-6 justify-center pb-12">
			<a href="#calculadora" class="group bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 min-w-[250px]">
				CALCULADORA ENTERPRISE
				<Icon name="calculator" size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
			</a>
			<a href="/contacto" class="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-3 min-w-[250px]">
				CONSULTA TÉCNICA
				<Icon name="arrow-right" size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
			</a>
		</div>
	</div>
</section>

<!-- Technologies Section -->
<section class="py-24 bg-gradient-to-br from-gray-50 to-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-4 py-2 rounded-full mb-6">
				<Icon name="code" size={20} className="text-blue-600" />
				<span class="text-sm font-medium text-blue-700">STACK TECNOLÓGICO ENTERPRISE</span>
			</div>
			
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">
				Tecnologías <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">de Vanguardia</span>
			</h2>
			<p class="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
				Stack moderno seleccionado para garantizar <strong class="text-blue-600">máximo rendimiento, escalabilidad y mantenibilidad</strong> en proyectos empresariales críticos.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="zap" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">SvelteKit</h3>
				<p class="text-gray-700 leading-relaxed mb-6">
					Framework revolucionario con <strong>performance excepcional</strong>, bundle size mínimo y developer experience superior. Ideal para aplicaciones modernas.
				</p>
				<div class="bg-orange-50 border border-orange-200 rounded-lg p-3">
					<div class="text-sm font-bold text-orange-700 flex items-center gap-2">
						<Icon name="star" size={16} className="text-orange-500" />
						Especialidad Formeta Labs
					</div>
				</div>
			</div>
			
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="layers" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors">React + Next.js</h3>
				<p class="text-gray-700 leading-relaxed mb-6">
					Ecosistema maduro con <strong>SSR/SSG avanzado</strong>, App Router y optimizaciones automáticas. Perfecto para aplicaciones empresariales complejas.
				</p>
				<div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
					<div class="text-sm font-bold text-blue-700 flex items-center gap-2">
						<Icon name="briefcase" size={16} className="text-blue-500" />
						Ideal para Enterprise
					</div>
				</div>
			</div>
			
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="paintbrush" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-500 transition-colors">Tailwind CSS</h3>
				<p class="text-gray-700 leading-relaxed mb-6">
					Framework CSS utility-first para diseños <strong>consistentes y mantenibles</strong>. Design system-ready con componentes reutilizables.
				</p>
				<div class="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
					<div class="text-sm font-bold text-cyan-700 flex items-center gap-2">
						<Icon name="palette" size={16} className="text-cyan-500" />
						Design System Ready
					</div>
				</div>
			</div>
			
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="server" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-500 transition-colors">Node.js + TypeScript</h3>
				<p class="text-gray-700 leading-relaxed mb-6">
					Backend robusto con <strong>tipado estático</strong>, APIs REST/GraphQL y arquitectura escalable. Desarrollo type-safe end-to-end.
				</p>
				<div class="bg-green-50 border border-green-200 rounded-lg p-3">
					<div class="text-sm font-bold text-green-700 flex items-center gap-2">
						<Icon name="shield-check" size={16} className="text-green-500" />
						Type-Safe Development
					</div>
				</div>
			</div>
			
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="database" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-500 transition-colors">PostgreSQL + Prisma</h3>
				<p class="text-gray-700 leading-relaxed mb-6">
					Base de datos relacional enterprise con <strong>ORM moderno</strong>, migraciones automáticas y type-safety completo.
				</p>
				<div class="bg-purple-50 border border-purple-200 rounded-lg p-3">
					<div class="text-sm font-bold text-purple-700 flex items-center gap-2">
						<Icon name="check-circle" size={16} className="text-purple-500" />
						Production-Ready DB
					</div>
				</div>
			</div>
			
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="cloud" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-500 transition-colors">Cloud Native Deploy</h3>
				<p class="text-gray-700 leading-relaxed mb-6">
					Deployment optimizado en Vercel, Netlify o VPS, <strong>CDN global</strong>, SSL automático y escalado bajo demanda.
				</p>
				<div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
					<div class="text-sm font-bold text-indigo-700 flex items-center gap-2">
						<Icon name="globe" size={16} className="text-indigo-500" />
						Global Performance
					</div>
				</div>
			</div>
		</div>
		
		<!-- Technology Performance Metrics -->
		<div class="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
			<div class="text-center mb-8">
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Métricas de Rendimiento Enterprise</h3>
				<p class="text-gray-700">Resultados garantizados con nuestro stack tecnológico optimizado</p>
			</div>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div class="text-center">
					<div class="text-3xl font-bold text-blue-600 mb-2">95+</div>
					<div class="text-sm font-medium text-gray-700">Lighthouse Score</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-green-600 mb-2">&lt;2s</div>
					<div class="text-sm font-medium text-gray-700">Time to Interactive</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
					<div class="text-sm font-medium text-gray-700">Uptime SLA</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-orange-600 mb-2">&lt;50ms</div>
					<div class="text-sm font-medium text-gray-700">API Response</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Project Types Section -->
<section class="py-24 bg-gradient-to-br from-white to-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 px-4 py-2 rounded-full mb-6">
				<Icon name="briefcase" size={20} className="text-indigo-600" />
				<span class="text-sm font-medium text-indigo-700">SOLUCIONES EMPRESARIALES</span>
			</div>
			
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">
				Proyectos Web <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">a Medida</span>
			</h2>
			<p class="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
				Desde landing pages optimizadas hasta aplicaciones web complejas. <strong class="text-indigo-600">Cada proyecto adaptado</strong> 
				a tus necesidades específicas con tecnologías enterprise.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Landing Pages -->
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="file-text" size={32} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-500 transition-colors">
						Landing Pages
					</h3>
					<div class="text-3xl font-bold text-green-500 mb-2">desde 599€</div>
				</div>
				
				<div class="space-y-3 mb-6">
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-green-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Diseño responsive profesional</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-green-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Optimización de conversión</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-green-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Analytics integrado</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-green-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Formularios de contacto</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-green-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">SEO técnico optimizado</span>
					</div>
				</div>
				
				<div class="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
					<div class="text-sm font-bold text-green-700 mb-2">Ideal para:</div>
					<div class="text-sm text-green-600">Campañas · Productos · Servicios</div>
				</div>
			</div>
			
			<!-- Webs Corporativas -->
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="briefcase" size={32} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
						Webs Corporativas
					</h3>
					<div class="text-3xl font-bold text-blue-500 mb-2">desde 1.299€</div>
				</div>
				
				<div class="space-y-3 mb-6">
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-blue-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Multi-página (5-15 páginas)</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-blue-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">CMS para gestión contenido</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-blue-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Blog integrado</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-blue-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Área privada opcional</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-blue-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">SEO avanzado</span>
					</div>
				</div>
				
				<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
					<div class="text-sm font-bold text-blue-700 mb-2">Ideal para:</div>
					<div class="text-sm text-blue-600">Empresas · Profesionales · Instituciones</div>
				</div>
			</div>
			
			<!-- Tiendas Online -->
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="shopping-cart" size={32} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-500 transition-colors">
						Tiendas Online
					</h3>
					<div class="text-3xl font-bold text-purple-500 mb-2">desde 2.499€</div>
				</div>
				
				<div class="space-y-3 mb-6">
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-purple-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">E-commerce completo</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-purple-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Pasarelas de pago</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-purple-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Gestión de inventario</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-purple-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Panel de administración</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-purple-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Analytics e-commerce</span>
					</div>
				</div>
				
				<div class="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
					<div class="text-sm font-bold text-purple-700 mb-2">Ideal para:</div>
					<div class="text-sm text-purple-600">Retail · Marketplace · B2B</div>
				</div>
			</div>
			
			<!-- Aplicaciones Web -->
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="monitor" size={32} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
						Aplicaciones Web
					</h3>
					<div class="text-3xl font-bold text-orange-500 mb-2">desde 4.999€</div>
				</div>
				
				<div class="space-y-3 mb-6">
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-orange-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Funcionalidad compleja</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-orange-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Base de datos avanzada</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-orange-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">API REST/GraphQL</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-orange-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Sistema de usuarios</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-orange-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Dashboard analytics</span>
					</div>
				</div>
				
				<div class="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
					<div class="text-sm font-bold text-orange-700 mb-2">Ideal para:</div>
					<div class="text-sm text-orange-600">SaaS · Plataformas · Herramientas</div>
				</div>
			</div>
			
			<!-- Proyectos Custom -->
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="settings" size={32} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors">
						Proyectos Custom
					</h3>
					<div class="text-3xl font-bold text-red-500 mb-2">desde 7.999€</div>
				</div>
				
				<div class="space-y-3 mb-6">
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-red-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Arquitectura personalizada</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-red-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Integraciones complejas</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-red-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Escalabilidad enterprise</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-red-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Consultoría técnica</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-red-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Soporte dedicado</span>
					</div>
				</div>
				
				<div class="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
					<div class="text-sm font-bold text-red-700 mb-2">Ideal para:</div>
					<div class="text-sm text-red-600">Enterprise · Startups · Innovación</div>
				</div>
			</div>
			
			<!-- Optimización Web -->
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="zap" size={32} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-500 transition-colors">
						Optimización Web
					</h3>
					<div class="text-3xl font-bold text-yellow-500 mb-2">desde 899€</div>
				</div>
				
				<div class="space-y-3 mb-6">
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-yellow-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Audit performance completo</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-yellow-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Core Web Vitals</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-yellow-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">SEO técnico avanzado</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-yellow-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Optimización UX</span>
					</div>
					<div class="flex items-center gap-3">
						<Icon name="check" size={16} className="text-yellow-500 flex-shrink-0" />
						<span class="text-sm text-gray-700">Monitoreo continuo</span>
					</div>
				</div>
				
				<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
					<div class="text-sm font-bold text-yellow-700 mb-2">Ideal para:</div>
					<div class="text-sm text-yellow-600">Mejorar webs existentes</div>
				</div>
			</div>
		</div>
		
		<!-- Process Benefits -->
		<div class="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
			<div class="text-center mb-8">
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Proceso de Desarrollo Enterprise</h3>
				<p class="text-gray-700">Metodología ágil con entregas transparentes y comunicación constante</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
				<div class="text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="search" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-gray-900 mb-2">Análisis</h4>
					<p class="text-sm text-gray-600">Auditoría técnica y definición de requisitos</p>
				</div>
				<div class="text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="paintbrush" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-gray-900 mb-2">Diseño</h4>
					<p class="text-sm text-gray-600">UX/UI optimizado y prototipado</p>
				</div>
				<div class="text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="code" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-gray-900 mb-2">Desarrollo</h4>
					<p class="text-sm text-gray-600">Desarrollo ágil con testing continuo</p>
				</div>
				<div class="text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="rocket" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-gray-900 mb-2">Lanzamiento</h4>
					<p class="text-sm text-gray-600">Deploy optimizado y soporte post-launch</p>
				</div>
			</div>
		</div>
	</div>
</section>


<!-- Calculator Section -->
<section id="calculadora" class="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
	<!-- Background Effects -->
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.3),transparent_50%)]"></div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
				<Icon name="calculator" size={20} className="text-white" />
				<span class="text-sm font-medium text-white/90">CALCULADORA ENTERPRISE</span>
			</div>
			
			<h2 class="text-5xl font-extrabold mb-6 text-white">
				Calculadora de Proyecto Web
			</h2>
			
			<p class="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
				Configura tu proyecto y obtén un <strong>presupuesto transparente al instante</strong>. 
				Calculadora adaptada según complejidad, tecnología y timeline específicos.
			</p>
		</div>
		
		<div class="max-w-7xl mx-auto">
			<!-- Main Calculator Card -->
			<div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-12">
					
					<!-- Project Configuration -->
					<div class="space-y-8">
						<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
							<h3 class="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
							<Icon name="settings" size={24} className="text-blue-300" />
							Configuración del Proyecto
						</h3>
							
							<!-- Project Type Selection -->
							<div class="mb-8">
								<div class="text-lg font-semibold text-white mb-4">Tipo de Proyecto</div>
								<div class="grid grid-cols-1 gap-3">
									{#each Object.entries(projectTypes) as [key, type]}
										<label class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-all duration-300 {projectType === key ? 'ring-2 ring-white/50 bg-white/15' : ''}">
											<input type="radio" bind:group={projectType} value={key} class="w-4 h-4 text-blue-400 accent-color-blue-400">
											<div class="flex-1 flex justify-between items-center">
												<span class="font-medium text-white">{type.name}</span>
												<span class="text-sm text-blue-300 font-semibold">desde {type.basePrice}€</span>
											</div>
										</label>
									{/each}
								</div>
							</div>
							
							<!-- Pages Slider -->
							<div class="mb-8">
								<div class="flex justify-between items-center mb-4">
									<label for="pages-range" class="text-lg font-semibold text-white">Número de Páginas</label>
									<div class="bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-lg">
										<span class="font-bold text-blue-200">{pages} páginas</span>
									</div>
								</div>
								<div class="relative">
									<input 
										id="pages-range"
										type="range" 
										min="1" 
										max="50" 
										bind:value={pages}
										class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
									>
									<div class="flex justify-between text-sm text-white/70 mt-2">
										<span>1</span>
										<span>15</span>
										<span>30</span>
										<span>2+</span>
									</div>
								</div>
								<div class="mt-3 text-sm text-white/80">
									<Icon name="info" size={16} className="inline mr-1" />
									Incluidas: {projectTypes[projectType].pages} páginas
									{#if pages > projectTypes[projectType].pages}
										<span class="text-blue-300 font-medium">(+{(pages - projectTypes[projectType].pages) * 199}€ por páginas adicionales)</span>
									{/if}
								</div>
							</div>
							
							<!-- Design Complexity -->
							<div class="mb-8">
								<div class="text-lg font-semibold text-white mb-4">Nivel de Diseño</div>
								<div class="space-y-3">
									{#each Object.entries(designMultipliers) as [key, option]}
										<label class="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-all duration-300 {design === key ? 'ring-2 ring-white/50 bg-white/15' : ''}">
											<input type="radio" bind:group={design} value={key} class="w-4 h-4 text-blue-400 accent-color-blue-400 mt-1">
											<div class="flex-1">
												<div class="font-medium text-white">{option.name}</div>
												<div class="text-sm text-white/70 mt-1">{option.description}</div>
											</div>
										</label>
									{/each}
								</div>
							</div>
							
							<!-- Features Selection -->
							<div class="mb-8">
								<div class="text-lg font-semibold text-white mb-4">Funcionalidades Adicionales</div>
								<div class="max-h-80 overflow-y-auto space-y-2 pr-2">
									{#each featureOptions as feature}
										<label class="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/8 transition-all duration-300">
											<input type="checkbox" bind:group={features} value={feature.id} class="w-4 h-4 text-blue-400 accent-color-blue-400">
											<div class="flex-1 flex justify-between items-center">
												<span class="text-sm text-white">{feature.name}</span>
												<span class="text-sm font-semibold text-blue-300">+{feature.price}€</span>
											</div>
										</label>
									{/each}
								</div>
							</div>
						</div>
					</div>
					
					<!-- Price Summary -->
					<div class="space-y-8">
						<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
							<h3 class="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
							<Icon name="credit-card" size={24} className="text-green-300" />
							Configuración Avanzada
						</h3>
							
							<!-- Advanced Configuration -->
							<div class="space-y-6">
								<div>
									<label for="complexity" class="text-lg font-semibold text-white mb-3 block">Complejidad Técnica</label>
									<select bind:value={complexity} id="complexity" class="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white">
										{#each Object.entries(complexityMultipliers) as [key, option]}
											<option value={key} class="bg-slate-800 text-white">{option.name} - {option.description}</option>
										{/each}
									</select>
								</div>
								
								<div>
									<label for="timeline" class="text-lg font-semibold text-white mb-3 block">Timeline del Proyecto</label>
									<select bind:value={timeline} id="timeline" class="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white">
										{#each Object.entries(timelineMultipliers) as [key, option]}
											<option value={key} class="bg-slate-800 text-white">{option.name}</option>
										{/each}
									</select>
								</div>
								
								<div>
									<div class="text-lg font-semibold text-white mb-4">Servicios Mensuales</div>
									<div class="space-y-3">
										<label class="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/8 transition-all duration-300">
											<input type="checkbox" bind:checked={maintenance} class="w-4 h-4 text-blue-400 accent-color-blue-400">
											<span class="text-white">Mantenimiento mensual <span class="text-green-300 font-semibold">(+99€/mes)</span></span>
										</label>
										<label class="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/8 transition-all duration-300">
											<input type="checkbox" bind:checked={hosting} class="w-4 h-4 text-blue-400 accent-color-blue-400">
											<span class="text-white">Hosting gestionado <span class="text-green-300 font-semibold">(+29€/mes)</span></span>
										</label>
									</div>
								</div>
							</div>
						</div>
						
						<!-- Price Summary Card -->
						{#if calculatedPrice}
							<div class="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-6">
								<div class="text-center mb-6">
									<div class="text-4xl font-extrabold text-white mb-2">
										{calculatedPrice.total.toLocaleString()}€
									</div>
									{#if calculatedPrice.monthly > 0}
										<div class="text-xl text-green-300 font-semibold">
											+{calculatedPrice.monthly}€/mes servicios
										</div>
									{/if}
									<div class="text-sm text-white/80 mt-2 flex items-center justify-center gap-2">
										<Icon name="clock" size={16} className="text-green-300" />
										Tiempo estimado: {calculatedPrice.weeks} semanas
									</div>
								</div>
								
								<div class="bg-white/10 rounded-xl p-4 mb-6">
									<h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
										<Icon name="receipt" size={20} className="text-green-300" />
										Desglose de Costes
									</h4>
									<div class="space-y-2 text-sm">
										<div class="flex justify-between text-white">
											<span>Base ({projectTypes[projectType].name}):</span>
											<span class="font-semibold">{calculatedPrice.breakdown.base}€</span>
										</div>
										{#if calculatedPrice.breakdown.pages > 0}
											<div class="flex justify-between text-white">
												<span>Páginas adicionales:</span>
												<span class="font-semibold text-green-300">+{calculatedPrice.breakdown.pages}€</span>
											</div>
										{/if}
										{#if calculatedPrice.breakdown.features > 0}
											<div class="flex justify-between text-white">
												<span>Funcionalidades:</span>
												<span class="font-semibold text-green-300">+{calculatedPrice.breakdown.features}€</span>
											</div>
										{/if}
										{#if calculatedPrice.breakdown.complexity > 0}
											<div class="flex justify-between text-white">
												<span>Complejidad técnica:</span>
												<span class="font-semibold text-green-300">+{calculatedPrice.breakdown.complexity}€</span>
											</div>
										{/if}
										{#if calculatedPrice.breakdown.design > 0}
											<div class="flex justify-between text-white">
												<span>Diseño personalizado:</span>
												<span class="font-semibold text-green-300">+{calculatedPrice.breakdown.design}€</span>
											</div>
										{/if}
										{#if calculatedPrice.breakdown.timeline !== 0}
											<div class="flex justify-between text-white">
												<span>Ajuste timeline:</span>
												<span class="font-semibold {calculatedPrice.breakdown.timeline > 0 ? 'text-orange-300' : 'text-green-300'}">{calculatedPrice.breakdown.timeline > 0 ? '+' : ''}{calculatedPrice.breakdown.timeline}€</span>
											</div>
										{/if}
									</div>
								</div>
								
								<!-- Action Buttons -->
								<div class="flex flex-col gap-3">
									<button 
										on:click={copyCalculatorResults}
										class="w-full bg-white/10 border border-white/20 text-white py-3 px-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
									>
										<Icon name="copy" size={16} />
										Copiar Presupuesto
									</button>
									
									<a 
										href="/contacto"
										class="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-center flex items-center justify-center gap-2"
									>
										<Icon name="send" size={20} />
										SOLICITAR PROYECTO
									</a>
								</div>
							</div>
						{/if}
						
						<!-- Guarantees -->
						<div class="bg-green-500/10 border border-green-400/20 rounded-2xl p-6">
							<div class="text-white font-bold mb-4 flex items-center justify-center gap-2">
								<Icon name="shield-check" size={20} className="text-green-400" />
								Garantías Enterprise
							</div>
							<div class="space-y-3 text-white/80 text-sm">
								<div class="flex items-center gap-2">
									<Icon name="check" size={16} className="text-green-400 flex-shrink-0" />
									<span>Revisiones ilimitadas durante desarrollo</span>
								</div>
								<div class="flex items-center gap-2">
									<Icon name="check" size={16} className="text-green-400 flex-shrink-0" />
									<span>30 días de soporte post-lanzamiento</span>
								</div>
								<div class="flex items-center gap-2">
									<Icon name="check" size={16} className="text-green-400 flex-shrink-0" />
									<span>Garantía de satisfacción o reembolso</span>
								</div>
								<div class="flex items-center gap-2">
									<Icon name="check" size={16} className="text-green-400 flex-shrink-0" />
									<span>Entrega puntual o penalización</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Additional Benefits -->
			<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="zap" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-white mb-2">Performance 95+</h4>
					<p class="text-sm text-white/70">Lighthouse score garantizado y Core Web Vitals optimizados</p>
				</div>
				
				<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="clock" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-white mb-2">Entrega Puntual</h4>
					<p class="text-sm text-white/70">Metodología ágil con entregas semanales y comunicación constante</p>
				</div>
				
				<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="headphones" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-white mb-2">Soporte 24/7</h4>
					<p class="text-sm text-white/70">Equipo técnico dedicado con respuesta garantizada</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Professional Floating Indicator for Web Development */
	.floating-indicator-webdev {
		position: absolute;
		top: 120px;
		right: 80px;
		z-index: 20;
		animation: floatSlow 6s ease-in-out infinite;
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

	/* Custom Range Slider Styles */
	.slider-thumb {
		background: linear-gradient(90deg, rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.8));
		outline: none;
		border: none;
	}

	.slider-thumb::-webkit-slider-thumb {
		appearance: none;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: linear-gradient(135deg, #3b82f6, #6366f1);
		cursor: pointer;
		border: 3px solid white;
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
		transition: all 0.3s ease;
	}

	.slider-thumb::-webkit-slider-thumb:hover {
		transform: scale(1.2);
		box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
	}

	.slider-thumb::-moz-range-thumb {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: linear-gradient(135deg, #3b82f6, #6366f1);
		cursor: pointer;
		border: 3px solid white;
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
		transition: all 0.3s ease;
	}

	.slider-thumb::-moz-range-thumb:hover {
		transform: scale(1.2);
		box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
	}

	/* Custom range track */
	.slider-thumb::-webkit-slider-track {
		background: linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3));
		height: 8px;
		border-radius: 4px;
	}

	.slider-thumb::-moz-range-track {
		background: linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3));
		height: 8px;
		border-radius: 4px;
		border: none;
	}


	/* Accent color for form elements */
	input[type="radio"],
	input[type="checkbox"] {
		accent-color: #3b82f6;
	}

	/* Select styling for dark background */
	select {
		color: white;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		padding: 12px 16px;
		transition: all 0.3s ease;
	}

	select:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.4);
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
	}
	
	select option {
		background-color: #1e293b;
		color: white;
		padding: 8px;
	}

	/* Mobile responsive improvements */
	@media (max-width: 1024px) {
		.floating-indicator-webdev {
			top: 100px;
			right: 40px;
		}
	}

	@media (max-width: 768px) {
		.floating-indicator-webdev {
			display: none;
		}
		
		.slider-thumb::-webkit-slider-thumb {
			width: 20px;
			height: 20px;
		}
		
		.slider-thumb::-moz-range-thumb {
			width: 20px;
			height: 20px;
		}
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.floating-indicator-webdev {
			animation: none;
			transition: none;
		}
		
		.slider-thumb::-webkit-slider-thumb:hover,
		.slider-thumb::-moz-range-thumb:hover {
			transform: none;
		}
	}
</style>
