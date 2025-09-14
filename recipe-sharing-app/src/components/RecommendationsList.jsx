import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations)
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)
  const addFavorite = useRecipeStore(state => state.addFavorite)
  const isFavorite = useRecipeStore(state => state.isFavorite)

  
  useEffect(() => {
    generateRecommendations()
  }, [generateRecommendations])

  if (recommendations.length === 0) {
    return (
      <div className="p-6 bg-green-50 rounded-lg border border-green-200">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Personalized Recommendations</h2>
        <p className="text-green-700">Add some recipes to favorites to get personalized recommendations!</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-green-50 rounded-lg border border-green-200">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Recommended For You ★</h2>
      <p className="text-green-700 mb-4">Based on your favorite recipes</p>
      
      <div className="space-y-4">
        {recommendations.map(recipe => (
          <div key={recipe.id} className="p-4 bg-white rounded border hover:shadow-md transition-shadow">
            <Link to={`/recipe/${recipe.id}`} className="block">
              <h3 className="text-xl font-semibold text-green-600 hover:text-green-800">
                {recipe.title}
              </h3>
              <p className="text-gray-600 mt-2 line-clamp-2">{recipe.description}</p>
              
              {recipe.ingredients && recipe.ingredients.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Ingredients: {recipe.ingredients.slice(0, 3).join(', ')}
                    {recipe.ingredients.length > 3 && '...'}
                  </p>
                </div>
              )}
            </Link>
            
            {!isFavorite(recipe.id) && (
              <button
                onClick={() => addFavorite(recipe.id)}
                className="mt-3 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
              >
                Add to Favorites
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendationsList