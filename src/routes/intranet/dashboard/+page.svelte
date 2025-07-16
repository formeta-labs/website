<!-- src/routes/intranet/dashboard/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import Icon from '$lib/components/Icon.svelte';
	
	let user: any = null;
	let isLoading = true;
	let error = '';
	
	onMount(async () => {
		if (browser) {
			const token = localStorage.getItem('formeta_token');
			const userData = localStorage.getItem('formeta_user');
			
			if (!token || !userData) {
				goto('/intranet');
				return;
			}
			
			try {
				// Parse user data
				user = JSON.parse(userData);
				
				// Verify token with backend
				const response = await fetch('http://localhost:3000/api/auth/me', {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json'
					}
				});
				
				if (!response.ok) {
					throw new Error('Token inválido');
				}
				
				const data = await response.json();
				user = data.data;
				
			} catch (err) {
				console.error('Auth error:', err);
				localStorage.removeItem('formeta_token');
				localStorage.removeItem('formeta_user');
				goto('/intranet');
				return;
			}
			
			isLoading = false;
		}
	});
	
	function handleLogout() {
		localStorage.removeItem('formeta_token');
		localStorage.removeItem('formeta_user');
		goto('/intranet');
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
</script>

<svelte:head>
	<title>Dashboard - Intranet Formeta</title>
	<meta name="description" content="Dashboard de la intranet de Formeta Labs" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if isLoading}
	<div class="min-h-screen bg-formeta-dark flex items-center justify-center">
		<div class="text-center text-formeta-light">
			<Icon name="loader" size={48} class="text-formeta-action animate-spin mx-auto mb-4" />
			<p class="font-mono text-sm">CARGANDO DASHBOARD...</p>
		</div>
	</div>
{:else if user}
	<div class="min-h-screen bg-formeta-dark">
		<!-- Header -->
		<header class="bg-formeta-black border-b-2 border-formeta-primary">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between items-center h-16">
					<div class="flex items-center">
						<h1 class="text-xl font-bold text-formeta-white font-mono">
							FORMETA <span class="text-formeta-action">INTRANET</span>
						</h1>
					</div>
					<div class="flex items-center gap-4">
						<div class="text-sm text-formeta-light font-mono">
							<span class="text-formeta-action">{user.role.toUpperCase()}</span>
							<span class="mx-2">|</span>
							<span>{user.name}</span>
						</div>
						<button 
							on:click={handleLogout}
							class="btn-logout"
						>
							<Icon name="log-out" size={16} class="text-formeta-light" />
							SALIR
						</button>
					</div>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<!-- Welcome Section -->
			<section class="mb-8">
				<div class="bg-formeta-black border-2 border-formeta-primary p-6 shadow-lg">
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 bg-formeta-primary rounded-lg flex items-center justify-center">
							<Icon name="user" size={24} class="text-white" />
						</div>
						<div>
							<h2 class="text-2xl font-bold text-formeta-white mb-2">
								¡Bienvenido, {user.name}!
							</h2>
							<p class="text-formeta-light">
								Acceso autorizado como <span class="text-formeta-action font-mono">{user.role.toUpperCase()}</span>
							</p>
						</div>
					</div>
				</div>
			</section>

			<!-- User Info -->
			<section class="mb-8">
				<div class="bg-formeta-black border-2 border-formeta-secondary p-6">
					<h3 class="text-lg font-bold text-formeta-white mb-4 font-mono">
						INFORMACIÓN DEL USUARIO
					</h3>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="info-item">
							<Icon name="mail" size={16} class="text-formeta-action" />
							<div>
								<span class="label">EMAIL:</span>
								<span class="value">{user.email}</span>
							</div>
						</div>
						<div class="info-item">
							<Icon name="shield" size={16} class="text-formeta-action" />
							<div>
								<span class="label">ROL:</span>
								<span class="value">{user.role}</span>
							</div>
						</div>
						<div class="info-item">
							<Icon name="calendar" size={16} class="text-formeta-action" />
							<div>
								<span class="label">REGISTRO:</span>
								<span class="value">{formatDate(user.createdAt)}</span>
							</div>
						</div>
						<div class="info-item">
							<Icon name="clock" size={16} class="text-formeta-action" />
							<div>
								<span class="label">ÚLTIMA ACTUALIZACIÓN:</span>
								<span class="value">{formatDate(user.updatedAt)}</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Internal Tools -->
			<section class="mb-8">
				<div class="bg-formeta-black border-2 border-formeta-secondary p-6">
					<h3 class="text-lg font-bold text-formeta-white mb-6 font-mono">
						HERRAMIENTAS INTERNAS
					</h3>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<!-- Vikunja -->
						<a 
							href="https://tasks.formeta.es" 
							target="_blank" 
							rel="noopener noreferrer"
							class="tool-link"
						>
							<div class="tool-icon">
								<Icon name="check-square" size={20} class="text-formeta-action" />
							</div>
							<div class="tool-info">
								<h4 class="tool-title">VIKUNJA</h4>
								<p class="tool-desc">Gestión de tareas y proyectos</p>
							</div>
						</a>

						<!-- n8n -->
						<a 
							href="https://automation.formeta.es" 
							target="_blank" 
							rel="noopener noreferrer"
							class="tool-link"
						>
							<div class="tool-icon">
								<Icon name="zap" size={20} class="text-formeta-action" />
							</div>
							<div class="tool-info">
								<h4 class="tool-title">N8N</h4>
								<p class="tool-desc">Automatización de workflows</p>
							</div>
						</a>

						<!-- CloudPanel -->
						<a 
							href="https://cpanel.formeta.es/" 
							target="_blank" 
							rel="noopener noreferrer"
							class="tool-link"
						>
							<div class="tool-icon">
								<Icon name="server" size={20} class="text-formeta-action" />
							</div>
							<div class="tool-info">
								<h4 class="tool-title">CLOUDPANEL</h4>
								<p class="tool-desc">Panel de control del servidor</p>
							</div>
						</a>

						<!-- Bitwarden -->
						<a 
							href="https://pwd.formeta.es/#/login" 
							target="_blank" 
							rel="noopener noreferrer"
							class="tool-link"
						>
							<div class="tool-icon">
								<Icon name="lock" size={20} class="text-formeta-action" />
							</div>
							<div class="tool-info">
								<h4 class="tool-title">BITWARDEN</h4>
								<p class="tool-desc">Gestor de contraseñas</p>
							</div>
						</a>

						<!-- Paperless -->
						<a 
							href="https://docs.formeta.es/accounts/login/?next=/" 
							target="_blank" 
							rel="noopener noreferrer"
							class="tool-link"
						>
							<div class="tool-icon">
								<Icon name="file-text" size={20} class="text-formeta-action" />
							</div>
							<div class="tool-info">
								<h4 class="tool-title">PAPERLESS</h4>
								<p class="tool-desc">Gestión de documentos</p>
							</div>
						</a>

						<!-- Wiki.js -->
						<a 
							href="https://wiki.formeta.es" 
							target="_blank" 
							rel="noopener noreferrer"
							class="tool-link"
						>
							<div class="tool-icon">
								<Icon name="book" size={20} class="text-formeta-action" />
							</div>
							<div class="tool-info">
								<h4 class="tool-title">WIKI.JS</h4>
								<p class="tool-desc">Base de conocimiento</p>
							</div>
						</a>
					</div>
				</div>
			</section>

			<!-- Actions -->
			<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Profile -->
				<div class="action-card">
					<div class="action-header">
						<Icon name="user" size={24} class="text-formeta-action" />
						<h3>PERFIL</h3>
					</div>
					<p class="action-description">
						Gestiona tu información personal y preferencias
					</p>
					<button class="action-btn">
						ACCEDER
					</button>
				</div>

				<!-- Documents -->
				<div class="action-card">
					<div class="action-header">
						<Icon name="file-text" size={24} class="text-formeta-action" />
						<h3>DOCUMENTOS</h3>
					</div>
					<p class="action-description">
						Accede a documentos y recursos internos
					</p>
					<button class="action-btn">
						ACCEDER
					</button>
				</div>

				<!-- Admin Panel (only for admins) -->
				{#if user.role === 'ADMIN'}
					<div class="action-card admin-card">
						<div class="action-header">
							<Icon name="shield" size={24} class="text-red-400" />
							<h3>PANEL DE ADMINISTRACIÓN</h3>
						</div>
						<p class="action-description">
							Gestión completa del sistema, usuarios y contactos
						</p>
						<button 
							class="action-btn admin-btn"
							on:click={() => goto('/intranet/admin')}
						>
							<Icon name="settings" size={16} class="text-red-400 inline mr-2" />
							ACCEDER AL PANEL
						</button>
					</div>
				{/if}
			</section>
		</main>

		<!-- Footer -->
		<footer class="bg-formeta-black border-t border-formeta-primary mt-12">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<div class="flex justify-between items-center">
					<div class="text-sm text-formeta-light font-mono">
						© 2025 Formeta Labs S.L. - Sistema Interno
					</div>
					<div class="flex items-center gap-2">
						<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
						<span class="text-xs text-formeta-light font-mono">
							CONEXIÓN SEGURA
						</span>
					</div>
				</div>
			</div>
		</footer>
	</div>
{:else}
	<div class="min-h-screen bg-formeta-dark flex items-center justify-center">
		<div class="text-center text-formeta-light">
			<Icon name="alert-circle" size={48} class="text-red-400 mx-auto mb-4" />
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
	.btn-logout {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		font-family: 'Geist Mono', monospace;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		border: 1px solid #666666;
		background: transparent;
		color: #CCCCCC;
		transition: all 0.2s ease;
		cursor: pointer;
	}
	
	.btn-logout:hover {
		border-color: #4A90E2;
		background: rgba(74, 144, 226, 0.1);
		color: #4A90E2;
	}
	
	.info-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px;
		background: rgba(74, 144, 226, 0.05);
		border: 1px solid rgba(74, 144, 226, 0.2);
		border-radius: 4px;
	}
	
	.info-item .label {
		font-family: 'Geist Mono', monospace;
		font-size: 11px;
		font-weight: 600;
		color: #4A90E2;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		display: block;
	}
	
	.info-item .value {
		font-family: 'Geist Mono', monospace;
		font-size: 13px;
		color: #CCCCCC;
		display: block;
		margin-top: 2px;
	}
	
	.action-card {
		background: rgba(26, 26, 26, 0.95);
		border: 2px solid #4A90E2;
		padding: 24px;
		transition: all 0.2s ease;
		cursor: pointer;
	}
	
	.action-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(74, 144, 226, 0.2);
	}
	
	.admin-card {
		border-color: #F44336;
	}
	
	.admin-card:hover {
		box-shadow: 0 8px 25px rgba(244, 67, 54, 0.2);
	}
	
	.action-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;
	}
	
	.action-header h3 {
		font-family: 'Geist Mono', monospace;
		font-size: 14px;
		font-weight: 600;
		color: #FFFFFF;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.action-description {
		font-size: 13px;
		color: #CCCCCC;
		margin-bottom: 20px;
		line-height: 1.5;
	}
	
	.action-btn {
		width: 100%;
		padding: 12px;
		font-family: 'Geist Mono', monospace;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 1px;
		text-transform: uppercase;
		border: 1px solid #4A90E2;
		background: transparent;
		color: #4A90E2;
		transition: all 0.2s ease;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}
	
	.action-btn:hover {
		background: #4A90E2;
		color: white;
	}
	
	.admin-btn {
		border-color: #F44336;
		color: #F44336;
	}
	
	.admin-btn:hover {
		background: #F44336;
		color: white;
	}
	
	.tool-link {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		background: rgba(74, 144, 226, 0.05);
		border: 1px solid rgba(74, 144, 226, 0.2);
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.2s ease;
		cursor: pointer;
	}
	
	.tool-link:hover {
		background: rgba(74, 144, 226, 0.1);
		border-color: rgba(74, 144, 226, 0.4);
		transform: translateY(-1px);
	}
	
	.tool-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: rgba(74, 144, 226, 0.1);
		border: 1px solid rgba(74, 144, 226, 0.3);
		border-radius: 4px;
		flex-shrink: 0;
	}
	
	.tool-info {
		flex: 1;
		min-width: 0;
	}
	
	.tool-title {
		font-family: 'Geist Mono', monospace;
		font-size: 13px;
		font-weight: 600;
		color: #FFFFFF;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin: 0 0 4px 0;
	}
	
	.tool-desc {
		font-size: 11px;
		color: #CCCCCC;
		margin: 0;
		line-height: 1.3;
	}
</style>
