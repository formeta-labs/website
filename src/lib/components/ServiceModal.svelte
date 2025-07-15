<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { browser } from '$app/environment';
	
	export let service: any;
	
	const dispatch = createEventDispatcher();
	
	function closeModal() {
		dispatch('close');
	}
	
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}
	
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
	
	function handleSolicitar() {
		// Navigate to contact page with service pre-selected
		if (browser) {
			window.location.href = `/contacto?service=${service.id}`;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="modal-backdrop" 
	on:click={handleBackdropClick} 
	on:keydown={handleKeydown}
	role="dialog" 
	aria-modal="true" 
	aria-labelledby="modal-title"
	tabindex="0"
>
	<div class="modal-content">
		<!-- Close Button -->
		<button 
			class="close-button absolute top-4 right-4 text-formeta-light hover:text-formeta-white text-24"
			on:click={closeModal}
			aria-label="Cerrar modal"
		>
			×
		</button>
		
		<!-- Header -->
		<div class="flex items-center mb-6">
			<div class="service-icon text-formeta-action text-48 mr-4">
				{service.icon}
			</div>
			<h2 id="modal-title" class="text-36 font-semibold text-formeta-white">
				{service.title}
			</h2>
		</div>
		
		<!-- Description -->
		<p class="text-16 text-formeta-light mb-6 leading-relaxed">
			{service.description}
		</p>
		
		<!-- Variants -->
		{#if service.variants && service.variants.length > 0}
			<div class="mb-6">
				<h3 class="text-16 font-semibold text-formeta-white mb-3 uppercase tracking-pixel">
					Variantes
				</h3>
				<ul class="space-y-2">
					{#each service.variants as variant}
						<li class="flex items-start">
							<span class="text-formeta-action mr-2 mt-1">▪</span>
							<span class="text-14 text-formeta-light">{variant}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		
		<!-- Features -->
		{#if service.features && service.features.length > 0}
			<div class="mb-8">
				<h3 class="text-16 font-semibold text-formeta-white mb-3 uppercase tracking-pixel">
					Características
				</h3>
				<ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
					{#each service.features as feature}
						<li class="flex items-start">
							<span class="text-formeta-blue mr-2 mt-1">◼</span>
							<span class="text-14 text-formeta-light">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		
		<!-- CTA -->
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<button 
				class="btn-solicitar"
				on:click={handleSolicitar}
			>
				SOLICITAR
			</button>
			<button 
				class="btn-cancel"
				on:click={closeModal}
			>
				CERRAR
			</button>
		</div>
	</div>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 50;
		padding: 1rem;
	}
	
	.modal-content {
		background: #111111;
		border: 2px solid white;
		padding: 2rem;
		max-width: 42rem;
		width: 100%;
		position: relative;
		box-shadow: 6px 6px 0px rgba(255, 255, 255, 0.2);
		max-height: 90vh;
		overflow-y: auto;
	}
	
	.close-button {
		background: none;
		border: none;
		cursor: pointer;
		font-family: 'Geist', system-ui, sans-serif;
		transition: color 0.2s ease;
	}
	
	.service-icon {
		font-family: 'Geist Mono', monospace;
		font-weight: bold;
	}
	
	.tracking-pixel {
		letter-spacing: 1.2px;
	}
	
	.btn-solicitar {
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		border: 2px solid #007AFF;
		background: transparent;
		color: #007AFF;
		padding: 12px 24px;
		transition: all 0.1s ease;
		box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
		cursor: pointer;
		flex: 1;
	}
	
	.btn-solicitar:hover {
		background: #007AFF;
		color: white;
		transform: translate(-1px, -1px);
		box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);
	}
	
	.btn-cancel {
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		border: 2px solid #CCCCCC;
		background: transparent;
		color: #CCCCCC;
		padding: 12px 24px;
		transition: all 0.1s ease;
		box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
		cursor: pointer;
		flex: 1;
	}
	
	.btn-cancel:hover {
		background: #CCCCCC;
		color: #111111;
		transform: translate(-1px, -1px);
		box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);
	}
	
	.text-36 {
		font-size: 36px;
		line-height: 1.2;
	}
	
	.text-48 {
		font-size: 48px;
		line-height: 1.1;
	}
	
	.text-16 {
		font-size: 16px;
		line-height: 1.5;
	}
	
	.text-14 {
		font-size: 14px;
		line-height: 1.4;
	}
	
	.text-24 {
		font-size: 24px;
		line-height: 1.3;
	}
	
	@media (max-width: 640px) {
		.modal-content {
			padding: 1.5rem;
		}
		
		.text-36 {
			font-size: 28px;
		}
		
		.text-48 {
			font-size: 36px;
		}
	}
</style>
