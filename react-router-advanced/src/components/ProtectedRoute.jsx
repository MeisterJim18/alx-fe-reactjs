import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    // Rediriger vers la page de login si non authentifié
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute