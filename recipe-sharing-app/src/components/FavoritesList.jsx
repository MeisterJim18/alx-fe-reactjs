import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const FavoritesList = () => {
  const favorites = useRecipeStore(state => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  )
  const removeFavorite = useRecipeStore(state => state.removeFavorite)

  if (favorites.length === 0) {
    return (
      <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
        <h2 className="text-2xl font-bold mb-4 text-yellow-800">My Favorites</h2>
        <p className="text-yellow-700">You haven't added any recipes to favorites yet.</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">My Favorites ♥</h2>
      
      <div className="space-y-4">
        {favorites.map(recipe => (
          recipe ? (
            <div key={recipe.id} className="p-4 bg-white rounded border hover:shadow-md transition-shadow">
              <Link to={`/recipe/${recipe.id}`} className="block">
                <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{recipe.description}</p>
              </Link>
              
              <button
                onClick={() => removeFavorite(recipe.id)}
                className="mt-3 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
              >
                Remove from Favorites
              </button>
            </div>
          ) : null
        ))}
      </div>
    </div>
  )
}

export default FavoritesList