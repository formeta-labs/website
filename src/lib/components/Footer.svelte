<script lang="ts">
	let currentYear = new Date().getFullYear();
</script>

<footer class="bg-slate-900 border-t border-slate-800 relative">
	<!-- Clean Background Pattern -->
	<div class="absolute inset-0 pattern-grid opacity-5"></div>
	
	<div class="relative container mx-auto px-6 py-16">
		<!-- Main Footer Content -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
			<!-- Company Info -->
			<div>
				<h3 class="text-2xl font-bold text-white mb-6">
					FORMETA<span class="text-blue-400">.LABS</span>
				</h3>
				<p class="text-white/80 text-base leading-relaxed mb-6">
					Laboratorio de innovación digital especializado en VeriFactu compliance, 
					IA empresarial local y desarrollo web avanzado.
				</p>
				
				<!-- Key Metrics -->
				<div class="bg-white/5 border border-white/10 rounded-xl p-6">
					<h4 class="text-white font-semibold mb-4">Rendimiento Enterprise</h4>
					<div class="space-y-3 text-sm">
						<div class="flex justify-between">
							<span class="text-white/70">Uptime SLA:</span>
							<span class="text-emerald-400 font-medium">99.9%</span>
						</div>
						<div class="flex justify-between">
							<span class="text-white/70">Latencia API:</span>
							<span class="text-emerald-400 font-medium">&lt;50ms</span>
						</div>
						<div class="flex justify-between">
							<span class="text-white/70">Soporte:</span>
							<span class="text-blue-400 font-medium">24/7</span>
						</div>
						<div class="flex justify-between">
							<span class="text-white/70">Soberanía:</span>
							<span class="text-emerald-400 font-medium">100%</span>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Services -->
			<div>
				<h4 class="text-white font-semibold mb-6">Soluciones Enterprise</h4>
				<ul class="space-y-3">
					<li>
						<a href="/servicios/verifactu-compliance" class="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3">
							<div class="w-2 h-2 bg-blue-400 rounded-full"></div>
							VeriFactu Compliance
						</a>
					</li>
					<li>
						<a href="/servicios/rag-mcp" class="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3">
							<div class="w-2 h-2 bg-purple-400 rounded-full"></div>
							IA Empresarial Local
						</a>
					</li>
					<li>
						<a href="/servicios/automatizacion" class="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3">
							<div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
							Automatización Digital
						</a>
					</li>
					<li>
						<a href="/web-development" class="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3">
							<div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
							Desarrollo Web
						</a>
					</li>
				</ul>
			</div>
			
			<!-- Company -->
			<div>
				<h4 class="text-white font-semibold mb-6">Empresa</h4>
				<ul class="space-y-3">
					<li>
						<a href="/nosotros" class="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3">
							<div class="w-2 h-2 bg-slate-400 rounded-full"></div>
							Sobre Nosotros
						</a>
					</li>
					<li>
						<a href="/contacto" class="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3">
							<div class="w-2 h-2 bg-slate-400 rounded-full"></div>
							Contacto
						</a>
					</li>
					<li>
						<a href="/intranet" class="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3">
							<div class="w-2 h-2 bg-slate-400 rounded-full"></div>
							Intranet
						</a>
					</li>
				</ul>
				
				<!-- Contact Info -->
				<div class="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
					<h5 class="text-white font-semibold mb-4">Contacto Ejecutivo</h5>
					<div class="space-y-2 text-sm">
						<div class="text-white/80">
							<strong>Email:</strong> contact@formeta.es
						</div>
						<div class="text-white/80">
							<strong>Soporte:</strong> 24/7 Enterprise
						</div>
						<div class="text-white/80">
							<strong>Respuesta:</strong> &lt;2h SLA
						</div>
					</div>
				</div>
			</div>
			
			<!-- Technology Stack -->
			<div>
				<h4 class="text-white font-semibold mb-6">Stack Tecnológico</h4>
				
				<div class="space-y-4">
					<div class="bg-white/5 border border-white/10 rounded-xl p-4">
						<h5 class="text-white font-medium mb-3">Frontend</h5>
						<div class="text-sm text-white/80">
							SvelteKit, TypeScript, TailwindCSS
						</div>
					</div>
					
					<div class="bg-white/5 border border-white/10 rounded-xl p-4">
						<h5 class="text-white font-medium mb-3">Backend</h5>
						<div class="text-sm text-white/80">
							Node.js, PostgreSQL, Prisma
						</div>
					</div>
					
					<div class="bg-white/5 border border-white/10 rounded-xl p-4">
						<h5 class="text-white font-medium mb-3">IA & Compliance</h5>
						<div class="text-sm text-white/80">
							Ollama, RAG, VeriFactu API
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Bottom Bar -->
		<div class="border-t border-white/10 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center gap-6">
				<!-- Copyright -->
				<div class="text-white/70 text-sm">
					© {currentYear} Formeta Labs. Todos los derechos reservados.
				</div>
				
				<!-- Legal Links -->
				<div class="flex flex-wrap gap-6 text-sm">
					<a href="/legal/privacidad" class="text-white/70 hover:text-white transition-colors duration-200">
						Política de Privacidad
					</a>
					<a href="/legal/terminos" class="text-white/70 hover:text-white transition-colors duration-200">
						Términos de Servicio
					</a>
					<a href="/legal/gdpr" class="text-white/70 hover:text-white transition-colors duration-200">
						Cumplimiento GDPR
					</a>
					<a href="/legal/configuracion-cookies" class="text-white/70 hover:text-white transition-colors duration-200">
						Configurar Cookies
					</a>
				</div>
				
				<!-- Compliance Badges -->
				<div class="flex gap-3">
					<div class="bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-md">
						<span class="text-emerald-400 text-xs font-medium">VeriFactu ✓</span>
					</div>
					<div class="bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-md">
						<span class="text-blue-400 text-xs font-medium">GDPR ✓</span>
					</div>
					<div class="bg-purple-500/20 border border-purple-500/30 px-3 py-1 rounded-md">
						<span class="text-purple-400 text-xs font-medium">ISO 27001 ✓</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.pattern-grid {
		background-image: 
			linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
		background-size: 24px 24px;
	}
</style>
