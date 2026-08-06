"use client"

import { useState } from "react"
import { registerNewClaim } from "@/lib/services/claimServices"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function NewClaimModal({ isOpen, onClose, credito, onClaimCreated }) {
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleOpenChange = (open) => {
    if (!open && !isSubmitting) onClose()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!description.trim()) {
      setError("La descripción no puede estar vacía.")
      return
    }

    setIsSubmitting(true)
    try {
      await registerNewClaim(credito.id, description)
      setSuccess(true)
      setError("")
      setDescription("")
      onClaimCreated?.()
      setTimeout(() => {
        setSuccess(false)
        onClose()
      }, 1500)
    } catch (requestError) {
      setError(requestError.message || "Error al registrar el reclamo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={Boolean(isOpen && credito)} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reclamo para crédito #{credito?.id}</DialogTitle>
          <DialogDescription>Describe el motivo de tu reclamación.</DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="claim-description">Descripción</Label>
            <Textarea
              id="claim-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Describe tu reclamo"
              aria-invalid={Boolean(error)}
            />
          </div>
          {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
          {success && <Alert><AlertDescription>¡Reclamo enviado correctamente!</AlertDescription></Alert>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>Cancelar</Button>
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando…" : "Enviar"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
