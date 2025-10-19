import { useParams, Link } from 'react-router-dom'
import './Pages.css'

const BlogPost = () => {
  const { postId } = useParams()

  const posts = {
    1: {
      title: 'Introduction à React Router',
      content: 'React Router est la bibliothèque de routage standard pour React...',
      author: 'Jean Dupont',
      date: '15 Jan 2024'
    },
    2: {
      title: 'Routes avancées en React',
      content: 'Les routes avancées permettent de créer des applications complexes...',
      author: 'Marie Martin',
      date: '20 Jan 2024'
    },
    3: {
      title: 'Authentification et routes protégées',
      content: 'La protection des routes est essentielle pour sécuriser vos applications...',
      author: 'Pierre Leroy',
      date: '25 Jan 2024'
    }
  }

  const post = posts[postId]

  if (!post) {
    return (
      <div className="page">
        <h1>Article non trouvé</h1>
        <p>L'article que vous recherchez n'existe pas.</p>
        <Link to="/blog" className="back-link">← Retour au blog</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <Link to="/blog" className="back-link">← Retour au blog</Link>
      <article className="blog-post">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>Par {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
          <p>Ceci est un exemple de contenu pour l'article {postId}. Dans une application réelle, ce contenu serait récupéré depuis une base de données ou une API.</p>
        </div>
      </article>
    </div>
  )
}

export default BlogPost