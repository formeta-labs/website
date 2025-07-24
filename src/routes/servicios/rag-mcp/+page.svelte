<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { debug } from '$lib/utils/debug';
	
	let selectedComplexity: 'basic' | 'standard' | 'enterprise' = 'standard';
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
<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
	<!-- Professional geometric patterns -->
	<div class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"></div>
	<div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_70%)]"></div>
	<div class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.08),transparent_70%)]"></div>
	
	<!-- Floating Professional Indicator -->
	<div class="floating-indicator-rag">
		<div class="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
			<Icon name="brain" size={24} className="text-purple-400" />
			<span class="text-white font-mono text-sm font-medium">RAG + MCP ENTERPRISE</span>
		</div>
	</div>
	
	<!-- ASCII Decorative Shapes -->
	<div class="absolute top-20 left-12 text-purple-400/30 text-6xl font-mono select-none">▦</div>
	<div class="absolute top-32 right-16 text-indigo-400/25 text-4xl font-mono select-none">◆</div>
	<div class="absolute bottom-24 left-20 text-purple-400/20 text-5xl font-mono select-none">●</div>
	<div class="absolute bottom-12 right-12 text-indigo-400/30 text-3xl font-mono select-none">▲</div>
	<div class="absolute top-1/2 left-8 text-purple-400/15 text-2xl font-mono select-none transform -translate-y-1/2">▦▦</div>
	<div class="absolute top-1/3 right-8 text-indigo-400/20 text-2xl font-mono select-none">◆◆</div>
	
	<div class="relative container mx-auto px-6 text-center text-white z-10">
		<!-- Hero Section Header -->
		<div class="flex items-center justify-center gap-3 mb-8">
			<span class="text-purple-400/60 text-sm font-mono">///</span>
			<span class="text-white/80 text-sm font-mono font-medium tracking-wider uppercase">INTELIGENCIA ARTIFICIAL EMPRESARIAL</span>
			<span class="text-purple-400/60 text-sm font-mono">///</span>
		</div>
		
		<!-- Main Headlines -->
		<h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
			<span class="text-white">IA que Conoce</span>
			<span class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Tus Datos</span>
		</h1>
		
		<div class="mb-8">
			<p class="text-xl text-white/90 font-medium mb-4 max-w-4xl mx-auto leading-relaxed">
				<strong>RAG + MCP Protocol</strong> para crear sistemas de IA conversacional que consultan 
				<strong class="text-purple-400">tu información empresarial privada</strong>
			</p>
			<p class="text-lg text-white/75 max-w-3xl mx-auto">
				Retrieval Augmented Generation · Model Context Protocol · 100% Local y Privado
			</p>
		</div>
		
		<!-- Enterprise Metrics Grid -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-purple-400 mb-2">100%</div>
				<div class="text-sm text-white/80 font-medium">Datos Privados</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-indigo-400 mb-2">Multi</div>
				<div class="text-sm text-white/80 font-medium">Fuentes de Datos</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-green-400 mb-2">RAG+</div>
				<div class="text-sm text-white/80 font-medium">MCP Protocol</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-orange-400 mb-2">Local</div>
				<div class="text-sm text-white/80 font-medium">Sin Cloud</div>
			</div>
		</div>
		
		<!-- Hero Feature Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="zap" size={28} className="text-purple-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Respuestas Precisas</h3>
				<p class="text-sm text-white/70">IA que cita fuentes y referencias específicas</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="database" size={28} className="text-indigo-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Múltiples Fuentes</h3>
				<p class="text-sm text-white/70">PDFs, documentos, APIs, bases de datos</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="shield" size={28} className="text-green-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Datos Privados</h3>
				<p class="text-sm text-white/70">Tu información nunca sale de tu infraestructura</p>
			</div>
		</div>
		
		<!-- Enterprise Badges -->
		<div class="flex flex-wrap justify-center gap-4 mb-10">
			<div class="bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-purple-400 text-sm font-bold">✓ RAG ENTERPRISE</span>
			</div>
			<div class="bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-indigo-400 text-sm font-bold">✓ MCP PROTOCOL</span>
			</div>
			<div class="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-green-400 text-sm font-bold">✓ 100% PRIVADO</span>
			</div>
		</div>
		
		<!-- Executive CTAs -->
		<div class="flex flex-col sm:flex-row gap-6 justify-center">
			<a href="#calculadora" class="group bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center gap-3 min-w-[250px]">
				VER PRECIOS Y CONFIGURACIÓN
				<Icon name="arrow-down" size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
			</a>
			<a href="/contacto" class="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-3 min-w-[250px]">
				DEMO PERSONALIZADA
				<Icon name="arrow-right" size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
			</a>
		</div>
	</div>
</section>

<!-- ¿Qué es RAG + MCP? Section -->
<section class="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">¿Qué es RAG + MCP?</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				<strong class="text-purple-600">RAG (Retrieval Augmented Generation)</strong> y
				<strong class="text-indigo-600">MCP (Model Context Protocol)</strong> son tecnologías avanzadas que permiten a la IA consultar y procesar información empresarial específica, garantizando precisión, privacidad y personalización.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
				<div class="flex items-center gap-4 mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center">
						<Icon name="search" size={32} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900">RAG: IA con Contexto</h3>
				</div>
				<p class="text-gray-700 leading-relaxed">
					<strong class="text-gray-900">Retrieval Augmented Generation</strong> permite a los modelos de IA buscar y recuperar información relevante de múltiples fuentes, como documentos, bases de datos y APIs, para generar respuestas precisas y basadas en datos reales.
				</p>
			</div>

			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
				<div class="flex items-center gap-4 mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-full flex items-center justify-center">
						<Icon name="cpu" size={32} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900">MCP: Protocolo Empresarial</h3>
				</div>
				<p class="text-gray-700 leading-relaxed">
					<strong class="text-gray-900">Model Context Protocol</strong> optimiza la interacción entre la IA y tus datos empresariales, asegurando privacidad, cumplimiento normativo y personalización total para cada consulta.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Beneficios de RAG + MCP -->
<section class="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">Beneficios de RAG + MCP</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Descubre cómo estas tecnologías transforman la manera en que tu empresa utiliza la inteligencia artificial para obtener resultados excepcionales.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
				<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mb-6">
					<Icon name="shield-check" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Privacidad Garantizada</h3>
				<p class="text-gray-700 leading-relaxed">
					Tus datos permanecen en tu infraestructura, asegurando cumplimiento normativo y control total sobre la información.
				</p>
			</div>

			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
				<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mb-6">
					<Icon name="zap" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Respuestas Precisas</h3>
				<p class="text-gray-700 leading-relaxed">
					La IA genera respuestas basadas en datos reales, citando fuentes específicas para mayor confianza y transparencia.
				</p>
			</div>

			<div class="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
				<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mb-6">
					<Icon name="database" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Integración Flexible</h3>
				<p class="text-gray-700 leading-relaxed">
					Compatible con múltiples fuentes de datos: documentos, APIs, bases de datos y más, adaptándose a tus necesidades empresariales.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Use Cases Section -->
<section class="py-24 bg-gradient-to-br from-gray-50 to-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">Casos de Uso Empresarial</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Aplicaciones reales de <strong class="text-purple-600">RAG + MCP</strong> que transforman la productividad y eficiencia de tu organización.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mb-6">
					<Icon name="help-circle" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Soporte Técnico IA</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Responde automáticamente consultas técnicas basándose en manuales, 
					documentación y casos anteriores con precisión empresarial.
				</p>
				<div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
					<div class="text-sm font-bold text-blue-700">✓ Reduce 70% tickets de soporte</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mb-6">
					<Icon name="search" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Búsqueda Empresarial</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Encuentra información en documentos, emails, procedimientos y 
					bases de conocimiento usando consultas en lenguaje natural.
				</p>
				<div class="bg-green-50 border border-green-200 rounded-lg p-3">
					<div class="text-sm font-bold text-green-700">✓ Ahorra 2h/día por empleado</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mb-6">
					<Icon name="book" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Compliance Automatizado</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Verificación automática de documentos contra normativas, 
					políticas internas y regulaciones con trazabilidad completa.
				</p>
				<div class="bg-purple-50 border border-purple-200 rounded-lg p-3">
					<div class="text-sm font-bold text-purple-700">✓ 99.5% precisión normativa</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mb-6">
					<Icon name="users" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Onboarding Inteligente</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Guía personalizada para nuevos empleados basada en rol, 
					departamento y procedimientos específicos de la empresa.
				</p>
				<div class="bg-orange-50 border border-orange-200 rounded-lg p-3">
					<div class="text-sm font-bold text-orange-700">✓ 50% menos tiempo integración</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-400 rounded-full flex items-center justify-center mb-6">
					<Icon name="bar-chart" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Análisis de Datos</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Consultas en lenguaje natural sobre métricas, KPIs y 
					informes empresariales con visualizaciones automáticas.
				</p>
				<div class="bg-red-50 border border-red-200 rounded-lg p-3">
					<div class="text-sm font-bold text-red-700">✓ Reportes en tiempo real</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-full flex items-center justify-center mb-6">
					<Icon name="settings" size={32} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Asistente Procesos</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Automatización y guía step-by-step para procesos empresariales 
					complejos y workflows específicos con validación.
				</p>
				<div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
					<div class="text-sm font-bold text-indigo-700">✓ 80% automatización procesos</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technical Architecture Section -->
<section class="py-24 bg-gradient-to-br from-white to-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">Arquitectura Técnica</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Infraestructura robusta, escalable y segura diseñada para <strong class="text-purple-600">implementaciones empresariales críticas</strong> con máximo rendimiento.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			<!-- Data Ingestion -->
			<div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
				<div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="download" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-6">1. Ingesta de Datos</h3>
				<div class="space-y-4 text-left">
					<div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
						<Icon name="file-text" size={20} className="text-blue-600" />
						<span class="text-gray-700 font-medium">PDFs, Word, Excel, PowerPoint</span>
					</div>
					<div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
						<Icon name="database" size={20} className="text-blue-600" />
						<span class="text-gray-700 font-medium">PostgreSQL, MySQL, MongoDB</span>
					</div>
					<div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
						<Icon name="globe" size={20} className="text-blue-600" />
						<span class="text-gray-700 font-medium">APIs REST/GraphQL en tiempo real</span>
					</div>
					<div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
						<Icon name="mail" size={20} className="text-blue-600" />
						<span class="text-gray-700 font-medium">Email, Slack, Teams, SharePoint</span>
					</div>
				</div>
			</div>
			
			<!-- Processing -->
			<div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
				<div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="cpu" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-6">2. Procesamiento IA</h3>
				<div class="space-y-4 text-left">
					<div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
						<Icon name="brain" size={20} className="text-purple-600" />
						<span class="text-gray-700 font-medium">Embeddings OpenAI/Cohere/Local</span>
					</div>
					<div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
						<Icon name="layers" size={20} className="text-purple-600" />
						<span class="text-gray-700 font-medium">Chunking inteligente contextual</span>
					</div>
					<div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
						<Icon name="search" size={20} className="text-purple-600" />
						<span class="text-gray-700 font-medium">Vector similarity search optimizado</span>
					</div>
					<div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
						<Icon name="filter" size={20} className="text-purple-600" />
						<span class="text-gray-700 font-medium">Re-ranking avanzado con MCP</span>
					</div>
				</div>
			</div>
			
			<!-- Output -->
			<div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
				<div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="message-circle" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-6">3. Interfaz IA</h3>
				<div class="space-y-4 text-left">
					<div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
						<Icon name="monitor" size={20} className="text-green-600" />
						<span class="text-gray-700 font-medium">Dashboard web responsivo</span>
					</div>
					<div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
						<Icon name="smartphone" size={20} className="text-green-600" />
						<span class="text-gray-700 font-medium">App móvil nativa iOS/Android</span>
					</div>
					<div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
						<Icon name="code" size={20} className="text-green-600" />
						<span class="text-gray-700 font-medium">API REST con documentación</span>
					</div>
					<div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
						<Icon name="link" size={20} className="text-green-600" />
						<span class="text-gray-700 font-medium">Widgets embebidos personalizables</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Technical Features Grid -->
		<div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
				<div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
					<Icon name="shield" size={24} className="text-white" />
				</div>
				<h4 class="text-lg font-bold text-gray-900 mb-2">Seguridad Enterprise</h4>
				<p class="text-sm text-gray-700">Cifrado AES-256, autenticación SSO, auditoría completa</p>
			</div>
			
			<div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 text-center">
				<div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
					<Icon name="trending-up" size={24} className="text-white" />
				</div>
				<h4 class="text-lg font-bold text-gray-900 mb-2">Escalabilidad</h4>
				<p class="text-sm text-gray-700">Arquitectura distribuida, balanceador de carga automático</p>
			</div>
			
			<div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
				<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
					<Icon name="check-circle" size={24} className="text-white" />
				</div>
				<h4 class="text-lg font-bold text-gray-900 mb-2">Alta Disponibilidad</h4>
				<p class="text-sm text-gray-700">SLA 99.9%, backup automático, failover instantáneo</p>
			</div>
			
			<div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
				<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
					<Icon name="settings" size={24} className="text-white" />
				</div>
				<h4 class="text-lg font-bold text-gray-900 mb-2">Personalización</h4>
				<p class="text-sm text-gray-700">Configuración flexible, modelos fine-tuned, UI custom</p>
			</div>
		</div>
	</div>
</section>

<!-- Price Calculator Section -->
<section id="calculadora" class="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
	<!-- Background Effects -->
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.3),transparent_50%)]"></div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
				<Icon name="calculator" size={20} className="text-white" />
				<span class="text-sm font-medium text-white/90">CALCULADORA INTELIGENTE</span>
			</div>
			<h2 class="text-5xl font-extrabold mb-6">Configurador de Proyecto RAG + MCP</h2>
			<p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
				Estima el coste de implementación basado en volumen de datos y complejidad de tu caso de uso específico.
			</p>
		</div>
		
		<div class="max-w-7xl mx-auto">
			<!-- Main Calculator Card -->
			<div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
				<div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
					
					<!-- Configuration Panel -->
					<div class="xl:col-span-2 space-y-8">
						<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
							<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
								<Icon name="settings" size={24} className="text-purple-300" />
								Configuración del Proyecto
							</h3>
							
							<!-- Document Volume Slider -->
							<div class="mb-8">
								<div class="flex justify-between items-center mb-4">
									<label for="document-volume" class="text-lg font-semibold text-white">Volumen de Documentos</label>
									<div class="bg-purple-500/20 border border-purple-400/30 px-4 py-2 rounded-lg">
										<span class="font-bold text-purple-200">{documentVolume.toLocaleString()} docs</span>
									</div>
								</div>
								<div class="relative">
									<input 
										id="document-volume"
										type="range" 
										min="100" 
										max="100000" 
										bind:value={documentVolume}
										class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
									>
									<div class="flex justify-between text-sm text-white/70 mt-2">
										<span>100</span>
										<span>10K</span>
										<span>50K</span>
										<span>100K+</span>
									</div>
								</div>
								<div class="mt-3 text-sm text-white/80">
									<Icon name="info" size={16} className="inline mr-1" />
									Incluye PDFs, Word, Excel, presentaciones y documentos estructurados
								</div>
							</div>
							
							<!-- Query Volume Slider -->
							<div class="mb-8">
								<div class="flex justify-between items-center mb-4">
									<label for="monthly-queries" class="text-lg font-semibold text-white">Consultas por Mes</label>
									<div class="bg-indigo-500/20 border border-indigo-400/30 px-4 py-2 rounded-lg">
										<span class="font-bold text-indigo-200">{queryVolume.toLocaleString()} queries</span>
									</div>
								</div>
								<div class="relative">
									<input 
										id="monthly-queries"
										type="range" 
										min="50" 
										max="10000" 
										bind:value={queryVolume}
										class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
									>
									<div class="flex justify-between text-sm text-white/70 mt-2">
										<span>50</span>
										<span>1K</span>
										<span>5K</span>
										<span>10K+</span>
									</div>
								</div>
								<div class="mt-3 text-sm text-white/80">
									<Icon name="zap" size={16} className="inline mr-1" />
									Consultas de IA procesadas mensualmente por todos los usuarios
								</div>
							</div>
							
							<!-- Recommended Plan Display -->
							<div class="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-6">
								<div class="flex items-center gap-3 mb-4">
									<div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
										<Icon name="check-circle" size={20} className="text-white" />
									</div>
									<div>
										<h4 class="text-lg font-bold text-green-200">Plan Recomendado</h4>
										<p class="text-sm text-green-300">Optimizado para tus necesidades</p>
									</div>
								</div>
								
								<div class="bg-white/10 rounded-xl p-4">
									<div class="flex justify-between items-center mb-3">
										<span class="text-xl font-bold text-white">{complexityLevels[selectedComplexity].name}</span>
										<div class="text-right">
											<div class="text-3xl font-extrabold text-white">{currentPrice}€</div>
											<div class="text-sm text-white/70">Implementación única</div>
										</div>
									</div>
									<div class="flex items-center gap-2 mb-4">
										<Icon name="clock" size={16} className="text-green-300" />
										<span class="text-sm text-white/90">Tiempo de implementación: {complexityLevels[selectedComplexity].setupTime}</span>
									</div>
									
									<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
										{#each complexityLevels[selectedComplexity].features as feature}
											<div class="flex items-center gap-2 bg-white/5 rounded-lg p-2">
												<Icon name="check" size={14} className="text-green-400 flex-shrink-0" />
												<span class="text-sm text-white/90">{feature}</span>
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<!-- Plans Comparison Panel -->
					<div class="space-y-6">
						<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
							<h3 class="text-xl font-bold mb-6 flex items-center gap-3">
								<Icon name="layers" size={20} className="text-indigo-300" />
								Todos los Planes
							</h3>
							
							<div class="space-y-4">
								{#each Object.entries(complexityLevels) as [key, plan]}
									<div class="relative group cursor-pointer transition-all duration-300 {selectedComplexity === key ? 'ring-2 ring-white/50 bg-white/10' : 'bg-white/5 hover:bg-white/8'} rounded-xl p-4 border border-white/10">
										{#if selectedComplexity === key}
											<div class="absolute -top-2 -right-2">
												<div class="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
													RECOMENDADO
												</div>
											</div>
										{/if}
										
										<div class="flex justify-between items-start mb-3">
											<div>
												<h4 class="font-bold text-lg text-white">{plan.name}</h4>
												<div class="flex items-center gap-2 mt-1">
													<Icon name="clock" size={14} className="text-white/60" />
													<span class="text-sm text-white/70">{plan.setupTime}</span>
												</div>
											</div>
											<div class="text-right">
												<div class="text-2xl font-bold text-white">{plan.price}€</div>
												<div class="text-xs text-white/60">Una sola vez</div>
											</div>
										</div>
										
										<div class="space-y-2">
											{#each plan.features.slice(0, 3) as feature}
												<div class="flex items-center gap-2">
													<Icon name="check" size={12} className="text-green-400 flex-shrink-0" />
													<span class="text-xs text-white/80">{feature}</span>
												</div>
											{/each}
											{#if plan.features.length > 3}
												<div class="text-xs text-white/60 mt-2">
													+{plan.features.length - 3} características más
												</div>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
						
						<!-- Cost Breakdown -->
						<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
							<h4 class="font-bold mb-4 flex items-center gap-2">
								<Icon name="credit-card" size={20} className="text-yellow-400" />
								Desglose de Costes
							</h4>
							
							<div class="space-y-3">
								<div class="flex justify-between items-center py-2 border-b border-white/10">
									<span class="text-sm text-white/80">Implementación base</span>
									<span class="font-semibold text-white">{currentPrice}€</span>
								</div>
								
								<div class="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-3">
									<div class="flex items-center gap-2 mb-2">
										<Icon name="info" size={16} className="text-yellow-400" />
										<span class="text-sm font-semibold text-yellow-200">Costes Opcionales</span>
									</div>
									<div class="space-y-1 text-xs text-white/70">
										<div class="flex justify-between">
											<span>Embeddings OpenAI</span>
											<span>0.0001€/1K tokens</span>
										</div>
										<div class="flex justify-between">
											<span>Vector DB hosting</span>
											<span>70€/mes</span>
										</div>
										<div class="flex justify-between">
											<span>Mantenimiento</span>
											<span>15% mensual</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<!-- CTA Button -->
						<div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 text-center">
							<h4 class="font-bold text-lg mb-2">¿Listo para empezar?</h4>
							<p class="text-sm text-white/80 mb-4">Obtén una propuesta personalizada</p>
							<a href="/contacto" class="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
								<Icon name="arrow-right" size={16} />
								SOLICITAR PROPUESTA
							</a>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Additional Features Grid -->
			<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="shield-check" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-white mb-2">Garantía Total</h4>
					<p class="text-sm text-white/70">30 días de garantía de satisfacción o devolución completa</p>
				</div>
				
				<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="headphones" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-white mb-2">Soporte 24/7</h4>
					<p class="text-sm text-white/70">Equipo técnico dedicado con respuesta garantizada en 2 horas</p>
				</div>
				
				<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="trending-up" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-white mb-2">Escalabilidad</h4>
					<p class="text-sm text-white/70">Arquitectura preparada para crecer con tu empresa sin límites</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Professional Floating Indicator for RAG */
	.floating-indicator-rag {
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
		background: linear-gradient(90deg, rgba(147, 51, 234, 0.8), rgba(79, 70, 229, 0.8));
		outline: none;
		border: none;
	}

	.slider-thumb::-webkit-slider-thumb {
		appearance: none;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: linear-gradient(135deg, #8b5cf6, #6366f1);
		cursor: pointer;
		border: 3px solid white;
		box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
		transition: all 0.3s ease;
	}

	.slider-thumb::-webkit-slider-thumb:hover {
		transform: scale(1.2);
		box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
	}

	.slider-thumb::-moz-range-thumb {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: linear-gradient(135deg, #8b5cf6, #6366f1);
		cursor: pointer;
		border: 3px solid white;
		box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
		transition: all 0.3s ease;
	}

	.slider-thumb::-moz-range-thumb:hover {
		transform: scale(1.2);
		box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
	}

	/* Custom range track */
	.slider-thumb::-webkit-slider-track {
		background: linear-gradient(90deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3));
		height: 8px;
		border-radius: 4px;
	}

	.slider-thumb::-moz-range-track {
		background: linear-gradient(90deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3));
		height: 8px;
		border-radius: 4px;
		border: none;
	}


	@keyframes slideUpFade {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}


	@media (max-width: 1024px) {
		.floating-indicator-rag {
			top: 100px;
			right: 40px;
		}
	}

	@media (max-width: 768px) {
		.floating-indicator-rag {
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
		.floating-indicator-rag {
			animation: none;
			transition: none;
		}
	}
</style>
