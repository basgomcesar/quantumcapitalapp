"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function SeeClaimModal({ isOpen, onClose, reclamo }) {
  const status = reclamo?.dictamen === "Pendiente" ? "Pendiente" : "Atendido"

  return (
    <Dialog open={Boolean(isOpen && reclamo)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader><DialogTitle>Información del reclamo</DialogTitle></DialogHeader>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="claim-date">Fecha del reclamo</Label>
            <Input id="claim-date" value={reclamo?.fechaReclamo ? new Date(reclamo.fechaReclamo).toLocaleDateString() : "N/D"} readOnly />
          </div>
          <div className="space-y-2">
            <Label>Estado del reclamo</Label>
            <div className="flex h-9 items-center"><Badge variant={status === "Pendiente" ? "secondary" : "default"}>{status}</Badge></div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="claim-detail">Descripción</Label>
            <Textarea id="claim-detail" value={reclamo?.descripcionReclamo ?? "Sin descripción"} readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="claim-resolution">Dictamen</Label>
            <Textarea id="claim-resolution" value={reclamo?.dictamen ?? "Sin dictamen"} readOnly />
          </div>
        </div>
        <DialogFooter><Button type="button" onClick={onClose}>Cerrar</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
