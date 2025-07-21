<script lang="ts">
  export let id: string;
  export let name: string;
  export let label: string;
  export let value: string = '';
  export let options: Array<{ value: string; label: string }> = [];
  export let placeholder: string = 'Seleccionar...';
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let error: string = '';
  
  const baseClasses = 'input-formeta disabled:opacity-50 disabled:cursor-not-allowed';
  const errorClasses = 'border-error-300 focus:border-error-500 focus:ring-error-500/20';
  
  $: selectClasses = error ? `${baseClasses} ${errorClasses}` : baseClasses;
</script>

<div class="space-y-3">
  <label for={id} class="block text-sm font-semibold text-formeta-text font-poppins uppercase tracking-wide">
    {label}
    {#if required}
      <span class="text-red-500 ml-1">*</span>
    {/if}
  </label>
  
  <select
    {id}
    {name}
    {required}
    {disabled}
    class={selectClasses}
    bind:value
    on:change
    on:blur
    on:focus
  >
    {#if placeholder}
      <option value="" disabled>{placeholder}</option>
    {/if}
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  
  {#if error}
    <p class="text-sm text-red-600 mt-2 font-inter animate-fade-in">{error}</p>
  {/if}
</div>
