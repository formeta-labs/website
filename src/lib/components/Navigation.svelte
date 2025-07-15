<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Icon from '$lib/components/Icon.svelte';
	
	let mobileMenuOpen = false;
	
	const navItems = [
		{ name: 'INICIO', href: '/' },
		{ name: 'SERVICIOS', href: '/servicios', hasDropdown: true },
		{ name: 'NOSOTROS', href: '/nosotros' },
		{ name: 'CONTACTO', href: '/contacto' }
	];
	
	const services = [
		{ name: 'Web Development', href: '/servicios/web-development', icon: 'code' },
		{ name: 'RAG & MCP', href: '/servicios/rag-mcp', icon: 'cpu' },
		{ name: 'VeriFactu & CRM', href: '/servicios/verifactu-compliance', icon: 'shield' },
		{ name: 'Automatización', href: '/servicios/automatizacion', icon: 'settings' }
	];
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function openIntranet() {
		if (browser) {
			window.open('/intranet', '_blank');
		}
	}
</script>

<nav class="nav-enterprise sticky top-0 z-40">
	<div class="container-formeta">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="text-2xl font-bold text-formeta-action">
					FORMETA<span class="text-formeta-primary">.LABS</span>
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<div class="relative group">
						<a 
							href={item.href} 
							class="nav-link-enterprise {$page.url.pathname === item.href ? 'text-formeta-action' : ''}"
						>
							{item.name}
							{#if item.hasDropdown}
								<Icon name="chevron-down" size={16} className="ml-1 inline" />
							{/if}
						</a>
						
						{#if item.hasDropdown}
							<div class="absolute top-full left-0 mt-2 w-64 enterprise-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
								{#each services as service}
									<a 
										href={service.href} 
										class="flex items-center px-4 py-3 text-sm font-medium text-formeta-text hover:bg-formeta-primary hover:text-white transition-colors"
									>
										<Icon name={service.icon} size={16} className="mr-3" />
										{service.name}
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
				
				<!-- Intranet Button -->
				<button 
					on:click={openIntranet}
					class="btn-enterprise-secondary flex items-center space-x-2"
				>
					<Icon name="lock" size={16} />
					<span>INTRANET</span>
					<span class="status-badge status-production">SECURE</span>
				</button>
			</div>
			
			<!-- Mobile Menu Button -->
			<div class="md:hidden">
				<button 
					on:click={toggleMobileMenu}
					class="text-formeta-text hover:text-formeta-action transition-colors p-2"
				>
					<Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
				</button>
			</div>
		</div>
		
		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t border-formeta-primary/20 nav-enterprise">
				<div class="py-4 space-y-1">
					{#each navItems as item}
						<a 
							href={item.href} 
							class="block px-4 py-3 nav-link-enterprise {$page.url.pathname === item.href ? 'text-formeta-action' : ''}"
							on:click={() => mobileMenuOpen = false}
						>
							{item.name}
						</a>
					{/each}
					
					<!-- Mobile Services -->
					<div class="px-4 py-2">
						<div class="text-sm font-semibold text-formeta-text mb-2 uppercase">Servicios</div>
						{#each services as service}
							<a 
								href={service.href} 
								class="flex items-center px-2 py-2 text-sm text-formeta-text hover:text-formeta-action transition-colors"
								on:click={() => mobileMenuOpen = false}
							>
								<Icon name={service.icon} size={16} className="mr-3" />
								{service.name}
							</a>
						{/each}
					</div>
					
					<!-- Mobile Intranet -->
					<div class="px-4 py-2">
						<button 
							on:click={() => { openIntranet(); mobileMenuOpen = false; }}
							class="btn-enterprise-secondary w-full flex items-center justify-center space-x-2"
						>
							<Icon name="lock" size={16} />
							<span>INTRANET</span>
							<span class="status-badge status-production">SECURE</span>
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
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
</style>
