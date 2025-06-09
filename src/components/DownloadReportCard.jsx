import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadReportCard() {
  return (
    <Card className="shadow-sm card-gradient">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Reporte Completo
            </h3>
            <p className="text-gray-600 text-sm">
              Descarga el informe detallado con toda la información
              crediticia
            </p>
          </div>
          <Button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-medium"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Descargar PDF
          </Button>
          <div className="text-xs text-gray-500">
            Última actualización: 15 de Enero, 2024
          </div>
        </div>
      </CardContent>
    </Card>
  );
}