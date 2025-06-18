"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function getEstadoTexto(idEstadoCredito) {
  switch (idEstadoCredito) {
    case 1:
      return "Crédito corriente";
    case 2:
      return "Crédito atrasado";
    case 3:
      return "Crédito sin recuperar";
    case 4:
      return "Crédito cerrado";
    default:
      return "Desconocido";
  }
}

export default function DownloadReportCard({ creditos, user }) {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setTextColor("#1E40AF"); // azul oscuro similar a bitácora
    doc.text("Quantum Capital", 14, 20);

    doc.setFontSize(18);
    doc.setTextColor("#000000");
    doc.text("Reporte de Créditos Detallado", 14, 30);

    let y = 40;

    if (user) {
      doc.setFontSize(16);
      doc.text("INFORMACIÓN DEL USUARIO", 14, y);
      y += 8;

      doc.setFontSize(12);
      doc.text(`Nombre: ${user.nombreUsuario ? user.nombreUsuario + " " + user.apellidos : "N/A"}`, 14, y);
      y += 6;
      doc.text(`RFC: ${user.rfc ?? "N/A"}`, 14, y);
      y += 6;
      doc.text(`Correo electrónico: ${user.correo ?? "N/A"}`, 14, y);
      y += 6;
      doc.text(`Teléfono: ${user.telefono ?? "N/A"}`, 14, y);
      y += 10;
    }

    autoTable(doc, {
      startY: y,
      headStyles: {
        fillColor: "#1E40AF", // azul oscuro
        textColor: "#FFFFFF",
        halign: "center",
        fontStyle: "bold",
      },
      bodyStyles: {
        fillColor: "#F3F4F6", // gris claro para filas pares
        textColor: "#374151",
      },
      alternateRowStyles: {
        fillColor: "#E5E7EB", // gris un poco más oscuro para filas impares
      },
      tableLineColor: "#9CA3AF", // gris para bordes
      tableLineWidth: 0.1,
      styles: {
        cellPadding: 4,
        fontSize: 10,
        halign: "center",
        valign: "middle",
      },
      head: [["#", "Monto Prestado", "Saldo Pendiente", "Fecha Apertura", "Plazo", "Estado"]],
      body: creditos.map((credito, index) => [
        index + 1,
        `$${credito.montoPrestado.toFixed(2)}`,
        `$${credito.saldoPendiente.toFixed(2)}`,
        new Date(credito.fechaApertura).toLocaleDateString(),
        `${credito.plazoMesesAPagar} meses`,
        getEstadoTexto(credito.idEstadoCredito),
      ]),
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

