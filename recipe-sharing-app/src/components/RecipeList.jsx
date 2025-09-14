import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const searchTerm = useRecipeStore((state) => state.searchTerm)
  const toggleFavorite = useRecipeStore(state => state.toggleFavorite)
  const isFavorite = useRecipeStore(state => state.isFavorite)

  return (
    <div className="recipe-list">
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      
      {filteredRecipes.length === 0 ? (
        <div className="text-center py-8">
          {searchTerm ? (
            <p className="text-gray-500">No recipes found matching "{searchTerm}"</p>
          ) : (
            <p className="text-gray-500">No recipes yet. Add your first recipe!</p>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {searchTerm && (
            <p className="text-sm text-gray-600 mb-4">
              Found {filteredRecipes.length} recipe(s) matching "{searchTerm}"
            </p>
          )}
          
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="p-4 border rounded hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <Link to={`/recipe/${recipe.id}`} className="block flex-1">
                  <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{recipe.description}</p>
                </Link>
                <button
                  onClick={() => toggleFavorite(recipe.id)}
                  className={`ml-4 p-2 rounded-full ${
                    isFavorite(recipe.id)
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  title={isFavorite(recipe.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  {isFavorite(recipe.id) ? '♥' : '♡'}
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                ID: {recipe.id}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default RecipeList