<script lang="ts">
  import { services, testimonials, stats } from '$lib/data/content';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  
  // Importar iconos de Lucide
  import { 
    Building, 
    FileDigit, 
    Zap, 
    Shield, 
    Target, 
    Cloud,
    CheckCircle,
    ArrowRight,
    Star,
    User
  } from 'lucide-svelte';
  
  // Mapeo de nombres de iconos a componentes
  const iconMap: Record<string, any> = {
    Building,
    FileDigit,
    Zap,
    Shield,
    Target,
    Cloud
  };
</script>

<svelte:head>
  <title>Formeta - Soluciones de Gestión Empresarial</title>
  <meta name="description" content="Formeta ofrece soluciones completas de software de gestión empresarial, digitalización, automatización y consultoría para empresas modernas." />
</svelte:head>

<!-- Hero Section -->
<section class="section-hero hero-modern text-white relative overflow-hidden">
  <!-- Efectos de partículas -->
  <div class="hero-particles">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </div>
  
  <div class="section-container-hero relative">
    <div class="hero-content text-center">
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
        <Button href="/servicios" variant="secondary" size="lg">
          Ver Servicios
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="section-standard bg-section-primary relative overflow-hidden services-modern">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-formeta-gradient opacity-5"></div>
  
  <div class="section-container relative">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        Nuestros <span class="text-formeta-gradient">Servicios</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Ofrecemos soluciones integrales para digitalizar y optimizar tu negocio con tecnología de vanguardia
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {#each services.slice(0, 6) as service}
        <div class="service-card glass-card p-6 hover-lift group relative overflow-hidden">
          <!-- Background gradient on hover -->
          <div class="absolute inset-0 bg-formeta-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          
          <div class="relative flex flex-col h-full">
            <!-- Icon and Title -->
            <div class="flex items-center mb-4">
              <div class="group-hover:scale-110 transition-transform duration-300 mr-3">
                {#if iconMap[service.icon]}
                  <svelte:component this={iconMap[service.icon]} class="w-10 h-10 text-formeta-primary group-hover:text-formeta-gradient transition-colors duration-300" />
                {/if}
              </div>
              <h3 class="text-xl font-bold text-formeta-text group-hover:text-formeta-gradient transition-colors duration-300">
                {service.title}
              </h3>
            </div>
            
            <!-- Description -->
            <p class="text-gray-600 mb-4 leading-relaxed text-sm h-12 flex items-center">
              {service.description}
            </p>
            
            <!-- Features preview -->
            <div class="mb-4 h-16">
              <ul class="space-y-1">
                {#each service.features.slice(0, 2) as feature}
                  <li class="flex items-center text-xs text-gray-500">
                    <CheckCircle class="w-3 h-3 text-formeta-primary mr-2 flex-shrink-0" />
                    <span class="line-clamp-2">{feature}</span>
                  </li>
                {/each}
              </ul>
            </div>
            
            <!-- Technologies -->
            <div class="mb-4 h-16">
              <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Tecnologías
              </div>
              <div class="flex flex-wrap gap-1">
                {#each service.technologies.slice(0, 2) as tech}
                  <span class="px-2 py-1 bg-formeta-primary/10 text-xs font-medium text-formeta-primary rounded-full border border-formeta-primary/20">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
            
            <!-- CTA Button -->
            <Button 
              href="/servicios#{service.id}" 
              variant="outline" 
              size="sm"
              className="w-full mt-auto btn-service-cta"
            >
              <span class="font-semibold">Saber más</span>
              <ArrowRight class="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center pt-8 pb-4">
      <Button href="/servicios" variant="primary" size="lg" className="btn-all-services">
        Ver Todos los Servicios
        <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="section-standard bg-section-light relative overflow-hidden testimonials-modern">
  <div class="section-container">
    <!-- Stats Section -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
    
    <!-- Testimonials -->
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
              <Star class="w-5 h-5 text-yellow-400 fill-current" />
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
<section class="section-small bg-section-dark relative overflow-hidden cta-formeta">
  <!-- Background gradient inverted -->
  <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(167, 139, 250, 0.9) 0%, rgba(74, 144, 226, 0.9) 100%);"></div>
  
  <div class="section-container-sm relative text-center">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          ¿Listo para <span class="text-white/80">transformar</span> tu empresa?
        </h2>
        <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Contáctanos hoy mismo para una consulta personalizada y descubre cómo podemos ayudarte
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Button href="/contacto" variant="glass" size="lg">
          Solicitar Consulta
        </Button>
        <Button href="/login" variant="secondary" size="lg">
          Acceso Empleados
        </Button>
      </div>
      
      <div class="flex justify-center items-center space-x-8 text-white/70 text-sm">
        <div class="flex items-center">
          <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
          <span>Transformación Digital</span>
        </div>
        <div class="flex items-center">
          <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
          <span>Automatización</span>
        </div>
        <div class="flex items-center">
          <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
          <span>Consultoría IT</span>
        </div>
      </div>
    </div>
  </div>
</section>
