---
applyTo: '**'
---


# Guía de Rediseño Frontend - Aplicación de Estilo Corporativo

## Objetivo
Esta guía proporciona las instrucciones necesarias para aplicar el nuevo diseño corporativo a la web frontend, siguiendo estrictamente la guía de estilo establecida.

## Estructura de Archivos de Referencia

```
styleguide/
├── index.html                    # Guía de estilo principal
├── doc.html                      # Documentación adicional
├── VERIFICACION.md              # Lista de verificación
├── assets/
│   ├── fonts/
│   │   ├── geist-fonts.css      # Fuentes corporativas Geist
│   │   └── Geist.zip            # Archivos de fuente
│   ├── images/
│   │   ├── ex1.svg              # Ejemplos/iconos corporativos
│   │   ├── ex2.svg
│   │   ├── ex3.svg
│   │   └── logo-formeta.svg     # Logo corporativo principal
│   └── css/
│       ├── components-advan...   # Componentes avanzados
│       ├── responsive-colors...  # Sistema de colores responsive
│       └── style.css            # Estilos principales
└── docs/
    ├── brand-overview...         # Resumen de marca
    ├── pdata.md                 # Datos del proyecto
    └── tareas.md                # Lista de tareas
```

## Proceso de Implementación

### 1. Análisis Previo Obligatorio

**⚠️ CRÍTICO: Siempre revisar primero la guía de estilo**

Antes de realizar cualquier modificación:

1. **Abrir y revisar archivos principales**
   - `styleguide/index.html` - Guía visual principal
   - `styleguide/doc.html` - Documentación técnica
   - `styleguide/docs/brand-overview...` - Resumen de identidad corporativa
   - `styleguide/VERIFICACION.md` - Lista oficial de verificación

2. **Revisar sistema de estilos**
   ```bash
   # Analizar CSS corporativo
   cat styleguide/assets/css/style.css
   cat styleguide/assets/css/responsive-colors...
   cat styleguide/assets/css/components-advan...
   ```

3. **Inventario de recursos corporativos**
   - Logo principal: `styleguide/assets/images/logo-formeta.svg`
   - Iconos/ejemplos: `ex1.svg`, `ex2.svg`, `ex3.svg`
   - Fuentes: Sistema Geist en `styleguide/assets/fonts/`

3. **Documentar elementos encontrados**
   - Crear lista de componentes disponibles
   - Identificar variaciones de logos
   - Catalogar iconos y elementos gráficos

### 2. Preparación del Entorno

```bash
# Crear backup del estado actual
cp -r src/ backup_original/

# Crear rama para el rediseño
git checkout -b redesign-corporate-style
```

### 3. Implementación por Fases

#### Fase 1: Elementos Base

1. **Colores Corporativos**
   - Extraer paleta de colores del styleguide
   - Crear variables CSS/SCSS con los colores corporativos
   ```css
   :root {
     --primary-color: #valor-del-styleguide;
     --secondary-color: #valor-del-styleguide;
     --accent-color: #valor-del-styleguide;
     /* Agregar todos los colores definidos */
   }
   ```

2. **Tipografías Corporativas Geist**
   - Importar fuentes desde `styleguide/assets/fonts/geist-fonts.css`
   - Extraer archivos de `Geist.zip` si es necesario
   ```css
   /* Importar fuentes Geist corporativas */
   @import url('./assets/fonts/geist-fonts.css');
   
   :root {
     --font-family-primary: 'Geist', sans-serif;
     --font-family-mono: 'GeistMono', monospace;
   }
   ```

3. **Logo Corporativo Formeta**
   - Integrar `logo-formeta.svg` desde `styleguide/assets/images/`
   - Implementar en header, footer y favicon
   ```html
   <!-- Logo principal -->
   <img src="./assets/images/logo-formeta.svg" alt="Formeta" class="logo-main">
   ```

4. **Iconografía Corporativa**
   - Utilizar iconos de ejemplo: `ex1.svg`, `ex2.svg`, `ex3.svg`
   - Mantener consistencia visual con estos elementos

#### Fase 2: Componentes UI

1. **Botones**
   - Replicar estilos de botones del styleguide
   - Implementar estados: normal, hover, active, disabled
   - Aplicar variaciones: primary, secondary, outline

2. **Formularios**
   - Adaptar campos de entrada según styleguide
   - Implementar validaciones visuales corporativas
   - Aplicar estilos a labels, placeholders y mensajes de error

3. **Navegación**
   - Rediseñar menú principal según especificaciones
   - Implementar navegación móvil corporativa
   - Aplicar estados activos y hover

#### Fase 3: Layout y Estructura

1. **Grid System**
   - Implementar sistema de rejilla del styleguide
   - Adaptar breakpoints corporativos
   - Aplicar espaciado consistente

2. **Cards y Contenedores**
   - Rediseñar tarjetas según especificaciones
   - Implementar sombras y bordes corporativos
   - Aplicar jerarquía visual establecida

3. **Iconografía**
   - Reemplazar iconos existentes con los corporativos
   - Mantener consistencia en tamaños y estilos
   - Implementar iconos desde `styleguide/images/icons/`

### 4. Checklist de Verificación

#### Pre-implementación
- [ ] `styleguide/index.html` revisado completamente
- [ ] `styleguide/doc.html` consultado para detalles técnicos
- [ ] `styleguide/docs/brand-overview...` analizado
- [ ] `styleguide/VERIFICACION.md` utilizado como referencia
- [ ] CSS corporativo analizado (`style.css`, `responsive-colors...`, `components-advan...`)
- [ ] Fuentes Geist configuradas
- [ ] Logo Formeta y recursos SVG inventariados
- [ ] Backup del código actual creado
- [ ] Rama de desarrollo configurada

#### Durante implementación
- [ ] Colores corporativos aplicados
- [ ] Fuentes Geist implementadas correctamente
- [ ] Logo Formeta integrado en todas las vistas
- [ ] Iconografía SVG corporativa aplicada (ex1, ex2, ex3)
- [ ] CSS corporativo base aplicado
- [ ] Sistema de colores responsive implementado
- [ ] Componentes avanzados del styleguide replicados

#### Post-implementación
- [ ] Comparación visual exacta con `styleguide/index.html`
- [ ] Verificación completada usando `styleguide/VERIFICACION.md`
- [ ] Documentación técnica de `doc.html` cumplida
- [ ] Pruebas en diferentes navegadores
- [ ] Verificación responsive en móviles y tablets
- [ ] Performance optimizada manteniendo estilos corporativos
- [ ] Accesibilidad verificada según estándares del styleguide

### 5. Buenas Prácticas

#### Mantenimiento de Consistencia
- **Siempre consultar el styleguide** antes de tomar decisiones de diseño
- Usar variables CSS para facilitar mantenimiento futuro
- Documentar desviaciones del styleguide (si las hay) y sus razones

#### Optimización
```css
/* Ejemplo de estructura CSS organizada */
/* 1. Variables corporativas */
:root { /* colores, fuentes, espaciado */ }

/* 2. Reset y base */
/* 3. Layout corporativo */
/* 4. Componentes corporativos */
/* 5. Utilidades */
```

#### Control de Calidad
- Revisar cada página contra el styleguide
- Verificar que todos los elementos mantengan coherencia visual
- Testear interacciones y estados

### 6. Recursos y Referencias

#### Archivos Clave de Referencia
- `styleguide/index.html` - Guía visual principal
- `styleguide/doc.html` - Documentación técnica detallada  
- `styleguide/VERIFICACION.md` - Checklist oficial de verificación
- `styleguide/assets/css/style.css` - Estilos base corporativos
- `styleguide/assets/css/responsive-colors...` - Sistema de colores responsive
- `styleguide/assets/css/components-advan...` - Componentes avanzados
- `styleguide/assets/fonts/geist-fonts.css` - Tipografía corporativa
- `styleguide/assets/images/logo-formeta.svg` - Logo oficial
- `styleguide/docs/brand-overview...` - Directrices de marca

#### Herramientas Recomendadas
- Herramientas de desarrollo del navegador para comparar estilos
- Extensiones de medición de colores para verificar exactitud
- Screenshots del styleguide como referencia durante desarrollo

### 7. Resolución de Problemas Comunes

#### Discrepancias con el Styleguide
1. **Revisar la versión del styleguide** - Asegurar que es la más actual
2. **Consultar con el equipo de diseño** - Para elementos no cubiertos
3. **Documentar decisiones** - Mantener registro de adaptaciones necesarias

#### Compatibilidad
- Verificar soporte de navegadores para nuevas características CSS
- Implementar fallbacks cuando sea necesario
- Mantener funcionalidad en dispositivos móviles

## Entrega Final

### Documentación Requerida
1. **Reporte de cambios** - Lista de modificaciones realizadas