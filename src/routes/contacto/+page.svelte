<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	
	let form: HTMLFormElement;
	let isSubmitting = false;
	let submitMessage = '';
	let submitSuccess = false;
	
	// Form data with enhanced fields
	let formData = {
		name: '',
		email: '',
		company: '',
		position: '',
		phone: '',
		service: '',
		projectType: '',
		budget: '',
		timeline: '',
		message: '',
		priority: 'normal',
		gdprConsent: false
	};
	
	const contactStats = [
		{ label: 'VeriFactu Urgente', value: '2h', description: 'Tiempo respuesta' },
		{ label: 'IA Enterprise', value: '4h', description: 'Demo técnica' },
		{ label: 'Consulta General', value: '24h', description: 'Respuesta garantizada' },
		{ label: 'Soporte', value: '99.9%', description: 'SLA disponibilidad' }
	];
	
	// Enhanced services with VeriFactu and IA focus
	const services = [
		{ id: 'verifactu', name: 'VeriFactu Compliance (CRÍTICO - 2025)', urgent: true },
		{ id: 'ia-local', name: 'IA Empresarial Local (RAG + MCP)', advanced: true },
		{ id: 'crm-enterprise', name: 'CRM Enterprise Multi-tenant', production: true },
		{ id: 'web-development', name: 'Desarrollo Web Avanzado', ready: true },
		{ id: 'automation', name: 'Automatización de Procesos', ready: true },
		{ id: 'consulting', name: 'Consultoría Técnica', ready: true },
		{ id: 'audit', name: 'Auditoría Digital & Compliance', advanced: true },
		{ id: 'custom', name: 'Proyecto Personalizado', ready: true }
	];
	
	const projectTypes = [
		{ id: 'new', name: 'Proyecto Nuevo' },
		{ id: 'upgrade', name: 'Actualización/Migración' },
		{ id: 'integration', name: 'Integración Sistemas' },
		{ id: 'consulting', name: 'Consultoría/Auditoría' },
		{ id: 'maintenance', name: 'Mantenimiento/Soporte' }
	];
	
	const budgetRanges = [
		{ id: 'startup', name: '< 5.000€ (Startup/PYME)' },
		{ id: 'professional', name: '5.000€ - 15.000€ (Profesional)' },
		{ id: 'enterprise', name: '15.000€ - 50.000€ (Enterprise)' },
		{ id: 'corporate', name: '> 50.000€ (Corporativo)' },
		{ id: 'consulting', name: 'Consulta presupuesto' }
	];
	
	const timelineOptions = [
		{ id: 'urgent', name: 'Urgente (< 1 mes)' },
		{ id: 'fast', name: 'Rápido (1-3 meses)' },
		{ id: 'normal', name: 'Normal (3-6 meses)' },
		{ id: 'flexible', name: 'Flexible (> 6 meses)' }
	];
	
	onMount(() => {
		// Check if service is pre-selected from URL params
		if (browser) {
			const urlParams = new URLSearchParams(window.location.search);
			const preSelectedService = urlParams.get('service');
			if (preSelectedService) {
				formData.service = preSelectedService;
			}
			
			// Set priority based on service
			if (preSelectedService === 'verifactu') {
				formData.priority = 'urgent';
			}
		}
		
		// Animate floating elements
		const animateFloatingElements = () => {
			heroElements.forEach((el, index) => {
				if (el) {
					const delay = index * 200;
					setTimeout(() => {
						el.style.animation = `pixel-float 3s ease-in-out infinite`;
						el.style.animationDelay = `${delay}ms`;
					}, delay);
				}
			});
		};
		
		animateFloatingElements();
	});
	
	async function handleSubmit() {
		if (!form.checkValidity()) {
			return;
		}
		
		if (!formData.gdprConsent) {
			submitMessage = 'Debes aceptar el tratamiento de datos para continuar.';
			submitSuccess = false;
			return;
		}
		
		isSubmitting = true;
		submitMessage = '';
		
		try {
			// Enhanced submission with priority handling
			const submissionData = {
				...formData,
				timestamp: new Date().toISOString(),
				userAgent: browser ? navigator.userAgent : '',
				priority: formData.service === 'verifactu' ? 'urgent' : formData.priority
			};
			
			// Simulate API call with realistic delay
			await new Promise(resolve => setTimeout(resolve, 2000));
			
			submitSuccess = true;
			
			// Different messages based on service priority
			if (formData.service === 'verifactu') {
				submitMessage = '🚨 SOLICITUD VERIFACTU RECIBIDA - Respuesta garantizada en 2 horas. Un especialista en compliance te contactará inmediatamente.';
			} else if (services.find(s => s.id === formData.service)?.advanced) {
				submitMessage = '🤖 SOLICITUD IA EMPRESARIAL RECIBIDA - Te contactaremos en 4 horas para agendar demo técnica personalizada.';
			} else {
				submitMessage = 'SOLICITUD RECIBIDA CORRECTAMENTE - Te contactaremos en menos de 24 horas con una propuesta personalizada.';
			}
			
			// Reset form
			formData = {
				name: '',
				email: '',
				company: '',
				position: '',
				phone: '',
				service: '',
				projectType: '',
				budget: '',
				timeline: '',
				message: '',
				priority: 'normal',
				gdprConsent: false
			};
			
		} catch (error) {
			submitSuccess = false;
			submitMessage = 'Error al enviar la solicitud. Por favor, inténtalo de nuevo o contacta directamente por email.';
		} finally {
			isSubmitting = false;
		}
	}
	
	function clearMessage() {
		submitMessage = '';
	}
	
	// Real-time validation helper
	function getServiceBadge(service: any) {
		if (service.urgent) return 'CRÍTICO';
		if (service.advanced) return 'AVANZADO';
		if (service.production) return 'PRODUCCIÓN';
		return 'DISPONIBLE';
	}
	
	function getServiceBadgeClass(service: any) {
		if (service.urgent) return 'bg-red-500 text-white';
		if (service.advanced) return 'bg-purple-500 text-white';
		if (service.production) return 'bg-green-500 text-white';
		return 'bg-blue-500 text-white';
	}
</script>

<svelte:head>
	<title>Contacto Enterprise - Formeta Labs | Consulta Técnica Gratuita</title>
	<meta name="description" content="Contacto enterprise con Formeta Labs. Especialistas en VeriFactu, IA local y desarrollo web. Respuesta garantizada en 2 horas para proyectos críticos." />
	<meta name="keywords" content="contacto enterprise, VeriFactu urgente, IA local, consulta técnica, desarrollo web, CRM enterprise" />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[70vh] bg-gradient-to-br from-formeta-text via-formeta-primary to-formeta-secondary overflow-hidden">
	<!-- Background Patterns -->
	<div class="absolute inset-0 opacity-5">
		<div class="pattern-grid h-full w-full"></div>
	</div>
	
	<!-- Floating Technical Elements -->
	<div class="absolute top-20 left-20 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		<Icon name="phone" size={16} className="inline mr-2" color="white" />
		CONTACT.ENTERPRISE
	</div>
	<div class="absolute top-32 right-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		<Icon name="clock" size={16} className="inline mr-2" color="white" />
		RESPONSE.2H
	</div>
	<div class="absolute bottom-32 left-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		<Icon name="shield" size={16} className="inline mr-2" color="white" />
		VERIFACTU.URGENT
	</div>
	
	<div class="relative z-10 container-formeta flex items-center min-h-[70vh]">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<span class="text-white/80 text-lg font-mono">///</span>
				<span class="text-white/80 text-lg font-mono">CONTACTO ENTERPRISE</span>
			</div>
			
			<h1 class="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
				CONSULTA
				<br>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
					TÉCNICA
				</span>
			</h1>
			
			<p class="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
				<strong>Especialistas en VeriFactu, IA empresarial local</strong> y desarrollo web avanzado. 
				<strong>Respuesta garantizada en 2 horas</strong> para proyectos críticos.
			</p>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
				{#each contactStats as stat}
					<div class="text-center">
						<div class="text-3xl font-bold text-white mb-1">{stat.value}</div>
						<div class="text-sm text-white/80 font-bold">{stat.label}</div>
						<div class="text-xs text-white/60">{stat.description}</div>
					</div>
				{/each}
			</div>
			
			<div class="flex flex-wrap gap-4">
				<a href="#contacto" class="bg-white text-formeta-primary px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-200 border-2 border-white">
					ENVIAR CONSULTA
				</a>
				<a href="/servicios" class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-formeta-primary transition-all duration-200">
					VER SERVICIOS
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			<!-- Enhanced Contact Form -->
			<div class="lg:col-span-2">
				<div class="bg-white border-2 border-formeta-primary p-8 shadow-lg">
					<h2 class="text-3xl font-bold text-formeta-text mb-8">
						Formulario de Contacto <span class="text-formeta-primary">Enterprise</span>
					</h2>
					
					<form bind:this={form} on:submit|preventDefault={handleSubmit} class="space-y-6">
						<!-- Personal Information Row -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="name" class="form-label">Nombre completo *</label>
								<input 
									type="text" 
									id="name" 
									bind:value={formData.name}
									required
									class="input-pixel"
									placeholder="Tu nombre completo"
								/>
							</div>
							<div>
								<label for="email" class="form-label">Email corporativo *</label>
								<input 
									type="email" 
									id="email" 
									bind:value={formData.email}
									required
									class="input-pixel"
									placeholder="tu@empresa.com"
								/>
							</div>
						</div>
						
						<!-- Company Information Row -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="company" class="form-label">Empresa *</label>
								<input 
									type="text" 
									id="company" 
									bind:value={formData.company}
									required
									class="input-pixel"
									placeholder="Nombre de tu empresa"
								/>
							</div>
							<div>
								<label for="position" class="form-label">Cargo/Posición</label>
								<input 
									type="text" 
									id="position" 
									bind:value={formData.position}
									class="input-pixel"
									placeholder="CTO, CEO, IT Manager..."
								/>
							</div>
						</div>
						
						<!-- Contact & Service Row -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="phone" class="form-label">Teléfono</label>
								<input 
									type="tel" 
									id="phone" 
									bind:value={formData.phone}
									class="input-pixel"
									placeholder="+34 XXX XXX XXX"
								/>
							</div>
							<div>
								<label for="service" class="form-label">Servicio principal *</label>
								<select 
									id="service" 
									bind:value={formData.service}
									required
									class="input-pixel"
								>
									<option value="">Selecciona un servicio</option>
									{#each services as service}
										<option value={service.id}>
											{service.name}
										</option>
									{/each}
								</select>
							</div>
						</div>
						
						<!-- Project Details Row -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="projectType" class="form-label">Tipo de proyecto</label>
								<select 
									id="projectType" 
									bind:value={formData.projectType}
									class="input-pixel"
								>
									<option value="">Selecciona tipo</option>
									{#each projectTypes as type}
										<option value={type.id}>{type.name}</option>
									{/each}
								</select>
							</div>
							<div>
								<label for="budget" class="form-label">Presupuesto estimado</label>
								<select 
									id="budget" 
									bind:value={formData.budget}
									class="input-pixel"
								>
									<option value="">Selecciona rango</option>
									{#each budgetRanges as budget}
										<option value={budget.id}>{budget.name}</option>
									{/each}
								</select>
							</div>
						</div>
						
						<!-- Timeline & Priority -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="timeline" class="form-label">Timeline preferido</label>
								<select 
									id="timeline" 
									bind:value={formData.timeline}
									class="input-pixel"
								>
									<option value="">Selecciona timeline</option>
									{#each timelineOptions as timeline}
										<option value={timeline.id}>{timeline.name}</option>
									{/each}
								</select>
							</div>
							<div>
								<label for="priority" class="form-label">Prioridad del proyecto</label>
								<select 
									id="priority" 
									bind:value={formData.priority}
									class="input-pixel"
								>
									<option value="normal">Normal</option>
									<option value="high">Alta</option>
									<option value="urgent">Urgente</option>
								</select>
							</div>
						</div>
						
						<!-- Message -->
						<div>
							<label for="message" class="form-label">Descripción detallada del proyecto *</label>
							<textarea 
								id="message" 
								bind:value={formData.message}
								required
								rows="6"
								class="input-pixel resize-none"
								placeholder="Describe tu proyecto, objetivos, requisitos técnicos, challenges actuales, expectativas de ROI..."
							></textarea>
						</div>
						
						<!-- GDPR Consent -->
						<div class="flex items-start gap-3">
							<input 
								type="checkbox" 
								id="gdprConsent" 
								bind:checked={formData.gdprConsent}
								required
								class="mt-1"
							/>
							<label for="gdprConsent" class="text-sm text-formeta-text">
								Acepto el tratamiento de mis datos personales según la 
								<a href="/privacy" class="text-formeta-primary hover:underline">Política de Privacidad</a> 
								y el <a href="/legal" class="text-formeta-primary hover:underline">RGPD</a>. 
								Los datos se almacenan localmente en servidores españoles. *
							</label>
						</div>
						
						<!-- Enhanced Submit Button -->
						<button 
							type="submit" 
							disabled={isSubmitting}
							class="w-full bg-formeta-primary hover:bg-formeta-primary/90 text-white px-8 py-4 font-bold text-lg transition-all duration-200 border-2 border-formeta-primary {isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}"
						>
							{#if isSubmitting}
								<span class="flex items-center justify-center gap-2">
									<svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									ENVIANDO SOLICITUD...
								</span>
							{:else}
								{#if formData.service === 'verifactu'}
									🚨 ENVIAR SOLICITUD VERIFACTU URGENTE
								{:else if services.find(s => s.id === formData.service)?.advanced}
									🤖 SOLICITAR DEMO IA EMPRESARIAL
								{:else}
									<div class="flex items-center gap-2">
									<Icon name="briefcase" size={20} class="text-white" />
									<span>ENVIAR CONSULTA ENTERPRISE</span>
								</div>
								{/if}
							{/if}
						</button>
						
						<!-- Submit Message -->
						{#if submitMessage}
							<div 
								class="p-4 border-2 {submitSuccess ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-500 text-red-800'} cursor-pointer" 
								on:click={clearMessage} 
								role="button" 
								tabindex="0" 
								on:keydown={(e) => e.key === 'Enter' && clearMessage()}
							>
								{submitMessage}
								<div class="text-xs mt-2 opacity-70">Haz clic para cerrar</div>
							</div>
						{/if}
					</form>
				</div>
			</div>
			<!-- Enhanced Contact Info -->
			<div class="space-y-8">
				<!-- Direct Contact -->
				<div class="bg-gray-50 p-6 border-2 border-gray-200">
					<h3 class="text-2xl font-bold text-formeta-text mb-6">Contacto Directo</h3>
					
					<div class="space-y-4">
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-formeta-primary text-white flex items-center justify-center rounded">
								<Icon name="mail" size={20} class="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-formeta-text">Email Enterprise</h4>
								<a href="mailto:enterprise@formeta-labs.com" class="text-formeta-primary hover:underline">
									enterprise@formeta-labs.com
								</a>
								<p class="text-sm text-formeta-text/70">Respuesta garantizada en 2-4h</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-formeta-primary text-white flex items-center justify-center rounded">
								<Icon name="phone" size={20} class="text-white" />
							</div>
							<div>
								<h4 class="font-bold text-formeta-text">Consulta Técnica</h4>
								<a href="tel:+34-600-000-000" class="text-formeta-primary hover:underline">
									+34 600 000 000
								</a>
								<p class="text-sm text-formeta-text/70">Lun-Vie 9:00-18:00</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-red-500 text-white flex items-center justify-center text-lg">🚨</div>
							<div>
								<h4 class="font-bold text-formeta-text">VeriFactu Urgente</h4>
								<a href="mailto:verifactu@formeta-labs.com" class="text-red-600 hover:underline">
									verifactu@formeta-labs.com
								</a>
								<p class="text-sm text-red-600 flex items-center gap-1">
									<Icon name="zap" size={16} class="text-red-600" />
									<span>Respuesta en 2 horas</span>
								</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-purple-500 text-white flex items-center justify-center text-lg">🤖</div>
							<div>
								<h4 class="font-bold text-formeta-text">IA & Demos</h4>
								<a href="mailto:ai@formeta-labs.com" class="text-purple-600 hover:underline">
									ai@formeta-labs.com
								</a>
								<p class="text-sm text-purple-600">Demo técnica en 4h</p>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Service Badges -->
				<div class="bg-white p-6 border-2 border-formeta-primary">
					<h3 class="text-xl font-bold text-formeta-text mb-4">Servicios Disponibles</h3>
					<div class="space-y-3">
						{#each services as service}
							<div class="flex items-center justify-between">
								<span class="text-sm text-formeta-text">{service.name.split(' (')[0]}</span>
								<span class="text-xs px-2 py-1 {getServiceBadgeClass(service)}">
									{getServiceBadge(service)}
								</span>
							</div>
						{/each}
					</div>
				</div>
				
				<!-- Response Time Guarantee -->
				<div class="bg-formeta-primary p-6 text-white">
					<div class="flex items-center gap-3 mb-4">
						<Icon name="zap" size={24} class="text-formeta-primary" />
						<h3 class="text-xl font-bold">Garantía de Respuesta</h3>
					</div>
					<div class="space-y-3 text-sm">
						<div class="flex justify-between">
							<span>🚨 VeriFactu Crítico:</span>
							<span class="font-bold">2 horas</span>
						</div>
						<div class="flex justify-between">
							<span>🤖 IA & Demos:</span>
							<span class="font-bold">4 horas</span>
						</div>
						<div class="flex justify-between">
							<span class="flex items-center gap-2">
								<Icon name="briefcase" size={16} class="text-formeta-primary" />
								<span>Consulta Enterprise:</span>
							</span>
							<span class="font-bold">24 horas</span>
						</div>
						<div class="flex justify-between">
							<span class="flex items-center gap-2">
								<Icon name="phone" size={16} class="text-formeta-primary" />
								<span>Soporte General:</span>
							</span>
							<span class="font-bold">48 horas</span>
						</div>
					</div>
					<p class="text-xs text-white/80 mt-4">
						*Tiempos de respuesta en días laborables. 
						Proyectos críticos pueden requerir SLA personalizado.
					</p>
				</div>
				
				<!-- Location & Legal -->
				<div class="bg-gray-50 p-6 border-2 border-gray-200">
					<div class="flex items-center gap-3 mb-4">
						<Icon name="map-pin" size={24} class="text-formeta-primary" />
						<h3 class="text-xl font-bold text-formeta-text">Información Legal</h3>
					</div>
					<div class="space-y-2 text-sm text-formeta-text">
						<p><strong>Formeta Labs S.L.</strong></p>
						<p>CIF: B-XXXXXXXX</p>
						<p>Madrid, España</p>
						<p>Registro Mercantil de Madrid</p>
					</div>
					<div class="mt-4 pt-4 border-t border-gray-300">
						<div class="text-xs text-formeta-text/70">
							<div class="flex items-center gap-2 mb-2">
								<Icon name="lock" size={16} class="text-formeta-primary" />
								<strong>Datos 100% en España</strong>
							</div>
							<div>
								Cumplimiento RGPD, LOPD e ISO 27001.<br>
								Soberanía digital garantizada.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Alternative Contact Methods -->
<section class="py-20 bg-gradient-to-br from-formeta-primary to-formeta-secondary text-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-8">
				¿Prefieres Hablar Directamente?
			</h2>
			<p class="text-xl text-white/90 mb-12">
				Agenda una <strong>videollamada técnica gratuita</strong> de 30 minutos con nuestros especialistas. 
				Sin compromiso, solo valor técnico real.
			</p>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
					<div class="text-4xl mb-4">🤖</div>
					<h3 class="text-2xl font-bold mb-4">Demo IA Empresarial</h3>
					<p class="text-white/90 mb-6">
						Demostración en vivo de nuestro sistema de IA local con tus propios documentos. 
						Verás el ROI inmediato.
					</p>
					<a href="https://calendly.com/formeta-labs/demo-ia" 
					   target="_blank" 
					   class="bg-white text-formeta-primary px-6 py-3 font-bold hover:bg-white/90 transition-all duration-200">
						AGENDAR DEMO IA
					</a>
				</div>
				
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
					<div class="mb-4">
						<Icon name="scale" size={48} class="text-formeta-primary" />
					</div>
					<h3 class="text-2xl font-bold mb-4">Consulta VeriFactu</h3>
					<p class="text-white/90 mb-6">
						Assessment gratuito de compliance VeriFactu. Analizamos tu situación actual y 
						te damos roadmap específico.
					</p>
					<a href="https://calendly.com/formeta-labs/verifactu-assessment" 
					   target="_blank" 
					   class="bg-red-500 text-white px-6 py-3 font-bold hover:bg-red-600 transition-all duration-200">
						ASSESSMENT VERIFACTU
					</a>
				</div>
			</div>
			
			<div class="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 p-6">
				<div class="flex items-center gap-3 mb-4">
					<Icon name="phone" size={24} class="text-formeta-primary" />
					<h4 class="text-xl font-bold">Llamada de Urgencia</h4>
				</div>
				<p class="text-white/90 mb-4">
					Para proyectos críticos que requieren atención inmediata. 
					Disponible Lun-Vie 9:00-18:00 (CET).
				</p>
				<a href="tel:+34-600-000-000" 
				   class="bg-yellow-500 text-black px-6 py-3 font-bold hover:bg-yellow-400 transition-all duration-200">
					+34 600 000 000
				</a>
			</div>
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
	
	.form-label {
		display: block;
		font-weight: 600;
		font-size: 14px;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		color: #333333;
		margin-bottom: 8px;
	}
	
	.input-pixel {
		width: 100%;
		padding: 12px 16px;
		font-size: 16px;
		border: 2px solid #333333;
		background: white;
		color: #333333;
		transition: border-color 0.2s ease;
	}
	
	.input-pixel:focus {
		outline: none;
		border-color: #4A90E2;
	}
	
	.input-pixel:required:invalid {
		border-color: #dc2626;
	}
	
	.input-pixel:required:valid {
		border-color: #16a34a;
	}
</style>
