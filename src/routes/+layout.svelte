<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import RoutePreloader from '$lib/components/RoutePreloader.svelte';
	import ToastContainer from '$lib/components/ToastContainer.svelte';
	import { cookieConsent, initAnalytics } from '$lib/stores/cookieConsent';
	import { performance } from '$lib/stores/performance';

	// Inicializar cookies y performance monitoring
	// Clerk se inicializa solo en rutas que lo necesiten (/intranet/*)
	onMount(() => {
		// Initialize performance monitoring
		performance.init();
		
		// Initialize cookie consent store
		const consent = cookieConsent.init();
		
		// If user has already given analytics consent, initialize analytics
		if (consent?.analytics) {
			initAnalytics();
		}
	});
</script>

<div class="min-h-screen flex flex-col">
	<Navigation />
	
	<main class="flex-1">
		<slot />
	</main>
	
	<Footer />
	
	<!-- Cookie Consent Banner -->
	<CookieConsent />
	
	<!-- Route Preloader -->
	<RoutePreloader />
	
	<!-- Toast Notifications -->
	<ToastContainer />
</div>
