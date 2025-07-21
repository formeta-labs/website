<script lang="ts">
  export let id: string;
  export let name: string;
  export let label: string;
  export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' = 'text';
  export let value: string = '';
  export let placeholder: string = '';
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let error: string = '';
  export let rows: number = 3;
  
  const baseClasses = 'input-formeta disabled:opacity-50 disabled:cursor-not-allowed';
  const errorClasses = 'border-error-300 focus:border-error-500 focus:ring-error-500/20';
  
  $: inputClasses = error ? `${baseClasses} ${errorClasses}` : baseClasses;
</script>

<div class="space-y-3">
  <label for={id} class="block text-sm font-semibold text-formeta-text font-poppins uppercase tracking-wide">
    {label}
    {#if required}
      <span class="text-red-500 ml-1">*</span>
    {/if}
  </label>
  
  {#if type === 'textarea'}
    <textarea
      {id}
      {name}
      {placeholder}
      {required}
      {disabled}
      {rows}
      class={inputClasses}
      bind:value
      on:input
      on:blur
      on:focus
    ></textarea>
  {:else}
    <input
      {id}
      {name}
      {type}
      {placeholder}
      {required}
      {disabled}
      class={inputClasses}
      bind:value
      on:input
      on:blur
      on:focus
    />
  {/if}
  
  {#if error}
    <p class="text-sm text-red-600 mt-2 font-inter animate-fade-in">{error}</p>
  {/if}
</div>
