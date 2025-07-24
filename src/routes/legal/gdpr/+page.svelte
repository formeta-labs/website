<!-- src/routes/legal/gdpr/+page.svelte -->
<script lang="ts">
	import LegalLayout from '$lib/components/LegalLayout.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<LegalLayout
	title="Cumplimiento GDPR"
	lastUpdated="22 de enero de 2025"
	description="Información detallada sobre nuestro cumplimiento del Reglamento General de Protección de Datos y medidas de seguridad implementadas."
>
	<h2>1. Nuestro Compromiso con el GDPR</h2>
	
	<p>Formeta Labs S.L. está plenamente comprometida con el cumplimiento del <strong>Reglamento General de Protección de Datos (GDPR)</strong> de la Unión Europea y la <strong>Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</strong> de España.</p>

	<div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 2rem; border-radius: 1rem; margin: 2rem 0;">
		<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
			<div style="background: rgba(255, 255, 255, 0.2); padding: 0.5rem; border-radius: 0.5rem;">
				<Icon name="shield" size={24} className="text-white" />
			</div>
			<h3 style="margin: 0; font-size: 1.25rem; font-weight: 600;">Certificación GDPR</h3>
		</div>
		<p style="margin: 0;">Implementamos las mejores prácticas de protección de datos desde el diseño (Privacy by Design) y por defecto (Privacy by Default).</p>
	</div>

	<h2>2. Principios Fundamentales</h2>
	
	<p>Aplicamos todos los principios del GDPR en nuestras operaciones:</p>

	<h3>2.1. Licitud, Lealtad y Transparencia</h3>
	<ul>
		<li>Procesamos datos solo con base legal válida</li>
		<li>Informamos claramente sobre nuestros tratamientos</li>
		<li>No utilizamos datos para fines incompatibles</li>
	</ul>

	<h3>2.2. Limitación de la Finalidad</h3>
	<ul>
		<li>Datos recopilados para fines específicos y legítimos</li>
		<li>No procesamiento posterior incompatible</li>
		<li>Documentación clara de todas las finalidades</li>
	</ul>

	<h3>2.3. Minimización de Datos</h3>
	<ul>
		<li>Recopilamos solo datos necesarios</li>
		<li>No almacenamiento de datos innecesarios</li>
		<li>Revisión periódica de la necesidad de datos</li>
	</ul>

	<h3>2.4. Exactitud</h3>
	<ul>
		<li>Mantenimiento de datos actualizados</li>
		<li>Corrección inmediata de inexactitudes</li>
		<li>Verificación periódica de la calidad</li>
	</ul>

	<h3>2.5. Limitación del Plazo de Conservación</h3>
	<ul>
		<li>Conservación por tiempo estrictamente necesario</li>
		<li>Eliminación automática según políticas</li>
		<li>Criterios claros de conservación y supresión</li>
	</ul>

	<h3>2.6. Integridad y Confidencialidad</h3>
	<ul>
		<li>Medidas técnicas robustas de seguridad</li>
		<li>Protección contra accesos no autorizados</li>
		<li>Cifrado de datos sensibles</li>
	</ul>

	<h2>3. Medidas Técnicas y Organizativas</h2>
	
	<h3>3.1. Seguridad Técnica</h3>
	
	<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
		<div style="background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 0.75rem; padding: 1.5rem;">
			<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
				<Icon name="lock" size={20} className="text-blue-600" />
				<strong style="color: #0ea5e9;">Cifrado</strong>
			</div>
			<ul style="margin: 0; padding-left: 1rem; list-style-type: disc;">
				<li>HTTPS/TLS 1.3 para todas las conexiones</li>
				<li>Cifrado AES-256 para datos en reposo</li>
				<li>Certificados SSL/TLS validados</li>
			</ul>
		</div>

		<div style="background: #f0fdf4; border: 1px solid #22c55e; border-radius: 0.75rem; padding: 1.5rem;">
			<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
				<Icon name="shield" size={20} className="text-green-600" />
				<strong style="color: #22c55e;">Control de Acceso</strong>
			</div>
			<ul style="margin: 0; padding-left: 1rem; list-style-type: disc;">
				<li>Autenticación multifactor (MFA)</li>
				<li>Principio de menor privilegio</li>
				<li>Revisión periódica de permisos</li>
			</ul>
		</div>

		<div style="background: #fefce8; border: 1px solid #eab308; border-radius: 0.75rem; padding: 1.5rem;">
			<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
				<Icon name="server" size={20} className="text-yellow-600" />
				<strong style="color: #eab308;">Infraestructura</strong>
			</div>
			<ul style="margin: 0; padding-left: 1rem; list-style-type: disc;">
				<li>Servidores en centros de datos certificados</li>
				<li>Backup automático y cifrado</li>
				<li>Monitorización 24/7</li>
			</ul>
		</div>

		<div style="background: #fdf2f8; border: 1px solid #ec4899; border-radius: 0.75rem; padding: 1.5rem;">
			<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
				<Icon name="eye" size={20} className="text-pink-600" />
				<strong style="color: #ec4899;">Monitorización</strong>
			</div>
			<ul style="margin: 0; padding-left: 1rem; list-style-type: disc;">
				<li>Logs de auditoría detallados</li>
				<li>Detección de anomalías</li>
				<li>Alertas automáticas de seguridad</li>
			</ul>
		</div>
	</div>

	<h3>3.2. Medidas Organizativas</h3>
	<ul>
		<li><strong>Política de Protección de Datos:</strong> Documentada y actualizada regularmente</li>
		<li><strong>Formación continua:</strong> Personal capacitado en GDPR</li>
		<li><strong>Delegado de Protección de Datos (DPO):</strong> Designado y operativo</li>
		<li><strong>Registro de actividades:</strong> Documentación completa de tratamientos</li>
		<li><strong>Evaluación de impacto:</strong> EIPD para tratamientos de alto riesgo</li>
	</ul>

	<h2>4. Derechos de los Interesados</h2>
	
	<p>Garantizamos el ejercicio efectivo de todos los derechos GDPR:</p>

	<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
		<div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem;">
			<div style="display: flex; align-items-center; gap: 0.5rem; margin-bottom: 0.75rem;">
				<Icon name="search" size={18} className="text-blue-600" />
				<strong style="color: #1f2937;">Acceso</strong>
			</div>
			<p style="margin: 0; font-size: 0.875rem; color: #6b7280;">Conocer qué datos personales tratamos sobre ti</p>
		</div>

		<div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem;">
			<div style="display: flex; align-items-center; gap: 0.5rem; margin-bottom: 0.75rem;">
				<Icon name="edit" size={18} className="text-green-600" />
				<strong style="color: #1f2937;">Rectificación</strong>
			</div>
			<p style="margin: 0; font-size: 0.875rem; color: #6b7280;">Corregir datos inexactos o incompletos</p>
		</div>

		<div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem;">
			<div style="display: flex; align-items-center; gap: 0.5rem; margin-bottom: 0.75rem;">
				<Icon name="trash" size={18} className="text-red-600" />
				<strong style="color: #1f2937;">Supresión</strong>
			</div>
			<p style="margin: 0; font-size: 0.875rem; color: #6b7280;">Solicitar eliminación de tus datos ("derecho al olvido")</p>
		</div>

		<div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem;">
			<div style="display: flex; align-items-center; gap: 0.5rem; margin-bottom: 0.75rem;">
				<Icon name="shield" size={18} className="text-purple-600" />
				<strong style="color: #1f2937;">Limitación</strong>
			</div>
			<p style="margin: 0; font-size: 0.875rem; color: #6b7280;">Restringir el tratamiento en determinadas circunstancias</p>
		</div>

		<div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem;">
			<div style="display: flex; align-items-center; gap: 0.5rem; margin-bottom: 0.75rem;">
				<Icon name="download" size={18} className="text-indigo-600" />
				<strong style="color: #1f2937;">Portabilidad</strong>
			</div>
			<p style="margin: 0; font-size: 0.875rem; color: #6b7280;">Recibir tus datos en formato estructurado</p>
		</div>

		<div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem;">
			<div style="display: flex; align-items-center; gap: 0.5rem; margin-bottom: 0.75rem;">
				<Icon name="x-circle" size={18} className="text-orange-600" />
				<strong style="color: #1f2937;">Oposición</strong>
			</div>
			<p style="margin: 0; font-size: 0.875rem; color: #6b7280;">Oponerte al tratamiento por interés legítimo</p>
		</div>
	</div>

	<h3>4.1. Proceso de Ejercicio de Derechos</h3>
	<ol>
		<li><strong>Solicitud:</strong> Email a <a href="mailto:dpo@formeta-labs.com">dpo@formeta-labs.com</a> con identificación válida</li>
		<li><strong>Verificación:</strong> Confirmamos tu identidad para proteger la privacidad</li>
		<li><strong>Procesamiento:</strong> Evaluamos la solicitud dentro de los plazos legales</li>
		<li><strong>Respuesta:</strong> Máximo 1 mes (extensible a 3 en casos complejos)</li>
		<li><strong>Gratuidad:</strong> Primera solicitud siempre gratuita</li>
	</ol>

	<h2>5. Bases Legales del Tratamiento</h2>
	
	<p>Todos nuestros tratamientos se basan en al menos una de las siguientes bases legales:</p>

	<table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; border: 1px solid #e5e7eb; border-radius: 0.75rem; overflow: hidden;">
		<thead>
			<tr style="background: #f9fafb;">
				<th style="padding: 1rem; text-align: left; font-weight: 600; color: #1f2937; border-bottom: 1px solid #e5e7eb;">Base Legal</th>
				<th style="padding: 1rem; text-align: left; font-weight: 600; color: #1f2937; border-bottom: 1px solid #e5e7eb;">Aplicación</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;"><strong>Consentimiento</strong></td>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;">Newsletter, cookies no esenciales, marketing directo</td>
			</tr>
			<tr>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;"><strong>Ejecución contractual</strong></td>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;">Prestación de servicios contratados</td>
			</tr>
			<tr>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;"><strong>Interés legítimo</strong></td>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;">Análisis web, mejora de servicios, seguridad</td>
			</tr>
			<tr>
				<td style="padding: 1rem;"><strong>Cumplimiento legal</strong></td>
				<td style="padding: 1rem;">Obligaciones fiscales, contables y regulatorias</td>
			</tr>
		</tbody>
	</table>

	<h2>6. Transferencias Internacionales</h2>
	
	<h3>6.1. Política general</h3>
	<ul>
		<li><strong>Preferencia UE:</strong> Priorizamos proveedores dentro del Espacio Económico Europeo</li>
		<li><strong>Decisiones de adecuación:</strong> Solo países con nivel adecuado de protección</li>
		<li><strong>Garantías adicionales:</strong> Cláusulas contractuales tipo (SCC) cuando sea necesario</li>
	</ul>

	<h3>6.2. Proveedores actuales con transferencias</h3>
	<table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; border: 1px solid #e5e7eb; border-radius: 0.75rem; overflow: hidden;">
		<thead>
			<tr style="background: #f9fafb;">
				<th style="padding: 1rem; text-align: left; font-weight: 600; color: #1f2937; border-bottom: 1px solid #e5e7eb;">Proveedor</th>
				<th style="padding: 1rem; text-align: left; font-weight: 600; color: #1f2937; border-bottom: 1px solid #e5e7eb;">País</th>
				<th style="padding: 1rem; text-align: left; font-weight: 600; color: #1f2937; border-bottom: 1px solid #e5e7eb;">Garantías</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;">Hosting Principal</td>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;">🇪🇸 España</td>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;">Dentro UE - Sin transferencia</td>
			</tr>
			<tr>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;">Email Transaccional</td>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;">🇩🇪 Alemania</td>
				<td style="padding: 1rem; border-bottom: 1px solid #f3f4f6;">Dentro UE - Sin transferencia</td>
			</tr>
			<tr>
				<td style="padding: 1rem;">Backup</td>
				<td style="padding: 1rem;">🇫🇷 Francia</td>
				<td style="padding: 1rem;">Dentro UE - Sin transferencia</td>
			</tr>
		</tbody>
	</table>

	<h2>7. Violaciones de Datos</h2>
	
	<h3>7.1. Protocolo de respuesta</h3>
	<ol>
		<li><strong>Detección inmediata</strong> (&lt; 24h): Monitorización automatizada y alertas</li>
		<li><strong>Contención</strong> (&lt; 2h): Medidas inmediatas para limitar el impacto</li>
		<li><strong>Evaluación</strong> (&lt; 12h): Análisis del alcance y riesgo para los interesados</li>
		<li><strong>Notificación AEPD</strong> (&lt; 72h): Si existe riesgo para derechos y libertades</li>
		<li><strong>Comunicación afectados</strong> (sin dilación): Si existe alto riesgo</li>
		<li><strong>Documentación completa</strong>: Registro detallado del incidente</li>
	</ol>

	<h3>7.2. Medidas preventivas</h3>
	<ul>
		<li>Sistemas de detección de intrusiones (IDS)</li>
		<li>Monitorización continua de anomalías</li>
		<li>Tests de penetración regulares</li>
		<li>Auditorías de seguridad trimestrales</li>
		<li>Plan de continuidad de negocio actualizado</li>
	</ul>

	<h2>8. Cookies y Tecnologías Similares</h2>
	
	<p>Gestionamos cookies según los más altos estándares de privacidad:</p>

	<h3>8.1. Clasificación de cookies</h3>
	<ul>
		<li><strong>Estrictamente necesarias:</strong> No requieren consentimiento</li>
		<li><strong>Funcionales:</strong> Mejoran la experiencia del usuario</li>
		<li><strong>Analíticas:</strong> Solo con consentimiento, datos anonimizados</li>
		<li><strong>Marketing:</strong> Solo con consentimiento explícito</li>
	</ul>

	<h3>8.2. Control usuario</h3>
	<ul>
		<li>Banner de cookies granular</li>
		<li>Centro de preferencias accesible</li>
		<li>Revocación de consentimiento simple</li>
		<li>Información clara sobre cada tipo</li>
	</ul>

	<h2>9. Evaluación de Impacto (EIPD)</h2>
	
	<p>Realizamos Evaluaciones de Impacto en Protección de Datos para:</p>
	<ul>
		<li>Nuevos proyectos que involucren datos personales</li>
		<li>Implementación de nuevas tecnologías</li>
		<li>Tratamientos de alto riesgo para derechos y libertades</li>
		<li>Cambios significativos en tratamientos existentes</li>
	</ul>

	<h3>9.1. Criterios de alto riesgo</h3>
	<ul>
		<li>Evaluación o puntuación, incluida la elaboración de perfiles</li>
		<li>Decisiones automatizadas con efectos jurídicos</li>
		<li>Observación sistemática de áreas públicas</li>
		<li>Datos sensibles o de naturaleza altamente personal</li>
		<li>Tratamiento a gran escala</li>
	</ul>

	<h2>10. Formación y Concienciación</h2>
	
	<h3>10.1. Programa de formación</h3>
	<ul>
		<li><strong>Onboarding:</strong> Formación GDPR obligatoria para nuevo personal</li>
		<li><strong>Actualización anual:</strong> Curso de reciclaje para todo el equipo</li>
		<li><strong>Formación específica:</strong> Según rol y responsabilidades</li>
		<li><strong>Simulacros:</strong> Ejercicios de respuesta a incidentes</li>
	</ul>

	<h3>10.2. Recursos disponibles</h3>
	<ul>
		<li>Manual de protección de datos interno</li>
		<li>Guías rápidas por área de trabajo</li>
		<li>Canal directo con el DPO</li>
		<li>Base de conocimiento actualizada</li>
	</ul>

	<h2>11. Auditorías y Certificaciones</h2>
	
	<h3>11.1. Auditorías internas</h3>
	<ul>
		<li><strong>Frecuencia:</strong> Trimestral para procesos críticos</li>
		<li><strong>Alcance:</strong> Todos los tratamientos de datos personales</li>
		<li><strong>Documentación:</strong> Informes detallados con plan de acción</li>
	</ul>

	<h3>11.2. Certificaciones objetivo</h3>
	<ul>
		<li>ISO 27001 (Gestión de Seguridad de la Información)</li>
		<li>Esquema Nacional de Seguridad (ENS) - Medio</li>
		<li>Certificación GDPR de tercera parte</li>
	</ul>

	<h2>12. Contacto y Consultas</h2>
	
	<div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 2rem; border-radius: 1rem; margin: 2rem 0;">
		<h3 style="color: white; margin-top: 0; display: flex; align-items: center; gap: 0.75rem;">
			<Icon name="mail" size={24} className="text-white" />
			Delegado de Protección de Datos (DPO)
		</h3>
		<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
			<div>
				<p style="margin-bottom: 0.5rem; font-weight: 600;">📧 Email Principal</p>
				<p style="margin: 0;"><a href="mailto:dpo@formeta-labs.com" style="color: #93c5fd;">dpo@formeta-labs.com</a></p>
			</div>
			<div>
				<p style="margin-bottom: 0.5rem; font-weight: 600;">⚖️ Consultas Legales</p>
				<p style="margin: 0;"><a href="mailto:legal@formeta-labs.com" style="color: #93c5fd;">legal@formeta-labs.com</a></p>
			</div>
			<div>
				<p style="margin-bottom: 0.5rem; font-weight: 600;">🚨 Incidentes Seguridad</p>
				<p style="margin: 0;"><a href="mailto:security@formeta-labs.com" style="color: #93c5fd;">security@formeta-labs.com</a></p>
			</div>
		</div>
		<div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
			<p style="margin: 0; font-size: 0.875rem; color: #cbd5e1;"><strong>Horario de atención:</strong> L-V 9:00-18:00 CET | <strong>Respuesta:</strong> &lt; 24h laborables | <strong>Emergencias:</strong> 24/7</p>
		</div>
	</div>

	<h2>13. Recursos Adicionales</h2>
	
	<h3>13.1. Enlaces útiles</h3>
	<ul>
		<li><strong>AEPD:</strong> <a href="https://www.aepd.es" target="_blank" rel="noopener">Agencia Española de Protección de Datos</a></li>
		<li><strong>EDPB:</strong> <a href="https://edpb.europa.eu" target="_blank" rel="noopener">European Data Protection Board</a></li>
		<li><strong>Normativa:</strong> <a href="https://eur-lex.europa.eu/eli/reg/2016/679" target="_blank" rel="noopener">Reglamento GDPR oficial</a></li>
		<li><strong>Guías AEPD:</strong> <a href="https://www.aepd.es/es/guias-y-herramientas" target="_blank" rel="noopener">Herramientas de cumplimiento</a></li>
	</ul>

	<h3>13.2. Documentos descargables</h3>
	<ul>
		<li><a href="/legal/docs/politica-privacidad.pdf" target="_blank">Política de Privacidad (PDF)</a></li>
		<li><a href="/legal/docs/registro-actividades.pdf" target="_blank">Registro de Actividades de Tratamiento</a></li>
		<li><a href="/legal/docs/modelo-ejercicio-derechos.pdf" target="_blank">Formulario de Ejercicio de Derechos</a></li>
	</ul>

	<p><em>Este documento se actualiza regularmente para reflejar cambios normativos y mejoras en nuestros procesos. La fecha de última modificación indica la versión más reciente.</em></p>
</LegalLayout>