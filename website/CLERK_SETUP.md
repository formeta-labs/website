# Configuración de Clerk para Formeta

## Pasos para configurar Clerk:

### 1. Crear cuenta en Clerk
- Ve a [clerk.com](https://clerk.com)
- Crea una cuenta gratuita
- Crea una nueva aplicación

### 2. Obtener las claves de API
- En el dashboard de Clerk, ve a "API Keys"
- Copia tu "Publishable Key"

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
```

### 4. Configurar autenticación en Clerk
- Ve a "User & Authentication" en el dashboard
- Configura los métodos de autenticación que desees:
  - Email/Password
  - Google OAuth
  - GitHub OAuth
  - etc.

### 5. Configurar dominios permitidos
- Ve a "Domains" en el dashboard
- Agrega tu dominio de desarrollo: `localhost:5173`
- Para producción, agrega tu dominio real

### 6. Personalizar la UI (opcional)
- Ve a "Appearance" en el dashboard
- Personaliza los colores y estilos para que coincidan con Formeta
- Colores recomendados:
  - Primary: #007AFF
  - Secondary: #A78BFA

### 7. Configurar roles (opcional)
- Ve a "User & Authentication" > "Roles"
- Crea roles como "admin" y "employee"
- Asigna permisos según necesites

## Funcionalidades incluidas:

✅ **Autenticación completa** con modales de Clerk  
✅ **Gestión de sesiones** automática  
✅ **Redirección** después del login  
✅ **Diseño consistente** con la guía de estilos de Formeta  
✅ **Componentes reutilizables** para toda la app  

## Uso en el código:

```typescript
import { auth, clerkStore } from '$lib/stores/clerk';

// Verificar si está autenticado
$: if ($clerkStore.isSignedIn) {
  // Usuario autenticado
}

// Cerrar sesión
await auth.signOut();

// Abrir modal de login
auth.openSignIn();
```

## Notas importantes:

- Clerk maneja automáticamente la seguridad y las sesiones
- No necesitas manejar JWT tokens manualmente
- Los modales de Clerk son responsivos y accesibles
- Puedes personalizar completamente la apariencia desde el dashboard 