<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  
  // Importar iconos de Lucide
  import { 
    BookOpen, 
    Calendar, 
    User, 
    ArrowRight,
    Clock,
    Tag,
    Search,
    Filter,
    TrendingUp,
    Zap,
    Shield,
    Target
  } from 'lucide-svelte';
  
  // Datos de ejemplo para el blog
  const blogPosts = [
    {
      id: 1,
      title: "Transformación Digital: Claves para el Éxito en 2025",
      excerpt: "Descubre las tendencias más importantes en transformación digital y cómo implementarlas en tu empresa para mantenerse competitivo.",
      author: "Equipo Formeta",
      date: "15 Enero 2025",
      readTime: "5 min",
      category: "Transformación Digital",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "VeriFactu: Todo lo que Necesitas Saber",
      excerpt: "Guía completa sobre la implementación del sistema VeriFactu y cómo cumplir con la normativa de la AEAT.",
      author: "Equipo Formeta",
      date: "12 Enero 2025",
      readTime: "8 min",
      category: "Compliance",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Automatización de Procesos: Casos de Éxito",
      excerpt: "Analizamos casos reales de empresas que han logrado aumentar su eficiencia un 300% con automatización.",
      author: "Equipo Formeta",
      date: "10 Enero 2025",
      readTime: "6 min",
      category: "Automatización",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cloud Computing: Migración Segura y Eficiente",
      excerpt: "Pasos para migrar tu infraestructura a la nube de forma segura y aprovechar todos sus beneficios.",
      author: "Equipo Formeta",
      date: "8 Enero 2025",
      readTime: "7 min",
      category: "Cloud",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "CRM Moderno: Mejora la Relación con tus Clientes",
      excerpt: "Cómo implementar un CRM efectivo que te ayude a gestionar mejor las relaciones con tus clientes.",
      author: "Equipo Formeta",
      date: "5 Enero 2025",
      readTime: "4 min",
      category: "CRM",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Ciberseguridad: Protege tu Empresa Digital",
      excerpt: "Mejores prácticas y herramientas para proteger tu empresa de amenazas cibernéticas.",
      author: "Equipo Formeta",
      date: "3 Enero 2025",
      readTime: "9 min",
      category: "Seguridad",
      image: "/api/placeholder/400/250"
    }
  ];
  
  const categories = [
    { name: "Todos", count: blogPosts.length },
    { name: "Transformación Digital", count: 1 },
    { name: "Compliance", count: 1 },
    { name: "Automatización", count: 1 },
    { name: "Cloud", count: 1 },
    { name: "CRM", count: 1 },
    { name: "Seguridad", count: 1 }
  ];
  
  let selectedCategory = "Todos";
  
  $: filteredPosts = blogPosts.filter(post => {
    return selectedCategory === "Todos" || post.category === selectedCategory;
  });
</script>

<svelte:head>
  <title>Blog - Formeta</title>
  <meta name="description" content="Descubre artículos, novedades y recursos sobre transformación digital, automatización y tecnología empresarial." />
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
        Nuestro <span class="text-white/80">Blog</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
        Descubre artículos, novedades y recursos sobre transformación digital y tecnología empresarial
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
        <Button href="#articulos" variant="glass" size="lg">
          Ver Artículos
        </Button>
        <Button href="/contacto" variant="secondary" size="lg">
          Suscribirse
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Featured Post Section -->
<section class="section-standard bg-section-primary relative overflow-hidden services-modern">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-formeta-gradient opacity-5"></div>
  
  <div class="section-container relative">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        Artículo <span class="text-formeta-gradient">Destacado</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        El contenido más relevante y actualizado sobre tecnología empresarial
      </p>
    </div>
    
    {#each blogPosts.filter(post => post.featured) as post}
      <div class="glass-card p-8 hover-lift group">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div class="flex items-center space-x-4 mb-4">
              <span class="px-3 py-1 bg-formeta-gradient text-white text-xs font-semibold rounded-full">
                {post.category}
              </span>
              <div class="flex items-center text-gray-500 text-sm">
                <Calendar class="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div class="flex items-center text-gray-500 text-sm">
                <Clock class="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h3 class="text-3xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">
              {post.title}
            </h3>
            
            <p class="text-gray-600 mb-6 leading-relaxed text-lg">
              {post.excerpt}
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center text-gray-500 text-sm">
                <User class="w-4 h-4 mr-2" />
                {post.author}
              </div>
              
              <a href={`/blog/${post.id}`} class="btn-service-cta inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-formeta-gradient rounded-xl hover-lift transition-all duration-200">
                <span>Leer Más</span>
                <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
          
          <div class="relative">
            <div class="w-full h-64 bg-gradient-to-br from-formeta-primary/20 to-formeta-secondary/20 rounded-xl flex items-center justify-center">
              <BookOpen class="w-16 h-16 text-formeta-primary" />
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Blog Posts Section -->
<section id="articulos" class="section-standard bg-section-light relative overflow-hidden services-modern">
  <div class="section-container">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        Todos los <span class="text-formeta-gradient">Artículos</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Explora nuestra colección completa de artículos sobre tecnología y transformación digital
      </p>
    </div>
    
    <!-- Filter Categories -->
    <div class="mb-12">
      <div class="flex flex-wrap justify-center gap-2">
        {#each categories as category}
          <button
            class="px-4 py-2 rounded-xl font-medium transition-all duration-100 hover-lift {selectedCategory === category.name ? 'bg-formeta-gradient text-white' : 'bg-white text-formeta-text border border-gray-300 hover:border-formeta-primary'}"
            on:click={() => selectedCategory = category.name}
          >
            <div class="flex items-center">
              <Filter class="w-4 h-4 mr-2" />
              {category.name}
              <span class="ml-2 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                {category.count}
              </span>
            </div>
          </button>
        {/each}
      </div>
    </div>
    
    <!-- Posts Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {#each filteredPosts.filter(post => !post.featured) as post}
        <div class="glass-card p-6 hover-lift group">
          <div class="mb-4">
            <div class="w-full h-48 bg-gradient-to-br from-formeta-primary/20 to-formeta-secondary/20 rounded-lg flex items-center justify-center mb-4">
              <BookOpen class="w-12 h-12 text-formeta-primary" />
            </div>
            
            <div class="flex items-center space-x-4 mb-3">
              <span class="px-2 py-1 bg-formeta-primary/10 text-formeta-primary text-xs font-semibold rounded-full">
                {post.category}
              </span>
              <div class="flex items-center text-gray-500 text-xs">
                <Calendar class="w-3 h-3 mr-1" />
                {post.date}
              </div>
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-formeta-text mb-3 group-hover:text-formeta-gradient transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          <p class="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center text-gray-500 text-xs">
              <User class="w-3 h-3 mr-1" />
              {post.author}
            </div>
            
            <div class="flex items-center text-gray-500 text-xs">
              <Clock class="w-3 h-3 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <a 
            href={`/blog/${post.id}`} 
            class="w-full mt-4 inline-flex items-center justify-between px-6 py-3 text-sm font-semibold text-white bg-formeta-gradient rounded-xl hover-lift transition-all duration-200 group"
          >
            <span>Leer Más</span>
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      {/each}
    </div>
    
    {#if filteredPosts.length === 0}
      <div class="text-center py-12">
        <BookOpen class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-gray-600 mb-2">No se encontraron artículos</h3>
        <p class="text-gray-500">Intenta con otras categorías</p>
      </div>
    {/if}
  </div>
</section>

<!-- Topics Section -->
<section class="section-standard bg-section-primary relative overflow-hidden services-modern">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-formeta-gradient opacity-5"></div>
  
  <div class="section-container relative">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        Temas <span class="text-formeta-gradient">Populares</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Explora los temas más relevantes en tecnología empresarial y transformación digital
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="glass-card p-8 text-center hover-lift group">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <TrendingUp class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">Transformación Digital</h3>
        <p class="text-gray-600 mb-4">Estrategias y mejores prácticas para digitalizar tu empresa</p>
        <a href="/servicios" class="btn-service-cta inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-formeta-gradient rounded-xl hover-lift transition-all duration-200">
          <span>Ver Servicios</span>
          <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
      
      <div class="glass-card p-8 text-center hover-lift group">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Zap class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">Automatización</h3>
        <p class="text-gray-600 mb-4">Cómo automatizar procesos y aumentar la eficiencia</p>
        <a href="/servicios" class="btn-service-cta inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-formeta-gradient rounded-xl hover-lift transition-all duration-200">
          <span>Ver Servicios</span>
          <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
      
      <div class="glass-card p-8 text-center hover-lift group">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Shield class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">Compliance</h3>
        <p class="text-gray-600 mb-4">Cumplimiento normativo y sistemas de verificación</p>
        <a href="/servicios" class="btn-service-cta inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-formeta-gradient rounded-xl hover-lift transition-all duration-200">
          <span>Ver Servicios</span>
          <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
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
          ¿Te gusta nuestro <span class="text-white/80">contenido</span>?
        </h2>
        <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Suscríbete para recibir las últimas novedades y artículos sobre tecnología empresarial
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Button href="/contacto" variant="glass" size="lg">
          Suscribirse
        </Button>
        <Button href="/servicios" variant="secondary" size="lg">
          Ver Servicios
        </Button>
      </div>
      
      <div class="flex justify-center items-center space-x-8 text-white/70 text-sm">
        <div class="flex items-center">
          <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
          <span>Artículos Semanales</span>
        </div>
        <div class="flex items-center">
          <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
          <span>Contenido Exclusivo</span>
        </div>
        <div class="flex items-center">
          <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
          <span>Sin Spam</span>
        </div>
      </div>
    </div>
  </div>
</section> 