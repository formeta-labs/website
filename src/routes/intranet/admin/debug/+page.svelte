<!-- src/routes/intranet/admin/debug/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { toast } from '$lib/stores/toast';
  import ToastContainer from '$lib/components/ToastContainer.svelte';
  import Icon from '$lib/components/Icon.svelte';
  
  // Toast testing states
  let toastType: 'success' | 'error' | 'warning' | 'info' = 'success';
  let toastTitle = 'Título de prueba';
  let toastMessage = 'Este es un mensaje de ejemplo para probar el sistema de notificaciones.';
  let toastDuration = 5000;
  let toastPersistent = false;
  let toastIcon = 'check-circle';
  let customToastCount = 0;
  
  // Component testing states
  let componentTests = [
    { name: 'Sistema de Notificaciones Toast', active: true, status: 'ready' },
    { name: 'Formularios de Contacto', active: true, status: 'ready' },
    { name: 'Theme Switcher', active: true, status: 'ready' },
    { name: 'Accessibility Checker', active: true, status: 'ready' },
    { name: 'Responsive Simulator', active: true, status: 'ready' },
    { name: 'Glassmorphism Components', active: false, status: 'pending' }
  ];
  
  // Performance monitoring
  let performanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    toastCount: 0
  };
  
  onMount(() => {
    const startTime = performance.now();
    
    // Simulate component load time
    setTimeout(() => {
      performanceMetrics.loadTime = performance.now() - startTime;
      performanceMetrics.memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
    }, 100);
    
    // Subscribe to toast store for metrics
    const unsubscribe = toast.subscribe(state => {
      performanceMetrics.toastCount = state.toasts.length;
    });
    
    return unsubscribe;
  });
  
  // Toast testing functions
  const showToast = () => {
    customToastCount++;
    const options = {
      duration: toastPersistent ? 0 : toastDuration,
      persistent: toastPersistent,
      icon: toastIcon || undefined
    };
    
    toast[toastType](
      `${toastTitle} #${customToastCount}`,
      toastMessage,
      options
    );
  };
  
  const showPresetToasts = () => {
    toast.success('¡Operación exitosa!', 'Los datos se han guardado correctamente.');
    
    setTimeout(() => {
      toast.warning('Advertencia importante', 'Algunos campos requieren revisión.');
    }, 500);
    
    setTimeout(() => {
      toast.error('Error del sistema', 'No se pudo conectar con el servidor.');
    }, 1000);
    
    setTimeout(() => {
      toast.info('Información útil', 'Recuerda guardar tu trabajo cada 5 minutos.');
    }, 1500);
  };
  
  const testLoadingToast = async () => {
    await toast.promise(
      new Promise(resolve => setTimeout(resolve, 3000)),
      {
        loading: 'Procesando solicitud...',
        success: 'Proceso completado con éxito',
        error: 'Error durante el proceso'
      }
    );
  };
  
  const testActionToast = () => {
    toast.warning('Acción requerida', 'Confirma esta operación.', {
      action: {
        label: 'Confirmar',
        handler: () => {
          toast.success('Confirmado', 'La acción se ha ejecutado correctamente.');
        }
      },
      duration: 10000
    });
  };
  
  const clearAllToasts = () => {
    toast.clearToasts();
  };
  
  // Component testing functions
  const toggleComponent = (index: number) => {
    componentTests[index].active = !componentTests[index].active;
    componentTests[index].status = componentTests[index].active ? 'ready' : 'pending';
  };
  
  // Performance testing
  const runPerformanceTest = () => {
    const start = performance.now();
    
    // Create multiple toasts rapidly
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        toast.info(`Test ${i + 1}`, `Mensaje de prueba de rendimiento ${i + 1}`, {
          duration: 2000
        });
      }, i * 100);
    }
    
    setTimeout(() => {
      performanceMetrics.renderTime = performance.now() - start;
    }, 1100);
  };
  
  // Icon options for toast testing
  const iconOptions = [
    'check-circle', 'x-circle', 'alert-triangle', 'info', 'loader',
    'bell', 'star', 'heart', 'thumbs-up', 'zap', 'shield', 'gift'
  ];

  // Form Testing Module
  let formTestData = {
    name: 'Juan Pérez',
    email: 'juan.perez@ejemplo.com',
    phone: '+34 612 345 678',
    company: 'Empresa de Prueba S.L.',
    message: 'Este es un mensaje de prueba para validar el formulario de contacto.',
    service: 'web-development'
  };
  let formValidationErrors = {};
  let formSubmissionStatus = 'idle'; // idle, submitting, success, error

  // Theme Switcher Module
  let currentTheme = 'auto';
  let themePreview = false;
  const themes = [
    { id: 'light', name: 'Claro', icon: 'sun' },
    { id: 'dark', name: 'Oscuro', icon: 'moon' },
    { id: 'auto', name: 'Automático', icon: 'monitor' }
  ];

  // Accessibility Checker Module
  let accessibilityTests = [
    { name: 'Contraste de Colores', status: 'pass', score: 95 },
    { name: 'Navegación por Teclado', status: 'warning', score: 78 },
    { name: 'Etiquetas Alt en Imágenes', status: 'pass', score: 100 },
    { name: 'Estructura de Encabezados', status: 'pass', score: 88 },
    { name: 'Roles ARIA', status: 'warning', score: 72 },
    { name: 'Tamaño de Elementos Interactivos', status: 'pass', score: 94 }
  ];
  let accessibilityOverallScore = 86;

  // Responsive Simulator Module
  let currentDevice = 'desktop';
  let customViewport = { width: 1200, height: 800 };
  const devicePresets = [
    { id: 'mobile', name: 'iPhone 14', width: 390, height: 844, icon: 'smartphone' },
    { id: 'tablet', name: 'iPad', width: 768, height: 1024, icon: 'tablet' },
    { id: 'laptop', name: 'MacBook Air', width: 1366, height: 768, icon: 'laptop' },
    { id: 'desktop', name: 'Desktop', width: 1920, height: 1080, icon: 'monitor' },
    { id: 'custom', name: 'Personalizado', width: 1200, height: 800, icon: 'settings' }
  ];

  // Form Testing Functions
  const validateFormField = (field, value) => {
    const errors = {};
    
    switch (field) {
      case 'name':
        if (!value || value.length < 2) errors.name = 'El nombre debe tener al menos 2 caracteres';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) errors.email = 'Email no válido';
        break;
      case 'phone':
        const phoneRegex = /^(\+34|0034|34)?[6789]\d{8}$/;
        if (value && !phoneRegex.test(value.replace(/\s/g, ''))) errors.phone = 'Teléfono no válido';
        break;
      case 'message':
        if (!value || value.length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres';
        break;
    }
    
    formValidationErrors = { ...formValidationErrors, ...errors };
    if (errors[field]) delete formValidationErrors[field];
  };

  const testFormSubmission = async () => {
    formSubmissionStatus = 'submitting';
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const hasErrors = Object.keys(formValidationErrors).length > 0;
    if (hasErrors || Math.random() < 0.3) {
      formSubmissionStatus = 'error';
      toast.error('Error en formulario', 'Algunos campos contienen errores');
    } else {
      formSubmissionStatus = 'success';
      toast.success('Formulario enviado', 'Los datos se han procesado correctamente');
    }
    
    setTimeout(() => {
      formSubmissionStatus = 'idle';
    }, 3000);
  };

  const resetForm = () => {
    formTestData = {
      name: 'Juan Pérez',
      email: 'juan.perez@ejemplo.com',
      phone: '+34 612 345 678',
      company: 'Empresa de Prueba S.L.',
      message: 'Este es un mensaje de prueba para validar el formulario de contacto.',
      service: 'web-development'
    };
    formValidationErrors = {};
    formSubmissionStatus = 'idle';
  };

  // Theme Switcher Functions
  const applyTheme = (themeId) => {
    currentTheme = themeId;
    const root = document.documentElement;
    
    switch (themeId) {
      case 'light':
        root.classList.remove('dark');
        root.classList.add('light');
        break;
      case 'dark':
        root.classList.remove('light');
        root.classList.add('dark');
        break;
      case 'auto':
        root.classList.remove('light', 'dark');
        break;
    }
    
    toast.info('Tema cambiado', `Aplicando tema: ${themes.find(t => t.id === themeId)?.name}`);
  };

  const toggleThemePreview = () => {
    themePreview = !themePreview;
    if (themePreview) {
      toast.info('Vista previa activada', 'Los cambios de tema se aplicarán temporalmente');
    }
  };

  // Accessibility Checker Functions
  const runAccessibilityTest = (testName) => {
    const test = accessibilityTests.find(t => t.name === testName);
    if (test) {
      // Simulate running test
      test.status = 'running';
      
      setTimeout(() => {
        test.status = Math.random() > 0.7 ? 'fail' : Math.random() > 0.4 ? 'warning' : 'pass';
        test.score = Math.floor(Math.random() * 40) + 60;
        
        // Recalculate overall score
        accessibilityOverallScore = Math.floor(
          accessibilityTests.reduce((sum, t) => sum + t.score, 0) / accessibilityTests.length
        );
        
        toast.info('Test completado', `${testName}: ${test.score}%`);
      }, 1500);
    }
  };

  const runAllAccessibilityTests = () => {
    accessibilityTests.forEach((test, index) => {
      setTimeout(() => runAccessibilityTest(test.name), index * 300);
    });
  };

  // Responsive Simulator Functions
  const setDevice = (deviceId) => {
    currentDevice = deviceId;
    const device = devicePresets.find(d => d.id === deviceId);
    if (device && deviceId !== 'custom') {
      customViewport = { width: device.width, height: device.height };
    }
    
    toast.info('Dispositivo cambiado', `Simulando: ${device?.name} (${customViewport.width}x${customViewport.height})`);
  };

  const updateCustomViewport = () => {
    if (currentDevice === 'custom') {
      toast.info('Viewport actualizado', `${customViewport.width}x${customViewport.height}px`);
    }
  };

  const rotateDevice = () => {
    const temp = customViewport.width;
    customViewport.width = customViewport.height;
    customViewport.height = temp;
    toast.info('Dispositivo rotado', `${customViewport.width}x${customViewport.height}px`);
  };
</script>

<svelte:head>
  <title>Debug Playground - Admin Formeta Labs</title>
</svelte:head>

<div class="debug-playground">
  <header class="debug-header">
    <div class="debug-header-content">
      <h1>🛠️ Debug Playground</h1>
      <p>Herramientas de prueba y desarrollo para componentes del sistema</p>
    </div>
    
    <div class="performance-metrics">
      <div class="metric">
        <span class="metric-label">Load Time</span>
        <span class="metric-value">{performanceMetrics.loadTime.toFixed(2)}ms</span>
      </div>
      <div class="metric">
        <span class="metric-label">Toasts Active</span>
        <span class="metric-value">{performanceMetrics.toastCount}</span>
      </div>
      {#if performanceMetrics.memoryUsage > 0}
        <div class="metric">
          <span class="metric-label">Memory</span>
          <span class="metric-value">{(performanceMetrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</span>
        </div>
      {/if}
    </div>
  </header>

  <div class="debug-content">
    <!-- Component Status Panel -->
    <section class="debug-section">
      <h2>🧩 Component Status</h2>
      <div class="component-grid">
        {#each componentTests as component, index}
          <div class="component-card" class:active={component.active}>
            <div class="component-header">
              <h3>{component.name}</h3>
              <div class="component-status status-{component.status}">
                {component.status}
              </div>
            </div>
            <button 
              class="component-toggle"
              on:click={() => toggleComponent(index)}
            >
              {component.active ? 'Desactivar' : 'Activar'}
            </button>
          </div>
        {/each}
      </div>
    </section>

    <!-- Toast Testing Panel -->
    <section class="debug-section toast-testing">
      <h2>🍞 Sistema de Notificaciones Toast</h2>
      
      <div class="toast-controls">
        <div class="control-group">
          <h3>Configuración de Toast</h3>
          
          <div class="form-row">
            <label>
              Tipo:
              <select bind:value={toastType}>
                <option value="success">Success</option>
                <option value="error">Error</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
              </select>
            </label>
            
            <label>
              Icono:
              <select bind:value={toastIcon}>
                <option value="">-- Sin icono --</option>
                {#each iconOptions as icon}
                  <option value={icon}>{icon}</option>
                {/each}
              </select>
            </label>
          </div>
          
          <div class="form-row">
            <label>
              Título:
              <input type="text" bind:value={toastTitle} />
            </label>
          </div>
          
          <div class="form-row">
            <label>
              Mensaje:
              <textarea bind:value={toastMessage} rows="3"></textarea>
            </label>
          </div>
          
          <div class="form-row">
            <label>
              Duración (ms):
              <input 
                type="number" 
                bind:value={toastDuration} 
                min="1000" 
                max="30000" 
                step="1000"
                disabled={toastPersistent}
              />
            </label>
            
            <label class="checkbox-label">
              <input type="checkbox" bind:checked={toastPersistent} />
              Persistente (no se cierra automáticamente)
            </label>
          </div>
        </div>
        
        <div class="control-actions">
          <h3>Acciones de Prueba</h3>
          
          <div class="action-buttons">
            <button class="btn btn-primary" on:click={showToast}>
              <Icon name="plus" size="16" />
              Mostrar Toast Personalizado
            </button>
            
            <button class="btn btn-secondary" on:click={showPresetToasts}>
              <Icon name="layers" size="16" />
              Mostrar Ejemplos Predefinidos
            </button>
            
            <button class="btn btn-warning" on:click={testLoadingToast}>
              <Icon name="loader" size="16" />
              Probar Toast de Carga
            </button>
            
            <button class="btn btn-info" on:click={testActionToast}>
              <Icon name="zap" size="16" />
              Toast con Acción
            </button>
            
            <button class="btn btn-danger" on:click={clearAllToasts}>
              <Icon name="x" size="16" />
              Limpiar Todos
            </button>
          </div>
        </div>
      </div>
      
      <!-- Performance Testing -->
      <div class="performance-testing">
        <h3>🚀 Pruebas de Rendimiento</h3>
        <div class="performance-controls">
          <button class="btn btn-accent" on:click={runPerformanceTest}>
            <Icon name="trending-up" size="16" />
            Prueba de Rendimiento (10 toasts)
          </button>
          
          {#if performanceMetrics.renderTime > 0}
            <div class="performance-result">
              Tiempo de renderizado: {performanceMetrics.renderTime.toFixed(2)}ms
            </div>
          {/if}
        </div>
      </div>
    </section>

    <!-- Form Testing Section -->
    <section class="debug-section form-testing">
      <h2>📝 Prueba de Formularios</h2>
      
      <div class="form-testing-controls">
        <div class="form-preview">
          <h3>Formulario de Contacto de Prueba</h3>
          
          <form on:submit|preventDefault={testFormSubmission} class="test-form">
            <div class="form-row">
              <label class:error={formValidationErrors.name}>
                Nombre *
                <input 
                  type="text" 
                  bind:value={formTestData.name}
                  on:blur={() => validateFormField('name', formTestData.name)}
                  class:error={formValidationErrors.name}
                />
                {#if formValidationErrors.name}
                  <span class="error-message">{formValidationErrors.name}</span>
                {/if}
              </label>
              
              <label class:error={formValidationErrors.email}>
                Email *
                <input 
                  type="email" 
                  bind:value={formTestData.email}
                  on:blur={() => validateFormField('email', formTestData.email)}
                  class:error={formValidationErrors.email}
                />
                {#if formValidationErrors.email}
                  <span class="error-message">{formValidationErrors.email}</span>
                {/if}
              </label>
            </div>
            
            <div class="form-row">
              <label class:error={formValidationErrors.phone}>
                Teléfono
                <input 
                  type="tel" 
                  bind:value={formTestData.phone}
                  on:blur={() => validateFormField('phone', formTestData.phone)}
                  class:error={formValidationErrors.phone}
                />
                {#if formValidationErrors.phone}
                  <span class="error-message">{formValidationErrors.phone}</span>
                {/if}
              </label>
              
              <label>
                Servicio
                <select bind:value={formTestData.service}>
                  <option value="web-development">Desarrollo Web</option>
                  <option value="verifactu-compliance">VeriFactu Compliance</option>
                  <option value="rag-mcp">Soluciones AI/RAG</option>
                  <option value="automatizacion">Automatización</option>
                </select>
              </label>
            </div>
            
            <label>
              Empresa
              <input type="text" bind:value={formTestData.company} />
            </label>
            
            <label class:error={formValidationErrors.message}>
              Mensaje *
              <textarea 
                bind:value={formTestData.message}
                on:blur={() => validateFormField('message', formTestData.message)}
                class:error={formValidationErrors.message}
                rows="4"
              ></textarea>
              {#if formValidationErrors.message}
                <span class="error-message">{formValidationErrors.message}</span>
              {/if}
            </label>
            
            <div class="form-actions">
              <button type="button" class="btn btn-secondary" on:click={resetForm}>
                <Icon name="refresh" size="16" />
                Resetear
              </button>
              
              <button 
                type="submit" 
                class="btn btn-primary"
                disabled={formSubmissionStatus === 'submitting'}
                class:success={formSubmissionStatus === 'success'}
                class:error={formSubmissionStatus === 'error'}
              >
                {#if formSubmissionStatus === 'submitting'}
                  <Icon name="loader" size="16" />
                  Enviando...
                {:else if formSubmissionStatus === 'success'}
                  <Icon name="check-circle" size="16" />
                  Enviado
                {:else if formSubmissionStatus === 'error'}
                  <Icon name="x-circle" size="16" />
                  Error
                {:else}
                  <Icon name="send" size="16" />
                  Enviar Prueba
                {/if}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Theme Switcher Section -->
    <section class="debug-section theme-testing">
      <h2>🎨 Probador de Temas</h2>
      
      <div class="theme-controls">
        <div class="theme-options">
          {#each themes as theme}
            <button 
              class="theme-option"
              class:active={currentTheme === theme.id}
              on:click={() => applyTheme(theme.id)}
            >
              <Icon name={theme.icon} size="20" />
              <span>{theme.name}</span>
            </button>
          {/each}
        </div>
        
        <div class="theme-settings">
          <label class="checkbox-label">
            <input type="checkbox" bind:checked={themePreview} on:change={toggleThemePreview} />
            Vista previa temporal
          </label>
        </div>
      </div>

      <div class="theme-preview-area">
        <h3>Vista Previa de Componentes</h3>
        <div class="component-samples">
          <div class="sample-card">
            <h4>Tarjeta de Ejemplo</h4>
            <p>Este es un ejemplo de cómo se ve una tarjeta con el tema actual.</p>
            <button class="btn btn-primary">Botón Primario</button>
          </div>
          
          <div class="sample-card">
            <h4>Información del Sistema</h4>
            <div class="info-row">
              <Icon name="cpu" size="16" />
              <span>Procesador: Intel i7</span>
            </div>
            <div class="info-row">
              <Icon name="server" size="16" />
              <span>Servidor: Formeta Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Accessibility Checker Section -->
    <section class="debug-section accessibility-testing">
      <h2>♿ Checker de Accesibilidad</h2>
      
      <div class="accessibility-overview">
        <div class="score-display">
          <div class="score-circle" style="--score: {accessibilityOverallScore}">
            <span class="score-number">{accessibilityOverallScore}</span>
            <span class="score-label">Puntuación</span>
          </div>
          
          <div class="score-actions">
            <button class="btn btn-primary" on:click={runAllAccessibilityTests}>
              <Icon name="play" size="16" />
              Ejecutar Todos los Tests
            </button>
          </div>
        </div>
      </div>
      
      <div class="accessibility-tests-grid">
        {#each accessibilityTests as test}
          <div class="test-card" class:running={test.status === 'running'}>
            <div class="test-header">
              <h4>{test.name}</h4>
              <div class="test-status status-{test.status}">
                {#if test.status === 'running'}
                  <Icon name="loader" size="16" />
                {:else if test.status === 'pass'}
                  <Icon name="check-circle" size="16" />
                {:else if test.status === 'warning'}
                  <Icon name="alert-triangle" size="16" />
                {:else if test.status === 'fail'}
                  <Icon name="x-circle" size="16" />
                {/if}
              </div>
            </div>
            
            <div class="test-score">
              <div class="score-bar">
                <div class="score-fill" style="width: {test.score}%"></div>
              </div>
              <span class="score-text">{test.score}%</span>
            </div>
            
            <button 
              class="test-button"
              on:click={() => runAccessibilityTest(test.name)}
              disabled={test.status === 'running'}
            >
              {test.status === 'running' ? 'Ejecutando...' : 'Ejecutar Test'}
            </button>
          </div>
        {/each}
      </div>
    </section>

    <!-- Responsive Simulator Section -->
    <section class="debug-section responsive-testing">
      <h2>📱 Simulador Responsivo</h2>
      
      <div class="device-controls">
        <div class="device-presets">
          {#each devicePresets as device}
            <button 
              class="device-preset"
              class:active={currentDevice === device.id}
              on:click={() => setDevice(device.id)}
            >
              <Icon name={device.icon} size="20" />
              <div class="device-info">
                <span class="device-name">{device.name}</span>
                <span class="device-size">{device.width}×{device.height}</span>
              </div>
            </button>
          {/each}
        </div>
        
        {#if currentDevice === 'custom'}
          <div class="custom-controls">
            <div class="viewport-inputs">
              <label>
                Ancho
                <input 
                  type="number" 
                  bind:value={customViewport.width}
                  on:change={updateCustomViewport}
                  min="320"
                  max="2560"
                />
              </label>
              <label>
                Alto
                <input 
                  type="number" 
                  bind:value={customViewport.height}
                  on:change={updateCustomViewport}
                  min="240"
                  max="1440"
                />
              </label>
            </div>
          </div>
        {/if}
        
        <div class="device-actions">
          <button class="btn btn-secondary" on:click={rotateDevice}>
            <Icon name="rotate-ccw" size="16" />
            Rotar
          </button>
        </div>
      </div>
      
      <div class="viewport-simulator" style="width: {Math.min(customViewport.width, 800)}px; height: {Math.min(customViewport.height, 600)}px;">
        <div class="simulator-header">
          <span class="simulator-title">Vista Simulada</span>
          <span class="simulator-dimensions">{customViewport.width}×{customViewport.height}px</span>
        </div>
        <div class="simulator-content">
          <div class="simulated-page">
            <div class="sim-nav">
              <div class="sim-logo">Formeta</div>
              <div class="sim-menu">Menú</div>
            </div>
            <div class="sim-hero">
              <h3>Página de Ejemplo</h3>
              <p>Contenido simulado para probar el diseño responsivo</p>
            </div>
            <div class="sim-cards">
              <div class="sim-card">Servicio 1</div>
              <div class="sim-card">Servicio 2</div>
              <div class="sim-card">Servicio 3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<!-- Toast Container for displaying notifications -->
<ToastContainer />

<style>
  .debug-playground {
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 2rem;
  }
  
  .debug-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .debug-header-content h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--formeta-primary);
    margin: 0 0 0.5rem 0;
  }
  
  .debug-header-content p {
    color: var(--formeta-text);
    opacity: 0.7;
    margin: 0;
  }
  
  .performance-metrics {
    display: flex;
    gap: 1rem;
  }
  
  .metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 0.5rem;
    min-width: 80px;
  }
  
  .metric-label {
    font-size: 0.75rem;
    color: var(--formeta-secondary);
    margin-bottom: 0.25rem;
  }
  
  .metric-value {
    font-size: 1rem;
    font-weight: 600;
    color: var(--formeta-primary);
  }
  
  .debug-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .debug-section {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 1rem;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .debug-section h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--formeta-text);
    margin: 0 0 1.5rem 0;
  }
  
  .component-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
  
  .component-card {
    padding: 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 0.75rem;
    transition: all 0.2s ease;
  }
  
  .component-card.active {
    border-color: var(--formeta-primary);
    background: rgba(59, 130, 246, 0.05);
  }
  
  .component-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .component-header h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
  
  .component-status {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  
  .status-ready {
    background: #dcfce7;
    color: #166534;
  }
  
  .status-pending {
    background: #fef3c7;
    color: #92400e;
  }
  
  .component-toggle {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background: var(--formeta-primary);
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .component-toggle:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
  }
  
  .toast-testing {
    position: relative;
  }
  
  .toast-controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .control-group h3,
  .control-actions h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--formeta-text);
    margin: 0 0 1rem 0;
  }
  
  .form-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: flex-start;
  }
  
  .form-row label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
    font-weight: 500;
    color: var(--formeta-text);
  }
  
  .checkbox-label {
    flex-direction: row !important;
    align-items: center;
  }
  
  .form-row input,
  .form-row select,
  .form-row textarea {
    padding: 0.75rem;
    border: 2px solid #e2e8f0;
    border-radius: 0.5rem;
    background: white;
    transition: border-color 0.2s ease;
  }
  
  .form-row input:focus,
  .form-row select:focus,
  .form-row textarea:focus {
    outline: none;
    border-color: var(--formeta-primary);
  }
  
  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }
  
  .btn:hover {
    transform: translateY(-1px);
  }
  
  .btn-primary {
    background: var(--formeta-primary);
    color: white;
  }
  
  .btn-primary:hover {
    background: #1d4ed8;
  }
  
  .btn-secondary {
    background: #64748b;
    color: white;
  }
  
  .btn-secondary:hover {
    background: #475569;
  }
  
  .btn-warning {
    background: #f59e0b;
    color: white;
  }
  
  .btn-warning:hover {
    background: #d97706;
  }
  
  .btn-info {
    background: #06b6d4;
    color: white;
  }
  
  .btn-info:hover {
    background: #0891b2;
  }
  
  .btn-danger {
    background: #ef4444;
    color: white;
  }
  
  .btn-danger:hover {
    background: #dc2626;
  }
  
  .btn-accent {
    background: #8b5cf6;
    color: white;
  }
  
  .btn-accent:hover {
    background: #7c3aed;
  }
  
  .performance-testing {
    border-top: 1px solid #e2e8f0;
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }
  
  .performance-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .performance-result {
    padding: 0.5rem 1rem;
    background: #dcfce7;
    color: #166534;
    border-radius: 0.5rem;
    font-weight: 500;
  }
  
  /* Form Testing Styles */
  .form-testing .test-form {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .test-form .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .test-form label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 500;
    color: var(--formeta-text);
  }

  .test-form label.error {
    color: #ef4444;
  }

  .test-form input,
  .test-form select,
  .test-form textarea {
    padding: 0.75rem;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    color: var(--formeta-text);
    transition: border-color 0.2s ease;
  }

  .test-form input:focus,
  .test-form select:focus,
  .test-form textarea:focus {
    outline: none;
    border-color: var(--formeta-primary);
  }

  .test-form input.error,
  .test-form textarea.error {
    border-color: #ef4444;
  }

  .error-message {
    font-size: 0.875rem;
    color: #ef4444;
    margin-top: 0.25rem;
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
  }

  /* Theme Testing Styles */
  .theme-controls {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .theme-options {
    display: flex;
    gap: 1rem;
  }

  .theme-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    color: var(--formeta-text);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .theme-option:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--formeta-primary);
  }

  .theme-option.active {
    background: rgba(59, 130, 246, 0.2);
    border-color: var(--formeta-primary);
    color: var(--formeta-primary);
  }

  .component-samples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .sample-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sample-card h4 {
    margin: 0 0 1rem 0;
    color: var(--formeta-text);
  }

  .info-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
    color: var(--formeta-secondary);
  }

  /* Accessibility Testing Styles */
  .accessibility-overview {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .score-display {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .score-circle {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: conic-gradient(
      var(--formeta-primary) 0deg,
      var(--formeta-primary) calc(var(--score) * 3.6deg),
      rgba(255, 255, 255, 0.1) calc(var(--score) * 3.6deg),
      rgba(255, 255, 255, 0.1) 360deg
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .score-circle::before {
    content: '';
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: var(--bg-color, #1e293b);
  }

  .score-number {
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    color: var(--formeta-primary);
    z-index: 1;
  }

  .score-label {
    position: relative;
    font-size: 0.875rem;
    color: var(--formeta-secondary);
    z-index: 1;
  }

  .accessibility-tests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .test-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
  }

  .test-card.running {
    border-color: var(--formeta-primary);
    background: rgba(59, 130, 246, 0.1);
  }

  .test-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .test-header h4 {
    margin: 0;
    color: var(--formeta-text);
  }

  .test-status {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .test-status.status-pass {
    color: #10b981;
  }

  .test-status.status-warning {
    color: #f59e0b;
  }

  .test-status.status-fail {
    color: #ef4444;
  }

  .test-status.status-running {
    color: var(--formeta-primary);
  }

  .test-score {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .score-bar {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }

  .score-fill {
    height: 100%;
    background: linear-gradient(90deg, #ef4444 0%, #f59e0b 50%, #10b981 100%);
    transition: width 0.3s ease;
  }

  .score-text {
    font-weight: 600;
    color: var(--formeta-text);
  }

  .test-button {
    width: 100%;
    padding: 0.75rem;
    background: var(--formeta-primary);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .test-button:hover:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(-1px);
  }

  .test-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Responsive Testing Styles */
  .device-controls {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .device-presets {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .device-preset {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    color: var(--formeta-text);
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 150px;
  }

  .device-preset:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--formeta-primary);
  }

  .device-preset.active {
    background: rgba(59, 130, 246, 0.2);
    border-color: var(--formeta-primary);
    color: var(--formeta-primary);
  }

  .device-info {
    display: flex;
    flex-direction: column;
  }

  .device-name {
    font-weight: 500;
  }

  .device-size {
    font-size: 0.875rem;
    opacity: 0.7;
  }

  .custom-controls {
    display: flex;
    gap: 1rem;
  }

  .viewport-inputs {
    display: flex;
    gap: 1rem;
  }

  .viewport-inputs label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 500;
    color: var(--formeta-text);
  }

  .viewport-inputs input {
    padding: 0.5rem;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    color: var(--formeta-text);
    width: 100px;
  }

  .device-actions {
    display: flex;
    gap: 1rem;
  }

  .viewport-simulator {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    margin: 0 auto;
    transition: all 0.3s ease;
  }

  .simulator-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .simulator-title {
    font-weight: 500;
    color: var(--formeta-text);
  }

  .simulator-dimensions {
    font-size: 0.875rem;
    color: var(--formeta-secondary);
  }

  .simulator-content {
    height: 100%;
    overflow: auto;
  }

  .simulated-page {
    padding: 1rem;
    height: 100%;
    min-height: 400px;
  }

  .sim-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1rem;
  }

  .sim-logo {
    font-weight: 700;
    color: var(--formeta-primary);
  }

  .sim-menu {
    color: var(--formeta-secondary);
  }

  .sim-hero {
    text-align: center;
    padding: 2rem 0;
    margin-bottom: 2rem;
  }

  .sim-hero h3 {
    margin: 0 0 1rem 0;
    color: var(--formeta-text);
  }

  .sim-hero p {
    margin: 0;
    color: var(--formeta-secondary);
  }

  .sim-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .sim-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    padding: 1rem;
    text-align: center;
    color: var(--formeta-text);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .debug-playground {
      padding: 1rem;
    }
    
    .debug-header {
      flex-direction: column;
      gap: 1rem;
    }
    
    .performance-metrics {
      flex-wrap: wrap;
    }
    
    .toast-controls {
      grid-template-columns: 1fr;
    }
    
    .form-row {
      flex-direction: column;
    }
    
    .performance-controls {
      flex-direction: column;
      align-items: flex-start;
    }

    /* New modules mobile styles */
    .test-form .form-row {
      grid-template-columns: 1fr;
    }

    .theme-options {
      flex-direction: column;
    }

    .theme-option {
      justify-content: center;
    }

    .component-samples {
      grid-template-columns: 1fr;
    }

    .score-display {
      flex-direction: column;
      gap: 1rem;
    }

    .accessibility-tests-grid {
      grid-template-columns: 1fr;
    }

    .device-presets {
      flex-direction: column;
    }

    .device-preset {
      min-width: auto;
    }

    .viewport-simulator {
      width: 100% !important;
      height: 400px !important;
    }

    .custom-controls,
    .viewport-inputs {
      flex-direction: column;
    }

    .form-actions {
      flex-direction: column;
    }
  }
</style>