/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Formeta Design System Colors - Basado en el styleguide
        primary: {
          50: '#EBF8FF',
          100: '#BEE3F8',
          200: '#90CDF4',
          300: '#63B3ED',
          400: '#4299E1',
          500: '#007AFF', // color-blue-digital
          600: '#0066CC',
          700: '#0052A3',
          800: '#003F7A',
          900: '#002C51',
        },
        secondary: {
          50: '#F7FAFC',
          100: '#E2E8F0',
          200: '#CBD5E0',
          300: '#A0AEC0',
          400: '#718096',
          500: '#64748B', // color-gray-ice
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        accent: {
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#FF8A8A',
          500: '#FF6B6B', // color-coral-digital
          600: '#E85555',
          700: '#CC4444',
          800: '#B03333',
          900: '#942222',
        },
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B', 
        error: '#EF4444',
        info: '#3B82F6',
        // Surface colors
        surface: {
          50: '#F8FAFC',  // color-white-neutral
          100: '#F1F5F9', // color-gray-surface
          200: '#E2E8F0', // color-gray-light
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#0F172A',
        },
        // Text colors
        text: {
          primary: '#1E293B',   // color-text-primary
          secondary: '#64748B', // color-text-secondary
          tertiary: '#94A3B8',  // color-text-tertiary
          inverse: '#F8FAFC',
        },
        // Legacy Formeta colors (for backward compatibility)
        formeta: {
          primary: '#007AFF',   // Maps to primary-500
          secondary: '#64748B', // Maps to secondary-500
          accent: '#FF6B6B',    // Maps to accent-500
          text: '#1E293B',      // Maps to text-primary
          dark: '#0F172A',      // Maps to surface-900
          light: '#94A3B8',     // Maps to text-tertiary
          white: '#F8FAFC',     // Maps to surface-50
          black: '#0F172A',     // Maps to surface-900
          error: '#EF4444',     // Maps to error
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Menlo', 'monospace'],
        primary: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Basado en las variables del styleguide
        'display-large': ['48px', { lineHeight: '1.25' }], // --font-size-display-large
        'display': ['36px', { lineHeight: '1.25' }],        // --font-size-display
        'heading-large': ['30px', { lineHeight: '1.25' }],  // --font-size-heading-large
        'heading': ['24px', { lineHeight: '1.25' }],        // --font-size-heading
        'heading-small': ['20px', { lineHeight: '1.5' }],   // --font-size-heading-small
        'heading-xs': ['16px', { lineHeight: '1.5' }],      // --font-size-heading-xs
        'body-large': ['18px', { lineHeight: '1.5' }],      // --font-size-body-large
        'body': ['16px', { lineHeight: '1.5' }],            // --font-size-body
        'body-small': ['14px', { lineHeight: '1.5' }],      // --font-size-body-small
        'caption': ['12px', { lineHeight: '1.5' }],         // --font-size-caption
      },
      fontWeight: {
        thin: '100',      // --font-weight-thin
        light: '300',     // --font-weight-light
        regular: '400',   // --font-weight-regular
        medium: '500',    // --font-weight-medium
        semibold: '600',  // --font-weight-semibold
        bold: '700',      // --font-weight-bold
        black: '900',     // --font-weight-black
      },
      lineHeight: {
        tight: '1.25',    // --line-height-tight
        normal: '1.5',    // --line-height-normal
        loose: '1.75',    // --line-height-loose
      },
      spacing: {
        // Basado en el sistema de espaciado del styleguide
        'xs': '4px',      // --space-xs
        'sm': '8px',      // --space-sm
        'md': '16px',     // --space-md
        'lg': '24px',     // --space-lg
        'xl': '32px',     // --space-xl
        '2xl': '48px',    // --space-2xl
        '3xl': '64px',    // --space-3xl
        '4xl': '96px',    // --space-4xl
      },
      borderRadius: {
        'sm': '4px',      // --radius-sm
        'md': '8px',      // --radius-md
        'lg': '12px',     // --radius-lg
        'xl': '16px',     // --radius-xl
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 25px rgba(0, 0, 0, 0.15)',
        'formeta': '0 4px 12px rgba(0, 122, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #007AFF 0%, #64748B 100%)',
        'gradient-coral': 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
        'gradient-surface': 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
        // Formeta gradients (commonly used)
        'formeta-gradient': 'linear-gradient(135deg, #007AFF 0%, #64748B 50%, #FF6B6B 100%)',
        'formeta-hero': 'linear-gradient(to bottom right, #1E293B 0%, #007AFF 50%, #64748B 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionDuration: {
        'fast': '100ms',    // --duration-fast
        'medium': '300ms',  // --duration-medium
        'slow': '500ms',    // --duration-slow
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // --ease-in-out
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',      // --ease-out  
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',       // --ease-in
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
