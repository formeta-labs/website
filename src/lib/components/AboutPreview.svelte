<script lang="ts">
	// No scripts needed for this component
</script>

<section class="bg-white pattern-dots section-spacing">
	<div class="container-formeta">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-36 font-bold text-formeta-text mb-6">
				MISIÓN DE <span class="text-gradient">FORMETA LABS</span>
			</h2>
			
			<p class="text-16 text-formeta-text leading-relaxed mb-8 max-w-3xl mx-auto">
				Somos un estudio tecnológico especializado en digitalización empresarial que combina 
				la estética nostálgica del pixel art con las tecnologías más avanzadas del mercado. 
				Nuestro enfoque único transforma procesos tradicionales en experiencias digitales 
				modernas y eficientes.
			</p>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
				<!-- Valor 1 -->
				<div class="card-pixel text-center">
					<div class="text-formeta-action text-36 mb-4">◆</div>
					<h3 class="text-16 font-semibold text-formeta-text uppercase tracking-pixel mb-2">
						Innovación
					</h3>
					<p class="text-14 text-formeta-text">
						Tecnologías de vanguardia con diseño pixel art moderno
					</p>
				</div>
				
				<!-- Valor 2 -->
				<div class="card-pixel text-center">
					<div class="text-formeta-action text-36 mb-4">●</div>
					<h3 class="text-16 font-semibold text-formeta-text uppercase tracking-pixel mb-2">
						Confianza
					</h3>
					<p class="text-14 text-formeta-text">
						Soluciones robustas y seguras para empresas y PYMEs
					</p>
				</div>
				
				<!-- Valor 3 -->
				<div class="card-pixel text-center">
					<div class="text-formeta-action text-36 mb-4">▲</div>
					<h3 class="text-16 font-semibold text-formeta-text uppercase tracking-pixel mb-2">
						Accesibilidad
					</h3>
					<p class="text-14 text-formeta-text">
						Interfaces intuitivas que todos pueden usar
					</p>
				</div>
			</div>
			
			<div class="mt-12">
				<a href="/nosotros" class="btn-tertiary">
					CONOCER EQUIPO
				</a>
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
	
	.pattern-dots {
		background-image: radial-gradient(circle, rgba(74, 144, 226, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
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
	
	.card-pixel {
		background: white;
		background-color: rgba(255, 255, 255, 0.95);
		border: 2px solid #4A90E2;
		padding: 1.5rem;
		box-shadow: 4px 4px 0px rgba(74, 144, 226, 0.3);
		transition: transform 0.2s ease;
	}
	
	.card-pixel:hover {
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0px rgba(74, 144, 226, 0.3);
	}
	
	.tracking-pixel {
		letter-spacing: 1.2px;
	}
	
	.btn-tertiary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 24px;
		font-family: 'Geist', system-ui, sans-serif;
		font-weight: 500;
		font-size: 14px;
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
	
	.text-36 {
		font-size: 36px;
		line-height: 1.2;
	}
	
	.text-16 {
		font-size: 16px;
		line-height: 1.5;
	}
	
	.text-14 {
		font-size: 14px;
		line-height: 1.4;
	}
</style>
