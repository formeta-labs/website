<script lang="ts">
	import { onMount } from 'svelte';
	
	let currentYear = new Date().getFullYear();
	let statusIndicators = [
		{ name: 'Sistemas IA', status: 'ONLINE', color: 'text-green-400' },
		{ name: 'VeriFactu API', status: 'READY', color: 'text-green-400' },
		{ name: 'Soporte 24/7', status: 'ACTIVO', color: 'text-blue-400' },
		{ name: 'Infraestructura', status: 'OPTIMAL', color: 'text-green-400' }
	];
	
	onMount(() => {
		// Update status indicators with animation
		const updateStatus = () => {
			statusIndicators = statusIndicators.map(indicator => ({
				...indicator,
				status: Math.random() > 0.1 ? indicator.status : 'SYNC...'
			}));
		};
		
		const interval = setInterval(updateStatus, 5000);
		return () => clearInterval(interval);
	});
</script>

<footer class="bg-formeta-dark border-t-4 border-formeta-primary relative">
	<!-- Background Pattern -->
	<div class="absolute inset-0 pattern-dots opacity-20"></div>
	
	<div class="relative container mx-auto px-6 py-16">
		<!-- Main Footer Content -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
			<!-- Company Info -->
			<div>
				<h3 class="text-2xl font-bold text-white mb-6 font-mono">
					FORMETA.LABS
				</h3>
				<p class="text-formeta-light text-sm leading-relaxed mb-6">
					Laboratorio de innovación digital especializado en VeriFactu compliance, 
					IA empresarial local y desarrollo web avanzado.
				</p>
				
				<!-- Technical Specs -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 p-4">
					<h4 class="text-white font-bold mb-3 text-sm">ESPECIFICACIONES TÉCNICAS</h4>
					<div class="space-y-2 text-xs">
						<div class="flex justify-between">
							<span class="text-formeta-light">Uptime:</span>
							<span class="text-green-400 font-mono">99.9%</span>
						</div>
						<div class="flex justify-between">
							<span class="text-formeta-light">Latencia:</span>
							<span class="text-green-400 font-mono">&lt;200ms</span>
						</div>
						<div class="flex justify-between">
							<span class="text-formeta-light">Compliance:</span>
							<span class="text-green-400 font-mono">VeriFactu 2025</span>
						</div>
						<div class="flex justify-between">
							<span class="text-formeta-light">Soberanía:</span>
							<span class="text-green-400 font-mono">100% Local</span>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Services -->
			<div>
				<h4 class="text-white font-bold mb-6 text-lg font-mono">SERVICIOS</h4>
				<ul class="space-y-3">
					<li>
						<a href="/servicios" class="text-formeta-light hover:text-white transition-colors duration-200 text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-formeta-primary"></span>
							VeriFactu Compliance
						</a>
					</li>
					<li>
						<a href="/servicios" class="text-formeta-light hover:text-white transition-colors duration-200 text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-formeta-secondary"></span>
							Sistemas CRM/ERP
						</a>
					</li>
					<li>
						<a href="/servicios" class="text-formeta-light hover:text-white transition-colors duration-200 text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-formeta-primary"></span>
							IA Empresarial Local
						</a>
					</li>
					<li>
						<a href="/servicios" class="text-formeta-light hover:text-white transition-colors duration-200 text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-formeta-secondary"></span>
							Desarrollo Web
						</a>
					</li>
					<li>
						<a href="/servicios" class="text-formeta-light hover:text-white transition-colors duration-200 text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-formeta-primary"></span>
							Procesamiento Forms
						</a>
					</li>
				</ul>
			</div>
			
			<!-- Company -->
			<div>
				<h4 class="text-white font-bold mb-6 text-lg font-mono">EMPRESA</h4>
				<ul class="space-y-3">
					<li>
						<a href="/nosotros" class="text-formeta-light hover:text-white transition-colors duration-200 text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-green-500"></span>
							Sobre Nosotros
						</a>
					</li>
					<li>
						<a href="/nosotros" class="text-formeta-light hover:text-white transition-colors duration-200 text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-blue-500"></span>
							Nuestro Equipo
						</a>
					</li>
					<li>
						<a href="/intranet" class="text-formeta-light hover:text-white transition-colors duration-200 text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-purple-500"></span>
							Intranet
						</a>
					</li>
					<li>
						<a href="/contacto" class="text-formeta-light hover:text-white transition-colors duration-200 text-sm flex items-center gap-2">
							<span class="w-2 h-2 bg-red-500"></span>
							Contacto
						</a>
					</li>
				</ul>
				
				<!-- Contact Info -->
				<div class="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 p-4">
					<h5 class="text-white font-bold mb-3 text-sm">CONTACTO DIRECTO</h5>
					<div class="space-y-2 text-xs">
						<div class="text-formeta-light">
							<strong>Email:</strong> contact@formeta.es
						</div>
						<div class="text-formeta-light">
							<strong>Soporte:</strong> 24/7 disponible
						</div>
						<div class="text-formeta-light">
							<strong>Respuesta:</strong> &lt;2 horas garantizado
						</div>
					</div>
				</div>
			</div>
			
			<!-- Status Monitor -->
			<div>
				<h4 class="text-white font-bold mb-6 text-lg font-mono">ESTADO DEL SISTEMA</h4>
				
				<div class="space-y-4">
					{#each statusIndicators as indicator}
						<div class="bg-white/5 backdrop-blur-sm border border-white/10 p-3">
							<div class="flex justify-between items-center mb-2">
								<span class="text-white text-sm font-medium">{indicator.name}</span>
								<span class={`text-xs font-mono ${indicator.color}`}>
									{indicator.status}
								</span>
							</div>
							<div class="w-full bg-gray-700 h-1">
								<div class="bg-green-500 h-1 w-full"></div>
							</div>
						</div>
					{/each}
				</div>
				
				<!-- Emergency Contact -->
				<div class="mt-6 bg-red-500/10 border border-red-500/20 p-4">
					<h5 class="text-red-400 font-bold mb-2 text-sm">🚨 SOPORTE URGENTE</h5>
					<p class="text-red-300 text-xs">
						Para incidencias críticas:<br>
						<strong>emergency@formeta.es</strong>
					</p>
				</div>
			</div>
		</div>
		
		<!-- Bottom Bar -->
		<div class="border-t border-white/10 mt-12 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center gap-6">
				<!-- Copyright -->
				<div class="text-formeta-light text-sm">
					© {currentYear} Formeta Labs. Todos los derechos reservados.
				</div>
				
				<!-- Legal Links -->
				<div class="flex flex-wrap gap-6 text-sm">
					<a href="/politica-privacidad" class="text-formeta-light hover:text-white transition-colors duration-200">
						Política de Privacidad
					</a>
					<a href="/terminos-servicio" class="text-formeta-light hover:text-white transition-colors duration-200">
						Términos de Servicio
					</a>
					<a href="/cumplimiento-gdpr" class="text-formeta-light hover:text-white transition-colors duration-200">
						Cumplimiento GDPR
					</a>
				</div>
				
				<!-- Compliance Badges -->
				<div class="flex gap-4">
					<div class="bg-green-500/20 border border-green-500/30 px-3 py-1 text-green-400 text-xs font-mono">
						VeriFactu ✓
					</div>
					<div class="bg-blue-500/20 border border-blue-500/30 px-3 py-1 text-blue-400 text-xs font-mono">
						GDPR ✓
					</div>
					<div class="bg-purple-500/20 border border-purple-500/30 px-3 py-1 text-purple-400 text-xs font-mono">
						ISO 27001 ✓
					</div>
				</div>
			</div>
		</div>
		
		<!-- Technical Footer -->
		<div class="border-t border-white/10 mt-8 pt-6">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-formeta-light font-mono">
				<div>
					Server: formeta-prod-01 | Version: 2.1.0 | Build: {Date.now()}
				</div>
				<div>
					Powered by SvelteKit + TypeScript + PostgreSQL + Docker
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.pattern-dots {
		background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
