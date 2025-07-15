<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	
	const companyStats = [
		{ label: 'FUNDACIÓN', value: '2019', description: 'Laboratorio creado' },
		{ label: 'PROYECTOS', value: '50+', description: 'Enterprise exitosos' },
		{ label: 'COMPLIANCE', value: '15+', description: 'VeriFactu activos' },
		{ label: 'SOBERANÍA', value: '100%', description: 'Datos locales' }
	];

	const teamMembers = [
		{
			name: 'Antonio García',
			role: 'Founder & CTO',
			title: 'Chief Technology Officer',
			description: 'Arquitecto de sistemas enterprise con 10+ años desarrollando soluciones VeriFactu, IA local y automatización. Especialista en compliance AEAT y soberanía de datos.',
			skills: ['Enterprise Architecture', 'VeriFactu AEAT', 'Local AI Systems', 'Compliance & RGPD', 'DevOps & Docker'],
			technologies: ['Node.js', 'PostgreSQL', 'Ollama', 'Docker', 'TypeScript'],
			experience: '10+ años',
			certifications: ['AEAT VeriFactu Certified', 'RGPD DPO', 'Docker Enterprise'],
			icon: 'zap',
			expertise: 'VeriFactu & IA Local'
		},
		{
			name: 'María López',
			role: 'Lead Frontend Architect',
			title: 'Senior Frontend Engineer',
			description: 'Especialista en interfaces enterprise y experiencia de usuario avanzada. Lidera el desarrollo de aplicaciones SvelteKit y sistemas pixel art modernos.',
			skills: ['Enterprise Frontend', 'Pixel Art Design', 'TypeScript Advanced', 'Mobile-First UX', 'Performance Optimization'],
			technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'PWA', 'Figma'],
			experience: '8+ años',
			certifications: ['Google UX Certified', 'TypeScript Expert', 'PWA Specialist'],
			icon: 'monitor',
			expertise: 'UX/UI Enterprise'
		},
		{
			name: 'Carlos Ruiz',
			role: 'Senior Backend Engineer',
			title: 'Database & API Specialist',
			description: 'Ingeniero backend especializado en sistemas de alta disponibilidad, APIs REST y bases de datos PostgreSQL. Experto en integraciones AEAT.',
			skills: ['API Design', 'Database Architecture', 'High Availability', 'AEAT Integration', 'Performance Tuning'],
			technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Prisma', 'Docker'],
			experience: '7+ años',
			certifications: ['PostgreSQL Expert', 'Node.js Certified', 'AWS Solutions'],
			icon: 'settings',
			expertise: 'Backend & APIs'
		},
		{
			name: 'Ana Martín',
			role: 'AI Research Engineer',
			title: 'Local AI & RAG Specialist',
			description: 'Investigadora en IA local y sistemas RAG. Especialista en implementación de Ollama, vectorización con pgvector y MCP Protocol para empresas.',
			skills: ['Local AI Models', 'RAG Implementation', 'Vector Databases', 'MCP Protocol', 'Document Processing'],
			technologies: ['Ollama', 'pgvector', 'Llama 3.1', 'Python', 'TypeScript'],
			experience: '6+ años',
			certifications: ['Ollama Certified', 'Vector DB Expert', 'LLM Specialist'],
			icon: 'cpu',
			expertise: 'IA Local & RAG'
		}
	];

	const companyValues = [
		{
			title: 'Soberanía de Datos',
			description: 'IA 100% local sin dependencias cloud. Tus datos permanecen en tu infraestructura.',
			icon: 'lock'
		},
		{
			title: 'Compliance Nativo',
			description: 'Cumplimiento RGPD, VeriFactu y normativas empresariales integrado desde el diseño.',
			icon: 'shield'
		},
		{
			title: 'Tecnología Avanzada',
			description: 'Stack moderno con Node.js, PostgreSQL, Ollama y herramientas enterprise.',
			icon: 'rocket'
		},
		{
			title: 'Soporte Especializado',
			description: 'Equipo técnico dedicado con garantía de respuesta en 2 horas.',
			icon: 'headphones'
		}
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

<svelte:head>
	<title>Nosotros - Formeta Labs | Laboratorio de Innovación Digital</title>
	<meta name="description" content="Conoce el equipo y la misión de Formeta Labs. Especialistas en digitalización empresarial, IA local, VeriFactu compliance y desarrollo web avanzado desde 2019." />
	<meta name="keywords" content="Formeta Labs, equipo técnico, misión empresarial, IA local, VeriFactu, soberanía de datos, CTO, frontend, backend" />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[70vh] bg-gradient-to-br from-formeta-text via-formeta-primary to-formeta-secondary overflow-hidden">
	<!-- Background Patterns -->
	<div class="absolute inset-0 opacity-5">
		<div class="pattern-grid h-full w-full"></div>
	</div>
	
	<!-- Floating Technical Elements -->
	<div class="absolute top-20 left-20 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		INNOVATION.LAB
	</div>
	<div class="absolute top-32 right-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		DATA.SOVEREIGNTY
	</div>
	<div class="absolute bottom-32 left-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		TEAM.ENTERPRISE
	</div>
	
	<div class="relative z-10 container-formeta flex items-center min-h-[70vh]">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<span class="text-white/80 text-lg font-mono">///</span>
				<span class="text-white/80 text-lg font-mono">LABORATORIO DE INNOVACIÓN DIGITAL</span>
			</div>
			
			<h1 class="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
				FORMETA
				<br>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
					.LABS
				</span>
			</h1>
			
			<p class="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
				<strong>Equipo especializado</strong> en soberanía de datos, IA empresarial local y 
				cumplimiento normativo crítico. <strong>Transformamos empresas</strong> con tecnología española desde 2019.
			</p>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
				{#each companyStats as stat}
					<div class="text-center">
						<div class="text-3xl font-bold text-white mb-1">{stat.value}</div>
						<div class="text-sm text-white/80 font-bold">{stat.label}</div>
						<div class="text-xs text-white/60">{stat.description}</div>
					</div>
				{/each}
			</div>
			
			<div class="flex flex-wrap gap-4">
				<a href="#mision" class="bg-white text-formeta-primary px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-200 border-2 border-white">
					NUESTRA MISIÓN
				</a>
				<a href="#equipo" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-formeta-primary transition-all duration-200">
					CONOCER EQUIPO
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Mission & Vision -->
<section id="mision" class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
					Nuestra <span class="text-formeta-primary">Misión</span>
				</h2>
				<p class="text-lg text-formeta-text/80 max-w-3xl mx-auto">
					Democratizar la digitalización empresarial con tecnología española de vanguardia, 
					garantizando soberanía de datos y cumplimiento normativo integral.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div>
					<h3 class="text-3xl font-bold text-formeta-text mb-6 flex items-center">
						<Icon name="target" size={32} className="mr-4 text-formeta-primary" />
						Misión
					</h3>
					<p class="text-lg text-formeta-text/80 mb-8 leading-relaxed">
						Ser el laboratorio de referencia en <strong>digitalización empresarial española</strong>, 
						proporcionando soluciones tecnológicas avanzadas que garanticen <strong>soberanía digital</strong>, 
						<strong>cumplimiento normativo</strong> y <strong>competitividad internacional</strong>.
					</p>
					
					<div class="flex items-center gap-4 mb-6">
						<Icon name="rocket" size={32} class="text-formeta-primary" />
						<h3 class="text-3xl font-bold text-formeta-text">Visión</h3>
					</div>
					<p class="text-lg text-formeta-text/80 leading-relaxed">
						Convertirnos en el estándar europeo de <strong>IA empresarial local</strong> y 
						<strong>compliance tecnológico</strong>, liderando la transformación digital con 
						tecnologías propias que respeten la privacidad y autonomía empresarial.
					</p>
				</div>
				
				<div class="bg-gray-50 p-8 border-2 border-formeta-primary">
					<h4 class="text-2xl font-bold text-formeta-text mb-6">Valores Fundamentales</h4>
					<div class="space-y-4">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-formeta-primary text-white flex items-center justify-center rounded">
								<Icon name="lock" size={16} class="text-white" />
							</div>
							<div>
								<h5 class="font-bold text-formeta-text">Soberanía Digital</h5>
								<p class="text-formeta-text/70">Datos y procesos bajo control empresarial total</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-formeta-primary text-white flex items-center justify-center rounded">
								<Icon name="zap" size={16} class="text-white" />
							</div>
							<div>
								<h5 class="font-bold text-formeta-text">Innovación Aplicada</h5>
								<p class="text-formeta-text/70">Tecnología de vanguardia con impacto real</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-formeta-primary text-white flex items-center justify-center rounded">
								<Icon name="check" size={16} class="text-white" />
							</div>
							<div>
								<h5 class="font-bold text-formeta-text">Compliance Nativo</h5>
								<p class="text-formeta-text/70">Cumplimiento normativo por diseño</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-formeta-primary text-white flex items-center justify-center rounded">
								<Icon name="target" size={16} class="text-white" />
							</div>
							<div>
								<h5 class="font-bold text-formeta-text">Resultados Medibles</h5>
								<p class="text-formeta-text/70">ROI documentado y métricas verificables</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Company Timeline -->
<section class="py-20 bg-gradient-to-br from-gray-50 to-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
					Nuestra <span class="text-formeta-primary">Evolución</span>
				</h2>
				<p class="text-lg text-formeta-text/80 max-w-3xl mx-auto">
					Desde desarrollo web hasta IA empresarial local. Un viaje de innovación constante 
					en el ecosistema tecnológico español.
				</p>
			</div>
			
			<div class="space-y-12">
				<!-- 2019 -->
				<div class="flex flex-col md:flex-row gap-8 items-center">
					<div class="md:w-1/4">
						<div class="bg-formeta-primary text-white px-6 py-3 text-center font-bold text-xl">
							2019
						</div>
					</div>
					<div class="md:w-3/4">
						<div class="flex items-center gap-3 mb-4">
							<Icon name="building" size={24} class="text-formeta-primary" />
							<h3 class="text-2xl font-bold text-formeta-text">Fundación & Primeros Proyectos</h3>
						</div>
						<p class="text-formeta-text/80 mb-4">
							Inicio como estudio de desarrollo web especializado en aplicaciones empresariales. 
							Primeros proyectos de digitalización para PYMES españolas.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="bg-gray-200 px-3 py-1 text-sm">React</span>
							<span class="bg-gray-200 px-3 py-1 text-sm">Node.js</span>
							<span class="bg-gray-200 px-3 py-1 text-sm">MySQL</span>
							<span class="bg-gray-200 px-3 py-1 text-sm">Digital Ocean</span>
						</div>
					</div>
				</div>
				
				<!-- 2021 -->
				<div class="flex flex-col md:flex-row gap-8 items-center">
					<div class="md:w-1/4">
						<div class="bg-formeta-primary text-white px-6 py-3 text-center font-bold text-xl">
							2021
						</div>
					</div>
					<div class="md:w-3/4">
						<div class="flex items-center gap-3 mb-4">
							<Icon name="briefcase" size={24} class="text-formeta-primary" />
							<h3 class="text-2xl font-bold text-formeta-text">Especialización CRM Enterprise</h3>
						</div>
						<p class="text-formeta-text/80 mb-4">
							Desarrollo de sistemas CRM especializados y automatización de procesos empresariales. 
							Introducción de integraciones API avanzadas.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="bg-gray-200 px-3 py-1 text-sm">SvelteKit</span>
							<span class="bg-gray-200 px-3 py-1 text-sm">PostgreSQL</span>
							<span class="bg-gray-200 px-3 py-1 text-sm">Docker</span>
							<span class="bg-gray-200 px-3 py-1 text-sm">n8n</span>
						</div>
					</div>
				</div>
				
				<!-- 2023 -->
				<div class="flex flex-col md:flex-row gap-8 items-center">
					<div class="md:w-1/4">
						<div class="bg-formeta-primary text-white px-6 py-3 text-center font-bold text-xl">
							2023
						</div>
					</div>
					<div class="md:w-3/4">
						<div class="flex items-center gap-3 mb-4">
							<Icon name="scale" size={24} class="text-formeta-primary" />
							<h3 class="text-2xl font-bold text-formeta-text">VeriFactu Compliance Leader</h3>
						</div>
						<p class="text-formeta-text/80 mb-4">
							Pioneros en implementación de sistemas VeriFactu. Desarrollo de soluciones de compliance 
							para el R.D. 1007/2023. Certificación como especialistas AEAT.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="bg-red-200 px-3 py-1 text-sm">VeriFactu</span>
							<span class="bg-red-200 px-3 py-1 text-sm">AEAT Integration</span>
							<span class="bg-red-200 px-3 py-1 text-sm">XML/JSON</span>
							<span class="bg-red-200 px-3 py-1 text-sm">Criptografía</span>
						</div>
					</div>
				</div>
				
				<!-- 2024 -->
				<div class="flex flex-col md:flex-row gap-8 items-center">
					<div class="md:w-1/4">
						<div class="bg-formeta-primary text-white px-6 py-3 text-center font-bold text-xl">
							2024
						</div>
					</div>
					<div class="md:w-3/4">
						<h3 class="text-2xl font-bold text-formeta-text mb-4">🤖 Revolución IA Local</h3>
						<p class="text-formeta-text/80 mb-4">
							Implementación de sistemas de IA empresarial local con RAG y MCP Protocol. 
							Procesamiento de documentos 100% local garantizando soberanía de datos.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="bg-green-200 px-3 py-1 text-sm">Ollama</span>
							<span class="bg-green-200 px-3 py-1 text-sm">pgvector</span>
							<span class="bg-green-200 px-3 py-1 text-sm">RAG</span>
							<span class="bg-green-200 px-3 py-1 text-sm">MCP Protocol</span>
						</div>
					</div>
				</div>
				
				<!-- 2025 -->
				<div class="flex flex-col md:flex-row gap-8 items-center">
					<div class="md:w-1/4">
						<div class="bg-formeta-secondary text-white px-6 py-3 text-center font-bold text-xl">
							2025
						</div>
					</div>
					<div class="md:w-3/4">
						<div class="flex items-center gap-3 mb-4">
							<Icon name="trophy" size={24} class="text-formeta-primary" />
							<h3 class="text-2xl font-bold text-formeta-text">Formeta.Labs - Laboratorio Enterprise</h3>
						</div>
						<p class="text-formeta-text/80 mb-4">
							Consolidación como laboratorio de innovación digital líder. Stack tecnológico completo 
							enterprise con capacidades de IA local, VeriFactu y desarrollo web avanzado.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="bg-blue-200 px-3 py-1 text-sm">Full Stack</span>
							<span class="bg-blue-200 px-3 py-1 text-sm">Multi-tenant</span>
							<span class="bg-blue-200 px-3 py-1 text-sm">Enterprise AI</span>
							<span class="bg-blue-200 px-3 py-1 text-sm">Data Sovereignty</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Team Section -->
<section id="equipo" class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
					Nuestro <span class="text-formeta-primary">Equipo</span>
				</h2>
				<p class="text-lg text-formeta-text/80 max-w-3xl mx-auto">
					Especialistas enterprise con experiencia probada en VeriFactu, IA local, 
					y desarrollo web avanzado. Cada miembro aporta expertise específico y certificaciones técnicas.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
				{#each teamMembers as member}
					<div class="enterprise-card p-8 h-full">
						<div class="flex items-center gap-4 mb-6">
							<div class="w-16 h-16 bg-formeta-primary text-white flex items-center justify-center text-2xl">
								<Icon name={member.icon} size={32} color="white" />
							</div>
							<div>
								<h3 class="text-2xl font-bold text-formeta-text">{member.name}</h3>
								<p class="text-formeta-primary font-medium">{member.role}</p>
								<p class="text-formeta-text/70 text-sm">{member.expertise}</p>
							</div>
						</div>
						
						<p class="text-formeta-text/80 mb-6 leading-relaxed">
							{member.description}
						</p>
						
						<div class="mb-6">
							<h4 class="font-bold text-formeta-text mb-3">Competencias Clave</h4>
							<div class="flex flex-wrap gap-2">
								{#each member.skills as skill}
									<span class="tag-technology px-3 py-1 text-sm">{skill}</span>
								{/each}
							</div>
						</div>
						
						<div class="mb-6">
							<h4 class="font-bold text-formeta-text mb-3">Stack Tecnológico</h4>
							<div class="flex flex-wrap gap-2">
								{#each member.technologies as tech}
									<span class="tag-development px-3 py-1 text-sm">{tech}</span>
								{/each}
							</div>
						</div>
						
						<div class="flex justify-between items-center">
							<div>
								<p class="text-sm text-formeta-text/70">Experiencia: <strong>{member.experience}</strong></p>
							</div>
							<div class="text-right">
								<p class="text-sm text-formeta-text/70">Certificaciones:</p>
								<p class="text-xs text-formeta-text/60">{member.certifications.length} activas</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Company Values -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each companyValues as value}
					<div class="text-center">
						<div class="w-16 h-16 bg-formeta-primary text-white flex items-center justify-center mx-auto mb-4">
							<Icon name={value.icon} size={32} color="white" />
						</div>
						<h3 class="text-xl font-bold text-formeta-text mb-3">{value.title}</h3>
						<p class="text-formeta-text/70 leading-relaxed">{value.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Why Local AI Section -->
<section class="py-20 bg-formeta-primary text-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold mb-6">
					¿Por Qué IA <span class="text-formeta-secondary">Local</span>?
				</h2>
				<p class="text-xl text-white/90 max-w-3xl mx-auto">
					Nuestra filosofía de IA empresarial local vs. soluciones cloud. 
					Soberanía, privacidad y control total sobre sus datos.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<!-- Local AI Advantages -->
				<div>
					<div class="flex items-center gap-4 mb-8">
						<Icon name="check-circle" size={32} class="text-formeta-secondary" />
						<h3 class="text-3xl font-bold text-formeta-secondary">IA Local (Formeta)</h3>
					</div>
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded">
								<Icon name="lock" size={16} class="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg mb-2">100% Soberanía de Datos</h4>
								<p class="text-white/80">Sus datos nunca salen de su infraestructura. Control total.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded">
								<Icon name="zap" size={16} class="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg mb-2">Latencia &lt;200ms</h4>
								<p class="text-white/80">Procesamiento local = velocidad máxima de respuesta.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded">
								<Icon name="shield" size={16} class="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg mb-2">Compliance Nativo</h4>
								<p class="text-white/80">RGPD, LOPD, ISO 27001 cumplidos por diseño.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded">
								<Icon name="dollar-sign" size={16} class="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg mb-2">Costes Predecibles</h4>
								<p class="text-white/80">Sin sorpresas. Coste fijo independiente del uso.</p>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Cloud AI Disadvantages -->
				<div>
					<div class="flex items-center gap-4 mb-8">
						<Icon name="x-circle" size={32} class="text-red-300" />
						<h3 class="text-3xl font-bold text-red-300">IA Cloud (Otros)</h3>
					</div>
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded">
								<Icon name="cloud" size={16} class="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg mb-2">Datos en Terceros</h4>
								<p class="text-white/80">Sus datos empresariales procesados en servidores externos.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-red-500 text-white flex items-center justify-center text-sm font-bold">🐌</div>
							<div>
								<h4 class="font-bold text-lg mb-2">Latencia Variable</h4>
								<p class="text-white/80">Dependiente de conexión. 500ms-2s típicos.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded">
								<Icon name="scale" size={16} class="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg mb-2">Riesgos Legales</h4>
								<p class="text-white/80">Transferencias internacionales. Compliance complejo.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded">
								<Icon name="trending-up" size={16} class="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-lg mb-2">Costes Escalables</h4>
								<p class="text-white/80">A más uso, más coste. Facturas impredecibles.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="text-center mt-16">
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-8 inline-block">
					<div class="flex items-center gap-3 mb-4">
						<Icon name="target" size={24} class="text-formeta-primary" />
						<h4 class="text-2xl font-bold">Resultado</h4>
					</div>
					<p class="text-lg mb-6">
						<strong>Formeta Labs</strong> garantiza <strong>soberanía digital completa</strong> 
						con rendimiento superior y costes predecibles.
					</p>
					<div class="flex flex-wrap justify-center gap-4">
						<span class="bg-green-500 text-white px-4 py-2 font-bold">100% PRIVADO</span>
						<span class="bg-green-500 text-white px-4 py-2 font-bold">100% ESPAÑOL</span>
						<span class="bg-green-500 text-white px-4 py-2 font-bold">100% TUYO</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technical Certifications -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
					Certificaciones & <span class="text-formeta-primary">Expertise</span>
				</h2>
				<p class="text-lg text-formeta-text/80 max-w-3xl mx-auto">
					Reconocimientos oficiales y expertise técnico verificable que respaldan 
					nuestras capacidades empresariales.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<!-- VeriFactu Certified -->
				<div class="text-center bg-red-50 p-6 border-2 border-red-200">
					<div class="mb-4">
						<Icon name="scale" size={48} class="text-formeta-primary" />
					</div>
					<h3 class="font-bold text-formeta-text mb-2">VeriFactu Certified</h3>
					<p class="text-sm text-formeta-text/70">Especialista certificado R.D. 1007/2023</p>
				</div>
				
				<!-- ISO 27001 -->
				<div class="text-center bg-blue-50 p-6 border-2 border-blue-200">
					<div class="mb-4">
						<Icon name="shield" size={48} class="text-formeta-primary" />
					</div>
					<h3 class="font-bold text-formeta-text mb-2">ISO 27001</h3>
					<p class="text-sm text-formeta-text/70">Gestión de Seguridad de la Información</p>
				</div>
				
				<!-- RGPD Expert -->
				<div class="text-center bg-green-50 p-6 border-2 border-green-200">
					<div class="mb-4">
						<Icon name="lock" size={48} class="text-formeta-primary" />
					</div>
					<h3 class="font-bold text-formeta-text mb-2">RGPD Expert</h3>
					<p class="text-sm text-formeta-text/70">Protección de Datos por Diseño</p>
				</div>
				
				<!-- MCP Protocol -->
				<div class="text-center bg-purple-50 p-6 border-2 border-purple-200">
					<div class="text-4xl mb-4">🤖</div>
					<h3 class="font-bold text-formeta-text mb-2">MCP Protocol</h3>
					<p class="text-sm text-formeta-text/70">Model Context Protocol Advanced</p>
				</div>
			</div>
			
			<div class="mt-16">
				<h3 class="text-3xl font-bold text-formeta-text text-center mb-12">Stack Tecnológico Certificado</h3>
				<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
					<div class="text-center">
						<div class="bg-gray-100 p-4 mb-2">
							<div class="mb-2">
								<Icon name="atom" size={32} class="text-formeta-primary" />
							</div>
						</div>
						<span class="text-sm font-medium">SvelteKit</span>
					</div>
					<div class="text-center">
						<div class="bg-gray-100 p-4 mb-2">
							<div class="text-2xl">🟢</div>
						</div>
						<span class="text-sm font-medium">Node.js</span>
					</div>
					<div class="text-center">
						<div class="bg-gray-100 p-4 mb-2">
							<div class="text-2xl">🐘</div>
						</div>
						<span class="text-sm font-medium">PostgreSQL</span>
					</div>
					<div class="text-center">
						<div class="bg-gray-100 p-4 mb-2">
							<div class="text-2xl">🐳</div>
						</div>
						<span class="text-sm font-medium">Docker</span>
					</div>
					<div class="text-center">
						<div class="bg-gray-100 p-4 mb-2">
							<div class="text-2xl">🦙</div>
						</div>
						<span class="text-sm font-medium">Ollama</span>
					</div>
					<div class="text-center">
						<div class="bg-gray-100 p-4 mb-2">
							<div class="mb-2">
								<Icon name="link" size={32} class="text-formeta-primary" />
							</div>
						</div>
						<span class="text-sm font-medium">n8n</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-br from-formeta-primary to-formeta-secondary text-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-8">
				¿Preparado para la Transformación Digital?
			</h2>
			<p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
				Descubre cómo Formeta Labs puede impulsar su empresa con tecnología española 
				de vanguardia y soberanía digital garantizada.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-6 justify-center">
				<a href="/contacto" class="bg-white text-formeta-primary px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-200">
					CONSULTA TÉCNICA GRATUITA
				</a>
				<a href="/servicios" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-formeta-primary transition-all duration-200">
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
	.pattern-grid {
		background-image: 
			linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
