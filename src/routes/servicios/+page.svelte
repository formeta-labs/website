<script lang="ts">
  import { services } from '$lib/data/content';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { fade } from 'svelte/transition';
  
  let selectedCategory = 'all';
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'digitalizacion', name: 'Digitalización' },
    { id: 'gestion', name: 'Gestión' },
    { id: 'automatizacion', name: 'Automatización' },
    { id: 'desarrollo', name: 'Desarrollo' },
    { id: 'consultoria', name: 'Consultoría' }
  ];
  
  $: filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
</script>

<svelte:head>
  <title>Servicios - Formeta</title>
  <meta name="description" content="Descubre todos los servicios que Formeta ofrece: gestión empresarial, digitalización, automatización, VeriFactu y más." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-formeta-gradient text-white py-20 overflow-hidden">
  <div class="absolute inset-0 bg-black/10"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        Nuestros <span class="text-white/80">Servicios</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
        Soluciones integrales para digitalizar, automatizar y optimizar tu negocio con tecnología de vanguardia
      </p>
    </div>
  </div>
</section>

<!-- Service Categories -->
<section class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      {#each categories as category}
        <Button
          variant={selectedCategory === category.id ? 'primary' : 'outline'}
          size="md"
          class="transition-all duration-200"
          onclick={() => selectedCategory = category.id}
        >
          {category.name}
        </Button>
      {/each}
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredServices as service (service.id)}
        <div in:fade="{{ delay: 100 }}" out:fade="{{ duration: 200 }}">
          <div class="glass-card p-6 hover-lift" id={service.id}>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-formeta-gradient rounded-lg flex items-center justify-center mr-4">
                <span class="text-2xl text-white">{service.icon}</span>
              </div>
              <h2 class="text-xl font-semibold text-formeta-text">{service.title}</h2>
            </div>
            
            <p class="text-gray-600 mb-4">{service.description}</p>
            
            <div class="mb-4">
              <h3 class="font-medium text-formeta-text mb-2">Características:</h3>
              <ul class="space-y-1">
                {#each service.features as feature}
                  <li class="flex items-center text-sm text-gray-600">
                    <svg class="w-4 h-4 text-formeta-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                {/each}
              </ul>
            </div>
            
            <div class="mb-6">
              <h3 class="font-medium text-formeta-text mb-2">Tecnologías:</h3>
              <div class="flex flex-wrap gap-2">
                {#each service.technologies as tech}
                  <span class="px-2 py-1 bg-formeta-primary/10 text-formeta-primary text-xs rounded-full">{tech}</span>
                {/each}
              </div>
            </div>
            
            <Button href="/contacto" variant="primary" size="sm">
              Solicitar Información
            </Button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Why Choose Us Section -->
<section class="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-formeta-text mb-4">
        ¿Por qué elegirnos?
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Nuestra experiencia y metodología garantizan resultados excepcionales
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="glass-card p-8 text-center hover-lift">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4">Experiencia Comprobada</h3>
        <p class="text-gray-600">Más de 10 años transformando empresas con tecnología</p>
      </div>
      
      <div class="glass-card p-8 text-center hover-lift">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4">Tecnología Avanzada</h3>
        <p class="text-gray-600">Utilizamos las últimas herramientas y metodologías</p>
      </div>
      
      <div class="glass-card p-8 text-center hover-lift">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4">Equipo Experto</h3>
        <p class="text-gray-600">Profesionales certificados y especializados</p>
      </div>
    </div>
  </div>
</section>

<!-- VeriFactu Special Section -->
<section class="py-16 bg-gradient-to-r from-formeta-primary/5 to-formeta-secondary/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="glass-card p-8 text-center">
      <h2 class="text-3xl font-bold text-formeta-text mb-4">
        VeriFactu - Cumplimiento Normativo
      </h2>
      <p class="text-gray-600 mb-8 max-w-3xl mx-auto">
        Implementamos el sistema de verificación de facturas conforme a la normativa de la AEAT, 
        garantizando el cumplimiento legal y la trazabilidad completa de tu facturación.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div class="text-left">
          <h3 class="font-semibold text-formeta-text mb-4">Beneficios:</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-formeta-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Cumplimiento automático con AEAT
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-formeta-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Reducción de errores en facturación
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-formeta-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Trazabilidad completa
            </li>
          </ul>
        </div>
        
        <div class="text-left">
          <h3 class="font-semibold text-formeta-text mb-4">Características:</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-formeta-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Verificación en tiempo real
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-formeta-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Reportes oficiales
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-formeta-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Certificados digitales
            </li>
          </ul>
        </div>
      </div>
      
      <Button href="/contacto" variant="primary" size="lg">
        Solicitar Implementación VeriFactu
      </Button>
    </div>
  </div>
</section>

<!-- Process Section -->
<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-formeta-text mb-4">
        Nuestro Proceso
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Metodología probada para garantizar el éxito de tu proyecto
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      {#each [
        { step: '01', title: 'Análisis', description: 'Evaluamos tu situación actual y necesidades' },
        { step: '02', title: 'Planificación', description: 'Diseñamos una solución personalizada' },
        { step: '03', title: 'Implementación', description: 'Ejecutamos la solución con precisión' },
        { step: '04', title: 'Soporte', description: 'Brindamos soporte continuo y mejoras' }
      ] as process, i}
        <div class="text-center">
          <div class="relative">
            <div class="w-16 h-16 mx-auto mb-4 bg-formeta-gradient rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-lg">{process.step}</span>
            </div>
            {#if i < 3}
              <div class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-formeta-primary to-formeta-secondary transform translate-x-1/2"></div>
            {/if}
          </div>
          <h3 class="text-xl font-bold text-formeta-text mb-2">{process.title}</h3>
          <p class="text-gray-600">{process.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-formeta-text text-white relative overflow-hidden">
  <div class="absolute inset-0 bg-formeta-gradient opacity-10"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">
      ¿Necesitas un servicio específico?
    </h2>
    <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
      Contáctanos para una consulta gratuita y personalizada
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Button href="/contacto" variant="glass" size="lg">
        Solicitar Consulta
      </Button>
      <Button href="/contacto" variant="outline" size="lg">
        Llamar Ahora
      </Button>
    </div>
  </div>
</section>

