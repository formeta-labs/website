<!-- src/routes/intranet/dashboard/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import Icon from '$lib/components/Icon.svelte';
	import { isLoaded, isSignedIn, user, signOut, getUserRole } from '$lib/stores/auth';
	import { toast } from '$lib/stores/toast';
	
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	// Reactive statement para manejar autenticación
	$: if (mounted && $isLoaded && !$isSignedIn) {
		goto('/intranet');
	}

	function handleLogout() {
		signOut();
	}

	function handleGrafanaClick() {
		toast.info('Accediendo a Grafana', 'Se abrirá el panel de monitoreo en una nueva pestaña', {
			duration: 3000
		});
	}
	
	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('es-ES', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	// Reactive values with debug logging
	$: {
		if ($user) {
			console.log('=== USER DEBUG INFO ===');
			console.log('Full user object:', $user);
			console.log('Public metadata:', $user.publicMetadata);
			console.log('Private metadata:', ($user as any).privateMetadata);
			console.log('Organization memberships:', ($user as any).organizationMemberships);
			console.log('Role from getUserRole:', getUserRole($user));
			console.log('========================');
		}
	}
	$: userRole = $user ? getUserRole($user) : 'guest';
	$: userName = $user?.firstName && $user?.lastName 
		? `${$user.firstName} ${$user.lastName}` 
		: $user?.emailAddresses?.[0]?.emailAddress || 'Usuario';
	$: userEmail = $user?.emailAddresses?.[0]?.emailAddress || '';
	$: createdAt = $user?.createdAt ? new Date($user.createdAt).toISOString() : new Date().toISOString();
	$: updatedAt = $user?.updatedAt ? new Date($user.updatedAt).toISOString() : new Date().toISOString();
</script>

<svelte:head>
	<title>Dashboard - Intranet Formeta</title>
	<meta name="description" content="Dashboard de la intranet de Formeta Labs" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if !$isLoaded}
	<div class="min-h-screen bg-formeta-dark flex items-center justify-center">
		<div class="text-center text-formeta-light">
			<Icon name="loader" size={48} className="text-formeta-action animate-spin mx-auto mb-4" />
			<p class="font-mono text-sm">CARGANDO DASHBOARD...</p>
		</div>
	</div>
{:else if $isSignedIn && $user}
	<div class="dashboard-container">
		<!-- Enhanced Header -->
		<header class="dashboard-header">
			<div class="header-content">
				<div class="header-left">
					<div class="logo-section">
						<img src="/images/loofo-formeta.svg" alt="Formeta" class="header-logo" />
						<div class="header-title">
							<h1>FORMETA</h1>
							<span class="header-subtitle">INTRANET</span>
						</div>
					</div>
				</div>
				<div class="header-right">
					<div class="user-info">
						<div class="user-details">
							<span class="user-name">{userName}</span>
							<span class="user-role">{userRole.toUpperCase()}</span>
						</div>
						<div class="user-avatar">
							<Icon name="user" size={20} />
						</div>
					</div>
					<button 
						on:click={handleLogout}
						class="logout-btn"
						title="Cerrar sesión"
					>
						<Icon name="log-out" size={18} />
					</button>
				</div>
			</div>
		</header>

		<!-- Main Dashboard Content -->
		<main class="dashboard-main">
			<!-- Welcome Hero Section -->
			<section class="welcome-hero">
				<div class="hero-content">
					<div class="hero-text">
						<h2 class="hero-title">Bienvenido, {userName}</h2>
						<p class="hero-subtitle">
							Portal interno de Formeta Labs • Acceso como <span class="role-badge">{userRole}</span>
						</p>
					</div>
					<div class="hero-stats">
						<div class="stat-item">
							<Icon name="shield-check" size={24} className="text-emerald-400" />
							<div class="stat-content">
								<span class="stat-value">Autenticado</span>
								<span class="stat-label">Estado</span>
							</div>
						</div>
						<div class="stat-item">
							<Icon name="calendar" size={24} className="text-blue-400" />
							<div class="stat-content">
								<span class="stat-value">{formatDate(createdAt).split(',')[0]}</span>
								<span class="stat-label">Registro</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Quick Actions Grid -->
			<section class="quick-actions">
				<h3 class="section-title">Acceso Rápido</h3>
				<div class="actions-grid">
					<!-- Primary Tools -->
					<div class="action-card primary">
						<div class="card-header">
							<div class="card-icon">
								<Icon name="check-square" size={24} />
							</div>
							<div class="card-title">
								<h4>Gestión de Tareas</h4>
								<p>Vikunja • Proyectos y asignaciones</p>
							</div>
						</div>
						<a 
							href="https://tasks.formeta.es" 
							target="_blank" 
							rel="noopener noreferrer"
							class="card-action"
						>
							<span>Abrir Vikunja</span>
							<Icon name="external-link" size={16} />
						</a>
					</div>

					<div class="action-card primary">
						<div class="card-header">
							<div class="card-icon">
								<Icon name="file-text" size={24} />
							</div>
							<div class="card-title">
								<h4>Documentos</h4>
								<p>Paperless • Gestión documental</p>
							</div>
						</div>
						<a 
							href="https://docs.formeta.es/accounts/login/?next=/" 
							target="_blank" 
							rel="noopener noreferrer"
							class="card-action"
						>
							<span>Abrir Paperless</span>
							<Icon name="external-link" size={16} />
						</a>
					</div>

					<div class="action-card primary">
						<div class="card-header">
							<div class="card-icon">
								<Icon name="book" size={24} />
							</div>
							<div class="card-title">
								<h4>Base de Conocimiento</h4>
								<p>Wiki.js • Documentación</p>
							</div>
						</div>
						<a 
							href="https://wiki.formeta.es" 
							target="_blank" 
							rel="noopener noreferrer"
							class="card-action"
						>
							<span>Abrir Wiki</span>
							<Icon name="external-link" size={16} />
						</a>
					</div>

					<!-- Admin Access -->
					{#if userRole === 'admin'}
						<div class="action-card admin">
							<div class="card-header">
								<div class="card-icon admin-icon">
									<Icon name="settings" size={24} />
								</div>
								<div class="card-title">
									<h4>Panel de Administración</h4>
									<p>Gestión del sistema</p>
								</div>
							</div>
							<button 
								class="card-action admin-action"
								on:click={() => goto('/intranet/admin')}
							>
								<span>Acceder al Panel</span>
								<Icon name="arrow-right" size={16} />
							</button>
						</div>
					{/if}
				</div>
			</section>

			<!-- Tools Grid -->
			<section class="tools-section">
				<h3 class="section-title">Herramientas Internas</h3>
				<div class="tools-grid">
					<a 
						href="https://automation.formeta.es" 
						target="_blank" 
						rel="noopener noreferrer"
						class="tool-item"
					>
						<div class="tool-icon">
							<Icon name="zap" size={20} />
						</div>
						<div class="tool-info">
							<h4>N8N</h4>
							<p>Automatización</p>
						</div>
					</a>

					<a 
						href="https://cpanel.formeta.es/" 
						target="_blank" 
						rel="noopener noreferrer"
						class="tool-item"
					>
						<div class="tool-icon">
							<Icon name="server" size={20} />
						</div>
						<div class="tool-info">
							<h4>CloudPanel</h4>
							<p>Servidor</p>
						</div>
					</a>

					<a
						href="https://links.formeta.es"
						target="_blank"
						rel="noopener noreferrer"
						class="tool-item"
					>
						<div class="tool-icon">
							<Icon name="bookmark" size={20} />
						</div>
						<div class="tool-info">
							<h4>Marcadores</h4>
							<p>Enlaces</p>
						</div>
					</a>

					<a
						href="https://monitor.formeta.es"
						target="_blank"
						rel="noopener noreferrer"
						class="tool-item"
					>
						<div class="tool-icon">
							<Icon name="activity" size={20} />
						</div>
						<div class="tool-info">
							<h4>Grafana</h4>
							<p>Monitoreo</p>
						</div>
					</a>

					<a
						href="https://dokploy.formeta.es"
						target="_blank"
						rel="noopener noreferrer"
						class="tool-item"
					>
						<div class="tool-icon">
							<Icon name="rocket-launch" size={20} />
						</div>
						<div class="tool-info">
							<h4>Dokploy</h4>
							<p>Deploy & Hosting</p>
						</div>
					</a>

					<a
						href="https://supabase.formeta.es"
						target="_blank"
						rel="noopener noreferrer"
						class="tool-item"
					>
						<div class="tool-icon">
							<Icon name="circle-stack" size={20} />
						</div>
						<div class="tool-info">
							<h4>Supabase</h4>
							<p>Database & Auth</p>
						</div>
					</a>
				</div>
			</section>

			<!-- External Services Section -->
			<section class="external-services-section">
				<h3 class="section-title">🌐 Servicios Externos Integrados</h3>
				<div class="external-services-grid">
					<a
						href="https://clerk.com"
						target="_blank"
						rel="noopener noreferrer"
						class="external-service-item"
					>
						<div class="external-service-icon clerk">
							<Icon name="shield-check" size={20} />
						</div>
						<div class="external-service-info">
							<h4>Clerk</h4>
							<p>Autenticación</p>
						</div>
						<div class="external-link-indicator">
							<Icon name="arrow-top-right-on-square" size={14} />
						</div>
					</a>

					<a
						href="https://www.smtp2go.com"
						target="_blank"
						rel="noopener noreferrer"
						class="external-service-item"
					>
						<div class="external-service-icon smtp2go">
							<Icon name="envelope" size={20} />
						</div>
						<div class="external-service-info">
							<h4>SMTP2GO</h4>
							<p>Envío de correos</p>
						</div>
						<div class="external-link-indicator">
							<Icon name="arrow-top-right-on-square" size={14} />
						</div>
					</a>

					<a
						href="https://dash.cloudflare.com"
						target="_blank"
						rel="noopener noreferrer"
						class="external-service-item"
					>
						<div class="external-service-icon cloudflare">
							<Icon name="cloud" size={20} />
						</div>
						<div class="external-service-info">
							<h4>Cloudflare</h4>
							<p>DNS & Seguridad</p>
						</div>
						<div class="external-link-indicator">
							<Icon name="arrow-top-right-on-square" size={14} />
						</div>
					</a>

					<a
						href="https://mail.proton.me"
						target="_blank"
						rel="noopener noreferrer"
						class="external-service-item"
					>
						<div class="external-service-icon protonmail">
							<Icon name="at-symbol" size={20} />
						</div>
						<div class="external-service-info">
							<h4>ProtonMail</h4>
							<p>Correo seguro</p>
						</div>
						<div class="external-link-indicator">
							<Icon name="arrow-top-right-on-square" size={14} />
						</div>
					</a>
				</div>
			</section>

			<!-- User Profile Section -->
			<section class="profile-section">
				<div class="profile-card">
					<div class="profile-header">
						<h3 class="section-title">Información del Usuario</h3>
						<div class="connection-status">
							<div class="status-indicator"></div>
							<span>Conexión segura</span>
						</div>
					</div>
					<div class="profile-grid">
						<div class="profile-item">
							<Icon name="mail" size={18} className="text-blue-400" />
							<div class="profile-content">
								<span class="profile-label">Email</span>
								<span class="profile-value">{userEmail}</span>
							</div>
						</div>
						<div class="profile-item">
							<Icon name="shield" size={18} className="text-emerald-400" />
							<div class="profile-content">
								<span class="profile-label">Rol</span>
								<span class="profile-value">{userRole}</span>
							</div>
						</div>
						<div class="profile-item">
							<Icon name="calendar" size={18} className="text-purple-400" />
							<div class="profile-content">
								<span class="profile-label">Fecha de registro</span>
								<span class="profile-value">{formatDate(createdAt)}</span>
							</div>
						</div>
						<div class="profile-item">
							<Icon name="clock" size={18} className="text-orange-400" />
							<div class="profile-content">
								<span class="profile-label">Última actualización</span>
								<span class="profile-value">{formatDate(updatedAt)}</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>

		<!-- Enhanced Footer -->
		<footer class="dashboard-footer">
			<div class="footer-content">
				<div class="footer-left">
					<span class="footer-text">© 2025 Formeta Labs S.L.</span>
					<span class="footer-separator">•</span>
					<span class="footer-text">Sistema Interno</span>
				</div>
				<div class="footer-right">
					<div class="security-badge">
						<div class="security-icon">
							<Icon name="shield" size={14} />
						</div>
						<span>Conexión Segura</span>
					</div>
				</div>
			</div>
		</footer>
	</div>
{:else}
	<div class="min-h-screen bg-formeta-dark flex items-center justify-center">
		<div class="text-center text-formeta-light">
			<Icon name="alert-circle" size={48} className="text-red-400 mx-auto mb-4" />
			<p class="font-mono text-sm">ERROR DE AUTENTICACIÓN</p>
			<button 
				on:click={() => goto('/intranet')}
				class="mt-4 px-4 py-2 bg-formeta-primary text-white font-mono text-sm hover:bg-formeta-primary/80 transition-colors"
			>
				VOLVER AL LOGIN
			</button>
		</div>
	</div>
{/if}

<style>
	/* Dashboard Container */
	.dashboard-container {
		min-height: 100vh;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		color: #ffffff;
		font-family: 'Geist', system-ui, -apple-system, sans-serif;
	}

	/* Enhanced Header */
	.dashboard-header {
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(74, 144, 226, 0.2);
		position: sticky;
		top: 0;
		z-index: 50;
	}

	.header-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 24px;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header-left {
		display: flex;
		align-items: center;
	}

	.logo-section {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.header-logo {
		height: 40px;
		width: auto;
	}

	.header-title h1 {
		font-family: 'Geist Mono', monospace;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		margin: 0;
		letter-spacing: 0.5px;
	}

	.header-subtitle {
		font-family: 'Geist Mono', monospace;
		font-size: 12px;
		color: #4A90E2;
		font-weight: 500;
		letter-spacing: 1px;
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.user-info {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 8px 16px;
		background: rgba(74, 144, 226, 0.1);
		border: 1px solid rgba(74, 144, 226, 0.2);
		border-radius: 8px;
	}

	.user-details {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.user-name {
		font-size: 14px;
		font-weight: 600;
		color: #ffffff;
	}

	.user-role {
		font-family: 'Geist Mono', monospace;
		font-size: 11px;
		color: #4A90E2;
		font-weight: 500;
		letter-spacing: 0.5px;
	}

	.user-avatar {
		width: 36px;
		height: 36px;
		background: linear-gradient(135deg, #4A90E2, #357ABD);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.logout-btn {
		width: 44px;
		height: 44px;
		background: rgba(239, 68, 68, 0.1);
		border: 1px solid rgba(239, 68, 68, 0.3);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ef4444;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.logout-btn:hover {
		background: rgba(239, 68, 68, 0.2);
		border-color: #ef4444;
		transform: translateY(-1px);
	}

	/* Main Content */
	.dashboard-main {
		max-width: 1400px;
		margin: 0 auto;
		padding: 32px 24px;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	/* Welcome Hero */
	.welcome-hero {
		background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(53, 122, 189, 0.05) 100%);
		border: 1px solid rgba(74, 144, 226, 0.2);
		border-radius: 16px;
		padding: 32px;
		position: relative;
		overflow: hidden;
	}

	.welcome-hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, #4A90E2, transparent);
	}

	.hero-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 32px;
	}

	.hero-title {
		font-size: 32px;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 8px 0;
		background: linear-gradient(135deg, #ffffff, #cccccc);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.hero-subtitle {
		font-size: 16px;
		color: #a1a1aa;
		margin: 0;
	}

	.role-badge {
		display: inline-block;
		padding: 2px 8px;
		background: rgba(74, 144, 226, 0.2);
		border: 1px solid rgba(74, 144, 226, 0.4);
		border-radius: 4px;
		color: #4A90E2;
		font-family: 'Geist Mono', monospace;
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}

	.hero-stats {
		display: flex;
		gap: 24px;
	}

	.stat-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px 20px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		backdrop-filter: blur(10px);
	}

	.stat-content {
		display: flex;
		flex-direction: column;
	}

	.stat-value {
		font-size: 16px;
		font-weight: 600;
		color: #ffffff;
		line-height: 1.2;
	}

	.stat-label {
		font-size: 12px;
		color: #a1a1aa;
		font-weight: 500;
	}

	/* Section Titles */
	.section-title {
		font-size: 24px;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 20px 0;
		position: relative;
		padding-left: 16px;
	}

	.section-title::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 4px;
		height: 24px;
		background: linear-gradient(135deg, #4A90E2, #357ABD);
		border-radius: 2px;
	}

	/* Quick Actions */
	.actions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 24px;
	}

	.action-card {
		background: rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 24px;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.action-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(74, 144, 226, 0.5), transparent);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.action-card:hover {
		transform: translateY(-4px);
		border-color: rgba(74, 144, 226, 0.3);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.action-card:hover::before {
		opacity: 1;
	}

	.action-card.primary {
		background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(53, 122, 189, 0.05));
		border-color: rgba(74, 144, 226, 0.2);
	}

	.action-card.admin {
		background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05));
		border-color: rgba(239, 68, 68, 0.2);
	}

	.card-header {
		display: flex;
		align-items: flex-start;
		gap: 16px;
		margin-bottom: 20px;
	}

	.card-icon {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #4A90E2, #357ABD);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		flex-shrink: 0;
	}

	.admin-icon {
		background: linear-gradient(135deg, #ef4444, #dc2626);
	}

	.card-title h4 {
		font-size: 18px;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 4px 0;
	}

	.card-title p {
		font-size: 14px;
		color: #a1a1aa;
		margin: 0;
	}

	.card-action {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 12px 16px;
		background: rgba(74, 144, 226, 0.1);
		border: 1px solid rgba(74, 144, 226, 0.2);
		border-radius: 8px;
		color: #4A90E2;
		text-decoration: none;
		font-weight: 600;
		font-size: 14px;
		transition: all 0.2s ease;
		cursor: pointer;
	}

	.card-action:hover {
		background: rgba(74, 144, 226, 0.2);
		border-color: #4A90E2;
		transform: translateY(-1px);
	}

	.admin-action {
		background: rgba(239, 68, 68, 0.1);
		border-color: rgba(239, 68, 68, 0.2);
		color: #ef4444;
	}

	.admin-action:hover {
		background: rgba(239, 68, 68, 0.2);
		border-color: #ef4444;
	}

	/* Tools Grid */
	.tools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 16px;
	}

	.tool-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.tool-item:hover {
		background: rgba(74, 144, 226, 0.1);
		border-color: rgba(74, 144, 226, 0.3);
		transform: translateY(-2px);
	}

	.tool-icon {
		width: 40px;
		height: 40px;
		background: rgba(74, 144, 226, 0.2);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #4A90E2;
		flex-shrink: 0;
	}

	.tool-info h4 {
		font-size: 14px;
		font-weight: 600;
		color: #ffffff;
		margin: 0 0 2px 0;
	}

	.tool-info p {
		font-size: 12px;
		color: #a1a1aa;
		margin: 0;
	}

	/* External Services Section */
	.external-services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 16px;
	}

	.external-service-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		text-decoration: none;
		transition: all 0.2s ease;
		position: relative;
	}

	.external-service-item:hover {
		background: rgba(0, 0, 0, 0.5);
		border-color: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	.external-service-icon {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.external-service-icon.clerk {
		background: linear-gradient(135deg, #6366f1, #4f46e5);
		color: white;
	}

	.external-service-icon.smtp2go {
		background: linear-gradient(135deg, #059669, #047857);
		color: white;
	}

	.external-service-icon.cloudflare {
		background: linear-gradient(135deg, #f97316, #ea580c);
		color: white;
	}

	.external-service-icon.protonmail {
		background: linear-gradient(135deg, #8b5cf6, #7c3aed);
		color: white;
	}

	.external-service-info {
		flex: 1;
	}

	.external-service-info h4 {
		font-size: 14px;
		font-weight: 600;
		color: #ffffff;
		margin: 0 0 2px 0;
	}

	.external-service-info p {
		font-size: 12px;
		color: #a1a1aa;
		margin: 0;
	}

	.external-link-indicator {
		color: #a1a1aa;
		opacity: 0.6;
		transition: all 0.2s ease;
	}

	.external-service-item:hover .external-link-indicator {
		color: #ffffff;
		opacity: 1;
		transform: translate(2px, -2px);
	}

	/* Profile Section */
	.profile-card {
		background: rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 24px;
	}

	.profile-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;
	}

	.connection-status {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 12px;
		color: #10b981;
		font-weight: 500;
	}

	.status-indicator {
		width: 8px;
		height: 8px;
		background: #10b981;
		border-radius: 50%;
		animation: pulse 2s infinite;
	}

	.profile-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 16px;
	}

	.profile-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
	}

	.profile-content {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.profile-label {
		font-size: 12px;
		color: #a1a1aa;
		font-weight: 500;
		margin-bottom: 2px;
	}

	.profile-value {
		font-size: 14px;
		color: #ffffff;
		font-weight: 600;
	}

	/* Footer */
	.dashboard-footer {
		background: rgba(0, 0, 0, 0.8);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		margin-top: 40px;
	}

	.footer-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 20px 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.footer-text {
		font-size: 13px;
		color: #a1a1aa;
	}

	.footer-separator {
		color: #525252;
	}

	.security-badge {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 6px 12px;
		background: rgba(16, 185, 129, 0.1);
		border: 1px solid rgba(16, 185, 129, 0.2);
		border-radius: 6px;
		font-size: 11px;
		color: #10b981;
		font-weight: 500;
	}

	.security-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Animations */
	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.header-content {
			padding: 0 16px;
			height: 64px;
		}

		.dashboard-main {
			padding: 20px 16px;
			gap: 24px;
		}

		.hero-content {
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
		}

		.hero-stats {
			flex-direction: column;
			width: 100%;
			gap: 12px;
		}

		.stat-item {
			width: 100%;
		}

		.actions-grid {
			grid-template-columns: 1fr;
		}

		.tools-grid {
			grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		}

		.external-services-grid {
			grid-template-columns: 1fr;
		}

		.profile-grid {
			grid-template-columns: 1fr;
		}

		.footer-content {
			flex-direction: column;
			gap: 12px;
			text-align: center;
		}

		.user-info {
			display: none;
		}

		.header-title h1 {
			font-size: 16px;
		}

		.header-subtitle {
			font-size: 10px;
		}
	}
</style>
