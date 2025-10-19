import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ProfileDetails from '../pages/ProfileDetails'
import ProfileSettings from '../pages/ProfileSettings'
import './Profile.css'

const Profile = () => {
  const { user } = useAuth()
  const location = useLocation()

  return (
    <div className="profile-page">
      <h1>Profil de {user?.username}</h1>
      
      {/* Navigation pour les sous-routes imbriquées */}
      <nav className="profile-nav">
        <Link 
          to="/profile" 
          className={location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}
        >
          📊 Détails du Profil
        </Link>
        <Link 
          to="/profile/settings" 
          className={location.pathname === '/profile/settings' ? 'nav-link active' : 'nav-link'}
        >
          ⚙️ Paramètres
        </Link>
      </nav>

      {/* Conteneur pour les routes imbriquées */}
      <div className="profile-content">
        <Routes>
          <Route path="/" element={<ProfileDetails />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  )
}

export default Profile