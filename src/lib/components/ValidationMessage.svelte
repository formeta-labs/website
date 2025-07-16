<!-- src/lib/components/ValidationMessage.svelte -->
<script lang="ts">
	export let message: string = '';
	export let type: 'error' | 'warning' | 'success' = 'error';
	export let show: boolean = true;
	
	$: iconName = type === 'error' ? 'alert-triangle' : type === 'warning' ? 'alert-circle' : 'check-circle';
	$: bgColor = type === 'error' ? 'bg-red-50' : type === 'warning' ? 'bg-yellow-50' : 'bg-green-50';
	$: textColor = type === 'error' ? 'text-red-700' : type === 'warning' ? 'text-yellow-700' : 'text-green-700';
	$: borderColor = type === 'error' ? 'border-red-200' : type === 'warning' ? 'border-yellow-200' : 'border-green-200';
</script>

{#if show && message}
	<div class="{bgColor} {textColor} {borderColor} border rounded-md p-3 flex items-start space-x-2 transition-all duration-300">
		<div class="flex-shrink-0 mt-0.5">
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if type === 'error'}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.924-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
				{:else if type === 'warning'}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				{/if}
			</svg>
		</div>
		<div class="flex-1 text-sm">
			{@html message.replace(/\n/g, '<br>')}
		</div>
	</div>
{/if}
