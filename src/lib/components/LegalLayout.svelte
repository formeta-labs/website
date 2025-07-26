<!-- src/lib/components/LegalLayout.svelte -->
<script lang="ts">
	import Icon from './Icon.svelte';
	
	export let title: string;
	export let lastUpdated: string;
	export let description: string = '';
	export let showContacts: boolean = true;
</script>

<svelte:head>
	<title>{title} - Formeta Labs</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />
</svelte:head>

<!-- Legal Page Header -->
<section class="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 border-b">
	<div class="container mx-auto px-6">
		<!-- Breadcrumb Navigation -->
		<nav class="mb-8">
			<ol class="flex items-center space-x-2 text-sm text-gray-600">
				<li>
					<a href="/" class="hover:text-formeta-primary transition-colors flex items-center gap-1">
						<Icon name="home" size={16} />
						Inicio
					</a>
				</li>
				<li class="flex items-center">
					<Icon name="chevron-right" size={16} className="mx-2 text-gray-400" />
					<a href="/legal" class="hover:text-formeta-primary transition-colors">Legal</a>
				</li>
				<li class="flex items-center">
					<Icon name="chevron-right" size={16} className="mx-2 text-gray-400" />
					<span class="text-formeta-primary font-medium">{title}</span>
				</li>
			</ol>
		</nav>

		<!-- Page Header -->
		<div class="max-w-4xl">
			<div class="flex items-center gap-3 mb-4">
				<div class="p-3 bg-formeta-primary/10 rounded-lg">
					<Icon name="file-text" size={24} className="text-formeta-primary" />
				</div>
				<div>
					<h1 class="text-4xl lg:text-5xl font-bold text-formeta-text mb-2">{title}</h1>
					<p class="text-formeta-text/70 text-lg">
						Última actualización: <span class="font-medium">{lastUpdated}</span>
					</p>
				</div>
			</div>
			
			{#if description}
				<p class="text-xl text-formeta-text/80 leading-relaxed">{description}</p>
			{/if}
		</div>
	</div>
</section>

<!-- Legal Content -->
<section class="py-12 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<!-- Legal Content Wrapper -->
			<div class="prose prose-lg prose-blue max-w-none">
				<slot />
			</div>
		</div>
	</div>
</section>

{#if showContacts}
<!-- Legal Contact Section -->
<section class="py-12 bg-slate-50 border-t">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white rounded-2xl p-8 shadow-sm border">
				<div class="flex items-start gap-4">
					<div class="p-3 bg-blue-50 rounded-lg shrink-0">
						<Icon name="mail" size={24} className="text-blue-600" />
					</div>
					<div>
						<h3 class="text-xl font-bold text-formeta-text mb-2">¿Dudas sobre esta información?</h3>
						<p class="text-formeta-text/70 mb-4">
							Si tienes preguntas sobre nuestras políticas o necesitas ejercer tus derechos, 
							contáctanos directamente.
						</p>
						<div class="flex flex-wrap gap-4">
							<a href="mailto:legal@formeta-labs.com" 
							   class="inline-flex items-center gap-2 bg-formeta-primary text-white px-4 py-2 rounded-lg hover:bg-formeta-primary/90 transition-colors">
								<Icon name="mail" size={16} />
								legal@formeta-labs.com
							</a>
							<a href="/contacto" 
							   class="inline-flex items-center gap-2 text-formeta-primary hover:bg-formeta-primary/10 px-4 py-2 rounded-lg transition-colors">
								<Icon name="message-circle" size={16} />
								Formulario de contacto
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}

<style>
	.prose {
		color: #1e293b;
		line-height: 1.7;
	}
	
	.prose h2 {
		@apply text-2xl font-bold text-formeta-text mt-12 mb-6 border-b pb-3 border-gray-200;
	}
	
	.prose h3 {
		@apply text-xl font-semibold text-formeta-text mt-8 mb-4;
	}
	
	.prose h4 {
		@apply text-lg font-medium text-formeta-text mt-6 mb-3;
	}
	
	.prose p {
		@apply mb-6 text-formeta-text/80;
	}
	
	.prose ul, .prose ol {
		@apply mb-6 space-y-2;
	}
	
	.prose li {
		@apply text-formeta-text/80;
	}
	
	.prose a {
		@apply text-formeta-primary hover:underline font-medium;
	}
	
	.prose strong {
		@apply font-semibold text-formeta-text;
	}
	
	.prose em {
		@apply italic text-formeta-text/70;
	}
	
	.prose blockquote {
		@apply border-l-4 border-formeta-primary/30 pl-6 py-2 bg-formeta-primary/5 rounded-r-lg my-6 text-formeta-text/80;
	}
	
	.prose code {
		@apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-formeta-text;
	}
	
	.prose table {
		@apply w-full border-collapse border border-gray-200 rounded-lg overflow-hidden my-6;
	}
	
	.prose th, .prose td {
		@apply border border-gray-200 px-4 py-3 text-left;
	}
	
	.prose th {
		@apply bg-gray-50 font-semibold text-formeta-text;
	}
	
	.prose td {
		@apply text-formeta-text/80;
	}
</style>