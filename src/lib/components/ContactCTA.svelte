<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
</script>

<section id="contact" class="py-24 bg-white relative overflow-hidden">
	<!-- Enhanced background pattern -->
	<div class="absolute inset-0 cta-pattern opacity-10"></div>
	
	<div class="relative container mx-auto px-6">
		<div class="text-center max-w-5xl mx-auto">
			<div class="flex items-center justify-center gap-3 mb-6">
			   <span class="text-formeta-text/60 text-body font-mono">///</span>
			   <span class="text-formeta-text/80 text-body font-mono font-medium tracking-wider uppercase">COMIENZA TU TRANSFORMACIÓN DIGITAL</span>
			   <span class="text-formeta-text/60 text-body font-mono">///</span>
			</div>
			
		   <h2 class="text-display-large font-bold text-formeta-text mb-8 leading-tight">
				¿Listo para <span class="text-transparent bg-clip-text bg-gradient-to-r from-formeta-primary via-formeta-accent to-formeta-secondary">Digitalizar</span> tu Empresa?
			</h2>
			
		   <p class="text-body-large text-formeta-text/80 mb-12 max-w-4xl mx-auto leading-relaxed">
				Contáctanos para una <strong>consulta técnica gratuita</strong> y descubre cómo podemos transformar 
				tu negocio con nuestras soluciones de <strong>IA local</strong>, <strong>VeriFactu compliance</strong> y 
				<strong>desarrollo web empresarial</strong>.
			</p>
			
			<!-- Enhanced CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
				<a href="/contacto" class="cta-button-primary group">
					<Icon name="calendar" size={20} className="text-white group-hover:scale-110 transition-transform" />
					<span>CONSULTA TÉCNICA GRATUITA</span>
					<Icon name="arrow-right" size={16} className="text-white/80 group-hover:translate-x-1 transition-transform" />
				</a>
				<a href="mailto:enterprise@formeta-labs.com" class="cta-button-secondary group">
					<Icon name="mail" size={20} className="text-formeta-primary group-hover:text-white group-hover:scale-110 transition-transform" />
					<span>CONTACTO DIRECTO</span>
				</a>
			</div>
			
			<!-- Enhanced Contact Grid -->
		   <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
			   <div class="contact-card bg-gray-50 text-formeta-text text-center group">
					<div class="contact-icon-container mb-4">
						<div class="contact-icon bg-gradient-to-br from-formeta-primary to-formeta-secondary">
							<Icon name="mail" size={24} className="text-white" />
						</div>
					</div>
				   <h3 class="text-body font-bold text-formeta-text mb-2 group-hover:text-formeta-primary transition-colors">
						Email Enterprise
					</h3>
				   <p class="text-body-small text-formeta-text/80 mb-2">
						enterprise@formeta-labs.com
					</p>
				   <p class="text-caption text-formeta-text/60">
						Respuesta garantizada &lt; 2 horas
					</p>
				</div>
				
			   <div class="contact-card bg-gray-50 text-formeta-text text-center group">
					<div class="contact-icon-container mb-4">
						<div class="contact-icon bg-gradient-to-br from-formeta-accent to-formeta-primary">
							<Icon name="phone" size={24} className="text-white" />
						</div>
					</div>
				   <h3 class="text-body font-bold text-formeta-text mb-2 group-hover:text-formeta-primary transition-colors">
						Consulta Técnica
					</h3>
				   <p class="text-body-small text-formeta-text/80 mb-2">
						+34 600 000 000
					</p>
				   <p class="text-caption text-formeta-text/60">
						Lun-Vie 9:00-18:00 CET
					</p>
				</div>
				
			   <div class="contact-card bg-gray-50 text-formeta-text text-center group">
					<div class="contact-icon-container mb-4">
						<div class="contact-icon bg-gradient-to-br from-red-500 to-formeta-accent">
							<Icon name="headphones" size={24} className="text-white" />
						</div>
					</div>
				   <h3 class="text-body font-bold text-formeta-text mb-2 group-hover:text-formeta-primary transition-colors">
						Soporte VeriFactu
					</h3>
				   <p class="text-body-small text-formeta-text/80 mb-2">
						Lun - Vie: 9:00 - 18:00
					</p>
				   <p class="text-caption text-formeta-text/60">
						Horario comercial CET
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Enhanced CTA pattern background */
	.cta-pattern {
		background-image: 
			linear-gradient(30deg, rgba(0, 122, 255, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 107, 107, 0.03) 75%),
			linear-gradient(-30deg, rgba(0, 122, 255, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 107, 107, 0.03) 75%);
		background-size: 60px 60px;
		animation: patternFlow 20s linear infinite;
	}

	@keyframes patternFlow {
		0% { background-position: 0px 0px, 0px 0px; }
		100% { background-position: 60px 60px, -60px 60px; }
	}
	
	/* Enhanced contact cards */
	.contact-card {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 16px;
		padding: 24px 20px;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
	}

	.contact-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(0, 122, 255, 0.05), rgba(255, 107, 107, 0.03));
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: -1;
	}

	.contact-card:hover {
		transform: translateY(-3px);
		border-color: rgba(255, 255, 255, 0.25);
		box-shadow: 
			0 12px 24px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.contact-card:hover::before {
		opacity: 1;
	}
	
	.contact-icon-container {
		display: flex;
		justify-content: center;
	}

	.contact-icon {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 
			0 6px 12px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
	}

	.group:hover .contact-icon {
		transform: rotate(-5deg) scale(1.05);
		box-shadow: 
			0 8px 16px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.3);
	}
	
	/* Enhanced CTA buttons */
	.cta-button-primary {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		padding: 18px 32px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 600;
		font-size: 16px;
		background: rgba(0, 122, 255, 0.9);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(0, 122, 255, 0.3);
		border-radius: 12px;
		color: white;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 
			0 8px 16px rgba(0, 122, 255, 0.25),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.cta-button-primary:hover {
		background: #007AFF;
		transform: translateY(-2px);
		box-shadow: 
			0 12px 24px rgba(0, 122, 255, 0.35),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
	}

	.cta-button-secondary {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		padding: 18px 32px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 16px;
		background: rgba(59, 130, 246, 0.1);
		border: 1px solid rgba(59, 130, 246, 0.6);
		border-radius: 12px;
		color: #1E40AF;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.cta-button-secondary:hover {
		background: rgba(59, 130, 246, 0.2);
		border-color: rgba(59, 130, 246, 0.8);
		color: white;
		transform: translateY(-2px);
		box-shadow: 
			0 8px 16px rgba(0, 0, 0, 0.2);
	}
	
	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.cta-pattern,
		.contact-card,
		.contact-icon,
		.cta-button-primary,
		.cta-button-secondary {
			animation: none;
			transition: none;
		}
		
		.group:hover .contact-icon,
		.contact-card:hover,
		.cta-button-primary:hover,
		.cta-button-secondary:hover {
			transform: none;
		}
	}
	
	/* Mobile responsive improvements */
	@media (max-width: 768px) {
		.contact-card {
			padding: 20px 16px;
		}
		
		.contact-icon {
			width: 40px;
			height: 40px;
		}
		
		.cta-button-primary,
		.cta-button-secondary {
			padding: 16px 24px;
			font-size: 14px;
			gap: 8px;
		}
	}
</style>
