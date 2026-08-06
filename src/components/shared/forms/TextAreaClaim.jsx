"use client"

import { CircleAlert } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextAreaClaim({ label, id, register, error, defaultMessageError, ...rest }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea id={id} aria-invalid={Boolean(error)} {...register} {...rest} />
      {error && (
        <p className="flex items-center gap-1 text-sm text-destructive">
          <CircleAlert className="size-4" />
          {error.message || defaultMessageError}
        </p>
      )}
    </div>
  )
}
