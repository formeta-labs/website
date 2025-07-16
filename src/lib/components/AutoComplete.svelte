<!-- src/lib/components/AutoComplete.svelte -->
<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	
	export let value: string = '';
	export let suggestions: string[] = [];
	export let placeholder: string = '';
	export let label: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let maxSuggestions: number = 5;
	
	const dispatch = createEventDispatcher();
	
	let inputElement: HTMLInputElement;
	let showSuggestions = false;
	let filteredSuggestions: string[] = [];
	let selectedIndex = -1;
	let inputFocused = false;
	
	$: {
		if (value && suggestions.length > 0) {
			filteredSuggestions = suggestions
				.filter(suggestion => 
					suggestion.toLowerCase().includes(value.toLowerCase()) && 
					suggestion.toLowerCase() !== value.toLowerCase()
				)
				.slice(0, maxSuggestions);
			
			showSuggestions = filteredSuggestions.length > 0 && inputFocused;
		} else {
			filteredSuggestions = [];
			showSuggestions = false;
		}
	}
	
	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
		selectedIndex = -1;
		dispatch('input', { value });
	}
	
	function handleFocus() {
		inputFocused = true;
	}
	
	function handleBlur() {
		// Delay to allow click on suggestions
		setTimeout(() => {
			inputFocused = false;
			showSuggestions = false;
		}, 200);
	}
	
	function handleKeyDown(event: KeyboardEvent) {
		if (!showSuggestions) return;
		
		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				selectedIndex = selectedIndex < filteredSuggestions.length - 1 ? selectedIndex + 1 : 0;
				break;
			case 'ArrowUp':
				event.preventDefault();
				selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : filteredSuggestions.length - 1;
				break;
			case 'Enter':
				event.preventDefault();
				if (selectedIndex >= 0 && selectedIndex < filteredSuggestions.length) {
					selectSuggestion(filteredSuggestions[selectedIndex]);
				}
				break;
			case 'Escape':
				event.preventDefault();
				showSuggestions = false;
				selectedIndex = -1;
				inputElement.blur();
				break;
		}
	}
	
	function selectSuggestion(suggestion: string) {
		value = suggestion;
		showSuggestions = false;
		selectedIndex = -1;
		inputFocused = false;
		dispatch('input', { value });
		dispatch('select', { value: suggestion });
	}
	
	onMount(() => {
		// Focus input if needed
		if (inputElement && !disabled) {
			inputElement.addEventListener('focus', handleFocus);
			inputElement.addEventListener('blur', handleBlur);
		}
	});
</script>

<div class="autocomplete-container">
	{#if label}
		<label for={label} class="form-label">
			{label} {#if required}<span class="text-red-500">*</span>{/if}
		</label>
	{/if}
	
	<div class="relative">
		<input
			bind:this={inputElement}
			type="text"
			id={label}
			bind:value
			on:input={handleInput}
			on:keydown={handleKeyDown}
			{placeholder}
			{required}
			{disabled}
			class="input-pixel w-full"
			autocomplete="off"
		/>
		
		{#if showSuggestions && filteredSuggestions.length > 0}
			<div 
				class="absolute z-50 w-full bg-white border-2 border-formeta-primary mt-1 max-h-60 overflow-y-auto"
				transition:fly={{ y: -10, duration: 200 }}
			>
				{#each filteredSuggestions as suggestion, index}
					<button
						type="button"
						class="w-full text-left px-4 py-3 hover:bg-formeta-primary hover:text-white transition-colors duration-150 border-b border-gray-200 last:border-b-0 {index === selectedIndex ? 'bg-formeta-primary text-white' : ''}"
						on:click={() => selectSuggestion(suggestion)}
					>
						{suggestion}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.autocomplete-container {
		position: relative;
		width: 100%;
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
	
	.input-pixel:disabled {
		background-color: #f5f5f5;
		cursor: not-allowed;
		opacity: 0.7;
	}
</style>
