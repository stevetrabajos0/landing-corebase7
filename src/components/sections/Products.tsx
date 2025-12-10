"use client";

import { Container } from "@/components/shared/Container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Building2,
  CreditCard,
  Calendar,
  MessageSquare,
  TrendingUp,
  Sparkles
} from "lucide-react";

const products = [
  {
    icon: Building2,
    title: "ConstructorFlow",
    description: "CRM con IA para empresas de construcción. Gestión de leads, cotizaciones y seguimiento automatizado.",
    status: "Disponible",
  },
  {
    icon: CreditCard,
    title: "PayFlow",
    description: "Cobranza automatizada con agentes IA. Recordatorios, negociación y seguimiento de pagos.",
    status: "Próximamente",
  },
  {
    icon: Calendar,
    title: "ReceptIA",
    description: "Reservaciones y booking con IA. Agenda citas, confirma disponibilidad y envía recordatorios.",
    status: "Próximamente",
  },
  {
    icon: MessageSquare,
    title: "Soporte 24/7",
    description: "Atención al cliente automatizada. Resuelve dudas, escala tickets y aprende de cada interacción.",
    status: "Personalizado",
  },
  {
    icon: TrendingUp,
    title: "Ventas IA",
    description: "Asistente de ventas inteligente. Califica leads, agenda demos y da seguimiento automatizado.",
    status: "Personalizado",
  },
  {
    icon: Sparkles,
    title: "Tu Caso de Uso",
    description: "¿Tienes un caso específico? Construimos agentes IA personalizados para cualquier industria.",
    status: "Contáctanos",
  },
];

export function Products() {
  return (
    <section id="productos" className="py-20 sm:py-32 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Productos y Casos de Uso
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Desde CRMs especializados hasta asistentes personalizados.
            Construye el agente IA que tu negocio necesita.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.title}
              className="group hover:border-gray-400 transition-colors bg-white border-gray-200"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <product.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {product.status}
                  </span>
                </div>
                <CardTitle className="text-xl text-gray-900">{product.title}</CardTitle>
                <CardDescription className="text-gray-500">
                  {product.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
