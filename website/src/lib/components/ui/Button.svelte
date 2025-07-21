<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'outline' | 'glass' | 'success' | 'warning' | 'error' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled = false;
  export let loading = false;
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let className = '';
  
  const baseClasses = 'font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'btn-formeta-primary focus:ring-formeta-primary/50',
    secondary: 'btn-formeta-secondary focus:ring-formeta-secondary/50',
    outline: 'btn-formeta-outline focus:ring-formeta-primary/50',
    glass: 'btn-formeta-glass focus:ring-formeta-accent/50',
    success: 'bg-success-600 hover:bg-success-700 text-white focus:ring-success-500 shadow-lg hover:shadow-xl',
    warning: 'bg-warning-600 hover:bg-warning-700 text-white focus:ring-warning-500 shadow-lg hover:shadow-xl',
    error: 'bg-error-600 hover:bg-error-700 text-white focus:ring-error-500 shadow-lg hover:shadow-xl'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };
  
  $: classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
</script>

{#if href}
  <a {href} class={classes} class:pointer-events-none={disabled}>
    {#if loading}
      <span class="inline-flex items-center">
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <slot />
      </span>
    {:else}
      <slot />
    {/if}
  </a>
{:else}
  <button {type} {disabled} class={classes} on:click>
    {#if loading}
      <span class="inline-flex items-center">
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <slot />
      </span>
    {:else}
      <slot />
    {/if}
  </button>
{/if}
