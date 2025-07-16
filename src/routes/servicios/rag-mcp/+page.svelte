<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { debug } from '$lib/utils/debug';
	
	let selectedComplexity = 'standard';
	let documentVolume = 1000;
	let queryVolume = 500;
	let currentPrice = 0;
	
	const complexityLevels = {
		basic: {
			name: 'RAG Básico',
			price: 899,
			features: ['Embeddings OpenAI', 'Vector DB básico', '1 fuente de datos', 'API simple'],
			setupTime: '1 semana'
		},
		standard: {
			name: 'RAG Profesional + MCP',
			price: 1699,
			features: ['Multi-modal embeddings', 'Vector DB optimizado', 'MCP Server integrado', 'Múltiples fuentes', 'Fine-tuning'],
			setupTime: '2 semanas'
		},
		enterprise: {
			name: 'RAG Enterprise + MCP Pro',
			price: 3299,
			features: ['Custom embeddings', 'Vector DB distribuido', 'MCP avanzado', 'IA personalizada', 'Compliance RGPD', 'SLA 99.9%'],
			setupTime: '3-4 semanas'
		}
	};
	
	$: {
		if (documentVolume <= 1000 && queryVolume <= 100) selectedComplexity = 'basic';
		else if (documentVolume <= 10000 && queryVolume <= 1000) selectedComplexity = 'standard';
		else selectedComplexity = 'enterprise';
		
		currentPrice = complexityLevels[selectedComplexity].price;
	}
	
	let contactForm = {
		nombre: '',
		empresa: '',
		email: '',
		telefono: '',
		tipo_datos: '',
		volumen_docs: '',
		use_case: '',
		mensaje: ''
	};
	
	function handleSubmit() {
		debug.log('Enviando consulta RAG+MCP:', contactForm);
	}
</script>

<svelte:head>
	<title>RAG + MCP Integration - IA Conversacional Avanzada | Formeta Labs</title>
	<meta name="description" content="Implementación RAG (Retrieval Augmented Generation) + MCP (Model Context Protocol). IA conversacional con tus datos. Embeddings avanzados, Vector DB optimizado, integración personalizada.">
	<meta name="keywords" content="RAG, MCP, Model Context Protocol, IA conversacional, embeddings, vector database, OpenAI, Claude, LLM, inteligencia artificial">
	<meta property="og:title" content="RAG + MCP Integration - IA Conversacional Avanzada">
	<meta property="og:description" content="Transforma tus datos en IA conversacional. RAG + MCP integration para consultas inteligentes sobre tu información empresarial.">
	<meta property="og:type" content="product">
	<link rel="canonical" href="https://formeta-labs.com/servicios/rag-mcp">
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[70vh] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 pattern-dots opacity-20"></div>
	
	<!-- AI Floating Elements -->
	<div class="absolute top-20 left-20 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono animate-pulse">
		🤖 RAG + MCP
	</div>
	<div class="absolute top-32 right-32 bg-purple-500/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		EMBEDDINGS ✨
	</div>
	<div class="absolute bottom-32 left-32 bg-indigo-500/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		VECTOR DB 🔗
	</div>
	
	<div class="relative container mx-auto px-6 min-h-[70vh] flex items-center">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<div class="text-white/90">
					<Icon name="brain" size={24} />
				</div>
				<span class="text-white/80 text-lg font-mono">RAG + MCP INTEGRATION</span>
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
				IA QUE
				<span class="block text-purple-200">CONOCE TUS</span>
				<span class="block text-indigo-200">DATOS</span>
			</h1>
			
			<p class="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
				<strong>RAG (Retrieval Augmented Generation)</strong> + <strong>MCP (Model Context Protocol)</strong> 
				para crear sistemas de IA conversacional que responden con información actualizada 
				de tus propios documentos y bases de datos.
			</p>
			
			<!-- Key Features -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="zap" size={20} color="white" />
						<span class="text-white font-bold">Respuestas Precisas</span>
					</div>
					<p class="text-white/80 text-sm">IA que cita fuentes y referencias específicas</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="database" size={20} color="white" />
						<span class="text-white font-bold">Múltiples Fuentes</span>
					</div>
					<p class="text-white/80 text-sm">PDFs, documentos, APIs, bases de datos</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="shield" size={20} color="white" />
						<span class="text-white font-bold">Datos Privados</span>
					</div>
					<p class="text-white/80 text-sm">Tu información nunca sale de tu infraestructura</p>
				</div>
			</div>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-6">
				<a href="#calculadora" class="bg-white text-purple-600 px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-200">
					VER PRECIOS Y CONFIGURACIÓN
				</a>
				<a href="#contact" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200">
					DEMO PERSONALIZADA
				</a>
			</div>
		</div>
	</div>
</section>

<!-- What is RAG + MCP Section -->
<section class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">¿Qué es RAG + MCP?</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Tecnologías de vanguardia que permiten a la IA acceder y procesar información específica de tu empresa.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- RAG Explanation -->
			<div>
				<div class="bg-purple-100 p-6 mb-6">
					<h3 class="text-2xl font-bold text-purple-800 mb-4">🔍 RAG (Retrieval Augmented Generation)</h3>
					<p class="text-gray-700 mb-4">
						Técnica que combina la capacidad generativa de los LLMs con búsqueda semántica 
						en bases de datos vectoriales para proporcionar respuestas precisas y actualizadas.
					</p>
					<div class="space-y-2">
						<div class="flex items-center gap-3">
							<Icon name="check-circle" size={16} color="#7c3aed" />
							<span class="text-sm">Búsqueda semántica avanzada</span>
						</div>
						<div class="flex items-center gap-3">
							<Icon name="check-circle" size={16} color="#7c3aed" />
							<span class="text-sm">Embeddings multi-modales</span>
						</div>
						<div class="flex items-center gap-3">
							<Icon name="check-circle" size={16} color="#7c3aed" />
							<span class="text-sm">Respuestas con referencias</span>
						</div>
					</div>
				</div>
			</div>
			
			<!-- MCP Explanation -->
			<div>
				<div class="bg-indigo-100 p-6 mb-6">
					<h3 class="text-2xl font-bold text-indigo-800 mb-4">🔗 MCP (Model Context Protocol)</h3>
					<p class="text-gray-700 mb-4">
						Protocolo estándar que permite a los modelos de IA conectarse de forma segura 
						con herramientas, bases de datos y servicios externos de tu empresa.
					</p>
					<div class="space-y-2">
						<div class="flex items-center gap-3">
							<Icon name="check-circle" size={16} color="#4f46e5" />
							<span class="text-sm">Conexiones seguras y estándar</span>
						</div>
						<div class="flex items-center gap-3">
							<Icon name="check-circle" size={16} color="#4f46e5" />
							<span class="text-sm">Integración con herramientas existentes</span>
						</div>
						<div class="flex items-center gap-3">
							<Icon name="check-circle" size={16} color="#4f46e5" />
							<span class="text-sm">Acceso controlado a recursos</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Use Cases Section -->
<section class="py-24 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">Casos de Uso Empresarial</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Aplicaciones reales de RAG + MCP que transforman la productividad de tu equipo.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-blue-100 w-12 h-12 mb-4 flex items-center justify-center">
					<Icon name="help-circle" size={24} color="#2563eb" />
				</div>
				<h3 class="text-xl font-bold mb-3">Soporte Técnico IA</h3>
				<p class="text-gray-600 mb-4">
					Responde automáticamente consultas técnicas basándose en manuales, 
					documentación y casos anteriores.
				</p>
				<div class="text-sm text-blue-600 font-medium">
					Reduce 70% tickets de soporte
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-green-100 w-12 h-12 mb-4 flex items-center justify-center">
					<Icon name="search" size={24} color="#16a34a" />
				</div>
				<h3 class="text-xl font-bold mb-3">Búsqueda Empresarial</h3>
				<p class="text-gray-600 mb-4">
					Encuentra información en documentos, emails, procedimientos y 
					bases de conocimiento usando lenguaje natural.
				</p>
				<div class="text-sm text-green-600 font-medium">
					Ahorra 2h/día por empleado
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-purple-100 w-12 h-12 mb-4 flex items-center justify-center">
					<Icon name="book" size={24} color="#7c3aed" />
				</div>
				<h3 class="text-xl font-bold mb-3">Compliance Automatizado</h3>
				<p class="text-gray-600 mb-4">
					Verificación automática de documentos contra normativas, 
					políticas internas y regulaciones.
				</p>
				<div class="text-sm text-purple-600 font-medium">
					99.5% precisión normativa
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-yellow-100 w-12 h-12 mb-4 flex items-center justify-center">
					<Icon name="users" size={24} color="#eab308" />
				</div>
				<h3 class="text-xl font-bold mb-3">Onboarding Inteligente</h3>
				<p class="text-gray-600 mb-4">
					Guía personalizada para nuevos empleados basada en rol, 
					departamento y procedimientos específicos.
				</p>
				<div class="text-sm text-yellow-600 font-medium">
					50% menos tiempo integración
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-red-100 w-12 h-12 mb-4 flex items-center justify-center">
					<Icon name="bar-chart" size={24} color="#dc2626" />
				</div>
				<h3 class="text-xl font-bold mb-3">Análisis de Datos</h3>
				<p class="text-gray-600 mb-4">
					Consultas en lenguaje natural sobre métricas, KPIs y 
					informes empresariales con visualizaciones automáticas.
				</p>
				<div class="text-sm text-red-600 font-medium">
					Reportes en tiempo real
				</div>
			</div>
			
			<div class="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-indigo-100 w-12 h-12 mb-4 flex items-center justify-center">
					<Icon name="settings" size={24} color="#4f46e5" />
				</div>
				<h3 class="text-xl font-bold mb-3">Asistente Procesos</h3>
				<p class="text-gray-600 mb-4">
					Automatización y guía step-by-step para procesos empresariales 
					complejos y workflows específicos.
				</p>
				<div class="text-sm text-indigo-600 font-medium">
					80% automatización procesos
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technical Architecture Section -->
<section class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">Arquitectura Técnica</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Infraestructura robusta y escalable para implementaciones empresariales críticas.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- Data Ingestion -->
			<div class="text-center">
				<div class="bg-blue-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="download" size={32} color="#2563eb" />
				</div>
				<h3 class="text-xl font-bold mb-4">1. Ingesta de Datos</h3>
				<div class="space-y-3 text-left">
					<div class="flex items-center gap-2">
						<Icon name="file-text" size={16} color="#2563eb" />
						<span class="text-sm">PDFs, Word, Excel</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon name="database" size={16} color="#2563eb" />
						<span class="text-sm">PostgreSQL, MySQL</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon name="globe" size={16} color="#2563eb" />
						<span class="text-sm">APIs REST/GraphQL</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon name="mail" size={16} color="#2563eb" />
						<span class="text-sm">Email, Slack, Teams</span>
					</div>
				</div>
			</div>
			
			<!-- Processing -->
			<div class="text-center">
				<div class="bg-purple-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="cpu" size={32} color="#7c3aed" />
				</div>
				<h3 class="text-xl font-bold mb-4">2. Procesamiento IA</h3>
				<div class="space-y-3 text-left">
					<div class="flex items-center gap-2">
						<Icon name="brain" size={16} color="#7c3aed" />
						<span class="text-sm">Embeddings OpenAI/Cohere</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon name="layers" size={16} color="#7c3aed" />
						<span class="text-sm">Chunking inteligente</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon name="search" size={16} color="#7c3aed" />
						<span class="text-sm">Vector similarity search</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon name="filter" size={16} color="#7c3aed" />
						<span class="text-sm">Re-ranking avanzado</span>
					</div>
				</div>
			</div>
			
			<!-- Output -->
			<div class="text-center">
				<div class="bg-green-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="message-circle" size={32} color="#16a34a" />
				</div>
				<h3 class="text-xl font-bold mb-4">3. Interfaz IA</h3>
				<div class="space-y-3 text-left">
					<div class="flex items-center gap-2">
						<Icon name="monitor" size={16} color="#16a34a" />
						<span class="text-sm">Web dashboard</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon name="smartphone" size={16} color="#16a34a" />
						<span class="text-sm">App móvil nativa</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon name="code" size={16} color="#16a34a" />
						<span class="text-sm">API REST</span>
					</div>
					<div class="flex items-center gap-2">
						<Icon name="link" size={16} color="#16a34a" />
						<span class="text-sm">Widgets embebidos</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Price Calculator Section -->
<section id="calculadora" class="py-24 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-6">Configurador de Proyecto RAG + MCP</h2>
			<p class="text-xl text-white/90 max-w-3xl mx-auto">
				Estima el coste de implementación basado en volumen de datos y complejidad de tu caso de uso.
			</p>
		</div>
		
		<div class="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm p-8 border border-white/20">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<!-- Configuration Input -->
				<div>
					<h3 class="text-2xl font-bold mb-6">Configuración del Proyecto</h3>
					
					<div class="mb-6">
						<label for="document-volume" class="block text-white/90 mb-2">Volumen de Documentos</label>
						<input 
							id="document-volume"
							type="range" 
							min="100" 
							max="100000" 
							bind:value={documentVolume}
							class="w-full"
						>
						<div class="flex justify-between text-sm text-white/70 mt-1">
							<span>100</span>
							<span class="font-bold text-white">{documentVolume.toLocaleString()} documentos</span>
							<span>100K+</span>
						</div>
					</div>
					
					<div class="mb-6">
						<label for="monthly-queries" class="block text-white/90 mb-2">Consultas por Mes</label>
						<input 
							id="monthly-queries"
							type="range" 
							min="50" 
							max="10000" 
							bind:value={queryVolume}
							class="w-full"
						>
						<div class="flex justify-between text-sm text-white/70 mt-1">
							<span>50</span>
							<span class="font-bold text-white">{queryVolume.toLocaleString()} queries/mes</span>
							<span>10K+</span>
						</div>
					</div>
					
					<!-- Complexity Selection -->
					<div class="mb-6">
						<h4 class="text-lg font-bold mb-4">Complejidad Recomendada</h4>
						<div class="bg-white/20 p-4 border border-white/30">
							<div class="flex justify-between items-center mb-2">
								<span class="font-bold text-lg">{complexityLevels[selectedComplexity].name}</span>
								<span class="text-2xl font-bold">{currentPrice}€</span>
							</div>
							<p class="text-white/80 text-sm mb-3">Tiempo implementación: {complexityLevels[selectedComplexity].setupTime}</p>
							<div class="space-y-1">
								{#each complexityLevels[selectedComplexity].features as feature}
									<div class="flex items-center gap-2">
										<Icon name="check" size={14} color="white" />
										<span class="text-sm text-white/90">{feature}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
				
				<!-- All Plans Comparison -->
				<div>
					<h3 class="text-2xl font-bold mb-6">Comparativa de Planes</h3>
					
					<div class="space-y-4">
						{#each Object.entries(complexityLevels) as [key, plan]}
							<div class="bg-white/20 p-4 border border-white/30 {selectedComplexity === key ? 'ring-2 ring-white' : ''}">
								<div class="flex justify-between items-center mb-2">
									<h4 class="font-bold text-lg">{plan.name}</h4>
									<span class="text-xl font-bold">{plan.price}€</span>
								</div>
								<p class="text-white/70 text-sm mb-3">{plan.setupTime}</p>
								<div class="grid grid-cols-1 gap-1">
									{#each plan.features as feature}
										<div class="flex items-center gap-2">
											<Icon name="check" size={12} color="white" />
											<span class="text-xs text-white/80">{feature}</span>
										</div>
									{/each}
								</div>
							</div>
						{/each}
					</div>
					
					<!-- Additional Costs -->
					<div class="mt-6 bg-white/10 p-4 border border-white/20">
						<h4 class="font-bold mb-3">💰 Costes Adicionales (Opcionales)</h4>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between">
								<span>Embeddings OpenAI (por token)</span>
								<span>0.0001€/1K tokens</span>
							</div>
							<div class="flex justify-between">
								<span>Hosting Vector DB (Pinecone/Weaviate)</span>
								<span>70€/mes</span>
							</div>
							<div class="flex justify-between">
								<span>API Gateway (Claude/GPT)</span>
								<span>Según uso</span>
							</div>
							<div class="flex justify-between">
								<span>Mantenimiento mensual</span>
								<span>15% del proyecto</span>
							</div>
						</div>
					</div>
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
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Demo Personalizada RAG + MCP</h2>
				<p class="text-xl text-gray-600">
					Te mostramos cómo funcionaría con tus datos reales. 
					<strong>Demo interactiva</strong> en 48 horas.
				</p>
			</div>
			
			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-gray-700 font-medium mb-2">Nombre Completo *</label>
						<input 
							type="text" 
							bind:value={contactForm.nombre}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-purple-600 focus:outline-none"
						>
					</div>
					<div>
						<label class="block text-gray-700 font-medium mb-2">Empresa *</label>
						<input 
							type="text" 
							bind:value={contactForm.empresa}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-purple-600 focus:outline-none"
						>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-gray-700 font-medium mb-2">Email Corporativo *</label>
						<input 
							type="email" 
							bind:value={contactForm.email}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-purple-600 focus:outline-none"
						>
					</div>
					<div>
						<label class="block text-gray-700 font-medium mb-2">Teléfono</label>
						<input 
							type="tel" 
							bind:value={contactForm.telefono}
							class="w-full px-4 py-3 border border-gray-300 focus:border-purple-600 focus:outline-none"
						>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-gray-700 font-medium mb-2">Tipo de Datos Principales</label>
						<select bind:value={contactForm.tipo_datos} class="w-full px-4 py-3 border border-gray-300 focus:border-purple-600 focus:outline-none">
							<option value="">Seleccionar...</option>
							<option value="documentos">Documentos técnicos/manuales</option>
							<option value="emails">Emails y comunicaciones</option>
							<option value="contratos">Contratos y legal</option>
							<option value="bases-datos">Bases de datos estructuradas</option>
							<option value="mixto">Múltiples tipos</option>
						</select>
					</div>
					<div>
						<label class="block text-gray-700 font-medium mb-2">Volumen Aproximado</label>
						<select bind:value={contactForm.volumen_docs} class="w-full px-4 py-3 border border-gray-300 focus:border-purple-600 focus:outline-none">
							<option value="">Seleccionar...</option>
							<option value="pequeno">Menos de 1,000 documentos</option>
							<option value="medio">1,000 - 10,000 documentos</option>
							<option value="grande">10,000 - 100,000 documentos</option>
							<option value="enterprise">Más de 100,000 documentos</option>
						</select>
					</div>
				</div>
				
				<div>
					<label class="block text-gray-700 font-medium mb-2">Caso de Uso Principal</label>
					<select bind:value={contactForm.use_case} class="w-full px-4 py-3 border border-gray-300 focus:border-purple-600 focus:outline-none">
						<option value="">Seleccionar...</option>
						<option value="soporte">Soporte técnico automatizado</option>
						<option value="busqueda">Búsqueda empresarial avanzada</option>
						<option value="compliance">Compliance y auditoría</option>
						<option value="onboarding">Onboarding empleados</option>
						<option value="analisis">Análisis de datos</option>
						<option value="otro">Otro caso de uso</option>
					</select>
				</div>
				
				<div>
					<label class="block text-gray-700 font-medium mb-2">Descripción del Proyecto</label>
					<textarea 
						bind:value={contactForm.mensaje}
						rows="4"
						placeholder="Describe qué tipo de preguntas quieres que la IA pueda responder, qué datos tienes disponibles, integración con sistemas existentes..."
						class="w-full px-4 py-3 border border-gray-300 focus:border-purple-600 focus:outline-none"
					></textarea>
				</div>
				
				<div class="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 p-4">
					<div class="flex items-start gap-3">
						<Icon name="lightbulb" size={20} color="#7c3aed" />
						<div>
							<h4 class="font-bold text-purple-800 mb-1">Demo Personalizada Incluida</h4>
							<p class="text-purple-700 text-sm">
								Configuramos una demo con una muestra de tus datos reales para que veas 
								el potencial exacto del sistema antes de cualquier compromiso.
							</p>
						</div>
					</div>
				</div>
				
				<button 
					type="submit"
					class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-8 font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
				>
					SOLICITAR DEMO PERSONALIZADA - 48H
				</button>
				
				<p class="text-center text-gray-500 text-sm">
					Demo completamente gratuita y sin compromiso. Datos tratados según RGPD.
				</p>
			</form>
		</div>
	</div>
</section>

<style>
	.pattern-dots {
		background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
