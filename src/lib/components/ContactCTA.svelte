<script lang="ts">
	// No scripts needed for this component
</script>

<section id="contact" class="bg-formeta-dark section-spacing">
	<div class="container-formeta">
		<div class="text-center max-w-4xl mx-auto">
			<h2 class="text-36 font-bold text-formeta-white text-shadow-pixel mb-6">
				¿LISTO PARA <span class="text-gradient">DIGITALIZAR</span> TU EMPRESA?
			</h2>
			
			<p class="text-16 text-formeta-light mb-8 max-w-2xl mx-auto leading-relaxed">
				Contáctanos para una consulta gratuita y descubre cómo podemos transformar 
				tu negocio con nuestras soluciones de pixel art moderno y tecnología de vanguardia.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a href="/contacto" class="btn-pixel">
					SOLICITAR CONSULTA
				</a>
				<a href="mailto:contact@formeta-labs.com" class="btn-tertiary">
					ENVIAR EMAIL
				</a>
			</div>
			
			<!-- Contact info -->
			<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="text-formeta-action text-24 mb-2 font-mono">📧</div>
					<h3 class="text-14 font-semibold text-formeta-white uppercase tracking-pixel mb-1">
						Email
					</h3>
					<p class="text-14 text-formeta-light">
						contact@formeta-labs.com
					</p>
				</div>
				
				<div class="text-center">
					<div class="text-formeta-action text-24 mb-2 font-mono">📞</div>
					<h3 class="text-14 font-semibold text-formeta-white uppercase tracking-pixel mb-1">
						Teléfono
					</h3>
					<p class="text-14 text-formeta-light">
						+34 XXX XXX XXX
					</p>
				</div>
				
				<div class="text-center">
					<div class="text-formeta-action text-24 mb-2 font-mono">⏰</div>
					<h3 class="text-14 font-semibold text-formeta-white uppercase tracking-pixel mb-1">
						Horario
					</h3>
					<p class="text-14 text-formeta-light">
						Lun - Vie: 9:00 - 18:00
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.text-gradient {
		background: linear-gradient(180deg, #4A90E2 0%, #A78BFA 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	
	.text-shadow-pixel {
		text-shadow: 2px 2px 0px rgba(74, 144, 226, 0.3);
	}
	
	.section-spacing {
		padding: 4rem 0;
	}
	
	@media (min-width: 768px) {
		.section-spacing {
			padding: 6rem 0;
		}
	}
	
	.container-formeta {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}
	
	@media (min-width: 768px) {
		.container-formeta {
			padding: 0 2rem;
		}
	}
	
	@media (min-width: 1024px) {
		.container-formeta {
			padding: 0 3rem;
		}
	}
	
	.btn-pixel {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 16px 32px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 16px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		border: 2px solid #007AFF;
		background: #007AFF;
		color: white;
		transition: all 0.1s ease;
		box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
		text-decoration: none;
	}
	
	.btn-pixel:hover {
		transform: translate(-1px, -1px);
		box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);
	}
	
	.btn-tertiary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 16px 32px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 16px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		border: 2px solid #007AFF;
		background: transparent;
		color: #007AFF;
		transition: all 0.1s ease;
		box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
		text-decoration: none;
	}
	
	.btn-tertiary:hover {
		background: #007AFF;
		color: white;
		transform: translate(-1px, -1px);
		box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);
	}
	
	.tracking-pixel {
		letter-spacing: 1.2px;
	}
	
	.text-36 {
		font-size: 36px;
		line-height: 1.2;
	}
	
	.text-24 {
		font-size: 24px;
		line-height: 1.3;
	}
	
	.text-16 {
		font-size: 16px;
		line-height: 1.5;
	}
	
	.text-14 {
		font-size: 14px;
		line-height: 1.4;
	}
	
	.font-mono {
		font-family: 'Geist Mono', monospace;
	}
</style>
