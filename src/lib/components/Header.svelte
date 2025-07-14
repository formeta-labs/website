<script lang="ts">
  import { page } from '$app/stores';
  import { publicNavigation } from '$lib/stores/navigation';
  import { isAuthenticated } from '$lib/stores/auth';
  import Button from '$lib/components/ui/Button.svelte';
  
  let mobileMenuOpen = false;
  let scrolled = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  // Detect scroll for blur effect
  if (typeof window !== 'undefined') {
    function handleScroll() {
      scrolled = window.scrollY > 10;
    }
    
    window.addEventListener('scroll', handleScroll);
  }
  
  $: headerClasses = scrolled 
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav shadow-lg"
    : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white";
</script>

<header class={headerClasses}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-4">
      <!-- Logo -->
      <div class="flex items-center">
        <a href="/" class="flex items-center group">
          <div class="w-10 h-10 bg-formeta-gradient rounded-lg flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
            <span class="text-white font-bold text-xl">F</span>
          </div>
          <span class="text-xl font-bold text-formeta-gradient">Formeta</span>
        </a>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        {#each publicNavigation as item}
          <a 
            href={item.href}
            class="text-gray-600 hover:text-formeta-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100"
            class:text-formeta-primary={$page.url.pathname === item.href}
            class:bg-gray-100={$page.url.pathname === item.href}
          >
            {item.title}
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
          <Button href="/login" variant="glass" size="sm">
            Acceso
          </Button>
        {/if}
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          type="button"
          class="glass-button p-2 rounded-md inline-flex items-center justify-center text-gray-600 hover:text-formeta-primary focus:outline-none focus:ring-2 focus:ring-formeta-accent"
          on:click={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg class="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" class:rotate-90={mobileMenuOpen}>
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
    <div class="md:hidden animate-slide-down">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card mx-4 mb-4">
        {#each publicNavigation as item}
          <a 
            href={item.href}
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-formeta-primary hover:bg-gray-100 transition-all duration-300"
            class:text-formeta-primary={$page.url.pathname === item.href}
            class:bg-gray-100={$page.url.pathname === item.href}
            on:click={() => mobileMenuOpen = false}
          >
            {item.title}
          </a>
        {/each}
        <div class="pt-2 px-3">
          {#if $isAuthenticated}
            <Button href="/dashboard" variant="primary" size="sm">
              Dashboard
            </Button>
          {:else}
            <Button href="/login" variant="primary" size="sm">
              Acceso
            </Button>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</header>

<!-- Spacer to prevent content from going under fixed header -->
<div class="h-20"></div>
