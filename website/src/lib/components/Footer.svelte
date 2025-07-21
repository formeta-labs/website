<script lang="ts">
  import { publicNavigation } from '$lib/stores/navigation';
</script>

<footer class="bg-formeta-text text-white">
  <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
    <!-- Layout principal: Logo y descripción a la izquierda -->
    <div class="flex justify-start items-center mb-3">
      <div class="flex items-center space-x-3">
        <img src="/loofo-formeta.svg" alt="Logo Formeta" class="w-5 h-5" />
        <div>
          <span class="text-base font-bold text-white">Formeta</span>
          <p class="text-gray-300 text-xs">
            Soluciones de gestión empresarial y digitalización
          </p>
        </div>
      </div>
    </div>
    
    <!-- Tercera fila: Footer inferior -->
    <div class="border-t border-gray-700 pt-2">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-2">
        <p class="text-xs text-gray-400">
          &copy; 2025 Formeta. Todos los derechos reservados.
        </p>
        <div class="flex items-center space-x-3 text-xs text-gray-400">
          <a href="/privacidad" class="hover:text-white transition-colors">Privacidad</a>
          <a href="/terminos" class="hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </div>
  </div>
</footer>
