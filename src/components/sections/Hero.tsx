"use client";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Container className="flex items-center justify-between h-16">
        <Logo />
        <div className="hidden md:flex items-center gap-1">
          <a
            href="#productos"
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
          >
            Productos
          </a>
          <a
            href="#tecnologia"
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
          >
            Tecnología
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
          >
            Contacto
          </a>
        </div>
        <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6">
          Solicitar Demo
        </Button>
      </Container>
    </nav>
  );
}

export function Hero() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex flex-col justify-center pt-16">
        {/* Hero Content */}
        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <Badge variant="outline" className="mb-6 gap-2 px-4 py-1.5 bg-gray-100 border-gray-200 text-gray-700">
              Plataforma de Agentes IA
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              Infraestructura para construir productos de IA conversacional
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl">
              Chatbots, asistentes de voz, automatizaciones y agentes inteligentes.
              Multi-canal, multi-tenant, listo para producción.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 gap-2">
                Solicitar Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-gray-300 text-gray-700 hover:bg-gray-50">
                Ver Casos de Uso
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-col items-center gap-4">
              <p className="text-sm text-gray-400">Construido con tecnología de punta</p>
              <div className="flex items-center gap-6 text-gray-400 text-sm font-mono">
                <span>Next.js</span>
                <span>•</span>
                <span>Vercel AI SDK</span>
                <span>•</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Background gradient decoration - neutral gray */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gray-100/50 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  );
}
