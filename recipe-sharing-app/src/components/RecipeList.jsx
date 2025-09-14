import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  return (
    <div className="recipe-list">
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes yet.</p>
      ) : (
        <div className="space-y-4">
          {recipes.map((recipe) => (
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