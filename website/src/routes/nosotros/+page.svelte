<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  
  // Importar iconos de Lucide
  import { 
    Users, 
    Target, 
    Award, 
    Zap,
    CheckCircle,
    ArrowRight,
    Star,
    User,
    Building,
    Globe,
    Shield,
    Heart
  } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Sobre Nosotros - Formeta</title>
  <meta name="description" content="Conoce más sobre Formeta, nuestro equipo, misión y valores. Más de 10 años transformando empresas con tecnología." />
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
        Sobre <span class="text-white/80">Nosotros</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
        Más de 10 años transformando empresas con tecnología de vanguardia y soluciones innovadoras
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
        <Button href="#mision" variant="glass" size="lg">
          Nuestra Misión
        </Button>
        <Button href="/contacto" variant="secondary" size="lg">
          Contactar
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Mission Section -->
<section id="mision" class="section-standard bg-section-primary relative overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-formeta-gradient opacity-5"></div>
  
  <div class="section-container relative">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        Nuestra <span class="text-formeta-gradient">Misión</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Transformar empresas a través de la tecnología, proporcionando soluciones innovadoras que impulsen el crecimiento y la eficiencia
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div class="glass-card p-8 text-center hover-lift group">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Target class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">Visión</h3>
        <p class="text-gray-600">Ser líderes en la transformación digital, creando un futuro donde la tecnología impulse el éxito empresarial</p>
      </div>
      
      <div class="glass-card p-8 text-center hover-lift group">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Heart class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">Valores</h3>
        <p class="text-gray-600">Innovación, excelencia, confianza y compromiso con el éxito de nuestros clientes</p>
      </div>
      
      <div class="glass-card p-8 text-center hover-lift group">
        <div class="w-16 h-16 mx-auto mb-6 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Zap class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-4 group-hover:text-formeta-gradient transition-colors duration-300">Objetivo</h3>
        <p class="text-gray-600">Empoderar a las empresas con herramientas digitales que optimicen sus procesos y maximicen resultados</p>
      </div>
    </div>
  </div>
</section>

<!-- Team Section -->
<section class="section-standard bg-section-light relative overflow-hidden">
  <div class="section-container">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        Nuestro <span class="text-formeta-gradient">Equipo</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Profesionales expertos y apasionados por la tecnología, comprometidos con la excelencia y la innovación
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div class="glass-card p-6 text-center hover-lift group">
        <div class="w-24 h-24 mx-auto mb-4 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <User class="w-12 h-12 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-2 group-hover:text-formeta-gradient transition-colors duration-300">Equipo Directivo</h3>
        <p class="text-gray-600 mb-4">Líderes con visión estratégica y amplia experiencia en transformación digital</p>
        <div class="flex justify-center space-x-2">
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
        </div>
      </div>
      
      <div class="glass-card p-6 text-center hover-lift group">
        <div class="w-24 h-24 mx-auto mb-4 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Building class="w-12 h-12 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-2 group-hover:text-formeta-gradient transition-colors duration-300">Desarrolladores</h3>
        <p class="text-gray-600 mb-4">Especialistas en las últimas tecnologías y metodologías de desarrollo</p>
        <div class="flex justify-center space-x-2">
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
        </div>
      </div>
      
      <div class="glass-card p-6 text-center hover-lift group">
        <div class="w-24 h-24 mx-auto mb-4 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Shield class="w-12 h-12 text-white" />
        </div>
        <h3 class="text-xl font-bold text-formeta-text mb-2 group-hover:text-formeta-gradient transition-colors duration-300">Consultores</h3>
        <p class="text-gray-600 mb-4">Expertos en estrategia digital y optimización de procesos empresariales</p>
        <div class="flex justify-center space-x-2">
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Experience Section -->
<section class="section-standard bg-section-primary relative overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-formeta-gradient opacity-5"></div>
  
  <div class="section-container relative">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        Nuestra <span class="text-formeta-gradient">Experiencia</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Más de una década transformando empresas y creando soluciones que marcan la diferencia
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      <div class="glass-card p-6 text-center hover-lift group">
        <div class="text-4xl font-bold text-formeta-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
          10+
        </div>
        <div class="text-formeta-text font-semibold">Años de Experiencia</div>
      </div>
      
      <div class="glass-card p-6 text-center hover-lift group">
        <div class="text-4xl font-bold text-formeta-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
          500+
        </div>
        <div class="text-formeta-text font-semibold">Proyectos Completados</div>
      </div>
      
      <div class="glass-card p-6 text-center hover-lift group">
        <div class="text-4xl font-bold text-formeta-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
          200+
        </div>
        <div class="text-formeta-text font-semibold">Clientes Satisfechos</div>
      </div>
      
      <div class="glass-card p-6 text-center hover-lift group">
        <div class="text-4xl font-bold text-formeta-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
          24/7
        </div>
        <div class="text-formeta-text font-semibold">Soporte Técnico</div>
      </div>
    </div>
    
    <div class="glass-card p-8 text-center hover-lift">
      <h3 class="text-2xl font-bold text-formeta-text mb-6">
        Tecnologías y <span class="text-formeta-gradient">Certificaciones</span>
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="flex flex-col items-center group">
          <Award class="w-12 h-12 text-formeta-primary mb-2 group-hover:text-formeta-gradient transition-colors duration-300" />
          <span class="text-sm font-medium text-gray-600">Microsoft Partner</span>
        </div>
        <div class="flex flex-col items-center group">
          <Award class="w-12 h-12 text-formeta-primary mb-2 group-hover:text-formeta-gradient transition-colors duration-300" />
          <span class="text-sm font-medium text-gray-600">AWS Certified</span>
        </div>
        <div class="flex flex-col items-center group">
          <Award class="w-12 h-12 text-formeta-primary mb-2 group-hover:text-formeta-gradient transition-colors duration-300" />
          <span class="text-sm font-medium text-gray-600">Google Cloud</span>
        </div>
        <div class="flex flex-col items-center group">
          <Award class="w-12 h-12 text-formeta-primary mb-2 group-hover:text-formeta-gradient transition-colors duration-300" />
          <span class="text-sm font-medium text-gray-600">ISO 27001</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="section-standard bg-section-light relative overflow-hidden">
  <div class="section-container">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-formeta-text mb-6">
        Nuestros <span class="text-formeta-gradient">Valores</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Los principios que guían nuestro trabajo y definen nuestra relación con los clientes
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="glass-card p-6 hover-lift group">
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Zap class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-formeta-text mb-2 group-hover:text-formeta-gradient transition-colors duration-300">Innovación</h3>
            <p class="text-gray-600">Buscamos constantemente nuevas formas de resolver desafíos y mejorar procesos</p>
          </div>
        </div>
      </div>
      
      <div class="glass-card p-6 hover-lift group">
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Award class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-formeta-text mb-2 group-hover:text-formeta-gradient transition-colors duration-300">Excelencia</h3>
            <p class="text-gray-600">Nos esforzamos por la perfección en cada proyecto y servicio que entregamos</p>
          </div>
        </div>
      </div>
      
      <div class="glass-card p-6 hover-lift group">
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Shield class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-formeta-text mb-2 group-hover:text-formeta-gradient transition-colors duration-300">Confianza</h3>
            <p class="text-gray-600">Construimos relaciones duraderas basadas en la transparencia y la confianza</p>
          </div>
        </div>
      </div>
      
      <div class="glass-card p-6 hover-lift group">
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-formeta-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Heart class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-formeta-text mb-2 group-hover:text-formeta-gradient transition-colors duration-300">Compromiso</h3>
            <p class="text-gray-600">Nos comprometemos con el éxito de nuestros clientes y su crecimiento</p>
          </div>
        </div>
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
          ¿Listo para <span class="text-white/80">trabajar</span> con nosotros?
        </h2>
        <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Únete a las más de 200 empresas que ya confían en Formeta para su transformación digital
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Button href="/contacto" variant="glass" size="lg">
          Solicitar Consulta
        </Button>
        <Button href="/servicios" variant="secondary" size="lg">
          Ver Servicios
        </Button>
      </div>
      
      <div class="flex justify-center items-center space-x-8 text-white/70 text-sm">
        <div class="flex items-center">
          <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
          <span>10+ Años de Experiencia</span>
        </div>
        <div class="flex items-center">
          <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
          <span>500+ Proyectos</span>
        </div>
        <div class="flex items-center">
          <div class="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
          <span>200+ Clientes</span>
        </div>
      </div>
    </div>
  </div>
</section> 