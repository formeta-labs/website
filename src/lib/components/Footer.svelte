<script lang="ts">
  import { publicNavigation } from '$lib/stores/navigation';
</script>

<footer class="bg-formeta-text text-white">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <!-- Company info -->
      <div class="space-y-8 xl:col-span-1">
        <div class="flex items-center">
          <div class="w-10 h-10 bg-formeta-gradient rounded-lg flex items-center justify-center mr-3 shadow-lg">
            <span class="text-white font-bold text-xl">F</span>
          </div>
          <span class="text-xl font-bold text-formeta-gradient">Formeta</span>
        </div>
        <p class="text-gray-300 text-base leading-relaxed">
          Soluciones completas de gestión empresarial, digitalización y automatización para empresas modernas. Transformamos tu negocio con tecnología innovadora.
        </p>
        <div class="flex space-x-6">
          <a href="https://linkedin.com/company/formeta" class="text-gray-400 hover:text-formeta-secondary transition-colors duration-300">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com/formeta" class="text-gray-400 hover:text-formeta-secondary transition-colors duration-300">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="https://github.com/formeta" class="text-gray-400 hover:text-formeta-secondary transition-colors duration-300">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Navigation -->
      <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold text-formeta-secondary tracking-wider uppercase">
              Navegación
            </h3>
            <ul class="mt-4 space-y-4">
              {#each publicNavigation as item}
                <li>
                  <a href={item.href} class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                    {item.title}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-sm font-semibold text-formeta-secondary tracking-wider uppercase">
              Servicios
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="/servicios#desarrollo-web" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="/servicios#ia-automatizacion" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  IA y Automatización
                </a>
              </li>
              <li>
                <a href="/servicios#crm-gestion" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  CRM y Gestión
                </a>
              </li>
              <li>
                <a href="/servicios#verifactu" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  VeriFactu
                </a>
              </li>
              <li>
                <a href="/servicios#reservas" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Sistema de Reservas
                </a>
              </li>
              <li>
                <a href="/servicios#consultoria" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold text-formeta-secondary tracking-wider uppercase">
              Soporte
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="/contacto" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/soporte" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="/documentacion" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Documentación
                </a>
              </li>
              <li>
                <a href="/blog" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Blog Técnico
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-sm font-semibold text-formeta-secondary tracking-wider uppercase">
              Empresa
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="/sobre-nosotros" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/equipo" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Equipo
                </a>
              </li>
              <li>
                <a href="/carreras" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Carreras
                </a>
              </li>
              <li>
                <a href="/privacidad" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" class="text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-12 border-t border-gray-700 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-base text-gray-400">
          &copy; 2025 Formeta. Todos los derechos reservados.
        </p>
        <div class="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-gray-400">
          <span>📧 info@formeta.es</span>
          <span>📞 +34 900 000 000</span>
          <span>🌐 España</span>
        </div>
      </div>
    </div>
  </div>
</footer>
