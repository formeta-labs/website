# 🔧 Guía del Panel de Administración - Formeta

## 📋 Resumen
El panel de administración está completamente funcional y permite a los usuarios con rol `ADMIN` gestionar contactos y usuarios del sistema.

## 🚀 Acceso al Panel

### Paso 1: Iniciar los Servidores
```bash
# Terminal 1 - Backend
cd "formeta-website-backend"
npm run dev

# Terminal 2 - Frontend  
cd "formeta-website-website"
npm run dev
```

### Paso 2: Acceder al Login
1. Abrir `http://localhost:5173/intranet`
2. Usar credenciales de administrador:
   - **Email:** `admin@formeta.es`
   - **Password:** `admin123`

### Paso 3: Acceder al Panel de Administración
1. Desde el dashboard, hacer clic en "ADMINISTRACIÓN"
2. O acceder directamente: `http://localhost:5173/intranet/admin`

## 📊 Funcionalidades Disponibles

### 🗂️ Gestión de Contactos
- **Vista de lista**: Todos los contactos con información detallada
- **Filtros disponibles**:
  - Por servicio (web-development, ia-local, verifactu, etc.)
  - Por prioridad (urgent, normal)
  - Por estado (processed, pending)
  - Búsqueda por nombre, email o empresa
- **Acciones**:
  - Marcar como procesado/pendiente
  - Ver detalles completos
  - Eliminar contactos (con confirmación)
- **Paginación**: 10 contactos por página

### 👥 Gestión de Usuarios
- **Vista de lista**: Todos los usuarios del sistema
- **Información mostrada**:
  - Email, nombre, rol, fecha de creación
- **Acciones**:
  - Crear nuevos usuarios
  - Editar información de usuarios existentes
  - Eliminar usuarios (con confirmación)
  - Cambiar roles (USER/ADMIN)

### 📈 Estadísticas
- **Totales**: Total de contactos, procesados, pendientes
- **Por servicio**: Distribución de contactos por servicio
- **Por prioridad**: Distribución por nivel de prioridad
- **Actualización en tiempo real**

## 🔐 Seguridad

### Autenticación
- **JWT**: Tokens con expiración de 24 horas
- **Roles**: Solo usuarios `ADMIN` pueden acceder al panel
- **Protección de rutas**: Middleware de autenticación en el backend

### Middleware de Seguridad
- **authMiddleware**: Verificación de token JWT
- **adminMiddleware**: Verificación de rol de administrador
- **Rate limiting**: Protección contra ataques de fuerza bruta

## 🛠️ Endpoints de la API

### Contactos (Solo Admin)
```
GET /api/contact/stats        # Estadísticas de contactos
GET /api/contact              # Lista de contactos
PUT /api/contact/:id/processed # Marcar como procesado
```

### Usuarios (Solo Admin)
```
GET /api/users                # Lista de usuarios
POST /api/users               # Crear usuario
PUT /api/users/:id            # Actualizar usuario
DELETE /api/users/:id         # Eliminar usuario
```

### Autenticación
```
POST /api/auth/login          # Login
POST /api/auth/logout         # Logout
```

## 🎨 Interfaz de Usuario

### Diseño
- **Tema**: Formeta (negro, azul, rojo para admin)
- **Tipografía**: Geist Mono para elementos técnicos
- **Responsivo**: Adaptable a diferentes tamaños de pantalla

### Componentes
- **Tablas**: Con ordenación y filtros
- **Modales**: Para acciones críticas (eliminar, editar)
- **Indicadores**: Estados de carga y mensajes de error/éxito
- **Navegación**: Tabs entre secciones

## 🔧 Configuración de Desarrollo

### Variables de Entorno
```bash
# Backend (.env)
DATABASE_URL="postgresql://user:password@localhost:5432/formeta"
JWT_SECRET="your-secret-key"
NODE_ENV="development"
```

### Base de Datos
```bash
# Inicializar PostgreSQL con Docker
docker run --name formeta-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

# Ejecutar migraciones
npx prisma migrate dev

# Ejecutar seed
npx prisma db seed
```

## 🧪 Pruebas

### Credenciales de Prueba
- **Admin**: admin@formeta.es / admin123
- **User**: user@formeta.es / user123

### Datos de Prueba
- **Contactos**: 4 contactos de ejemplo con diferentes servicios y prioridades
- **Usuarios**: 2 usuarios (1 admin, 1 user normal)

## 📝 Próximas Mejoras

### Funcionalidades Pendientes
- [ ] Exportación de datos (CSV/Excel)
- [ ] Configuración del sistema
- [ ] Notificaciones en tiempo real
- [ ] Logs de auditoría
- [ ] Backup y restauración

### Optimizaciones
- [ ] Paginación del lado del servidor
- [ ] Cache de datos
- [ ] Búsqueda avanzada
- [ ] Filtros guardados

## 🆘 Solución de Problemas

### Problemas Comunes
1. **Token expirado**: Hacer logout y login nuevamente
2. **Permisos insuficientes**: Verificar que el usuario sea ADMIN
3. **Errores de conexión**: Verificar que ambos servidores estén corriendo
4. **Base de datos**: Verificar que PostgreSQL esté iniciado

### Logs de Debugging
- **Backend**: Logs en consola con nivel de detalle
- **Frontend**: Errores en consola del navegador
- **Red**: Verificar requests en herramientas de desarrollo

---

## ✅ Estado Actual
- **Backend**: ✅ Completamente funcional
- **Frontend**: ✅ Completamente funcional
- **Base de datos**: ✅ PostgreSQL + Prisma configurado
- **Autenticación**: ✅ JWT + roles implementado
- **Panel de administración**: ✅ Funcional con todas las características básicas

*Última actualización: 16 de julio de 2025*
