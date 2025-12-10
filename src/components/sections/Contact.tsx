"use client";

import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar envío real
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 sm:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              ¿Listo para empezar?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Cuéntanos sobre tu proyecto y te contactamos en menos de 24 horas.
            </p>
          </div>

          {/* Form */}
          <Card className="bg-white border-gray-200">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">¡Mensaje enviado!</h3>
                  <p className="text-gray-500">
                    Te contactaremos pronto para agendar una demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        required
                        className="border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@empresa.com"
                        required
                        className="border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      placeholder="Nombre de tu empresa"
                      className="border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      ¿Cómo podemos ayudarte?
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tu proyecto o caso de uso..."
                      rows={4}
                      required
                      className="border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2 bg-gray-900 hover:bg-gray-800 text-white">
                    Enviar Mensaje
                    <Send className="h-4 w-4" />
                  </Button>

                  <p className="text-xs text-center text-gray-400">
                    Al enviar, aceptas nuestra política de privacidad.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
