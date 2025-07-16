<!-- src/lib/components/FormField.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ValidationMessage from './ValidationMessage.svelte';
	
	export let type: 'text' | 'email' | 'tel' | 'select' | 'textarea' = 'text';
	export let label: string;
	export let value: string = '';
	export let placeholder: string = '';
	export let required: boolean = false;
	export let options: { id: string; name: string; [key: string]: any }[] = [];
	export let rows: number = 3;
	export let validationFn: ((value: string) => boolean) | null = null;
	export let customErrorMessage: string = '';
	export let showValidation: boolean = false;
	export let disabled: boolean = false;
	
	const dispatch = createEventDispatcher();
	
	let touched = false;
	let validationMessage = '';
	let validationSuccess = false;
	
	$: {
		if (touched && showValidation) {
			validateField();
		}
	}
	
	function validateField() {
		validationMessage = '';
		validationSuccess = false;
		
		if (required && !value.trim()) {
			validationMessage = customErrorMessage || 'Este campo es obligatorio';
			return false;
		}
		
		if (value.trim() && validationFn) {
			if (!validationFn(value)) {
				validationMessage = customErrorMessage || 'El formato no es válido';
				return false;
			}
		}
		
		if (type === 'email' && value.trim()) {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(value)) {
				validationMessage = 'Por favor, introduce un email válido';
				return false;
			}
		}
		
		if (value.trim() && (required || value.length > 0)) {
			validationSuccess = true;
		}
		
		return true;
	}
	
	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
		value = target.value;
		dispatch('input', { value });
		
		if (touched) {
			validateField();
		}
	}
	
	function handleBlur() {
		touched = true;
		validateField();
	}
	
	function handleFocus() {
		if (showValidation) {
			touched = true;
		}
	}
	
	$: fieldClass = `input-pixel ${validationSuccess ? 'border-green-500' : ''} ${validationMessage ? 'border-red-500' : ''}`;
</script>

<div class="form-field">
	<label for={label} class="form-label">{label} {#if required}<span class="text-red-500">*</span>{/if}</label>
	
	{#if type === 'select'}
		<select 
			id={label}
			bind:value
			on:input={handleInput}
			on:blur={handleBlur}
			on:focus={handleFocus}
			{required}
			{disabled}
			class={fieldClass}
		>
			<option value="">{placeholder}</option>
			{#each options as option}
				<option value={option.id}>{option.name}</option>
			{/each}
		</select>
	{:else if type === 'textarea'}
		<textarea
			id={label}
			bind:value
			on:input={handleInput}
			on:blur={handleBlur}
			on:focus={handleFocus}
			{placeholder}
			{required}
			{disabled}
			{rows}
			class="{fieldClass} resize-none"
		></textarea>
	{:else}
		<input
			{type}
			id={label}
			bind:value
			on:input={handleInput}
			on:blur={handleBlur}
			on:focus={handleFocus}
			{placeholder}
			{required}
			{disabled}
			class={fieldClass}
		/>
	{/if}
	
	{#if showValidation && touched}
		<div class="mt-2">
			{#if validationMessage}
				<ValidationMessage message={validationMessage} type="error" show={true} />
			{:else if validationSuccess}
				<ValidationMessage message="✓ Campo válido" type="success" show={true} />
			{/if}
		</div>
	{/if}
</div>

<style>
	.form-field {
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
