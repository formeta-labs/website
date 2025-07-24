<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Icon from '$lib/components/Icon.svelte';
  import { isLoaded, isSignedIn, user, signIn, getUserRole } from '$lib/stores/auth';
  
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  // Reactive statement to handle navigation when user is signed in
  $: if (mounted && $isLoaded && $isSignedIn && $user) {
    const role = getUserRole($user);
    if (role === 'admin') {
      goto('/intranet/admin');
    } else {
      goto('/intranet/dashboard');
    }
  }

  function handleSignIn() {
    signIn();
  }
</script>

<svelte:head>
  <title>Intranet - Formeta Labs</title>
  <meta name="description" content="Acceso a la intranet de Formeta Labs. Portal interno para clientes y colaboradores." />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Main Login Section -->
<section class="login-section">
  <div class="login-container">
    <div class="card login-card">
      <!-- Header -->
      <div class="card-header">
        <div class="logo-container">
          <img src="/images/loofo-formeta.svg" alt="Formeta Logo" class="logo" />
          <div class="lock-icon">
            <Icon name="lock" size={24} />
          </div>
        </div>
        <h1 class="card-title">Intranet Formeta</h1>
        <p class="card-subtitle">
          Portal interno para clientes y colaboradores
        </p>
      </div>
      
      <div class="card-content">
        {#if !$isLoaded}
          <!-- Loading State -->
          <div class="loading-container">
            <Icon name="loader" size={32} className="text-formeta-action animate-spin" />
            <p class="loading-text">Inicializando sistema de autenticación...</p>
          </div>
        {:else if $isSignedIn}
          <!-- User already signed in -->
          <div class="signed-in-container">
            <Icon name="check-circle" size={32} className="text-green-500" />
            <p class="signed-in-text">Ya tienes una sesión activa</p>
            <p class="signed-in-subtext">Redirigiendo...</p>
          </div>
        {:else}
          <!-- Sign In Options -->
          <div class="auth-container">
            <div class="auth-description">
              <p class="auth-text">
                Usa tu cuenta de Formeta Labs para acceder al portal interno
              </p>
            </div>
            
            <div class="auth-buttons">
              <button 
                on:click={handleSignIn}
                class="auth-button primary"
              >
                <Icon name="log-in" size={18} />
                <span>Iniciar Sesión</span>
              </button>
            </div>
            
            <div class="auth-info">
              <div class="info-item">
                <Icon name="shield" size={16} className="text-formeta-action" />
                <span>Autenticación segura con Clerk</span>
              </div>
              <div class="info-item">
                <Icon name="users" size={16} className="text-formeta-action" />
                <span>Control de acceso por roles</span>
              </div>
              <div class="info-item">
                <Icon name="lock" size={16} className="text-formeta-action" />
                <span>Datos protegidos end-to-end</span>
              </div>
            </div>
          </div>
        {/if}
      </div>
      
      <!-- Footer -->
      <div class="card-footer">
        <div class="system-status">
          <div class="status-indicator">
            <div class="status-dot"></div>
            <span class="status-text">Sistema operativo</span>
          </div>
          <div class="system-info">
            FORMETA.SYS v2.1.0 | Conexión segura
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Background Elements -->
  <div class="background-elements">
    <div class="floating-element element-1">◆</div>
    <div class="floating-element element-2">●</div>
    <div class="floating-element element-3">▲</div>
    <div class="floating-element element-4">◼</div>
  </div>
</section>

<style>

  .login-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient-blue-digital);
    position: relative;
    overflow: hidden;
    padding: var(--space-lg);
  }

  .login-container {
    width: 100%;
    max-width: 420px;
    position: relative;
    z-index: 10;
  }

  .login-card {
    background: rgba(248, 250, 252, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .login-card .card-header {
    background: var(--gradient-blue-digital);
    padding: var(--space-md);
    border-radius: var(--radius-md) var(--radius-md) 0 0;
    backdrop-filter: blur(10px);
    background-clip: padding-box;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .login-card .card-title,
  .login-card .card-subtitle {
    color: #FFFFFF;
    text-align: center;
  }

  .login-card .card-subtitle {
    opacity: 0.8;
    margin-top: var(--space-xs);
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
  }

  .logo {
    width: 64px;
    height: 64px;
    object-fit: contain;
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    padding: var(--space-xs);
    border: 1px solid var(--color-gray-light);
    display: block;
  }

  .lock-icon {
    color: var(--color-blue-digital);
    opacity: 0.7;
  }

  /* Loading States */
  .loading-container,
  .signed-in-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-xl);
    text-align: center;
  }

  .loading-text,
  .signed-in-text {
    font-size: var(--font-size-body);
    color: var(--color-text-primary);
    font-weight: var(--font-weight-medium);
  }

  .signed-in-subtext {
    font-size: var(--font-size-body-small);
    color: var(--color-text-secondary);
  }

  /* Auth Container */
  .auth-container {
    padding: var(--space-xl);
  }

  .auth-description {
    text-align: center;
    margin-bottom: var(--space-lg);
  }

  .auth-text {
    font-size: var(--font-size-body);
    color: var(--color-text-primary);
    line-height: 1.5;
  }

  .auth-buttons {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
  }

  .auth-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    border-radius: var(--radius-md);
    transition: all var(--duration-medium);
    cursor: pointer;
    border: none;
    text-transform: none;
  }

  .auth-button.primary {
    background: var(--color-blue-digital);
    color: white;
    box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3);
  }

  .auth-button.primary:hover {
    background: var(--color-blue-dark);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.4);
  }

  .auth-button.secondary {
    background: transparent;
    color: var(--color-blue-digital);
    border: 2px solid var(--color-blue-digital);
  }

  .auth-button.secondary:hover {
    background: rgba(74, 144, 226, 0.1);
    transform: translateY(-1px);
  }

  .auth-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--color-gray-light);
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: var(--font-size-body-small);
    color: var(--color-text-secondary);
  }

  .system-status {
    margin-top: var(--space-lg);
    text-align: center;
  }

  .status-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
    margin-bottom: var(--space-xs);
  }

  .status-dot {
    width: 8px;
    height: 8px;
    background: var(--color-success);
    border-radius: var(--radius-full);
    animation: pulse 2s infinite;
  }

  .status-text {
    font-size: var(--font-size-caption);
    font-family: var(--font-mono);
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .system-info {
    font-size: var(--font-size-caption);
    font-family: var(--font-mono);
    color: rgba(255, 255, 255, 0.6);
  }

  .background-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .floating-element {
    position: absolute;
    color: rgba(255, 255, 255, 0.1);
    font-size: 24px;
    font-weight: var(--font-weight-bold);
    animation: float 6s ease-in-out infinite;
  }

  .element-1 {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  .element-2 {
    top: 20%;
    right: 15%;
    animation-delay: 1.5s;
  }

  .element-3 {
    bottom: 30%;
    left: 20%;
    animation-delay: 3s;
  }

  .element-4 {
    bottom: 20%;
    right: 10%;
    animation-delay: 4.5s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .login-section {
      padding: var(--space-md);
    }

    .login-container {
      max-width: 100%;
    }

    .logo {
      width: 48px;
      height: 48px;
    }

    .floating-element {
      font-size: 18px;
    }

    .auth-buttons {
      gap: var(--space-sm);
    }
  }

  /* Dark theme support */
  @media (prefers-color-scheme: dark) {
    .login-card {
      background: rgba(28, 28, 30, 0.95);
      border-color: rgba(255, 255, 255, 0.1);
    }
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    .floating-element,
    .status-dot {
      animation: none;
    }
  }
</style>
