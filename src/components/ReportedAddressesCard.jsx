import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { fetchReportedAddresses } from "@/lib/services/addressService";

export default function ReportedAddressesCard() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    async function loadAddresses() {
      const data = await fetchReportedAddresses();
      setAddresses(data || []);
    }
    loadAddresses();
  }, []);

  return (
    <Card className="shadow-sm card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Domicilio(s) reportado(s)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {addresses.length === 0 ? (
          <div className="text-gray-500">No hay domicilios reportados.</div>
        ) : (
          addresses.map((address, idx) => (
            <div
              key={address.id}
              className={`border-l-4 ${
                idx === 0 ? "border-blue-500" : "border-gray-300"
              } pl-4 py-2`}
            >
              <div className="font-medium">Dirección #{idx + 1}</div>
              <div className="text-gray-600">
                {address.calleYNumero}, {address.colonia}, {address.ciudad}
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}