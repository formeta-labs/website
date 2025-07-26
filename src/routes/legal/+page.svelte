<!-- src/routes/legal/+page.svelte -->
<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>Información Legal - Formeta Labs</title>
	<meta name="description" content="Acceso a toda la información legal de Formeta Labs: Política de Privacidad, Términos de Servicio y Cumplimiento GDPR." />
</svelte:head>

<!-- Legal Index Header -->
<section class="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
	<div class="container mx-auto px-6 text-center">
		<div class="max-w-4xl mx-auto">
			<div class="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-blue-200/50 px-6 py-3 rounded-full mb-8">
				<Icon name="shield" size={24} className="text-blue-600" />
				<span class="text-blue-800 font-semibold">Información Legal</span>
			</div>
			
			<h1 class="text-5xl lg:text-6xl font-bold text-formeta-text mb-6">
				Marco Legal y <span class="text-blue-600">Cumplimiento</span>
			</h1>
			
			<p class="text-xl text-formeta-text/80 leading-relaxed mb-8">
				Accede a toda la información legal de Formeta Labs. Cumplimos con las más altas 
				normativas europeas de protección de datos y transparencia empresarial.
			</p>
			
			<!-- Key Compliance Badges -->
			<div class="flex flex-wrap justify-center gap-4">
				<div class="bg-white/80 backdrop-blur-sm border border-green-200 px-4 py-2 rounded-lg">
					<span class="text-green-700 font-medium flex items-center gap-2">
						<Icon name="check-circle" size={18} className="text-green-600" />
						GDPR Compliant
					</span>
				</div>
				<div class="bg-white/80 backdrop-blur-sm border border-blue-200 px-4 py-2 rounded-lg">
					<span class="text-blue-700 font-medium flex items-center gap-2">
						<Icon name="shield" size={18} className="text-blue-600" />
						LOPDGDD España
					</span>
				</div>
				<div class="bg-white/80 backdrop-blur-sm border border-purple-200 px-4 py-2 rounded-lg">
					<span class="text-purple-700 font-medium flex items-center gap-2">
						<Icon name="lock" size={18} className="text-purple-600" />
						ISO 27001 Ready
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Legal Documents Grid -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<!-- Privacy Policy -->
				<div class="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
					<div class="mb-6">
						<div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
							<Icon name="shield" size={32} className="text-blue-600" />
						</div>
						<h3 class="text-2xl font-bold text-formeta-text mb-3">Política de Privacidad</h3>
						<p class="text-formeta-text/70 leading-relaxed">
							Información detallada sobre cómo recopilamos, usamos y protegemos 
							tus datos personales conforme al GDPR.
						</p>
					</div>
					
					<div class="space-y-3 text-sm text-formeta-text/60 mb-6">
						<div class="flex items-center gap-2">
							<Icon name="calendar" size={16} className="text-gray-400" />
							<span>Última actualización: 22 enero 2025</span>
						</div>
						<div class="flex items-center gap-2">
							<Icon name="file-text" size={16} className="text-gray-400" />
							<span>Cumple GDPR y LOPDGDD</span>
						</div>
						<div class="flex items-center gap-2">
							<Icon name="clock" size={16} className="text-gray-400" />
							<span>Lectura: ~15 minutos</span>
						</div>
					</div>
					
					<a href="/legal/privacidad" 
					   class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium w-full justify-center">
						<Icon name="arrow-right" size={18} />
						Leer Política Completa
					</a>
				</div>

				<!-- Terms of Service -->
				<div class="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-green-300 transition-all duration-300">
					<div class="mb-6">
						<div class="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
							<Icon name="file-text" size={32} className="text-green-600" />
						</div>
						<h3 class="text-2xl font-bold text-formeta-text mb-3">Términos de Servicio</h3>
						<p class="text-formeta-text/70 leading-relaxed">
							Condiciones generales que rigen la contratación y prestación de 
							nuestros servicios de desarrollo e IA empresarial.
						</p>
					</div>
					
					<div class="space-y-3 text-sm text-formeta-text/60 mb-6">
						<div class="flex items-center gap-2">
							<Icon name="calendar" size={16} className="text-gray-400" />
							<span>Última actualización: 22 enero 2025</span>
						</div>
						<div class="flex items-center gap-2">
							<Icon name="briefcase" size={16} className="text-gray-400" />
							<span>Servicios B2B Enterprise</span>
						</div>
						<div class="flex items-center gap-2">
							<Icon name="clock" size={16} className="text-gray-400" />
							<span>Lectura: ~20 minutos</span>
						</div>
					</div>
					
					<a href="/legal/terminos" 
					   class="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium w-full justify-center">
						<Icon name="arrow-right" size={18} />
						Ver Términos Completos
					</a>
				</div>

				<!-- GDPR Compliance -->
				<div class="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-purple-300 transition-all duration-300">
					<div class="mb-6">
						<div class="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
							<Icon name="lock" size={32} className="text-purple-600" />
						</div>
						<h3 class="text-2xl font-bold text-formeta-text mb-3">Cumplimiento GDPR</h3>
						<p class="text-formeta-text/70 leading-relaxed">
							Detalles técnicos sobre nuestro cumplimiento del GDPR, medidas 
							de seguridad y procedimientos de protección de datos.
						</p>
					</div>
					
					<div class="space-y-3 text-sm text-formeta-text/60 mb-6">
						<div class="flex items-center gap-2">
							<Icon name="calendar" size={16} className="text-gray-400" />
							<span>Última actualización: 22 enero 2025</span>
						</div>
						<div class="flex items-center gap-2">
							<Icon name="shield" size={16} className="text-gray-400" />
							<span>Certificación GDPR</span>
						</div>
						<div class="flex items-center gap-2">
							<Icon name="clock" size={16} className="text-gray-400" />
							<span>Lectura: ~25 minutos</span>
						</div>
					</div>
					
					<a href="/legal/gdpr" 
					   class="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium w-full justify-center">
						<Icon name="arrow-right" size={18} />
						Ver Cumplimiento GDPR
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Quick Access Section -->
<section class="py-16 bg-slate-50">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl lg:text-4xl font-bold text-formeta-text mb-4">
					Acceso Rápido
				</h2>
				<p class="text-xl text-formeta-text/70">
					Información específica y contactos para consultas legales
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- Rights and Procedures -->
				<div class="bg-white rounded-2xl p-8 shadow-sm border">
					<h3 class="text-xl font-bold text-formeta-text mb-4 flex items-center gap-2">
						<Icon name="users" size={24} className="text-blue-600" />
						Tus Derechos
					</h3>
					
					<div class="space-y-3 mb-6">
						<div class="flex items-center gap-3 text-formeta-text/80">
							<Icon name="search" size={16} className="text-gray-400" />
							<span>Derecho de acceso a tus datos</span>
						</div>
						<div class="flex items-center gap-3 text-formeta-text/80">
							<Icon name="edit" size={16} className="text-gray-400" />
							<span>Rectificación de datos incorrectos</span>
						</div>
						<div class="flex items-center gap-3 text-formeta-text/80">
							<Icon name="trash" size={16} className="text-gray-400" />
							<span>Supresión ("derecho al olvido")</span>
						</div>
						<div class="flex items-center gap-3 text-formeta-text/80">
							<Icon name="download" size={16} className="text-gray-400" />
							<span>Portabilidad de datos</span>
						</div>
					</div>
					
					<a href="mailto:dpo@formeta-labs.com" 
					   class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
						<Icon name="mail" size={16} />
						Contactar DPO
					</a>
				</div>

				<!-- Legal Contacts -->
				<div class="bg-white rounded-2xl p-8 shadow-sm border">
					<h3 class="text-xl font-bold text-formeta-text mb-4 flex items-center gap-2">
						<Icon name="headphones" size={24} className="text-green-600" />
						Contacto Legal
					</h3>
					
					<div class="space-y-4 mb-6">
						<div>
							<div class="flex items-center gap-2 text-formeta-text font-medium mb-1">
								<Icon name="mail" size={16} className="text-gray-400" />
								Consultas Generales
							</div>
							<a href="mailto:legal@formeta-labs.com" class="text-blue-600 hover:underline text-sm">
								legal@formeta-labs.com
							</a>
						</div>
						<div>
							<div class="flex items-center gap-2 text-formeta-text font-medium mb-1">
								<Icon name="shield" size={16} className="text-gray-400" />
								Protección de Datos
							</div>
							<a href="mailto:dpo@formeta-labs.com" class="text-blue-600 hover:underline text-sm">
								dpo@formeta-labs.com
							</a>
						</div>
						<div>
							<div class="flex items-center gap-2 text-formeta-text font-medium mb-1">
								<Icon name="alert-circle" size={16} className="text-gray-400" />
								Incidentes de Seguridad
							</div>
							<a href="mailto:security@formeta-labs.com" class="text-blue-600 hover:underline text-sm">
								security@formeta-labs.com
							</a>
						</div>
					</div>
					
					<div class="text-sm text-formeta-text/60">
						<Icon name="clock" size={16} className="text-gray-400 inline mr-1" />
						Respuesta en menos de 24h laborables
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Regulatory Compliance -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-6 text-center">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl lg:text-4xl font-bold text-formeta-text mb-8">
				Cumplimiento Normativo
			</h2>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div class="flex flex-col items-center">
					<div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
						<Icon name="shield" size={32} className="text-blue-600" />
					</div>
					<h3 class="font-bold text-formeta-text mb-2">GDPR</h3>
					<p class="text-sm text-formeta-text/70">Reglamento General de Protección de Datos</p>
				</div>
				
				<div class="flex flex-col items-center">
					<div class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
						<Icon name="file-text" size={32} className="text-green-600" />
					</div>
					<h3 class="font-bold text-formeta-text mb-2">LOPDGDD</h3>
					<p class="text-sm text-formeta-text/70">Ley Orgánica de Protección de Datos</p>
				</div>
				
				<div class="flex flex-col items-center">
					<div class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
						<Icon name="lock" size={32} className="text-purple-600" />
					</div>
					<h3 class="font-bold text-formeta-text mb-2">LSSI</h3>
					<p class="text-sm text-formeta-text/70">Ley de Servicios de la Sociedad de la Información</p>
				</div>
				
				<div class="flex flex-col items-center">
					<div class="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
						<Icon name="briefcase" size={32} className="text-orange-600" />
					</div>
					<h3 class="font-bold text-formeta-text mb-2">Código Civil</h3>
					<p class="text-sm text-formeta-text/70">Legislación contractual española</p>
				</div>
			</div>
		</div>
	</div>
</section>