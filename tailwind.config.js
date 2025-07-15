/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        // Formeta Brand Colors - Paleta Oficial
        'formeta-primary': '#4A90E2',    // Azul medio principal
        'formeta-secondary': '#A78BFA',   // Lavanda secundario
        'formeta-blue': '#4A90E2',
        'formeta-lavender': '#A78BFA',
        'formeta-action': '#007AFF',
        'formeta-dark': '#111111',
        'formeta-gray': '#1A1A1A',
        'formeta-text': '#333333',
        'formeta-light': '#CCCCCC',
        'formeta-white': '#FFFFFF',
        'formeta-light-gray': '#EEEEEE',
        
        // Colores de estado y feedback - Paleta consistente
        'formeta-success': '#22C55E',     // Verde para success/ready
        'formeta-warning': '#F59E0B',     // Amarillo para warnings
        'formeta-error': '#EF4444',       // Rojo para error/critical
        'formeta-info': '#3B82F6',        // Azul para info
        'formeta-neutral': '#6B7280',     // Gris neutro
        
        // Variantes de colores Formeta
        'formeta-primary-50': '#EBF3FE',
        'formeta-primary-100': '#BBDEFB',
        'formeta-primary-200': '#90CAF9',
        'formeta-primary-500': '#4A90E2',
        'formeta-primary-600': '#1976D2',
        'formeta-primary-700': '#0D47A1',
        
        'formeta-secondary-50': '#F3F0FF',
        'formeta-secondary-100': '#E1BEE7',
        'formeta-secondary-200': '#C4B5FD',
        'formeta-secondary-500': '#A78BFA',
        'formeta-secondary-600': '#8B5CF6',
        'formeta-secondary-700': '#7C3AED',
        
        // Colores funcionales
        'formeta-bg': '#FAFAFA',          // Fondo general
        'formeta-surface': '#FFFFFF',     // Superficies/cards
        'formeta-border': '#E5E7EB',      // Bordes
      },
      fontFamily: {
        'geist': ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'Monaco', 'Menlo', 'monospace'],
      },
      fontSize: {
        '48': ['48px', { lineHeight: '1.2' }],
        '36': ['36px', { lineHeight: '1.3' }],
        '24': ['24px', { lineHeight: '1.4' }],
        '16': ['16px', { lineHeight: '1.5' }],
        '14': ['14px', { lineHeight: '1.4' }],
        '12': ['12px', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        'pixel': '1.2px',
      },
      boxShadow: {
        'pixel': '4px 4px 0px rgba(0, 0, 0, 0.5)',
        'pixel-hover': '6px 6px 0px rgba(0, 0, 0, 0.5)',
        'pixel-blue': '2px 2px 0px rgba(74, 144, 226, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #4A90E2 0%, #A78BFA 100%)',
        'gradient-secondary': 'linear-gradient(180deg, #BBDEFB 0%, #E1BEE7 100%)',
      },
      animation: {
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px #4A90E2' },
          '100%': { boxShadow: '0 0 20px #4A90E2, 0 0 30px #4A90E2' },
        }
      }
    },
  },
  plugins: [],
}
