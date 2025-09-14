import { useState } from 'react'
import useRecipeStore from '../store/recipeStore'

const EditRecipeForm = ({ recipe }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(recipe.title)
  const [description, setDescription] = useState(recipe.description)
  const updateRecipe = useRecipeStore(state => state.updateRecipe)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() && description.trim()) {
      updateRecipe({
        ...recipe,
        title: title.trim(),
        description: description.trim()
      })
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setTitle(recipe.title)
    setDescription(recipe.description)
    setIsEditing(false)
  }

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
      >
        Edit Recipe
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
      <h3 className="text-lg font-semibold mb-2">Edit Recipe</h3>
      
      <div className="mb-3">
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div className="mb-3">
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          rows="3"
          required
        />
      </div>
      
      <div className="space-x-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditRecipeForm