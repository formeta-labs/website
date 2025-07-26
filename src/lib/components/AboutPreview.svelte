<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="max-w-6xl mx-auto">
	<div class="text-center mb-16">
		<div class="flex items-center justify-center gap-3 mb-6">
			<span class="text-formeta-primary/60 text-body font-mono">///</span>
			<span class="text-formeta-text/60 text-body font-mono font-medium tracking-wider uppercase">SOBRE FORMETA LABS</span>
			<span class="text-formeta-primary/60 text-body font-mono">///</span>
		</div>
		
		<h2 class="text-display font-bold text-formeta-text mb-6">
			Laboratorio de <span class="text-transparent bg-clip-text bg-gradient-to-r from-formeta-primary to-formeta-accent">Innovación Digital</span>
		</h2>
		
		<p class="text-body-large text-formeta-text/80 leading-relaxed mb-12 max-w-4xl mx-auto">
			Somos un estudio tecnológico especializado en <strong>digitalización empresarial</strong> que combina 
			diseño moderno con las <strong>tecnologías más avanzadas del mercado</strong>. 
			Nuestro enfoque único transforma procesos tradicionales en experiencias digitales 
			<strong>eficientes, seguras y escalables</strong>.
		</p>
			
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		<!-- Valor 1: Innovación -->
		<div class="value-card group">
			<div class="value-icon-container">
				<div class="value-icon bg-gradient-to-br from-formeta-primary to-formeta-secondary">
					<Icon name="zap" size={24} className="text-white" />
				</div>
			</div>
			<h3 class="text-heading-small font-bold text-formeta-text mb-3 group-hover:text-formeta-primary transition-colors">
				Innovación Tecnológica
			</h3>
			<p class="text-body-small text-formeta-text/80 leading-relaxed">
				Stack tecnológico de vanguardia con <strong>IA local</strong>, 
				<strong>glassmorphism moderno</strong> y arquitecturas escalables
			</p>
		</div>
		
		<!-- Valor 2: Confianza -->
		<div class="value-card group">
			<div class="value-icon-container">
				<div class="value-icon bg-gradient-to-br from-formeta-accent to-formeta-primary">
					<Icon name="shield" size={24} className="text-white" />
				</div>
			</div>
			<h3 class="text-heading-small font-bold text-formeta-text mb-3 group-hover:text-formeta-primary transition-colors">
				Confianza Enterprise
			</h3>
			<p class="text-body-small text-formeta-text/80 leading-relaxed">
				Soluciones <strong>robustas y seguras</strong> con 
				<strong>SLA 99.9%</strong>, soberanía de datos y compliance RGPD
			</p>
		</div>
		
		<!-- Valor 3: Accesibilidad -->
		<div class="value-card group">
			<div class="value-icon-container">
				<div class="value-icon bg-gradient-to-br from-formeta-secondary to-formeta-accent">
					<Icon name="users" size={24} className="text-white" />
				</div>
			</div>
			<h3 class="text-heading-small font-bold text-formeta-text mb-3 group-hover:text-formeta-primary transition-colors">
				Experiencia de Usuario
			</h3>
			<p class="text-body-small text-formeta-text/80 leading-relaxed">
				Interfaces <strong>intuitivas y accesibles</strong> que todos pueden usar, 
				optimizadas para <strong>productividad empresarial</strong>
			</p>
		</div>
	</div>
	
	<!-- Stats section -->
	<div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
		<div class="text-center">
			<div class="text-display-large font-bold text-formeta-primary mb-2">5+</div>
			<div class="text-body-small font-medium text-formeta-text/70">Años experiencia</div>
		</div>
		<div class="text-center">
			<div class="text-display-large font-bold text-formeta-primary mb-2">50+</div>
			<div class="text-body-small font-medium text-formeta-text/70">Proyectos completados</div>
		</div>
		<div class="text-center">
			<div class="text-display-large font-bold text-formeta-primary mb-2">100%</div>
			<div class="text-body-small font-medium text-formeta-text/70">Datos locales</div>
		</div>
		<div class="text-center">
			<div class="text-display-large font-bold text-formeta-primary mb-2">&lt;2h</div>
			<div class="text-body-small font-medium text-formeta-text/70">Tiempo respuesta</div>
		</div>
	</div>
	
	<!-- CTA Section -->
	<div class="text-center mt-12">
		<a href="/nosotros" class="btn-tertiary">
			Conocer Equipo
			<Icon name="arrow-right" size={16} className="ml-2" />
		</a>
	</div>
	</div>
</div>

<style>
	.value-card {
		background: rgba(248, 250, 252, 0.6);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(30, 41, 59, 0.08);
		border-radius: 16px;
		padding: 32px 24px;
		text-align: center;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
	}

	.value-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(0, 122, 255, 0.03), rgba(255, 107, 107, 0.02));
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: -1;
	}

	.value-card:hover {
		transform: translateY(-4px);
		border-color: rgba(0, 122, 255, 0.15);
		box-shadow: 
			0 16px 32px rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(0, 122, 255, 0.05),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.value-card:hover::before {
		opacity: 1;
	}

	.value-icon-container {
		display: flex;
		justify-content: center;
		margin-bottom: 24px;
	}

	.value-icon {
		width: 64px;
		height: 64px;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 8px 16px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
	}

	.group:hover .value-icon {
		transform: rotate(-5deg) scale(1.05);
		box-shadow: 
			0 12px 24px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.3);
	}
	
	.btn-tertiary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 14px 28px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
		background: rgba(248, 250, 252, 0.8);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(0, 122, 255, 0.2);
		border-radius: 8px;
		color: #007AFF;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	.btn-tertiary:hover {
		background: #007AFF;
		color: white;
		border-color: #007AFF;
		transform: translateY(-1px);
		box-shadow: 0 4px 8px rgba(0, 122, 255, 0.2);
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.value-card,
		.value-icon,
		.btn-tertiary,
		.group:hover .value-icon {
			transition: none;
			transform: none;
		}
	}
</style>