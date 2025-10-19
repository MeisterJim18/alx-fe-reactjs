import { Link } from 'react-router-dom'
import './Pages.css'

const Home = () => {
  return (
    <div className="page">
      <h1>Bienvenue sur notre application</h1>
      <p>Cette démo montre le routage avancé avec React Router</p>
      
      <div className="features">
        <div className="feature-card">
          <h3>Routes imbriquées</h3>
          <p>Gérez des sous-sections dans vos pages</p>
          <Link to="/profile" className="feature-link">
            Voir le profil
          </Link>
        </div>
        
        <div className="feature-card">
          <h3>Routes dynamiques</h3>
          <p>Pages avec paramètres variables</p>
          <Link to="/blog" className="feature-link">
            Explorer le blog
          </Link>
        </div>
        
        <div className="feature-card">
          <h3>Routes protégées</h3>
          <p>Accès sécurisé aux pages privées</p>
          <Link to="/login" className="feature-link">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home