import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import './PostsComponent.css'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json()
}

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true)

  const { 
    data: posts, 
    isLoading, 
    error, 
    isError,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000,
    cacheTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false,
    keepPreviousData: true 
  })

  const togglePosts = () => {
    setShowPosts(!showPosts)
  }

  if (isLoading) {
    return (
      <div className="posts-container">
        <div className="loading">Chargement des posts...</div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="posts-container">
        <div className="error">Erreur: {error.message}</div>
        <button onClick={() => refetch()} className="refetch-btn">
          Réessayer
        </button>
      </div>
    )
  }

  return (
    <div className="posts-container">
      <div className="controls">
        <button onClick={togglePosts} className="toggle-btn">
          {showPosts ? 'Masquer les Posts' : 'Afficher les Posts'}
        </button>
        
        <button 
          onClick={() => refetch()} 
          className="refetch-btn"
          disabled={isFetching}
        >
          {isFetching ? 'Rechargement...' : 'Recharger les Posts'}
        </button>
      </div>

      {isFetching && <div className="fetching">Mise à jour des données...</div>}

      {showPosts && (
        <div className="posts-list">
          <h2>Liste des Posts ({posts?.length || 0})</h2>
          <div className="posts-grid">
            {posts?.slice(0, 12).map((post) => (
              <div key={post.id} className="post-card">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-body">{post.body}</p>
                <div className="post-id">ID: {post.id}</div>
              </div>
            ))}
          </div>
          <div className="cache-info">
            <p>
              💡 <strong>Test de cache :</strong> Masquez les posts puis réaffichez-les. 
              Les données se chargent instantanément depuis le cache !
              <br />
              <strong>cacheTime:</strong> 5 minutes | <strong>keepPreviousData:</strong> true
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostsComponent