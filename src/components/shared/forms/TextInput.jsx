"use client"

import { CircleAlert } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function TextInput({ label, id, register, error, defaultMessageError, ...rest }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        aria-invalid={Boolean(error)}
        {...register}
        {...rest}
      />
      {error && (
        <p className={cn("flex items-center gap-1 text-sm text-destructive")}>
          <CircleAlert className="size-4" />
          {error.message || defaultMessageError}
        </p>
      )}
    </div>
  )
}
