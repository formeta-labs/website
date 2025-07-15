<script lang="ts">
	// Lucide Icons (SVG, MIT License)
	import {
		ChevronRight,
		ChevronDown,
		CheckCircle,
		AlertTriangle,
		Settings,
		Rocket,
		Shield,
		Cpu,
		Server,
		Cloud,
		FileText,
		Users,
		Mail,
		Phone,
		MapPin,
		Globe,
		Beaker,
		Terminal,
		Box,
		Lightbulb,
		Star,
		Zap,
		Flame,
		Eye,
		Heart,
		Trophy,
		Code,
		Database,
		Monitor,
		Smartphone,
		Wifi,
		Lock,
		Unlock,
		Check,
		X,
		XCircle,
		ArrowRight,
		ArrowLeft,
		ArrowUp,
		ArrowDown,
		Plus,
		PlusCircle,
		Minus,
		Search,
		Filter,
		Download,
		Upload,
		Calendar,
		Clock,
		Home,
		Menu,
		MoreHorizontal,
		MoreVertical,
		Atom,
		Brain,
		Target,
		Scale,
		Building,
		Briefcase,
        Newspaper,
		DollarSign,
		TrendingUp,
		Link,
		Euro,
		Book,
		BarChart,
		BarChart3,
		HelpCircle,
		MessageCircle,
		Layers,
		ShoppingCart,
		CreditCard,
		UserCheck,
		Megaphone,
		Gift,
		Headphones
	} from 'lucide-svelte';

	export let name: string;
	export let size: number = 24;
	export let className: string = '';
	export let color: string = 'currentColor';

	const icons = {
		// Navigation & UI
		'chevron-right': ChevronRight,
		'chevron-down': ChevronDown,
		'arrow-right': ArrowRight,
		'arrow-left': ArrowLeft,
		'arrow-up': ArrowUp,
		'arrow-down': ArrowDown,
		'menu': Menu,
		'more-horizontal': MoreHorizontal,
		'more-vertical': MoreVertical,
		'home': Home,
		
		// Status & Feedback
		'check-circle': CheckCircle,
		'check': Check,
		'x': X,
		'x-circle': XCircle,
		'alert-triangle': AlertTriangle,
		'star': Star,
		'heart': Heart,
		'trophy': Trophy,
		
		// Technical & Development
		'settings': Settings,
		'rocket': Rocket,
		'shield': Shield,
		'cpu': Cpu,
		'server': Server,
		'cloud': Cloud,
		'database': Database,
		'atom': Atom,
		'brain': Brain,
		'terminal': Terminal,
		'code': Code,
		'beaker': Beaker,
		'box': Box,
		'monitor': Monitor,
		'smartphone': Smartphone,
		'wifi': Wifi,
		'lock': Lock,
		'unlock': Unlock,
		
		// Content & Communication
		'file-text': FileText,
		'users': Users,
		'mail': Mail,
		'phone': Phone,
		'map-pin': MapPin,
		'globe': Globe,
		'lightbulb': Lightbulb,
		'zap': Zap,
		'flame': Flame,
		'eye': Eye,
		'message-circle': MessageCircle,
		'help-circle': HelpCircle,
		'book': Book,
		
		// Actions & Tools
		'plus': Plus,
		'plus-circle': PlusCircle,
		'minus': Minus,
		'search': Search,
		'filter': Filter,
		'download': Download,
		'upload': Upload,
		'calendar': Calendar,
		'clock': Clock,
		'target': Target,
		'link': Link,
		'gift': Gift,
		
		// Business & Finance
		'briefcase': Briefcase,
		'building': Building,
		'dollar-sign': DollarSign,
		'euro': Euro,
		'credit-card': CreditCard,
		'shopping-cart': ShoppingCart,
		'trending-up': TrendingUp,
		'bar-chart': BarChart,
		'layers': Layers,
		'scale': Scale,
		'user-check': UserCheck,
		'megaphone': Megaphone,
		'headphones': Headphones
	};

	$: IconComponent = icons[name];
</script>

{#if IconComponent}
	<svelte:component this={IconComponent} {size} {color} class={className} />
{:else}
	<!-- Fallback para iconos no encontrados -->
	<div class="w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-xs {className}">
		?
	</div>
{/if}
