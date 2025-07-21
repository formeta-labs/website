<script lang="ts">
  import { services } from '$lib/data/content';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { fade } from 'svelte/transition';
  
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
    User,
    Filter
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
  
  let selectedCategory = 'all';
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'gestion-empresarial', name: 'Gestión Empresarial' },
    { id: 'digitalizacion', name: 'Digitalización' },
    { id: 'automatizacion', name: 'Automatización' },
    { id: 'verifactu', name: 'VeriFactu' },
    { id: 'consultoria', name: 'Consultoría IT' },
    { id: 'hosting-cloud', name: 'Hosting & Cloud' }
  ];
  
  $: filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.id === selectedCategory);
</script>

<svelte:head>
  <title>Servicios - Formeta</title>
  <meta name="description" content="Descubre todos los servicios que Formeta ofrece: gestión empresarial, digitalización, automatización, VeriFactu y más." />
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
        Nuestros <span class="text-white/80">Servicios</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
        Soluciones integrales para digitalizar, automatizar y optimizar tu negocio con tecnología de vanguardia
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
        <Button href="/contacto" variant="glass" size="lg">
          Solicitar Consulta
        </Button>
        <Button href="#servicios" variant="secondary" size="lg">
          Ver Servicios
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="servicios" class="section-standard bg-section-primary relative overflow-hidden services-modern">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-formeta-gradient opacity-5"></div>
  
  <div class="section-container relative">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        Soluciones <span class="text-formeta-gradient">Integrales</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Descubre todos nuestros servicios diseñados para transformar tu empresa con tecnología de vanguardia
      </p>
    </div>
    
    <!-- Filter Categories -->
    <div class="mb-12">
      <div class="flex flex-wrap justify-center gap-2">
        {#each categories as category}
          <button
            class="px-4 py-2 rounded-xl font-medium transition-all duration-100 hover-lift {selectedCategory === category.id ? 'bg-formeta-gradient text-white' : 'bg-white text-formeta-text border border-gray-300 hover:border-formeta-primary'}"
            on:click={() => selectedCategory = category.id}
          >
            <div class="flex items-center">
              <Filter class="w-4 h-4 mr-2" />
              {category.name}
              <span class="ml-2 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                {category.id === 'all' ? services.length : services.filter(service => service.id === category.id).length}
              </span>
            </div>
          </button>
        {/each}
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {#each filteredServices as service (service.id)}
        <div>
          <div class="service-card glass-card p-6 hover-lift group relative overflow-hidden" id={service.id}>
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
                href="/contacto" 
                variant="outline" 
                size="sm"
                className="w-full mt-auto btn-service-cta"
              >
                <span class="font-semibold">Solicitar Información</span>
                <ArrowRight class="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Why Choose Us Section -->
<section class="section-standard bg-section-light relative overflow-hidden services-modern">
  <div class="section-container">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        ¿Por qué <span class="text-formeta-gradient">elegirnos</span>?
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Nuestra experiencia y metodología garantizan resultados excepcionales para tu empresa
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="glass-card p-8 text-center hover-lift group">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <CheckCircle class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">Experiencia Comprobada</h3>
        <p class="text-gray-600">Más de 10 años transformando empresas con tecnología de vanguardia</p>
      </div>
      
      <div class="glass-card p-8 text-center hover-lift group">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Zap class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">Tecnología Avanzada</h3>
        <p class="text-gray-600">Utilizamos las últimas herramientas y metodologías del mercado</p>
      </div>
      
      <div class="glass-card p-8 text-center hover-lift group">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <User class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">Equipo Experto</h3>
        <p class="text-gray-600">Profesionales certificados y especializados en cada área</p>
      </div>
    </div>
  </div>
</section>

<!-- VeriFactu Special Section -->
<section class="section-standard bg-section-primary relative overflow-hidden services-modern">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-formeta-gradient opacity-5"></div>
  
  <div class="section-container relative">
    <div class="glass-card p-8 text-center hover-lift">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        VeriFactu - <span class="text-formeta-gradient">Cumplimiento Normativo</span>
      </h2>
      <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Implementamos el sistema de verificación de facturas conforme a la normativa de la AEAT, 
        garantizando el cumplimiento legal y la trazabilidad completa de tu facturación.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div class="text-center">
          <h3 class="font-semibold text-formeta-text mb-4 text-lg">Beneficios:</h3>
          <ul class="space-y-3 text-gray-600 text-left pl-32">
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-formeta-primary mr-3 flex-shrink-0" />
              Cumplimiento automático con AEAT
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-formeta-primary mr-3 flex-shrink-0" />
              Reducción de errores en facturación
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-formeta-primary mr-3 flex-shrink-0" />
              Trazabilidad completa
            </li>
          </ul>
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold text-formeta-text mb-4 text-lg">Características:</h3>
          <ul class="space-y-3 text-gray-600 text-left pl-32">
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-formeta-primary mr-3 flex-shrink-0" />
              Verificación en tiempo real
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-formeta-primary mr-3 flex-shrink-0" />
              Integración con sistemas existentes
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-formeta-primary mr-3 flex-shrink-0" />
              Reportes automáticos
            </li>
          </ul>
        </div>
      </div>
      
      <a href="/contacto" class="btn-all-services inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-formeta-gradient rounded-xl hover-lift transition-all duration-200">
        <span>Solicitar Demo VeriFactu</span>
        <ArrowRight class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
      </a>
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

