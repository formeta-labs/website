import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: ['formeta.es', 'localhost', '192.168.1.80']
	},
	build: {
		// Optimize chunk size limits
		chunkSizeWarningLimit: 600,
		rollupOptions: {
			output: {
				// Manual chunking for better code splitting
				manualChunks: (id) => {
					// Vendor chunks
					if (id.includes('node_modules')) {
						// Large libraries get their own chunks
						if (id.includes('three')) {
							return 'three';
						}
						if (id.includes('@clerk/clerk-js')) {
							return 'clerk';
						}
						if (id.includes('lucide-svelte')) {
							return 'icons';
						}
						// Other vendor libraries
						return 'vendor';
					}
					
					// Component chunks
					if (id.includes('/lib/components/')) {
						// Heavy components get separate chunks
						if (id.includes('AnimatedBackground')) {
							return 'animated-bg';
						}
						if (id.includes('ServiceModal')) {
							return 'modals';
						}
						// Other components
						return 'components';
					}
					
					// Route-based chunks
					if (id.includes('/routes/')) {
						if (id.includes('/intranet/')) {
							return 'intranet';
						}
						if (id.includes('/servicios/')) {
							return 'services';
						}
						if (id.includes('/legal/')) {
							return 'legal';
						}
					}
				},
				// Optimize chunk names
				chunkFileNames: 'chunks/[name]-[hash].js',
				entryFileNames: 'entries/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash].[ext]'
			}
		},
		// Enable source maps for better debugging in production
		sourcemap: false,
		// Optimize CSS
		cssCodeSplit: true,
		// Enable minification
		minify: 'esbuild',
		// Target modern browsers for better optimization
		target: 'es2020'
	},
	optimizeDeps: {
		// Pre-bundle these dependencies
		include: [
			'svelte/motion',
			'svelte/easing'
		],
		// Exclude heavy dependencies from pre-bundling
		exclude: [
			'three',
			'@clerk/clerk-js'
		]
	},
	define: {
		// Enable performance optimizations in production
		__VITE_IS_PRODUCTION__: JSON.stringify(process.env.NODE_ENV === 'production'),
		// Disable dev-only features in production
		__VITE_ENABLE_DEVTOOLS__: JSON.stringify(process.env.NODE_ENV !== 'production')
	},
	ssr: {
		// Don't externalize these for better SSR performance
		noExternal: ['lucide-svelte']
	}
});
