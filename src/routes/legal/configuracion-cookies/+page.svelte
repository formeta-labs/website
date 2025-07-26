<!-- src/routes/legal/configuracion-cookies/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import LegalLayout from '$lib/components/LegalLayout.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { cookieConsent, type CookieConsentSettings, getConsentRecord } from '$lib/stores/cookieConsent';
  
  let currentSettings: CookieConsentSettings | null = null;
  let consentRecord: any = null;
  let showSaveMessage = false;
  
  // Form state
  let analyticsEnabled = false;
  let marketingEnabled = false;

  onMount(() => {
    if (browser) {
      currentSettings = cookieConsent.init();
      consentRecord = getConsentRecord();
      
      if (currentSettings) {
        analyticsEnabled = currentSettings.analytics;
        marketingEnabled = currentSettings.marketing;
      }
    }
  });

  function savePreferences() {
    const settings = cookieConsent.saveConsent({
      necessary: true, // Always true
      analytics: analyticsEnabled,
      marketing: marketingEnabled
    });
    
    currentSettings = settings;
    consentRecord = getConsentRecord();
    
    showSaveMessage = true;
    setTimeout(() => {
      showSaveMessage = false;
    }, 3000);
  }

  function acceptAll() {
    analyticsEnabled = true;
    marketingEnabled = false; // Keep false for Spanish compliance
    savePreferences();
  }

  function rejectAll() {
    analyticsEnabled = false;
    marketingEnabled = false;
    savePreferences();
  }

  function clearAllData() {
    if (confirm('¿Está seguro de que desea eliminar todos los datos de consentimiento? Esto requerirá que configure nuevamente sus preferencias.')) {
      cookieConsent.clearConsent();
      currentSettings = null;
      consentRecord = null;
      analyticsEnabled = false;
      marketingEnabled = false;
    }
  }
</script>

<svelte:head>
  <title>Configuración de Cookies - Formeta Labs</title>
  <meta name="description" content="Configure sus preferencias de cookies y privacidad según la normativa española LOPD y GDPR." />
</svelte:head>

<LegalLayout
  title="Configuración de Cookies"
  lastUpdated="22 de enero de 2025"
  description="Gestione sus preferencias de privacidad y cookies según la normativa española."
>
  <div class="cookie-settings">
    
    {#if showSaveMessage}
      <div class="save-message">
        <Icon name="check-circle" size={20} className="text-green-500" />
        <span>Preferencias guardadas correctamente</span>
      </div>
    {/if}

    <section class="settings-section">
      <h2>Configuración de Privacidad</h2>
      <p>
        Configure qué tipos de cookies desea aceptar. Sus preferencias se guardarán durante 12 meses 
        según requiere la normativa española de protección de datos.
      </p>

      <div class="cookie-controls">
        
        <!-- Cookies Necesarias -->
        <div class="cookie-control">
          <div class="cookie-control-header">
            <div class="cookie-control-info">
              <Icon name="shield-check" size={20} className="text-green-500" />
              <div>
                <h3>Cookies Necesarias</h3>
                <p>Esenciales para el funcionamiento básico del sitio web.</p>
              </div>
            </div>
            <div class="cookie-control-toggle">
              <div class="toggle-switch enabled" aria-label="Cookies necesarias siempre habilitadas">
                <div class="toggle-handle"></div>
              </div>
              <span class="toggle-label">Siempre Activo</span>
            </div>
          </div>
          <div class="cookie-control-details">
            <p><strong>Propósito:</strong> Autenticación, navegación, seguridad</p>
            <p><strong>Duración:</strong> Sesión</p>
            <p><strong>Base legal:</strong> Interés legítimo (Art. 6.1.f RGPD)</p>
          </div>
        </div>

        <!-- Cookies Analíticas -->
        <div class="cookie-control">
          <div class="cookie-control-header">
            <div class="cookie-control-info">
              <Icon name="bar-chart-3" size={20} className="text-blue-500" />
              <div>
                <h3>Cookies Analíticas</h3>
                <p>Nos ayudan a mejorar el sitio web analizando su uso.</p>
              </div>
            </div>
            <div class="cookie-control-toggle">
              <div class="toggle-switch" class:enabled={analyticsEnabled} on:click={() => analyticsEnabled = !analyticsEnabled} on:keydown={(e) => e.key === 'Enter' && (analyticsEnabled = !analyticsEnabled)} role="button" tabindex="0" aria-label="Alternar cookies analíticas">
                <div class="toggle-handle"></div>
              </div>
              <span class="toggle-label">{analyticsEnabled ? 'Habilitado' : 'Deshabilitado'}</span>
            </div>
          </div>
          <div class="cookie-control-details">
            <p><strong>Propósito:</strong> Google Analytics (anonimizado), métricas de uso</p>
            <p><strong>Duración:</strong> 13 meses</p>
            <p><strong>Base legal:</strong> Consentimiento (Art. 6.1.a RGPD)</p>
            <p><strong>Datos:</strong> IP anonimizada, páginas visitadas, tiempo de permanencia</p>
          </div>
        </div>

        <!-- Cookies de Marketing -->
        <div class="cookie-control">
          <div class="cookie-control-header">
            <div class="cookie-control-info">
              <Icon name="megaphone" size={20} className="text-purple-500" />
              <div>
                <h3>Cookies de Marketing</h3>
                <p>Para mostrarle contenido y anuncios relevantes.</p>
              </div>
            </div>
            <div class="cookie-control-toggle">
              <div class="toggle-switch" class:enabled={marketingEnabled} on:click={() => marketingEnabled = !marketingEnabled} on:keydown={(e) => e.key === 'Enter' && (marketingEnabled = !marketingEnabled)} role="button" tabindex="0" aria-label="Alternar cookies de marketing">
                <div class="toggle-handle"></div>
              </div>
              <span class="toggle-label">{marketingEnabled ? 'Habilitado' : 'Deshabilitado'}</span>
            </div>
          </div>
          <div class="cookie-control-details">
            <p><strong>Propósito:</strong> Personalización de contenido, remarketing</p>
            <p><strong>Duración:</strong> 24 meses</p>
            <p><strong>Base legal:</strong> Consentimiento explícito (Art. 6.1.a RGPD)</p>
            <p><strong>Terceros:</strong> Google Ads, Facebook Pixel</p>
          </div>
        </div>

      </div>

      <div class="cookie-actions">
        <button type="button" class="btn btn-secondary" on:click={rejectAll}>
          <Icon name="x" size={16} className="mr-2" />
          Rechazar Opcional
        </button>
        <button type="button" class="btn btn-primary" on:click={savePreferences}>
          <Icon name="save" size={16} className="mr-2" />
          Guardar Preferencias
        </button>
        <button type="button" class="btn btn-success" on:click={acceptAll}>
          <Icon name="check" size={16} className="mr-2" />
          Aceptar Recomendado
        </button>
      </div>
    </section>

    {#if currentSettings}
      <section class="settings-section">
        <h2>Estado Actual</h2>
        <div class="consent-status">
          <div class="status-item">
            <Icon name="calendar" size={16} className="text-gray-500" />
            <span><strong>Consentimiento dado:</strong> {new Date(currentSettings.timestamp).toLocaleString('es-ES')}</span>
          </div>
          <div class="status-item">
            <Icon name="clock" size={16} className="text-gray-500" />
            <span><strong>Válido hasta:</strong> {new Date(new Date(currentSettings.timestamp).getTime() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES')}</span>
          </div>
          <div class="status-item">
            <Icon name="check-circle" size={16} className="text-green-500" />
            <span><strong>Cookies necesarias:</strong> Activas</span>
          </div>
          <div class="status-item">
            <Icon name={currentSettings.analytics ? 'check-circle' : 'x-circle'} size={16} className={currentSettings.analytics ? 'text-green-500' : 'text-red-500'} />
            <span><strong>Cookies analíticas:</strong> {currentSettings.analytics ? 'Activas' : 'Desactivadas'}</span>
          </div>
          <div class="status-item">
            <Icon name={currentSettings.marketing ? 'check-circle' : 'x-circle'} size={16} className={currentSettings.marketing ? 'text-green-500' : 'text-red-500'} />
            <span><strong>Cookies de marketing:</strong> {currentSettings.marketing ? 'Activas' : 'Desactivadas'}</span>
          </div>
        </div>
      </section>
    {/if}

    <section class="settings-section">
      <h2>Gestión de Datos</h2>
      <p>
        Según el RGPD y la LOPDGDD, tiene derecho a acceder, rectificar, suprimir y limitar el tratamiento de sus datos.
      </p>
      
      <div class="data-actions">
        <button type="button" class="btn btn-outline" on:click={clearAllData}>
          <Icon name="trash-2" size={16} className="mr-2 text-red-500" />
          Eliminar Todos los Datos
        </button>
      </div>

      <div class="legal-info">
        <h3>Sus Derechos</h3>
        <ul>
          <li><strong>Acceso:</strong> Solicitar información sobre el tratamiento de sus datos</li>
          <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
          <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
          <li><strong>Limitación:</strong> Restringir el tratamiento de sus datos</li>
          <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
          <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
        </ul>
        
        <p>
          Para ejercer estos derechos, contacte con nosotros en 
          <a href="mailto:privacy@formeta-labs.com" class="text-primary-500 hover:underline">privacy@formeta-labs.com</a>
        </p>
      </div>
    </section>

  </div>
</LegalLayout>

<style>
  .cookie-settings {
    max-width: none;
  }

  .save-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #dcfce7;
    border: 1px solid #bbf7d0;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    margin-bottom: 2rem;
    color: #166534;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .settings-section {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .settings-section h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .cookie-controls {
    display: grid;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .cookie-control {
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 1.5rem;
    background: #fefefe;
  }

  .cookie-control-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .cookie-control-info {
    display: flex;
    gap: 1rem;
    flex: 1;
  }

  .cookie-control-info h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 0.25rem;
  }

  .cookie-control-info p {
    font-size: 0.875rem;
    color: #64748b;
    margin: 0;
  }

  .cookie-control-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .toggle-switch {
    width: 48px;
    height: 24px;
    border-radius: 12px;
    background: #e2e8f0;
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s;
  }

  .toggle-switch.enabled {
    background: #007aff;
  }

  .toggle-handle {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: white;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .toggle-switch.enabled .toggle-handle {
    transform: translateX(24px);
  }

  .toggle-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #475569;
    min-width: 80px;
  }

  .cookie-control-details {
    font-size: 0.8125rem;
    color: #64748b;
    line-height: 1.5;
  }

  .cookie-control-details p {
    margin-bottom: 0.25rem;
  }

  .cookie-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
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
    transition: all 0.2s;
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
  }

  .btn-secondary {
    background: #6b7280;
    border-color: #6b7280;
    color: white;
  }

  .btn-secondary:hover {
    background: #4b5563;
  }

  .btn-success {
    background: #10b981;
    border-color: #10b981;
    color: white;
  }

  .btn-success:hover {
    background: #059669;
  }

  .btn-outline {
    background: transparent;
    border-color: #d1d5db;
    color: #374151;
  }

  .btn-outline:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }

  .consent-status {
    display: grid;
    gap: 0.75rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 1.5rem;
  }

  .status-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  .data-actions {
    margin: 1.5rem 0;
  }

  .legal-info h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #334155;
    margin: 1.5rem 0 1rem 0;
  }

  .legal-info ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
  }

  .legal-info li {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #475569;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .settings-section {
      padding: 1.5rem;
    }

    .cookie-control-header {
      flex-direction: column;
      gap: 1rem;
    }

    .cookie-control-toggle {
      justify-content: space-between;
      width: 100%;
    }

    .cookie-actions {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
</style>