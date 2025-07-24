<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { browser } from '$app/environment';
	import Icon from '$lib/components/Icon.svelte';
	
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
			class="close-button absolute top-4 right-4 text-white/60 hover:text-white text-24"
			on:click={closeModal}
			aria-label="Cerrar modal"
		>
			×
		</button>
		
		<!-- Header -->
		<div class="flex items-center mb-6">
			<div class="service-modal-icon bg-gradient-to-br {service.gradient} mr-4">
				<Icon name={service.icon} size={28} className="text-white" />
			</div>
			<h2 id="modal-title" class="text-36 font-semibold text-white">
				{service.title}
			</h2>
		</div>
		
		<!-- Description -->
		<p class="text-16 text-white/80 mb-6 leading-relaxed">
			{service.description}
		</p>
		
		<!-- Pricing & Timeline -->
		{#if service.pricing && service.timeline}
			<div class="service-meta-modal mb-6">
				<div class="flex justify-between items-center">
					<div class="pricing-info">
						<span class="text-14 text-white/60 uppercase tracking-wider">Precio</span>
						<span class="text-16 font-semibold text-formeta-primary ml-2">{service.pricing}</span>
					</div>
					<div class="timeline-info">
						<span class="text-14 text-white/60 uppercase tracking-wider">Timeline</span>
						<span class="text-16 font-semibold text-white/90 ml-2">{service.timeline}</span>
					</div>
				</div>
			</div>
		{/if}
		
		<!-- Variants -->
		{#if service.variants && service.variants.length > 0}
			<div class="mb-6">
				<h3 class="text-16 font-semibold text-white mb-3 uppercase tracking-pixel">
					Variantes
				</h3>
				<ul class="space-y-3">
					{#each service.variants as variant}
						<li class="flex items-start variant-item">
							<div class="variant-bullet">
								<Icon name="check" size={14} className="text-formeta-primary" />
							</div>
							<span class="text-14 text-white/90">{variant}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		
		<!-- Features -->
		{#if service.features && service.features.length > 0}
			<div class="mb-8">
				<h3 class="text-16 font-semibold text-white mb-3 uppercase tracking-pixel">
					Características
				</h3>
				<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
					{#each service.features as feature}
						<li class="flex items-start feature-item">
							<div class="feature-bullet">
								<Icon name="star" size={14} className="text-yellow-400" />
							</div>
							<span class="text-14 text-white/90">{feature}</span>
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
		background: rgba(15, 23, 42, 0.85);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 50;
		padding: 1rem;
		animation: fadeIn 0.3s ease-out;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	.modal-content {
		background: rgba(15, 23, 42, 0.95);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 20px;
		padding: 2rem;
		max-width: 42rem;
		width: 100%;
		position: relative;
		box-shadow: 
			0 24px 48px rgba(0, 0, 0, 0.3),
			0 0 0 1px rgba(255, 255, 255, 0.05),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		max-height: 90vh;
		overflow-y: auto;
		animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
	
	.close-button {
		background: none;
		border: none;
		cursor: pointer;
		font-family: 'Geist', system-ui, sans-serif;
		transition: color 0.2s ease;
	}
	
	.service-modal-icon {
		width: 56px;
		height: 56px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 8px 16px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
	}

	.service-meta-modal {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		padding: 16px 20px;
	}

	.variant-item,
	.feature-item {
		align-items: flex-start;
		gap: 12px;
		padding: 8px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.variant-item:last-child,
	.feature-item:last-child {
		border-bottom: none;
	}

	.variant-bullet,
	.feature-bullet {
		width: 20px;
		height: 20px;
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.08);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 2px;
	}
	
	.tracking-pixel {
		letter-spacing: 1.2px;
	}
	
	.btn-solicitar {
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 600;
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		background: rgba(0, 122, 255, 0.9);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(0, 122, 255, 0.3);
		border-radius: 10px;
		color: white;
		padding: 14px 28px;
		transition: all 0.3s ease;
		box-shadow: 
			0 6px 12px rgba(0, 122, 255, 0.25),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		cursor: pointer;
		flex: 1;
	}
	
	.btn-solicitar:hover {
		background: #007AFF;
		transform: translateY(-2px);
		box-shadow: 
			0 8px 16px rgba(0, 122, 255, 0.35),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
	}
	
	.btn-cancel {
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 10px;
		color: rgba(255, 255, 255, 0.8);
		padding: 14px 28px;
		transition: all 0.3s ease;
		box-shadow: 
			0 4px 8px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
		cursor: pointer;
		flex: 1;
	}
	
	.btn-cancel:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.3);
		color: white;
		transform: translateY(-1px);
		box-shadow: 
			0 6px 12px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
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
	
	/* Mobile responsive improvements */
	@media (max-width: 640px) {
		.modal-content {
			padding: 1.5rem;
			border-radius: 16px;
		}
		
		.text-36 {
			font-size: 28px;
		}
		
		.service-modal-icon {
			width: 48px;
			height: 48px;
		}
		
		.btn-solicitar,
		.btn-cancel {
			padding: 12px 20px;
			font-size: 13px;
		}
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.modal-backdrop,
		.modal-content,
		.service-modal-icon,
		.btn-solicitar,
		.btn-cancel {
			animation: none;
			transition: none;
		}
		
		.btn-solicitar:hover,
		.btn-cancel:hover {
			transform: none;
		}
	}
</style>
