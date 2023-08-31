import { AuthContext } from "../context/AuthContext"

export const useLogout = () => {
  const { dispatch } = AuthContext()

  const logout = () => {

    localStorage.removeItem('user')

    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
  
}