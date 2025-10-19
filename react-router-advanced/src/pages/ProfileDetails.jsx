import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'
import './Pages.css'

const Profile = () => {
  const { user } = useAuth()
  const location = useLocation()

  return (
    <div className="page">
      <h1>Profil de {user?.username}</h1>
      
      {/* Navigation pour les sous-routes */}
      <nav className="sub-nav">
        <Link 
          to="/profile" 
          className={location.pathname === '/profile' ? 'active' : ''}
        >
          Détails
        </Link>
        <Link 
          to="/profile/settings" 
          className={location.pathname === '/profile/settings' ? 'active' : ''}
        >
          Paramètres
        </Link>
      </nav>

      {/* Routes imbriquées */}
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