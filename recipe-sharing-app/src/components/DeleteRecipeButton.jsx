import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const DeleteRecipeButton = ({ recipeId }) => {
  const [isConfirming, setIsConfirming] = useState(false)
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteRecipe(recipeId)
    navigate('/')
  }

  if (!isConfirming) {
    return (
      <button
        onClick={() => setIsConfirming(true)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Delete Recipe
      </button>
    )
  }

  return (
    <div className="bg-red-100 p-4 rounded border border-red-300">
      <p className="text-red-800 mb-2">Are you sure you want to delete this recipe?</p>
      <div className="space-x-2">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Yes, Delete
        </button>
        <button
          onClick={() => setIsConfirming(false)}
          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default DeleteRecipeButton