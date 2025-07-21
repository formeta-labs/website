# ⚡ Resumen Rápido - Formeta

## 🚨 ARCHIVOS CRÍTICOS

### Estilos (✅ FUNCIONANDO CORRECTAMENTE)
- **`src/app.css`** - Estilos globales y clases personalizadas
- **`tailwind.config.ts`** - Configuración de colores y utilidades

### Estado del Sistema
- ✅ **Cache resuelto** - Problemas de build solucionados
- ✅ **Estilos aplicándose** - Todas las clases CSS funcionando
- ✅ **Blue Digital aplicado** - Color #007AFF en uso correcto

### Componentes Principales
- **`src/lib/components/Header.svelte`** - Navegación principal
- **`src/lib/components/Footer.svelte`** - Pie de página
- **`src/lib/components/ui/`** - Componentes UI reutilizables

### Páginas Principales
- **`src/routes/+page.svelte`** - Home
- **`src/routes/servicios/+page.svelte`** - Servicios
- **`src/routes/contacto/+page.svelte`** - Contacto
- **`src/routes/login/+page.svelte`** - Login
- **`src/routes/dashboard/+page.svelte`** - Dashboard

---

## 🎨 CLASES CSS CRÍTICAS

### Efectos Visuales
```css
.glass-card          /* Tarjetas con efecto glassmorphism */
.hover-lift          /* Elevación al hacer hover */
.hover-glow          /* Resplandor azul al hacer hover */
```

### Tipografía
```css
.font-poppins        /* Títulos */
.font-inter          /* Texto del cuerpo */
```

### Gradientes
```css
.bg-formeta-gradient /* Gradiente de fondo */
.text-formeta-gradient /* Gradiente en texto */
```

### Botones
```css
.btn-formeta-primary /* Botón principal azul */
.btn-formeta-outline /* Botón outline */
.btn-formeta-glass   /* Botón glassmorphism */
```

---

## 🔧 COMANDOS ESENCIALES

### Docker
```bash
# Reiniciar aplicación
docker-compose restart formeta-web

# Ver logs
docker-compose logs formeta-web

# Rebuild completo
docker-compose down && docker-compose up --build
```

### Verificación
```bash
# Verificar estilos
curl -s http://localhost:3000 | grep -i "glass-card"

# Verificar build
npm run build
```

---

## 🎨 PALETA DE COLORES

- **Primary:** `#4A90E2` (Azul medio)
- **Secondary:** `#A78BFA` (Lavanda)
- **Accent:** `#007AFF` (Blue Digital)
- **Text:** `#333333` (Gris oscuro)
- **Background:** `#FFFFFF` (Blanco)

---

## 🚨 PROBLEMAS FRECUENTES ✅ RESUELTOS

### Estilos no se aplican ✅ SOLUCIONADO
1. ✅ Clases definidas en `src/app.css`
2. ✅ Cache limpiado completamente
3. ✅ Build funcionando sin errores

### Desarrollo Lento ✅ SOLUCIONADO
```bash
# Desarrollo RÁPIDO (recomendado):
./dev-start.sh

# Si hay problemas de cache:
./dev-start.sh --clean

# Desarrollo con Docker (lento, solo para producción):
docker-compose up --build
```

### Colores incorrectos ✅ SOLUCIONADO
✅ `tailwind.config.ts` configurado correctamente
✅ `src/app.css` con paleta de colores completa

---

## 📁 ESTRUCTURA CLAVE

```
website/
├── src/
│   ├── app.css              # ⚠️ ESTILOS GLOBALES
│   ├── lib/components/
│   │   ├── ui/              # Componentes UI
│   │   ├── Header.svelte    # Navegación
│   │   └── Footer.svelte    # Pie de página
│   └── routes/              # Páginas
├── tailwind.config.ts       # ⚠️ CONFIGURACIÓN TAILWIND
└── docker-compose.yml       # Docker
```

---

## ✅ NOTAS CRÍTICAS - SISTEMA FUNCIONANDO

1. ✅ **NO usar archivos de `design-UI/`** - Solo referencia
2. ✅ **Desarrollo RÁPIDO** - Usar `./dev-start.sh` en lugar de Docker
3. ✅ **Hot reload activado** - Cambios se reflejan automáticamente
4. ✅ **Documentación actualizada** - `VERIFICACION_UI.md` completo

## 🚀 DESARROLLO RÁPIDO

### Comandos Principales:
```bash
./dev-start.sh          # Inicio rápido (recomendado)
./dev-start.sh --clean  # Limpiar cache si hay problemas
npm run dev             # Inicio manual
```

### URLs:
- **Desarrollo:** http://localhost:5173
- **Docker:** http://localhost:3000 (solo producción)

---

*Para información completa, ver `INSTRUCCIONES_CODIGO.md`* 