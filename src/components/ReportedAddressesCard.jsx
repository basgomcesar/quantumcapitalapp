import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function ReportedAddressesCard() {
  return (
    <Card className="shadow-sm card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Domicilio(s) reportado(s)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <div className="font-medium">Dirección #{1}</div>
          <div className="text-gray-600">
            Calle 123 #45-67, Bogotá D.C.
          </div>
        </div>
        <div className="border-l-4 border-gray-300 pl-4 py-2">
          <div className="font-medium">Dirección #{2}</div>
          <div className="text-gray-600">
            Carrera 89 #12-34, Medellín
          </div>
        </div>
      </CardContent>
    </Card>
  );
}