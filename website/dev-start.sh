#!/bin/bash

# Script de desarrollo rápido para Formeta
echo "🚀 Iniciando desarrollo local de Formeta..."

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instálalo primero."
    exit 1
fi

# Verificar si npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado. Por favor instálalo primero."
    exit 1
fi

# Instalar dependencias si no están instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Limpiar cache si es necesario
if [ "$1" = "--clean" ]; then
    echo "🧹 Limpiando cache..."
    rm -rf .svelte-kit build node_modules/.vite
    npm install
fi

echo "🔥 Iniciando servidor de desarrollo..."
echo "📱 URL: http://localhost:5173"
echo "🔄 Hot reload activado - Los cambios se reflejan automáticamente"
echo "⏹️  Presiona Ctrl+C para detener"

# Iniciar servidor de desarrollo
npm run dev 