<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	
	// Calculator State
	let projectType = 'landing';
	let pages = 1;
	let design = 'template';
	let features = [];
	let complexity = 'basic';
	let timeline = 'standard';
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
	
	// Calculate price
	$: {
		let basePrice = projectTypes[projectType].basePrice;
		
		// Add pages cost (after first included pages)
		const includedPages = projectTypes[projectType].pages;
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
		const complexityPrice = subtotal * complexityMultipliers[complexity].multiplier;
		const designPrice = complexityPrice * designMultipliers[design].multiplier;
		const timelinePrice = designPrice * timelineMultipliers[timeline].multiplier;
		
		// Add maintenance and hosting
		let monthlyExtras = 0;
		if (maintenance) monthlyExtras += 99;
		if (hosting) monthlyExtras += 29;
		
		window.calculatedPrice = {
			total: Math.round(timelinePrice),
			monthly: monthlyExtras,
			breakdown: {
				base: basePrice,
				features: featuresPrice,
				pages: pages > includedPages ? (pages - includedPages) * 199 : 0,
				complexity: Math.round(subtotal * (complexityMultipliers[complexity].multiplier - 1)),
				design: Math.round(complexityPrice * (designMultipliers[design].multiplier - 1)),
				timeline: Math.round(designPrice * (timelineMultipliers[timeline].multiplier - 1))
			},
			weeks: Math.round(pages * timelineMultipliers[timeline].weeks * complexityMultipliers[complexity].multiplier)
		};
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
		console.log('Enviando consulta Web Development:', contactForm);
	}
	
	function copyCalculatorResults() {
		const results = window.calculatedPrice;
		const text = `Presupuesto Web Development:
		
Proyecto: ${projectTypes[projectType].name}
Páginas: ${pages}
Diseño: ${designMultipliers[design].name}
Complejidad: ${complexityMultipliers[complexity].name}
Timeline: ${timelineMultipliers[timeline].name}
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
<section class="relative min-h-[70vh] bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 pattern-code opacity-20"></div>
	
	<!-- Tech Indicators -->
	<div class="absolute top-20 left-20 bg-cyan-500/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono animate-pulse">
		⚡ SVELTEKIT
	</div>
	<div class="absolute top-32 right-32 bg-blue-500/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		⚛️ REACT
	</div>
	<div class="absolute bottom-32 left-32 bg-indigo-500/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		🔥 NEXT.JS
	</div>
	
	<div class="relative container mx-auto px-6 min-h-[70vh] flex items-center">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<div class="text-white/90">
					<Icon name="code" size={24} />
				</div>
				<span class="text-white/80 text-lg font-mono">WEB DEVELOPMENT</span>
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
				WEB
				<span class="block text-cyan-200">MODERNO</span>
				<span class="block text-blue-200">PROFESIONAL</span>
			</h1>
			
			<p class="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
				<strong>Desarrollo web con tecnologías de vanguardia</strong>: SvelteKit, React, Next.js. 
				Desde landing pages hasta aplicaciones web complejas. 
				<strong>Calcula tu presupuesto al instante</strong>.
			</p>
			
			<!-- Key Tech Features -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="zap" size={20} color="white" />
						<span class="text-white font-bold">Performance</span>
					</div>
					<p class="text-white/80 text-sm">Core Web Vitals optimizadas</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="smartphone" size={20} color="white" />
						<span class="text-white font-bold">Responsive</span>
					</div>
					<p class="text-white/80 text-sm">Mobile-first design</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="search" size={20} color="white" />
						<span class="text-white font-bold">SEO Ready</span>
					</div>
					<p class="text-white/80 text-sm">Optimización técnica avanzada</p>
				</div>
			</div>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-6">
				<a href="#calculadora" class="bg-white text-cyan-600 px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-200">
					CALCULADORA DE PRECIOS
				</a>
				<a href="#contact" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-200">
					CONSULTA PERSONALIZADA
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Technologies Section -->
<section class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">Stack Tecnológico Moderno</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Utilizamos las tecnologías más avanzadas y demandadas del mercado para garantizar rendimiento, escalabilidad y mantenibilidad.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Frontend Frameworks -->
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-orange-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<span class="text-orange-600 font-bold text-2xl">⚡</span>
				</div>
				<h3 class="text-xl font-bold mb-3">SvelteKit</h3>
				<p class="text-gray-600 mb-4">
					Framework moderno con performance excepcional, 
					bundle size mínimo y developer experience superior.
				</p>
				<div class="text-sm text-orange-600 font-medium">
					Especialidad de Formeta
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-blue-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<span class="text-blue-600 font-bold text-2xl">⚛️</span>
				</div>
				<h3 class="text-xl font-bold mb-3">React + Next.js</h3>
				<p class="text-gray-600 mb-4">
					Ecosistema maduro con SSR/SSG, 
					perfect para aplicaciones empresariales complejas.
				</p>
				<div class="text-sm text-blue-600 font-medium">
					Ideal para enterprise
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-green-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="layers" size={32} color="#16a34a" />
				</div>
				<h3 class="text-xl font-bold mb-3">Tailwind CSS</h3>
				<p class="text-gray-600 mb-4">
					Framework CSS utility-first para diseños 
					consistentes, mantenibles y altamente customizables.
				</p>
				<div class="text-sm text-green-600 font-medium">
					Diseño system-ready
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-purple-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="server" size={32} color="#7c3aed" />
				</div>
				<h3 class="text-xl font-bold mb-3">Node.js + TypeScript</h3>
				<p class="text-gray-600 mb-4">
					Backend robusto con tipado estático, 
					APIs REST/GraphQL y arquitectura escalable.
				</p>
				<div class="text-sm text-purple-600 font-medium">
					Type-safe development
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-indigo-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="database" size={32} color="#4f46e5" />
				</div>
				<h3 class="text-xl font-bold mb-3">PostgreSQL + Prisma</h3>
				<p class="text-gray-600 mb-4">
					Base de datos relacional con ORM moderno, 
					migraciones automáticas y type-safety.
				</p>
				<div class="text-sm text-indigo-600 font-medium">
					Production-ready DB
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-cyan-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="cloud" size={32} color="#0891b2" />
				</div>
				<h3 class="text-xl font-bold mb-3">Cloud Native</h3>
				<p class="text-gray-600 mb-4">
					Deployment en Vercel, Netlify o VPS, 
					CDN global, SSL automático y escalado.
				</p>
				<div class="text-sm text-cyan-600 font-medium">
					Global performance
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Project Types Section -->
<section class="py-24 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">Tipos de Proyectos Web</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Desde landing pages hasta aplicaciones web complejas. Cada proyecto adaptado a tus necesidades específicas.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="text-center mb-4">
					<div class="bg-green-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="file-text" size={24} color="#16a34a" />
					</div>
					<h3 class="text-xl font-bold mb-2">Landing Pages</h3>
					<div class="text-2xl font-bold text-green-600 mb-2">desde 599€</div>
				</div>
				<div class="space-y-2 text-sm text-gray-600 mb-4">
					<div>• Diseño responsive profesional</div>
					<div>• Optimización conversión</div>
					<div>• Integración analytics</div>
					<div>• Formularios contacto</div>
					<div>• SEO técnico básico</div>
				</div>
				<div class="text-center text-sm text-green-600 font-medium">
					Ideal para: Campañas, productos, servicios
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="text-center mb-4">
					<div class="bg-blue-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="briefcase" size={24} color="#2563eb" />
					</div>
					<h3 class="text-xl font-bold mb-2">Webs Corporativas</h3>
					<div class="text-2xl font-bold text-blue-600 mb-2">desde 1.299€</div>
				</div>
				<div class="space-y-2 text-sm text-gray-600 mb-4">
					<div>• Multi-página (5-15 páginas)</div>
					<div>• CMS para gestión contenido</div>
					<div>• Blog integrado</div>
					<div>• Área privada opcional</div>
					<div>• SEO avanzado</div>
				</div>
				<div class="text-center text-sm text-blue-600 font-medium">
					Ideal para: Empresas, profesionales, instituciones
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="text-center mb-4">
					<div class="bg-purple-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="shopping-cart" size={24} color="#7c3aed" />
					</div>
					<h3 class="text-xl font-bold mb-2">Tiendas Online</h3>
					<div class="text-2xl font-bold text-purple-600 mb-2">desde 2.499€</div>
				</div>
				<div class="space-y-2 text-sm text-gray-600 mb-4">
					<div>• E-commerce completo</div>
					<div>• Pasarelas de pago</div>
					<div>• Gestión inventario</div>
					<div>• Panel administración</div>
					<div>• Analytics e-commerce</div>
				</div>
				<div class="text-center text-sm text-purple-600 font-medium">
					Ideal para: Retail, marketplace, B2B
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="text-center mb-4">
					<div class="bg-orange-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="monitor" size={24} color="#ea580c" />
					</div>
					<h3 class="text-xl font-bold mb-2">Aplicaciones Web</h3>
					<div class="text-2xl font-bold text-orange-600 mb-2">desde 4.999€</div>
				</div>
				<div class="space-y-2 text-sm text-gray-600 mb-4">
					<div>• Funcionalidad compleja</div>
					<div>• Base de datos avanzada</div>
					<div>• API REST/GraphQL</div>
					<div>• Sistema usuarios</div>
					<div>• Dashboard analytics</div>
				</div>
				<div class="text-center text-sm text-orange-600 font-medium">
					Ideal para: SaaS, plataformas, herramientas
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="text-center mb-4">
					<div class="bg-red-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="settings" size={24} color="#dc2626" />
					</div>
					<h3 class="text-xl font-bold mb-2">Proyectos Custom</h3>
					<div class="text-2xl font-bold text-red-600 mb-2">desde 7.999€</div>
				</div>
				<div class="space-y-2 text-sm text-gray-600 mb-4">
					<div>• Arquitectura personalizada</div>
					<div>• Integraciones complejas</div>
					<div>• Escalabilidad enterprise</div>
					<div>• Consultoría técnica</div>
					<div>• Soporte dedicado</div>
				</div>
				<div class="text-center text-sm text-red-600 font-medium">
					Ideal para: Enterprise, startups, innovación
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="text-center mb-4">
					<div class="bg-yellow-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="zap" size={24} color="#eab308" />
					</div>
					<h3 class="text-xl font-bold mb-2">Optimización Web</h3>
					<div class="text-2xl font-bold text-yellow-600 mb-2">desde 899€</div>
				</div>
				<div class="space-y-2 text-sm text-gray-600 mb-4">
					<div>• Audit performance completo</div>
					<div>• Core Web Vitals</div>
					<div>• SEO técnico avanzado</div>
					<div>• Optimización UX</div>
					<div>• Monitoreo continuo</div>
				</div>
				<div class="text-center text-sm text-yellow-600 font-medium">
					Ideal para: Mejorar webs existentes
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Price Calculator Section -->
<section id="calculadora" class="py-24 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-6">Calculadora de Precios Web</h2>
			<p class="text-xl text-white/90 max-w-3xl mx-auto">
				Calcula el precio de tu proyecto web al instante. Ajusta las opciones y obtén un presupuesto personalizado.
			</p>
		</div>
		
		<div class="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm p-8 border border-white/20">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<!-- Calculator Configuration -->
				<div class="space-y-6">
					<h3 class="text-2xl font-bold mb-6">Configuración del Proyecto</h3>
					
					<!-- Project Type -->
					<div>
						<label class="block text-white/90 mb-3 font-medium">Tipo de Proyecto</label>
						<div class="grid grid-cols-1 gap-2">
							{#each Object.entries(projectTypes) as [key, type]}
								<label class="flex items-center gap-3 bg-white/10 p-3 border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
									<input type="radio" bind:group={projectType} value={key} class="text-cyan-500">
									<div class="flex-1">
										<div class="font-bold">{type.name}</div>
										<div class="text-sm text-white/70">desde {type.basePrice}€</div>
									</div>
								</label>
							{/each}
						</div>
					</div>
					
					<!-- Number of Pages -->
					<div>
						<label class="block text-white/90 mb-2 font-medium">Número de Páginas</label>
						<input 
							type="range" 
							min="1" 
							max="50" 
							bind:value={pages}
							class="w-full"
						>
						<div class="flex justify-between text-sm text-white/70 mt-1">
							<span>1</span>
							<span class="font-bold text-white">{pages} páginas</span>
							<span>50+</span>
						</div>
						<div class="text-sm text-white/70 mt-1">
							Incluidas: {projectTypes[projectType].pages} | Extra: +199€/página
						</div>
					</div>
					
					<!-- Design Complexity -->
					<div>
						<label class="block text-white/90 mb-3 font-medium">Complejidad de Diseño</label>
						<div class="space-y-2">
							{#each Object.entries(designMultipliers) as [key, option]}
								<label class="flex items-center gap-3 bg-white/10 p-3 border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
									<input type="radio" bind:group={design} value={key} class="text-cyan-500">
									<div class="flex-1">
										<div class="font-bold">{option.name}</div>
										<div class="text-sm text-white/70">{option.description} (×{option.multiplier})</div>
									</div>
								</label>
							{/each}
						</div>
					</div>
					
					<!-- Features -->
					<div>
						<label class="block text-white/90 mb-3 font-medium">Funcionalidades Adicionales</label>
						<div class="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
							{#each featureOptions as feature}
								<label class="flex items-center gap-3 bg-white/10 p-2 border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
									<input type="checkbox" bind:group={features} value={feature.id} class="text-cyan-500">
									<div class="flex-1 flex justify-between items-center">
										<span class="text-sm">{feature.name}</span>
										<span class="text-sm font-bold">+{feature.price}€</span>
									</div>
								</label>
							{/each}
						</div>
					</div>
				</div>
				
				<!-- Price Summary -->
				<div class="space-y-6">
					<h3 class="text-2xl font-bold mb-6">Resumen y Precio</h3>
					
					<!-- Advanced Options -->
					<div class="space-y-4">
						<div>
							<label class="block text-white/90 mb-2 font-medium">Complejidad Técnica</label>
							<select bind:value={complexity} class="w-full bg-white/10 border border-white/20 text-white p-2">
								{#each Object.entries(complexityMultipliers) as [key, option]}
									<option value={key}>{option.name} - {option.description}</option>
								{/each}
							</select>
						</div>
						
						<div>
							<label class="block text-white/90 mb-2 font-medium">Timeline del Proyecto</label>
							<select bind:value={timeline} class="w-full bg-white/10 border border-white/20 text-white p-2">
								{#each Object.entries(timelineMultipliers) as [key, option]}
									<option value={key}>{option.name}</option>
								{/each}
							</select>
						</div>
						
						<div class="space-y-2">
							<label class="flex items-center gap-3">
								<input type="checkbox" bind:checked={maintenance} class="text-cyan-500">
								<span>Mantenimiento mensual (+99€/mes)</span>
							</label>
							<label class="flex items-center gap-3">
								<input type="checkbox" bind:checked={hosting} class="text-cyan-500">
								<span>Hosting gestionado (+29€/mes)</span>
							</label>
						</div>
					</div>
					
					<!-- Price Breakdown -->
					{#if window.calculatedPrice}
						<div class="bg-white/20 p-6 border border-white/30">
							<h4 class="text-xl font-bold mb-4">Desglose de Precio</h4>
							<div class="space-y-2 text-sm">
								<div class="flex justify-between">
									<span>Base ({projectTypes[projectType].name})</span>
									<span>{window.calculatedPrice.breakdown.base}€</span>
								</div>
								{#if window.calculatedPrice.breakdown.pages > 0}
									<div class="flex justify-between">
										<span>Páginas extra ({pages - projectTypes[projectType].pages})</span>
										<span>+{window.calculatedPrice.breakdown.pages}€</span>
									</div>
								{/if}
								{#if window.calculatedPrice.breakdown.features > 0}
									<div class="flex justify-between">
										<span>Funcionalidades</span>
										<span>+{window.calculatedPrice.breakdown.features}€</span>
									</div>
								{/if}
								{#if window.calculatedPrice.breakdown.complexity > 0}
									<div class="flex justify-between">
										<span>Complejidad técnica</span>
										<span>+{window.calculatedPrice.breakdown.complexity}€</span>
									</div>
								{/if}
								{#if window.calculatedPrice.breakdown.design > 0}
									<div class="flex justify-between">
										<span>Diseño personalizado</span>
										<span>+{window.calculatedPrice.breakdown.design}€</span>
									</div>
								{/if}
								{#if window.calculatedPrice.breakdown.timeline !== 0}
									<div class="flex justify-between">
										<span>Ajuste timeline</span>
										<span>{window.calculatedPrice.breakdown.timeline > 0 ? '+' : ''}{window.calculatedPrice.breakdown.timeline}€</span>
									</div>
								{/if}
							</div>
							
							<hr class="border-white/30 my-4">
							
							<div class="flex justify-between items-center text-xl font-bold">
								<span>TOTAL</span>
								<span class="text-cyan-300">{window.calculatedPrice.total}€</span>
							</div>
							
							{#if window.calculatedPrice.monthly > 0}
								<div class="flex justify-between items-center mt-2">
									<span class="text-sm">Servicios mensuales</span>
									<span class="text-cyan-300 font-bold">{window.calculatedPrice.monthly}€/mes</span>
								</div>
							{/if}
							
							<div class="flex justify-between items-center mt-2 text-sm">
								<span>Tiempo estimado</span>
								<span class="text-white/80">{window.calculatedPrice.weeks} semanas</span>
							</div>
							
							<button 
								on:click={copyCalculatorResults}
								class="w-full mt-4 bg-cyan-500 text-white py-2 px-4 font-bold hover:bg-cyan-600 transition-colors"
							>
								Copiar Presupuesto
							</button>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section id="contact" class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Consulta Personalizada</h2>
				<p class="text-xl text-gray-600">
					¿Tienes un proyecto específico en mente? Hablemos sobre tus necesidades y 
					<strong>te daremos un presupuesto detallado</strong> en 24 horas.
				</p>
			</div>
			
			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="nombre" class="block text-gray-700 font-medium mb-2">Nombre Completo *</label>
						<input 
							id="nombre"
							type="text" 
							bind:value={contactForm.nombre}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-cyan-600 focus:outline-none"
						>
					</div>
					<div>
						<label for="empresa" class="block text-gray-700 font-medium mb-2">Empresa</label>
						<input 
							id="empresa"
							type="text" 
							bind:value={contactForm.empresa}
							class="w-full px-4 py-3 border border-gray-300 focus:border-cyan-600 focus:outline-none"
						>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="email" class="block text-gray-700 font-medium mb-2">Email *</label>
						<input 
							id="email"
							type="email" 
							bind:value={contactForm.email}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-cyan-600 focus:outline-none"
						>
					</div>
					<div>
						<label for="telefono" class="block text-gray-700 font-medium mb-2">Teléfono</label>
						<input 
							id="telefono"
							type="tel" 
							bind:value={contactForm.telefono}
							class="w-full px-4 py-3 border border-gray-300 focus:border-cyan-600 focus:outline-none"
						>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="proyecto" class="block text-gray-700 font-medium mb-2">Tipo de Proyecto</label>
						<select id="proyecto" bind:value={contactForm.proyecto} class="w-full px-4 py-3 border border-gray-300 focus:border-cyan-600 focus:outline-none">
							<option value="">Seleccionar...</option>
							<option value="landing">Landing Page</option>
							<option value="corporativa">Web Corporativa</option>
							<option value="ecommerce">Tienda Online</option>
							<option value="webapp">Aplicación Web</option>
							<option value="custom">Proyecto Personalizado</option>
							<option value="optimizacion">Optimización Web Existente</option>
						</select>
					</div>
					<div>
						<label for="presupuesto" class="block text-gray-700 font-medium mb-2">Presupuesto Estimado</label>
						<select id="presupuesto" bind:value={contactForm.presupuesto} class="w-full px-4 py-3 border border-gray-300 focus:border-cyan-600 focus:outline-none">
							<option value="">Seleccionar...</option>
							<option value="500-1000">500€ - 1.000€</option>
							<option value="1000-2500">1.000€ - 2.500€</option>
							<option value="2500-5000">2.500€ - 5.000€</option>
							<option value="5000-10000">5.000€ - 10.000€</option>
							<option value="10000+">Más de 10.000€</option>
						</select>
					</div>
				</div>
				
				<div>
					<label for="timeline" class="block text-gray-700 font-medium mb-2">Timeline Deseado</label>
					<select id="timeline" bind:value={contactForm.timeline} class="w-full px-4 py-3 border border-gray-300 focus:border-cyan-600 focus:outline-none">
						<option value="">Seleccionar...</option>
						<option value="urgente">Urgente (1-2 semanas)</option>
						<option value="rapido">Rápido (3-4 semanas)</option>
						<option value="normal">Normal (1-2 meses)</option>
						<option value="flexible">Flexible (2+ meses)</option>
					</select>
				</div>
				
				<div>
					<label for="mensaje" class="block text-gray-700 font-medium mb-2">Descripción del Proyecto</label>
					<textarea 
						id="mensaje"
						bind:value={contactForm.mensaje}
						rows="5"
						placeholder="Describe tu proyecto: objetivos, funcionalidades específicas, diseño deseado, integraciones necesarias, referencias que te gusten..."
						class="w-full px-4 py-3 border border-gray-300 focus:border-cyan-600 focus:outline-none"
					></textarea>
				</div>
				
				<div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 p-4">
					<div class="flex items-start gap-3">
						<Icon name="clock" size={20} color="#0891b2" />
						<div>
							<h4 class="font-bold text-cyan-800 mb-1">Respuesta Garantizada en 24h</h4>
							<ul class="text-cyan-700 text-sm space-y-1">
								<li>• Presupuesto detallado personalizado</li>
								<li>• Timeline específico del proyecto</li>
								<li>• Propuesta técnica y tecnologías</li>
								<li>• Primera consulta gratuita por videollamada</li>
							</ul>
						</div>
					</div>
				</div>
				
				<button 
					type="submit"
					class="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 px-8 font-bold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200"
				>
					ENVIAR CONSULTA - RESPUESTA EN 24H
				</button>
				
				<p class="text-center text-gray-500 text-sm">
					Consulta sin compromiso. Te contactamos en menos de 24 horas.
				</p>
			</form>
		</div>
	</div>
</section>

<style>
	.pattern-code {
		background-image: 
			linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.05) 60%, transparent 60%),
			linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0.08) 60%, transparent 60%);
		background-size: 12px 12px;
	}
	
	select {
		color: white;
		background-color: rgba(255, 255, 255, 0.1);
	}
	
	select option {
		background-color: #1e293b;
		color: white;
	}
</style>
