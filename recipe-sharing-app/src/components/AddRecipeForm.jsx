import { useState } from 'react'
import useRecipeStore from '../store/recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title.trim() && description.trim()) {
      addRecipe({ 
        title: title.trim(), 
        description: description.trim(),
        ingredients: ingredients.split(',').map(i => i.trim()).filter(i => i)
      })
      setTitle('')
      setDescription('')
      setIngredients('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form p-6 bg-gray-100 rounded">
      <h2 className="text-2xl font-bold mb-4">Add a Recipe</h2>
      
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 font-medium">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-medium">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe description"
          className="w-full p-2 border rounded"
          rows="3"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block mb-2 font-medium">
          Ingredients (comma-separated)
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredient 1, Ingredient 2, Ingredient 3"
          className="w-full p-2 border rounded"
          rows="2"
        />
      </div>
      
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  )
}

export default AddRecipeForm