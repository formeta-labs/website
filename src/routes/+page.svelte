<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ServicesPreview from '$lib/components/ServicesPreview.svelte';
	import AboutPreview from '$lib/components/AboutPreview.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>Formeta Labs - Laboratorio de Innovación Digital</title>
	<meta name="description" content="Laboratorio de innovación digital especializado en VeriFactu compliance, IA empresarial local y desarrollo web avanzado. Transformamos empresas con tecnología española.">
	<meta name="keywords" content="VeriFactu, IA empresarial, desarrollo web, digitalización, compliance, soberanía datos">
</svelte:head>

<!-- Hero Section -->
<Hero />

<!-- Services Preview Section -->
<section class="py-24 bg-white relative">
	<!-- Background Pattern -->
	<div class="absolute inset-0 pattern-circuits opacity-5"></div>
	
	<div class="relative container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-formeta-dark mb-6">
				Servicios Enterprise
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Soluciones tecnológicas avanzadas diseñadas para empresas que necesitan 
				<strong>compliance VeriFactu</strong>, <strong>IA local</strong> y <strong>desarrollo web moderno</strong>.
			</p>
		</div>
		
		<ServicesPreview />
	</div>
</section>

<!-- About Preview Section -->
<section class="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative">
	<!-- Background Pattern -->
	<div class="absolute inset-0 pattern-dots opacity-10"></div>
	
	<div class="relative container mx-auto px-6">
		<AboutPreview />
	</div>
</section>

<!-- Technology Showcase -->
<section class="py-24 bg-formeta-dark text-white relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 pattern-grid opacity-20"></div>
	
	<div class="relative container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Stack Tecnológico Avanzado
			</h2>
			<p class="text-xl text-white/90 max-w-3xl mx-auto">
				Infraestructura moderna diseñada para <strong>máximo rendimiento</strong>, 
				<strong>seguridad enterprise</strong> y <strong>soberanía de datos</strong> al 100%.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Frontend Stack -->
			<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-formeta-primary to-formeta-secondary mx-auto mb-4 flex items-center justify-center text-2xl">
						<Icon name="atom" size={24} className="text-white" />
					</div>
					<h3 class="text-xl font-bold mb-2">Frontend Moderno</h3>
				</div>
				<ul class="space-y-2 text-sm">
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-blue-500"></span>
						SvelteKit + TypeScript
					</li>
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-cyan-500"></span>
						TailwindCSS + Pixel Art
					</li>
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-purple-500"></span>
						Progressive Web App
					</li>
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-green-500"></span>
						Performance &gt;90/100
					</li>
				</ul>
			</div>
			
			<!-- Backend Stack -->
			<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 mx-auto mb-4 flex items-center justify-center text-2xl">
						<Icon name="rocket" size={24} className="text-white" />
					</div>
					<h3 class="text-xl font-bold mb-2">Backend Enterprise</h3>
				</div>
				<ul class="space-y-2 text-sm">
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-green-500"></span>
						Node.js + Express
					</li>
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-blue-500"></span>
						PostgreSQL + Prisma
					</li>
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-red-500"></span>
						Redis Cache
					</li>
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-purple-500"></span>
						API REST + GraphQL
					</li>
				</ul>
			</div>
			
			<!-- AI & Compliance -->
			<div class="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
				<div class="text-center mb-6">
					<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center text-2xl">
						🤖
					</div>
					<h3 class="text-xl font-bold mb-2">IA & Compliance</h3>
				</div>
				<ul class="space-y-2 text-sm">
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-purple-500"></span>
						Ollama Local LLM
					</li>
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-pink-500"></span>
						RAG + Vector DB
					</li>
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-red-500"></span>
						VeriFactu API 2025
					</li>
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 bg-green-500"></span>
						100% Soberanía Datos
					</li>
				</ul>
			</div>
		</div>
		
		<!-- Live System Status -->
		<div class="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 p-8">
			<h3 class="text-2xl font-bold text-center mb-8">Estado del Sistema en Tiempo Real</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				<div class="text-center">
					<div class="text-3xl font-mono text-green-400 mb-2">99.9%</div>
					<div class="text-sm text-white/80">Uptime</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-mono text-green-400 mb-2">&lt;200ms</div>
					<div class="text-sm text-white/80">Latencia</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-mono text-blue-400 mb-2">24/7</div>
					<div class="text-sm text-white/80">Soporte</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-mono text-purple-400 mb-2">100%</div>
					<div class="text-sm text-white/80">Local</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<ContactCTA />

<style>
	.pattern-circuits {
		background-image: 
			linear-gradient(45deg, transparent 35%, rgba(167, 139, 250, 0.05) 35%, rgba(167, 139, 250, 0.05) 65%, transparent 65%),
			linear-gradient(-45deg, transparent 35%, rgba(74, 144, 226, 0.08) 35%, rgba(74, 144, 226, 0.08) 65%, transparent 65%);
		background-size: 30px 30px;
	}
	
	.pattern-dots {
		background-image: radial-gradient(circle, rgba(74, 144, 226, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
	}
	
	.pattern-grid {
		background-image: 
			linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
