<script lang="ts">
  export let title: string;
  export let description: string = '';
  export let href: string;
  export let icon: string = '';
  export let external: boolean = false;
  export let variant: 'default' | 'glass' | 'highlighted' = 'default';
  
  const baseClasses = 'block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover-lift';
  const glassClasses = 'block glass-card p-6 hover:shadow-xl transition-all duration-300 hover-lift hover-glow';
  const highlightedClasses = 'block p-6 bg-gradient-to-r from-formeta-primary/10 to-formeta-secondary/10 border border-formeta-primary/20 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover-lift hover-glow';
  
  $: cardClasses = variant === 'glass' ? glassClasses : variant === 'highlighted' ? highlightedClasses : baseClasses;
</script>

<a {href} class={cardClasses} target={external ? '_blank' : ''} rel={external ? 'noopener noreferrer' : ''}>
  <div class="flex items-start">
    {#if icon}
      <div class="flex-shrink-0 mr-4">
        <div class="w-12 h-12 bg-formeta-gradient rounded-lg flex items-center justify-center shadow-lg">
          <span class="text-2xl">{icon}</span>
        </div>
      </div>
    {/if}
    <div class="flex-1">
      <h3 class="text-lg font-semibold text-formeta-text mb-2 group-hover:text-formeta-primary transition-colors duration-300">{title}</h3>
      {#if description}
        <p class="text-gray-600 text-sm leading-relaxed">{description}</p>
      {/if}
      {#if external}
        <div class="mt-3 flex items-center text-formeta-accent text-sm font-medium">
          <span>Abrir herramienta</span>
          <svg class="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </div>
      {/if}
    </div>
  </div>
</a>
