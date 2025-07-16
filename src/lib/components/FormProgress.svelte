<!-- src/lib/components/FormProgress.svelte -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	
	export let currentStep: number = 1;
	export let completedFields: number = 0;
	export let totalFields: number = 8;
	export let formValid: boolean = false;
	
	$: progressPercentage = (completedFields / totalFields) * 100;
	$: stepNames = [
		'Información Personal',
		'Detalles del Proyecto',
		'Envío'
	];
	
	function getStepStatus(index: number) {
		if (index < currentStep - 1) return 'completed';
		if (index === currentStep - 1) return 'current';
		return 'pending';
	}
	
	function getStepClass(status: string) {
		switch (status) {
			case 'completed':
				return 'bg-green-500 text-white border-green-500';
			case 'current':
				return 'bg-formeta-primary text-white border-formeta-primary';
			case 'pending':
				return 'bg-gray-100 text-gray-400 border-gray-300';
			default:
				return 'bg-gray-100 text-gray-400 border-gray-300';
		}
	}
</script>

<div class="form-progress mb-8" transition:fly={{ y: -20, duration: 300 }}>
	<!-- Progress Bar -->
	<div class="mb-6">
		<div class="flex justify-between items-center mb-2">
			<span class="text-sm font-medium text-formeta-text">
				Progreso del formulario
			</span>
			<span class="text-sm font-medium text-formeta-text">
				{completedFields}/{totalFields} campos completados
			</span>
		</div>
		
		<div class="w-full bg-gray-200 rounded-full h-2">
			<div 
				class="bg-formeta-primary h-2 rounded-full transition-all duration-500 ease-out"
				style="width: {progressPercentage}%"
			></div>
		</div>
	</div>
	
	<!-- Step Indicators -->
	<div class="flex items-center justify-between mb-4">
		{#each stepNames as stepName, index}
			<div class="flex items-center">
				<div class="flex flex-col items-center">
					<div class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 {getStepClass(getStepStatus(index))}">
						{#if getStepStatus(index) === 'completed'}
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						{:else}
							{index + 1}
						{/if}
					</div>
					<span class="text-xs mt-1 text-center font-medium {getStepStatus(index) === 'current' ? 'text-formeta-primary' : 'text-gray-500'}">
						{stepName}
					</span>
				</div>
				
				{#if index < stepNames.length - 1}
					<div class="w-20 h-0.5 mx-4 {getStepStatus(index) === 'completed' ? 'bg-green-500' : 'bg-gray-300'} transition-all duration-300"></div>
				{/if}
			</div>
		{/each}
	</div>
	
	<!-- Form Validation Status -->
	{#if formValid}
		<div class="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center" transition:fly={{ y: -10, duration: 200 }}>
			<svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span class="text-green-700 text-sm font-medium">
				¡Formulario completo! Listo para enviar.
			</span>
		</div>
	{:else if completedFields > 0}
		<div class="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center" transition:fly={{ y: -10, duration: 200 }}>
			<svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span class="text-blue-700 text-sm font-medium">
				Completa los campos restantes para enviar tu solicitud.
			</span>
		</div>
	{/if}
</div>

<style>
	.form-progress {
		position: sticky;
		top: 0;
		z-index: 10;
		background: white;
		border-bottom: 1px solid #e5e7eb;
		padding: 1rem;
		margin: -1rem -1rem 1rem -1rem;
	}
</style>
