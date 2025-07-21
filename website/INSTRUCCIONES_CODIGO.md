# 📋 Hoja de Instrucciones del Código - Formeta

## 🎯 Propósito
Este documento sirve como guía completa para entender, mantener y desarrollar el proyecto Formeta. Contiene toda la información necesaria sobre la estructura del código, funciones, ubicaciones y configuraciones.

---

## 📊 Estado Actual del Proyecto

### ✅ **COMPLETADO**
- **Sistema de estilos** - Totalmente funcional
- **Componentes UI** - Todos adaptados al design system
- **Páginas principales** - Home, Login, Dashboard, Contacto
- **Responsive design** - Funciona en móvil, tablet y desktop
- **Paleta de colores** - Blue Digital (#007AFF) aplicado correctamente
- **Efectos visuales** - Glassmorphism, hover effects, gradientes
- **Cache y build** - Problemas resueltos completamente

### 🔄 **EN PROGRESO**
- **Página de Servicios** - Necesita refactorización visual
- **Accesibilidad** - Validación WCAG AA pendiente
- **Pruebas cross-browser** - Pendiente de completar

### 📋 **PENDIENTE**
- **Páginas de desarrollo** - Blog, Nosotros (estructura básica creada)
- **Documentación final** - README actualizado
- **QA completo** - Pruebas en dispositivos reales

---

## 📁 Estructura del Proyecto

### Directorio Raíz
```
Formeta/
├── design-UI/           # Guía de estilos de referencia (NO usar en producción)
├── website/            # Proyecto principal SvelteKit
└── VERIFICACION_UI.md  # Documento de verificación de UI
```

### Proyecto Website (SvelteKit)
```
website/
├── src/
│   ├── app.css         # ⚠️ ESTILOS GLOBALES PRINCIPALES
│   ├── app.d.ts        # Tipos de SvelteKit
│   ├── app.html        # Template HTML base
│   ├── App.svelte      # Componente raíz
│   ├── main.ts         # Punto de entrada
│   ├── lib/
│   │   ├── components/
│   │   │   ├── ui/     # Componentes UI reutilizables
│   │   │   ├── Header.svelte
│   │   │   └── Footer.svelte
│   │   ├── data/
│   │   ├── server/
│   │   └── stores/
│   └── routes/         # Páginas de la aplicación
├── static/             # Archivos estáticos
├── prisma/             # Base de datos
├── docker-compose.yml  # Configuración Docker
├── Dockerfile
├── tailwind.config.ts  # ⚠️ CONFIGURACIÓN TAILWIND
├── postcss.config.js
├── svelte.config.js
└── package.json
```

---

## 🎨 Sistema de Estilos

### ⚠️ ARCHIVOS CRÍTICOS DE ESTILOS

#### 1. `src/app.css` - ESTILOS GLOBALES
**Ubicación:** `website/src/app.css`
**Propósito:** Estilos globales, variables CSS y clases personalizadas

**Contenido principal:**
```css
/* Importación de Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Variables CSS de Formeta */
:root {
  --color-primary: #4A90E2;
  --color-secondary: #A78BFA;
  --color-accent: #007AFF;
  --color-text: #333333;
  --color-bg: #FFFFFF;
}

/* Clases de botones personalizadas */
.btn-formeta-primary { /* ... */ }
.btn-formeta-outline { /* ... */ }
.btn-formeta-glass { /* ... */ }

/* Efectos glassmorphism */
.glass-card { /* ... */ }
.hover-lift { /* ... */ }
.hover-glow { /* ... */ }

/* Tipografía */
.font-poppins { /* ... */ }
.font-inter { /* ... */ }

/* Gradientes */
.bg-formeta-gradient { /* ... */ }
.text-formeta-gradient { /* ... */ }
```

#### 2. `tailwind.config.ts` - CONFIGURACIÓN TAILWIND
**Ubicación:** `website/tailwind.config.ts`
**Propósito:** Configuración de colores, fuentes y utilidades de Tailwind

**Contenido principal:**
```typescript
colors: {
  formeta: {
    primary: '#4A90E2',
    secondary: '#A78BFA',
    accent: '#007AFF',    // Blue Digital
    text: '#333333',
    bg: '#FFFFFF',
    gradient: {
      start: '#4A90E2',
      end: '#A78BFA'
    }
  }
}
```

---

## 🧩 Componentes UI

### Ubicación: `src/lib/components/ui/`

#### 1. Button.svelte
**Funciones:**
- Botones con variantes: primary, outline, glass
- Tamaños: sm, md, lg
- Estados: disabled, loading
- Accesibilidad completa

**Uso:**
```svelte
<Button variant="primary" size="lg" on:click={handleClick}>
  Texto del botón
</Button>
```

#### 2. Card.svelte
**Funciones:**
- Tarjetas con efectos glassmorphism
- Variantes: default, glass
- Efectos hover automáticos

**Uso:**
```svelte
<Card variant="glass" class="p-6">
  Contenido de la tarjeta
</Card>
```

#### 3. Input.svelte
**Funciones:**
- Inputs con validación visual
- Estados: error, success, disabled
- Labels accesibles

#### 4. Modal.svelte
**Funciones:**
- Modales accesibles
- Backdrop con blur
- Cierre con ESC y click fuera

#### 5. Alert.svelte
**Funciones:**
- Alertas con variantes: success, error, warning, info
- Auto-cierre opcional
- Iconos contextuales

#### 6. Select.svelte
**Funciones:**
- Select personalizado
- Opciones dinámicas
- Validación visual

---

## 🏗️ Componentes Generales

### Ubicación: `src/lib/components/`

#### 1. Header.svelte
**Funciones:**
- Navegación principal
- Logo con nombre "Formeta"
- Menú responsive
- Efectos glassmorphism
- Estados activos de navegación

**Clases CSS utilizadas:**
- `text-formeta-primary`
- `hover:text-formeta-primary`
- `bg-white/80 backdrop-blur-md`

#### 2. Footer.svelte
**Funciones:**
- Enlaces de navegación
- Redes sociales
- Información de contacto
- Colores de marca

---

## 📄 Páginas de la Aplicación

### Ubicación: `src/routes/`

#### 1. Home (`+page.svelte`)
**Funciones:**
- Hero section con gradiente
- Servicios destacados
- Estadísticas
- Testimonios
- CTA principal

**Clases CSS utilizadas:**
- `bg-formeta-gradient`
- `glass-card`
- `hover-lift`
- `text-formeta-gradient`

#### 2. Servicios (`/servicios/+page.svelte`)
**Funciones:**
- Lista completa de servicios
- Detalles técnicos
- Tecnologías utilizadas
- Beneficios destacados

#### 3. Contacto (`/contacto/+page.svelte`)
**Funciones:**
- Formulario de contacto
- Información de empresa
- FAQ
- Mapa de ubicación

#### 4. Login (`/login/+page.svelte`)
**Funciones:**
- Formulario de autenticación
- Credenciales de prueba
- Validación de campos

#### 5. Dashboard (`/dashboard/+page.svelte`)
**Funciones:**
- Panel de control
- Estadísticas en tiempo real
- Actividad reciente
- Accesos rápidos

#### 6. Páginas de Desarrollo
- `/blog/+page.svelte` - En desarrollo
- `/nosotros/+page.svelte` - En desarrollo

---

## 🔧 Configuración y Build

### Docker
**Archivos:**
- `docker-compose.yml` - Servicios y puertos
- `Dockerfile` - Imagen de la aplicación
- `docker-start.sh` - Script de inicio

**Comandos importantes:**
```bash
# Reiniciar aplicación
docker-compose restart formeta-web

# Ver logs
docker-compose logs formeta-web

# Rebuild completo
docker-compose down && docker-compose up --build
```

### Desarrollo Local (RÁPIDO) ⚡
**Comandos:**
```bash
# Método recomendado (más rápido):
./dev-start.sh

# Método manual:
npm install
npm run dev

# Si hay problemas de cache:
./dev-start.sh --clean

# Build para producción:
npm run build

# Preview:
npm run preview
```

**URLs:**
- **Desarrollo:** http://localhost:5173 (Hot reload automático)
- **Docker:** http://localhost:3000 (Solo producción)

---

## 🎨 Paleta de Colores Formeta

### Colores Principales
- **Primary:** `#4A90E2` (Azul medio)
- **Secondary:** `#A78BFA` (Lavanda)
- **Accent:** `#007AFF` (Blue Digital)
- **Text:** `#333333` (Gris oscuro)
- **Background:** `#FFFFFF` (Blanco)

### Gradientes
- **Formeta Gradient:** `linear-gradient(135deg, #4A90E2 0%, #A78BFA 100%)`

### Uso en CSS
```css
/* Colores de texto */
.text-formeta-primary
.text-formeta-secondary
.text-formeta-accent
.text-formeta-text

/* Fondos */
.bg-formeta-primary
.bg-formeta-secondary
.bg-formeta-accent
.bg-formeta-gradient

/* Bordes */
.border-formeta-primary
.border-formeta-secondary
```

---

## 🚨 Problemas Comunes y Soluciones

### 1. Estilos no se aplican ✅ RESUELTO
**Causa:** Clases CSS no definidas + Cache persistente + Importación CSS problemática
**Solución:** 
1. Eliminar importación `@import "../../design-UI/css/style.css"`
2. Limpiar cache: `rm -rf .svelte-kit build node_modules/.vite`
3. Rebuild completo: `docker-compose up --build`

**Clases críticas definidas:**
- ✅ `.glass-card` - Efecto glassmorphism
- ✅ `.hover-lift` - Elevación al hover
- ✅ `.hover-glow` - Resplandor azul al hover
- ✅ `.font-poppins` - Fuente Poppins
- ✅ `.font-inter` - Fuente Inter
- ✅ `.bg-formeta-gradient` - Gradiente de marca
- ✅ `.text-formeta-gradient` - Texto con gradiente
- ✅ `.btn-formeta-primary` - Botón principal
- ✅ `.btn-formeta-outline` - Botón outline
- ✅ `.btn-formeta-glass` - Botón glassmorphism

### 2. Colores no coinciden ✅ RESUELTO
**Causa:** Configuración de Tailwind desactualizada
**Solución:** Verificar `tailwind.config.ts`

**Colores configurados:**
- ✅ `formeta.primary: '#4A90E2'` (Azul medio)
- ✅ `formeta.secondary: '#A78BFA'` (Lavanda)
- ✅ `formeta.accent: '#007AFF'` (Blue Digital)
- ✅ `formeta.text: '#333333'` (Gris oscuro)
- ✅ `formeta.bg: '#FFFFFF'` (Blanco)

### 3. Desarrollo Lento ✅ RESUELTO
**Causa:** Docker recompila todo cada vez
**Solución:** 
```bash
# Desarrollo RÁPIDO (recomendado):
./dev-start.sh

# Si hay problemas de cache:
./dev-start.sh --clean

# Docker solo para producción:
docker-compose up --build
```

**Beneficios del desarrollo local:**
- ⚡ **Hot reload automático** - Cambios instantáneos
- 🚀 **Sin recompilación** - Solo recarga del navegador
- 💾 **Menos uso de memoria** - No necesita Docker
- 🔧 **Debugging más fácil** - Herramientas nativas

### 4. Fuentes no cargan ✅ RESUELTO
**Causa:** Google Fonts no configurado
**Solución:** Verificar `app.html` y `app.css`

**Fuentes configuradas:**
- ✅ **Inter** - Fuente principal (Google Fonts)
- ✅ **Poppins** - Fuente secundaria (Google Fonts)
- ✅ **Fallbacks** - system-ui, sans-serif

---

## 📝 Convenciones de Código

### Nomenclatura
- **Componentes:** PascalCase (`Button.svelte`)
- **Clases CSS:** kebab-case (`glass-card`)
- **Variables:** camelCase (`formetaPrimary`)
- **Archivos:** kebab-case (`+page.svelte`)

### Estructura de Componentes
```svelte
<script>
  // Props
  export let variant = 'default';
  export let size = 'md';
  
  // Lógica
  $: classes = getClasses(variant, size);
</script>

<!-- Template -->
<div class={classes}>
  <slot />
</div>

<style>
  /* Estilos específicos del componente */
</style>
```

### Clases CSS
- **Siempre usar clases de Tailwind cuando sea posible**
- **Clases personalizadas solo para efectos específicos**
- **Mantener consistencia con la guía de estilos**

---

## 🔍 Verificación de Calidad

### Checklist de Verificación
- [x] Todos los estilos se aplican correctamente ✅
- [x] Responsive en móvil, tablet y desktop ✅
- [ ] Accesibilidad (contraste, navegación por teclado) 🔄
- [x] Performance (imágenes optimizadas, CSS minificado) ✅
- [x] Consistencia visual con la guía de estilos ✅

### Comandos de Verificación
```bash
# Verificar que no hay errores de build
npm run build

# Verificar que Docker funciona
docker-compose logs formeta-web

# Verificar que los estilos se cargan
curl -s http://localhost:3000 | grep -i "glass-card"
```

---

## 📚 Recursos Adicionales

### Documentación
- `VERIFICACION_UI.md` - Progreso de migración visual
- `design-UI/` - Guía de estilos de referencia
- `README.md` - Documentación del proyecto

### Herramientas
- **SvelteKit:** Framework principal
- **Tailwind CSS:** Sistema de estilos
- **Docker:** Contenedorización
- **Prisma:** Base de datos

---

## ⚠️ Notas Importantes

1. **NO usar archivos de `design-UI/` en producción** - Solo son de referencia
2. **Usar desarrollo local para cambios rápidos** - `./dev-start.sh`
3. **Docker solo para producción** - No para desarrollo diario
4. **Mantener consistencia con la guía de estilos de Formeta**
5. **Documentar todos los cambios en `VERIFICACION_UI.md`**

## 🚀 Flujo de Desarrollo Recomendado

### Para cambios rápidos:
```bash
./dev-start.sh
# Hacer cambios en el código
# Los cambios se reflejan automáticamente en http://localhost:5173
```

### Para producción:
```bash
docker-compose up --build
# Verificar en http://localhost:3000
```

---

*Última actualización: Enero 2025*
*Versión del documento: 2.0 - Sistema Funcionando* 