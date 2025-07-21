<script lang="ts">
  import { page } from '$app/stores';
  import { publicNavigation } from '$lib/stores/navigation';
  import { isAuthenticated } from '$lib/stores/auth';
  import Button from '$lib/components/ui/Button.svelte';
  import { User } from 'lucide-svelte';
  
  let mobileMenuOpen = false;
  let scrolled = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  // Detect scroll for glassmorphism effect
  if (typeof window !== 'undefined') {
    function handleScroll() {
      scrolled = window.scrollY > 10;
    }
    
    window.addEventListener('scroll', handleScroll);
  }
  
  $: headerClasses = scrolled 
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav shadow-lg"
    : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md";
</script>

<header class={headerClasses}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-4">
      <!-- Logo y nombre -->
      <div class="flex items-center">
        <a href="/" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 flex items-center justify-center">
            <img src="/loofo-formeta.svg" alt="Logo Formeta" class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span class="text-xl font-bold text-formeta-primary tracking-tight">Formeta</span>
        </a>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        {#each publicNavigation as item}
          <a 
            href={item.href}
            class="text-gray-600 hover:text-formeta-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
            class:text-formeta-primary={$page.url.pathname === item.href}
          >
            {item.title}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-formeta-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        {/each}
      </nav>
      
      <!-- Actions -->
      <div class="hidden md:flex items-center space-x-4">
        {#if $isAuthenticated}
          <Button href="/dashboard" variant="primary" size="sm">
            Dashboard
          </Button>
        {:else}
          <a 
            href="/login" 
            class="flex items-center space-x-2 text-xl font-bold text-formeta-primary tracking-tight hover:text-formeta-accent transition-colors duration-300 group"
          >
            <span>Acceso</span>
            <User class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          </a>
        {/if}
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          type="button"
          class="p-2 rounded-md text-gray-600 hover:text-formeta-primary focus:outline-none focus:ring-2 focus:ring-formeta-primary focus:ring-offset-2 transition-colors duration-300"
          on:click={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each publicNavigation as item}
          <a 
            href={item.href}
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-formeta-primary hover:bg-gray-50 transition-all duration-300"
            class:text-formeta-primary={$page.url.pathname === item.href}
            on:click={() => mobileMenuOpen = false}
          >
            {item.title}
          </a>
        {/each}
        <div class="pt-2 px-3">
          {#if $isAuthenticated}
            <div class="w-full">
              <Button href="/dashboard" variant="primary" size="sm">
                Dashboard
              </Button>
            </div>
          {:else}
            <div class="w-full">
                          <a 
              href="/login" 
              class="flex items-center space-x-2 text-xl font-bold text-formeta-primary tracking-tight hover:text-formeta-accent transition-colors duration-300 group"
              on:click={() => mobileMenuOpen = false}
            >
              <span>Acceso</span>
              <User class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            </a>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</header>

<!-- Spacer -->
<div class="h-20"></div>

<style>
  /* Estilos específicos del header siguiendo la guía de Formeta */
  .glass-nav {
    background: rgba(248, 250, 252, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(226, 232, 240, 0.5);
  }
  
  /* Asegurar que el texto del logo use la fuente correcta */
  :global(.text-formeta-primary) {
    color: var(--color-blue-digital, #007AFF);
    font-family: var(--font-primary, 'Geist', system-ui, sans-serif);
  }
  
  /* Hover effects para navegación */
  :global(.group:hover .group-hover\\:scale-110) {
    transform: scale(1.1);
  }
  
  /* Transiciones suaves */
  :global(.transition-all) {
    transition: all var(--duration-medium, 0.3s) var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
  }
</style>
