<!-- src/lib/components/ToastDemo.svelte -->
<script lang="ts">
  import { toast } from '$lib/stores/toast';
  import Icon from './Icon.svelte';

  // Demo functions for different toast types
  const showSuccess = () => {
    toast.success('Operación completada', 'Los cambios se han guardado correctamente.');
  };

  const showError = () => {
    toast.error('Error en la operación', 'No se pudo conectar con el servidor. Verifica tu conexión.', {
      action: {
        label: 'Reintentar',
        handler: () => {
          toast.info('Reintentando...', 'Volviendo a intentar la operación.');
        }
      }
    });
  };

  const showWarning = () => {
    toast.warning('Atención requerida', 'Algunos campos necesitan ser revisados antes de continuar.');
  };

  const showInfo = () => {
    toast.info('Información', 'Esta es una notificación informativa.');
  };

  const showLoading = () => {
    const toastId = toast.loading('Procesando...', 'Esto puede tomar unos segundos');
    
    // Simulate async operation
    setTimeout(() => {
      toast.removeToast(toastId);
      toast.success('Completado', 'El proceso ha finalizado exitosamente.');
    }, 3000);
  };

  const showPromiseExample = () => {
    const simulateAsyncOperation = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.3) {
            resolve('Datos procesados correctamente');
          } else {
            reject(new Error('Error simulado de conexión'));
          }
        }, 2000);
      });
    };

    toast.promise(
      simulateAsyncOperation(),
      {
        loading: 'Cargando datos...',
        success: (data) => `Éxito: ${data}`,
        error: (err) => `Error: ${err.message}`
      }
    );
  };

  const showPersistent = () => {
    toast.info('Notificación persistente', 'Esta notificación no desaparecerá automáticamente.', {
      persistent: true,
      action: {
        label: 'Entendido',
        handler: () => {
          toast.success('Confirmado', 'Has confirmado la notificación.');
        }
      }
    });
  };

  const clearAll = () => {
    toast.clearToasts();
  };

  const changePosition = (position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left') => {
    toast.updateSettings({ position });
    toast.info('Posición cambiada', `Toasts ahora aparecen en: ${position}`);
  };
</script>

<div class="toast-demo">
  <div class="demo-header">
    <h3>
      <Icon name="bell" size="20" />
      Sistema de Notificaciones Toast
    </h3>
    <p>Prueba diferentes tipos de notificaciones y funcionalidades</p>
  </div>

  <div class="demo-grid">
    <!-- Basic Toast Types -->
    <div class="demo-section">
      <h4>Tipos Básicos</h4>
      <div class="button-group">
        <button on:click={showSuccess} class="demo-btn success">
          <Icon name="check-circle" size="16" />
          Éxito
        </button>
        <button on:click={showError} class="demo-btn error">
          <Icon name="x-circle" size="16" />
          Error
        </button>
        <button on:click={showWarning} class="demo-btn warning">
          <Icon name="alert-triangle" size="16" />
          Advertencia
        </button>
        <button on:click={showInfo} class="demo-btn info">
          <Icon name="info" size="16" />
          Información
        </button>
      </div>
    </div>

    <!-- Advanced Features -->
    <div class="demo-section">
      <h4>Funciones Avanzadas</h4>
      <div class="button-group">
        <button on:click={showLoading} class="demo-btn loading">
          <Icon name="loader" size="16" />
          Carga Manual
        </button>
        <button on:click={showPromiseExample} class="demo-btn promise">
          <Icon name="zap" size="16" />
          Promise Toast
        </button>
        <button on:click={showPersistent} class="demo-btn persistent">
          <Icon name="lock" size="16" />
          Persistente
        </button>
      </div>
    </div>

    <!-- Position Controls -->
    <div class="demo-section">
      <h4>Posición</h4>
      <div class="button-grid">
        <button on:click={() => changePosition('top-left')} class="demo-btn position">
          Top Left
        </button>
        <button on:click={() => changePosition('top-right')} class="demo-btn position">
          Top Right
        </button>
        <button on:click={() => changePosition('bottom-left')} class="demo-btn position">
          Bottom Left
        </button>
        <button on:click={() => changePosition('bottom-right')} class="demo-btn position">
          Bottom Right
        </button>
      </div>
    </div>

    <!-- Controls -->
    <div class="demo-section">
      <h4>Controles</h4>
      <div class="button-group">
        <button on:click={clearAll} class="demo-btn clear">
          <Icon name="trash-2" size="16" />
          Limpiar Todo
        </button>
      </div>
    </div>
  </div>

  <div class="demo-info">
    <h4>Características del Sistema:</h4>
    <ul>
      <li><strong>Auto-dismiss:</strong> Los toasts desaparecen automáticamente (excepto los persistentes)</li>
      <li><strong>Hover para pausar:</strong> Pausa el timer al hacer hover</li>
      <li><strong>Animaciones fluidas:</strong> Transiciones suaves y naturales</li>
      <li><strong>Responsive:</strong> Se adapta a dispositivos móviles</li>
      <li><strong>Accesible:</strong> Compatible con lectores de pantalla</li>
      <li><strong>Teclado:</strong> Presiona 'Escape' para cerrar todas las notificaciones</li>
    </ul>
  </div>
</div>

<style>
  .toast-demo {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1rem;
    padding: 2rem;
    color: white;
    margin: 2rem 0;
  }

  .demo-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .demo-header h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  .demo-header p {
    opacity: 0.9;
    margin: 0;
  }

  .demo-grid {
    display: grid;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .demo-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .demo-section h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    opacity: 0.95;
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .demo-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);
  }

  .demo-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  .demo-btn:active {
    transform: translateY(0);
  }

  .demo-btn.success {
    background: rgba(34, 197, 94, 0.9);
    color: white;
  }

  .demo-btn.error {
    background: rgba(239, 68, 68, 0.9);
    color: white;
  }

  .demo-btn.warning {
    background: rgba(245, 158, 11, 0.9);
    color: white;
  }

  .demo-btn.info {
    background: rgba(59, 130, 246, 0.9);
    color: white;
  }

  .demo-btn.loading {
    background: rgba(168, 85, 247, 0.9);
    color: white;
  }

  .demo-btn.promise {
    background: rgba(236, 72, 153, 0.9);
    color: white;
  }

  .demo-btn.persistent {
    background: rgba(139, 69, 19, 0.9);
    color: white;
  }

  .demo-btn.position {
    background: rgba(75, 85, 99, 0.9);
    color: white;
    font-size: 0.8rem;
  }

  .demo-btn.clear {
    background: rgba(239, 68, 68, 0.7);
    color: white;
  }

  .demo-info {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
  }

  .demo-info h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
  }

  .demo-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .demo-info li {
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;
  }

  .demo-info li::before {
    content: '•';
    color: #3b82f6;
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  /* Mobile responsiveness */
  @media (max-width: 640px) {
    .toast-demo {
      padding: 1.5rem;
      margin: 1rem 0;
    }

    .demo-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .button-group {
      gap: 0.375rem;
    }

    .demo-btn {
      padding: 0.625rem 0.875rem;
      font-size: 0.8rem;
    }
  }
</style>