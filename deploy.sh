#!/bin/bash

# Script de despliegue para Dokploy - Formeta Labs Website
# Autor: Formeta Labs
# Versión: 1.0.0

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_message() {
    echo -e "${BLUE}[FORMETA]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Banner
echo -e "${BLUE}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                    FORMETA LABS WEBSITE                     ║"
echo "║                  Script de Despliegue Dokploy               ║"
echo "║                        Versión 1.0.0                        ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    print_error "No se encontró package.json. Asegúrate de estar en el directorio raíz del proyecto."
    exit 1
fi

print_message "Iniciando proceso de despliegue..."

# Verificar Docker
if ! command -v docker &> /dev/null; then
    print_error "Docker no está instalado. Por favor, instala Docker primero."
    exit 1
fi

print_success "Docker encontrado"

# Verificar archivos necesarios
required_files=("Dockerfile" "docker-compose.yml" "dokploy.config.yml")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        print_error "Archivo requerido no encontrado: $file"
        exit 1
    fi
done

print_success "Todos los archivos requeridos están presentes"

# Verificar variables de entorno
print_message "Verificando variables de entorno..."

if [ -f ".env" ]; then
    source .env
    print_success "Archivo .env cargado"
else
    print_warning "No se encontró archivo .env. Usando valores por defecto."
fi

# Verificar variable crítica
if [ -z "$PUBLIC_CLERK_PUBLISHABLE_KEY" ]; then
    print_warning "PUBLIC_CLERK_PUBLISHABLE_KEY no está configurada."
    print_warning "Asegúrate de configurarla en Dokploy antes del despliegue."
fi

# Construir imagen localmente para verificar
print_message "Construyendo imagen Docker localmente para verificación..."

if docker build -t formeta-website-test . > /dev/null 2>&1; then
    print_success "Imagen construida exitosamente"
    docker rmi formeta-website-test > /dev/null 2>&1
else
    print_error "Error al construir la imagen Docker"
    exit 1
fi

# Verificar docker-compose
print_message "Validando docker-compose.yml..."

if docker-compose config > /dev/null 2>&1; then
    print_success "docker-compose.yml es válido"
else
    print_error "Error en docker-compose.yml"
    exit 1
fi

# Generar resumen de configuración
print_message "Generando resumen de configuración..."

cat << EOF

${GREEN}╔══════════════════════════════════════════════════════════════╗
║                    RESUMEN DE CONFIGURACIÓN                 ║
╚══════════════════════════════════════════════════════════════╝${NC}

${BLUE}Proyecto:${NC} Formeta Labs Website
${BLUE}Versión:${NC} $(grep '"version"' package.json | cut -d'"' -f4)
${BLUE}Puerto:${NC} 3000
${BLUE}Imagen:${NC} formeta-website:latest

${BLUE}Variables de entorno configuradas:${NC}
- PUBLIC_API_URL: ${PUBLIC_API_URL:-https://api.formeta.es}
- PUBLIC_APP_NAME: ${PUBLIC_APP_NAME:-Formeta Labs}
- PUBLIC_APP_VERSION: ${PUBLIC_APP_VERSION:-2.0.0}
- PUBLIC_CLERK_PUBLISHABLE_KEY: ${PUBLIC_CLERK_PUBLISHABLE_KEY:+[CONFIGURADA]}${PUBLIC_CLERK_PUBLISHABLE_KEY:-[NO CONFIGURADA]}

${BLUE}Archivos de despliegue:${NC}
✓ Dockerfile
✓ docker-compose.yml
✓ dokploy.config.yml
✓ .dockerignore
✓ DOKPLOY-DEPLOYMENT.md

EOF

# Instrucciones finales
cat << EOF
${GREEN}╔══════════════════════════════════════════════════════════════╗
║                    PRÓXIMOS PASOS                           ║
╚══════════════════════════════════════════════════════════════╝${NC}

${YELLOW}1.${NC} Sube el código a tu repositorio Git:
   ${BLUE}git add .${NC}
   ${BLUE}git commit -m "Configuración para Dokploy"${NC}
   ${BLUE}git push origin main${NC}

${YELLOW}2.${NC} En Dokploy:
   - Crea un nuevo proyecto
   - Selecciona "Docker Compose"
   - Introduce la URL de tu repositorio
   - Configura las variables de entorno

${YELLOW}3.${NC} Variables de entorno requeridas en Dokploy:
   - PUBLIC_API_URL
   - PUBLIC_APP_NAME
   - PUBLIC_APP_VERSION
   - PUBLIC_CLERK_PUBLISHABLE_KEY ${RED}(OBLIGATORIA)${NC}

${YELLOW}4.${NC} Configuración de red:
   - Puerto: 3000
   - Dominio: tu-dominio.com
   - SSL: Habilitado

${GREEN}¡El proyecto está listo para desplegarse en Dokploy!${NC}

Para más información, consulta: ${BLUE}DOKPLOY-DEPLOYMENT.md${NC}

EOF

print_success "Script de preparación completado exitosamente"
print_message "¡Formeta Labs Website está listo para Dokploy!"