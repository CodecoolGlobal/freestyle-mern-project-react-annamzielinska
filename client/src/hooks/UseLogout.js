import { AuthContext } from "../context/AuthContext"

export const useLogout = () => {
  const { dispatch } = AuthContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}