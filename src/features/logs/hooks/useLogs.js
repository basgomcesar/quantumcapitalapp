"use client"

import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { getCredits, getClaims } from "@/lib/services/claimServices"
import { MOCK_LOGS } from "@/features/logs/mocks/mock-logs"

export function useLogs() {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchLogs() {
      setLoading(true)
      setError(null)

      try {
        const isMockSession =
          process.env.NEXT_PUBLIC_ENABLE_MOCK_LOGIN === "true" &&
          Cookies.get("authToken") === "mock-auth-token"

        if (isMockSession) {
          setLogs(MOCK_LOGS)
          return
        }

        const [credits, claims] = await Promise.all([getCredits(), getClaims()])
        const creditLogs = (Array.isArray(credits) ? credits : []).map((credit) => ({
          id: `credit-${credit.id ?? credit.idCredito}`,
          tipo: "Crédito",
          fecha: credit.fechaHoraModificacion,
          descripcion: `Modificación en crédito de $${Number(credit.montoPrestado ?? 0).toFixed(2)}`,
        }))
        const claimLogs = (Array.isArray(claims) ? claims : []).map((claim) => ({
          id: `claim-${claim.id ?? claim.idReclamo}`,
          tipo: "Reclamo",
          fecha: claim.fechaReclamo,
          descripcion: claim.descripcionReclamo,
        }))

        setLogs(
          [...creditLogs, ...claimLogs].sort(
            (first, second) => new Date(second.fecha) - new Date(first.fecha)
          )
        )
      } catch (requestError) {
        console.error("Error al cargar la bitácora:", requestError)
        setError("No fue posible cargar la bitácora. Intenta nuevamente más tarde.")
      } finally {
        setLoading(false)
      }
    }

    fetchLogs()
  }, [])

  return { logs, loading, error }
}
