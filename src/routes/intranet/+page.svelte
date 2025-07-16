<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Icon from '$lib/components/Icon.svelte';
	import { config } from '$lib/config';
	
	let email = '';
	let password = '';
	let isLoading = false;
	let errorMessage = '';
	let rememberMe = false;
	
	// Check if user is already logged in
	onMount(() => {
		if (browser) {
			const token = localStorage.getItem('formeta_token');
			if (token) {
				// TODO: Verify token and redirect to dashboard
				goto('/intranet/dashboard');
			}
		}
	});
	
	async function handleLogin() {
		if (!email || !password) {
			errorMessage = 'Por favor, introduce email y contraseña';
			return;
		}
		
		isLoading = true;
		errorMessage = '';
		
		try {
			const response = await fetch(`${config.API_URL}/api/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});
			
			const data = await response.json();
			
			if (response.ok && data.success) {
				// Store token and user info
				localStorage.setItem('formeta_token', data.data.token);
				localStorage.setItem('formeta_user', JSON.stringify(data.data.user));
				
				// Redirect to dashboard
				goto('/intranet/dashboard');
			} else {
				errorMessage = data.error || 'Error al iniciar sesión';
			}
		} catch (error) {
			console.error('Login error:', error);
			errorMessage = 'Error de conexión. Por favor, verifica que el servidor esté funcionando.';
		} finally {
			isLoading = false;
		}
	}
	
	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleLogin();
		}
	}
</script>

<svelte:head>
	<title>Intranet - Formeta Labs</title>
	<meta name="description" content="Acceso a la intranet de Formeta Labs. Portal interno para clientes y colaboradores." />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Main Login Section -->
<section class="login-section bg-formeta-dark min-h-screen flex items-center justify-center">
	<div class="login-container">
		<!-- Header -->
		<div class="login-header text-center mb-8">
			<div class="logo-container mb-6">
				<h1 class="text-36 font-bold text-formeta-white">
					FORMETA <span class="text-formeta-action">INTRANET</span>
				</h1>
				<div class="lock-icon text-formeta-action text-48 mt-2 font-mono">
					<Icon name="lock" size={48} className="text-formeta-action" />
				</div>
			</div>
			<p class="text-16 text-formeta-light">
				Portal interno para clientes y colaboradores
			</p>
		</div>
		
		<!-- Login Form -->
		<form on:submit|preventDefault={handleLogin} class="space-y-6">
			<!-- Email -->
			<div>
				<label for="email" class="form-label">
					EMAIL
				</label>
				<input 
					type="email" 
					id="email" 
					bind:value={email}
					on:keypress={handleKeyPress}
					required
					class="input-mono"
					placeholder="usuario@formeta.es"
					autocomplete="email"
					disabled={isLoading}
				/>
			</div>
			
			<!-- Password -->
			<div>
				<label for="password" class="form-label">
					CONTRASEÑA
				</label>
				<input 
					type="password" 
					id="password" 
					bind:value={password}
					on:keypress={handleKeyPress}
					required
					class="input-mono"
					placeholder="••••••••"
					autocomplete="current-password"
					disabled={isLoading}
				/>
			</div>
			
			<!-- Remember Me -->
			<div class="remember-me">
				<input 
					type="checkbox" 
					id="remember" 
					bind:checked={rememberMe}
					disabled={isLoading}
					class="checkbox-mono"
				/>
				<label for="remember" class="checkbox-label">
					RECORDARME
				</label>
			</div>
			
			<!-- Error Message -->
			{#if errorMessage}
				<div class="error-message">
					{errorMessage}
				</div>
			{/if}
			
			<!-- Login Button -->
			<button 
				type="submit" 
				disabled={isLoading}
				class="btn-login {isLoading ? 'opacity-50 cursor-not-allowed' : ''}"
			>
				{isLoading ? 'ACCEDIENDO...' : 'ACCEDER'}
			</button>
			
			<!-- Additional Options -->
			<div class="additional-options text-center space-y-2">
				<a href="mailto:support@formeta.es?subject=Recuperar acceso Intranet" class="link-secondary">
					¿Olvidaste tu contraseña?
				</a>
				<a href="/contacto" class="link-secondary">
					¿Necesitas acceso? Contacta con nosotros
				</a>
			</div>
		</form>
		
		<!-- Demo Credentials -->
		<div class="demo-credentials">
			<div class="demo-header">
				<Icon name="info" size={16} className="text-formeta-action" />
				<span class="text-12 text-formeta-light font-mono">
					CREDENCIALES DE PRUEBA
				</span>
			</div>
			<div class="demo-content">
				<div class="demo-item">
					<span class="demo-role">ADMIN:</span>
					<span class="demo-cred">admin@formeta.es / admin123</span>
				</div>
				<div class="demo-item">
					<span class="demo-role">USER:</span>
					<span class="demo-cred">user@formeta.es / user123</span>
				</div>
			</div>
		</div>
		
		<!-- System Status -->
		<div class="system-status mt-8">
			<div class="status-indicator">
				<div class="status-dot"></div>
				<span class="text-12 text-formeta-light font-mono">
					SISTEMA OPERATIVO
				</span>
			</div>
			<div class="system-info text-12 text-formeta-light font-mono opacity-60">
				FORMETA.SYS v2.1.0 | SECURE CONNECTION
			</div>
		</div>
	</div>
	
	<!-- Background Pattern -->
	<div class="background-pattern">
		<div class="circuit-lines"></div>
		<div class="floating-elements">
			<div class="floating-element" style="top: 10%; left: 10%;">◆</div>
			<div class="floating-element" style="top: 20%; right: 15%;">●</div>
			<div class="floating-element" style="bottom: 30%; left: 20%;">▲</div>
			<div class="floating-element" style="bottom: 20%; right: 10%;">◼</div>
		</div>
	</div>
</section>

<style>
	.login-section {
		background: #111111;
		position: relative;
		overflow: hidden;
	}
	
	.login-container {
		background: rgba(26, 26, 26, 0.95);
		border: 2px solid #4A90E2;
		padding: 3rem 2rem;
		width: 100%;
		max-width: 400px;
		box-shadow: 6px 6px 0px rgba(74, 144, 226, 0.3);
		position: relative;
		z-index: 10;
		backdrop-filter: blur(10px);
	}
	
	.login-header {
		border-bottom: 1px solid #4A90E2;
		padding-bottom: 2rem;
		margin-bottom: 2rem;
	}
	
	.logo-container {
		position: relative;
	}
	
	.form-label {
		display: block;
		font-family: 'Geist Mono', monospace;
		font-weight: 500;
		font-size: 12px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		color: #CCCCCC;
		margin-bottom: 8px;
	}
	
	.input-mono {
		width: 100%;
		padding: 12px 16px;
		font-size: 14px;
		font-family: 'Geist Mono', monospace;
		border: 2px solid #4A90E2;
		background: rgba(17, 17, 17, 0.8);
		color: #FFFFFF;
		transition: all 0.2s ease;
	}
	
	.input-mono:focus {
		outline: none;
		border-color: #007AFF;
		background: rgba(0, 122, 255, 0.1);
		box-shadow: 0 0 10px rgba(0, 122, 255, 0.3);
	}
	
	.input-mono::placeholder {
		color: #666666;
	}
	
	.remember-me {
		display: flex;
		align-items: center;
		gap: 8px;
		margin: 1rem 0;
	}
	
	.checkbox-mono {
		width: 16px;
		height: 16px;
		border: 2px solid #4A90E2;
		background: rgba(17, 17, 17, 0.8);
		cursor: pointer;
		transition: all 0.2s ease;
	}
	
	.checkbox-mono:checked {
		background: #007AFF;
		border-color: #007AFF;
	}
	
	.checkbox-label {
		font-family: 'Geist Mono', monospace;
		font-size: 12px;
		color: #CCCCCC;
		letter-spacing: 0.5px;
		cursor: pointer;
		text-transform: uppercase;
	}
	
	.demo-credentials {
		margin-top: 2rem;
		padding: 1rem;
		background: rgba(255, 193, 7, 0.05);
		border: 1px solid rgba(255, 193, 7, 0.3);
		border-radius: 4px;
	}
	
	.demo-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
		justify-content: center;
	}
	
	.demo-content {
		font-family: 'Geist Mono', monospace;
		font-size: 11px;
		color: #CCCCCC;
		line-height: 1.6;
	}
	
	.demo-item {
		margin-bottom: 4px;
	}
	
	.demo-role {
		color: #FFC107;
		font-weight: 600;
		margin-right: 8px;
	}
	
	.demo-cred {
		color: #AAAAAA;
	}
	
	.btn-login {
		width: 100%;
		padding: 16px 32px;
		font-family: 'Geist Mono', monospace;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		border: 2px solid #007AFF;
		background: #007AFF;
		color: white;
		transition: all 0.1s ease;
		box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
	
	.btn-login:hover:not(:disabled) {
		transform: translate(-1px, -1px);
		box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);
		background: #0066CC;
	}
	
	.btn-login:active:not(:disabled) {
		transform: translate(2px, 2px);
		box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
	}
	
	.error-message {
		padding: 12px 16px;
		font-size: 12px;
		font-family: 'Geist Mono', monospace;
		background: rgba(244, 67, 54, 0.1);
		border: 2px solid #F44336;
		color: #FFCCCB;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.additional-options {
		border-top: 1px solid #4A90E2;
		padding-top: 1.5rem;
		margin-top: 1.5rem;
	}
	
	.link-secondary {
		display: block;
		font-size: 12px;
		font-family: 'Geist Mono', monospace;
		color: #4A90E2;
		text-decoration: none;
		transition: color 0.2s ease;
	}
	
	.link-secondary:hover {
		color: #007AFF;
	}
	
	.system-status {
		border-top: 1px solid #333333;
		padding-top: 1rem;
		text-align: center;
	}
	
	.status-indicator {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-bottom: 8px;
	}
	
	.status-dot {
		width: 8px;
		height: 8px;
		background: #4CAF50;
		border-radius: 50%;
		animation: pulse 2s ease-in-out infinite alternate;
	}
	
	.system-info {
		text-align: center;
	}
	
	.background-pattern {
		position: absolute;
		inset: 0;
		z-index: 0;
	}
	
	.circuit-lines {
		position: absolute;
		inset: 0;
		background-image: 
			linear-gradient(45deg, transparent 35%, rgba(74, 144, 226, 0.03) 35%, rgba(74, 144, 226, 0.03) 65%, transparent 65%),
			linear-gradient(-45deg, transparent 35%, rgba(167, 139, 250, 0.03) 35%, rgba(167, 139, 250, 0.03) 65%, transparent 65%);
		background-size: 40px 40px;
	}
	
	.floating-elements {
		position: absolute;
		inset: 0;
	}
	
	.floating-element {
		position: absolute;
		font-family: 'Geist Mono', monospace;
		font-size: 24px;
		color: rgba(74, 144, 226, 0.1);
		animation: float 6s ease-in-out infinite alternate;
	}
	
	.floating-element:nth-child(2) {
		animation-delay: -2s;
	}
	
	.floating-element:nth-child(3) {
		animation-delay: -4s;
	}
	
	.floating-element:nth-child(4) {
		animation-delay: -6s;
	}
	
	@keyframes pulse {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0.5;
			transform: scale(1.1);
		}
	}
	
	@keyframes float {
		0% {
			transform: translateY(0px) rotate(0deg);
			opacity: 0.1;
		}
		100% {
			transform: translateY(-20px) rotate(180deg);
			opacity: 0.3;
		}
	}
	
	.text-36 {
		font-size: 36px;
		line-height: 1.2;
	}
	
	.text-48 {
		font-size: 48px;
		line-height: 1.1;
	}
	
	.text-16 {
		font-size: 16px;
		line-height: 1.5;
	}
	
	.text-12 {
		font-size: 12px;
		line-height: 1.3;
	}
	
	.font-mono {
		font-family: 'Geist Mono', monospace;
	}
	
	@media (max-width: 640px) {
		.login-container {
			margin: 1rem;
			padding: 2rem 1.5rem;
		}
		
		.text-36 {
			font-size: 28px;
		}
		
		.text-48 {
			font-size: 36px;
		}
	}
</style>
