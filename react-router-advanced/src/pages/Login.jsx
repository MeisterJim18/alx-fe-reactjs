import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Pages.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      login(username)
      navigate('/profile')
    }
  }

  return (
    <div className="page">
      <div className="login-container">
        <h1>Connexion</h1>
        <p>Connectez-vous pour accéder à votre profil</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-submit">
            Se connecter
          </button>
        </form>
        
        <div className="demo-info">
          <p><strong>Démo :</strong> Entrez n'importe quel nom d'utilisateur</p>
        </div>
      </div>
    </div>
  )
}

export default Login