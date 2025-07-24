<!-- src/routes/legal/terminos/+page.svelte -->
<script lang="ts">
	import LegalLayout from '$lib/components/LegalLayout.svelte';
</script>

<LegalLayout
	title="Términos de Servicio"
	lastUpdated="22 de enero de 2025"
	description="Condiciones generales que rigen la contratación y prestación de servicios de desarrollo, consultoría e IA empresarial."
>
	<h2>1. Información General</h2>
	
	<h3>1.1. Datos del prestador</h3>
	<ul>
		<li><strong>Razón social:</strong> Formeta Labs S.L.</li>
		<li><strong>NIF:</strong> B-12345678</li>
		<li><strong>Domicilio social:</strong> [Dirección completa]</li>
		<li><strong>Teléfono:</strong> +34 XXX XXX XXX</li>
		<li><strong>Email:</strong> <a href="mailto:info@formeta-labs.com">info@formeta-labs.com</a></li>
		<li><strong>Registro Mercantil:</strong> [Datos del registro]</li>
		<li><strong>Actividad:</strong> Desarrollo de software, consultoría tecnológica e IA empresarial</li>
	</ul>

	<h3>1.2. Objeto</h3>
	<p>Estos Términos de Servicio regulan las condiciones generales de contratación de los servicios ofrecidos por Formeta Labs S.L., incluyendo:</p>
	<ul>
		<li>Desarrollo de software personalizado</li>
		<li>Implementación de soluciones de IA Local (RAG + MCP)</li>
		<li>Cumplimiento VeriFactu 2025</li>
		<li>Automatización de procesos empresariales</li>
		<li>Consultoría tecnológica y auditoría digital</li>
		<li>Desarrollo web avanzado</li>
	</ul>

	<h2>2. Servicios Ofrecidos</h2>
	
	<h3>2.1. Desarrollo de Software</h3>
	<ul>
		<li><strong>Aplicaciones web:</strong> SvelteKit, React, Angular, Vue.js</li>
		<li><strong>APIs y backends:</strong> Node.js, Python, FastAPI, bases de datos</li>
		<li><strong>Aplicaciones móviles:</strong> Desarrollo híbrido y nativo</li>
		<li><strong>Integración de sistemas:</strong> APIs, webhooks, microservicios</li>
	</ul>

	<h3>2.2. IA Empresarial Local</h3>
	<ul>
		<li><strong>RAG (Retrieval-Augmented Generation):</strong> Sistemas de IA con documentos propios</li>
		<li><strong>MCP (Model Context Protocol):</strong> Integración avanzada de modelos</li>
		<li><strong>Infraestructura local:</strong> Sin dependencias externas, datos 100% privados</li>
		<li><strong>Personalización:</strong> Adaptación a casos de uso específicos</li>
	</ul>

	<h3>2.3. VeriFactu Compliance</h3>
	<ul>
		<li><strong>Implementación 2025:</strong> Cumplimiento normativa española</li>
		<li><strong>Integración ERP:</strong> Conexión con sistemas existentes</li>
		<li><strong>Auditoría:</strong> Verificación de cumplimiento</li>
		<li><strong>Soporte continuo:</strong> Mantenimiento y actualizaciones</li>
	</ul>

	<h2>3. Condiciones de Contratación</h2>
	
	<h3>3.1. Proceso de contratación</h3>
	<ol>
		<li><strong>Consulta inicial:</strong> Análisis de necesidades sin coste</li>
		<li><strong>Propuesta técnica:</strong> Documento detallado con alcance y pricing</li>
		<li><strong>Aceptación:</strong> Firma digital de la propuesta</li>
		<li><strong>Desarrollo:</strong> Ejecución según cronograma acordado</li>
		<li><strong>Entrega:</strong> Despliegue y documentación completa</li>
	</ol>

	<h3>3.2. Presupuestos</h3>
	<ul>
		<li><strong>Validez:</strong> 30 días naturales desde emisión</li>
		<li><strong>Modificaciones:</strong> Cambios de alcance requieren nueva propuesta</li>
		<li><strong>Precios:</strong> Incluyen IVA (21%) salvo indicación contraria</li>
		<li><strong>Divisa:</strong> Euros (€)</li>
	</ul>

	<h2>4. Precios y Condiciones de Pago</h2>
	
	<h3>4.1. Estructura de precios</h3>
	<ul>
		<li><strong>Consultoría:</strong> 150€-250€/hora según complejidad</li>
		<li><strong>Desarrollo:</strong> Proyectos desde 5.000€ (tarifa fija)</li>
		<li><strong>IA Local:</strong> Desde 15.000€ implementación completa</li>
		<li><strong>VeriFactu:</strong> Desde 3.000€ implementación básica</li>
		<li><strong>Mantenimiento:</strong> 15-25% del coste inicial/año</li>
	</ul>

	<h3>4.2. Modalidades de pago</h3>
	<ul>
		<li><strong>Proyectos &lt; 10.000€:</strong> 50% inicio + 50% entrega</li>
		<li><strong>Proyectos &gt; 10.000€:</strong> 30% inicio + 40% hitos + 30% entrega</li>
		<li><strong>Consultoría:</strong> Mensual, primeros 10 días del mes siguiente</li>
		<li><strong>Mantenimiento:</strong> Pago anual anticipado</li>
	</ul>

	<h3>4.3. Formas de pago</h3>
	<ul>
		<li>Transferencia bancaria</li>
		<li>Tarjeta de crédito/débito (recargo 2%)</li>
		<li>Financiación para proyectos > 25.000€ (consultar condiciones)</li>
	</ul>

	<h2>5. Plazos de Ejecución</h2>
	
	<h3>5.1. Estimaciones típicas</h3>
	<ul>
		<li><strong>Web corporativa:</strong> 3-6 semanas</li>
		<li><strong>Aplicación web:</strong> 2-6 meses</li>
		<li><strong>IA Local RAG:</strong> 4-12 semanas</li>
		<li><strong>VeriFactu compliance:</strong> 2-8 semanas</li>
		<li><strong>Automatización:</strong> 2-6 semanas</li>
	</ul>

	<h3>5.2. Factores que afectan plazos</h3>
	<ul>
		<li>Complejidad técnica del proyecto</li>
		<li>Disponibilidad de información/recursos del cliente</li>
		<li>Cambios de alcance durante el desarrollo</li>
		<li>Integraciones con sistemas existentes</li>
		<li>Requisitos de testing y certificación</li>
	</ul>

	<h2>6. Obligaciones del Cliente</h2>
	
	<h3>6.1. Información y colaboración</h3>
	<ul>
		<li>Proporcionar información técnica necesaria en tiempo</li>
		<li>Facilitar acceso a sistemas/APIs cuando sea requerido</li>
		<li>Asignar personal técnico de contacto</li>
		<li>Revisar y aprobar entregables en plazos acordados</li>
		<li>Participar en reuniones de seguimiento</li>
	</ul>

	<h3>6.2. Infraestructura</h3>
	<ul>
		<li>Proveer entornos de desarrollo/testing si aplicable</li>
		<li>Garantizar conectividad y accesos necesarios</li>
		<li>Mantener backup de datos críticos</li>
	</ul>

	<h2>7. Propiedad Intelectual</h2>
	
	<h3>7.1. Código y desarrollos</h3>
	<ul>
		<li><strong>Código personalizado:</strong> Propiedad del cliente tras pago completo</li>
		<li><strong>Frameworks/librerías:</strong> Mantienen sus licencias originales</li>
		<li><strong>Metodologías propias:</strong> Permanecen como propiedad de Formeta Labs</li>
		<li><strong>Código base reutilizable:</strong> Propiedad compartida con licencia específica</li>
	</ul>

	<h3>7.2. Modelos de IA y datos</h3>
	<ul>
		<li><strong>Modelos base:</strong> Licencias open source (Llama, Mistral, etc.)</li>
		<li><strong>Fine-tuning:</strong> Propiedad del cliente</li>
		<li><strong>Datos de entrenamiento:</strong> 100% del cliente, nunca compartidos</li>
		<li><strong>Arquitectura RAG:</strong> Propiedad del cliente</li>
	</ul>

	<h2>8. Garantías y Soporte</h2>
	
	<h3>8.1. Garantía técnica</h3>
	<ul>
		<li><strong>Duración:</strong> 12 meses desde entrega final</li>
		<li><strong>Cobertura:</strong> Errores de funcionamiento según especificaciones</li>
		<li><strong>Exclusiones:</strong> Cambios de terceros, mal uso, modificaciones no autorizadas</li>
		<li><strong>SLA:</strong> Respuesta &lt; 24h laborables, resolución según criticidad</li>
	</ul>

	<h3>8.2. Soporte técnico</h3>
	<ul>
		<li><strong>Primer mes:</strong> Soporte ilimitado incluido</li>
		<li><strong>Posteriores:</strong> Contrato de mantenimiento opcional</li>
		<li><strong>Emergencias:</strong> Servicio 24/7 disponible (tarifa especial)</li>
		<li><strong>Actualizaciones:</strong> Incluidas en contratos de mantenimiento</li>
	</ul>

	<h2>9. Limitación de Responsabilidad</h2>
	
	<h3>9.1. Límites generales</h3>
	<ul>
		<li>La responsabilidad máxima se limita al importe total del contrato</li>
		<li>No cobertura de daños indirectos, lucro cesante o pérdida de datos</li>
		<li>Responsabilidad proporcional en caso de causas concurrentes</li>
	</ul>

	<h3>9.2. Exclusiones específicas</h3>
	<ul>
		<li>Fallos debidos a modificaciones no autorizadas</li>
		<li>Incompatibilidades con actualizaciones de terceros</li>
		<li>Problemas derivados de infraestructura del cliente</li>
		<li>Pérdidas por interrupciones de servicio planificadas</li>
	</ul>

	<h2>10. Protección de Datos</h2>
	
	<p>El tratamiento de datos personales se rige por nuestra <a href="/legal/privacidad">Política de Privacidad</a> y el <a href="/legal/gdpr">Cumplimiento GDPR</a>.</p>

	<h3>10.1. Compromisos específicos</h3>
	<ul>
		<li><strong>Confidencialidad:</strong> Tratamiento confidencial de toda información</li>
		<li><strong>Seguridad:</strong> Medidas técnicas y organizativas adecuadas</li>
		<li><strong>Minimización:</strong> Solo procesamos datos necesarios</li>
		<li><strong>Transparencia:</strong> Información clara sobre tratamientos</li>
	</ul>

	<h2>11. Confidencialidad</h2>
	
	<ul>
		<li>Información del cliente se trata como confidencial por defecto</li>
		<li>NDA específico disponible para proyectos sensibles</li>
		<li>Personal formado en confidencialidad y protección de datos</li>
		<li>Acceso restringido según principio "need to know"</li>
		<li>Conservación según períodos legales, eliminación posterior</li>
	</ul>

	<h2>12. Modificaciones y Actualizaciones</h2>
	
	<h3>12.1. Modificaciones del servicio</h3>
	<ul>
		<li>Cambios menores: notificación 30 días antes</li>
		<li>Cambios significativos: aceptación expresa requerida</li>
		<li>Mejoras incluidas sin coste adicional</li>
	</ul>

	<h3>12.2. Actualizaciones de términos</h3>
	<ul>
		<li>Notificación por email y web</li>
		<li>Período de adaptación de 30 días</li>
		<li>Derecho a resolver contrato si no acepta cambios</li>
	</ul>

	<h2>13. Resolución de Contratos</h2>
	
	<h3>13.1. Resolución por el cliente</h3>
	<ul>
		<li><strong>Proyectos en curso:</strong> Pago proporcional del trabajo realizado</li>
		<li><strong>Plazo de preaviso:</strong> 30 días para servicios recurrentes</li>
		<li><strong>Entrega:</strong> Todo trabajo completado hasta la fecha</li>
	</ul>

	<h3>13.2. Resolución por Formeta Labs</h3>
	<ul>
		<li>Incumplimiento grave de obligaciones de pago</li>
		<li>Falta de colaboración que impida la ejecución</li>
		<li>Uso indebido de servicios o información</li>
	</ul>

	<h2>14. Legislación Aplicable</h2>
	
	<p>Estos Términos se rigen por la legislación española, específicamente:</p>
	<ul>
		<li>Código Civil español</li>
		<li>Ley General para la Defensa de Consumidores y Usuarios</li>
		<li>Ley de Servicios de la Sociedad de la Información</li>
		<li>Reglamento General de Protección de Datos (RGPD)</li>
		<li>Ley Orgánica de Protección de Datos (LOPDGDD)</li>
	</ul>

	<h2>15. Resolución de Disputas</h2>
	
	<h3>15.1. Mediación</h3>
	<p>Intentaremos resolver cualquier disputa mediante mediación antes de recurrir a vías judiciales.</p>

	<h3>15.2. Jurisdicción</h3>
	<ul>
		<li><strong>Consumidores:</strong> Tribunales del domicilio del consumidor</li>
		<li><strong>Empresas:</strong> Tribunales de [Ciudad sede social]</li>
		<li><strong>Arbitraje:</strong> Disponible de mutuo acuerdo</li>
	</ul>

	<h2>16. Contacto</h2>
	
	<p>Para consultas sobre estos Términos de Servicio:</p>
	
	<div style="background: #f8fafc; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; margin: 1.5rem 0;">
		<p><strong>Formeta Labs S.L.</strong></p>
		<p>📧 Email: <a href="mailto:info@formeta-labs.com">info@formeta-labs.com</a></p>
		<p>⚖️ Legal: <a href="mailto:legal@formeta-labs.com">legal@formeta-labs.com</a></p>
		<p>📞 Teléfono: +34 XXX XXX XXX</p>
		<p>🏢 Dirección: [Dirección completa]</p>
		<p>🕒 Horario: L-V 9:00-18:00 CET</p>
	</div>

	<p><em>Estos Términos de Servicio constituyen el acuerdo completo entre las partes y prevalecen sobre cualquier comunicación previa. En caso de conflicto entre estos términos generales y condiciones específicas de un proyecto, prevalecerán las condiciones específicas.</em></p>
</LegalLayout>