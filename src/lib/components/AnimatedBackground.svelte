<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let canvas: HTMLCanvasElement;
	let scene: any;
	let camera: any;
	let renderer: any;
	let geometryGroup: any;
	let animationId: number;
	let THREE: any;
	let mounted = false;

	onMount(async () => {
		if (!browser) return;
		
		console.log('AnimatedBackground: Starting initialization...');
		
		try {
			const threeModule = await import('three');
			THREE = threeModule;
			mounted = true;
			
			console.log('AnimatedBackground: Three.js loaded successfully');
			
			if (canvas) {
				console.log('AnimatedBackground: Canvas found, initializing Three.js...');
				initThreeJS();
				animate();
				handleResize();
				if (typeof window !== 'undefined') {
					window.addEventListener('resize', handleResize);
				}
			} else {
				console.log('AnimatedBackground: Canvas not found');
			}
		} catch (error) {
			console.error('AnimatedBackground: Error loading Three.js', error);
		}
	});

	onDestroy(() => {
		if (!browser || !mounted) return;
		
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		if (renderer) {
			renderer.dispose();
		}
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', handleResize);
		}
	});

	function initThreeJS() {
		if (!browser || !mounted || !THREE || !canvas || typeof window === 'undefined') return;
		
		console.log('AnimatedBackground: Initializing Three.js scene...');
		
		// Scene setup
		scene = new THREE.Scene();
		
		// Camera setup
		camera = new THREE.PerspectiveCamera(
			75, 
			window.innerWidth / window.innerHeight, 
			0.1, 
			1000
		);
		camera.position.z = 80;

		// Renderer setup
		renderer = new THREE.WebGLRenderer({ 
			canvas, 
			alpha: true,
			antialias: true 
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);

		console.log('AnimatedBackground: Creating geometry group...');

		// Create geometry group
		geometryGroup = new THREE.Group();

		// Main torus (center)
		const mainTorus = createTorus(18, 3, 0x3b82f6, 0.6);
		mainTorus.position.set(0, 0, 0);
		geometryGroup.add(mainTorus);

		// Secondary smaller torus (orbiting)
		const secondaryTorus = createTorus(8, 1.5, 0x60a5fa, 0.4);
		secondaryTorus.position.set(35, 10, -20);
		geometryGroup.add(secondaryTorus);

		// Geometric rings
		const ring1 = createRing(25, 27, 0x3b82f6, 0.3);
		ring1.rotation.x = Math.PI / 4;
		geometryGroup.add(ring1);

		const ring2 = createRing(45, 47, 0x1e40af, 0.25);
		ring2.rotation.y = Math.PI / 3;
		geometryGroup.add(ring2);

		// Floating geometric shapes
		const tetrahedron = createTetrahedron(4, 0x06b6d4, 0.4);
		tetrahedron.position.set(-30, -15, 10);
		geometryGroup.add(tetrahedron);

		const octahedron = createOctahedron(3, 0x8b5cf6, 0.35);
		octahedron.position.set(25, -20, 15);
		geometryGroup.add(octahedron);

		scene.add(geometryGroup);
		
		console.log('AnimatedBackground: Scene initialized with', geometryGroup.children.length, 'objects');
	}

	function createTorus(radius: number, tube: number, color: number, opacity: number) {
		const geometry = new THREE.TorusGeometry(radius, tube, 16, 100);
		const material = new THREE.MeshBasicMaterial({ 
			color,
			wireframe: true,
			transparent: true,
			opacity
		});
		return new THREE.Mesh(geometry, material);
	}

	function createRing(innerRadius: number, outerRadius: number, color: number, opacity: number) {
		const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 32);
		const material = new THREE.MeshBasicMaterial({ 
			color,
			wireframe: true,
			transparent: true,
			opacity,
			side: THREE.DoubleSide
		});
		return new THREE.Mesh(geometry, material);
	}

	function createTetrahedron(radius: number, color: number, opacity: number) {
		const geometry = new THREE.TetrahedronGeometry(radius);
		const material = new THREE.MeshBasicMaterial({ 
			color,
			wireframe: true,
			transparent: true,
			opacity
		});
		return new THREE.Mesh(geometry, material);
	}

	function createOctahedron(radius: number, color: number, opacity: number) {
		const geometry = new THREE.OctahedronGeometry(radius);
		const material = new THREE.MeshBasicMaterial({ 
			color,
			wireframe: true,
			transparent: true,
			opacity
		});
		return new THREE.Mesh(geometry, material);
	}

	function animate() {
		if (!browser || !mounted || !renderer || !scene || !camera || !geometryGroup) return;
		
		animationId = requestAnimationFrame(animate);
		
		// Subtle rotation for the entire group
		geometryGroup.rotation.y += 0.002;
		geometryGroup.rotation.x += 0.001;
		
		// Individual rotations for specific elements
		if (geometryGroup.children.length > 0) {
			// Main torus
			geometryGroup.children[0].rotation.x += 0.008;
			geometryGroup.children[0].rotation.z += 0.005;
			
			// Secondary torus
			if (geometryGroup.children[1]) {
				geometryGroup.children[1].rotation.y += 0.012;
				geometryGroup.children[1].rotation.z += 0.007;
			}
			
			// Rings
			if (geometryGroup.children[2]) {
				geometryGroup.children[2].rotation.z += 0.003;
			}
			if (geometryGroup.children[3]) {
				geometryGroup.children[3].rotation.x += 0.004;
			}
			
			// Floating shapes
			if (geometryGroup.children[4]) {
				geometryGroup.children[4].rotation.x += 0.015;
				geometryGroup.children[4].rotation.y += 0.010;
			}
			if (geometryGroup.children[5]) {
				geometryGroup.children[5].rotation.y += 0.018;
				geometryGroup.children[5].rotation.z += 0.012;
			}
		}
		
		renderer.render(scene, camera);
	}

	function handleResize() {
		if (!browser || !mounted || !camera || !renderer || typeof window === 'undefined') return;
		
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
</script>

{#if browser}
<canvas 
	bind:this={canvas}
	class="absolute inset-0 w-full h-full"
	style="z-index: 1; background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);"
></canvas>
{:else}
<!-- Fallback background for SSR -->
<div class="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
{/if}

<style>
	canvas {
		pointer-events: none;
	}
</style>
