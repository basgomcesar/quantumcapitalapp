import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Cookies from "js-cookie";

export default function GeneralDataCard({ user }) {
  // Función para formatear la fecha como "12 de Marzo de 2025"
  function formatSpanishDate(date) {
    return date.toLocaleDateString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <Card className="shadow-sm md:col-span-2 card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800">
          Datos generales
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Nombre completo:</span>
          <span className="font-medium">{user?.nombreUsuario+" "+user?.apellidos || "Cargando..."}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">RFC:</span>
          <span className="font-medium">{user?.rfc || "Cargando..."}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Correo electrónico:</span>
          <span className="font-medium">{user?.correo || "Cargando..."}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Fecha consulta:</span>
          <span className="font-medium">
            {formatSpanishDate(new Date())}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Telefono:</span>
          <span className="font-medium">
            {user?.telefono || "Cargando..."}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}