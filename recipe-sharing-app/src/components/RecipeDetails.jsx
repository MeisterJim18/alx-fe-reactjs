import { useParams, Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = parseInt(id)
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  )

  if (!recipe) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Recipe Not Found</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.description}</p>
      
      {recipe.ingredients && recipe.ingredients.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-4">Actions</h2>
        <div className="space-y-2">
          <EditRecipeForm recipe={recipe} />
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails