export function requireApiUrl() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  if (!apiUrl) throw new Error("El servicio no está disponible temporalmente.")
  return apiUrl
}

export async function throwResponseError(response, fallbackMessage) {
  const contentType = response.headers.get("content-type") ?? ""
  if (contentType.includes("application/json")) {
    let body = null
    try {
      body = await response.json()
    } catch {}
    if (typeof body?.message === "string" && body.message.trim()) throw new Error(body.message)
  }
  throw new Error(fallbackMessage)
}
