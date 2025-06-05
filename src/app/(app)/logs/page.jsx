import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LogsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Bitácora de Actividades
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          En esta sección puedes visualizar todas las actividades registradas en
          el sistema. Revisa los detalles de cada actividad, incluyendo la
          fecha, hora y descripción.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-[var(--foreground)] aspect-video rounded-xl" />
          <div className="bg-[var(--foreground)] aspect-video rounded-xl" />
          <div className="bg-[var(--foreground)] aspect-video rounded-xl" />
        </div>
        <div className="bg-[var(--primary)] min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </div>
  );
}

//El siguiente codigo es un ejemplo de estilos que se pueden a aplicar a una card
// <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//   <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//     <div className="bg-muted/50 aspect-video rounded-xl" />
//     <div className="bg-muted/50 aspect-video rounded-xl" />
//     <div className="bg-muted/50 aspect-video rounded-xl" />
//   </div>
//   <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
// </div>
