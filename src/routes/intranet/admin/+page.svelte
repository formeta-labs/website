<!-- src/routes/intranet/admin/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Icon from '$lib/components/Icon.svelte';
	import { 
		isLoaded, 
		isSignedIn, 
		user, 
		signOut, 
		getUserRole,
		getOrganizationUsers,
		inviteUserToOrganization,
		removeUserFromOrganization,
		updateUserRole,
		getClerk
	} from '$lib/stores/auth';
	import { 
		siteSettings, 
		saveSettings, 
		resetSettings, 
		exportSettings, 
		importSettings 
	} from '$lib/stores/settings';

	interface OrganizationUser {
		id: string;
		firstName: string;
		lastName: string;
		email: string;
		role: string;
		createdAt: number;
		updatedAt: number;
		profileImageUrl?: string;
	}

	let activeTab: 'overview' | 'users' | 'settings' | 'debug' = 'overview';
	let users: OrganizationUser[] = [];
	let loading = false;
	let error: string | null = null;
	let success: string | null = null;

	// User management state
	let showInviteModal = false;
	let inviteEmail = '';
	let inviteRole = 'basic_member';
	let inviteLoading = false;

	// Settings state
	let settingsForm = { ...$siteSettings };
	let settingsLoading = false;

	// Stats
	let stats = {
		totalUsers: 0,
		activeUsers: 0,
		adminUsers: 0,
		lastLogin: new Date().toISOString()
	};

	onMount(() => {
		loadUsers();
	});

	async function loadUsers() {
		loading = true;
		error = null;
		
		try {
			users = await getOrganizationUsers();
			
			// Calculate stats
			stats.totalUsers = users.length;
			stats.adminUsers = users.filter(u => u.role.includes('admin')).length;
			stats.activeUsers = users.length; // Approximation
		} catch (err) {
			error = err instanceof Error ? err.message : 'Error cargando usuarios';
			console.error('Error loading users:', err);
		} finally {
			loading = false;
		}
	}

	async function handleInviteUser() {
		if (!inviteEmail.trim()) {
			error = 'El email es requerido';
			return;
		}

		inviteLoading = true;
		error = null;
		success = null;

		try {
			await inviteUserToOrganization(inviteEmail, inviteRole);
			success = `Invitación enviada a ${inviteEmail}`;
			showInviteModal = false;
			inviteEmail = '';
			await loadUsers();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Error enviando invitación';
		} finally {
			inviteLoading = false;
		}
	}

	async function handleRemoveUser(userId: string, userEmail: string) {
		if (!confirm(`¿Estás seguro de que quieres eliminar a ${userEmail}?`)) {
			return;
		}

		loading = true;
		error = null;

		try {
			await removeUserFromOrganization(userId);
			success = `Usuario ${userEmail} eliminado correctamente`;
			await loadUsers();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Error eliminando usuario';
		} finally {
			loading = false;
		}
	}

	async function handleUpdateRole(userId: string, newRole: string, userEmail: string) {
		loading = true;
		error = null;

		try {
			await updateUserRole(userId, newRole);
			success = `Rol de ${userEmail} actualizado correctamente`;
			await loadUsers();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Error actualizando rol';
		} finally {
			loading = false;
		}
	}

	async function handleSaveSettings() {
		settingsLoading = true;
		error = null;
		success = null;

		try {
			saveSettings(settingsForm);
			success = 'Configuraciones guardadas correctamente';
		} catch (err) {
			error = err instanceof Error ? err.message : 'Error guardando configuraciones';
		} finally {
			settingsLoading = false;
		}
	}

	function handleResetSettings() {
		if (confirm('¿Estás seguro de que quieres resetear todas las configuraciones?')) {
			resetSettings();
			settingsForm = { ...$siteSettings };
			success = 'Configuraciones reseteadas';
		}
	}

	function handleExportSettings() {
		const exportData = exportSettings();
		const blob = new Blob([exportData], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'formeta-settings.json';
		a.click();
		URL.revokeObjectURL(url);
		success = 'Configuraciones exportadas';
	}

	function handleImportSettings(event: Event) {
		const file = (event.target as HTMLInputElement).files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			try {
				const content = e.target?.result as string;
				importSettings(content);
				settingsForm = { ...$siteSettings };
				success = 'Configuraciones importadas correctamente';
			} catch (err) {
				error = 'Error importando configuraciones';
			}
		};
		reader.readAsText(file);
	}

	function formatDate(timestamp: number) {
		return new Date(timestamp).toLocaleDateString('es-ES', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	function getRoleDisplay(role: string) {
		const roleMap: Record<string, string> = {
			'admin': 'Administrador',
			'org:admin': 'Administrador',
			'basic_member': 'Usuario',
			'org:member': 'Usuario'
		};
		return roleMap[role] || role;
	}

	function getRoleClass(role: string) {
		if (role.includes('admin')) return 'role-admin';
		return 'role-user';
	}

	// Clear messages after 5 seconds
	$: if (error || success) {
		setTimeout(() => {
			error = null;
			success = null;
		}, 5000);
	}

	$: userName = $user?.firstName && $user?.lastName 
		? `${$user.firstName} ${$user.lastName}` 
		: $user?.emailAddresses?.[0]?.emailAddress || 'Admin';
</script>

<svelte:head>
	<title>Panel de Administración - Formeta Intranet</title>
</svelte:head>

<div class="admin-container">
	<!-- Header -->
	<header class="admin-header">
		<div class="header-content">
			<div class="header-left">
				<button 
					on:click={() => goto('/intranet/dashboard')}
					class="back-btn"
					title="Volver al Dashboard"
				>
					<Icon name="arrow-left" size={18} />
				</button>
				<div class="header-title">
					<h1>Panel de Administración</h1>
					<span class="header-subtitle">Gestión del sistema Formeta</span>
				</div>
			</div>
			<div class="header-right">
				<div class="admin-info">
					<div class="admin-details">
						<span class="admin-name">{userName}</span>
						<span class="admin-role">ADMINISTRADOR</span>
					</div>
					<div class="admin-avatar">
						<Icon name="shield" size={20} />
					</div>
				</div>
				<button 
					on:click={signOut}
					class="logout-btn"
					title="Cerrar sesión"
				>
					<Icon name="log-out" size={18} />
				</button>
			</div>
		</div>
	</header>

	<!-- Navigation Tabs -->
	<nav class="admin-nav">
		<div class="nav-content">
			<button 
				class="nav-tab {activeTab === 'overview' ? 'active' : ''}"
				on:click={() => activeTab = 'overview'}
			>
				<Icon name="bar-chart-3" size={18} />
				<span>Overview</span>
			</button>
			<button 
				class="nav-tab {activeTab === 'users' ? 'active' : ''}"
				on:click={() => activeTab = 'users'}
			>
				<Icon name="users" size={18} />
				<span>Usuarios</span>
			</button>
			<button 
				class="nav-tab {activeTab === 'settings' ? 'active' : ''}"
				on:click={() => activeTab = 'settings'}
			>
				<Icon name="settings" size={18} />
				<span>Configuración</span>
			</button>
			<button 
				class="nav-tab {activeTab === 'debug' ? 'active' : ''}"
				on:click={() => activeTab = 'debug'}
			>
				<Icon name="terminal" size={18} />
				<span>Debug</span>
			</button>
		</div>
	</nav>

	<!-- Main Content -->
	<main class="admin-main">
		<!-- Messages -->
		{#if error}
			<div class="message error">
				<Icon name="alert-circle" size={18} />
				<span>{error}</span>
				<button on:click={() => error = null}>
					<Icon name="x" size={16} />
				</button>
			</div>
		{/if}

		{#if success}
			<div class="message success">
				<Icon name="check-circle" size={18} />
				<span>{success}</span>
				<button on:click={() => success = null}>
					<Icon name="x" size={16} />
				</button>
			</div>
		{/if}

		<!-- Overview Tab -->
		{#if activeTab === 'overview'}
			<div class="tab-content">
				<section class="overview-section">
					<h2 class="section-title">Resumen del Sistema</h2>
					
					<!-- Stats Grid -->
					<div class="stats-grid">
						<div class="stat-card">
							<div class="stat-icon users">
								<Icon name="users" size={24} />
							</div>
							<div class="stat-content">
								<span class="stat-value">{stats.totalUsers}</span>
								<span class="stat-label">Total Usuarios</span>
							</div>
						</div>
						
						<div class="stat-card">
							<div class="stat-icon admins">
								<Icon name="shield" size={24} />
							</div>
							<div class="stat-content">
								<span class="stat-value">{stats.adminUsers}</span>
								<span class="stat-label">Administradores</span>
							</div>
						</div>
						
						<div class="stat-card">
							<div class="stat-icon active">
								<Icon name="activity" size={24} />
							</div>
							<div class="stat-content">
								<span class="stat-value">{stats.activeUsers}</span>
								<span class="stat-label">Usuarios Activos</span>
							</div>
						</div>
						
						<div class="stat-card">
							<div class="stat-icon time">
								<Icon name="clock" size={24} />
							</div>
							<div class="stat-content">
								<span class="stat-value">Online</span>
								<span class="stat-label">Estado Sistema</span>
							</div>
						</div>
					</div>

					<!-- Quick Actions -->
					<div class="quick-actions">
						<h3 class="subsection-title">Acciones Rápidas</h3>
						<div class="actions-grid">
							<button 
								class="action-btn primary"
								on:click={() => { activeTab = 'users'; showInviteModal = true; }}
							>
								<Icon name="user-plus" size={20} />
								<span>Invitar Usuario</span>
							</button>
							
							<button 
								class="action-btn secondary"
								on:click={() => activeTab = 'users'}
							>
								<Icon name="users" size={20} />
								<span>Gestionar Usuarios</span>
							</button>
							
							<button 
								class="action-btn secondary"
								on:click={() => activeTab = 'settings'}
							>
								<Icon name="settings" size={20} />
								<span>Configuraciones</span>
							</button>
							
							<button 
								class="action-btn secondary"
								on:click={() => activeTab = 'debug'}
							>
								<Icon name="terminal" size={20} />
								<span>Debug Playground</span>
							</button>
							
							<button 
								class="action-btn secondary"
								on:click={loadUsers}
								disabled={loading}
							>
								<Icon name="refresh-cw" size={20} className={loading ? 'animate-spin' : ''} />
								<span>Actualizar</span>
							</button>
						</div>
					</div>

					<!-- System Info -->
					<div class="system-info">
						<h3 class="subsection-title">Información del Sistema</h3>
						<div class="info-grid">
							<div class="info-item">
								<Icon name="server" size={18} />
								<div class="info-content">
									<span class="info-label">Servidor</span>
									<span class="info-value">Formeta Cloud</span>
								</div>
							</div>
							<div class="info-item">
								<Icon name="database" size={18} />
								<div class="info-content">
									<span class="info-label">Base de Datos</span>
									<span class="info-value">PostgreSQL</span>
								</div>
							</div>
							<div class="info-item">
								<Icon name="shield-check" size={18} />
								<div class="info-content">
									<span class="info-label">Autenticación</span>
									<span class="info-value">Clerk.dev</span>
								</div>
							</div>
							<div class="info-item">
								<Icon name="globe" size={18} />
								<div class="info-content">
									<span class="info-label">Dominio</span>
									<span class="info-value">formeta.es</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		{/if}

		<!-- Users Tab -->
		{#if activeTab === 'users'}
			<div class="tab-content">
				<section class="users-section">
					<div class="section-header">
						<h2 class="section-title">Gestión de Usuarios</h2>
						<button 
							class="btn-primary"
							on:click={() => showInviteModal = true}
						>
							<Icon name="user-plus" size={18} />
							<span>Invitar Usuario</span>
						</button>
					</div>

					{#if loading}
						<div class="loading-state">
							<Icon name="loader" size={32} className="animate-spin" />
							<p>Cargando usuarios...</p>
						</div>
					{:else if users.length === 0}
						<div class="empty-state">
							<Icon name="users" size={48} />
							<h3>No hay usuarios</h3>
							<p>Invita a los primeros usuarios a la organización</p>
							<button 
								class="btn-primary"
								on:click={() => showInviteModal = true}
							>
								Invitar Usuario
							</button>
						</div>
					{:else}
						<div class="users-grid">
							{#each users as user (user.id)}
								<div class="user-card">
									<div class="user-header">
										{#if user.profileImageUrl}
											<img 
												src={user.profileImageUrl} 
												alt={user.firstName} 
												class="user-avatar"
											/>
										{:else}
											<div class="user-avatar-placeholder">
												<Icon name="user" size={24} />
											</div>
										{/if}
										<div class="user-info">
											<h4 class="user-name">
												{user.firstName} {user.lastName}
											</h4>
											<span class="user-email">{user.email}</span>
										</div>
									</div>
									
									<div class="user-details">
										<div class="user-role">
											<span class="role-badge {getRoleClass(user.role)}">
												{getRoleDisplay(user.role)}
											</span>
										</div>
										
										<div class="user-meta">
											<div class="meta-item">
												<Icon name="calendar" size={14} />
												<span>Registro: {formatDate(user.createdAt)}</span>
											</div>
											<div class="meta-item">
												<Icon name="clock" size={14} />
												<span>Actualizado: {formatDate(user.updatedAt)}</span>
											</div>
										</div>
									</div>

									<div class="user-actions">
										{#if !user.role.includes('admin')}
											<button 
												class="btn-small secondary"
												on:click={() => handleUpdateRole(user.id, 'admin', user.email)}
												disabled={loading}
											>
												<Icon name="shield" size={14} />
												<span>Hacer Admin</span>
											</button>
										{:else}
											<button 
												class="btn-small secondary"
												on:click={() => handleUpdateRole(user.id, 'basic_member', user.email)}
												disabled={loading}
											>
												<Icon name="user" size={14} />
												<span>Hacer Usuario</span>
											</button>
										{/if}
										
										<button 
											class="btn-small danger"
											on:click={() => handleRemoveUser(user.id, user.email)}
											disabled={loading}
										>
											<Icon name="trash-2" size={14} />
											<span>Eliminar</span>
										</button>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				</section>
			</div>
		{/if}

		<!-- Settings Tab -->
		{#if activeTab === 'settings'}
			<div class="tab-content">
				<section class="settings-section">
					<div class="section-header">
						<h2 class="section-title">Configuración del Sistema</h2>
						<div class="settings-actions">
							<button 
								class="btn-secondary"
								on:click={handleExportSettings}
							>
								<Icon name="download" size={18} />
								<span>Exportar</span>
							</button>
							<label class="btn-secondary import-btn">
								<Icon name="upload" size={18} />
								<span>Importar</span>
								<input 
									type="file" 
									accept=".json"
									on:change={handleImportSettings}
									style="display: none;"
								/>
							</label>
						</div>
					</div>

					<form on:submit|preventDefault={handleSaveSettings} class="settings-form">
						<!-- General Settings -->
						<div class="settings-group">
							<h3 class="group-title">Configuración General</h3>
							<div class="settings-grid">
								<div class="setting-item">
									<label for="siteName">Nombre del Sitio</label>
									<input 
										id="siteName"
										type="text" 
										bind:value={settingsForm.siteName}
										class="form-input"
									/>
								</div>
								
								<div class="setting-item">
									<label for="contactEmail">Email de Contacto</label>
									<input 
										id="contactEmail"
										type="email" 
										bind:value={settingsForm.contactEmail}
										class="form-input"
									/>
								</div>
								
								<div class="setting-item full">
									<label for="siteDescription">Descripción del Sitio</label>
									<textarea 
										id="siteDescription"
										bind:value={settingsForm.siteDescription}
										class="form-textarea"
										rows="3"
									></textarea>
								</div>
							</div>
						</div>

						<!-- Security Settings -->
						<div class="settings-group">
							<h3 class="group-title">Configuración de Seguridad</h3>
							<div class="settings-grid">
								<div class="setting-item">
									<label class="toggle-label">
										<input 
											type="checkbox" 
											bind:checked={settingsForm.allowRegistration}
											class="toggle-input"
										/>
										<span class="toggle-slider"></span>
										<span>Permitir Registro Público</span>
									</label>
								</div>
								
								<div class="setting-item">
									<label for="sessionTimeout">Tiempo de Sesión (minutos)</label>
									<input 
										id="sessionTimeout"
										type="number" 
										bind:value={settingsForm.sessionTimeout}
										class="form-input"
										min="30"
										max="1440"
									/>
								</div>
								
								<div class="setting-item">
									<label for="defaultRole">Rol por Defecto</label>
									<select 
										id="defaultRole"
										bind:value={settingsForm.defaultUserRole}
										class="form-select"
									>
										<option value="user">Usuario</option>
										<option value="admin">Administrador</option>
									</select>
								</div>
							</div>
						</div>

						<!-- System Settings -->
						<div class="settings-group">
							<h3 class="group-title">Configuración del Sistema</h3>
							<div class="settings-grid">
								<div class="setting-item">
									<label class="toggle-label">
										<input 
											type="checkbox" 
											bind:checked={settingsForm.maintenanceMode}
											class="toggle-input"
										/>
										<span class="toggle-slider"></span>
										<span>Modo Mantenimiento</span>
									</label>
								</div>
								
								<div class="setting-item">
									<label class="toggle-label">
										<input 
											type="checkbox" 
											bind:checked={settingsForm.enableNotifications}
											class="toggle-input"
										/>
										<span class="toggle-slider"></span>
										<span>Habilitar Notificaciones</span>
									</label>
								</div>
								
								<div class="setting-item">
									<label class="toggle-label">
										<input 
											type="checkbox" 
											bind:checked={settingsForm.enableDebugMode}
											class="toggle-input"
										/>
										<span class="toggle-slider"></span>
										<span>Modo Debug</span>
									</label>
								</div>
								
								<div class="setting-item">
									<label for="maxFileSize">Tamaño Máximo de Archivo (MB)</label>
									<input 
										id="maxFileSize"
										type="number" 
										bind:value={settingsForm.maxFileSize}
										class="form-input"
										min="1"
										max="100"
									/>
								</div>
								
								<div class="setting-item">
									<label for="themeMode">Tema</label>
									<select 
										id="themeMode"
										bind:value={settingsForm.themeMode}
										class="form-select"
									>
										<option value="light">Claro</option>
										<option value="dark">Oscuro</option>
										<option value="auto">Automático</option>
									</select>
								</div>
							</div>
						</div>

						<!-- Analytics Settings -->
						<div class="settings-group">
							<h3 class="group-title">Configuración de Analytics</h3>
							<div class="settings-grid">
								<div class="setting-item">
									<label class="toggle-label">
										<input 
											type="checkbox" 
											bind:checked={settingsForm.enableAnalytics}
											class="toggle-input"
										/>
										<span class="toggle-slider"></span>
										<span>Habilitar Analytics</span>
									</label>
								</div>
								
								<div class="setting-item">
									<label for="analyticsId">ID de Analytics</label>
									<input 
										id="analyticsId"
										type="text" 
										bind:value={settingsForm.analyticsId}
										class="form-input"
										placeholder="G-XXXXXXXXXX"
										disabled={!settingsForm.enableAnalytics}
									/>
								</div>
							</div>
						</div>

						<!-- Form Actions -->
						<div class="form-actions">
							<button 
								type="button"
								class="btn-secondary"
								on:click={handleResetSettings}
							>
								<Icon name="rotate-ccw" size={18} />
								<span>Resetear</span>
							</button>
							
							<button 
								type="submit" 
								class="btn-primary"
								disabled={settingsLoading}
							>
								{#if settingsLoading}
									<Icon name="loader" size={18} className="animate-spin" />
								{:else}
									<Icon name="save" size={18} />
								{/if}
								<span>Guardar Cambios</span>
							</button>
						</div>
					</form>
				</section>
			</div>
		{/if}

		<!-- Debug Tab -->
		{#if activeTab === 'debug'}
			<div class="tab-content">
				<section class="debug-section">
					<div class="section-header">
						<h2 class="section-title">Debug Playground</h2>
						<button 
							class="btn-primary"
							on:click={() => goto('/intranet/admin/debug')}
						>
							<Icon name="external-link" size={18} />
							<span>Abrir Playground Completo</span>
						</button>
					</div>

					<div class="debug-preview">
						<p class="debug-description">
							El Debug Playground es una herramienta completa para probar y desarrollar componentes del sistema. 
							Incluye herramientas para testing de notificaciones Toast, pruebas de rendimiento y más.
						</p>

						<div class="debug-features">
							<h3 class="subsection-title">Funcionalidades Disponibles</h3>
							<div class="features-grid">
								<div class="feature-card">
									<div class="feature-icon">
										<Icon name="bell" size={24} />
									</div>
									<div class="feature-content">
										<h4>Sistema de Notificaciones Toast</h4>
										<p>Prueba diferentes tipos de notificaciones, configuraciones y funcionalidades avanzadas.</p>
									</div>
								</div>
								
								<div class="feature-card">
									<div class="feature-icon">
										<Icon name="trending-up" size={24} />
									</div>
									<div class="feature-content">
										<h4>Pruebas de Rendimiento</h4>
										<p>Herramientas para medir y optimizar el rendimiento de componentes y animaciones.</p>
									</div>
								</div>
								
								<div class="feature-card">
									<div class="feature-icon">
										<Icon name="palette" size={24} />
									</div>
									<div class="feature-content">
										<h4>Testing de Componentes</h4>
										<p>Playground para probar componentes visuales, temas y configuraciones de UI.</p>
									</div>
								</div>
								
								<div class="feature-card">
									<div class="feature-icon">
										<Icon name="smartphone" size={24} />
									</div>
									<div class="feature-content">
										<h4>Responsive Testing</h4>
										<p>Herramientas para probar diseño responsivo y adaptabilidad en diferentes dispositivos.</p>
									</div>
								</div>
							</div>
						</div>

						<div class="debug-actions">
							<button 
								class="btn-primary large"
								on:click={() => goto('/intranet/admin/debug')}
							>
								<Icon name="play" size={20} />
								<span>Acceder al Debug Playground</span>
							</button>
						</div>
					</div>
				</section>
			</div>
		{/if}
	</main>
</div>

<!-- Invite User Modal -->
{#if showInviteModal}
	<div 
		class="modal-overlay" 
		role="dialog" 
		aria-modal="true"
		tabindex="-1"
		on:click={() => showInviteModal = false}
		on:keydown={(e) => e.key === 'Escape' && (showInviteModal = false)}
	>
		<div class="modal-content">
			<div class="modal-header">
				<h3>Invitar Usuario</h3>
				<button 
					class="modal-close"
					on:click={() => showInviteModal = false}
				>
					<Icon name="x" size={20} />
				</button>
			</div>
			
			<form on:submit|preventDefault={handleInviteUser} class="modal-form">
				<div class="form-group">
					<label for="inviteEmail">Email del Usuario</label>
					<input 
						id="inviteEmail"
						type="email" 
						bind:value={inviteEmail}
						class="form-input"
						placeholder="usuario@ejemplo.com"
						required
					/>
				</div>
				
				<div class="form-group">
					<label for="inviteRole">Rol</label>
					<select 
						id="inviteRole"
						bind:value={inviteRole}
						class="form-select"
					>
						<option value="basic_member">Usuario</option>
						<option value="admin">Administrador</option>
					</select>
				</div>
				
				<div class="modal-actions">
					<button 
						type="button" 
						class="btn-secondary"
						on:click={() => showInviteModal = false}
					>
						Cancelar
					</button>
					<button 
						type="submit" 
						class="btn-primary"
						disabled={inviteLoading}
					>
						{#if inviteLoading}
							<Icon name="loader" size={16} className="animate-spin" />
						{:else}
							<Icon name="send" size={16} />
						{/if}
						<span>Enviar Invitación</span>
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	/* Admin Container */
	.admin-container {
		min-height: 100vh;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		color: #ffffff;
		font-family: 'Geist', system-ui, -apple-system, sans-serif;
	}

	/* Header */
	.admin-header {
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(239, 68, 68, 0.2);
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
		gap: 16px;
	}

	.back-btn {
		width: 40px;
		height: 40px;
		background: rgba(74, 144, 226, 0.1);
		border: 1px solid rgba(74, 144, 226, 0.3);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #4A90E2;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.back-btn:hover {
		background: rgba(74, 144, 226, 0.2);
		border-color: #4A90E2;
		transform: translateY(-1px);
	}

	.header-title h1 {
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		margin: 0;
		background: linear-gradient(135deg, #ffffff, #ef4444);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.header-subtitle {
		font-size: 12px;
		color: #ef4444;
		font-weight: 500;
		letter-spacing: 0.5px;
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.admin-info {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 8px 16px;
		background: rgba(239, 68, 68, 0.1);
		border: 1px solid rgba(239, 68, 68, 0.2);
		border-radius: 8px;
	}

	.admin-details {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.admin-name {
		font-size: 14px;
		font-weight: 600;
		color: #ffffff;
	}

	.admin-role {
		font-family: 'Geist Mono', monospace;
		font-size: 11px;
		color: #ef4444;
		font-weight: 500;
		letter-spacing: 0.5px;
	}

	.admin-avatar {
		width: 36px;
		height: 36px;
		background: linear-gradient(135deg, #ef4444, #dc2626);
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

	/* Navigation */
	.admin-nav {
		background: rgba(0, 0, 0, 0.4);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.nav-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		gap: 4px;
	}

	.nav-tab {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 16px 20px;
		background: transparent;
		border: none;
		color: #a1a1aa;
		cursor: pointer;
		transition: all 0.2s ease;
		border-bottom: 3px solid transparent;
		font-weight: 500;
	}

	.nav-tab:hover {
		color: #ffffff;
		background: rgba(255, 255, 255, 0.05);
	}

	.nav-tab.active {
		color: #ef4444;
		border-bottom-color: #ef4444;
		background: rgba(239, 68, 68, 0.1);
	}

	/* Main Content */
	.admin-main {
		max-width: 1400px;
		margin: 0 auto;
		padding: 32px 24px;
	}

	.tab-content {
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Messages */
	.message {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 16px;
		border-radius: 8px;
		margin-bottom: 24px;
		font-weight: 500;
	}

	.message button {
		margin-left: auto;
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		opacity: 0.7;
		transition: opacity 0.2s ease;
	}

	.message button:hover {
		opacity: 1;
	}

	.message.error {
		background: rgba(239, 68, 68, 0.1);
		border: 1px solid rgba(239, 68, 68, 0.3);
		color: #fca5a5;
	}

	.message.success {
		background: rgba(16, 185, 129, 0.1);
		border: 1px solid rgba(16, 185, 129, 0.3);
		color: #6ee7b7;
	}

	/* Section Titles */
	.section-title {
		font-size: 28px;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 24px 0;
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
		height: 28px;
		background: linear-gradient(135deg, #ef4444, #dc2626);
		border-radius: 2px;
	}

	.subsection-title {
		font-size: 20px;
		font-weight: 600;
		color: #ffffff;
		margin: 32px 0 16px 0;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;
	}

	/* Stats Grid */
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		margin-bottom: 32px;
	}

	.stat-card {
		background: rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 24px;
		display: flex;
		align-items: center;
		gap: 16px;
		transition: all 0.3s ease;
	}

	.stat-card:hover {
		transform: translateY(-2px);
		border-color: rgba(239, 68, 68, 0.3);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}

	.stat-icon {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.stat-icon.users { background: linear-gradient(135deg, #4A90E2, #357ABD); }
	.stat-icon.admins { background: linear-gradient(135deg, #ef4444, #dc2626); }
	.stat-icon.active { background: linear-gradient(135deg, #10b981, #059669); }
	.stat-icon.time { background: linear-gradient(135deg, #f59e0b, #d97706); }

	.stat-content {
		display: flex;
		flex-direction: column;
	}

	.stat-value {
		font-size: 24px;
		font-weight: 700;
		color: #ffffff;
		line-height: 1.2;
	}

	.stat-label {
		font-size: 14px;
		color: #a1a1aa;
		font-weight: 500;
	}

	/* Actions Grid */
	.actions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 16px;
		margin-bottom: 32px;
	}

	.action-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 12px 20px;
		border-radius: 8px;
		font-weight: 600;
		font-size: 14px;
		cursor: pointer;
		transition: all 0.2s ease;
		border: 1px solid;
	}

	.action-btn.primary {
		background: rgba(239, 68, 68, 0.1);
		border-color: rgba(239, 68, 68, 0.3);
		color: #ef4444;
	}

	.action-btn.primary:hover {
		background: rgba(239, 68, 68, 0.2);
		border-color: #ef4444;
		transform: translateY(-1px);
	}

	.action-btn.secondary {
		background: rgba(74, 144, 226, 0.1);
		border-color: rgba(74, 144, 226, 0.3);
		color: #4A90E2;
	}

	.action-btn.secondary:hover {
		background: rgba(74, 144, 226, 0.2);
		border-color: #4A90E2;
		transform: translateY(-1px);
	}

	/* System Info */
	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 16px;
	}

	.info-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
	}

	.info-content {
		display: flex;
		flex-direction: column;
	}

	.info-label {
		font-size: 12px;
		color: #a1a1aa;
		font-weight: 500;
	}

	.info-value {
		font-size: 14px;
		color: #ffffff;
		font-weight: 600;
	}

	/* Users Grid */
	.users-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 20px;
	}

	.user-card {
		background: rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 20px;
		transition: all 0.3s ease;
	}

	.user-card:hover {
		transform: translateY(-2px);
		border-color: rgba(74, 144, 226, 0.3);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}

	.user-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 16px;
	}

	.user-avatar {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		object-fit: cover;
	}

	.user-avatar-placeholder {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #4A90E2, #357ABD);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.user-info {
		flex: 1;
	}

	.user-name {
		font-size: 16px;
		font-weight: 600;
		color: #ffffff;
		margin: 0 0 4px 0;
	}

	.user-email {
		font-size: 14px;
		color: #a1a1aa;
	}

	.user-details {
		margin-bottom: 16px;
	}

	.user-role {
		margin-bottom: 12px;
	}

	.role-badge {
		display: inline-block;
		padding: 4px 8px;
		border-radius: 6px;
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.role-badge.role-admin {
		background: rgba(239, 68, 68, 0.2);
		border: 1px solid rgba(239, 68, 68, 0.4);
		color: #ef4444;
	}

	.role-badge.role-user {
		background: rgba(74, 144, 226, 0.2);
		border: 1px solid rgba(74, 144, 226, 0.4);
		color: #4A90E2;
	}

	.user-meta {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 12px;
		color: #a1a1aa;
	}

	.user-actions {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	/* Buttons */
	.btn-primary, .btn-secondary, .btn-small {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 12px 16px;
		border-radius: 8px;
		font-weight: 600;
		font-size: 14px;
		cursor: pointer;
		transition: all 0.2s ease;
		border: 1px solid;
		text-decoration: none;
	}

	.btn-small {
		padding: 8px 12px;
		font-size: 12px;
	}

	.btn-primary {
		background: rgba(239, 68, 68, 0.1);
		border-color: rgba(239, 68, 68, 0.3);
		color: #ef4444;
	}

	.btn-primary:hover {
		background: rgba(239, 68, 68, 0.2);
		border-color: #ef4444;
	}

	.btn-secondary {
		background: rgba(74, 144, 226, 0.1);
		border-color: rgba(74, 144, 226, 0.3);
		color: #4A90E2;
	}

	.btn-secondary:hover {
		background: rgba(74, 144, 226, 0.2);
		border-color: #4A90E2;
	}

	.btn-small.danger {
		background: rgba(239, 68, 68, 0.1);
		border-color: rgba(239, 68, 68, 0.3);
		color: #ef4444;
	}

	.btn-small.danger:hover {
		background: rgba(239, 68, 68, 0.2);
		border-color: #ef4444;
	}

	/* Loading and Empty States */
	.loading-state, .empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 60px 20px;
		text-align: center;
	}

	.loading-state p, .empty-state p {
		color: #a1a1aa;
		margin: 16px 0;
	}

	.empty-state h3 {
		color: #ffffff;
		margin: 16px 0 8px 0;
		font-size: 20px;
	}

	/* Settings Form */
	.settings-form {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.settings-group {
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 24px;
	}

	.group-title {
		font-size: 18px;
		font-weight: 600;
		color: #ffffff;
		margin: 0 0 20px 0;
		position: relative;
		padding-left: 12px;
	}

	.group-title::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 3px;
		height: 18px;
		background: #ef4444;
		border-radius: 2px;
	}

	.settings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
	}

	.setting-item {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.setting-item.full {
		grid-column: 1 / -1;
	}

	.setting-item label {
		font-size: 14px;
		font-weight: 500;
		color: #ffffff;
	}

	.form-input, .form-textarea, .form-select {
		padding: 12px 16px;
		background: rgba(0, 0, 0, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		color: #ffffff;
		font-size: 14px;
		transition: border-color 0.2s ease;
	}

	.form-input:focus, .form-textarea:focus, .form-select:focus {
		outline: none;
		border-color: #ef4444;
	}

	.form-textarea {
		resize: vertical;
		min-height: 80px;
	}

	/* Toggle Switch */
	.toggle-label {
		display: flex;
		align-items: center;
		gap: 12px;
		cursor: pointer;
		flex-direction: row;
	}

	.toggle-input {
		display: none;
	}

	.toggle-slider {
		position: relative;
		width: 48px;
		height: 24px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		transition: background-color 0.3s ease;
	}

	.toggle-slider::before {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		width: 20px;
		height: 20px;
		background: #ffffff;
		border-radius: 50%;
		transition: transform 0.3s ease;
	}

	.toggle-input:checked + .toggle-slider {
		background: #ef4444;
	}

	.toggle-input:checked + .toggle-slider::before {
		transform: translateX(24px);
	}

	/* Form Actions */
	.form-actions {
		display: flex;
		justify-content: flex-end;
		gap: 16px;
		padding-top: 24px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.settings-actions {
		display: flex;
		gap: 12px;
	}

	.import-btn {
		position: relative;
		overflow: hidden;
	}

	/* Modal */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		backdrop-filter: blur(4px);
	}

	.modal-content {
		background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 0;
		width: 90%;
		max-width: 500px;
		max-height: 90vh;
		overflow: hidden;
		animation: modalSlideIn 0.3s ease;
	}

	@keyframes modalSlideIn {
		from {
			opacity: 0;
			transform: scale(0.9) translateY(-20px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.modal-header h3 {
		font-size: 18px;
		font-weight: 600;
		color: #ffffff;
		margin: 0;
	}

	.modal-close {
		width: 32px;
		height: 32px;
		background: rgba(239, 68, 68, 0.1);
		border: 1px solid rgba(239, 68, 68, 0.3);
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ef4444;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.modal-close:hover {
		background: rgba(239, 68, 68, 0.2);
		border-color: #ef4444;
	}

	.modal-form {
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.form-group label {
		font-size: 14px;
		font-weight: 500;
		color: #ffffff;
	}

	.modal-actions {
		display: flex;
		justify-content: flex-end;
		gap: 12px;
		margin-top: 8px;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.header-content {
			padding: 0 16px;
		}

		.admin-main {
			padding: 20px 16px;
		}

		.nav-content {
			padding: 0 16px;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.actions-grid {
			grid-template-columns: 1fr;
		}

		.users-grid {
			grid-template-columns: 1fr;
		}

		.settings-grid {
			grid-template-columns: 1fr;
		}

		.section-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 16px;
		}

		.form-actions {
			flex-direction: column;
		}

		.modal-content {
			width: 95%;
			margin: 20px;
		}

		.admin-info {
			display: none;
		}
	}

	/* Animations */
	.animate-spin {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	/* Debug Section */
	.debug-section {
		/* Inherit existing section styles */
	}

	.debug-preview {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.debug-description {
		font-size: 16px;
		color: #a1a1aa;
		line-height: 1.6;
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
	}

	.feature-card {
		background: rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 24px;
		transition: all 0.3s ease;
		display: flex;
		gap: 16px;
		align-items: flex-start;
	}

	.feature-card:hover {
		transform: translateY(-2px);
		border-color: rgba(239, 68, 68, 0.3);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}

	.feature-icon {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #ef4444, #dc2626);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		flex-shrink: 0;
	}

	.feature-content {
		flex: 1;
	}

	.feature-content h4 {
		font-size: 16px;
		font-weight: 600;
		color: #ffffff;
		margin: 0 0 8px 0;
	}

	.feature-content p {
		font-size: 14px;
		color: #a1a1aa;
		line-height: 1.5;
		margin: 0;
	}

	.debug-actions {
		display: flex;
		justify-content: center;
		padding-top: 24px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.btn-primary.large {
		padding: 16px 32px;
		font-size: 16px;
		font-weight: 600;
	}

	/* Mobile responsiveness for debug section */
	@media (max-width: 768px) {
		.features-grid {
			grid-template-columns: 1fr;
		}

		.feature-card {
			flex-direction: column;
			text-align: center;
		}

		.debug-actions {
			padding: 16px 0;
		}

		.btn-primary.large {
			width: 100%;
			padding: 14px 24px;
		}
	}
</style>
