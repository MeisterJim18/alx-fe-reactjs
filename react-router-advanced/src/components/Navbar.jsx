import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">React Router Advanced</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/blog">Blog</Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/profile">Profil</Link>
            <span className="user-welcome">Bonjour, {user?.username}!</span>
            <button onClick={handleLogout} className="logout-btn">
              Déconnexion
            </button>
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Connexion
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar