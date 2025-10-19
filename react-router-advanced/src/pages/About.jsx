import './Pages.css'

const About = () => {
  return (
    <div className="page">
      <h1>À propos</h1>
      <p>Cette application démontre les fonctionnalités avancées de React Router :</p>
      
      <ul className="features-list">
        <li>Routes imbriquées (Nested Routes)</li>
        <li>Routes dynamiques avec paramètres</li>
        <li>Routes protégées avec authentification</li>
        <li>Navigation programmatique</li>
        <li>Gestion des états d'authentification</li>
      </ul>
    </div>
  )
}

export default About