<!-- src/lib/components/LoadingSpinner.svelte -->
<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let color: string = 'text-formeta-primary';
	
	$: spinnerSize = size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-6 h-6' : 'w-8 h-8';
</script>

<div class="inline-flex items-center">
	<svg class="{spinnerSize} {color} animate-spin" fill="none" viewBox="0 0 24 24">
		<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
		<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
	</svg>
	<span class="ml-2 text-sm {color}">
		<slot>Enviando...</slot>
	</span>
</div>
