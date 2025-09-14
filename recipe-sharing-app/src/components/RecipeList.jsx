import useRecipeStore from '../store/recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  return (
    <div className="recipe-list">
      <h2 className="text-2xl font-bold mb-4">Recettes</h2>
      {recipes.length === 0 ? (
        <p>Aucune recette pour le moment.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item p-4 mb-4 border rounded">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList