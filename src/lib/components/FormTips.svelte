<!-- src/lib/components/FormTips.svelte -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from './Icon.svelte';
	
	export let service: string = '';
	export let message: string = '';
	export let priority: string = 'normal';
	
	$: currentTip = getTipForContext(service, message, priority);
	
	function getTipForContext(service: string, message: string, priority: string) {
		// VeriFactu specific tips
		if (service === 'verifactu') {
			if (message.length < 50) {
				return {
					type: 'warning',
					icon: 'alert-triangle',
					title: '⚡ Solicitud VeriFactu',
					content: 'Para una respuesta más rápida, especifica tu situación actual de facturación, volumen mensual y fecha límite de implementación.'
				};
			}
			return {
				type: 'info',
				icon: 'zap',
				title: '🚨 Respuesta en 2 horas',
				content: 'Tu solicitud VeriFactu recibirá prioridad máxima. Un especialista te contactará inmediatamente.'
			};
		}
		
		// IA Local specific tips
		if (service === 'ia-local') {
			if (message.length < 50) {
				return {
					type: 'info',
					icon: 'brain',
					title: '🤖 Demo IA Personalizada',
					content: 'Menciona qué tipos de documentos manejas, volumen de datos y casos de uso específicos para preparar una demo personalizada.'
				};
			}
			return {
				type: 'success',
				icon: 'check-circle',
				title: '✅ Demo técnica programada',
				content: 'Te contactaremos en 4 horas para agendar una demostración técnica en vivo con tus propios datos.'
			};
		}
		
		// General tips based on message length
		if (message.length < 20) {
			return {
				type: 'info',
				icon: 'edit',
				title: '📝 Describe tu proyecto',
				content: 'Cuéntanos más sobre tu proyecto: objetivos, situación actual, desafíos técnicos y expectativas de ROI.'
			};
		}
		
		if (message.length > 1800) {
			return {
				type: 'warning',
				icon: 'alert-circle',
				title: '📏 Mensaje muy largo',
				content: 'Resume los puntos clave. Tendremos una llamada para profundizar en los detalles.'
			};
		}
		
		// Priority-based tips
		if (priority === 'urgent') {
			return {
				type: 'warning',
				icon: 'clock',
				title: '⏰ Proyecto urgente',
				content: 'Incluye fecha límite, restricciones específicas y personas clave a contactar para acelerar el proceso.'
			};
		}
		
		// Service-specific general tips
		if (service === 'crm-enterprise') {
			return {
				type: 'info',
				icon: 'users',
				title: '👥 CRM Enterprise',
				content: 'Menciona número de usuarios, integraciones necesarias y requerimientos de multi-tenancy.'
			};
		}
		
		if (service === 'web-development') {
			return {
				type: 'info',
				icon: 'code',
				title: '💻 Desarrollo Web',
				content: 'Especifica tecnologías preferidas, funcionalidades clave y si necesitas CMS o e-commerce.'
			};
		}
		
		if (service === 'automation') {
			return {
				type: 'info',
				icon: 'settings',
				title: '⚙️ Automatización',
				content: 'Describe los procesos actuales, tiempo invertido y herramientas que ya utilizas.'
			};
		}
		
		// Default tip for well-formed messages
		if (message.length > 100 && service) {
			return {
				type: 'success',
				icon: 'thumbs-up',
				title: '✅ Información completa',
				content: 'Tu solicitud tiene información suficiente. Te contactaremos pronto con una propuesta personalizada.'
			};
		}
		
		return {
			type: 'info',
			icon: 'info',
			title: '💡 Consejo',
			content: 'Selecciona un servicio y describe tu proyecto para recibir consejos personalizados.'
		};
	}
	
	function getTipClass(type: string) {
		switch (type) {
			case 'warning':
				return 'bg-yellow-50 border-yellow-200 text-yellow-800';
			case 'success':
				return 'bg-green-50 border-green-200 text-green-800';
			case 'info':
				return 'bg-blue-50 border-blue-200 text-blue-800';
			default:
				return 'bg-gray-50 border-gray-200 text-gray-800';
		}
	}
	
	function getIconColor(type: string) {
		switch (type) {
			case 'warning':
				return 'text-yellow-600';
			case 'success':
				return 'text-green-600';
			case 'info':
				return 'text-blue-600';
			default:
				return 'text-gray-600';
		}
	}
</script>

{#if currentTip}
	<div 
		class="form-tip border rounded-lg p-4 transition-all duration-300 {getTipClass(currentTip.type)}"
		transition:fly={{ y: -10, duration: 200 }}
	>
		<div class="flex items-start space-x-3">
			<div class="flex-shrink-0 mt-0.5">
				<Icon name={currentTip.icon} size={20} className={getIconColor(currentTip.type)} />
			</div>
			<div class="flex-1">
				<h4 class="font-medium text-sm mb-1">{currentTip.title}</h4>
				<p class="text-sm opacity-90">{currentTip.content}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.form-tip {
		position: relative;
		overflow: hidden;
	}
	
	.form-tip::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, currentColor, transparent);
		opacity: 0.3;
	}
</style>
