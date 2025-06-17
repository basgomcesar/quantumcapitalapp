"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function DownloadReportCard({ creditos }) {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Reporte de Créditos Detallado", 14, 20);

    let y = 30;

    creditos.forEach((credito, index) => {
      doc.setFontSize(14);
      doc.text(`Crédito #${index + 1}`, 14, y);

      // Tabla principal del crédito
      autoTable(doc, {
        startY: y + 5,
        head: [["Monto Prestado", "Saldo Pendiente", "Fecha Apertura", "Plazo", "Estado"]],
        body: [[
          `$${credito.montoPrestado.toFixed(2)}`,
          `$${credito.saldoPendiente.toFixed(2)}`,
          new Date(credito.fechaApertura).toLocaleDateString(),
          `${credito.plazoMesesAPagar} meses`,
          credito.estadoCredito?.estado ?? "N/A"
        ]],
      });

      y = doc.lastAutoTable.finalY + 5;

      // Domicilio Personal
      console.log("Domicilio Personal:", credito.domicilioPersonal);
      console.log("Domicilio Empleo:", credito.domicilioEmpleo);

      if (credito.domicilioPersonal) {
        doc.text("Domicilio Personal:", 14, y);
        autoTable(doc, {
          startY: y + 5,
          head: [["Calle", "Colonia", "Ciudad", "Estado", "CP"]],
          body: [[
            credito.domicilioPersonal.calleYNumero,
            credito.domicilioPersonal.colonia,
            credito.domicilioPersonal.ciudad,
            credito.domicilioPersonal.estado,
            credito.domicilioPersonal.codigoPostal
          ]],
        });
        y = doc.lastAutoTable.finalY + 5;
      }

      // Domicilio Empleo
      if (credito.domicilioEmpleo) {
        doc.text("Domicilio del Empleo:", 14, y);
        autoTable(doc, {
          startY: y + 5,
          head: [["Compañía", "Puesto", "Salario", "Ciudad", "Estado"]],
          body: [[
            credito.domicilioEmpleo.compañia,
            credito.domicilioEmpleo.puesto,
            credito.domicilioEmpleo.salario,
            credito.domicilioEmpleo.ciudad,
            credito.domicilioEmpleo.estado
          ]],
        });
        y = doc.lastAutoTable.finalY + 5;
      }

      // Calificaciones Mensuales
      if (credito.calificacionesMensuales?.length > 0) {
        doc.text("Calificaciones Mensuales:", 14, y);
        autoTable(doc, {
          startY: y + 5,
          head: [["Fecha", "Calificación"]],
          body: credito.calificacionesMensuales.map((c) => [
            new Date(c.fechaCalificacion).toLocaleDateString(),
            c.calificacion
          ])
        });
        y = doc.lastAutoTable.finalY + 5;
      }

      // Reclamos
      if (credito.reclamos?.length > 0) {
        doc.text("Reclamos:", 14, y);
        autoTable(doc, {
          startY: y + 5,
          head: [["Fecha", "Descripción", "Dictamen"]],
          body: credito.reclamos.map((r) => [
            new Date(r.fechaReclamo).toLocaleDateString(),
            r.descripcionReclamo,
            r.dictamen
          ])
        });
        y = doc.lastAutoTable.finalY + 5;
      }

      y += 10;
    });

    doc.save("reporte-creditos-detallado.pdf");
  };

  return (
    <Card className="shadow-sm card-gradient">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Reporte Completo
            </h3>
            <p className="text-gray-600 text-sm">
              Descarga el informe detallado con toda la información crediticia
            </p>
          </div>
          <Button
            onClick={handleDownload}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-medium"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Descargar PDF
          </Button>
          <div className="text-xs text-gray-500">
            Última actualización: {new Date().toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
