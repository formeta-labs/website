# Instrucciones Claude CLI - Rediseño Frontend Corporativo

## Contexto del Proyecto
Este proyecto requiere la aplicación de un nuevo diseño corporativo siguiendo estrictamente la guía de estilo ubicada en `styleguide/`. El objetivo es mantener máxima fidelidad al estilo corporativo de Formeta.

## Estructura de Styleguide
```
styleguide/
├── index.html                    # Guía visual principal - REVISAR SIEMPRE PRIMERO
├── doc.html                      # Documentación técnica detallada
├── VERIFICACION.md              # Checklist oficial de verificación
├── assets/
│   ├── fonts/
│   │   ├── geist-fonts.css      # Fuentes corporativas Geist
│   │   └── Geist.zip            # Archivos de fuente
│   ├── images/
│   │   ├── ex1.svg              # Iconos corporativos
│   │   ├── ex2.svg
│   │   ├── ex3.svg
│   │   └── logo-formeta.svg     # Logo corporativo oficial
│   └── css/
│       ├── components-advan...   # Componentes avanzados
│       ├── responsive-colors...  # Sistema de colores responsive
│       └── style.css            # Estilos base corporativos
└── docs/
    ├── brand-overview...         # Directrices de identidad corporativa
    ├── pdata.md                 # Datos del proyecto
    └── tareas.md                # Lista de tareas
```

## Protocolo Obligatorio

### ANTES de cualquier modificación:
1. **SIEMPRE revisar `styleguide/index.html`** - Es la referencia visual principal
2. **Consultar `styleguide/doc.html`** para detalles técnicos
3. **Verificar `styleguide/VERIFICACION.md`** para cumplir estándares
4. **Analizar CSS corporativo** en `styleguide/assets/css/`

### Elementos Corporativos Específicos:
- **Tipografía:** Sistema Geist (`geist-fonts.css`)
- **Logo:** `logo-formeta.svg` (único logo oficial)
- **Iconografía:** Usar `ex1.svg`, `ex2.svg`, `ex3.svg`
- **Colores:** Extraer de `responsive-colors...`
- **Componentes:** Basarse en `components-advan...`

## Flujo de Trabajo

### 1. Análisis Pre-modificación
```bash
# Siempre revisar estos archivos antes de modificar
cat styleguide/index.html
cat styleguide/doc.html
cat styleguide/VERIFICACION.md
cat styleguide/assets/css/style.css
```

### 2. Implementación
- Aplicar estilos siguiendo exactamente el styleguide
- Usar variables CSS para facilitar mantenimiento
- Mantener responsive design según `responsive-colors...`
- Integrar componentes según `components-advan...`

### 3. Verificación
- Comparar visualmente con `styleguide/index.html`
- Verificar con checklist de `VERIFICACION.md`
- Asegurar fidelidad al 100% con la guía de estilo

## Gestión de TODO.md

### Formato para nuevas entradas:
```markdown
## [FECHA] - [TIPO]: [DESCRIPCIÓN]

### Modificación Realizada:
- Archivo(s) modificado(s): 
- Referencia styleguide: 
- Cambios específicos:

### Verificación:
- [ ] Comparado con styleguide/index.html
- [ ] Checklist VERIFICACION.md completado
- [ ] Responsive verificado
- [ ] Performance mantenida

### Notas:
- Observaciones adicionales
- Posibles mejoras futuras
```

### Tipos de entradas:
- **IMPLEMENTACION**: Nueva funcionalidad según styleguide
- **CORRECCION**: Ajuste para cumplir mejor el styleguide
- **OPTIMIZACION**: Mejora de performance manteniendo fidelidad
- **VERIFICACION**: Revisión de cumplimiento del styleguide

## Reglas Estrictas

### ❌ NUNCA hacer sin revisar styleguide:
- Cambiar colores, tipografías o espaciados
- Modificar componentes UI
- Alterar jerarquía visual
- Cambiar logos o iconografía

### ✅ SIEMPRE hacer:
- Consultar `styleguide/index.html` antes de cualquier cambio visual
- Usar recursos de `styleguide/assets/`
- Documentar cambios en `TODO.md`
- Verificar con `VERIFICACION.md`
- Mantener consistencia con identidad Formeta

### 🔄 En caso de dudas:
1. Revisar `styleguide/docs/brand-overview...`
2. Consultar `styleguide/doc.html` para detalles técnicos
3. Comparar con ejemplos en `styleguide/index.html`
4. Documentar la decisión tomada en `TODO.md`

## Estructura de Respuesta Esperada

Al realizar modificaciones, siempre incluir:

1. **Referencia al styleguide consultado**
2. **Justificación basada en la guía de estilo**
3. **Archivos modificados**
4. **Entrada para TODO.md**
5. **Verificación realizada**

## Prioridades del Proyecto

1. **Fidelidad al styleguide** (máxima prioridad)
2. **Consistencia visual corporativa**
3. **Funcionalidad responsive**
4. **Performance optimizada**
5. **Accesibilidad mantenida**

## Recursos Críticos

- **Fuente oficial:** Geist (`styleguide/assets/fonts/geist-fonts.css`)
- **Logo oficial:** `styleguide/assets/images/logo-formeta.svg`
- **Paleta de colores:** Extraer de `styleguide/assets/css/responsive-colors...`
- **Componentes:** Definidos en `styleguide/assets/css/components-advan...`

---

**RECORDATORIO CRUCIAL:** La guía de estilo en `styleguide/` es la única fuente de verdad para decisiones de diseño. Cualquier desviación debe ser justificada y documentada.