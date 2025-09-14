import { useState } from 'react'
import useRecipeStore from '../store/recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title.trim() && description.trim()) {
      addRecipe({ 
        id: Date.now(), 
        title: title.trim(), 
        description: description.trim() 
      })
      setTitle('')
      setDescription('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form p-6 bg-gray-100 rounded">
      <h2 className="text-2xl font-bold mb-4">Ajouter une recette</h2>
      
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 font-medium">Titre</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de la recette"
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
          placeholder="Description de la recette"
          className="w-full p-2 border rounded"
          rows="3"
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ajouter la recette
      </button>
    </form>
  )
}

export default AddRecipeForm