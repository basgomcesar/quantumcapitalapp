import ReportSection from "@/components/ReportSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center  py-12 px-6">
      <section className="w-full max-w-4xl text-center mb-14">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          Bienvenido a Quantum Capital
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Quantum Capital es un programa que te ayuda a conocer y entender tu historial crediticio.
          Descubre tu <strong>scoring</strong>, mejora tus finanzas personales y toma decisiones más inteligentes.
        </p>
      </section>

      <section className="w-full max-w-3xl">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition hover:shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Conoce tu historial</h2>
                <p className="text-gray-600">
                  Accede fácilmente a tu historial crediticio, identifica áreas de mejora y mantente informado.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition hover:shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Descubre tu scoring</h2>
                <p className="text-gray-600">
                  Consulta tu puntaje crediticio en tiempo real y aprende cómo influye en tus oportunidades financieras.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition hover:shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mejora tu perfil financiero</h2>
                <p className="text-gray-600">
                  Obtén consejos y herramientas personalizadas para optimizar tu salud financiera y aumentar tu scoring.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </section>
    </main>
  );
}
