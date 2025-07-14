<script lang="ts">
  import { services, testimonials, stats } from '$lib/data/content';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<svelte:head>
  <title>Formeta - Soluciones de Gestión Empresarial</title>
  <meta name="description" content="Formeta ofrece soluciones completas de software de gestión empresarial, digitalización, automatización y consultoría para empresas modernas." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-formeta-gradient text-white py-20 overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-black/10"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        Transformamos tu <span class="text-white/80">Empresa</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
        Soluciones completas de gestión empresarial, digitalización y automatización para empresas modernas
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
        <Button href="/contacto" variant="glass" size="lg">
          Solicitar Consulta
        </Button>
        <Button href="/servicios" variant="outline" size="lg">
          Ver Servicios
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="py-16 bg-gradient-to-b from-white to-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-formeta-text mb-4">
        Nuestros Servicios
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Ofrecemos soluciones integrales para digitalizar y optimizar tu negocio
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services.slice(0, 6) as service}
        <Card
          title={service.title}
          description={service.description}
          href="/servicios#{service.id}"
          icon={service.icon}
          variant="glass"
        />
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <Button href="/servicios" variant="primary" size="lg">
        Ver Todos los Servicios
      </Button>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="py-16 bg-gradient-to-r from-formeta-primary/5 to-formeta-secondary/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      {#each stats as stat}
        <div class="text-center glass-card p-6 hover-lift">
          <div class="text-4xl font-bold text-formeta-gradient mb-2">
            {stat.value}
          </div>
          <div class="text-formeta-text">
            {stat.label}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-formeta-text mb-4">
        Lo que dicen nuestros clientes
      </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each testimonials as testimonial}
        <div class="glass-card p-6 hover-lift">
          <div class="flex items-center mb-4">
            {#each Array(testimonial.rating) as _, i}
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            {/each}
          </div>
          <p class="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
          <div>
            <div class="font-semibold text-formeta-text">{testimonial.name}</div>
            <div class="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-formeta-text text-white relative overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-formeta-gradient opacity-10"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">
      ¿Listo para transformar tu empresa?
    </h2>
    <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
      Contáctanos hoy mismo para una consulta personalizada y descubre cómo podemos ayudarte
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Button href="/contacto" variant="glass" size="lg">
        Contactar Ahora
      </Button>
      <Button href="/login" variant="outline" size="lg">
        Acceso Empleados
      </Button>
    </div>
  </div>
</section>
