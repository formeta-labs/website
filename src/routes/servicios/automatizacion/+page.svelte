<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { debug } from '$lib/utils/debug';
	
	const automationServices = [
		{
			name: 'Workflows Básicos',
			price: '599-899€',
			features: ['Hasta 5 workflows', 'Integraciones básicas', 'Email automation', 'Soporte estándar'],
			setupTime: '1-2 semanas'
		},
		{
			name: 'Automatización Avanzada',
			price: '1299-2499€',
			features: ['Workflows ilimitados', 'APIs personalizadas', 'IA integration', 'Dashboards', 'Soporte prioritario'],
			setupTime: '2-4 semanas'
		},
		{
			name: 'Enterprise Automation',
			price: '3999-7999€',
			features: ['Todo anterior', 'Consultoría dedicada', 'SLA 99.9%', 'Integraciones complejas', 'Soporte 24/7'],
			setupTime: '4-8 semanas'
		}
	];
	
</script>

<svelte:head>
	<title>Automatización de Procesos Empresariales | Formeta Labs</title>
	<meta name="description" content="Automatización inteligente de procesos empresariales. Workflows avanzados, integración APIs, n8n, Zapier, RPA. Reduce costes operativos hasta 70%. Consultoría especializada.">
	<meta name="keywords" content="automatización procesos, workflows, n8n, zapier, RPA, business process automation, integración APIs, productividad empresarial">
	<meta property="og:title" content="Automatización de Procesos - Eficiencia Empresarial">
	<meta property="og:description" content="Automatiza procesos repetitivos y libera a tu equipo para tareas estratégicas. ROI demostrado desde el primer mes.">
	<meta property="og:type" content="product">
	<link rel="canonical" href="https://formeta-labs.com/servicios/automatizacion">
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
	<!-- Professional geometric patterns -->
	<div class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"></div>
	<div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_70%)]"></div>
	<div class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_70%)]"></div>
	
	<!-- Floating Professional Indicator -->
	<div class="floating-indicator-automatizacion">
		<div class="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
			<Icon name="settings" size={24} className="text-green-400" />
			<span class="text-white font-mono text-sm font-medium">AUTOMATIZACIÓN ENTERPRISE</span>
		</div>
	</div>
	
	<!-- Tech Decorative Icons -->
	<div class="absolute top-20 left-12 select-none">
		<Icon name="settings" size={72} className="text-green-400/30" />
	</div>
	<div class="absolute top-32 right-16 select-none">
		<Icon name="cpu" size={48} className="text-emerald-400/25" />
	</div>
	<div class="absolute bottom-24 left-20 select-none">
		<Icon name="zap" size={60} className="text-green-400/20" />
	</div>
	<div class="absolute bottom-12 right-12 select-none">
		<Icon name="atom" size={36} className="text-emerald-400/30" />
	</div>
	<div class="absolute top-1/2 left-8 select-none transform -translate-y-1/2 flex gap-1">
		<Icon name="settings" size={24} className="text-green-400/15" />
		<Icon name="settings" size={24} className="text-green-400/15" />
	</div>
	<div class="absolute top-1/3 right-8 select-none flex gap-1">
		<Icon name="cpu" size={24} className="text-emerald-400/20" />
		<Icon name="cpu" size={24} className="text-emerald-400/20" />
	</div>
	
	<div class="relative container mx-auto px-6 text-center text-white z-10">
		<!-- Hero Section Header -->
		<div class="flex items-center justify-center gap-3 mb-8">
			<span class="text-green-400/60 text-sm font-mono">///</span>
			<span class="text-white/80 text-sm font-mono font-medium tracking-wider uppercase">AUTOMATIZACIÓN EMPRESARIAL</span>
			<span class="text-green-400/60 text-sm font-mono">///</span>
		</div>
		
		<!-- Main Headlines -->
		<h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
			<span class="text-white">Automatización</span>
			<span class="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Inteligente</span>
		</h1>
		
		<div class="mb-8">
			<p class="text-xl text-white/90 font-medium mb-4 max-w-4xl mx-auto leading-relaxed">
				<strong>Automatización inteligente de procesos empresariales</strong> que libera a tu equipo de tareas repetitivas
				<strong class="text-green-400">con ROI desde el primer mes</strong>
			</p>
			<p class="text-lg text-white/75 max-w-3xl mx-auto">
				Workflows N8N · Zapier · RPA · APIs · Eficiencia +70% · Ahorro 40h/semana
			</p>
		</div>
		
		<!-- Enterprise Metrics Grid -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-green-400 mb-2">+70%</div>
				<div class="text-sm text-white/80 font-medium">Eficiencia</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-emerald-400 mb-2">40h</div>
				<div class="text-sm text-white/80 font-medium">Ahorro/Semana</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-blue-400 mb-2">300%</div>
				<div class="text-sm text-white/80 font-medium">ROI Promedio</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-orange-400 mb-2">24/7</div>
				<div class="text-sm text-white/80 font-medium">Workflows</div>
			</div>
		</div>
		
		<!-- Hero Feature Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="trending-up" size={28} className="text-green-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Eficiencia +70%</h3>
				<p class="text-sm text-white/70">Procesos automatizados de alta precisión</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="clock" size={28} className="text-emerald-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Ahorro 40h/semana</h3>
				<p class="text-sm text-white/70">Por empleado en tareas automatizadas</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="dollar-sign" size={28} className="text-blue-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">ROI 300%</h3>
				<p class="text-sm text-white/70">Retorno promedio en 12 meses</p>
			</div>
		</div>
		
		<!-- Enterprise Badges -->
		<div class="flex flex-wrap justify-center gap-4 mb-10">
			<div class="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-green-400 text-sm font-bold flex items-center gap-2">
					<Icon name="zap" size={14} className="text-green-400" />
					N8N + ZAPIER
				</span>
			</div>
			<div class="bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-emerald-400 text-sm font-bold">🤖 RPA AVANZADO</span>
			</div>
			<div class="bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-blue-400 text-sm font-bold flex items-center gap-2">
					<Icon name="trending-up" size={14} className="text-blue-400" />
					ROI GARANTIZADO
				</span>
			</div>
		</div>
		
		<!-- Executive CTAs -->
		<div class="flex flex-col sm:flex-row gap-6 justify-center pb-12">
			<a href="#servicios" class="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-3 min-w-[250px]">
				VER SERVICIOS Y PRECIOS
				<Icon name="arrow-down" size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
			</a>
			<a href="/contacto" class="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-3 min-w-[250px]">
				AUDITORÍA GRATUITA
				<Icon name="arrow-right" size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
			</a>
		</div>
	</div>
</section>

<!-- What We Automate Section -->
<section class="py-24 bg-gradient-to-br from-white to-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 px-4 py-2 rounded-full mb-6">
				<Icon name="cpu" size={20} className="text-green-500" />
				<span class="text-sm font-medium text-green-600">PROCESOS EMPRESARIALES</span>
			</div>
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">¿Qué Automatizamos?</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Identificamos procesos repetitivos que consumen <strong class="text-green-600">tiempo valioso</strong> 
				de tu equipo y los convertimos en workflows inteligentes y eficientes.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="mail" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Gestión de Emails</h3>
				<p class="text-gray-700 mb-6 leading-relaxed text-center">
					Clasificación automática, respuestas predefinidas, escalado inteligente y seguimiento de conversaciones
				</p>
				<div class="space-y-3">
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Filtrado automático por prioridad</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Respuestas template inteligentes</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Escalado a especialistas</span>
					</div>
				</div>
				<div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
					<div class="text-lg font-bold text-blue-700">Ahorro: 15h/semana</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="file-text" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Procesamiento Documentos</h3>
				<p class="text-gray-700 mb-6 leading-relaxed text-center">
					Extracción de datos, validación automática, clasificación inteligente y archivo digital
				</p>
				<div class="space-y-3">
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>OCR avanzado para documentos</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Validación de datos automática</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Archivo inteligente por categoría</span>
					</div>
				</div>
				<div class="mt-6 bg-green-50 border border-green-200 rounded-lg p-3 text-center">
					<div class="text-lg font-bold text-green-700">Precisión: 99.2%</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="users" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Gestión RRHH</h3>
				<p class="text-gray-700 mb-6 leading-relaxed text-center">
					Onboarding automático, gestión vacaciones, evaluaciones programadas y reportes de rendimiento
				</p>
				<div class="space-y-3">
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Onboarding digital completo</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Calendarios y permisos automatizados</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Evaluaciones de rendimiento</span>
					</div>
				</div>
				<div class="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
					<div class="text-lg font-bold text-purple-700">Satisfacción: +40%</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="shopping-cart" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Procesos Ventas</h3>
				<p class="text-gray-700 mb-6 leading-relaxed text-center">
					Lead scoring automático, seguimiento prospectos, propuestas generadas y pipeline management
				</p>
				<div class="space-y-3">
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Calificación automática de leads</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Seguimiento inteligente</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Propuestas automatizadas</span>
					</div>
				</div>
				<div class="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
					<div class="text-lg font-bold text-orange-700">Conversión: +25%</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-20 h-20 bg-gradient-to-br from-red-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="credit-card" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Facturación y Pagos</h3>
				<p class="text-gray-700 mb-6 leading-relaxed text-center">
					Generación automática facturas, seguimiento pagos, recordatorios y conciliación bancaria
				</p>
				<div class="space-y-3">
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Facturación automática recurrente</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Recordatorios de pago inteligentes</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Conciliación bancaria automática</span>
					</div>
				</div>
				<div class="mt-6 bg-red-50 border border-red-200 rounded-lg p-3 text-center">
					<div class="text-lg font-bold text-red-700">Cash flow: +30%</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
					<Icon name="bar-chart" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Reportes y Analytics</h3>
				<p class="text-gray-700 mb-6 leading-relaxed text-center">
					KPIs automáticos, dashboards en tiempo real, alertas inteligentes y reportes programados
				</p>
				<div class="space-y-3">
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Dashboards en tiempo real</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Alertas automáticas por KPI</span>
					</div>
					<div class="flex items-center gap-3 text-sm text-gray-600">
						<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
						<span>Reportes programados</span>
					</div>
				</div>
				<div class="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-center">
					<div class="text-lg font-bold text-indigo-700">Disponibilidad: 24/7</div>
				</div>
			</div>
		</div>
		
		<!-- Workflow Process Flow -->
		<div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
			<div class="text-center mb-8">
				<h3 class="text-3xl font-bold text-gray-900 mb-4">Flujo de Automatización Inteligente</h3>
				<p class="text-lg text-gray-700">Cómo transformamos tus procesos manuales en workflows automatizados</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="search" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">1. Análisis</h4>
					<p class="text-sm text-gray-700">Identificación de procesos manuales repetitivos y cuellos de botella</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="settings" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">2. Diseño</h4>
					<p class="text-sm text-gray-700">Creación de workflows optimizados con triggers y acciones automáticas</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="play" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">3. Implementación</h4>
					<p class="text-sm text-gray-700">Despliegue gradual con testing y validación en entorno controlado</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="trending-up" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">4. Optimización</h4>
					<p class="text-sm text-gray-700">Monitoreo continuo y mejoras basadas en métricas de rendimiento</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technology Stack Section -->
<section class="py-24 bg-gradient-to-br from-gray-50 to-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 px-4 py-2 rounded-full mb-6">
				<Icon name="layers" size={20} className="text-blue-500" />
				<span class="text-sm font-medium text-blue-600">TECNOLOGÍA ENTERPRISE</span>
			</div>
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">Stack Tecnológico Avanzado</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Utilizamos las <strong class="text-blue-600">mejores herramientas de automatización empresarial</strong> 
				del mercado, adaptadas a las necesidades específicas de tu empresa.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
			<!-- Automation Tools -->
			<div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
				<div class="flex items-center gap-3 mb-6">
					<div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
						<Icon name="settings" size={24} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900">Herramientas de Automatización</h3>
				</div>
				<div class="space-y-4">
					<div class="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
						<div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
							<span class="text-white font-bold text-sm">N8N</span>
						</div>
						<div>
							<h4 class="font-bold text-gray-900">n8n Workflow Automation</h4>
							<p class="text-gray-600 text-sm">Workflows visuales avanzados y auto-hosting enterprise</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
						<div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
							<Icon name="zap" size={24} className="text-white" />
						</div>
						<div>
							<h4 class="font-bold text-gray-900">Zapier Premium</h4>
							<p class="text-gray-600 text-sm">Integraciones SaaS y triggers avanzados multistep</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
						<div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
							<Icon name="code" size={24} className="text-white" />
						</div>
						<div>
							<h4 class="font-bold text-gray-900">APIs Personalizadas</h4>
							<p class="text-gray-600 text-sm">Desarrollo custom para casos específicos y legacy systems</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
						<div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
							<Icon name="brain" size={24} className="text-white" />
						</div>
						<div>
							<h4 class="font-bold text-gray-900">IA Integrada</h4>
							<p class="text-gray-600 text-sm">Decisiones inteligentes y machine learning predictivo</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Integration Capabilities -->
			<div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
				<div class="flex items-center gap-3 mb-6">
					<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center">
						<Icon name="link" size={24} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900">Integraciones Disponibles</h3>
				</div>
				<div class="grid grid-cols-1 gap-3 mb-6">
					{#each [
						{ name: 'Google Workspace', category: 'productivity', color: 'blue' },
						{ name: 'Microsoft 365', category: 'productivity', color: 'blue' },
						{ name: 'Slack & Teams', category: 'communication', color: 'purple' },
						{ name: 'Salesforce', category: 'crm', color: 'cyan' },
						{ name: 'HubSpot', category: 'crm', color: 'orange' },
						{ name: 'Pipedrive', category: 'crm', color: 'green' },
						{ name: 'QuickBooks', category: 'finance', color: 'yellow' },
						{ name: 'Xero', category: 'finance', color: 'blue' },
						{ name: 'Sage', category: 'finance', color: 'green' },
						{ name: 'Shopify', category: 'ecommerce', color: 'green' },
						{ name: 'WooCommerce', category: 'ecommerce', color: 'purple' },
						{ name: 'Magento', category: 'ecommerce', color: 'orange' }
					] as integration}
						<div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
							<div class="flex items-center gap-3">
								<Icon name="check-circle" size={16} className="text-green-500" />
								<span class="text-gray-700 font-medium">{integration.name}</span>
							</div>
							<span class="text-xs px-2 py-1 bg-{integration.color}-100 text-{integration.color}-700 rounded-full">
								{integration.category}
							</span>
						</div>
					{/each}
				</div>
				
				<div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
					<div class="flex items-start gap-3">
						<Icon name="plus-circle" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
						<div>
							<h4 class="font-bold text-green-800 mb-1">¿No ves tu herramienta?</h4>
							<p class="text-green-700 text-sm leading-relaxed">
								Desarrollamos integraciones personalizadas para cualquier sistema 
								que tenga API o base de datos accesible. <strong>Sin límites técnicos.</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Technical Architecture Flow -->
		<div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
			<div class="text-center mb-8">
				<h3 class="text-3xl font-bold text-gray-900 mb-4">Arquitectura de Automatización Enterprise</h3>
				<p class="text-lg text-gray-700">Infraestructura robusta diseñada para escalabilidad y reliability</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="database" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">Data Sources</h4>
					<p class="text-sm text-gray-700">Conexión segura a bases de datos, APIs y sistemas legacy</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="settings" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">Processing Engine</h4>
					<p class="text-sm text-gray-700">Motor de workflows con logic branching y error handling</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="brain" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">AI Decision Layer</h4>
					<p class="text-sm text-gray-700">Inteligencia artificial para decisiones automáticas complejas</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="send" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">Output Actions</h4>
					<p class="text-sm text-gray-700">Ejecución de acciones en sistemas destino con monitoring</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services and Pricing Section -->
<section id="servicios" class="py-24 bg-gradient-to-br from-white to-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 px-4 py-2 rounded-full mb-6">
				<Icon name="package" size={20} className="text-green-500" />
				<span class="text-sm font-medium text-green-600">SERVICIOS AUTOMATIZACIÓN</span>
			</div>
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">Servicios de Automatización</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Desde <strong class="text-green-600">workflows básicos</strong> hasta automatización empresarial completa. 
				Elige el nivel que mejor se adapte a tus necesidades y escala cuando lo necesites.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
			{#each automationServices as service, index}
				<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 {index === 1 ? 'ring-2 ring-green-500 ring-opacity-50 transform scale-105' : ''}">
					{#if index === 1}
						<div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
							<div class="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
								MÁS POPULAR
							</div>
						</div>
					{/if}
					
					<div class="text-center mb-6">
						<div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<Icon name="{index === 0 ? 'play' : index === 1 ? 'settings' : 'crown'}" size={40} className="text-white" />
						</div>
						<h3 class="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
						<div class="text-3xl font-bold text-green-600 mb-2">{service.price}</div>
						<p class="text-gray-600">Implementación: {service.setupTime}</p>
					</div>
					
					<div class="space-y-3 mb-8">
						{#each service.features as feature}
							<div class="flex items-start gap-3">
								<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
								<span class="text-gray-700">{feature}</span>
							</div>
						{/each}
					</div>
					
					<a href="/contacto" class="block w-full text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
						Consultar Proyecto
					</a>
				</div>
			{/each}
		</div>
		
		<!-- Additional Services Grid -->
		<div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
			<div class="text-center mb-8">
				<h3 class="text-3xl font-bold text-gray-900 mb-4">Servicios Adicionales</h3>
				<p class="text-lg text-gray-700">Complementa tu automatización con servicios especializados</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
					<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="search" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">Auditoría Procesos</h4>
					<p class="text-gray-600 text-sm mb-4 leading-relaxed">Análisis completo de procesos existentes y oportunidades de automatización</p>
					<div class="text-2xl font-bold text-blue-600 mb-2">599€</div>
					<div class="text-xs text-gray-500">Una vez</div>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
					<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="users" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">Formación Equipo</h4>
					<p class="text-gray-600 text-sm mb-4 leading-relaxed">Training personalizado en automatización y gestión de workflows</p>
					<div class="text-2xl font-bold text-green-600 mb-2">199€</div>
					<div class="text-xs text-gray-500">Por persona</div>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="headphones" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">Soporte Técnico</h4>
					<p class="text-gray-600 text-sm mb-4 leading-relaxed">Mantenimiento y optimización continua de tus automatizaciones</p>
					<div class="text-2xl font-bold text-purple-600 mb-2">99€</div>
					<div class="text-xs text-gray-500">Por mes</div>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
					<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<Icon name="trending-up" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">Consultoría ROI</h4>
					<p class="text-gray-600 text-sm mb-4 leading-relaxed">Medición y optimización de resultados empresariales</p>
					<div class="text-2xl font-bold text-orange-600 mb-2">299€</div>
					<div class="text-xs text-gray-500">Por sesión</div>
				</div>
			</div>
		</div>
		
		<!-- ROI Calculator Teaser -->
		<div class="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
			<div class="max-w-3xl mx-auto">
				<h3 class="text-3xl font-bold mb-4">¿Quieres saber el ROI exacto para tu empresa?</h3>
				<p class="text-lg text-white/90 mb-6 leading-relaxed">
					Nuestro <strong>análisis gratuito</strong> te mostrará exactamente cuánto puedes ahorrar 
					automatizando tus procesos específicos.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contacto" class="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
						<Icon name="calculator" size={20} />
						CALCULAR MI ROI GRATIS
					</a>
					<a href="#casos-exito" class="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
						<Icon name="bar-chart" size={20} />
						VER CASOS DE ÉXITO
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Success Cases Section -->
<section id="casos-exito" class="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 px-4 py-2 rounded-full mb-6">
				<Icon name="trophy" size={20} className="text-green-500" />
				<span class="text-sm font-medium text-green-600">RESULTADOS REALES</span>
			</div>
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">Casos de Éxito</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				<strong class="text-green-600">Resultados reales</strong> obtenidos por nuestros clientes 
				tras implementar automatización empresarial con Formeta Labs.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="text-center mb-6">
					<div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<div class="text-3xl font-bold text-white">70%</div>
					</div>
					<div class="text-lg font-semibold text-gray-600">Reducción de Tiempo</div>
				</div>
				<h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Gestora Inmobiliaria</h3>
				<p class="text-gray-700 text-sm mb-6 leading-relaxed">
					Automatización completa del proceso de alta de inquilinos, desde solicitud inicial 
					hasta firma de contrato y entrega de llaves.
				</p>
				<div class="space-y-2">
					<div class="flex items-center gap-2 text-sm">
						<Icon name="check-circle" size={14} className="text-green-500" />
						<span class="text-gray-600">Validación automática de documentos</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<Icon name="check-circle" size={14} className="text-green-500" />
						<span class="text-gray-600">Generación automática de contratos</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<Icon name="check-circle" size={14} className="text-green-500" />
						<span class="text-gray-600">Notificaciones automáticas</span>
					</div>
				</div>
				<div class="mt-6 bg-green-50 border border-green-200 rounded-lg p-3 text-center">
					<div class="text-sm text-green-700 font-medium">Ahorro: 25 horas/semana</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="text-center mb-6">
					<div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<div class="text-2xl font-bold text-white">48K€</div>
					</div>
					<div class="text-lg font-semibold text-gray-600">Ahorro Anual</div>
				</div>
				<h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Empresa Logística</h3>
				<p class="text-gray-700 text-sm mb-6 leading-relaxed">
					Automatización de planificación de rutas optimizada y gestión completa de 
					documentación para envíos internacionales.
				</p>
				<div class="space-y-2">
					<div class="flex items-center gap-2 text-sm">
						<Icon name="check-circle" size={14} className="text-green-500" />
						<span class="text-gray-600">Optimización automática de rutas</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<Icon name="check-circle" size={14} className="text-green-500" />
						<span class="text-gray-600">Documentación aduanera automática</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<Icon name="check-circle" size={14} className="text-green-500" />
						<span class="text-gray-600">Tracking en tiempo real</span>
					</div>
				</div>
				<div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
					<div class="text-sm text-blue-700 font-medium">ROI: 340% en 12 meses</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
				<div class="text-center mb-6">
					<div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<div class="text-3xl font-bold text-white">99.2%</div>
					</div>
					<div class="text-lg font-semibold text-gray-600">Precisión</div>
				</div>
				<h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Bufete de Abogados</h3>
				<p class="text-gray-700 text-sm mb-6 leading-relaxed">
					Procesamiento automático de documentos legales y clasificación inteligente 
					por tipo de caso y prioridad.
				</p>
				<div class="space-y-2">
					<div class="flex items-center gap-2 text-sm">
						<Icon name="check-circle" size={14} className="text-green-500" />
						<span class="text-gray-600">OCR avanzado para documentos legales</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<Icon name="check-circle" size={14} className="text-green-500" />
						<span class="text-gray-600">Clasificación por IA</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<Icon name="check-circle" size={14} className="text-green-500" />
						<span class="text-gray-600">Alertas por deadlines</span>
					</div>
				</div>
				<div class="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
					<div class="text-sm text-purple-700 font-medium">Procesamiento: 500 docs/día</div>
				</div>
			</div>
		</div>
		
		<!-- Additional Success Metrics -->
		<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
			<div class="text-center mb-8">
				<h3 class="text-3xl font-bold text-gray-900 mb-4">Métricas de Éxito Promedio</h3>
				<p class="text-lg text-gray-700">Resultados típicos que obtienen nuestros clientes</p>
			</div>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div class="text-center">
					<div class="text-4xl font-bold text-green-600 mb-2">73%</div>
					<div class="text-sm text-gray-600 font-medium">Reducción tiempo manual</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-bold text-blue-600 mb-2">285%</div>
					<div class="text-sm text-gray-600 font-medium">ROI promedio anual</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-bold text-purple-600 mb-2">96%</div>
					<div class="text-sm text-gray-600 font-medium">Satisfacción cliente</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-bold text-orange-600 mb-2">4.2</div>
					<div class="text-sm text-gray-600 font-medium">Meses para ROI positivo</div>
				</div>
			</div>
		</div>
		
		<!-- Testimonial Quote -->
		<div class="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
			<div class="max-w-4xl mx-auto">
				<div class="text-6xl text-white/20 mb-4">"</div>
				<blockquote class="text-xl font-medium mb-6 leading-relaxed">
					La automatización implementada por Formeta Labs nos ha permitido 
					<strong>reducir errores en un 95%</strong> y liberar a nuestro equipo para 
					centrarse en tareas de mayor valor añadido.
				</blockquote>
				<div class="flex items-center justify-center gap-4">
					<div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
						<Icon name="user" size={24} className="text-white" />
					</div>
					<div class="text-left">
						<div class="font-bold">María González</div>
						<div class="text-white/80 text-sm">COO, TechCorp Solutions</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
	<div class="relative">
		<!-- Background Effects -->
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.3),transparent_50%)]"></div>
		
		<div class="relative container mx-auto px-6 text-center">
			<div class="flex items-center justify-center gap-3 mb-6">
				<span class="text-white/60 text-sm font-mono">///</span>
				<span class="text-white/80 text-sm font-mono font-medium tracking-wider uppercase">AUDITORÍA GRATUITA</span>
				<span class="text-white/60 text-sm font-mono">///</span>
			</div>
			
			<h2 class="text-5xl font-bold mb-6">
				<span class="text-white">Auditoría Gratuita</span>
				<span class="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">de Automatización</span>
			</h2>
			
			<p class="text-xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
				Analizamos tus procesos actuales y te mostramos <strong class="text-white">oportunidades específicas</strong> 
				de automatización con ROI estimado personalizado para tu empresa.
			</p>
			
			<!-- Benefits Grid -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
					<div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="clock" size={24} className="text-white" />
					</div>
					<h3 class="font-bold text-white mb-2">Análisis en 24h</h3>
					<p class="text-white/80 text-sm">Evaluación completa de tus procesos</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
					<div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="dollar-sign" size={24} className="text-white" />
					</div>
					<h3 class="font-bold text-white mb-2">ROI Personalizado</h3>
					<p class="text-white/80 text-sm">Cálculo específico para tu caso</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
					<div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="shield" size={24} className="text-white" />
					</div>
					<h3 class="font-bold text-white mb-2">Sin Compromiso</h3>
					<p class="text-white/80 text-sm">Información valiosa, decisión tuya</p>
				</div>
			</div>
			
			<div class="flex flex-col sm:flex-row gap-6 justify-center">
				<a href="/contacto" class="group bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 min-w-[250px]">
					SOLICITAR AUDITORÍA
					<Icon name="arrow-right" size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
				</a>
				<a href="#casos-exito" class="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-3 min-w-[250px]">
					VER CASOS ÉXITO
					<Icon name="trophy" size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Professional Floating Indicator for Automatización */
	.floating-indicator-automatizacion {
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

	/* Mobile responsive improvements */
	@media (max-width: 1024px) {
		.floating-indicator-automatizacion {
			top: 100px;
			right: 40px;
		}
	}

	@media (max-width: 768px) {
		.floating-indicator-automatizacion {
			display: none;
		}
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.floating-indicator-automatizacion {
			animation: none;
			transition: none;
		}
	}
</style>
