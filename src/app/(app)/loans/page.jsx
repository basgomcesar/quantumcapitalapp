"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const loans = [
  {
    id: 1,
    borrower: "Alice Johnson",
    amount: 5000,
    status: "Approved",
    date: "2024-06-01",
  },
  {
    id: 2,
    borrower: "Bob Smith",
    amount: 3000,
    status: "Pending",
    date: "2024-06-05",
  },
  {
    id: 3,
    borrower: "Charlie Brown",
    amount: 7000,
    status: "Rejected",
    date: "2024-06-10",
  },
];

export default function LoansPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Gestión de Préstamos</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          En esta sección puedes visualizar todos los préstamos activos, aprobados y rechazados. Revisa la información
          de cada solicitante, su monto solicitado, estado del préstamo y fecha de registro. También puedes acceder a
          más detalles individuales.
        </p>
      </div>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-700">Lista de Préstamos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Solicitante</TableHead>
                  <TableHead>Monto</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead className="text-right">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loans.map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell>{loan.id}</TableCell>
                    <TableCell>{loan.borrower}</TableCell>
                    <TableCell>${loan.amount.toLocaleString()}</TableCell>
                    <TableCell>{loan.status}</TableCell>
                    <TableCell>{loan.date}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Ver
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
