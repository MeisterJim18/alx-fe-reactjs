import { Link } from 'react-router-dom'
import './Pages.css'

const Blog = () => {
  const posts = [
    { id: 1, title: 'Introduction à React Router', excerpt: 'Découvrez les bases du routage...' },
    { id: 2, title: 'Routes avancées en React', excerpt: 'Apprenez à créer des routes complexes...' },
    { id: 3, title: 'Authentification et routes protégées', excerpt: 'Sécurisez vos applications...' },
  ]

  return (
    <div className="page">
      <h1>Blog</h1>
      <p>Découvrez nos articles sur React Router</p>
      
      <div className="blog-posts">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Lire la suite →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog