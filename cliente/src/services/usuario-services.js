import httpUsuario from "../environments/environment"

export const getUsuarios = async () => {
  const { data } = await httpUsuario.get('/get-usuarios')
  return data
}

export const storeUsuario = async (usuario) => {
  const { data } = await httpUsuario.post('/store-usuario', { usuario })
  return data
}