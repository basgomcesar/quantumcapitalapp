import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ErrorState() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl items-center px-6">
      <Alert variant="destructive">
        <AlertTitle>No se pudo cargar la información</AlertTitle>
        <AlertDescription>
          No fue posible cargar la información de créditos. Intenta nuevamente más tarde.
        </AlertDescription>
      </Alert>
    </div>
  )
}
