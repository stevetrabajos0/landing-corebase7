"use client";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col">
      {/* Navigation */}
      <nav className="py-4">
        <Container className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            <a href="#productos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Productos
            </a>
            <a href="#tecnologia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tecnología
            </a>
            <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>
          <Button size="sm">
            Solicitar Demo
          </Button>
        </Container>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <Container className="py-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <Badge variant="outline" className="mb-6 gap-2 px-4 py-1.5">
              <span className="text-primary">Nuevo</span>
              <span className="text-muted-foreground">Plataforma de Agentes IA</span>
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Agentes IA conversacionales{" "}
              <span className="text-muted-foreground">para tu negocio</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Construye chatbots inteligentes, asistentes de voz y automatizaciones con IA.
              Multi-canal, multi-tenant, listo para producción.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Solicitar Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                Ver Casos de Uso
              </Button>
            </div>

            {/* Social Proof */}
            <p className="mt-10 text-sm text-muted-foreground">
              Construido con tecnología de punta • Voice AI • Multi-canal • RAG
            </p>
          </div>
        </Container>
      </div>

      {/* Gradient decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
