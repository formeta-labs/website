<!-- src/lib/components/FormSummary.svelte -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import type { ContactFormData } from '$lib/types/contact';
	
	export let formData: ContactFormData;
	export let show: boolean = false;
	
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
	
	const priorities = [
		{ id: 'normal', name: 'Normal' },
		{ id: 'high', name: 'Alta' },
		{ id: 'urgent', name: 'Urgente' }
	];
	
	function getServiceName(id: string | undefined) {
		return services.find(s => s.id === id)?.name || id || 'No especificado';
	}
	
	function getProjectTypeName(id: string | undefined) {
		return projectTypes.find(p => p.id === id)?.name || id || 'No especificado';
	}
	
	function getBudgetName(id: string | undefined) {
		return budgetRanges.find(b => b.id === id)?.name || id || 'No especificado';
	}
	
	function getTimelineName(id: string | undefined) {
		return timelineOptions.find(t => t.id === id)?.name || id || 'No especificado';
	}
	
	function getPriorityName(id: string | undefined) {
		return priorities.find(p => p.id === id)?.name || id || 'Normal';
	}
	
	function getExpectedResponseTime() {
		if (formData.service === 'verifactu') return '2 horas';
		if (formData.service === 'ia-local' || formData.service === 'audit') return '4 horas';
		return '24 horas';
	}
	
	function getServiceIcon() {
		if (formData.service === 'verifactu') return '🚨';
		if (formData.service === 'ia-local') return '🤖';
		if (formData.service === 'crm-enterprise') return '👥';
		if (formData.service === 'web-development') return '💻';
		if (formData.service === 'automation') return '⚙️';
		if (formData.service === 'consulting') return '💡';
		if (formData.service === 'audit') return '🔍';
		return '🎯';
	}
</script>

{#if show}
	<div 
		class="form-summary bg-gradient-to-br from-formeta-primary to-formeta-secondary text-white p-6 rounded-lg mb-6"
		transition:fly={{ y: -20, duration: 300 }}
	>
		<div class="flex items-center gap-3 mb-4">
			<Icon name="check-circle" size={24} className="text-green-400" />
			<h3 class="text-xl font-bold">Resumen de tu Solicitud</h3>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<!-- Contact Information -->
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
				<h4 class="font-bold text-lg mb-3 flex items-center gap-2">
					<Icon name="user" size={20} className="text-white" />
					Información de Contacto
				</h4>
				<div class="space-y-2 text-sm">
					<div><span class="font-medium">Nombre:</span> {formData.name}</div>
					<div><span class="font-medium">Email:</span> {formData.email}</div>
					<div><span class="font-medium">Empresa:</span> {formData.company}</div>
					{#if formData.position}
						<div><span class="font-medium">Cargo:</span> {formData.position}</div>
					{/if}
					{#if formData.phone}
						<div><span class="font-medium">Teléfono:</span> {formData.phone}</div>
					{/if}
				</div>
			</div>
			
			<!-- Project Details -->
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
				<h4 class="font-bold text-lg mb-3 flex items-center gap-2">
					<Icon name="briefcase" size={20} className="text-white" />
					Detalles del Proyecto
				</h4>
				<div class="space-y-2 text-sm">
					<div class="flex items-center gap-2">
						<span class="text-xl">{getServiceIcon()}</span>
						<span><strong>Servicio:</strong> {getServiceName(formData.service)}</span>
					</div>
					{#if formData.projectType}
						<div><span class="font-medium">Tipo:</span> {getProjectTypeName(formData.projectType)}</div>
					{/if}
					{#if formData.budget}
						<div><span class="font-medium">Presupuesto:</span> {getBudgetName(formData.budget)}</div>
					{/if}
					{#if formData.timeline}
						<div><span class="font-medium">Timeline:</span> {getTimelineName(formData.timeline)}</div>
					{/if}
					<div><span class="font-medium">Prioridad:</span> {getPriorityName(formData.priority)}</div>
				</div>
			</div>
		</div>
		
		<!-- Message Preview -->
		<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-4">
			<h4 class="font-bold text-lg mb-3 flex items-center gap-2">
				<Icon name="message-circle" size={20} className="text-white" />
				Descripción del Proyecto
			</h4>
			<p class="text-sm bg-white/10 p-3 rounded italic">
				{formData.message.length > 150 
					? formData.message.substring(0, 150) + '...' 
					: formData.message}
			</p>
		</div>
		
		<!-- Response Time -->
		<div class="bg-green-500/20 backdrop-blur-sm rounded-lg p-4 mt-4 border border-green-400/30">
			<div class="flex items-center gap-3">
				<Icon name="clock" size={20} className="text-green-400" />
				<div>
					<h4 class="font-bold">Tiempo de Respuesta Estimado</h4>
					<p class="text-sm opacity-90">
						Te contactaremos en menos de <strong>{getExpectedResponseTime()}</strong>
					</p>
				</div>
			</div>
		</div>
		
		<!-- Next Steps -->
		<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-4">
			<h4 class="font-bold text-lg mb-3 flex items-center gap-2">
				<Icon name="arrow-right" size={20} className="text-white" />
				Próximos Pasos
			</h4>
			<div class="space-y-2 text-sm">
				<div class="flex items-center gap-2">
					<div class="w-2 h-2 bg-green-400 rounded-full"></div>
					<span>Análisis inicial de tu solicitud</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="w-2 h-2 bg-blue-400 rounded-full"></div>
					<span>Preparación de propuesta personalizada</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="w-2 h-2 bg-purple-400 rounded-full"></div>
					<span>Contacto directo con especialista</span>
				</div>
				{#if formData.service === 'verifactu'}
					<div class="flex items-center gap-2">
						<div class="w-2 h-2 bg-red-400 rounded-full"></div>
						<span>Assessment de compliance urgente</span>
					</div>
				{:else if formData.service === 'ia-local'}
					<div class="flex items-center gap-2">
						<div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
						<span>Agendado de demo técnica personalizada</span>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.form-summary {
		position: relative;
		overflow: hidden;
	}
	
	.form-summary::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
		pointer-events: none;
	}
</style>
