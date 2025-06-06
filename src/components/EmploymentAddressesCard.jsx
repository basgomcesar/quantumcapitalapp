import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function EmploymentAddressesCard() {
  return (
    <Card className="shadow-sm card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Domicilios de empleo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="border-l-4 border-green-500 pl-4 py-2">
          <div className="font-medium">Empresa Actual</div>
          <div className="text-gray-600">
            Av. El Dorado #56-78, Bogotá D.C.
          </div>
          <div className="text-sm text-gray-500">
            Quantum Capital S.A.S
          </div>
          <div className="text-sm text-blue-600">
            Activo desde: Enero 2023
          </div>
        </div>
        <div className="border-l-4 border-gray-300 pl-4 py-2">
          <div className="font-medium">Empleo Anterior</div>
          <div className="text-gray-600">
            Calle 72 #10-15, Bogotá D.C.
          </div>
          <div className="text-sm text-gray-500">
            Tech Solutions Ltda
          </div>
          <div className="text-sm text-gray-500">2021 - 2022</div>
        </div>
      </CardContent>
    </Card>
  );
}