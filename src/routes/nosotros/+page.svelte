<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import SEO from '$lib/components/SEO.svelte';
	import { SEO_PAGES } from '$lib/utils/seo';
	
	// Hero metrics animation
	const experience = tweened(0, { duration: 2000, easing: cubicOut });
	const projects = tweened(0, { duration: 2000, easing: cubicOut });
	const clients = tweened(0, { duration: 2000, easing: cubicOut });
	const expertise = tweened(0, { duration: 2000, easing: cubicOut });
	
	onMount(() => {
		// Start metrics animation
		setTimeout(() => {
			experience.set(8);
			projects.set(50);
			clients.set(15);
			expertise.set(6);
		}, 800);
	});
	
	const companyStats = [
		{ label: 'FUNDACIÓN', value: '2019', description: 'Laboratorio creado' },
		{ label: 'ESPECIALISTAS', value: '2', description: 'Expertos técnicos' },
		{ label: 'PROYECTOS', value: '50+', description: 'Enterprise exitosos' },
		{ label: 'SOBERANÍA', value: '100%', description: 'Datos locales' }
	];

	const teamMembers = [
		{
			name: 'Antonio Romero',
			role: 'Founder & CTO',
			title: 'DevOps, Backend & AI Development',
			description: 'Arquitecto de sistemas enterprise y fundador de Formeta Labs. Especialista en DevOps, desarrollo backend, IA local y compliance VeriFactu. Lidera la estrategia tecnológica y la implementación de soluciones de soberanía digital.',
			skills: ['Enterprise Architecture', 'DevOps & Infrastructure', 'Backend Development', 'Local AI Systems', 'VeriFactu Compliance'],
			technologies: ['Node.js', 'PostgreSQL', 'Docker', 'Ollama', 'Linux'],
			experience: '8+ años',
			certifications: ['VeriFactu AEAT Certified', 'Docker Enterprise', 'AWS Solutions Architect'],
			icon: 'zap',
			expertise: 'DevOps & Backend & AI',
			focus: 'Infraestructura, sistemas backend robustos y soluciones de IA empresarial local'
		},
		{
			name: 'Fabio Cardoso',
			role: 'Frontend Lead & Operations',
			title: 'Frontend Development, Contact Manager & Ops',
			description: 'Especialista en desarrollo frontend moderno y gestión de operaciones. Lidera el diseño de interfaces usuario enterprise, coordina proyectos cliente y optimiza procesos internos para máxima eficiencia.',
			skills: ['Frontend Development', 'UX/UI Design', 'Project Management', 'Client Relations', 'Process Optimization'],
			technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Figma', 'Notion'],
			experience: '6+ años',
			certifications: ['Google UX Certified', 'Agile Project Management', 'TypeScript Advanced'],
			icon: 'monitor',
			expertise: 'Frontend & Operations',
			focus: 'Interfaces modernas, experiencia usuario y gestión eficiente de proyectos'
		}
	];

	const companyValues: Array<{title: string, description: string, icon: string}> = [
		// Valores eliminados según solicitud del usuario
	];

	const timeline = [
		{
			year: '2019',
			title: 'Fundación del Laboratorio',
			description: 'Inicio como estudio de desarrollo especializado en soluciones empresariales.',
			icon: 'rocket'
		},
		{
			year: '2021',
			title: 'Especialización VeriFactu',
			description: 'Primeras implementaciones de compliance fiscal y certificación AEAT.',
			icon: 'shield'
		},
		{
			year: '2023',
			title: 'IA Local Enterprise',
			description: 'Desarrollo de soluciones RAG con Ollama y soberanía de datos garantizada.',
			icon: 'cpu'
		},
		{
			year: '2025',
			title: 'Formeta.Labs',
			description: 'Evolución hacia laboratorio de innovación digital con protocolo MCP.',
			icon: 'zap'
		}
	];
</script>

<!-- SEO optimizado para página sobre nosotros -->
<SEO 
	title={SEO_PAGES.nosotros.title}
	description={SEO_PAGES.nosotros.description}
	keywords={SEO_PAGES.nosotros.keywords}
	ogType={SEO_PAGES.nosotros.ogType}
	ogImage="/images/og/formeta-labs-nosotros.jpg"
/>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-800 overflow-hidden">
	<!-- Unique organic patterns -->
	<div class="absolute inset-0">
		<div class="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-transparent to-teal-950/30"></div>
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_50%)]"></div>
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(45,212,191,0.1),transparent_50%)]"></div>
		<div class="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-teal-400/15 to-transparent rounded-full blur-3xl"></div>
	</div>
	
	<!-- Floating lab indicator -->
	<div class="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
		<div class="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl shadow-2xl">
			<Icon name="beaker" size={20} className="text-emerald-400" />
			<span class="text-white font-mono text-sm font-semibold tracking-wide">LABORATORIO DE INNOVACIÓN</span>
			<div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
		</div>
	</div>
	
	<!-- Creative ASCII patterns -->
	<div class="absolute inset-0 font-mono text-emerald-400/20 select-none pointer-events-none">
		<div class="absolute top-20 left-16 text-4xl animate-pulse">✦</div>
		<div class="absolute top-40 right-20 text-3xl animate-bounce delay-1000">⬡</div>
		<div class="absolute bottom-24 left-12 text-5xl animate-pulse delay-500">◉</div>
		<div class="absolute bottom-40 right-16 text-2xl animate-bounce delay-700">⬢</div>
		<div class="absolute top-1/2 left-8 text-xl opacity-40 transform -rotate-12">✧ ✧</div>
		<div class="absolute top-1/3 right-8 text-xl opacity-40 transform rotate-12">⬡ ⬡</div>
	</div>
	
	<div class="relative container mx-auto px-6 text-center text-white z-10">
		<!-- Unique header design -->
		<div class="mb-10">
			<div class="flex items-center justify-center gap-4 mb-8">
				<span class="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></span>
				<span class="text-emerald-300/80 text-sm font-mono font-medium tracking-[0.3em] uppercase">EQUIPO ESPECIALIZADO</span>
				<span class="w-16 h-px bg-gradient-to-l from-transparent via-emerald-400 to-transparent"></span>
			</div>
			
			<h1 class="text-6xl md:text-8xl font-bold mb-6 leading-none">
				<span class="text-white">Formeta</span>
				<span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">.Labs</span>
			</h1>
			
			<div class="max-w-4xl mx-auto mb-8">
				<p class="text-xl md:text-2xl text-emerald-200 font-medium mb-4 leading-relaxed">
					<strong>Laboratorio de innovación digital</strong> especializado en 
					<strong class="text-emerald-400">soberanía de datos</strong> y <strong class="text-teal-400">tecnología española</strong>
				</p>
				<p class="text-lg text-white/80 leading-relaxed">
					VeriFactu Compliance • IA Empresarial Local • Desarrollo Web Avanzado • Automatización Inteligente
				</p>
			</div>
		</div>
		
		<!-- Team metrics design -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
					{Math.round($experience)}+
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Años</div>
				<div class="text-xs text-white/60">Experiencia</div>
			</div>
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-teal-400 mb-2 group-hover:text-teal-300 transition-colors">
					{Math.round($projects)}+
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Proyectos</div>
				<div class="text-xs text-white/60">Entregados</div>
			</div>
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
					{Math.round($clients)}+
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Empresas</div>
				<div class="text-xs text-white/60">Confiadas</div>
			</div>
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-teal-400 mb-2 group-hover:text-teal-300 transition-colors">
					{Math.round($expertise)}
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Especialidades</div>
				<div class="text-xs text-white/60">Core</div>
			</div>
		</div>
		
		<!-- Team focused CTAs -->
		<div class="flex flex-col sm:flex-row gap-6 justify-center mb-8">
			<a href="#equipo" class="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25">
				<span class="flex items-center gap-3">
					CONOCER EQUIPO
					<Icon name="users" size={16} className="group-hover:scale-110 transition-transform" />
				</span>
			</a>
			<a href="#mision" class="group bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
				<span class="flex items-center gap-3">
					NUESTRA MISIÓN
					<Icon name="target" size={16} className="group-hover:rotate-12 transition-transform" />
				</span>
			</a>
		</div>
		
		<!-- Lab feature badges -->
		<div class="flex flex-wrap gap-4 justify-center">
			<div class="bg-gradient-to-r from-emerald-600/20 to-emerald-400/10 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 flex items-center gap-2">
				<Icon name="beaker" size={16} className="text-emerald-400" />
				<span class="text-sm font-medium text-emerald-200">Laboratorio I+D</span>
			</div>
			<div class="bg-gradient-to-r from-teal-600/20 to-teal-400/10 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-3 flex items-center gap-2">
				<Icon name="globe" size={16} className="text-teal-400" />
				<span class="text-sm font-medium text-teal-200">Soberanía Datos</span>
			</div>
			<div class="bg-gradient-to-r from-green-600/20 to-green-400/10 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 flex items-center gap-2">
				<Icon name="shield" size={16} className="text-green-400" />
				<span class="text-sm font-medium text-green-200">Cumplimiento AEAT</span>
			</div>
		</div>
	</div>
</section>

<!-- Mission & Vision with Glassmorphism -->
<section id="mision" class="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
	<!-- Glassmorphism background elements -->
	<div class="absolute inset-0">
		<div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/8 rounded-full blur-3xl"></div>
		<div class="absolute top-1/3 right-1/4 w-64 h-64 bg-accent-500/6 rounded-full blur-3xl"></div>
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-text-900 mb-6">
					Nuestra <span class="text-primary-500">Misión</span>
				</h2>
				<p class="text-lg text-text-700 max-w-3xl mx-auto">
					Democratizar la digitalización empresarial con tecnología española de vanguardia, 
					garantizando soberanía de datos y cumplimiento normativo integral.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div class="glass-card group p-8">
					<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-2xl"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
					<div class="absolute inset-0 border border-white/20 rounded-2xl"></div>
					
					<div class="relative z-10">
						<h3 class="text-3xl font-bold text-text-900 mb-6 flex items-center">
							<Icon name="target" size={32} className="mr-4 text-primary-500" />
							Misión
						</h3>
						<p class="text-lg text-text-700 mb-8 leading-relaxed">
							Ser el <strong>dúo tecnológico de referencia</strong> en digitalización empresarial española, 
							proporcionando soluciones tecnológicas avanzadas que garanticen <strong>soberanía digital</strong>, 
							<strong>compliance VeriFactu</strong> y <strong>IA empresarial local</strong> con atención personalizada.
						</p>
						
						<div class="flex items-center gap-4 mb-6">
							<Icon name="rocket" size={32} className="text-primary-500" />
							<h3 class="text-3xl font-bold text-text-900">Visión</h3>
						</div>
						<p class="text-lg text-text-700 leading-relaxed">
							Demostrar que un <strong>equipo pequeño y especializado</strong> puede superar a las grandes consultoras 
							mediante <strong>comunicación directa</strong>, <strong>tecnología de vanguardia</strong> y 
							<strong>pasión genuina</strong> por crear soluciones que realmente funcionen.
						</p>
					</div>
				</div>
				
				<div class="glass-card group p-8">
					<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-2xl"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
					<div class="absolute inset-0 border border-white/20 rounded-2xl"></div>
					
					<div class="relative z-10">
						<h4 class="text-2xl font-bold text-text-900 mb-6">Valores Fundamentales</h4>
						<div class="space-y-4">
							<div class="flex items-start gap-4 p-4 bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/40 transition-all duration-300">
								<div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center rounded-xl shadow-lg">
									<Icon name="users" size={16} className="text-white" />
								</div>
								<div>
									<h5 class="font-bold text-text-900">Comunicación Directa</h5>
									<p class="text-text-700">Trato personal con los desarrolladores, sin intermediarios</p>
								</div>
							</div>
							<div class="flex items-start gap-4 p-4 bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/40 transition-all duration-300">
								<div class="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white flex items-center justify-center rounded-xl shadow-lg">
									<Icon name="lock" size={16} className="text-white" />
								</div>
								<div>
									<h5 class="font-bold text-text-900">Soberanía Digital</h5>
									<p class="text-text-700">Datos y procesos bajo control empresarial total</p>
								</div>
							</div>
							<div class="flex items-start gap-4 p-4 bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/40 transition-all duration-300">
								<div class="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 text-white flex items-center justify-center rounded-xl shadow-lg">
									<Icon name="zap" size={16} className="text-white" />
								</div>
								<div>
									<h5 class="font-bold text-text-900">Innovación Práctica</h5>
									<p class="text-text-700">Tecnología de vanguardia con impacto empresarial real</p>
								</div>
							</div>
							<div class="flex items-start gap-4 p-4 bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/40 transition-all duration-300">
								<div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center rounded-xl shadow-lg">
									<Icon name="check" size={16} className="text-white" />
								</div>
								<div>
									<h5 class="font-bold text-text-900">Calidad Artesanal</h5>
									<p class="text-text-700">Cada línea de código revisada, cada proyecto único</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Company Timeline with Glassmorphism -->
<section class="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-50 relative overflow-hidden">
	<!-- Enhanced glassmorphism background -->
	<div class="absolute inset-0">
		<div class="absolute top-32 left-20 w-80 h-80 bg-primary-400/8 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-32 right-20 w-96 h-96 bg-secondary-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-400/7 rounded-full blur-3xl animate-pulse delay-500"></div>
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-text-900 mb-6">
					Nuestra <span class="text-primary-500">Evolución</span>
				</h2>
				<p class="text-lg text-text-700 max-w-3xl mx-auto">
					Desde desarrollo web hasta IA empresarial local. Un viaje de innovación constante 
					en el ecosistema tecnológico español.
				</p>
			</div>
			
			<div class="space-y-12">
				<!-- 2019 -->
				<div class="glass-card group relative overflow-hidden p-8 hover:scale-[1.02] transition-all duration-300">
					<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="absolute inset-0 border border-white/20 rounded-2xl"></div>
					
					<div class="flex flex-col md:flex-row gap-8 items-center relative z-10">
						<div class="md:w-1/4">
							<div class="bg-gradient-to-br from-primary-500 to-primary-600 text-white px-6 py-3 text-center font-bold text-xl rounded-xl shadow-lg">
								2019
							</div>
						</div>
						<div class="md:w-3/4">
							<div class="flex items-center gap-3 mb-4">
								<Icon name="play" size={24} className="text-primary-500" />
								<h3 class="text-2xl font-bold text-text-900">Inicio de la Aventura</h3>
							</div>
							<p class="text-text-700 mb-4">
								Antonio inicia como freelancer especializado en desarrollo web y backend. 
								Primeros proyectos de digitalización para empresas locales.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="bg-white/40 backdrop-blur-sm border border-white/20 px-3 py-1 text-sm rounded-lg text-text-800 font-medium">PHP</span>
								<span class="bg-white/40 backdrop-blur-sm border border-white/20 px-3 py-1 text-sm rounded-lg text-text-800 font-medium">MySQL</span>
								<span class="bg-white/40 backdrop-blur-sm border border-white/20 px-3 py-1 text-sm rounded-lg text-text-800 font-medium">JavaScript</span>
								<span class="bg-white/40 backdrop-blur-sm border border-white/20 px-3 py-1 text-sm rounded-lg text-text-800 font-medium">Linux</span>
							</div>
						</div>
					</div>
				</div>
				
				<!-- 2021 -->
				<div class="glass-card group relative overflow-hidden p-8 hover:scale-[1.02] transition-all duration-300">
					<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-secondary-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="absolute inset-0 border border-white/20 rounded-2xl"></div>
					
					<div class="flex flex-col md:flex-row gap-8 items-center relative z-10">
						<div class="md:w-1/4">
							<div class="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white px-6 py-3 text-center font-bold text-xl rounded-xl shadow-lg">
								2021
							</div>
						</div>
						<div class="md:w-3/4">
							<div class="flex items-center gap-3 mb-4">
								<Icon name="users" size={24} className="text-secondary-500" />
								<h3 class="text-2xl font-bold text-text-900">Formación del Dúo</h3>
							</div>
							<p class="text-text-700 mb-4">
								Fabio se une al equipo aportando expertise en frontend y gestión de proyectos. 
								Evolución hacia stack moderno con SvelteKit y Docker.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="bg-white/40 backdrop-blur-sm border border-white/20 px-3 py-1 text-sm rounded-lg text-text-800 font-medium">SvelteKit</span>
								<span class="bg-white/40 backdrop-blur-sm border border-white/20 px-3 py-1 text-sm rounded-lg text-text-800 font-medium">Node.js</span>
								<span class="bg-white/40 backdrop-blur-sm border border-white/20 px-3 py-1 text-sm rounded-lg text-text-800 font-medium">PostgreSQL</span>
								<span class="bg-white/40 backdrop-blur-sm border border-white/20 px-3 py-1 text-sm rounded-lg text-text-800 font-medium">Docker</span>
							</div>
						</div>
					</div>
				</div>
				
				<!-- 2023 -->
				<div class="glass-card group relative overflow-hidden p-8 hover:scale-[1.02] transition-all duration-300">
					<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="absolute inset-0 border border-white/20 rounded-2xl"></div>
					
					<div class="flex flex-col md:flex-row gap-8 items-center relative z-10">
						<div class="md:w-1/4">
							<div class="bg-gradient-to-br from-red-500 to-red-600 text-white px-6 py-3 text-center font-bold text-xl rounded-xl shadow-lg">
								2023
							</div>
						</div>
						<div class="md:w-3/4">
							<div class="flex items-center gap-3 mb-4">
								<Icon name="scale" size={24} className="text-red-500" />
								<h3 class="text-2xl font-bold text-text-900">Especialización VeriFactu</h3>
							</div>
							<p class="text-text-700 mb-4">
								Pioneros en implementación de sistemas VeriFactu para empresas españolas. 
								Antonio lidera el desarrollo de soluciones de compliance fiscal.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="bg-red-100/60 backdrop-blur-sm border border-red-200/50 px-3 py-1 text-sm rounded-lg text-red-700 font-medium">VeriFactu</span>
								<span class="bg-red-100/60 backdrop-blur-sm border border-red-200/50 px-3 py-1 text-sm rounded-lg text-red-700 font-medium">AEAT API</span>
								<span class="bg-red-100/60 backdrop-blur-sm border border-red-200/50 px-3 py-1 text-sm rounded-lg text-red-700 font-medium">XML/JSON</span>
								<span class="bg-red-100/60 backdrop-blur-sm border border-red-200/50 px-3 py-1 text-sm rounded-lg text-red-700 font-medium">Criptografía</span>
							</div>
						</div>
					</div>
				</div>
				
				<!-- 2024 -->
				<div class="glass-card group relative overflow-hidden p-8 hover:scale-[1.02] transition-all duration-300">
					<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="absolute inset-0 border border-white/20 rounded-2xl"></div>
					
					<div class="flex flex-col md:flex-row gap-8 items-center relative z-10">
						<div class="md:w-1/4">
							<div class="bg-gradient-to-br from-green-500 to-green-600 text-white px-6 py-3 text-center font-bold text-xl rounded-xl shadow-lg">
								2024
							</div>
						</div>
						<div class="md:w-3/4">
							<div class="flex items-center gap-3 mb-4">
								<Icon name="cpu" size={24} className="text-green-500" />
								<h3 class="text-2xl font-bold text-text-900">🤖 Revolución IA Local</h3>
							</div>
							<p class="text-text-700 mb-4">
								Implementación de sistemas de IA empresarial 100% local. Antonio desarrolla soluciones RAG 
								mientras Fabio optimiza las interfaces para máxima usabilidad.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="bg-green-100/60 backdrop-blur-sm border border-green-200/50 px-3 py-1 text-sm rounded-lg text-green-700 font-medium">Ollama</span>
								<span class="bg-green-100/60 backdrop-blur-sm border border-green-200/50 px-3 py-1 text-sm rounded-lg text-green-700 font-medium">pgvector</span>
								<span class="bg-green-100/60 backdrop-blur-sm border border-green-200/50 px-3 py-1 text-sm rounded-lg text-green-700 font-medium">RAG</span>
								<span class="bg-green-100/60 backdrop-blur-sm border border-green-200/50 px-3 py-1 text-sm rounded-lg text-green-700 font-medium">Local LLMs</span>
							</div>
						</div>
					</div>
				</div>
				
				<!-- 2025 -->
				<div class="glass-card group relative overflow-hidden p-8 hover:scale-[1.02] transition-all duration-300">
					<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="absolute inset-0 border border-white/20 rounded-2xl"></div>
					
					<div class="flex flex-col md:flex-row gap-8 items-center relative z-10">
						<div class="md:w-1/4">
							<div class="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white px-6 py-3 text-center font-bold text-xl rounded-xl shadow-lg">
								2025
							</div>
						</div>
						<div class="md:w-3/4">
							<div class="flex items-center gap-3 mb-4">
								<Icon name="trophy" size={24} className="text-primary-500" />
								<h3 class="text-2xl font-bold text-text-900">Formeta Labs - Dúo Enterprise</h3>
							</div>
							<p class="text-text-700 mb-4">
								Consolidación como dúo tecnológico líder en soberanía digital. 
								Especialización completa en VeriFactu, IA local y desarrollo web enterprise.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="bg-blue-100/60 backdrop-blur-sm border border-blue-200/50 px-3 py-1 text-sm rounded-lg text-blue-700 font-medium">Full Stack</span>
								<span class="bg-blue-100/60 backdrop-blur-sm border border-blue-200/50 px-3 py-1 text-sm rounded-lg text-blue-700 font-medium">DevOps</span>
								<span class="bg-blue-100/60 backdrop-blur-sm border border-blue-200/50 px-3 py-1 text-sm rounded-lg text-blue-700 font-medium">Enterprise AI</span>
								<span class="bg-blue-100/60 backdrop-blur-sm border border-blue-200/50 px-3 py-1 text-sm rounded-lg text-blue-700 font-medium">Data Sovereignty</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Team Section with Enhanced Glassmorphism -->
<section id="equipo" class="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-50 relative overflow-hidden">
	<!-- Enhanced glassmorphism background -->
	<div class="absolute inset-0">
		<div class="absolute top-32 left-16 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-32 right-16 w-96 h-96 bg-secondary-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/3 w-72 h-72 bg-accent-400/6 rounded-full blur-3xl animate-pulse delay-500"></div>
		<div class="pattern-formeta h-full w-full opacity-5"></div>
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<div class="flex items-center justify-center gap-4 mb-8">
					<span class="w-16 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></span>
					<span class="text-primary-500/80 text-sm font-mono font-medium tracking-[0.3em] uppercase">EQUIPO ESPECIALIZADO</span>
					<span class="w-16 h-px bg-gradient-to-l from-transparent via-primary-500 to-transparent"></span>
				</div>
				<h2 class="text-4xl md:text-5xl font-bold text-text-900 mb-6">
					Nuestro <span class="text-primary-500">Equipo</span>
				</h2>
				<p class="text-lg text-text-700 max-w-3xl mx-auto">
					<strong>Dos especialistas técnicos</strong> con experiencia complementaria en 
					<strong class="text-primary-500">desarrollo full-stack</strong>, 
					<strong class="text-primary-500">DevOps</strong> y 
					<strong class="text-primary-500">IA empresarial</strong>. 
					Calidad garantizada y atención personalizada.
				</p>
			</div>
			
			<!-- Enhanced Team Cards -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
				{#each teamMembers as member}
					<div class="formeta-team-card group">
						<!-- Member Header -->
						<div class="flex items-start gap-6 mb-8">
							<div class="member-avatar">
								<Icon name={member.icon} size={40} className="text-white" />
							</div>
							<div class="flex-1">
								<h3 class="text-2xl font-bold text-formeta-text mb-2">{member.name}</h3>
								<p class="text-formeta-primary font-semibold text-lg mb-1">{member.role}</p>
								<p class="text-formeta-text/70 font-medium">{member.title}</p>
								<div class="mt-3">
									<span class="expertise-badge">{member.expertise}</span>
								</div>
							</div>
						</div>
						
						<!-- Member Description -->
						<div class="mb-8">
							<p class="text-formeta-text/80 leading-relaxed mb-4">
								{member.description}
							</p>
							<div class="focus-area">
								<h5 class="text-sm font-bold text-formeta-text/70 uppercase tracking-wide mb-2">Enfoque Principal</h5>
								<p class="text-sm text-formeta-text/70 italic">{member.focus}</p>
							</div>
						</div>
						
						<!-- Skills Grid -->
						<div class="mb-8">
							<h4 class="font-bold text-formeta-text mb-4 flex items-center gap-2">
								<Icon name="star" size={16} className="text-formeta-primary" />
								Competencias Clave
							</h4>
							<div class="grid grid-cols-1 gap-3">
								{#each member.skills as skill}
									<div class="skill-item">
										<Icon name="check" size={14} className="text-green-600" />
										<span class="text-sm font-medium text-formeta-text">{skill}</span>
									</div>
								{/each}
							</div>
						</div>
						
						<!-- Technologies -->
						<div class="mb-8">
							<h4 class="font-bold text-formeta-text mb-4 flex items-center gap-2">
								<Icon name="code" size={16} className="text-formeta-primary" />
								Stack Tecnológico
							</h4>
							<div class="flex flex-wrap gap-2">
								{#each member.technologies as tech}
									<span class="tech-badge">{tech}</span>
								{/each}
							</div>
						</div>
						
						<!-- Experience & Certifications -->
						<div class="member-footer">
							<div class="flex items-center gap-2 mb-2">
								<Icon name="calendar" size={14} className="text-formeta-primary" />
								<span class="text-sm font-medium text-formeta-text">Experiencia: {member.experience}</span>
							</div>
							<div class="flex items-center gap-2">
								<Icon name="award" size={14} className="text-formeta-primary" />
								<span class="text-sm text-formeta-text/70">{member.certifications.length} certificaciones activas</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Team Strengths with Glassmorphism -->
			<div class="glass-card group relative overflow-hidden p-8 mb-16">
				<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg"></div>
				<div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="absolute inset-0 border border-white/20 rounded-2xl"></div>
				
				<div class="relative z-10">
					<div class="text-center mb-8">
						<h3 class="text-2xl font-bold text-text-900 mb-4">¿Por Qué Somos Diferentes?</h3>
						<p class="text-text-700">Un equipo pequeño pero altamente especializado con ventajas únicas</p>
					</div>
					
					<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div class="text-center p-6 bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/40 transition-all duration-300">
							<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center rounded-2xl mx-auto mb-4 shadow-lg">
								<Icon name="zap" size={32} className="text-white" />
							</div>
							<h4 class="font-bold text-text-900 mb-3">Comunicación Directa</h4>
							<p class="text-sm text-text-700">
								Trato directo con los desarrolladores. Sin intermediarios, sin malentendidos. 
								Feedback inmediato y soluciones rápidas.
							</p>
						</div>
						
						<div class="text-center p-6 bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/40 transition-all duration-300">
							<div class="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 text-white flex items-center justify-center rounded-2xl mx-auto mb-4 shadow-lg">
								<Icon name="target" size={32} className="text-white" />
							</div>
							<h4 class="font-bold text-text-900 mb-3">Especialización Total</h4>
							<p class="text-sm text-text-700">
								Cada miembro domina completamente su área. DevOps + Backend + IA Local + Frontend + Ops. 
								Stack completo cubierto.
							</p>
						</div>
						
						<div class="text-center p-6 bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/40 transition-all duration-300">
							<div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 text-white flex items-center justify-center rounded-2xl mx-auto mb-4 shadow-lg">
								<Icon name="heart" size={32} className="text-white" />
							</div>
							<h4 class="font-bold text-text-900 mb-3">Pasión por el Código</h4>
							<p class="text-sm text-text-700">
								Desarrollamos porque nos apasiona. Cada proyecto es una oportunidad de crear 
								algo excepcional y duradero.
							</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Company Values -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each companyValues as value}
					<div class="text-center group">
						<div class="w-16 h-16 bg-formeta-primary text-white flex items-center justify-center mx-auto mb-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
							<Icon name={value.icon} size={32} color="white" />
						</div>
						<h3 class="text-xl font-bold text-formeta-text mb-3 group-hover:text-formeta-primary transition-colors">{value.title}</h3>
						<p class="text-formeta-text/70 leading-relaxed">{value.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Why Local AI Section -->
<section class="py-20 bg-gradient-to-br from-formeta-primary via-formeta-secondary to-formeta-primary text-white relative overflow-hidden">
	<!-- Enhanced background patterns -->
	<div class="absolute inset-0">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,146,60,0.2),transparent_50%)]"></div>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.15),transparent_50%)]"></div>
		<div class="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.05)_50%,transparent_60%)]"></div>
	</div>
	
	<!-- Floating AI indicators -->
	<div class="absolute top-8 left-8">
		<div class="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl">
			<span class="text-2xl">🤖</span>
			<span class="text-white font-mono text-sm font-semibold">IA LOCAL</span>
		</div>
	</div>
	<div class="absolute top-8 right-8">
		<div class="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl">
			<Icon name="shield" size={20} className="text-emerald-400" />
			<span class="text-white font-mono text-sm font-semibold">SOBERANÍA</span>
		</div>
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<div class="flex items-center justify-center gap-4 mb-8">
					<span class="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent"></span>
					<span class="text-white/80 text-sm font-mono font-medium tracking-[0.3em] uppercase">TECNOLOGÍA SOBERANA</span>
					<span class="w-16 h-px bg-gradient-to-l from-transparent via-white to-transparent"></span>
				</div>
				<h2 class="text-4xl md:text-6xl font-bold mb-6">
					¿Por Qué IA <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Local</span>?
				</h2>
				<p class="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
					<strong>Formeta Labs</strong> defiende la <strong class="text-yellow-300">soberanía digital empresarial</strong>. 
					Comparamos nuestra filosofía de IA local vs. soluciones cloud tradicionales.
				</p>
			</div>
			
			<!-- Enhanced Comparison Grid -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
				<!-- Local AI Advantages (Formeta) -->
				<div class="ai-comparison-card local-ai-card">
					<div class="card-header">
						<div class="flex items-center gap-4 mb-6">
							<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
								<Icon name="check-circle" size={32} className="text-white" />
							</div>
							<div>
								<h3 class="text-2xl font-bold text-gray-900">IA Local</h3>
								<p class="text-green-600 font-medium">Formeta Labs Approach</p>
							</div>
						</div>
						<div class="local-ai-badge">
							<span class="text-sm font-bold">🇪🇸 SOBERANÍA ESPAÑOLA</span>
						</div>
					</div>
					
					<div class="space-y-6">
						<div class="advantage-item">
							<div class="advantage-icon bg-green-500">
								<Icon name="lock" size={16} className="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">100% Soberanía de Datos</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									Sus datos empresariales <strong class="text-gray-900">nunca abandonan su infraestructura</strong>. 
									Control total, cumplimiento RGPD nativo y autonomía digital completa.
								</p>
							</div>
						</div>
						
						<div class="advantage-item">
							<div class="advantage-icon bg-green-500">
								<Icon name="zap" size={16} className="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">Latencia Ultra-Baja</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									<strong class="text-gray-900">Procesamiento local = velocidad máxima</strong>. 
									Respuestas en &lt;200ms vs. 500ms-2s típicos del cloud.
								</p>
							</div>
						</div>
						
						<div class="advantage-item">
							<div class="advantage-icon bg-green-500">
								<Icon name="shield" size={16} className="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">Compliance por Diseño</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									<strong class="text-gray-900">RGPD, LOPD, ISO 27001</strong> cumplidos automáticamente. 
									Sin transferencias internacionales ni riesgos legales.
								</p>
							</div>
						</div>
						
						<div class="advantage-item">
							<div class="advantage-icon bg-green-500">
								<Icon name="trending-down" size={16} className="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">Costes Predecibles</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									<strong class="text-gray-900">Inversión única, sin sorpresas</strong>. 
									Coste fijo independiente del volumen de uso o consultas.
								</p>
							</div>
						</div>
						
						<div class="advantage-item">
							<div class="advantage-icon bg-green-500">
								<Icon name="cpu" size={16} className="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">Personalización Total</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									<strong class="text-gray-900">Modelos adaptados a su sector</strong>. 
									Fine-tuning con sus datos específicos y terminología empresarial.
								</p>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Cloud AI Disadvantages -->
				<div class="ai-comparison-card cloud-ai-card">
					<div class="card-header">
						<div class="flex items-center gap-4 mb-6">
							<div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
								<Icon name="x-circle" size={32} className="text-white" />
							</div>
							<div>
								<h3 class="text-2xl font-bold text-gray-900">IA Cloud</h3>
								<p class="text-red-600 font-medium">Soluciones Tradicionales</p>
							</div>
						</div>
						<div class="cloud-ai-badge">
							<span class="text-sm font-bold flex items-center gap-2">
								<Icon name="alert-triangle" size={16} className="text-orange-500" />
								DEPENDENCIA EXTERNA
							</span>
						</div>
					</div>
					
					<div class="space-y-6">
						<div class="disadvantage-item">
							<div class="disadvantage-icon bg-red-500">
								<Icon name="cloud" size={16} className="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">Datos en Terceros</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									Sus datos confidenciales <strong class="text-gray-900">procesados en servidores externos</strong>. 
									Sin control sobre ubicación, acceso o uso secundario.
								</p>
							</div>
						</div>
						
						<div class="disadvantage-item">
							<div class="disadvantage-icon bg-red-500">
								<span class="text-sm font-bold">🐌</span>
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">Latencia Variable</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									<strong class="text-gray-900">Dependiente de conexión a internet</strong>. 
									Tiempos impredecibles entre 500ms-2s que afectan productividad.
								</p>
							</div>
						</div>
						
						<div class="disadvantage-item">
							<div class="disadvantage-icon bg-red-500">
								<Icon name="scale" size={16} className="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">Riesgos de Compliance</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									<strong class="text-gray-900">Transferencias internacionales complejas</strong>. 
									Compliance RGPD incierto y auditorías difíciles.
								</p>
							</div>
						</div>
						
						<div class="disadvantage-item">
							<div class="disadvantage-icon bg-red-500">
								<Icon name="trending-up" size={16} className="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">Costes Escalables</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									<strong class="text-gray-900">Facturación por uso impredecible</strong>. 
									A mayor adopción, mayor coste mensual sin límite superior.
								</p>
							</div>
						</div>
						
						<div class="disadvantage-item">
							<div class="disadvantage-icon bg-red-500">
								<Icon name="settings" size={16} className="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg text-gray-900 mb-2">Personalización Limitada</h4>
								<p class="text-gray-700 text-sm leading-relaxed">
									<strong class="text-gray-900">Modelos genéricos para todos</strong>. 
									Sin posibilidad de adaptar a terminología o procesos específicos.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Result Summary -->
			<div class="result-summary">
				<div class="flex items-center gap-4 mb-6">
					<Icon name="target" size={32} className="text-yellow-300" />
					<h4 class="text-3xl font-bold">El Resultado es Claro</h4>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					<div class="result-metric">
						<div class="text-4xl font-bold text-green-400 mb-2">100%</div>
						<div class="text-white font-medium">Control & Soberanía</div>
					</div>
					<div class="result-metric">
						<div class="text-4xl font-bold text-yellow-400 mb-2">&lt;200ms</div>
						<div class="text-white font-medium">Latencia Garantizada</div>
					</div>
					<div class="result-metric">
						<div class="text-4xl font-bold text-blue-400 mb-2">€€€</div>
						<div class="text-white font-medium">Coste Predecible</div>
					</div>
				</div>
				<p class="text-xl text-white/90 mb-6 text-center">
					<strong>Formeta Labs</strong> garantiza <strong class="text-yellow-300">soberanía digital completa</strong> 
					con <strong class="text-green-300">rendimiento superior</strong> y <strong class="text-blue-300">costes controlados</strong>.
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<span class="sovereignty-badge">🇪🇸 100% ESPAÑOL</span>
					<span class="sovereignty-badge flex items-center gap-2">
						<Icon name="lock" size={16} className="text-green-400" />
						100% PRIVADO
					</span>
					<span class="sovereignty-badge flex items-center gap-2">
						<Icon name="zap" size={16} className="text-blue-400" />
						100% TUYO
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technical Certifications -->
<section class="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
	<!-- Enhanced background pattern -->
	<div class="absolute inset-0 opacity-5">
		<div class="pattern-formeta h-full w-full"></div>
	</div>
	
	<!-- Floating certification indicators -->
	<div class="absolute top-8 left-8">
		<div class="flex items-center gap-3 bg-formeta-primary/10 backdrop-blur-sm border border-formeta-primary/20 px-6 py-3 rounded-2xl">
			<Icon name="award" size={20} className="text-formeta-primary" />
			<span class="text-formeta-primary font-mono text-sm font-semibold">CERTIFICADO</span>
		</div>
	</div>
	<div class="absolute top-8 right-8">
		<div class="flex items-center gap-3 bg-green-500/10 backdrop-blur-sm border border-green-500/20 px-6 py-3 rounded-2xl">
			<Icon name="shield-check" size={20} className="text-green-600" />
			<span class="text-green-600 font-mono text-sm font-semibold">EXPERTISE</span>
		</div>
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<div class="flex items-center justify-center gap-4 mb-8">
					<span class="w-16 h-px bg-gradient-to-r from-transparent via-formeta-primary to-transparent"></span>
					<span class="text-formeta-primary/80 text-sm font-mono font-medium tracking-[0.3em] uppercase">CREDENCIALES VERIFICABLES</span>
					<span class="w-16 h-px bg-gradient-to-l from-transparent via-formeta-primary to-transparent"></span>
				</div>
				<h2 class="text-4xl md:text-6xl font-bold text-formeta-text mb-6">
					Certificaciones & <span class="text-transparent bg-clip-text bg-gradient-to-r from-formeta-primary to-formeta-secondary">Expertise</span>
				</h2>
				<p class="text-lg text-formeta-text/80 max-w-4xl mx-auto leading-relaxed">
					<strong>Reconocimientos oficiales</strong> y <strong class="text-formeta-primary">expertise técnico verificable</strong> 
					que respaldan nuestras capacidades empresariales y garantizan calidad profesional.
				</p>
			</div>
			
			<!-- Enhanced Certifications Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
				<!-- VeriFactu Certified -->
				<div class="certification-card verifactu-cert">
					<div class="cert-icon">
						<Icon name="scale" size={48} className="text-white" />
					</div>
					<div class="cert-badge critical">CRÍTICO</div>
					<h3 class="cert-title">VeriFactu Certified</h3>
					<p class="cert-description">Especialista certificado R.D. 1007/2023</p>
					<div class="cert-details">
						<div class="cert-detail-item">
							<Icon name="calendar" size={14} className="text-red-600" />
							<span>Vigente 2025</span>
						</div>
						<div class="cert-detail-item">
							<Icon name="building" size={14} className="text-red-600" />
							<span>AEAT Oficial</span>
						</div>
					</div>
					<div class="cert-skills">
						<span class="skill-tag">Compliance Fiscal</span>
						<span class="skill-tag">XML Estructurado</span>
						<span class="skill-tag">Integraciones AEAT</span>
					</div>
				</div>
				
				<!-- ISO 27001 -->
				<div class="certification-card iso-cert">
					<div class="cert-icon">
						<Icon name="shield" size={48} className="text-white" />
					</div>
					<div class="cert-badge security">SEGURIDAD</div>
					<h3 class="cert-title">ISO 27001</h3>
					<p class="cert-description">Gestión de Seguridad de la Información</p>
					<div class="cert-details">
						<div class="cert-detail-item">
							<Icon name="globe" size={14} className="text-blue-600" />
							<span>Internacional</span>
						</div>
						<div class="cert-detail-item">
							<Icon name="lock" size={14} className="text-blue-600" />
							<span>InfoSec</span>
						</div>
					</div>
					<div class="cert-skills">
						<span class="skill-tag">Risk Management</span>
						<span class="skill-tag">Data Protection</span>
						<span class="skill-tag">Security Audits</span>
					</div>
				</div>
				
				<!-- RGPD Expert -->
				<div class="certification-card rgpd-cert">
					<div class="cert-icon">
						<Icon name="user-check" size={48} className="text-white" />
					</div>
					<div class="cert-badge privacy">PRIVACIDAD</div>
					<h3 class="cert-title">RGPD Expert</h3>
					<p class="cert-description">Protección de Datos por Diseño</p>
					<div class="cert-details">
						<div class="cert-detail-item">
							<Icon name="flag" size={14} className="text-green-600" />
							<span>UE Compliance</span>
						</div>
						<div class="cert-detail-item">
							<Icon name="users" size={14} className="text-green-600" />
							<span>DPO Level</span>
						</div>
					</div>
					<div class="cert-skills">
						<span class="skill-tag">Privacy by Design</span>
						<span class="skill-tag">Data Mapping</span>
						<span class="skill-tag">Impact Assessment</span>
					</div>
				</div>
				
				<!-- MCP Protocol -->
				<div class="certification-card mcp-cert">
					<div class="cert-icon">
						<span class="text-5xl">🤖</span>
					</div>
					<div class="cert-badge ai">IA AVANZADA</div>
					<h3 class="cert-title">MCP Protocol</h3>
					<p class="cert-description">Model Context Protocol Advanced</p>
					<div class="cert-details">
						<div class="cert-detail-item">
							<Icon name="cpu" size={14} className="text-purple-600" />
							<span>AI Local</span>
						</div>
						<div class="cert-detail-item">
							<Icon name="layers" size={14} className="text-purple-600" />
							<span>RAG Expert</span>
						</div>
					</div>
					<div class="cert-skills">
						<span class="skill-tag">Context Protocol</span>
						<span class="skill-tag">Local LLMs</span>
						<span class="skill-tag">AI Integration</span>
					</div>
				</div>
			</div>
			
			<!-- Technology Stack Section -->
			<div class="tech-stack-section">
				<h3 class="text-3xl font-bold text-formeta-text text-center mb-12">
					Stack Tecnológico <span class="text-formeta-primary">Certificado</span>
				</h3>
				
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
					<!-- Frontend -->
					<div class="tech-item frontend-tech">
						<div class="tech-icon">
							<Icon name="atom" size={32} className="text-formeta-primary" />
						</div>
						<span class="tech-name">SvelteKit</span>
						<div class="tech-level">
							<div class="level-bar">
								<div class="level-fill" style="width: 95%"></div>
							</div>
							<span class="level-text">Expert</span>
						</div>
					</div>
					
					<div class="tech-item backend-tech">
						<div class="tech-icon">
							<div class="text-3xl">🟢</div>
						</div>
						<span class="tech-name">Node.js</span>
						<div class="tech-level">
							<div class="level-bar">
								<div class="level-fill" style="width: 90%"></div>
							</div>
							<span class="level-text">Expert</span>
						</div>
					</div>
					
					<div class="tech-item database-tech">
						<div class="tech-icon">
							<div class="text-3xl">🐘</div>
						</div>
						<span class="tech-name">PostgreSQL</span>
						<div class="tech-level">
							<div class="level-bar">
								<div class="level-fill" style="width: 85%"></div>
							</div>
							<span class="level-text">Advanced</span>
						</div>
					</div>
					
					<div class="tech-item devops-tech">
						<div class="tech-icon">
							<div class="text-3xl">🐳</div>
						</div>
						<span class="tech-name">Docker</span>
						<div class="tech-level">
							<div class="level-bar">
								<div class="level-fill" style="width: 88%"></div>
							</div>
							<span class="level-text">Expert</span>
						</div>
					</div>
					
					<div class="tech-item ai-tech">
						<div class="tech-icon">
							<div class="text-3xl">🦙</div>
						</div>
						<span class="tech-name">Ollama</span>
						<div class="tech-level">
							<div class="level-bar">
								<div class="level-fill" style="width: 92%"></div>
							</div>
							<span class="level-text">Expert</span>
						</div>
					</div>
					
					<div class="tech-item automation-tech">
						<div class="tech-icon">
							<Icon name="link" size={32} className="text-formeta-primary" />
						</div>
						<span class="tech-name">n8n</span>
						<div class="tech-level">
							<div class="level-bar">
								<div class="level-fill" style="width: 80%"></div>
							</div>
							<span class="level-text">Advanced</span>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Expertise Summary -->
			<div class="expertise-summary">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="expertise-metric">
						<div class="metric-icon">
							<Icon name="award" size={32} className="text-formeta-primary" />
						</div>
						<div class="metric-value">12+</div>
						<div class="metric-label">Certificaciones Activas</div>
						<p class="metric-description">Credenciales oficiales verificables en tecnologías enterprise</p>
					</div>
					
					<div class="expertise-metric">
						<div class="metric-icon">
							<Icon name="code" size={32} className="text-green-600" />
						</div>
						<div class="metric-value">6</div>
						<div class="metric-label">Tecnologías Core</div>
						<p class="metric-description">Stack completo dominado a nivel experto por el equipo</p>
					</div>
					
					<div class="expertise-metric">
						<div class="metric-icon">
							<Icon name="shield-check" size={32} className="text-blue-600" />
						</div>
						<div class="metric-value">100%</div>
						<div class="metric-label">Compliance Coverage</div>
						<p class="metric-description">Cobertura completa RGPD, VeriFactu e ISO 27001</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section with Enhanced Glassmorphism -->
<section class="py-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white relative overflow-hidden">
	<!-- Enhanced background elements -->
	<div class="absolute inset-0">
		<div class="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-8">
				¿Preparado para la Transformación Digital?
			</h2>
			<p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
				Descubre cómo Formeta Labs puede impulsar su empresa con tecnología española 
				de vanguardia y soberanía digital garantizada.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-6 justify-center">
				<a href="/contacto" class="glass-button bg-white/20 backdrop-blur-lg border border-white/30 text-white px-8 py-4 font-bold text-lg rounded-xl hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg">
					CONSULTA TÉCNICA GRATUITA
				</a>
				<a href="/servicios" class="glass-button bg-white/10 backdrop-blur-lg border-2 border-white/50 text-white px-8 py-4 font-bold text-lg rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300">
					VER NUESTROS SERVICIOS
				</a>
			</div>
			
			<p class="text-white/70 mt-8 text-sm">
				Respuesta garantizada en menos de 2 horas • Consulta técnica sin compromiso
			</p>
		</div>
	</div>
</section>

<style>
	/* Formeta Team Patterns */
	.pattern-formeta {
		background-image: 
			linear-gradient(45deg, rgba(251,146,60,0.03) 25%, transparent 25%),
			linear-gradient(-45deg, rgba(239,68,68,0.03) 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, rgba(251,146,60,0.03) 75%),
			linear-gradient(-45deg, transparent 75%, rgba(239,68,68,0.03) 75%);
		background-size: 40px 40px;
		background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
		animation: patternShift 25s linear infinite;
	}
	
	@keyframes patternShift {
		0% { background-position: 0 0, 0 20px, 20px -20px, -20px 0px; }
		100% { background-position: 40px 40px, 40px 60px, 60px 20px, 20px 40px; }
	}
	
	/* Enhanced Team Cards */
	.formeta-team-card {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 2px solid rgba(251, 146, 60, 0.15);
		border-radius: 24px;
		padding: 32px;
		box-shadow: 
			0 20px 40px rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(255, 255, 255, 0.05),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	.formeta-team-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #fb923c, #ef4444, #fb923c);
		background-size: 200% 100%;
		animation: gradientShift 4s ease-in-out infinite;
	}
	
	.formeta-team-card:hover {
		transform: translateY(-8px);
		box-shadow: 
			0 30px 60px rgba(0, 0, 0, 0.12),
			0 0 0 1px rgba(255, 255, 255, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		border-color: rgba(251, 146, 60, 0.3);
	}
	
	@keyframes gradientShift {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}
	
	/* Member Avatar */
	.member-avatar {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, #fb923c, #ef4444);
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 10px 20px rgba(251, 146, 60, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
		flex-shrink: 0;
	}
	
	.formeta-team-card:hover .member-avatar {
		transform: rotate(5deg) scale(1.05);
		box-shadow: 
			0 15px 30px rgba(251, 146, 60, 0.4),
			inset 0 1px 0 rgba(255, 255, 255, 0.3);
	}
	
	/* Expertise Badge */
	.expertise-badge {
		background: linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(239, 68, 68, 0.1));
		border: 2px solid rgba(251, 146, 60, 0.3);
		color: #fb923c;
		padding: 6px 16px;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		display: inline-block;
	}
	
	/* Focus Area */
	.focus-area {
		background: rgba(251, 146, 60, 0.05);
		border-left: 4px solid #fb923c;
		padding: 12px 16px;
		border-radius: 0 8px 8px 0;
		margin-top: 16px;
	}
	
	/* Skill Items */
	.skill-item {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 12px;
		background: rgba(34, 197, 94, 0.05);
		border: 1px solid rgba(34, 197, 94, 0.15);
		border-radius: 8px;
		transition: all 0.2s ease;
	}
	
	.skill-item:hover {
		background: rgba(34, 197, 94, 0.1);
		border-color: rgba(34, 197, 94, 0.3);
		transform: translateX(4px);
	}
	
	/* Tech Badges */
	.tech-badge {
		background: rgba(251, 146, 60, 0.1);
		border: 1px solid rgba(251, 146, 60, 0.3);
		color: #fb923c;
		padding: 6px 12px;
		border-radius: 8px;
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		transition: all 0.2s ease;
	}
	
	.tech-badge:hover {
		background: rgba(251, 146, 60, 0.2);
		border-color: rgba(251, 146, 60, 0.5);
		transform: translateY(-2px);
	}
	
	/* Member Footer */
	.member-footer {
		border-top: 1px solid rgba(251, 146, 60, 0.2);
		padding-top: 16px;
		margin-top: 24px;
	}
	
	/* AI Comparison Cards */
	.ai-comparison-card {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(20px);
		border-radius: 24px;
		padding: 32px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		position: relative;
		overflow: hidden;
		transition: all 0.3s ease;
	}
	
	.local-ai-card {
		border: 2px solid rgba(34, 197, 94, 0.3);
	}
	
	.local-ai-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #22c55e, #16a34a);
	}
	
	.cloud-ai-card {
		border: 2px solid rgba(239, 68, 68, 0.3);
	}
	
	.cloud-ai-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #ef4444, #dc2626);
	}
	
	.local-ai-badge {
		background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1));
		border: 2px solid rgba(34, 197, 94, 0.3);
		color: #16a34a;
		padding: 8px 16px;
		border-radius: 20px;
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		display: inline-block;
	}
	
	.cloud-ai-badge {
		background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1));
		border: 2px solid rgba(239, 68, 68, 0.3);
		color: #dc2626;
		padding: 8px 16px;
		border-radius: 20px;
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		display: inline-block;
	}
	
	.advantage-item, .disadvantage-item {
		display: flex;
		align-items: flex-start;
		gap: 16px;
		padding: 16px;
		border-radius: 12px;
		transition: all 0.2s ease;
	}
	
	.advantage-item {
		background: rgba(34, 197, 94, 0.05);
		border: 1px solid rgba(34, 197, 94, 0.1);
	}
	
	.advantage-item:hover {
		background: rgba(34, 197, 94, 0.1);
		transform: translateX(4px);
	}
	
	.disadvantage-item {
		background: rgba(239, 68, 68, 0.05);
		border: 1px solid rgba(239, 68, 68, 0.1);
	}
	
	.disadvantage-item:hover {
		background: rgba(239, 68, 68, 0.1);
		transform: translateX(4px);
	}
	
	.advantage-icon, .disadvantage-icon {
		width: 32px;
		height: 32px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	
	/* Result Summary */
	.result-summary {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: 24px;
		padding: 40px;
		text-align: center;
	}
	
	.result-metric {
		text-align: center;
	}
	
	.sovereignty-badge {
		background: rgba(34, 197, 94, 0.9);
		color: white;
		padding: 12px 24px;
		border-radius: 12px;
		font-weight: 700;
		font-size: 14px;
		letter-spacing: 0.5px;
		box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
	}
	
	/* Certification Cards */
	.certification-card {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(16px);
		border-radius: 20px;
		padding: 24px;
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
		position: relative;
		overflow: hidden;
		transition: all 0.3s ease;
		text-align: center;
	}
	
	.certification-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
	}
	
	.verifactu-cert {
		border: 2px solid rgba(239, 68, 68, 0.2);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(254, 242, 242, 0.95));
	}
	
	.iso-cert {
		border: 2px solid rgba(59, 130, 246, 0.2);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(239, 246, 255, 0.95));
	}
	
	.rgpd-cert {
		border: 2px solid rgba(34, 197, 94, 0.2);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 253, 244, 0.95));
	}
	
	.mcp-cert {
		border: 2px solid rgba(147, 51, 234, 0.2);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 245, 255, 0.95));
	}
	
	.cert-icon {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, #fb923c, #ef4444);
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 16px;
		transition: all 0.3s ease;
	}
	
	.certification-card:hover .cert-icon {
		transform: rotate(5deg) scale(1.05);
	}
	
	.cert-badge {
		position: absolute;
		top: 16px;
		right: 16px;
		padding: 4px 12px;
		border-radius: 12px;
		font-size: 10px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.cert-badge.critical {
		background: rgba(239, 68, 68, 0.9);
		color: white;
	}
	
	.cert-badge.security {
		background: rgba(59, 130, 246, 0.9);
		color: white;
	}
	
	.cert-badge.privacy {
		background: rgba(34, 197, 94, 0.9);
		color: white;
	}
	
	.cert-badge.ai {
		background: rgba(147, 51, 234, 0.9);
		color: white;
	}
	
	.cert-title {
		font-size: 18px;
		font-weight: 700;
		color: #333;
		margin-bottom: 8px;
	}
	
	.cert-description {
		font-size: 14px;
		color: #666;
		margin-bottom: 16px;
		line-height: 1.4;
	}
	
	.cert-details {
		display: flex;
		justify-content: center;
		gap: 16px;
		margin-bottom: 16px;
	}
	
	.cert-detail-item {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: 12px;
		color: #666;
	}
	
	.cert-skills {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
		justify-content: center;
	}
	
	.skill-tag {
		background: rgba(251, 146, 60, 0.1);
		color: #fb923c;
		padding: 4px 8px;
		border-radius: 6px;
		font-size: 10px;
		font-weight: 600;
	}
	
	/* Technology Stack */
	.tech-stack-section {
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(16px);
		border: 2px solid rgba(251, 146, 60, 0.1);
		border-radius: 24px;
		padding: 40px;
		margin-bottom: 32px;
	}
	
	.tech-item {
		text-align: center;
		padding: 20px;
		background: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(251, 146, 60, 0.2);
		border-radius: 16px;
		transition: all 0.3s ease;
	}
	
	.tech-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
		border-color: rgba(251, 146, 60, 0.4);
	}
	
	.tech-icon {
		margin-bottom: 12px;
	}
	
	.tech-name {
		display: block;
		font-weight: 600;
		color: #333;
		margin-bottom: 8px;
	}
	
	.tech-level {
		width: 100%;
	}
	
	.level-bar {
		width: 100%;
		height: 6px;
		background: rgba(251, 146, 60, 0.2);
		border-radius: 3px;
		overflow: hidden;
		margin-bottom: 4px;
	}
	
	.level-fill {
		height: 100%;
		background: linear-gradient(90deg, #fb923c, #ef4444);
		border-radius: 3px;
		transition: width 0.3s ease;
	}
	
	.level-text {
		font-size: 11px;
		font-weight: 600;
		color: #fb923c;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	/* Expertise Summary */
	.expertise-summary {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(16px);
		border: 2px solid rgba(251, 146, 60, 0.2);
		border-radius: 24px;
		padding: 32px;
	}
	
	.expertise-metric {
		text-align: center;
		padding: 24px;
	}
	
	.metric-icon {
		margin-bottom: 16px;
	}
	
	.metric-value {
		font-size: 48px;
		font-weight: 900;
		color: #fb923c;
		line-height: 1;
		margin-bottom: 8px;
	}
	
	.metric-label {
		font-size: 18px;
		font-weight: 700;
		color: #333;
		margin-bottom: 12px;
	}
	
	.metric-description {
		font-size: 14px;
		color: #666;
		line-height: 1.4;
	}
	
	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.pattern-formeta,
		.formeta-team-card::before,
		.member-avatar,
		.skill-item,
		.tech-badge,
		.advantage-item,
		.disadvantage-item,
		.certification-card,
		.tech-item {
			animation: none;
			transition: none;
		}
		
		.formeta-team-card:hover,
		.formeta-team-card:hover .member-avatar,
		.skill-item:hover,
		.tech-badge:hover,
		.advantage-item:hover,
		.disadvantage-item:hover,
		.certification-card:hover,
		.tech-item:hover {
			transform: none;
		}
	}
	
	/* Mobile responsive */
	@media (max-width: 768px) {
		.formeta-team-card,
		.ai-comparison-card,
		.certification-card {
			padding: 24px 20px;
			border-radius: 20px;
		}
		
		.member-avatar,
		.cert-icon {
			width: 64px;
			height: 64px;
			border-radius: 16px;
		}
		
		.skill-item {
			padding: 6px 10px;
		}
		
		.tech-badge {
			padding: 4px 8px;
			font-size: 10px;
		}
		
		.result-summary,
		.tech-stack-section,
		.expertise-summary {
			padding: 24px 20px;
		}
		
		.metric-value {
			font-size: 36px;
		}
	}
</style>
