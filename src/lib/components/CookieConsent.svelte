<!-- src/lib/components/CookieConsent.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Icon from '$lib/components/Icon.svelte';
  import { cookieConsent } from '$lib/stores/cookieConsent';
  import { toast } from '$lib/stores/toast';

  let showConsent = false;
  let isVisible = false;

  // Check consent status on mount
  onMount(() => {
    if (browser) {
      const consent = localStorage.getItem('formeta-cookie-consent');
      if (!consent) {
        showConsent = true;
        // Small delay for smooth entrance animation
        setTimeout(() => {
          isVisible = true;
        }, 100);
      }
    }
  });

  function acceptAll() {
    if (browser) {
      cookieConsent.acceptAll();
      closeConsent();
      toast.success('Cookies aceptadas', 'Todas las cookies han sido aceptadas. Gracias por mejorar tu experiencia.');
    }
  }

  function acceptNecessary() {
    if (browser) {
      cookieConsent.acceptNecessary();
      closeConsent();
      toast.info('Solo cookies necesarias', 'Solo las cookies esenciales están activas. Puedes cambiar esto en cualquier momento.');
    }
  }

  function closeConsent() {
    isVisible = false;
    setTimeout(() => {
      showConsent = false;
    }, 300);
  }
</script>

{#if showConsent}
  <div 
    class="cookie-consent-overlay"
    class:visible={isVisible}
    role="dialog"
    aria-labelledby="cookie-consent-title"
    aria-describedby="cookie-consent-description"
  >
    <div class="cookie-consent-banner">
      <div class="cookie-consent-content">
        <div class="cookie-consent-header">
          <Icon name="shield-check" size={24} className="text-primary-500" />
          <h3 id="cookie-consent-title" class="cookie-consent-title">
            Configuración de Privacidad
          </h3>
        </div>

        <div class="cookie-consent-body">
          <p id="cookie-consent-description" class="cookie-consent-text">
            Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación, 
            personalizar contenido y anuncios, proporcionar funciones de redes sociales y analizar 
            nuestro tráfico. Al continuar navegando, acepta nuestro uso de cookies según nuestra 
            <a href="/legal/privacidad" class="cookie-link">Política de Privacidad</a> y el 
            <a href="/legal/gdpr" class="cookie-link">Cumplimiento GDPR</a>.
          </p>

          <div class="cookie-consent-details">
            <p class="cookie-consent-subtitle">
              <Icon name="info" size={16} className="inline mr-1 text-primary-500" />
              Cumplimiento normativa española:
            </p>
            <ul class="cookie-consent-list">
              <li><strong>LOPDGDD:</strong> Ley Orgánica 3/2018 de Protección de Datos</li>
              <li><strong>RGPD:</strong> Reglamento General de Protección de Datos (UE)</li>
              <li><strong>LSSI:</strong> Ley de Servicios de la Sociedad de la Información</li>
            </ul>
          </div>

          <div class="cookie-types">
            <div class="cookie-type">
              <div class="cookie-type-header">
                <Icon name="check-circle" size={16} className="text-green-500" />
                <span class="cookie-type-name">Cookies Necesarias</span>
                <span class="cookie-type-status required">Obligatorias</span>
              </div>
              <p class="cookie-type-description">
                Esenciales para el funcionamiento básico del sitio web.
              </p>
            </div>

            <div class="cookie-type">
              <div class="cookie-type-header">
                <Icon name="bar-chart-3" size={16} className="text-blue-500" />
                <span class="cookie-type-name">Cookies Analíticas</span>
                <span class="cookie-type-status optional">Opcional</span>
              </div>
              <p class="cookie-type-description">
                Nos ayudan a mejorar el sitio web analizando cómo los usuarios lo utilizan.
              </p>
            </div>
          </div>
        </div>

        <div class="cookie-consent-actions">
          <button 
            type="button" 
            class="btn btn-secondary"
            on:click={acceptNecessary}
          >
            <Icon name="x" size={16} className="mr-2" />
            Solo Necesarias
          </button>
          <button 
            type="button" 
            class="btn btn-primary"
            on:click={acceptAll}
          >
            <Icon name="check" size={16} className="mr-2" />
            Aceptar Todas
          </button>
        </div>

        <div class="cookie-consent-footer">
          <p class="cookie-consent-footer-text">
            <Icon name="calendar" size={14} className="inline mr-1 opacity-70" />
            Su consentimiento es válido por 12 meses. Puede cambiarlo en cualquier momento en 
            <a href="/legal/privacidad#configuracion-cookies" class="cookie-link">Configuración</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .cookie-consent-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cookie-consent-overlay.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .cookie-consent-banner {
    background: white;
    border-top: 1px solid #e2e8f0;
    box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.15);
    max-height: 90vh;
    overflow-y: auto;
  }

  .cookie-consent-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .cookie-consent-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .cookie-consent-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 0 0.75rem;
    font-family: var(--font-primary);
  }

  .cookie-consent-body {
    margin-bottom: 1.5rem;
  }

  .cookie-consent-text {
    font-size: 0.875rem;
    line-height: 1.5;
    color: #475569;
    margin-bottom: 1rem;
    font-family: var(--font-primary);
  }

  .cookie-consent-details {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .cookie-consent-subtitle {
    font-size: 0.875rem;
    font-weight: 500;
    color: #334155;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    font-family: var(--font-primary);
  }

  .cookie-consent-list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.8125rem;
    color: #64748b;
  }

  .cookie-consent-list li {
    margin-bottom: 0.25rem;
    font-family: var(--font-primary);
  }

  .cookie-types {
    display: grid;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .cookie-type {
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 1rem;
    background: #fefefe;
  }

  .cookie-type-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
  }

  .cookie-type-name {
    font-weight: 500;
    color: #334155;
    font-size: 0.875rem;
    flex-grow: 1;
    font-family: var(--font-primary);
  }

  .cookie-type-status {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    font-weight: 500;
    font-family: var(--font-primary);
  }

  .cookie-type-status.required {
    background: #dcfce7;
    color: #166534;
  }

  .cookie-type-status.optional {
    background: #dbeafe;
    color: #1d4ed8;
  }

  .cookie-type-description {
    font-size: 0.8125rem;
    color: #64748b;
    margin: 0;
    line-height: 1.4;
    font-family: var(--font-primary);
  }

  .cookie-consent-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 0.5rem;
    border: 1px solid;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: var(--font-primary);
    text-decoration: none;
    min-width: 140px;
  }

  .btn:hover {
    transform: translateY(-1px);
  }

  .btn-primary {
    background: #007aff;
    border-color: #007aff;
    color: white;
  }

  .btn-primary:hover {
    background: #0066cc;
    border-color: #0066cc;
  }

  .btn-secondary {
    background: transparent;
    border-color: #d1d5db;
    color: #374151;
  }

  .btn-secondary:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }

  .cookie-consent-footer {
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
  }

  .cookie-consent-footer-text {
    font-size: 0.75rem;
    color: #6b7280;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-primary);
  }

  .cookie-link {
    color: #007aff;
    text-decoration: none;
    font-weight: 500;
  }

  .cookie-link:hover {
    text-decoration: underline;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .cookie-consent-content {
      padding: 1.5rem 1rem;
    }

    .cookie-consent-title {
      font-size: 1.125rem;
    }

    .cookie-consent-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .btn {
      width: 100%;
    }

    .cookie-consent-footer-text {
      flex-direction: column;
      gap: 0.25rem;
    }
  }

  @media (max-width: 480px) {
    .cookie-consent-content {
      padding: 1rem;
    }

    .cookie-consent-header {
      margin-bottom: 1rem;
    }

    .cookie-consent-details {
      padding: 0.75rem;
    }

    .cookie-types {
      gap: 0.75rem;
    }

    .cookie-type {
      padding: 0.75rem;
    }
  }
</style>