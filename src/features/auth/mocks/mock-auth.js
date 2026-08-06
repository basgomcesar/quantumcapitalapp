export const MOCK_USER = {
  email: "demo@quantumcapital.mx",
  password: "Demo123!",
  idUsuario: 1,
  nombre: "Usuario",
  apellido: "Demo",
}

export function authenticateMockUser({ email, password }) {
  if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
    return null
  }

  return {
    token: "mock-auth-token",
    idUsuario: MOCK_USER.idUsuario,
    nombre: MOCK_USER.nombre,
    apellido: MOCK_USER.apellido,
    email: MOCK_USER.email,
    isMock: true,
  }
}
