import { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | corebase7",
  description: "Política de privacidad y protección de datos personales de FORTUMDIGITAL S.A.S. de C.V.",
};

const empresaInfo = {
  nombreLegal: "FORTUMDIGITAL S.A.S. de C.V.",
  nombreComercial: "corebase7",
  direccion: "Retorno Aragón Moreno #21, Col. Altares Franciscanos III Sección, Hermosillo, Sonora, México",
  email: "contacto@corebase7.com",
};

export default function PrivacidadPage() {
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
            Política de Privacidad
          </h1>
          <p className="text-gray-500 mb-8">
            Última actualización: {new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Responsable del Tratamiento</h2>
              <p className="text-gray-600 mb-4">
                <strong>{empresaInfo.nombreLegal}</strong>, operando comercialmente como <strong>{empresaInfo.nombreComercial}</strong>,
                con domicilio en {empresaInfo.direccion}, es responsable del tratamiento de sus datos personales.
              </p>
              <p className="text-gray-600">
                Para cualquier duda o solicitud relacionada con sus datos personales, puede contactarnos en: {" "}
                <a href={`mailto:${empresaInfo.email}`} className="text-gray-900 underline">
                  {empresaInfo.email}
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Datos que Recopilamos</h2>
              <p className="text-gray-600 mb-4">
                Recopilamos los siguientes datos personales cuando usted nos contacta a través de nuestro formulario:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Nombre de la empresa (opcional)</li>
                <li>Mensaje o descripción de su proyecto</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Finalidad del Tratamiento</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos sus datos personales para las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Responder a sus consultas y solicitudes de información</li>
                <li>Programar demostraciones de nuestros productos</li>
                <li>Enviar información relevante sobre nuestros servicios (solo si lo solicita)</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Base Legal</h2>
              <p className="text-gray-600">
                El tratamiento de sus datos se realiza con base en su consentimiento expreso,
                otorgado al enviar el formulario de contacto. Usted puede retirar su consentimiento
                en cualquier momento contactándonos a {empresaInfo.email}.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Compartición de Datos</h2>
              <p className="text-gray-600">
                No vendemos, alquilamos ni compartimos sus datos personales con terceros,
                excepto cuando sea necesario para prestar nuestros servicios o cuando la ley lo requiera.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Derechos ARCO</h2>
              <p className="text-gray-600 mb-4">
                De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares,
                usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Acceder</strong> a sus datos personales que tenemos almacenados</li>
                <li><strong>Rectificar</strong> sus datos si son inexactos o están incompletos</li>
                <li><strong>Cancelar</strong> sus datos cuando considere que no están siendo utilizados conforme a los principios y deberes de la ley</li>
                <li><strong>Oponerse</strong> al tratamiento de sus datos para fines específicos</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Para ejercer cualquiera de estos derechos, envíe un correo electrónico a {" "}
                <a href={`mailto:${empresaInfo.email}`} className="text-gray-900 underline">
                  {empresaInfo.email}
                </a> con el asunto &quot;Derechos ARCO&quot;.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Seguridad de los Datos</h2>
              <p className="text-gray-600">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger
                sus datos personales contra acceso no autorizado, pérdida o destrucción.
                Nuestro sitio web utiliza cifrado SSL/TLS para proteger la transmisión de datos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Retención de Datos</h2>
              <p className="text-gray-600">
                Conservamos sus datos personales solo durante el tiempo necesario para cumplir
                con las finalidades descritas en este aviso, o según lo requiera la ley aplicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Cambios a esta Política</h2>
              <p className="text-gray-600">
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
                Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
              <p className="text-gray-600">
                Si tiene preguntas sobre esta política de privacidad o sobre el tratamiento de sus datos,
                puede contactarnos en:
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
