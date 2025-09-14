import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const searchTerm = useRecipeStore((state) => state.searchTerm)

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
              <Link to={`/recipe/${recipe.id}`} className="block">
                <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{recipe.description}</p>
              </Link>
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