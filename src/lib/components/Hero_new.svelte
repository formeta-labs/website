<script lang="ts">
	// Company stats for homepage
	const companyStats = [
		{ label: 'COMPLIANCE', value: '15+', description: 'Empresas VeriFactu' },
		{ label: 'RESPUESTA', value: '<2h', description: 'Garantía técnica' },
		{ label: 'SOBERANÍA', value: '100%', description: 'Datos locales' },
		{ label: 'PROYECTOS', value: '2+', description: 'Enterprise exitosos' }
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
	<!-- Background Patterns -->
	<div class="absolute inset-0 opacity-5">
		<div class="pattern-grid h-full w-full"></div>
	</div>
	
	<!-- Floating Technical Elements -->
	<div class="absolute top-20 left-20 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		FORMETA.LABS
	</div>
	<div class="absolute top-32 right-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		VERIFACTU.2025
	</div>
	<div class="absolute bottom-32 left-32 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 text-white text-sm font-mono">
		LOCAL.AI.READY
	</div>
	
	<div class="relative z-10 container-formeta flex items-center min-h-[70vh]">
		<div class="max-w-4xl">
			<div class="flex items-center gap-4 mb-6">
				<span class="text-white/80 text-lg font-mono">///</span>
				<span class="text-white/80 text-lg font-mono">LABORATORIO DE INNOVACIÓN DIGITAL</span>
			</div>
			
			<h1 class="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
				FORMETA
				<br>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
					.LABS
				</span>
			</h1>
			
			<p class="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
				<strong>Especialistas en digitalización empresarial</strong> con enfoque en 
				<strong>cumplimiento VeriFactu</strong>, <strong>IA local empresarial</strong> y 
				<strong>soberanía de datos</strong> al 100%.
			</p>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
				{#each companyStats as stat}
					<div class="text-center">
						<div class="text-3xl font-bold text-white mb-1">{stat.value}</div>
						<div class="text-sm text-white/80 font-bold">{stat.label}</div>
						<div class="text-xs text-white/60">{stat.description}</div>
					</div>
				{/each}
			</div>
			
			<div class="flex flex-wrap gap-4">
				<button 
					on:click={handleCTAClick}
					class="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-white/90 hover:text-black transition-all duration-200 border-2 border-white"
				>
					CONSULTA TÉCNICA GRATUITA
				</button>
				<button 
					on:click={handleServicesClick}
					class="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-all duration-200"
				>
					VER SERVICIOS ENTERPRISE
				</button>
			</div>
			
			<div class="flex flex-wrap gap-3 mt-6">
				<span class="bg-red-500/20 border border-red-400 text-red-200 px-3 py-1 text-sm font-mono">
					VERIFACTU.CRITICAL
				</span>
				<span class="bg-green-500/20 border border-green-400 text-green-200 px-3 py-1 text-sm font-mono">
					LOCAL.AI.READY
				</span>
				<span class="bg-blue-500/20 border border-blue-400 text-blue-200 px-3 py-1 text-sm font-mono">
					RESPONSE.2H
				</span>
			</div>
		</div>
	</div>
</section>

<style>
	.pattern-grid {
		background-image: 
			linear-gradient(90deg, rgba(74, 144, 226, 0.1) 1px, transparent 1px),
			linear-gradient(rgba(74, 144, 226, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
