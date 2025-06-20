import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

const ESTADOS_CREDITO = {
  1: "Corriente",
  2: "Atrasado",
  3: "Sin Recuperar",
  4: "Cerrado",
};

export default function ClaimCreditsTable({ creditos = [], onRegisterClaim }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tus Créditos</h2>

      <div className="rounded-xl border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-950 text-white hover:bg-blue-950">
              <TableHead className="text-white">Fecha de Apertura</TableHead>
              <TableHead className="text-white">Monto Prestado</TableHead>
              <TableHead className="text-white">Fecha de Modificación</TableHead>
              <TableHead className="text-white">Estado de Crédito</TableHead>
              <TableHead className="text-white text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {creditos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No hay créditos para mostrar
                </TableCell>
              </TableRow>
            ) : (
              creditos.map((credito) => (
                <TableRow key={credito.id}>
                  <TableCell>
                    {new Date(credito.fechaApertura).toLocaleDateString()}
                  </TableCell>
                  <TableCell>${credito.montoPrestado.toFixed(2)}</TableCell>
                  <TableCell>
                    {new Date(credito.fechaHoraModificacion).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {ESTADOS_CREDITO[credito.idEstadoCredito] || "Desconocido"}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onRegisterClaim(credito)}>
                          Registrar reclamo
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
