import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { fetchEmploymentAddresses } from "@/lib/services/addressService";

export default function EmploymentAddressesCard() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetchEmploymentAddresses().then(setAddresses);
  }, []);

  return (
    <Card className="shadow-sm card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Domicilios de empleo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {addresses.map((address) => (
          <div key={address.id} className="border-l-4 border-green-500 pl-4 py-2">
            <div className="font-medium">{address.puesto}</div>
            <div className="text-gray-600">
              {address.calleYNumero}, {address.colonia}, {address.ciudad}
            </div>
            <div className="text-sm text-gray-500">{address.compañia}</div>
            <div className="text-sm text-blue-600">
              Activo desde: {new Date(address.fechaRegistro).toLocaleDateString()}
            </div>
          </div>
        ))}
        {addresses.length === 0 && (
          <div className="text-gray-500 text-sm">No hay domicilios de empleo registrados.</div>
        )}
      </CardContent>
    </Card>
  );
}