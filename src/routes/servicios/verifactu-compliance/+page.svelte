<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { debug } from '$lib/utils/debug';
	import { onMount } from 'svelte';
	
	let selectedService = 'compliance'; // 'compliance' o 'crm'
	let selectedPlan = 'professional';
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
	
	let contactForm = {
		nombre: '',
		empresa: '',
		email: '',
		telefono: '',
		facturas_mes: '',
		urgencia: 'alta',
		mensaje: ''
	};
	
	function handleSubmit() {
		debug.log('Enviando consulta VeriFactu:', contactForm);
		// Aquí iría la integración con el backend
	}
</script>

<svelte:head>
	<title>VeriFactu + CRM Integrado - Compliance AEAT y Gestión Empresarial | Formeta Labs</title>
	<meta name="description" content="Solución completa VeriFactu + CRM integrado. Cumplimiento AEAT, gestión clientes, facturación automática y pipeline ventas. Sistema unificado para empresas españolas.">
	<meta name="keywords" content="VeriFactu CRM, compliance AEAT, facturación automática, gestión clientes, pipeline ventas, CRM VeriFactu, sistema integrado">
	<meta property="og:title" content="VeriFactu + CRM - Solución Empresarial Completa">
	<meta property="og:description" content="Sistema unificado de compliance VeriFactu y CRM empresarial. Facturación AEAT automática, gestión de clientes y pipeline de ventas en una sola plataforma.">
	<meta property="og:type" content="product">
	<link rel="canonical" href="https://formeta-labs.com/servicios/verifactu-compliance">
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[70vh] bg-gradient-to-br from-formeta-error via-formeta-primary to-formeta-secondary overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 pattern-circuits opacity-20"></div>
	
	<!-- Service Indicators -->
	<div class="absolute top-20 left-20 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		VERIFACTU.COMPLIANCE
	</div>
	<div class="absolute top-32 right-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		CRM.INTEGRADO
	</div>
	<div class="absolute bottom-32 left-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		SOLUTION.UNIFIED
	</div>
	
	<div class="relative container mx-auto px-6 min-h-[70vh] flex items-center">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<span class="text-white/80 text-lg font-mono">///</span>
				<span class="text-white/80 text-lg font-mono">VERIFACTU + CRM EMPRESARIAL</span>
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
				SOLUCIÓN
				<br>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
					UNIFICADA
				</span>
			</h1>
			
			<p class="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
				<strong>Sistema completo VeriFactu + CRM</strong> para empresas que necesitan 
				<strong>compliance AEAT automático</strong> y <strong>gestión empresarial avanzada</strong> 
				en una sola plataforma integrada.
			</p>
			
			<!-- Service Selection Tabs -->
			<div class="flex gap-4 mb-8">
				<button 
					on:click={() => selectedService = 'compliance'}
					class="px-6 py-3 font-bold transition-all duration-200 {selectedService === 'compliance' ? 'bg-white text-formeta-primary' : 'border-2 border-white text-white hover:bg-white hover:text-formeta-primary'}"
				>
					COMPLIANCE VERIFACTU
				</button>
				<button 
					on:click={() => selectedService = 'crm'}
					class="px-6 py-3 font-bold transition-all duration-200 {selectedService === 'crm' ? 'bg-white text-formeta-primary' : 'border-2 border-white text-white hover:bg-white hover:text-formeta-primary'}"
				>
					CRM EMPRESARIAL
				</button>
			</div>
			
			<!-- Key Features -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="shield" size={20} color="white" />
						<span class="text-white font-bold">48h Implementación</span>
					</div>
					<p class="text-white/80 text-sm">Puesta en marcha completa en menos de 48 horas</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="check-circle" size={20} color="white" />
						<span class="text-white font-bold">99.95% Precisión</span>
					</div>
					<p class="text-white/80 text-sm">Validación automática sin errores</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-4">
					<div class="flex items-center gap-3 mb-2">
						<Icon name="phone" size={20} color="white" />
						<span class="text-white font-bold">Soporte 24/7</span>
					</div>
					<p class="text-white/80 text-sm">Especialistas VeriFactu disponibles</p>
				</div>
			</div>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-6">
				<a href="#calculadora" class="bg-white text-red-600 px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-200">
					CALCULAR COSTE Y ROI
				</a>
				<a href="#contact" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200">
					CONSULTA URGENTE GRATUITA
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Why VeriFactu Section -->
<section class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">¿Por qué VeriFactu es Obligatorio?</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				El Real Decreto 1007/2023 establece la obligatoriedad del sistema VeriFactu para todas las empresas españolas a partir de 2025.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="text-center">
				<div class="bg-red-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="alert-triangle" size={32} color="#dc2626" />
				</div>
				<h3 class="text-xl font-bold mb-2">Obligatorio 2025</h3>
				<p class="text-gray-600">Todas las empresas deben implementar VeriFactu antes del 1 de enero de 2025</p>
			</div>
			<div class="text-center">
				<div class="bg-orange-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="x" size={32} color="#ea580c" />
				</div>
				<h3 class="text-xl font-bold mb-2">Multas Severas</h3>
				<p class="text-gray-600">Sanciones de hasta 150.000€ por incumplimiento normativo</p>
			</div>
			<div class="text-center">
				<div class="bg-blue-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="shield" size={32} color="#2563eb" />
				</div>
				<h3 class="text-xl font-bold mb-2">Control Fiscal</h3>
				<p class="text-gray-600">Mayor transparencia y control de la facturación empresarial</p>
			</div>
			<div class="text-center">
				<div class="bg-green-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
					<Icon name="check-circle" size={32} color="#16a34a" />
				</div>
				<h3 class="text-xl font-bold mb-2">Automatización</h3>
				<p class="text-gray-600">Validación y envío automático de todas las facturas</p>
			</div>
		</div>
	</div>
</section>

<!-- Technical Details Section -->
<section class="py-24 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-6">Integración Técnica Completa</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Nuestra solución VeriFactu se integra perfectamente con tu sistema actual sin interrupciones.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Technical Stack -->
			<div>
				<h3 class="text-2xl font-bold mb-6">Stack Tecnológico</h3>
				<div class="space-y-4">
					<div class="flex items-center gap-4 bg-white p-4 border border-gray-200">
						<Icon name="server" size={24} color="#4f46e5" />
						<div>
							<h4 class="font-bold">Node.js + Express</h4>
							<p class="text-gray-600 text-sm">API robusta para integración AEAT</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-white p-4 border border-gray-200">
						<Icon name="database" size={24} color="#059669" />
						<div>
							<h4 class="font-bold">PostgreSQL + Backup</h4>
							<p class="text-gray-600 text-sm">Almacenamiento seguro y respaldos automáticos</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-white p-4 border border-gray-200">
						<Icon name="lock" size={24} color="#dc2626" />
						<div>
							<h4 class="font-bold">Crypto + SSL</h4>
							<p class="text-gray-600 text-sm">Hash criptográfico y comunicación segura</p>
						</div>
					</div>
					<div class="flex items-center gap-4 bg-white p-4 border border-gray-200">
						<Icon name="monitor" size={24} color="#7c3aed" />
						<div>
							<h4 class="font-bold">Dashboard Real-time</h4>
							<p class="text-gray-600 text-sm">Monitoreo y auditoría en tiempo real</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Features List -->
			<div>
				<h3 class="text-2xl font-bold mb-6">Características Avanzadas</h3>
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
						<div class="flex items-center gap-3">
							<Icon name="check-circle" size={16} color="#16a34a" />
							<span class="text-gray-700">{feature}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Dynamic Calculator Section -->
<section id="calculadora" class="py-24 bg-formeta-primary text-white">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-6">
				Calculadora {selectedService === 'compliance' ? 'VeriFactu' : 'CRM'} y ROI
			</h2>
			<p class="text-xl text-white/90 max-w-3xl mx-auto">
				{selectedService === 'compliance' 
					? 'Calcula el coste de compliance VeriFactu y el ahorro en multas y tiempo administrativo.'
					: 'Calcula el coste del CRM y el retorno por eficiencia en ventas y gestión.'}
			</p>
		</div>
		
		<div class="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 border border-white/20">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<!-- Calculator Input -->
				<div>
					<h3 class="text-2xl font-bold mb-6">Configuración de tu Empresa</h3>
					
					{#if selectedService === 'compliance'}
						<!-- VeriFactu Calculator -->
						<div class="mb-6">
							<label for="monthly-invoices" class="block text-white/90 mb-2">Facturas por mes</label>
							<input 
								id="monthly-invoices"
								type="range" 
								min="10" 
								max="1000" 
								bind:value={monthlyInvoices}
								class="w-full"
							>
							<div class="flex justify-between text-sm text-white/70 mt-1">
								<span>10</span>
								<span class="font-bold text-white">{monthlyInvoices} facturas/mes</span>
								<span>1000+</span>
							</div>
						</div>
						
						<!-- Plan Selection -->
						<div class="mb-6">
							<h4 class="text-lg font-bold mb-4">Plan VeriFactu Recomendado</h4>
							<div class="bg-white/20 p-4 border border-white/30">
								<div class="flex justify-between items-center mb-2">
									<span class="font-bold text-lg">{compliancePlans[selectedPlan].name}</span>
									<span class="text-2xl font-bold">{currentPrice}€/mes</span>
								</div>
								<p class="text-white/80 text-sm mb-3">Hasta {compliancePlans[selectedPlan].invoices} facturas/mes</p>
								<div class="space-y-1">
									{#each compliancePlans[selectedPlan].features as feature}
										<div class="flex items-center gap-2">
											<Icon name="check" size={16} color="white" />
											<span class="text-sm text-white/90">{feature}</span>
										</div>
									{/each}
								</div>
							</div>
						</div>
					{:else}
						<!-- CRM Calculator -->
						<div class="mb-6">
							<label for="crm-users" class="block text-white/90 mb-2">Usuarios del CRM</label>
							<input 
								id="crm-users"
								type="range" 
								min="1" 
								max="100" 
								bind:value={crmUsers}
								class="w-full"
							>
							<div class="flex justify-between text-sm text-white/70 mt-1">
								<span>1</span>
								<span class="font-bold text-white">{crmUsers} usuarios</span>
								<span>100+</span>
							</div>
						</div>
						
						<!-- Plan Selection -->
						<div class="mb-6">
							<h4 class="text-lg font-bold mb-4">Plan CRM Recomendado</h4>
							<div class="bg-white/20 p-4 border border-white/30">
								<div class="flex justify-between items-center mb-2">
									<span class="font-bold text-lg">{crmPlans[selectedPlan].name}</span>
									<span class="text-2xl font-bold">{currentPrice}€/mes</span>
								</div>
								<p class="text-white/80 text-sm mb-3">Hasta {crmPlans[selectedPlan].users} usuarios</p>
								<div class="space-y-1">
									{#each crmPlans[selectedPlan].features as feature}
										<div class="flex items-center gap-2">
											<Icon name="check" size={16} color="white" />
											<span class="text-sm text-white/90">{feature}</span>
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/if}
					
					<!-- Additional Parameters -->
					{#if selectedService === 'compliance'}
						<div class="mb-6">
							<label for="potential-fines" class="block text-white/90 mb-2">Multas potenciales anuales</label>
							<input 
								id="potential-fines"
								type="range" 
								min="1000" 
								max="50000" 
								step="1000"
								bind:value={potentialFines}
								class="w-full"
							>
							<div class="flex justify-between text-sm text-white/70 mt-1">
								<span>1K€</span>
								<span class="font-bold text-white">{potentialFines.toLocaleString()}€/año</span>
								<span>50K€+</span>
							</div>
						</div>
						
						<div class="mb-6">
							<label for="admin-hours" class="block text-white/90 mb-2">Horas admin/mes actuales</label>
							<input 
								id="admin-hours"
								type="range" 
								min="5" 
								max="100" 
								bind:value={adminHours}
								class="w-full"
							>
							<div class="flex justify-between text-sm text-white/70 mt-1">
								<span>5h</span>
								<span class="font-bold text-white">{adminHours}h/mes</span>
								<span>100h+</span>
							</div>
						</div>
					{:else}
						<div class="mb-6">
							<label for="current-clients" class="block text-white/90 mb-2">Clientes actuales</label>
							<input 
								id="current-clients"
								type="range" 
								min="10" 
								max="5000" 
								step="10"
								bind:value={currentClients}
								class="w-full"
							>
							<div class="flex justify-between text-sm text-white/70 mt-1">
								<span>10</span>
								<span class="font-bold text-white">{currentClients} clientes</span>
								<span>5000+</span>
							</div>
						</div>
						
						<div class="mb-6">
							<label for="avg-sale-per-client" class="block text-white/90 mb-2">Ventas promedio/cliente/mes</label>
							<input 
								id="avg-sale-per-client"
								type="range" 
								min="100" 
								max="10000" 
								step="100"
								bind:value={avgSalePerClient}
								class="w-full"
							>
							<div class="flex justify-between text-sm text-white/70 mt-1">
								<span>100€</span>
								<span class="font-bold text-white">{avgSalePerClient}€</span>
								<span>10K€+</span>
							</div>
						</div>
					{/if}
				</div>
				
				<!-- Results -->
				<div>
					<h3 class="text-2xl font-bold mb-6">
						{selectedService === 'compliance' ? 'Análisis de Compliance' : 'Análisis de CRM'}
					</h3>
					
					<div class="space-y-6">
						<!-- Cost Breakdown -->
						<div class="bg-white/20 p-6 border border-white/30">
							<h4 class="text-lg font-bold mb-4">Coste Mensual</h4>
							<div class="space-y-3">
								<div class="flex justify-between">
									<span>Plan {selectedService === 'compliance' ? 'VeriFactu' : 'CRM'}:</span>
									<span class="font-bold">{currentPrice}€</span>
								</div>
								<div class="flex justify-between">
									<span>Configuración inicial:</span>
									<span class="font-bold">{setupCost}€</span>
								</div>
								<div class="flex justify-between">
									<span>Soporte técnico:</span>
									<span class="font-bold">Incluido</span>
								</div>
								<div class="border-t border-white/30 pt-3 flex justify-between text-xl font-bold">
									<span>Total primer mes:</span>
									<span>{currentPrice + setupCost}€</span>
								</div>
							</div>
						</div>
						
						<!-- ROI Analysis -->
						<div class="bg-white/20 p-6 border border-white/30">
							<h4 class="text-lg font-bold mb-4">
								{selectedService === 'compliance' ? 'Ahorro Anual' : 'Incremento de Ingresos'}
							</h4>
							<div class="space-y-3">
								{#if selectedService === 'compliance'}
									<div class="flex justify-between">
										<span>Ahorro en multas:</span>
										<span class="font-bold text-green-300">+{potentialFines.toLocaleString()}€</span>
									</div>
									<div class="flex justify-between">
										<span>Ahorro tiempo admin:</span>
										<span class="font-bold text-green-300">+{(adminHours * 25 * 12).toLocaleString()}€</span>
									</div>
									<div class="flex justify-between">
										<span>Coste anual sistema:</span>
										<span class="font-bold text-red-300">-{(currentPrice * 12).toLocaleString()}€</span>
									</div>
									<div class="border-t border-white/30 pt-3 flex justify-between text-xl font-bold">
										<span>ROI anual:</span>
										<span class="text-green-300">+{((potentialFines + (adminHours * 25 * 12)) - (currentPrice * 12)).toLocaleString()}€</span>
									</div>
								{:else}
									<div class="flex justify-between">
										<span>Mejora conversión (15%):</span>
										<span class="font-bold text-green-300">+{(currentClients * avgSalePerClient * 0.15 * 12).toLocaleString()}€</span>
									</div>
									<div class="flex justify-between">
										<span>Retención clientes (10%):</span>
										<span class="font-bold text-green-300">+{(currentClients * avgSalePerClient * 0.10 * 12).toLocaleString()}€</span>
									</div>
									<div class="flex justify-between">
										<span>Coste anual CRM:</span>
										<span class="font-bold text-red-300">-{(currentPrice * 12).toLocaleString()}€</span>
									</div>
									<div class="border-t border-white/30 pt-3 flex justify-between text-xl font-bold">
										<span>ROI anual:</span>
										<span class="text-green-300">+{((currentClients * avgSalePerClient * 0.25 * 12) - (currentPrice * 12)).toLocaleString()}€</span>
									</div>
								{/if}
							</div>
						</div>
						
						<!-- Implementation Timeline -->
						<div class="bg-white/20 p-6 border border-white/30">
							<h4 class="text-lg font-bold mb-4">Timeline de Implementación</h4>
							<div class="space-y-2">
								<div class="flex items-center gap-3">
									<Icon name="calendar" size={16} color="white" />
									<span class="text-sm">Día 1-3: Configuración inicial</span>
								</div>
								<div class="flex items-center gap-3">
									<Icon name="users" size={16} color="white" />
									<span class="text-sm">Día 4-7: Formación del equipo</span>
								</div>
								<div class="flex items-center gap-3">
									<Icon name="play-circle" size={16} color="white" />
									<span class="text-sm">Día 8-14: Puesta en marcha</span>
								</div>
								<div class="flex items-center gap-3">
									<Icon name="trending-up" size={16} color="white" />
									<span class="text-sm">Mes 2+: Optimización continua</span>
								</div>
							</div>
						</div>
					</div>
					
					<!-- CTA Button -->
					<div class="mt-8">
						<button 
							class="w-full bg-white text-formeta-primary font-bold py-4 px-6 border-2 border-white transition-all duration-200 hover:bg-formeta-primary hover:text-white hover:border-white transform hover:-translate-y-1"
							on:click={() => {
								document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
							}}
						>
							Solicitar Demo Personalizada →
						</button>
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
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Consulta Urgente VeriFactu</h2>
				<p class="text-xl text-gray-600">
					Respuesta garantizada en <strong>2 horas</strong> para consultas VeriFactu. 
					Nuestros especialistas te asesoran sin compromiso.
				</p>
			</div>
			
			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="contact-nombre" class="block text-gray-700 font-medium mb-2">Nombre Completo *</label>
						<input 
							id="contact-nombre"
							type="text" 
							bind:value={contactForm.nombre}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-formeta-primary focus:outline-none"
						>
					</div>
					<div>
						<label for="contact-empresa" class="block text-gray-700 font-medium mb-2">Empresa *</label>
						<input 
							id="contact-empresa"
							type="text" 
							bind:value={contactForm.empresa}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-formeta-primary focus:outline-none"
						>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="contact-email" class="block text-gray-700 font-medium mb-2">Email Corporativo *</label>
						<input 
							id="contact-email"
							type="email" 
							bind:value={contactForm.email}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-formeta-primary focus:outline-none"
						>
					</div>
					<div>
						<label for="contact-telefono" class="block text-gray-700 font-medium mb-2">Teléfono *</label>
						<input 
							id="contact-telefono"
							type="tel" 
							bind:value={contactForm.telefono}
							required
							class="w-full px-4 py-3 border border-gray-300 focus:border-formeta-primary focus:outline-none"
						>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="contact-facturas" class="block text-gray-700 font-medium mb-2">Facturas/mes aproximadas</label>
						<select id="contact-facturas" bind:value={contactForm.facturas_mes} class="w-full px-4 py-3 border border-gray-300 focus:border-formeta-primary focus:outline-none">
							<option value="">Seleccionar...</option>
							<option value="1-50">1 - 50 facturas</option>
							<option value="51-200">51 - 200 facturas</option>
							<option value="201-500">201 - 500 facturas</option>
							<option value="500+">Más de 500 facturas</option>
						</select>
					</div>
					<div>
						<label for="contact-urgencia" class="block text-gray-700 font-medium mb-2">Nivel de Urgencia</label>
						<select id="contact-urgencia" bind:value={contactForm.urgencia} class="w-full px-4 py-3 border border-gray-300 focus:border-formeta-primary focus:outline-none">
							<option value="critica">🚨 Crítica - Necesito implementar YA</option>
							<option value="alta">⚡ Alta - En las próximas semanas</option>
							<option value="media">📅 Media - Tengo tiempo para planificar</option>
						</select>
					</div>
				</div>
				
				<div>
					<label for="contact-mensaje" class="block text-gray-700 font-medium mb-2">Mensaje / Situación Actual</label>
					<textarea 
						id="contact-mensaje"
						bind:value={contactForm.mensaje}
						rows="4"
						placeholder="Describe tu situación actual con VeriFactu, sistema de facturación que usas, dudas específicas..."
						class="w-full px-4 py-3 border border-gray-300 focus:border-formeta-primary focus:outline-none"
					></textarea>
				</div>
				
				<div class="bg-red-50 border border-red-200 p-4">
					<div class="flex items-start gap-3">
						<Icon name="alert-triangle" size={20} color="#dc2626" />
						<div>
							<h4 class="font-bold text-red-800 mb-1">Urgencia VeriFactu 2025</h4>
							<p class="text-red-700 text-sm">
								El incumplimiento del R.D. 1007/2023 puede resultar en multas de hasta 150.000€. 
								Contacta ahora para asegurar tu compliance a tiempo.
							</p>
						</div>
					</div>
				</div>
				
				<button 
					type="submit"
					class="w-full bg-red-600 text-white py-4 px-8 font-bold text-lg hover:bg-red-700 transition-colors duration-200"
				>
					ENVIAR CONSULTA URGENTE - RESPUESTA EN 2H
				</button>
				
				<p class="text-center text-gray-500 text-sm">
					Al enviar este formulario aceptas nuestra política de privacidad y el tratamiento de datos según RGPD.
				</p>
			</form>
		</div>
	</div>
</section>

<style>
	.pattern-circuits {
		background-image: 
			linear-gradient(45deg, transparent 35%, rgba(255, 255, 255, 0.05) 35%, rgba(255, 255, 255, 0.05) 65%, transparent 65%),
			linear-gradient(-45deg, transparent 35%, rgba(255, 255, 255, 0.08) 35%, rgba(255, 255, 255, 0.08) 65%, transparent 65%);
		background-size: 30px 30px;
	}
</style>
