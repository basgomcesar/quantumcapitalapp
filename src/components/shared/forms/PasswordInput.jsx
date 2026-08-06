"use client"

import { useState } from "react"
import { CircleAlert, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PasswordInput({ label, id = "password", register, error, defaultMessageError, ...rest }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={isPasswordVisible ? "text" : "password"}
          aria-invalid={Boolean(error)}
          className="pr-10"
          {...register}
          {...rest}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0"
          onClick={() => setIsPasswordVisible((visible) => !visible)}
          aria-label={isPasswordVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
          aria-pressed={isPasswordVisible}
        >
          {isPasswordVisible ? <EyeOff /> : <Eye />}
        </Button>
      </div>
      {error && (
        <p className="flex items-center gap-1 text-sm text-destructive">
          <CircleAlert className="size-4" />
          {error.message || defaultMessageError}
        </p>
      )}
    </div>
  )
}
