<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ValidationMessage from '$lib/components/ValidationMessage.svelte';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import FormField from '$lib/components/FormField.svelte';
	import AutoComplete from '$lib/components/AutoComplete.svelte';
	import FormProgress from '$lib/components/FormProgress.svelte';
	import FormTips from '$lib/components/FormTips.svelte';
	import FormSummary from '$lib/components/FormSummary.svelte';
	import { contactFormData, contactFormState, setSubmissionState, clearSubmissionMessage } from '$lib/stores/contact';
	import { useContactForm } from '$lib/composables/useContactForm';
	import { getCompanySuggestions, getPositionSuggestions, getEmailSuggestions } from '$lib/data/autocomplete';
	import { tweened } from 'svelte/motion';
	import SEO from '$lib/components/SEO.svelte';
	import { SEO_PAGES, generateLocalBusinessSchema } from '$lib/utils/seo';
	import { cubicOut } from 'svelte/easing';
	import { toast } from '$lib/stores/toast';
	
	let form: HTMLFormElement;
	let showValidation = false;
	
	// Hero metrics animation
	const responseTime = tweened(0, { duration: 2000, easing: cubicOut });
	const satisfaction = tweened(0, { duration: 2000, easing: cubicOut });
	const support = tweened(0, { duration: 2000, easing: cubicOut });
	const experts = tweened(0, { duration: 2000, easing: cubicOut });
	
	// Use stores for reactive state
	$: formData = $contactFormData;
	$: ({ isSubmitting, submitMessage, submitSuccess } = $contactFormState);
	
	// Initialize form handler
	const { submitForm, validateEmail, validateName, validateMessage, validateCompany } = useContactForm();
	
	onMount(() => {
		// Start metrics animation
		setTimeout(() => {
			responseTime.set(2);
			satisfaction.set(98.5);
			support.set(99.9);
			experts.set(4);
		}, 800);
	});
	
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
				updateFormData('service', preSelectedService);
			}
			
			// Set priority based on service
			if (preSelectedService === 'verifactu') {
				updateFormData('priority', 'urgent');
			}
		}
		
		// Animate floating elements
		const animateFloatingElements = () => {
			const heroElements = document.querySelectorAll('[class*="hero-element"]');
			heroElements.forEach((el, index) => {
				if (el instanceof HTMLElement) {
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
		showValidation = true;
		
		// Use toast.promise for automatic loading, success, and error handling
		try {
			await toast.promise(
				submitForm(form),
				{
					loading: 'Enviando tu consulta...',
					success: 'Tu consulta se ha enviado correctamente. Te contactaremos pronto.',
					error: (err) => {
						// Extract meaningful error message
						if (typeof err === 'string') return err;
						if (err?.message) return err.message;
						return 'Error al enviar la consulta. Por favor, inténtalo de nuevo.';
					}
				}
			);
		} catch (error) {
			// Error is already handled by toast.promise
			console.error('Contact form submission failed:', error);
		}
	}
	
	function clearMessage() {
		clearSubmissionMessage();
	}
	
	// Update form data reactively
	function updateFormData(field: string, value: any) {
		contactFormData.update(current => ({
			...current,
			[field]: value
		}));
	}
	
	// Autocomplete handlers
	function handleCompanyInput(event: CustomEvent) {
		updateFormData('company', event.detail.value);
	}
	
	function handlePositionInput(event: CustomEvent) {
		updateFormData('position', event.detail.value);
	}
	
	function handleEmailInput(event: CustomEvent) {
		updateFormData('email', event.detail.value);
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
	
	// Dynamic suggestions based on current input
	$: companySuggestions = getCompanySuggestions(formData.company || '');
	$: positionSuggestions = getPositionSuggestions(formData.position || '');
	$: emailSuggestions = getEmailSuggestions(formData.email || '');
	
	// Form progress tracking
	$: completedFields = [
		formData.name.trim(),
		formData.email.trim(),
		formData.company.trim(),
		formData.service.trim(),
		formData.message.trim()
	].filter(Boolean).length;
	
	$: formValid = Boolean(
		formData.name.trim() && 
		formData.email.trim() && 
		formData.company.trim() && 
		formData.service.trim() && 
		formData.message.trim() && 
		formData.gdprConsent &&
		validateEmail(formData.email) &&
		validateName(formData.name) &&
		validateMessage(formData.message)
	);
	
	$: currentStep = completedFields <= 2 ? 1 : completedFields <= 4 ? 2 : 3;
	
	// Show form summary when form is mostly complete and valid
	$: showFormSummary = formValid && !isSubmitting && completedFields >= 3 && formData.service && formData.message.length > 50;
</script>

<!-- SEO optimizado para página de contacto -->
<SEO 
	title={SEO_PAGES.contacto.title}
	description={SEO_PAGES.contacto.description}
	keywords={SEO_PAGES.contacto.keywords}
	ogType={SEO_PAGES.contacto.ogType}
	ogImage="/images/og/formeta-labs-contacto.jpg"
	schemas={[generateLocalBusinessSchema()]}
/>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-950 via-slate-900 to-red-800 overflow-hidden">
	<!-- Dynamic communication patterns -->
	<div class="absolute inset-0">
		<div class="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-transparent to-red-950/30"></div>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.15),transparent_60%)]"></div>
		<div class="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(239,68,68,0.1)_50%,transparent_60%)]"></div>
		<div class="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-red-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
	</div>
	
	<!-- Floating contact indicator -->
	<div class="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
		<div class="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl shadow-2xl">
			<Icon name="phone" size={20} className="text-orange-400" />
			<span class="text-white font-mono text-sm font-semibold tracking-wide">CONTACTO ENTERPRISE</span>
			<div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
		</div>
	</div>
	
	<!-- Communication ASCII patterns -->
	<div class="absolute inset-0 font-mono text-orange-400/20 select-none pointer-events-none">
		<div class="absolute top-20 left-16 text-4xl animate-pulse">@</div>
		<div class="absolute top-40 right-20 text-3xl animate-bounce delay-1000">#</div>
		<div class="absolute bottom-24 left-12 animate-pulse delay-500">
			<Icon name="mail" size={48} className="text-blue-400/30" />
		</div>
		<div class="absolute bottom-40 right-16 animate-bounce delay-700">
			<Icon name="zap" size={24} className="text-yellow-400/40" />
		</div>
		<div class="absolute top-1/2 left-8 text-xl opacity-40">{'>>> '}</div>
		<div class="absolute top-1/3 right-8 text-xl opacity-40">{' <<<'}</div>
	</div>
	
	<div class="relative container mx-auto px-6 text-center text-white z-10">
		<!-- Contact header design -->
		<div class="mb-10">
			<div class="flex items-center justify-center gap-4 mb-8">
				<span class="w-16 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></span>
				<span class="text-orange-300/80 text-sm font-mono font-medium tracking-[0.3em] uppercase">CONSULTA ESTRATÉGICA</span>
				<span class="w-16 h-px bg-gradient-to-l from-transparent via-orange-400 to-transparent"></span>
			</div>
			
			<h1 class="text-6xl md:text-8xl font-bold mb-6 leading-none">
				<span class="text-white">Contacto</span>
				<span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-500">Enterprise</span>
			</h1>
			
			<div class="max-w-4xl mx-auto mb-8">
				<p class="text-xl md:text-2xl text-orange-200 font-medium mb-4 leading-relaxed">
					<strong>Especialistas técnicos</strong> en VeriFactu, IA local y desarrollo enterprise
					<strong class="text-orange-400">Respuesta garantizada</strong>
				</p>
				<p class="text-lg text-white/80 leading-relaxed">
					Consulta Técnica Gratuita • Análisis de Requisitos • Presupuesto Personalizado • Soporte 24/7
				</p>
			</div>
		</div>
		
		<!-- Contact metrics design -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">
					{'<'}{Math.round($responseTime)}h
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Respuesta</div>
				<div class="text-xs text-white/60">Garantizada</div>
			</div>
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors">
					{$satisfaction.toFixed(1)}%
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Satisfacción</div>
				<div class="text-xs text-white/60">Cliente</div>
			</div>
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">
					{$support.toFixed(1)}%
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Disponibilidad</div>
				<div class="text-xs text-white/60">SLA</div>
			</div>
			<div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
				<div class="text-3xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors">
					{Math.round($experts)}
				</div>
				<div class="text-sm text-white/90 font-medium mb-1">Especialistas</div>
				<div class="text-xs text-white/60">Técnicos</div>
			</div>
		</div>
		
		<!-- Contact focused CTAs -->
		<div class="flex flex-col sm:flex-row gap-6 justify-center mb-8">
			<a href="#contacto-form" class="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25">
				<span class="flex items-center gap-3">
					INICIAR CONSULTA
					<Icon name="arrow-down" size={16} className="group-hover:translate-y-1 transition-transform" />
				</span>
			</a>
		</div>
		
		<!-- Contact feature badges -->
		<div class="flex flex-wrap gap-4 justify-center">
			<div class="bg-gradient-to-r from-orange-600/20 to-orange-400/10 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 flex items-center gap-2">
				<Icon name="clock" size={16} className="text-orange-400" />
				<span class="text-sm font-medium text-orange-200">Respuesta Rápida</span>
			</div>
			<div class="bg-gradient-to-r from-red-600/20 to-red-400/10 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3 flex items-center gap-2">
				<Icon name="shield-check" size={16} className="text-red-400" />
				<span class="text-sm font-medium text-red-200">VeriFactu Urgente</span>
			</div>
			<div class="bg-gradient-to-r from-green-600/20 to-green-400/10 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 flex items-center gap-2">
				<Icon name="user-check" size={16} className="text-green-400" />
				<span class="text-sm font-medium text-green-200">Consulta Gratuita</span>
			</div>
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section id="contacto-form" class="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
	<!-- Professional background pattern -->
	<div class="absolute inset-0 opacity-10">
		<div class="pattern-formeta h-full w-full"></div>
	</div>
	
	<!-- Floating decorative elements -->
	<div class="absolute top-16 left-16 text-orange-400/30 text-5xl font-mono select-none">@</div>
	<div class="absolute top-32 right-20 text-red-400/25 text-4xl font-mono select-none">#</div>
	<div class="absolute bottom-20 left-20 select-none">
		<Icon name="mail" size={64} className="text-orange-400/20" />
	</div>
	<div class="absolute bottom-16 right-16 select-none">
		<Icon name="zap" size={32} className="text-red-400/30" />
	</div>
	
	<div class="container mx-auto px-6 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			<!-- Enhanced Contact Form -->
			<div class="lg:col-span-2">
				<div class="formeta-card-enterprise">
					<!-- Form Header -->
					<div class="text-center mb-8">
						<div class="flex items-center justify-center gap-3 mb-4">
							<span class="text-orange-500 text-xl font-mono">@</span>
							<h2 class="text-2xl font-bold text-formeta-text uppercase tracking-wide">
								Formulario de Contacto Enterprise
							</h2>
							<span class="text-orange-500 text-xl font-mono">@</span>
						</div>
						<p class="text-formeta-text/70 leading-relaxed">
							<strong>Respuesta garantizada en 2 horas</strong> para consultas técnicas y VeriFactu urgente
						</p>
					</div>
					
					<!-- Form Progress Indicator -->
					<FormProgress 
						{currentStep}
						{completedFields}
						totalFields={5}
						{formValid}
					/>
					
					<form bind:this={form} on:submit|preventDefault={handleSubmit} class="space-y-6">
						<!-- Personal Information Row -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormField
								type="text"
								label="Nombre completo"
								bind:value={formData.name}
								placeholder="Tu nombre completo"
								required={true}
								{showValidation}
								validationFn={validateName}
								customErrorMessage="El nombre debe tener entre 2 y 100 caracteres"
							/>
							
							<AutoComplete
								label="Email corporativo"
								bind:value={formData.email}
								placeholder="tu@empresa.com"
								required={true}
								suggestions={emailSuggestions}
								on:input={handleEmailInput}
							/>
						</div>
						
						<!-- Company Information Row -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<AutoComplete
								label="Empresa"
								bind:value={formData.company}
								placeholder="Nombre de tu empresa"
								required={true}
								suggestions={companySuggestions}
								on:input={handleCompanyInput}
							/>
							
							<AutoComplete
								label="Cargo/Posición"
								bind:value={formData.position}
								placeholder="CTO, CEO, IT Manager..."
								required={false}
								suggestions={positionSuggestions}
								on:input={handlePositionInput}
							/>
						</div>
						
						<!-- Contact & Service Row -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormField
								type="tel"
								label="Teléfono"
								bind:value={formData.phone}
								placeholder="+34 XXX XXX XXX"
								required={false}
								{showValidation}
							/>
							
							<FormField
								type="select"
								label="Servicio principal"
								bind:value={formData.service}
								placeholder="Selecciona un servicio"
								required={true}
								{showValidation}
								options={services}
							/>
						</div>
						
						<!-- Project Details Row -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormField
								type="select"
								label="Tipo de proyecto"
								bind:value={formData.projectType}
								placeholder="Selecciona tipo"
								required={false}
								{showValidation}
								options={projectTypes}
							/>
							
							<FormField
								type="select"
								label="Presupuesto estimado"
								bind:value={formData.budget}
								placeholder="Selecciona rango"
								required={false}
								{showValidation}
								options={budgetRanges}
							/>
						</div>
						
						<!-- Timeline & Priority -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormField
								type="select"
								label="Timeline preferido"
								bind:value={formData.timeline}
								placeholder="Selecciona timeline"
								required={false}
								{showValidation}
								options={timelineOptions}
							/>
							
							<FormField
								type="select"
								label="Prioridad del proyecto"
								bind:value={formData.priority}
								placeholder="Selecciona prioridad"
								required={false}
								{showValidation}
								options={[
									{ id: 'normal', name: 'Normal' },
									{ id: 'high', name: 'Alta' },
									{ id: 'urgent', name: 'Urgente' }
								]}
							/>
						</div>
						
						<!-- Message -->
						<FormField
							type="textarea"
							label="Descripción detallada del proyecto"
							bind:value={formData.message}
							placeholder="Describe tu proyecto, objetivos, requisitos técnicos, challenges actuales, expectativas de ROI..."
							required={true}
							{showValidation}
							rows={6}
							validationFn={validateMessage}
							customErrorMessage="La descripción debe tener entre 10 y 2000 caracteres"
						/>
						
						<!-- Smart Tips -->
						<FormTips 
							service={formData.service}
							message={formData.message}
							priority={formData.priority}
						/>
						
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
						
						<!-- Form Summary (shown when form is complete) -->
						{#if showFormSummary}
							<FormSummary {formData} show={showFormSummary} />
						{/if}
						
						<!-- Enhanced Submit Button -->
						<button 
							type="submit" 
							disabled={isSubmitting}
							class="w-full glass-button bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg {isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'}"
						>
							{#if isSubmitting}
								<LoadingSpinner size="md" color="text-white">
									ENVIANDO SOLICITUD...
								</LoadingSpinner>
							{:else}
								{#if formData.service === 'verifactu'}
									🚨 ENVIAR SOLICITUD VERIFACTU URGENTE
								{:else if services.find(s => s.id === formData.service)?.advanced}
									🤖 SOLICITAR DEMO IA EMPRESARIAL
								{:else}
									<div class="flex items-center gap-2">
									<Icon name="briefcase" size={20} className="text-white" />
									<span>ENVIAR CONSULTA ENTERPRISE</span>
								</div>
								{/if}
							{/if}
						</button>
						
						<!-- Submit Message -->
						{#if submitMessage}
							<div class="cursor-pointer" on:click={clearMessage} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && clearMessage()}>
								<ValidationMessage 
									message={submitMessage} 
									type={submitSuccess ? 'success' : 'error'} 
									show={!!submitMessage} 
								/>
								<div class="text-xs mt-2 opacity-70 text-center">Haz clic para cerrar</div>
							</div>
						{/if}
					</form>
				</div>
			</div>
			<!-- Enhanced Contact Info Sidebar -->
			<div class="space-y-6">
				<!-- Service Badges Card -->
				<div class="formeta-card-services">
					<div class="text-center mb-4">
						<h3 class="text-lg font-bold text-formeta-text uppercase tracking-wider">Servicios Disponibles</h3>
						<div class="w-12 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-2"></div>
					</div>
					<div class="space-y-3">
						{#each services as service}
							<div class="service-item">
								<div class="flex items-center justify-between">
									<span class="text-sm text-formeta-text font-medium">{service.name.split(' (')[0]}</span>
									<span class="service-badge-mini {getServiceBadgeClass(service)}">
										{getServiceBadge(service)}
									</span>
								</div>
								{#if service.urgent}
									<div class="text-xs text-red-600 mt-1 font-medium flex items-center gap-1">
										<Icon name="zap" size={12} className="text-red-600" />
										Implementación Express
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
				
				<!-- Response Time Guarantee Card -->
				<div class="formeta-card-guarantee">
					<div class="text-center mb-4">
						<div class="flex items-center justify-center gap-2 mb-2">
							<Icon name="shield-check" size={20} className="text-green-600" />
							<h3 class="text-lg font-bold text-white">Garantía de Respuesta</h3>
						</div>
						<p class="text-sm text-green-100">SLA Enterprise garantizado</p>
					</div>
					<div class="space-y-3">
						<div class="response-time-item">
							<div class="flex items-center justify-between">
								<span class="flex items-center gap-2">
									<span class="text-red-400">🚨</span>
									<span>VeriFactu Crítico</span>
								</span>
								<span class="response-time-badge bg-red-500/20 text-red-200">2 horas</span>
							</div>
						</div>
						<div class="response-time-item">
							<div class="flex items-center justify-between">
								<span class="flex items-center gap-2">
									<span class="text-purple-400">🤖</span>
									<span>IA & Demos</span>
								</span>
								<span class="response-time-badge bg-purple-500/20 text-purple-200">4 horas</span>
							</div>
						</div>
						<div class="response-time-item">
							<div class="flex items-center justify-between">
								<span class="flex items-center gap-2">
									<Icon name="briefcase" size={14} className="text-orange-300" />
									<span>Consulta Enterprise</span>
								</span>
								<span class="response-time-badge bg-orange-500/20 text-orange-200">24 horas</span>
							</div>
						</div>
						<div class="response-time-item">
							<div class="flex items-center justify-between">
								<span class="flex items-center gap-2">
									<Icon name="phone" size={14} className="text-green-300" />
									<span>Soporte General</span>
								</span>
								<span class="response-time-badge bg-green-500/20 text-green-200">48 horas</span>
							</div>
						</div>
					</div>
					<p class="text-xs text-white/80 mt-4">
						*Tiempos de respuesta en días laborables. 
						Proyectos críticos pueden requerir SLA personalizado.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Alternative Contact Methods -->
<section class="py-20 bg-gradient-to-br from-formeta-primary to-formeta-secondary text-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">
				¿Prefieres Hablar Directamente?
			</h2>
			<p class="text-xl text-white/90 mb-12">
				Agenda una <strong>videollamada técnica gratuita</strong> de 30 minutos con nuestros especialistas. 
				Sin compromiso, solo valor técnico real.
			</p>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center rounded-lg">
					<div class="mb-4 flex justify-center">
						<Icon name="brain" size={48} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold mb-4 text-white">Demo IA Empresarial</h3>
					<p class="text-white/90 mb-6">
						Demostración en vivo de nuestro sistema de IA local con tus propios documentos. 
						Verás el ROI inmediato.
					</p>
					<a href="https://calendly.com/formeta-labs/demo-ia" 
					   target="_blank" 
					   class="bg-white text-black px-6 py-3 font-bold hover:bg-white/90 hover:text-black transition-all duration-200 rounded-md">
						AGENDAR DEMO IA
					</a>
				</div>
				
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center rounded-lg">
					<div class="mb-4 flex justify-center">
						<Icon name="scale" size={48} className="text-white" />
					</div>
					<h3 class="text-2xl font-bold mb-4 text-white">Consulta VeriFactu</h3>
					<p class="text-white/90 mb-6">
						Assessment gratuito de compliance VeriFactu. Analizamos tu situación actual y 
						te damos roadmap específico.
					</p>
					<a href="https://calendly.com/formeta-labs/verifactu-assessment" 
					   target="_blank" 
					   class="bg-red-500 text-white px-6 py-3 font-bold hover:bg-red-600 transition-all duration-200 rounded-md">
						AGENDAR VERIFACTU
					</a>
				</div>
			</div>
			

		</div>
	</div>
</section>

<style>
	/* Formeta Enterprise Patterns */
	.pattern-formeta {
		background-image: 
			linear-gradient(45deg, rgba(251,146,60,0.05) 25%, transparent 25%),
			linear-gradient(-45deg, rgba(239,68,68,0.05) 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, rgba(251,146,60,0.05) 75%),
			linear-gradient(-45deg, transparent 75%, rgba(239,68,68,0.05) 75%);
		background-size: 30px 30px;
		background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
		animation: patternShift 20s linear infinite;
	}
	
	@keyframes patternShift {
		0% { background-position: 0 0, 0 15px, 15px -15px, -15px 0px; }
		100% { background-position: 30px 30px, 30px 45px, 45px 15px, 15px 30px; }
	}
	
	/* Enterprise Cards */
	.formeta-card-enterprise {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 2px solid rgba(251, 146, 60, 0.2);
		border-radius: 20px;
		padding: 40px 32px;
		box-shadow: 
			0 25px 50px rgba(0, 0, 0, 0.1),
			0 0 0 1px rgba(255, 255, 255, 0.05),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		position: relative;
		overflow: hidden;
	}
	
	.formeta-card-enterprise::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #fb923c, #ef4444, #fb923c);
		background-size: 200% 100%;
		animation: gradientShift 3s ease-in-out infinite;
	}
	
	@keyframes gradientShift {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}
	
	.formeta-card-contact {
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(16px);
		border: 2px solid rgba(251, 146, 60, 0.3);
		border-radius: 16px;
		padding: 24px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	.formeta-card-contact:hover {
		transform: translateY(-4px);
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
	}
	
	.formeta-card-services {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(16px);
		border: 2px solid rgba(251, 146, 60, 0.2);
		border-radius: 16px;
		padding: 20px;
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.06);
	}
	
	.formeta-card-guarantee {
		background: linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(16, 185, 129, 0.9));
		backdrop-filter: blur(16px);
		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		padding: 20px;
		box-shadow: 
			0 20px 40px rgba(34, 197, 94, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}
	
	/* Contact Method Cards */
	.contact-method-card {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		padding: 16px;
		background: rgba(251, 146, 60, 0.05);
		border: 1px solid rgba(251, 146, 60, 0.2);
		border-radius: 12px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
	}
	
	.contact-method-card:hover {
		background: rgba(251, 146, 60, 0.1);
		border-color: rgba(251, 146, 60, 0.4);
		transform: translateX(4px);
		box-shadow: 0 8px 16px rgba(251, 146, 60, 0.15);
	}
	
	.contact-icon {
		width: 40px;
		height: 40px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
		transition: all 0.3s ease;
	}
	
	.contact-method-card:hover .contact-icon {
		transform: rotate(5deg) scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
	
	.contact-status {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 8px;
	}
	
	/* Service Items */
	.service-item {
		padding: 12px 16px;
		background: rgba(251, 146, 60, 0.05);
		border: 1px solid rgba(251, 146, 60, 0.15);
		border-radius: 8px;
		transition: all 0.2s ease;
	}
	
	.service-item:hover {
		background: rgba(251, 146, 60, 0.1);
		border-color: rgba(251, 146, 60, 0.3);
	}
	
	.service-badge-mini {
		padding: 4px 8px;
		border-radius: 6px;
		font-size: 10px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	/* Response Time Items */
	.response-time-item {
		padding: 12px 16px;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		transition: all 0.2s ease;
	}
	
	.response-time-item:hover {
		background: rgba(255, 255, 255, 0.15);
		transform: translateX(4px);
	}
	
	.response-time-badge {
		padding: 4px 12px;
		border-radius: 12px;
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	/* Form Styles */
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
		border: 2px solid rgba(251, 146, 60, 0.3);
		background: rgba(255, 255, 255, 0.95);
		color: #333333;
		border-radius: 8px;
		transition: all 0.3s ease;
		backdrop-filter: blur(8px);
	}
	
	.input-pixel:focus {
		outline: none;
		border-color: #fb923c;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.1);
	}
	
	.input-pixel:required:invalid {
		border-color: #ef4444;
	}
	
	.input-pixel:required:valid {
		border-color: #22c55e;
	}
	
	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.pattern-formeta,
		.formeta-card-enterprise::before,
		.contact-method-card,
		.contact-icon,
		.service-item,
		.response-time-item {
			animation: none;
			transition: none;
		}
		
		.contact-method-card:hover,
		.contact-method-card:hover .contact-icon,
		.response-time-item:hover {
			transform: none;
		}
	}
	
	/* Mobile responsive */
	@media (max-width: 768px) {
		.formeta-card-enterprise {
			padding: 28px 20px;
			border-radius: 16px;
		}
		
		.formeta-card-contact,
		.formeta-card-services,
		.formeta-card-guarantee {
			padding: 20px 16px;
			border-radius: 12px;
		}
		
		.contact-method-card {
			padding: 12px;
		}
		
		.contact-icon {
			width: 36px;
			height: 36px;
		}
	}
</style>
