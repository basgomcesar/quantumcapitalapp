import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function SystemLogTable({ bitacoras = [] }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Registro de Actividades</h2>

      <div className="rounded-xl border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-950 text-white hover:bg-blue-950">
              <TableHead className="text-white text-center w-1/4">
                Crédito o Reclamo
              </TableHead>
              <TableHead className="text-white text-center w-1/4">
                Fecha de Modificación
              </TableHead>
              <TableHead className="text-white text-center w-1/2">
                Descripción
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bitacoras.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-muted-foreground py-4">
                  No hay actividades registradas
                </TableCell>
              </TableRow>
            ) : (
              bitacoras.map((log, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center font-medium">{log.tipo}</TableCell>
                  <TableCell className="text-center">
                    {new Date(log.fecha).toLocaleString()}
                  </TableCell>
                  <TableCell className="text-center">{log.descripcion}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
