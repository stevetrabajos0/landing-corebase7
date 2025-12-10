import { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos de Servicio | corebase7",
  description: "Términos y condiciones de uso de los servicios de FORTUMDIGITAL S.A.S. de C.V.",
};

const empresaInfo = {
  nombreLegal: "FORTUMDIGITAL S.A.S. de C.V.",
  nombreComercial: "corebase7",
  direccion: "Retorno Aragón Moreno #21, Col. Altares Franciscanos III Sección, Hermosillo, Sonora, México",
  email: "contacto@corebase7.com",
  jurisdiccion: "Hermosillo, Sonora, México",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          {/* Header */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Términos de Servicio
          </h1>
          <p className="text-gray-500 mb-8">
            Última actualización: {new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-600">
                Al acceder y utilizar el sitio web de <strong>{empresaInfo.nombreComercial}</strong> (operado por {empresaInfo.nombreLegal}),
                usted acepta cumplir con estos términos de servicio. Si no está de acuerdo con alguno de estos términos,
                le recomendamos no utilizar nuestro sitio web ni nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Descripción del Servicio</h2>
              <p className="text-gray-600 mb-4">
                {empresaInfo.nombreComercial} proporciona una plataforma de infraestructura para la creación
                de agentes de inteligencia artificial conversacionales. Nuestros servicios incluyen:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Desarrollo de chatbots y asistentes virtuales</li>
                <li>Integración con múltiples canales de comunicación (WhatsApp, voz, web)</li>
                <li>Soluciones de CRM con inteligencia artificial</li>
                <li>Automatización de procesos de comunicación empresarial</li>
                <li>Consultoría y desarrollo de soluciones personalizadas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Uso Aceptable</h2>
              <p className="text-gray-600 mb-4">
                Al utilizar nuestros servicios, usted se compromete a:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>No utilizar los servicios para fines ilegales o no autorizados</li>
                <li>No intentar acceder de manera no autorizada a nuestros sistemas</li>
                <li>No enviar spam o contenido malicioso a través de nuestras plataformas</li>
                <li>Proporcionar información veraz y actualizada</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Propiedad Intelectual</h2>
              <p className="text-gray-600 mb-4">
                Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos,
                logotipos, iconos, imágenes, código y software, es propiedad de {empresaInfo.nombreLegal}
                o de sus licenciantes y está protegido por las leyes de propiedad intelectual.
              </p>
              <p className="text-gray-600">
                Queda prohibida la reproducción, distribución o modificación de cualquier contenido
                sin autorización previa por escrito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Confidencialidad</h2>
              <p className="text-gray-600">
                Toda información compartida durante consultas, demostraciones o el uso de nuestros servicios
                será tratada como confidencial. Nos comprometemos a no divulgar información de nuestros
                clientes a terceros sin su consentimiento expreso, excepto cuando la ley lo requiera.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
              <p className="text-gray-600 mb-4">
                En la máxima medida permitida por la ley aplicable:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Nuestros servicios se proporcionan &quot;tal cual&quot; sin garantías de ningún tipo,
                  ya sean expresas o implícitas.
                </li>
                <li>
                  No seremos responsables por daños indirectos, incidentales, especiales o consecuentes
                  que resulten del uso o la imposibilidad de uso de nuestros servicios.
                </li>
                <li>
                  Nuestra responsabilidad total no excederá el monto pagado por usted por los servicios
                  durante los 12 meses anteriores al reclamo.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Disponibilidad del Servicio</h2>
              <p className="text-gray-600">
                Nos esforzamos por mantener nuestros servicios disponibles las 24 horas del día, los 7 días de la semana.
                Sin embargo, no garantizamos que el servicio será ininterrumpido o libre de errores.
                Nos reservamos el derecho de suspender temporalmente el servicio para mantenimiento o actualizaciones.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Modificaciones</h2>
              <p className="text-gray-600">
                Nos reservamos el derecho de modificar estos términos de servicio en cualquier momento.
                Los cambios entrarán en vigor inmediatamente después de su publicación en este sitio.
                Su uso continuado de nuestros servicios después de cualquier modificación constituye
                su aceptación de los nuevos términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Terminación</h2>
              <p className="text-gray-600">
                Podemos suspender o terminar su acceso a nuestros servicios en cualquier momento,
                sin previo aviso, si consideramos que ha violado estos términos de servicio
                o si su conducta puede dañar nuestra reputación o la de otros usuarios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Ley Aplicable y Jurisdicción</h2>
              <p className="text-gray-600">
                Estos términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos.
                Cualquier disputa relacionada con estos términos será sometida a la jurisdicción exclusiva
                de los tribunales competentes de <strong>{empresaInfo.jurisdiccion}</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Contacto</h2>
              <p className="text-gray-600">
                Para cualquier pregunta sobre estos términos de servicio, puede contactarnos en:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-600">
                <p><strong>{empresaInfo.nombreLegal}</strong></p>
                <p>{empresaInfo.direccion}</p>
                <p>Email: <a href={`mailto:${empresaInfo.email}`} className="text-gray-900 underline">{empresaInfo.email}</a></p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
