<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { debug } from '$lib/utils/debug';
	import { onMount } from 'svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SEO_PAGES, generateServiceSchema } from '$lib/utils/seo';
	
	let selectedService = 'compliance'; // 'compliance' o 'crm'
	let selectedPlan: 'starter' | 'professional' | 'enterprise' = 'professional';
	let monthlyInvoices = 100;
	let crmUsers = 5;
	let currentPrice = 0;
	let potentialFines = 1000;
	let adminHours = 5;
	let currentClients = 10;
	let avgSalePerClient = 100;
	let setupCost = 0;
	
	const compliancePlans = {
		starter: {
			name: 'VeriFactu Starter',
			price: 299,
			invoices: 50,
			features: ['Integración API AEAT', 'Validación automática', 'Soporte básico', 'Dashboard básico']
		},
		professional: {
			name: 'VeriFactu Professional',
			price: 599,
			invoices: 200,
			features: ['Todo lo anterior', 'Backup automático', 'Auditoría completa', 'Soporte prioritario', 'Multi-empresa']
		},
		enterprise: {
			name: 'VeriFactu Enterprise',
			price: 1299,
			invoices: 1000,
			features: ['Todo lo anterior', 'SLA 99.9%', 'Soporte 24/7', 'Integración personalizada', 'Consultoría técnica']
		}
	};

	const crmPlans = {
		starter: {
			name: 'VeriCRM Starter',
			price: 399,
			users: 5,
			features: ['Gestión contactos', 'Pipeline básico', 'Facturación VeriFactu', 'Soporte email']
		},
		professional: {
			name: 'VeriCRM Professional',
			price: 899,
			users: 25,
			features: ['Todo anterior', 'Automatización workflows', 'Reportes avanzados', 'Integraciones API', 'Soporte prioritario']
		},
		enterprise: {
			name: 'VeriCRM Enterprise',
			price: 1999,
			users: 999,
			features: ['Todo anterior', 'Multi-empresa', 'IA predictiva', 'Compliance RGPD', 'SLA 99.9%', 'Soporte 24/7']
		}
	};
	
	$: {
		if (selectedService === 'compliance') {
			if (monthlyInvoices <= 50) selectedPlan = 'starter';
			else if (monthlyInvoices <= 200) selectedPlan = 'professional';
			else selectedPlan = 'enterprise';
			currentPrice = compliancePlans[selectedPlan].price;
		} else {
			if (crmUsers <= 5) selectedPlan = 'starter';
			else if (crmUsers <= 25) selectedPlan = 'professional';
			else selectedPlan = 'enterprise';
			currentPrice = crmPlans[selectedPlan].price;
		}
	}
	
	function calculateROI() {
		if (selectedService === 'compliance') {
			const multas = monthlyInvoices * 0.05 * 150; // 5% error rate * 150€ multa promedio
			const tiempoAhorrado = monthlyInvoices * 0.5 * 25; // 30 min por factura * 25€/hora
			const totalAhorro = (multas + tiempoAhorrado) * 12;
			const roi = ((totalAhorro - currentPrice * 12) / (currentPrice * 12)) * 100;
			return { multas, tiempoAhorrado, totalAhorro, roi };
		} else {
			const eficienciaVentas = crmUsers * 2000 * 12; // €2000 más ventas por usuario/mes
			const ahorroAdmin = crmUsers * 5 * 25 * 12; // 5h menos admin por usuario * 25€/hora
			const totalAhorro = eficienciaVentas + ahorroAdmin;
			const roi = ((totalAhorro - currentPrice * 12) / (currentPrice * 12)) * 100;
			return { eficienciaVentas, ahorroAdmin, totalAhorro, roi };
		}
	}
	
</script>

<!-- SEO optimizado para VeriFactu -->
<SEO 
	title={SEO_PAGES.verifactu.title}
	description={SEO_PAGES.verifactu.description}
	keywords={SEO_PAGES.verifactu.keywords}
	ogType={SEO_PAGES.verifactu.ogType}
	ogImage="/images/og/verifactu-compliance.jpg"
	canonical="https://formetalabs.com/servicios/verifactu-compliance"
	schemas={[generateServiceSchema({
		name: "Servicios VeriFactu Compliance",
		description: "Implementación y mantenimiento VeriFactu para cumplimiento normativo AEAT",
		url: "https://formetalabs.com/servicios/verifactu-compliance",
		price: "299",
		category: "Cumplimiento Fiscal"
	})]}
/>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
	<!-- Professional geometric patterns -->
	<div class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"></div>
	<div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_70%)]"></div>
	<div class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(74,144,226,0.08),transparent_70%)]"></div>
	
	<!-- Floating Professional Indicator -->
	<div class="floating-indicator-verifactu">
		<div class="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
			<Icon name="shield" size={24} className="text-red-400" />
			<span class="text-white font-mono text-sm font-medium">VERIFACTU + CRM ENTERPRISE</span>
		</div>
	</div>
	
	<!-- ASCII Decorative Shapes -->
	<div class="absolute top-20 left-12 text-red-400/30 text-6xl font-mono select-none">▦</div>
	<div class="absolute top-32 right-16 text-blue-400/25 text-4xl font-mono select-none">◆</div>
	<div class="absolute bottom-24 left-20 text-red-400/20 text-5xl font-mono select-none">●</div>
	<div class="absolute bottom-12 right-12 text-blue-400/30 text-3xl font-mono select-none">▲</div>
	<div class="absolute top-1/2 left-8 text-red-400/15 text-2xl font-mono select-none transform -translate-y-1/2">▦▦</div>
	<div class="absolute top-1/3 right-8 text-blue-400/20 text-2xl font-mono select-none">◆◆</div>
	
	<div class="relative container mx-auto px-6 text-center text-white z-10">
		<!-- Hero Section Header -->
		<div class="flex items-center justify-center gap-3 mb-8">
			<span class="text-red-400/60 text-sm font-mono">///</span>
			<span class="text-white/80 text-sm font-mono font-medium tracking-wider uppercase">COMPLIANCE FISCAL OBLIGATORIO</span>
			<span class="text-red-400/60 text-sm font-mono">///</span>
		</div>
		
		<!-- Main Headlines -->
		<h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
			<span class="text-white">VeriFactu</span>
			<span class="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Compliance</span>
		</h1>
		
		<div class="mb-8">
			<p class="text-xl text-white/90 font-medium mb-4 max-w-4xl mx-auto leading-relaxed">
				<strong>Sistema VeriFactu + CRM integrado</strong> para compliance AEAT automático 
				<strong class="text-red-400">obligatorio desde 2025</strong>
			</p>
			<p class="text-lg text-white/75 max-w-3xl mx-auto">
				Facturación AEAT · Gestión Empresarial · Compliance Total · Implementación 48h
			</p>
		</div>
		
		<!-- Enterprise Metrics Grid -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-red-400 mb-2">48h</div>
				<div class="text-sm text-white/80 font-medium">Implementación</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-blue-400 mb-2">99.95%</div>
				<div class="text-sm text-white/80 font-medium">Precisión AEAT</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-green-400 mb-2">100%</div>
				<div class="text-sm text-white/80 font-medium">Compliance</div>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
				<div class="text-2xl font-bold text-orange-400 mb-2">24/7</div>
				<div class="text-sm text-white/80 font-medium">Soporte Fiscal</div>
			</div>
		</div>
		
		<!-- Hero Feature Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="shield" size={28} className="text-red-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Implementación 48h</h3>
				<p class="text-sm text-white/70">Puesta en marcha completa en menos de 48 horas</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="check-circle" size={28} className="text-blue-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Precisión 99.95%</h3>
				<p class="text-sm text-white/70">Validación automática sin errores AEAT</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
				<div class="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
					<Icon name="headphones" size={28} className="text-green-400" />
				</div>
				<h3 class="text-lg font-bold mb-2 text-white">Soporte 24/7</h3>
				<p class="text-sm text-white/70">Especialistas VeriFactu disponibles</p>
			</div>
		</div>
		
		<!-- Enterprise Badges -->
		<div class="flex flex-wrap justify-center gap-4 mb-10">
			<div class="bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-red-400 text-sm font-bold">🚨 OBLIGATORIO 2025</span>
			</div>
			<div class="bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-blue-400 text-sm font-bold">✓ COMPLIANCE AEAT</span>
			</div>
			<div class="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
				<span class="text-green-400 text-sm font-bold">✓ CRM INTEGRADO</span>
			</div>
		</div>
		
		<!-- Executive CTAs -->
		<div class="flex flex-col sm:flex-row gap-6 justify-center">
			<a href="#calculadora" class="group bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 flex items-center justify-center gap-3 min-w-[250px]">
				CALCULAR COSTE Y ROI
				<Icon name="arrow-down" size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
			</a>
			<a href="/contacto" class="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-3 min-w-[250px]">
				CONSULTA URGENTE
				<Icon name="arrow-right" size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
			</a>
		</div>
	</div>
</section>

<!-- ¿Por qué VeriFactu es Obligatorio? -->
<section class="py-24 bg-gradient-to-br from-white to-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 px-4 py-2 rounded-full mb-6">
				<Icon name="alert-triangle" size={20} className="text-red-500" />
				<span class="text-sm font-medium text-red-600">NORMATIVA OBLIGATORIA 2025</span>
			</div>
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">¿Por qué VeriFactu es Obligatorio?</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				El <strong class="text-red-600">Real Decreto 1007/2023</strong> establece la obligatoriedad del sistema VeriFactu para 
				<strong class="text-gray-900">todas las empresas españolas</strong> a partir del 1 de enero de 2025.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
			<div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-20 h-20 bg-gradient-to-br from-red-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="alert-triangle" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Obligatorio 2025</h3>
				<p class="text-gray-700 leading-relaxed">
					Todas las empresas españolas deben implementar VeriFactu antes del 
					<strong class="text-red-600">1 de enero de 2025</strong>
				</p>
				<div class="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
					<div class="text-sm font-bold text-red-700">⚠️ Sin excepciones</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="euro-sign" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Multas Severas</h3>
				<p class="text-gray-700 leading-relaxed">
					Sanciones de <strong class="text-orange-600">hasta 150.000€</strong> por 
					incumplimiento normativo del sistema VeriFactu
				</p>
				<div class="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-3">
					<div class="text-sm font-bold text-orange-700">💰 150€ por factura incorrecta</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="shield" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Control Fiscal</h3>
				<p class="text-gray-700 leading-relaxed">
					Mayor transparencia y control en tiempo real de la 
					<strong class="text-blue-600">facturación empresarial</strong>
				</p>
				<div class="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
					<div class="text-sm font-bold text-blue-700">📊 Auditoría automática AEAT</div>
				</div>
			</div>
			
			<div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="check-circle" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Automatización</h3>
				<p class="text-gray-700 leading-relaxed">
					Validación y envío automático de todas las facturas con 
					<strong class="text-green-600">hash criptográfico</strong>
				</p>
				<div class="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
					<div class="text-sm font-bold text-green-700">⚡ Validación en tiempo real</div>
				</div>
			</div>
		</div>
		
		<!-- Regulatory Timeline -->
		<div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
			<div class="text-center mb-8">
				<h3 class="text-3xl font-bold text-gray-900 mb-4">Timeline Normativo Crítico</h3>
				<p class="text-lg text-gray-700">Fechas clave que tu empresa no puede ignorar</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
							<Icon name="calendar" size={24} className="text-white" />
						</div>
						<div>
							<h4 class="font-bold text-gray-900">1 Enero 2025</h4>
							<p class="text-sm text-red-600">ENTRADA EN VIGOR</p>
						</div>
					</div>
					<p class="text-gray-700 text-sm">
						Implementación obligatoria de VeriFactu para todas las empresas españolas
					</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
							<Icon name="clock" size={24} className="text-white" />
						</div>
						<div>
							<h4 class="font-bold text-gray-900">Tiempo Real</h4>
							<p class="text-sm text-orange-600">ENVÍO INMEDIATO</p>
						</div>
					</div>
					<p class="text-gray-700 text-sm">
						Todas las facturas deben enviarse a AEAT en un máximo de 4 días
					</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
							<Icon name="shield" size={24} className="text-white" />
						</div>
						<div>
							<h4 class="font-bold text-gray-900">Sin Excepciones</h4>
							<p class="text-sm text-blue-600">TODAS LAS EMPRESAS</p>
						</div>
					</div>
					<p class="text-gray-700 text-sm">
						Aplica a empresas de cualquier tamaño, sector o volumen de facturación
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Integración Técnica Completa -->
<section class="py-24 bg-gradient-to-br from-gray-50 to-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 px-4 py-2 rounded-full mb-6">
				<Icon name="cpu" size={20} className="text-blue-500" />
				<span class="text-sm font-medium text-blue-600">ARQUITECTURA ENTERPRISE</span>
			</div>
			<h2 class="text-5xl font-extrabold text-gray-900 mb-6">Integración Técnica Completa</h2>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Nuestra solución VeriFactu se integra perfectamente con tu <strong class="text-blue-600">sistema actual</strong> 
				sin interrupciones operativas, garantizando compliance total.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
			<!-- Stack Tecnológico -->
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="layers" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Stack Tecnológico</h3>
				<div class="space-y-4">
					<div class="flex items-center gap-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
						<Icon name="server" size={24} className="text-blue-600" />
						<div>
							<h4 class="font-bold text-gray-900">Node.js + Express</h4>
							<p class="text-gray-600 text-sm">API robusta para integración AEAT</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-green-50 p-4 rounded-lg border border-green-200">
						<Icon name="database" size={24} className="text-green-600" />
						<div>
							<h4 class="font-bold text-gray-900">PostgreSQL + Backup</h4>
							<p class="text-gray-600 text-sm">Almacenamiento seguro y respaldos automáticos</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-red-50 p-4 rounded-lg border border-red-200">
						<Icon name="lock" size={24} className="text-red-600" />
						<div>
							<h4 class="font-bold text-gray-900">Crypto + SSL/TLS</h4>
							<p class="text-gray-600 text-sm">Hash criptográfico y comunicación segura</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-purple-50 p-4 rounded-lg border border-purple-200">
						<Icon name="monitor" size={24} className="text-purple-600" />
						<div>
							<h4 class="font-bold text-gray-900">Dashboard Real-time</h4>
							<p class="text-gray-600 text-sm">Monitoreo y auditoría en tiempo real</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Proceso de Integración -->
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="settings" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Proceso de Integración</h3>
				<div class="space-y-4">
					<div class="flex items-start gap-4">
						<div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<span class="text-white font-bold text-sm">1</span>
						</div>
						<div>
							<h4 class="font-bold text-gray-900 mb-1">Análisis Sistema Actual</h4>
							<p class="text-gray-600 text-sm">Evaluación de tu ERP o sistema de facturación existente</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<span class="text-white font-bold text-sm">2</span>
						</div>
						<div>
							<h4 class="font-bold text-gray-900 mb-1">Configuración API</h4>
							<p class="text-gray-600 text-sm">Implementación de conectores específicos para tu sistema</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<span class="text-white font-bold text-sm">3</span>
						</div>
						<div>
							<h4 class="font-bold text-gray-900 mb-1">Testing & Validación</h4>
							<p class="text-gray-600 text-sm">Pruebas exhaustivas en entorno AEAT de pruebas</p>
						</div>
					</div>
					
					<div class="flex items-start gap-4">
						<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
							<span class="text-white font-bold text-sm">4</span>
						</div>
						<div>
							<h4 class="font-bold text-gray-900 mb-1">Go-Live</h4>
							<p class="text-gray-600 text-sm">Activación en producción con soporte 24/7</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Características Avanzadas -->
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
				<div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
					<Icon name="zap" size={40} className="text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Características Avanzadas</h3>
				<div class="space-y-3">
					{#each [
						'Integración directa API AEAT VeriFactu',
						'Validación automática de facturas',
						'Generación de hash criptográfico seguro',
						'Envío automático en tiempo real',
						'Dashboard de compliance y auditoría',
						'Reportes de cumplimiento normativo',
						'Backup automático y recuperación',
						'Soporte técnico especializado 24/7',
						'Multi-empresa y multi-usuario',
						'Logs completos de auditoría',
						'Alertas automáticas de errores',
						'Integración con ERPs existentes'
					] as feature}
						<div class="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
							<Icon name="check-circle" size={16} className="text-green-500 flex-shrink-0" />
							<span class="text-gray-700 text-sm">{feature}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
		
		<!-- Arquitectura Técnica Detallada -->
		<div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
			<div class="text-center mb-8">
				<h3 class="text-3xl font-bold text-gray-900 mb-4">Arquitectura Técnica VeriFactu</h3>
				<p class="text-lg text-gray-700">Infraestructura enterprise diseñada para compliance crítico</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="upload" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">1. Captura</h4>
					<p class="text-sm text-gray-700">Extracción automática de datos de facturación desde tu ERP</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="check-circle" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">2. Validación</h4>
					<p class="text-sm text-gray-700">Verificación automática de formatos y requisitos AEAT</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="lock" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">3. Cifrado</h4>
					<p class="text-sm text-gray-700">Generación de hash criptográfico y firma digital</p>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-lg text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="send" size={32} className="text-white" />
					</div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">4. Envío AEAT</h4>
					<p class="text-sm text-gray-700">Transmisión segura a los sistemas de Hacienda</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Dynamic Calculator Section -->
<section id="calculadora" class="py-24 bg-gradient-to-br from-red-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
	<!-- Background Effects -->
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.3),transparent_50%)]"></div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
				<Icon name="calculator" size={20} className="text-white" />
				<span class="text-sm font-medium text-white/90">CALCULADORA ROI VERIFACTU</span>
			</div>
			<h2 class="text-5xl font-extrabold mb-6">Calculadora VeriFactu + CRM</h2>
			<p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
				Calcula el coste real de implementación y el <strong class="text-white">ROI inmediato</strong> 
				en ahorro de multas y optimización operativa.
			</p>
		</div>
		
		<!-- Service Toggle -->
		<div class="flex justify-center mb-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
				<div class="flex">
					<button 
						class="px-8 py-3 rounded-full transition-all duration-300 {selectedService === 'compliance' ? 'bg-white text-red-600 font-bold' : 'text-white/80 hover:text-white'}"
						on:click={() => selectedService = 'compliance'}
					>
						VeriFactu Compliance
					</button>
					<button 
						class="px-8 py-3 rounded-full transition-all duration-300 {selectedService === 'crm' ? 'bg-white text-blue-600 font-bold' : 'text-white/80 hover:text-white'}"
						on:click={() => selectedService = 'crm'}
					>
						CRM Integrado
					</button>
				</div>
			</div>
		</div>
		
		<div class="max-w-7xl mx-auto">
			<!-- Main Calculator Card -->
			<div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
				<div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
					
					<!-- Configuration Panel -->
					<div class="xl:col-span-2 space-y-8">
						<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
							<h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
								<Icon name="settings" size={24} className="text-white/80" />
								Configuración Empresarial
							</h3>
							
							{#if selectedService === 'compliance'}
								<!-- VeriFactu Configuration -->
								<div class="space-y-6">
									<!-- Document Volume Slider -->
									<div>
										<div class="flex justify-between items-center mb-4">
											<label for="monthly-invoices" class="text-lg font-semibold text-white">Facturas Mensuales</label>
											<div class="bg-red-500/20 border border-red-400/30 px-4 py-2 rounded-lg">
												<span class="font-bold text-red-200">{monthlyInvoices} facturas/mes</span>
											</div>
										</div>
										<div class="relative">
											<input 
												id="monthly-invoices"
												type="range" 
												min="10" 
												max="1000" 
												bind:value={monthlyInvoices}
												class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
											>
											<div class="flex justify-between text-sm text-white/70 mt-2">
												<span>10</span>
												<span>250</span>
												<span>500</span>
												<span>1000+</span>
											</div>
										</div>
										<div class="mt-3 text-sm text-white/80">
											<Icon name="info" size={16} className="inline mr-1" />
											Facturas emitidas mensualmente por tu empresa
										</div>
									</div>
									
									<!-- Potential Fines -->
									<div>
										<div class="flex justify-between items-center mb-4">
											<label for="potential-fines" class="text-lg font-semibold text-white">Riesgo de Multas Anuales</label>
											<div class="bg-orange-500/20 border border-orange-400/30 px-4 py-2 rounded-lg">
												<span class="font-bold text-orange-200">{potentialFines.toLocaleString()}€/año</span>
											</div>
										</div>
										<div class="relative">
											<input 
												id="potential-fines"
												type="range" 
												min="1000" 
												max="50000" 
												step="1000"
												bind:value={potentialFines}
												class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
											>
											<div class="flex justify-between text-sm text-white/70 mt-2">
												<span>1K€</span>
												<span>15K€</span>
												<span>30K€</span>
												<span>50K€+</span>
											</div>
										</div>
										<div class="mt-3 text-sm text-white/80">
											<Icon name="alert-triangle" size={16} className="inline mr-1" />
											Multas potenciales por incumplimiento VeriFactu
										</div>
									</div>
									
									<!-- Admin Hours -->
									<div>
										<div class="flex justify-between items-center mb-4">
											<label for="admin-hours" class="text-lg font-semibold text-white">Horas Administrativas/Mes</label>
											<div class="bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-lg">
												<span class="font-bold text-blue-200">{adminHours}h/mes</span>
											</div>
										</div>
										<div class="relative">
											<input 
												id="admin-hours"
												type="range" 
												min="5" 
												max="100" 
												bind:value={adminHours}
												class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
											>
											<div class="flex justify-between text-sm text-white/70 mt-2">
												<span>5h</span>
												<span>25h</span>
												<span>50h</span>
												<span>100h+</span>
											</div>
										</div>
										<div class="mt-3 text-sm text-white/80">
											<Icon name="clock" size={16} className="inline mr-1" />
											Tiempo dedicado actualmente a gestión fiscal manual
										</div>
									</div>
								</div>
							{:else}
								<!-- CRM Configuration -->
								<div class="space-y-6">
									<!-- CRM Users -->
									<div>
										<div class="flex justify-between items-center mb-4">
											<label for="crm-users" class="text-lg font-semibold text-white">Usuarios del CRM</label>
											<div class="bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-lg">
												<span class="font-bold text-blue-200">{crmUsers} usuarios</span>
											</div>
										</div>
										<div class="relative">
											<input 
												id="crm-users"
												type="range" 
												min="1" 
												max="100" 
												bind:value={crmUsers}
												class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
											>
											<div class="flex justify-between text-sm text-white/70 mt-2">
												<span>1</span>
												<span>25</span>
												<span>50</span>
												<span>100+</span>
											</div>
										</div>
									</div>
									
									<!-- Current Clients -->
									<div>
										<div class="flex justify-between items-center mb-4">
											<label for="current-clients" class="text-lg font-semibold text-white">Clientes Actuales</label>
											<div class="bg-green-500/20 border border-green-400/30 px-4 py-2 rounded-lg">
												<span class="font-bold text-green-200">{currentClients} clientes</span>
											</div>
										</div>
										<div class="relative">
											<input 
												id="current-clients"
												type="range" 
												min="10" 
												max="5000" 
												step="10"
												bind:value={currentClients}
												class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
											>
										</div>
									</div>
									
									<!-- Average Sale -->
									<div>
										<div class="flex justify-between items-center mb-4">
											<label for="avg-sale-per-client" class="text-lg font-semibold text-white">Ventas Promedio/Cliente/Mes</label>
											<div class="bg-purple-500/20 border border-purple-400/30 px-4 py-2 rounded-lg">
												<span class="font-bold text-purple-200">{avgSalePerClient}€</span>
											</div>
										</div>
										<div class="relative">
											<input 
												id="avg-sale-per-client"
												type="range" 
												min="100" 
												max="10000" 
												step="100"
												bind:value={avgSalePerClient}
												class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
											>
										</div>
									</div>
								</div>
							{/if}
						</div>
					</div>
					
					<!-- Results Panel -->
					<div class="space-y-6">
						<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
							<h3 class="text-xl font-bold mb-6 flex items-center gap-2">
								<Icon name="trending-up" size={20} className="text-green-400" />
								Plan Recomendado
							</h3>
							
							{#if selectedService === 'compliance'}
								<div class="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl p-4">
									<div class="flex justify-between items-center mb-3">
										<span class="text-lg font-bold text-white">{compliancePlans[selectedPlan].name}</span>
										<div class="text-right">
											<div class="text-2xl font-extrabold text-white">{currentPrice}€</div>
											<div class="text-xs text-white/70">por mes</div>
										</div>
									</div>
									<div class="text-sm text-white/80 mb-3">
										Hasta {compliancePlans[selectedPlan].invoices} facturas/mes
									</div>
									<div class="space-y-2">
										{#each compliancePlans[selectedPlan].features.slice(0, 3) as feature}
											<div class="flex items-center gap-2">
												<Icon name="check" size={12} className="text-green-400 flex-shrink-0" />
												<span class="text-xs text-white/90">{feature}</span>
											</div>
										{/each}
									</div>
								</div>
							{:else}
								<div class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl p-4">
									<div class="flex justify-between items-center mb-3">
										<span class="text-lg font-bold text-white">{crmPlans[selectedPlan].name}</span>
										<div class="text-right">
											<div class="text-2xl font-extrabold text-white">{currentPrice}€</div>
											<div class="text-xs text-white/70">por mes</div>
										</div>
									</div>
									<div class="text-sm text-white/80 mb-3">
										Hasta {crmPlans[selectedPlan].users} usuarios
									</div>
									<div class="space-y-2">
										{#each crmPlans[selectedPlan].features.slice(0, 3) as feature}
											<div class="flex items-center gap-2">
												<Icon name="check" size={12} className="text-green-400 flex-shrink-0" />
												<span class="text-xs text-white/90">{feature}</span>
											</div>
										{/each}
									</div>
								</div>
							{/if}
						</div>
						
						<!-- ROI Analysis -->
						<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
							<h4 class="font-bold mb-4 flex items-center gap-2">
								<Icon name="euro-sign" size={20} className="text-yellow-400" />
								Análisis ROI Anual
							</h4>
							
							<div class="space-y-3">
								{#if selectedService === 'compliance'}
									<div class="flex justify-between items-center py-2 border-b border-white/10">
										<span class="text-sm text-white/80">Ahorro en multas:</span>
										<span class="font-semibold text-green-200">+{potentialFines.toLocaleString()}€</span>
									</div>
									<div class="flex justify-between items-center py-2 border-b border-white/10">
										<span class="text-sm text-white/80">Ahorro tiempo admin:</span>
										<span class="font-semibold text-green-200">+{(adminHours * 25 * 12).toLocaleString()}€</span>
									</div>
									<div class="flex justify-between items-center py-2 border-b border-white/10">
										<span class="text-sm text-white/80">Coste anual sistema:</span>
										<span class="font-semibold text-red-200">-{(currentPrice * 12).toLocaleString()}€</span>
									</div>
									<div class="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mt-4">
										<div class="flex justify-between items-center">
											<span class="font-bold text-white">ROI Total Anual:</span>
											<span class="text-xl font-extrabold text-green-200">
												+{((potentialFines + (adminHours * 25 * 12)) - (currentPrice * 12)).toLocaleString()}€
											</span>
										</div>
									</div>
								{:else}
									<div class="flex justify-between items-center py-2 border-b border-white/10">
										<span class="text-sm text-white/80">Mejora conversión (15%):</span>
										<span class="font-semibold text-green-200">+{(currentClients * avgSalePerClient * 0.15 * 12).toLocaleString()}€</span>
									</div>
									<div class="flex justify-between items-center py-2 border-b border-white/10">
										<span class="text-sm text-white/80">Retención clientes (10%):</span>
										<span class="font-semibold text-green-200">+{(currentClients * avgSalePerClient * 0.10 * 12).toLocaleString()}€</span>
									</div>
									<div class="flex justify-between items-center py-2 border-b border-white/10">
										<span class="text-sm text-white/80">Coste anual CRM:</span>
										<span class="font-semibold text-red-200">-{(currentPrice * 12).toLocaleString()}€</span>
									</div>
									<div class="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mt-4">
										<div class="flex justify-between items-center">
											<span class="font-bold text-white">ROI Total Anual:</span>
											<span class="text-xl font-extrabold text-green-200">
												+{((currentClients * avgSalePerClient * 0.25 * 12) - (currentPrice * 12)).toLocaleString()}€
											</span>
										</div>
									</div>
								{/if}
							</div>
						</div>
						
						<!-- Implementation Timeline -->
						<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
							<h4 class="font-bold mb-4 flex items-center gap-2">
								<Icon name="calendar" size={20} className="text-blue-400" />
								Timeline Implementación
							</h4>
							<div class="space-y-3">
								<div class="flex items-center gap-3">
									<div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
										<span class="text-white text-xs font-bold">1</span>
									</div>
									<span class="text-sm text-white/90">Día 1-2: Configuración inicial</span>
								</div>
								<div class="flex items-center gap-3">
									<div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
										<span class="text-white text-xs font-bold">2</span>
									</div>
									<span class="text-sm text-white/90">Día 3-5: Integración y testing</span>
								</div>
								<div class="flex items-center gap-3">
									<div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
										<span class="text-white text-xs font-bold">3</span>
									</div>
									<span class="text-sm text-white/90">Día 6-7: Formación del equipo</span>
								</div>
								<div class="flex items-center gap-3">
									<div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
										<span class="text-white text-xs font-bold">4</span>
									</div>
									<span class="text-sm text-white/90">Go-Live: Activación total</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- CTA Button -->
				<div class="mt-8 text-center">
					<a href="/contacto" class="inline-flex items-center gap-3 bg-white text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
						<Icon name="arrow-right" size={20} />
						SOLICITAR IMPLEMENTACIÓN URGENTE
					</a>
				</div>
			</div>
			
			<!-- Guarantees Grid -->
			<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="shield-check" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-white mb-2">Garantía Compliance</h4>
					<p class="text-sm text-white/70">100% cumplimiento VeriFactu o devolución completa</p>
				</div>
				
				<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="clock" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-white mb-2">Implementación 48h</h4>
					<p class="text-sm text-white/70">Puesta en marcha garantizada en menos de 48 horas</p>
				</div>
				
				<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon name="headphones" size={24} className="text-white" />
					</div>
					<h4 class="font-bold text-white mb-2">Soporte 24/7</h4>
					<p class="text-sm text-white/70">Especialistas VeriFactu disponibles siempre</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-24 bg-gradient-to-br from-red-600 via-blue-600 to-purple-600 text-white overflow-hidden">
	<div class="relative">
		<!-- Glassmorphism Background -->
		<div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl"></div>
		
		<div class="relative container mx-auto px-6 text-center">
			<div class="flex items-center justify-center gap-3 mb-6">
				<span class="text-white/60 text-sm font-mono">///</span>
				<span class="text-white/80 text-sm font-mono font-medium tracking-wider uppercase">CONSULTA URGENTE</span>
				<span class="text-white/60 text-sm font-mono">///</span>
			</div>
			
			<h2 class="text-5xl font-bold mb-6">
				<span class="text-white">Consulta Urgente</span>
				<span class="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">VeriFactu</span>
			</h2>
			
			<p class="text-xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
				Respuesta garantizada en <strong>2 horas</strong> para consultas VeriFactu. 
				Nuestros especialistas te asesoran sin compromiso sobre compliance AEAT.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-6 justify-center">
				<a href="/contacto" class="group bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 min-w-[250px]">
					CONSULTA URGENTE
					<Icon name="arrow-right" size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
				</a>
				<a href="#calculadora" class="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-3 min-w-[250px]">
					VER CALCULADORA
					<Icon name="calculator" size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
				</a>
			</div>
		</div>
	</div>
</section>



<style>
	/* Professional Floating Indicator for VeriFactu */
	.floating-indicator-verifactu {
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
		background: linear-gradient(90deg, rgba(220, 38, 38, 0.8), rgba(37, 99, 235, 0.8));
		outline: none;
		border: none;
	}

	.slider-thumb::-webkit-slider-thumb {
		appearance: none;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: linear-gradient(135deg, #dc2626, #2563eb);
		cursor: pointer;
		border: 3px solid white;
		box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
		transition: all 0.3s ease;
	}

	.slider-thumb::-webkit-slider-thumb:hover {
		transform: scale(1.2);
		box-shadow: 0 6px 20px rgba(220, 38, 38, 0.6);
	}

	.slider-thumb::-moz-range-thumb {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: linear-gradient(135deg, #dc2626, #2563eb);
		cursor: pointer;
		border: 3px solid white;
		box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
		transition: all 0.3s ease;
	}

	.slider-thumb::-moz-range-thumb:hover {
		transform: scale(1.2);
		box-shadow: 0 6px 20px rgba(220, 38, 38, 0.6);
	}

	/* Custom range track */
	.slider-thumb::-webkit-slider-track {
		background: linear-gradient(90deg, rgba(220, 38, 38, 0.3), rgba(37, 99, 235, 0.3));
		height: 8px;
		border-radius: 4px;
	}

	.slider-thumb::-moz-range-track {
		background: linear-gradient(90deg, rgba(220, 38, 38, 0.3), rgba(37, 99, 235, 0.3));
		height: 8px;
		border-radius: 4px;
		border: none;
	}

	/* Mobile responsive improvements */
	@media (max-width: 1024px) {
		.floating-indicator-verifactu {
			top: 100px;
			right: 40px;
		}
	}

	@media (max-width: 768px) {
		.floating-indicator-verifactu {
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
		.floating-indicator-verifactu {
			animation: none;
			transition: none;
		}
	}
</style>
