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

export default function ClaimRequestTable({ reclamos = [], onSeeClaim }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tus Reclamos</h2>

      <div className="rounded-xl border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-950 text-white hover:bg-blue-950">
              <TableHead className="text-white">Fecha de Reclamo</TableHead>
              <TableHead className="text-white">Estado de Reclamo</TableHead>
              <TableHead className="text-white text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reclamos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-muted-foreground">
                  No hay reclamos para mostrar
                </TableCell>
              </TableRow>
            ) : (
              reclamos.map((reclamo) => {
                const fechaReclamo = reclamo.fechaReclamo
                  ? new Date(reclamo.fechaReclamo).toLocaleDateString()
                  : "N/D";

                const estado = reclamo.dictamen === "Pendiente" ? "Pendiente" : "Atendido";

                return (
                  <TableRow key={reclamo.id}>
                    <TableCell>{fechaReclamo}</TableCell>
                    <TableCell>{estado}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => onSeeClaim(reclamo)}>
                            Ver detalles
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
