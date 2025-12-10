"use client";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

// Datos de la empresa para verificaciones Meta/Twilio
const empresaInfo = {
  nombreLegal: "FORTUMDIGITAL S.A.S. de C.V.",
  nombreComercial: "corebase7",
  direccion: "Retorno Aragón Moreno #21",
  colonia: "Col. Altares Franciscanos III Sección",
  ciudad: "Hermosillo, Sonora, México",
  telefono: "[PLACEHOLDER_TELEFONO]", // TODO: Reemplazar con número real
  email: "contacto@corebase7.com",
};

const footerLinks = {
  productos: [
    { label: "ConstructorFlow", href: "#" },
    { label: "PayFlow", href: "#" },
    { label: "ReceptIA", href: "#" },
    { label: "Personalizado", href: "#contacto" },
  ],
  recursos: [
    { label: "Documentación", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "/privacidad" },
    { label: "Términos", href: "/terminos" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="py-12 sm:py-16">
          {/* Main Footer */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Logo className="mb-4" />
              <p className="text-sm text-gray-500 max-w-xs">
                Plataforma de agentes IA conversacionales para empresas.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Productos */}
            <div>
              <h3 className="font-semibold mb-4 text-sm text-gray-900">Productos</h3>
              <ul className="space-y-3">
                {footerLinks.productos.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h3 className="font-semibold mb-4 text-sm text-gray-900">Recursos</h3>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-sm text-gray-900">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto - Info Legal para Meta/Twilio */}
            <div>
              <h3 className="font-semibold mb-4 text-sm text-gray-900">Contacto</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    {empresaInfo.direccion}<br />
                    {empresaInfo.colonia}<br />
                    {empresaInfo.ciudad}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href={`tel:${empresaInfo.telefono}`} className="hover:text-gray-900 transition-colors">
                    {empresaInfo.telefono}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href={`mailto:${empresaInfo.email}`} className="hover:text-gray-900 transition-colors">
                    {empresaInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom - Con nombre legal */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} {empresaInfo.nombreLegal}
              </p>
              <p className="text-xs text-gray-400">
                Operando como {empresaInfo.nombreComercial}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
