"use client"

import { useEffect, useState } from "react"
import { getClaims, getCredits } from "@/lib/services/claimServices"

const GENERIC_CLAIMS_ERROR =
  "No fue posible cargar la información de reclamos. Intenta nuevamente más tarde."

export function useCreditos() {
  const [creditos, setCreditos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(null)
      try {
        const data = await getCredits()
        setCreditos(Array.isArray(data) ? data : [])
      } catch (requestError) {
        console.error("Error al cargar créditos para reclamos:", requestError)
        setError(GENERIC_CLAIMS_ERROR)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { creditos, loading, error }
}

export function useClaimsByUser() {
  const [reclamos, setReclamos] = useState([])
  const [loadingSeeClaim, setLoading] = useState(false)
  const [errorSeeClaim, setError] = useState(null)

  async function fetchData() {
    setLoading(true)
    setError(null)
    try {
      const data = await getClaims()
      setReclamos(Array.isArray(data) ? data : [])
    } catch (requestError) {
      console.error("Error al cargar reclamos:", requestError)
      setError(GENERIC_CLAIMS_ERROR)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { reclamos, loadingSeeClaim, errorSeeClaim, refetchClaims: fetchData }
}
