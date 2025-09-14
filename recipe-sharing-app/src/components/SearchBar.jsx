import React, { useEffect } from 'react'
import useRecipeStore from '../store/recipeStore'

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm)
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
  const filterRecipes = useRecipeStore(state => state.filterRecipes)

  
  useEffect(() => {
    filterRecipes()
  }, [searchTerm, filterRecipes])

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search recipes by title, description, or ingredients..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {searchTerm && (
        <p className="mt-2 text-sm text-gray-500">
          Showing {useRecipeStore.getState().filteredRecipes.length} results
        </p>
      )}
    </div>
  )
}

export default SearchBar