import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }],
    filteredRecipes: [...state.filteredRecipes, { ...newRecipe, id: Date.now() }]
  })),
  

  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== recipeId)
  })),
  
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
  
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  filterRecipes: () => {
    const { recipes, searchTerm } = get()
    if (!searchTerm.trim()) {
      set({ filteredRecipes: recipes })
      return
    }
    
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (recipe.ingredients && recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    )
    
    set({ filteredRecipes: filtered })
  }
}))

export default useRecipeStore