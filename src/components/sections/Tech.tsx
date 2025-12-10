"use client";

import { Container } from "@/components/shared/Container";
import {
  Mic,
  MessageCircle,
  Brain,
  Shield,
  BarChart3,
  Workflow
} from "lucide-react";

const capabilities = [
  {
    icon: Mic,
    title: "Voice AI",
    description: "Llamadas con voz natural. Transcripción, procesamiento y síntesis de voz en tiempo real.",
  },
  {
    icon: MessageCircle,
    title: "Chat Multi-canal",
    description: "WhatsApp, Messenger, Instagram, Web. Un agente, todos los canales.",
  },
  {
    icon: Brain,
    title: "RAG Inteligente",
    description: "Base de conocimiento con búsqueda semántica. Tu agente aprende de tu documentación.",
  },
  {
    icon: Shield,
    title: "Multi-tenant",
    description: "Aislamiento de datos por cliente. Seguridad empresarial con RLS.",
  },
  {
    icon: BarChart3,
    title: "Observability",
    description: "Métricas, logs y costos en tiempo real. Alertas y webhooks configurables.",
  },
  {
    icon: Workflow,
    title: "Workflows",
    description: "Automatizaciones multi-paso. State machines para procesos complejos.",
  },
];

export function Tech() {
  return (
    <section id="tecnologia" className="py-20 sm:py-32 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Tecnología de Punta
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Infraestructura robusta construida para escalar.
            Todo lo que necesitas para agentes IA en producción.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div key={cap.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <cap.icon className="h-5 w-5 text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">{cap.title}</h3>
                <p className="text-sm text-gray-500">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-center text-sm text-gray-400 mb-6">
            Construido con
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <span className="font-mono text-sm">Next.js 15</span>
            <span className="font-mono text-sm">TypeScript</span>
            <span className="font-mono text-sm">PostgreSQL</span>
            <span className="font-mono text-sm">pgvector</span>
            <span className="font-mono text-sm">Vercel AI SDK</span>
            <span className="font-mono text-sm">OpenAI</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
