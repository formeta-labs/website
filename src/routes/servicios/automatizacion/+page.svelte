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
	
	let contactForm = {
		nombre: '',
		empresa: '',
		email: '',
		telefono: '',
		procesos: '',
		complejidad: '',
		sistemas: '',
		mensaje: ''
	};
	
	function handleSubmit() {
		debug.log('Enviando consulta Automatización:', contactForm);
	}
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
<section class="relative min-h-[70vh] bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 pattern-grid opacity-20"></div>
	
	<!-- Automation Indicators -->
	<div class="absolute top-20 left-20 bg-green-500/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono animate-pulse">
		⚡ WORKFLOWS
	</div>
	<div class="absolute top-32 right-32 bg-emerald-500/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		🔄 AUTOMATION
	</div>
	<div class="absolute bottom-32 left-32 bg-teal-500/30 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		📈 EFICIENCIA +70%
	</div>
	
	<div class="relative container mx-auto px-6 min-h-[70vh] flex items-center">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<div class="text-white/90">
					<Icon name="settings" size={24} />
				</div>
				<span class="text-white/80 text-lg font-mono">AUTOMATIZACIÓN EMPRESARIAL</span>
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
				AUTOMATIZA
				<span class="block text-green-200">TODO LO</span>
				<span class="block text-emerald-200">REPETITIVO</span>
			</h1>
			
			<p class="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
				<strong>Automatización inteligente de procesos empresariales</strong> que libera a tu equipo 
				de tareas repetitivas. Workflows avanzados, integraciones API y 
				<strong>ROI demostrado desde el primer mes</strong>.
			</p>
			
			<!-- Key Benefits -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="trending-up" size={20} color="white" />
						<span class="text-white font-bold">+70% Eficiencia</span>
					</div>
					<p class="text-white/80 text-sm">Procesos automatizados de alta precisión</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="clock" size={20} color="white" />
						<span class="text-white font-bold">Ahorro 40h/semana</span>
					</div>
					<p class="text-white/80 text-sm">Por empleado en tareas automatizadas</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="dollar-sign" size={20} color="white" />
						<span class="text-white font-bold">ROI 300%</span>
					</div>
					<p class="text-white/80 text-sm">Retorno promedio en 12 meses</p>
				</div>
			</div>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-6">
				<a href="#servicios" class="bg-white text-green-600 px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-200">
					VER SERVICIOS Y PRECIOS
				</a>
				<a href="#contact" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-200">
					AUDITORÍA GRATUITA
				</a>
			</div>
		</div>
	</div>
</section>

<!-- What We Automate Section -->
<section class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">¿Qué Procesos Automatizamos?</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Identificamos y automatizamos procesos repetitivos que consumen tiempo valioso de tu equipo.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-blue-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="mail" size={32} color="#2563eb" />
				</div>
				<h3 class="text-xl font-bold mb-3">Gestión de Emails</h3>
				<p class="text-gray-600 mb-4">
					Clasificación automática, respuestas predefinidas, 
					escalado inteligente y seguimiento de conversaciones.
				</p>
				<div class="text-sm text-blue-600 font-medium">
					Ahorro: 15h/semana
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-green-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="file-text" size={32} color="#16a34a" />
				</div>
				<h3 class="text-xl font-bold mb-3">Procesamiento Documentos</h3>
				<p class="text-gray-600 mb-4">
					Extracción de datos, validación automática, 
					clasificación inteligente y archivo digital.
				</p>
				<div class="text-sm text-green-600 font-medium">
					Precisión: 99.2%
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-purple-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="users" size={32} color="#7c3aed" />
				</div>
				<h3 class="text-xl font-bold mb-3">Gestión RRHH</h3>
				<p class="text-gray-600 mb-4">
					Onboarding automático, gestión vacaciones, 
					evaluaciones programadas y reportes de rendimiento.
				</p>
				<div class="text-sm text-purple-600 font-medium">
					Satisfacción: +40%
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-yellow-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="shopping-cart" size={32} color="#eab308" />
				</div>
				<h3 class="text-xl font-bold mb-3">Procesos Ventas</h3>
				<p class="text-gray-600 mb-4">
					Lead scoring automático, seguimiento prospectos, 
					propuestas generadas y pipeline management.
				</p>
				<div class="text-sm text-yellow-600 font-medium">
					Conversión: +25%
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-red-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="credit-card" size={32} color="#dc2626" />
				</div>
				<h3 class="text-xl font-bold mb-3">Facturación y Pagos</h3>
				<p class="text-gray-600 mb-4">
					Generación automática facturas, seguimiento pagos, 
					recordatorios y conciliación bancaria.
				</p>
				<div class="text-sm text-red-600 font-medium">
					Cash flow: +30%
				</div>
			</div>
			
			<div class="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
				<div class="bg-indigo-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="bar-chart" size={32} color="#4f46e5" />
				</div>
				<h3 class="text-xl font-bold mb-3">Reportes y Analytics</h3>
				<p class="text-gray-600 mb-4">
					KPIs automáticos, dashboards en tiempo real, 
					alertas inteligentes y reportes programados.
				</p>
				<div class="text-sm text-indigo-600 font-medium">
					Tiempo real: 24/7
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technology Stack Section -->
<section class="py-24 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">Stack Tecnológico Avanzado</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Utilizamos las mejores herramientas de automatización empresarial del mercado.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Automation Tools -->
			<div>
				<h3 class="text-2xl font-bold mb-6">Herramientas de Automatización</h3>
				<div class="space-y-4">
					<div class="flex items-center gap-4 bg-white p-4 border border-gray-200">
						<div class="bg-orange-100 w-12 h-12 flex items-center justify-center">
							<span class="text-orange-600 font-bold text-xl">n8n</span>
						</div>
						<div>
							<h4 class="font-bold">n8n Workflow Automation</h4>
							<p class="text-gray-600 text-sm">Workflows visuales avanzados y auto-hosting</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-white p-4 border border-gray-200">
						<div class="bg-blue-100 w-12 h-12 flex items-center justify-center">
							<span class="text-blue-600 font-bold text-xl">⚡</span>
						</div>
						<div>
							<h4 class="font-bold">Zapier Premium</h4>
							<p class="text-gray-600 text-sm">Integraciones SaaS y triggers avanzados</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-white p-4 border border-gray-200">
						<div class="bg-green-100 w-12 h-12 flex items-center justify-center">
							<Icon name="code" size={24} color="#16a34a" />
						</div>
						<div>
							<h4 class="font-bold">APIs Personalizadas</h4>
							<p class="text-gray-600 text-sm">Desarrollo custom para casos específicos</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-white p-4 border border-gray-200">
						<div class="bg-purple-100 w-12 h-12 flex items-center justify-center">
							<Icon name="brain" size={24} color="#7c3aed" />
						</div>
						<div>
							<h4 class="font-bold">IA Integrada</h4>
							<p class="text-gray-600 text-sm">Decisiones inteligentes y aprendizaje automático</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Integration Capabilities -->
			<div>
				<h3 class="text-2xl font-bold mb-6">Integraciones Disponibles</h3>
				<div class="grid grid-cols-2 gap-3">
					{#each [
						'Google Workspace', 'Microsoft 365', 'Slack & Teams',
						'Salesforce', 'HubSpot', 'Pipedrive',
						'QuickBooks', 'Xero', 'Sage',
						'Shopify', 'WooCommerce', 'Magento',
						'Trello', 'Asana', 'Monday.com',
						'PostgreSQL', 'MySQL', 'MongoDB',
						'AWS', 'Azure', 'Google Cloud',
						'WhatsApp', 'Telegram', 'SMS'
					] as integration}
						<div class="flex items-center gap-2 bg-white p-2 border border-gray-200 text-sm">
							<Icon name="check-circle" size={14} color="#16a34a" />
							<span class="text-gray-700">{integration}</span>
						</div>
					{/each}
				</div>
				
				<div class="mt-6 bg-green-50 border border-green-200 p-4">
					<div class="flex items-center gap-3">
						<Icon name="plus-circle" size={20} color="#16a34a" />
						<div>
							<h4 class="font-bold text-green-800">¿No ves tu herramienta?</h4>
							<p class="text-green-700 text-sm">
								Desarrollamos integraciones personalizadas para cualquier sistema 
								que tenga API o base de datos accesible.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services and Pricing Section -->
<section id="servicios" class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">Servicios de Automatización</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Desde workflows básicos hasta automatización empresarial completa. Elige el nivel que mejor se adapte a tus necesidades.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			{#each automationServices as service}
				<div class="bg-white border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
					<div class="text-center mb-6">
						<h3 class="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
						<div class="text-3xl font-bold text-green-600 mb-2">{service.price}</div>
						<p class="text-gray-600">Tiempo: {service.setupTime}</p>
					</div>
					
					<div class="space-y-3 mb-8">
						{#each service.features as feature}
							<div class="flex items-center gap-3">
								<Icon name="check-circle" size={16} color="#16a34a" />
								<span class="text-gray-700">{feature}</span>
							</div>
						{/each}
					</div>
					
					<a href="#contact" class="block w-full text-center bg-green-600 text-white py-3 px-6 font-bold hover:bg-green-700 transition-colors duration-200">
						Consultar Proyecto
					</a>
				</div>
			{/each}
		</div>
		
		<!-- Additional Services -->
		<div class="mt-16 bg-gray-50 p-8 border border-gray-200">
			<h3 class="text-2xl font-bold text-center mb-8">Servicios Adicionales</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="text-center">
					<div class="bg-blue-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="search" size={24} color="#2563eb" />
					</div>
					<h4 class="font-bold mb-2">Auditoría Procesos</h4>
					<p class="text-gray-600 text-sm">Análisis completo de procesos existentes</p>
					<div class="text-blue-600 font-bold mt-2">599€</div>
				</div>
				<div class="text-center">
					<div class="bg-green-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="users" size={24} color="#16a34a" />
					</div>
					<h4 class="font-bold mb-2">Formación Equipo</h4>
					<p class="text-gray-600 text-sm">Training personalizado en automatización</p>
					<div class="text-green-600 font-bold mt-2">199€/persona</div>
				</div>
				<div class="text-center">
					<div class="bg-purple-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="headphones" size={24} color="#7c3aed" />
					</div>
					<h4 class="font-bold mb-2">Soporte Técnico</h4>
					<p class="text-gray-600 text-sm">Mantenimiento y optimización continua</p>
					<div class="text-purple-600 font-bold mt-2">99€/mes</div>
				</div>
				<div class="text-center">
					<div class="bg-yellow-100 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
						<Icon name="trending-up" size={24} color="#eab308" />
					</div>
					<h4 class="font-bold mb-2">Consultoría ROI</h4>
					<p class="text-gray-600 text-sm">Medición y optimización de resultados</p>
					<div class="text-yellow-600 font-bold mt-2">299€/sesión</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Success Cases Section -->
<section class="py-24 bg-green-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">Casos de Éxito</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Resultados reales obtenidos por nuestros clientes tras implementar automatización.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="bg-white p-6 border border-green-200">
				<div class="text-center mb-4">
					<div class="text-3xl font-bold text-green-600">70%</div>
					<div class="text-gray-600">Reducción Tiempo</div>
				</div>
				<h3 class="text-lg font-bold mb-2">Gestora Inmobiliaria</h3>
				<p class="text-gray-600 text-sm">
					Automatización completa del proceso de alta de inquilinos, 
					desde solicitud hasta firma de contrato.
				</p>
			</div>
			
			<div class="bg-white p-6 border border-green-200">
				<div class="text-center mb-4">
					<div class="text-3xl font-bold text-green-600">€48K</div>
					<div class="text-gray-600">Ahorro Anual</div>
				</div>
				<h3 class="text-lg font-bold mb-2">Empresa Logística</h3>
				<p class="text-gray-600 text-sm">
					Automatización de planificación de rutas y gestión de 
					documentación de envíos internacionales.
				</p>
			</div>
			
			<div class="bg-white p-6 border border-green-200">
				<div class="text-center mb-4">
					<div class="text-3xl font-bold text-green-600">99.2%</div>
					<div class="text-gray-600">Precisión</div>
				</div>
				<h3 class="text-lg font-bold mb-2">Bufete de Abogados</h3>
				<p class="text-gray-600 text-sm">
					Procesamiento automático de documentos legales y 
					clasificación inteligente por tipo de caso.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section id="contact" class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Auditoría Gratuita de Automatización</h2>
				<p class="text-xl text-gray-600">
					Analizamos tus procesos actuales y te mostramos <strong>oportunidades específicas</strong> 
					de automatización con ROI estimado.
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
							class="w-full px-4 py-3 border border-gray-300 focus:border-green-600 focus:outline-none"
						>
					</div>
					<div>
						<label for="empresa" class="block text-gray-700 font-medium mb-2">Empresa *</label>
						<input 
							id="empresa"
							type="text" 
							bind:value={contactForm.empresa}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-green-600 focus:outline-none"
						>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="email" class="block text-gray-700 font-medium mb-2">Email Corporativo *</label>
						<input 
							id="email"
							type="email" 
							bind:value={contactForm.email}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-green-600 focus:outline-none"
						>
					</div>
					<div>
						<label for="telefono" class="block text-gray-700 font-medium mb-2">Teléfono</label>
						<input 
							id="telefono"
							type="tel" 
							bind:value={contactForm.telefono}
							class="w-full px-4 py-3 border border-gray-300 focus:border-green-600 focus:outline-none"
						>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="procesos" class="block text-gray-700 font-medium mb-2">Procesos Principales a Automatizar</label>
						<select id="procesos" bind:value={contactForm.procesos} class="w-full px-4 py-3 border border-gray-300 focus:border-green-600 focus:outline-none">
							<option value="">Seleccionar...</option>
							<option value="emails">Gestión de emails</option>
							<option value="documentos">Procesamiento documentos</option>
							<option value="rrhh">Procesos RRHH</option>
							<option value="ventas">Procesos de ventas</option>
							<option value="facturacion">Facturación y pagos</option>
							<option value="reportes">Reportes y analytics</option>
							<option value="multiple">Múltiples procesos</option>
						</select>
					</div>
					<div>
						<label for="complejidad" class="block text-gray-700 font-medium mb-2">Complejidad Estimada</label>
						<select id="complejidad" bind:value={contactForm.complejidad} class="w-full px-4 py-3 border border-gray-300 focus:border-green-600 focus:outline-none">
							<option value="">Seleccionar...</option>
							<option value="basica">Básica - Workflows simples</option>
							<option value="media">Media - Múltiples integraciones</option>
							<option value="avanzada">Avanzada - Lógica compleja</option>
							<option value="enterprise">Enterprise - Todo integrado</option>
						</select>
					</div>
				</div>
				
				<div>
					<label for="sistemas" class="block text-gray-700 font-medium mb-2">Sistemas/Herramientas Actuales</label>
					<input 
						id="sistemas"
						type="text" 
						bind:value={contactForm.sistemas}
						placeholder="ej: Salesforce, Google Workspace, QuickBooks, Slack..."
						class="w-full px-4 py-3 border border-gray-300 focus:border-green-600 focus:outline-none"
					>
				</div>
				
				<div>
					<label for="mensaje" class="block text-gray-700 font-medium mb-2">Describe los Procesos Actuales</label>
					<textarea 
						id="mensaje"
						bind:value={contactForm.mensaje}
						rows="4"
						placeholder="Describe paso a paso los procesos que quieres automatizar, tiempo que dedicas actualmente, frustraciones específicas..."
						class="w-full px-4 py-3 border border-gray-300 focus:border-green-600 focus:outline-none"
					></textarea>
				</div>
				
				<div class="bg-green-50 border border-green-200 p-4">
					<div class="flex items-start gap-3">
						<Icon name="gift" size={20} color="#16a34a" />
						<div>
							<h4 class="font-bold text-green-800 mb-1">Auditoría Gratuita Incluye</h4>
							<ul class="text-green-700 text-sm space-y-1">
								<li>• Análisis detallado de procesos actuales</li>
								<li>• Identificación de oportunidades de automatización</li>
								<li>• Estimación de ROI y tiempo de implementación</li>
								<li>• Propuesta técnica personalizada</li>
							</ul>
						</div>
					</div>
				</div>
				
				<button 
					type="submit"
					class="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
				>
					SOLICITAR AUDITORÍA GRATUITA
				</button>
				
				<p class="text-center text-gray-500 text-sm">
					Auditoría sin compromiso. Resultados entregados en 48-72 horas.
				</p>
			</form>
		</div>
	</div>
</section>

<style>
	.pattern-grid {
		background-image: 
			linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
