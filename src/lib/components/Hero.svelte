<script lang="ts">
	// Company stats for homepage
	const companyStats = [
		{ label: 'COMPLIANCE', value: '15+', description: 'Empresas VeriFactu' },
		{ label: 'RESPUESTA', value: '<2h', description: 'Garantía técnica' },
		{ label: 'SOBERANÍA', value: '100%', description: 'Datos locales' },
		{ label: 'PROYECTOS', value: '50+', description: 'Enterprise exitosos' }
	];
	
	function handleCTAClick() {
		window.location.href = '/contacto';
	}
	
	function handleServicesClick() {
		window.location.href = '/servicios';
	}
</script>

<!-- Hero Section -->
<section class="relative min-h-[70vh] bg-gradient-to-br from-formeta-text via-formeta-primary to-formeta-secondary overflow-hidden">
	<!-- Enhanced Background Patterns -->
	<div class="absolute inset-0 opacity-30">
		<div class="pattern-grid-enhanced h-full w-full"></div>
	</div>
	
	<!-- Glassmorphism Background Layer -->
	<div class="glassmorphism-background"></div>
	
	<!-- Enhanced Floating Technical Elements -->
	<div class="absolute top-20 left-20 floating-indicator">
		FORMETA.LABS
	</div>
	<div class="absolute top-32 right-32 floating-indicator" style="animation-delay: 2s;">
		VERIFACTU.2025
	</div>
	<div class="absolute bottom-32 left-32 floating-indicator" style="animation-delay: 4s;">
		LOCAL.AI.READY
	</div>
	
	<div class="relative z-10 container-formeta flex items-center min-h-[70vh]">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<span class="text-white/80 text-body font-mono">///</span>
				<span class="text-white/80 text-body font-mono font-medium tracking-wider">LABORATORIO DE INNOVACIÓN DIGITAL</span>
			</div>
			
			<h1 class="text-display-large md:text-display-large font-bold text-white mb-8 leading-tight">
				FORMETA
				<br>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-formeta-primary to-formeta-accent">
					.LABS
				</span>
			</h1>
			
			<p class="text-body-large text-white/90 mb-8 max-w-2xl leading-relaxed">
				<strong>Especialistas en digitalización empresarial</strong> con enfoque en 
				<strong>cumplimiento VeriFactu</strong>, <strong>IA local empresarial</strong> y 
				<strong>soberanía de datos</strong> al 100%.
			</p>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
				{#each companyStats as stat}
					<div class="stats-card">
						<div class="text-3xl font-bold text-white mb-1">{stat.value}</div>
						<div class="text-sm text-white/80 font-bold">{stat.label}</div>
						<div class="text-xs text-white/60">{stat.description}</div>
					</div>
				{/each}
			</div>
			
			<div class="flex flex-wrap gap-4">
				<button 
					on:click={handleCTAClick}
					class="hero-cta-primary"
				>
					CONSULTA TÉCNICA GRATUITA
				</button>
				<button 
					on:click={handleServicesClick}
					class="hero-cta-secondary"
				>
					VER SERVICIOS ENTERPRISE
				</button>
			</div>
			
			<div class="flex flex-wrap gap-3 mt-6">
				<span class="status-badge bg-red-500/20 border border-red-400 text-red-200 px-3 py-1 text-sm font-mono">
					VERIFACTU.CRITICAL
				</span>
				<span class="status-badge bg-green-500/20 border border-green-400 text-green-200 px-3 py-1 text-sm font-mono">
					LOCAL.AI.READY
				</span>
				<span class="status-badge bg-blue-500/20 border border-blue-400 text-blue-200 px-3 py-1 text-sm font-mono">
					RESPONSE.2H
				</span>
			</div>
		</div>
	</div>
</section>

<style>
	/* Enhanced Glassmorphism Background */
	.glassmorphism-background {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		z-index: -1;
	}

	/* Modern floating indicators style from web-development */
	.floating-indicator {
		position: absolute;
		background: rgba(248, 250, 252, 0.15);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		padding: 12px 20px;
		display: flex;
		align-items: center;
		gap: 8px;
		color: white;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
		animation: floatGlow 6s ease-in-out infinite;
		box-shadow: 
			0 8px 32px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	@keyframes floatGlow {
		0%, 100% { 
			transform: translateY(0px);
			box-shadow: 
				0 8px 32px rgba(0, 0, 0, 0.1),
				inset 0 1px 0 rgba(255, 255, 255, 0.1);
		}
		25% { 
			transform: translateY(-8px);
			box-shadow: 
				0 12px 40px rgba(0, 122, 255, 0.15),
				inset 0 1px 0 rgba(255, 255, 255, 0.2);
		}
		50% { 
			transform: translateY(-4px);
			box-shadow: 
				0 10px 36px rgba(255, 107, 107, 0.12),
				inset 0 1px 0 rgba(255, 255, 255, 0.15);
		}
		75% { 
			transform: translateY(-10px);
			box-shadow: 
				0 14px 44px rgba(100, 116, 139, 0.1),
				inset 0 1px 0 rgba(255, 255, 255, 0.18);
		}
	}

	/* Modern CTA Button Styles */
	.hero-cta-primary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 18px 32px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 600;
		font-size: 16px;
		background: rgba(248, 250, 252, 0.95);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 8px;
		color: #007AFF;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}

	.hero-cta-primary:hover {
		background: #007AFF;
		color: white;
		border-color: #007AFF;
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 122, 255, 0.3);
	}

	.hero-cta-secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 18px 32px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 600;
		font-size: 16px;
		background: rgba(248, 250, 252, 0.1);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 8px;
		color: white;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}

	.hero-cta-secondary:hover {
		background: rgba(248, 250, 252, 0.2);
		border-color: rgba(255, 255, 255, 0.5);
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
	}

	/* Enhanced Stats Cards */
	.stats-card {
		background: rgba(248, 250, 252, 0.15);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		padding: 16px;
		text-align: center;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
		box-shadow: 
			0 8px 16px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.stats-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: -1;
	}

	.stats-card:hover {
		transform: translateY(-2px);
		border-color: rgba(255, 255, 255, 0.3);
		box-shadow: 
			0 12px 24px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
	}

	.stats-card:hover::before {
		opacity: 1;
	}

	/* Enhanced Pattern Grid */
	.pattern-grid-enhanced {
		background-image: 
			linear-gradient(90deg, rgba(0, 122, 255, 0.04) 1px, transparent 1px),
			linear-gradient(rgba(255, 107, 107, 0.03) 1px, transparent 1px),
			radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
		background-size: 24px 24px, 24px 24px, 32px 32px;
		animation: gridShiftEnhanced 25s ease-in-out infinite;
	}

	@keyframes gridShiftEnhanced {
		0%, 100% { 
			background-position: 0 0, 0 0, 0 0; 
			opacity: 0.3;
		}
		33% { 
			background-position: 12px 12px, 0 0, 16px 16px; 
			opacity: 0.5;
		}
		66% { 
			background-position: 24px 0, 12px 12px, 32px 0; 
			opacity: 0.4;
		}
	}

	/* Status Badge Enhancements */
	.status-badge {
		position: relative;
		overflow: hidden;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		box-shadow: 
			0 2px 8px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
	}

	.status-badge::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: -1;
	}

	.status-badge:hover {
		transform: translateY(-1px);
		box-shadow: 
			0 4px 12px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.3);
	}

	.status-badge:hover::before {
		opacity: 1;
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.pattern-grid-enhanced,
		.floating-indicator,
		.stats-card,
		.status-badge,
		.hero-cta-primary,
		.hero-cta-secondary {
			animation: none;
			transition: none;
		}
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.floating-indicator {
			position: static;
			display: none;
		}

		.stats-card {
			padding: 12px;
		}

		.hero-cta-primary,
		.hero-cta-secondary {
			padding: 14px 24px;
			font-size: 14px;
		}
	}
</style>
