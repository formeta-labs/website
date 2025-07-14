<script lang="ts">
  import { submitContactForm, type ContactForm } from '$lib/stores/contact';
  import { addToast } from '$lib/stores/toast';
  import Button from '$lib/components/ui/Button.svelte';
  import Input from '$lib/components/ui/Input.svelte';
  import Select from '$lib/components/ui/Select.svelte';
  import Alert from '$lib/components/ui/Alert.svelte';
  import { fade, slide } from 'svelte/transition';
  
  let formData: ContactForm = {
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    serviceType: '',
    budgetRange: ''
  };
  
  let loading = false;
  let error = '';
  let success = false;
  
  const serviceOptions = [
    { value: 'gestion-empresarial', label: 'Gestión Empresarial' },
    { value: 'digitalizacion', label: 'Digitalización' },
    { value: 'automatizacion', label: 'Automatización' },
    { value: 'verifactu', label: 'VeriFactu' },
    { value: 'consultoria', label: 'Consultoría IT' },
    { value: 'hosting-cloud', label: 'Hosting & Cloud' },
    { value: 'desarrollo-web', label: 'Desarrollo Web' },
    { value: 'otros', label: 'Otros' }
  ];
  
  const budgetOptions = [
    { value: 'menos-5k', label: 'Menos de 5.000€' },
    { value: '5k-15k', label: '5.000€ - 15.000€' },
    { value: '15k-50k', label: '15.000€ - 50.000€' },
    { value: 'mas-50k', label: 'Más de 50.000€' },
    { value: 'consultar', label: 'Consultar' }
  ];
  
  // Validación en tiempo real
  $: nameValid = formData.name.length >= 2;
  $: emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  $: messageValid = formData.message.length >= 10;
  $: formValid = nameValid && emailValid && messageValid;
  
  async function handleSubmit() {
    if (!formValid) {
      error = 'Por favor, completa todos los campos obligatorios correctamente';
      return;
    }
    
    loading = true;
    error = '';
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        success = true;
        addToast({
          type: 'success',
          title: 'Mensaje enviado',
          message: 'Te contactaremos pronto'
        });
        
        // Reset form
        formData = {
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          serviceType: '',
          budgetRange: ''
        };
      } else {
        error = result.error || 'Error al enviar el mensaje';
      }
    } catch (err) {
      error = 'Error de conexión. Inténtalo de nuevo.';
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Contacto - Formeta</title>
  <meta name="description" content="Contacta con Formeta para solicitar información sobre nuestros servicios de gestión empresarial y digitalización" />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-formeta-gradient text-white py-20 overflow-hidden">
  <div class="absolute inset-0 bg-black/10"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        Hablemos de tu <span class="text-white/80">Proyecto</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
        Estamos aquí para ayudarte a transformar tu empresa. Cuéntanos qué necesitas.
      </p>
    </div>
  </div>
</section>

<!-- Contact Form Section -->
<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Contact Form -->
      <div>
        <h2 class="text-3xl font-bold text-formeta-text mb-8">
          Solicita una Consulta
        </h2>
        
        {#if error}
          <div class="mb-6" transition:slide>
            <Alert type="error" title="Error" message={error} />
          </div>
        {/if}
        
        {#if success}
          <div class="mb-6" transition:slide>
            <Alert type="success" title="¡Mensaje enviado!" message="Te contactaremos pronto" />
          </div>
        {/if}
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="name"
              label="Nombre completo *"
              type="text"
              bind:value={formData.name}
              placeholder="Tu nombre"
              required
              error={formData.name && !nameValid ? 'Nombre muy corto' : ''}
            />
            
            <Input
              id="email"
              label="Email *"
              type="email"
              bind:value={formData.email}
              placeholder="tu@email.com"
              required
              error={formData.email && !emailValid ? 'Email inválido' : ''}
            />
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="company"
              label="Empresa"
              type="text"
              bind:value={formData.company}
              placeholder="Nombre de tu empresa"
            />
            
            <Input
              id="phone"
              label="Teléfono"
              type="tel"
              bind:value={formData.phone}
              placeholder="+34 600 000 000"
            />
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              id="serviceType"
              label="Tipo de servicio"
              bind:value={formData.serviceType}
              options={serviceOptions}
              placeholder="Selecciona un servicio"
            />
            
            <Select
              id="budgetRange"
              label="Rango de presupuesto"
              bind:value={formData.budgetRange}
              options={budgetOptions}
              placeholder="Selecciona un rango"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-formeta-text mb-2">
              Mensaje *
            </label>
            <textarea
              id="message"
              bind:value={formData.message}
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-formeta-primary focus:border-transparent transition-colors resize-none"
              placeholder="Cuéntanos sobre tu proyecto..."
              required
            ></textarea>
            {#if formData.message && !messageValid}
              <p class="mt-1 text-sm text-red-600">El mensaje debe tener al menos 10 caracteres</p>
            {/if}
          </div>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading || !formValid}
            class="w-full"
          >
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </form>
      </div>
      
      <!-- Contact Information -->
      <div class="space-y-8">
        <div class="glass-card p-8">
          <h3 class="text-2xl font-bold text-formeta-text mb-6">
            Información de Contacto
          </h3>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-formeta-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-formeta-text">Dirección</h4>
                <p class="text-gray-600">
                  C/ Principal 123<br>
                  28001 Madrid, España
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-formeta-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-formeta-text">Teléfono</h4>
                <p class="text-gray-600">
                  <a href="tel:+34900000000" class="hover:text-formeta-primary transition-colors">
                    +34 900 000 000
                  </a>
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-formeta-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-formeta-text">Email</h4>
                <p class="text-gray-600">
                  <a href="mailto:info@formeta.es" class="hover:text-formeta-primary transition-colors">
                    info@formeta.es
                  </a>
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-formeta-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-formeta-text">Horario</h4>
                <p class="text-gray-600">
                  Lunes - Viernes: 9:00 - 18:00<br>
                  Sábado: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quick Contact Options -->
        <div class="glass-card p-8">
          <h3 class="text-2xl font-bold text-formeta-text mb-6">
            Contacto Rápido
          </h3>
          
          <div class="space-y-4">
            <Button
              href="tel:+34900000000"
              variant="outline"
              size="lg"
              class="w-full justify-start"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Llamar Ahora
            </Button>
            
            <Button
              href="mailto:info@formeta.es"
              variant="outline"
              size="lg"
              class="w-full justify-start"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Enviar Email
            </Button>
            
            <Button
              href="https://wa.me/34900000000"
              variant="outline"
              size="lg"
              class="w-full justify-start"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.304"/>
              </svg>
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-formeta-text mb-4">
        Preguntas Frecuentes
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each [
        {
          question: "¿Cuánto tiempo toma implementar un proyecto?",
          answer: "Depende del alcance, pero típicamente entre 2-12 semanas. Proyectos simples pueden estar listos en 2-4 semanas, mientras que soluciones empresariales complejas pueden tomar 8-12 semanas."
        },
        {
          question: "¿Ofrecen soporte post-implementación?",
          answer: "Sí, ofrecemos diferentes planes de soporte que incluyen mantenimiento, actualizaciones, monitoreo y atención técnica especializada."
        },
        {
          question: "¿Qué es VeriFactu y por qué lo necesito?",
          answer: "VeriFactu es el sistema de verificación de facturas obligatorio de la AEAT. Te ayudamos a implementarlo para cumplir con la normativa fiscal española."
        },
        {
          question: "¿Pueden integrar con mis sistemas existentes?",
          answer: "Absolutamente. Nos especializamos en integraciones con ERP, CRM, sistemas de facturación y cualquier API o base de datos que uses actualmente."
        },
        {
          question: "¿Ofrecen formación para mi equipo?",
          answer: "Sí, incluimos sesiones de formación y documentación completa para que tu equipo pueda aprovechar al máximo las nuevas herramientas."
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos transferencias bancarias, tarjetas de crédito y ofrecemos planes de pago flexibles adaptados a cada proyecto."
        }
      ] as faq}
        <div class="glass-card p-6 hover-lift">
          <h3 class="text-lg font-semibold text-formeta-text mb-3">
            {faq.question}
          </h3>
          <p class="text-gray-600">
            {faq.answer}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
