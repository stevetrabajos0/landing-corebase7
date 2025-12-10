"use client";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

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
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} corebase7. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
