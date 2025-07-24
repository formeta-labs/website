<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Icon from './Icon.svelte';
	
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

<nav class="nav-glassmorphism sticky top-0 z-50 backdrop-blur-md">
	<div class="container-formeta">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="flex items-center gap-3 group">
					<div class="relative">
						<svg 
							width="40" 
							height="32" 
							viewBox="0 0 50 40" 
							class="logo-svg transition-all duration-500 group-hover:scale-110"
						>
							<path 
								d="M43 31L31 40H5L7 35L12 31H29L32 35L40 11L45 7H50L43 31ZM43 5L38 9H21L18 5L10 29L5 33H0L7 9L19 0H45L43 5ZM24 13H35L29 31L26 27H15L21 9L24 13Z" 
								class="logo-path"
								fill="currentColor"
							/>
						</svg>
					</div>
					<div class="flex flex-col">
						<span class="text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-500">
							FORMETA
						</span>
						<span class="text-xs font-medium text-white/70 group-hover:text-white/60 transition-colors duration-500 -mt-1">
							LABS
						</span>
					</div>
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<div class="relative group">
						<a 
							href={item.href} 
							class="nav-link-glassmorphism {$page.url.pathname === item.href ? 'text-white' : 'text-white/80'}"
						>
							{item.name}
							{#if item.hasDropdown}
								<Icon name="chevron-down" size={16} className="ml-1 inline" />
							{/if}
						</a>
						
						{#if item.hasDropdown}
							<div class="absolute top-full left-0 mt-2 w-64 dropdown-glassmorphism opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
								{#each services as service}
									<a 
										href={service.href} 
										class="flex items-center px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors rounded-md mx-2 my-1"
									>
										<Icon name={service.icon} size={16} className="mr-3 text-white/60" />
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
					class="btn-glassmorphism flex items-center space-x-2"
				>
					<Icon name="lock" size={16} className="text-white/70" />
					<span class="text-white/90">INTRANET</span>
					<span class="status-badge-glass">SECURE</span>
				</button>
			</div>
			
			<!-- Mobile Menu Button -->
			<div class="md:hidden">
				<button 
					on:click={toggleMobileMenu}
					class="text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
				>
					<Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
				</button>
			</div>
		</div>
		
		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t border-white/20 mobile-glass-menu">
				<div class="py-4 space-y-1">
					{#each navItems as item}
						<a 
							href={item.href} 
							class="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-lg mx-2 {$page.url.pathname === item.href ? 'text-white bg-white/10' : ''}"
							on:click={() => mobileMenuOpen = false}
						>
							{item.name}
						</a>
					{/each}
					
					<!-- Mobile Services -->
					<div class="px-4 py-2">
						<div class="text-sm font-semibold text-white/70 mb-2 uppercase">Servicios</div>
						{#each services as service}
							<a 
								href={service.href} 
								class="flex items-center px-2 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
								on:click={() => mobileMenuOpen = false}
							>
								<Icon name={service.icon} size={16} className="mr-3 text-white/60" />
								{service.name}
							</a>
						{/each}
					</div>
					
					<!-- Mobile Intranet -->
					<div class="px-4 py-2">
						<button 
							on:click={() => { openIntranet(); mobileMenuOpen = false; }}
							class="btn-glassmorphism w-full flex items-center justify-center space-x-2"
						>
							<Icon name="lock" size={16} className="text-white/70" />
							<span class="text-white/90">INTRANET</span>
							<span class="status-badge-glass">SECURE</span>
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

	/* Glassmorphism Navigation */
	.nav-glassmorphism {
		background: rgba(15, 23, 42, 0.85); /* Negro mármol con transparencia */
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 0 0 12px 12px;
		box-shadow: 
			0 8px 32px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.05),
			inset 0 -1px 0 rgba(0, 0, 0, 0.1);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Efecto de scroll - más sólido cuando se hace scroll */
	.nav-glassmorphism:not(:hover) {
		background: rgba(15, 23, 42, 0.95);
		border-color: rgba(255, 255, 255, 0.15);
	}

	/* Logo en blanco */
	.logo-svg {
		color: #ffffff;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
		transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.logo-path {
		transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Logo hover effect con colores Formeta */
	a:hover .logo-svg {
		animation: formetaColorCycle 2s ease-in-out infinite;
		filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
		transform: scale(1.05);
	}

	@keyframes formetaColorCycle {
		0% { 
			color: #ffffff;
			filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
		}
		25% { 
			color: #007AFF; /* color-blue-digital */
			filter: drop-shadow(0 2px 8px rgba(0, 122, 255, 0.4));
		}
		50% { 
			color: #FF6B6B; /* color-coral-digital */
			filter: drop-shadow(0 2px 8px rgba(255, 107, 107, 0.4));
		}
		75% { 
			color: #64748B; /* color-gray-ice */
			filter: drop-shadow(0 2px 8px rgba(100, 116, 139, 0.4));
		}
		100% { 
			color: #ffffff;
			filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
		}
	}

	/* Navigation Links */
	.nav-link-glassmorphism {
		color: rgba(255, 255, 255, 0.8);
		font-weight: 600;
		font-size: 14px;
		letter-spacing: 0.5px;
		padding: 8px 16px;
		border-radius: 8px;
		transition: all 0.3s ease;
		position: relative;
	}

	.nav-link-glassmorphism:hover {
		color: rgba(255, 255, 255, 1);
		background: rgba(255, 255, 255, 0.1);
		transform: translateY(-1px);
	}

	.nav-link-glassmorphism::before {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, #007AFF, #FF6B6B);
		transform: translateX(-50%);
		transition: width 0.3s ease;
	}

	.nav-link-glassmorphism:hover::before {
		width: 80%;
	}

	/* Dropdown glassmorphism */
	.dropdown-glassmorphism {
		background: rgba(15, 23, 42, 0.9);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 12px;
		padding: 8px;
		box-shadow: 
			0 16px 32px rgba(0, 0, 0, 0.4),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	/* Botones glassmorphism */
	.btn-glassmorphism {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 10px;
		padding: 8px 16px;
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0.5px;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.btn-glassmorphism:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.3);
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	/* Status badge glass */
	.status-badge-glass {
		background: rgba(34, 197, 94, 0.2);
		border: 1px solid rgba(34, 197, 94, 0.3);
		color: rgba(34, 197, 94, 1);
		font-size: 10px;
		font-weight: 700;
		padding: 2px 6px;
		border-radius: 4px;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	/* Mobile menu glassmorphism */
	.mobile-glass-menu {
		background: rgba(15, 23, 42, 0.95);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	/* Text gradient hover para logo */
	a:hover span:first-child {
		background: linear-gradient(45deg, #ffffff, #007AFF, #FF6B6B, #64748B);
		background-size: 400% 400%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: gradientShift 2s ease-in-out infinite;
	}

	@keyframes gradientShift {
		0% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
		100% { background-position: 0% 50%; }
	}

	/* Responsive optimization */
	@media (max-width: 768px) {
		.nav-glassmorphism {
			border-radius: 0;
			border-left: none;
			border-right: none;
		}
		
		.logo-svg {
			width: 32px;
			height: 26px;
		}
		
		a:hover .logo-svg {
			animation-duration: 3s;
		}
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.logo-svg,
		.logo-path,
		a:hover span:first-child,
		.nav-link-glassmorphism,
		.btn-glassmorphism {
			animation: none;
			transition: none;
		}
		
		a:hover .logo-svg {
			color: #ffffff;
			transform: none;
		}
	}

	/* Scroll enhancement - hace el nav más opaco cuando se scrollea */
	@supports (backdrop-filter: blur(1px)) {
		.nav-glassmorphism {
			background: rgba(15, 23, 42, 0.8);
		}
	}

	/* Safari specific fixes */
	@supports (-webkit-backdrop-filter: blur(1px)) {
		.nav-glassmorphism {
			backdrop-filter: blur(16px);
			-webkit-backdrop-filter: blur(16px);
		}
		
		.dropdown-glassmorphism {
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);
		}
	}
</style>
