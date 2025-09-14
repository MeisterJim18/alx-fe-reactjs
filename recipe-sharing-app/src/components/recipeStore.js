import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
 
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }],
    filteredRecipes: [...state.filteredRecipes, { ...newRecipe, id: Date.now() }]
  })),
  
 
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId)
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
  },
  
  
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  toggleFavorite: (recipeId) => set((state) => {
    const isFavorite = state.favorites.includes(recipeId)
    return {
      favorites: isFavorite
        ? state.favorites.filter(id => id !== recipeId)
        : [...state.favorites, recipeId]
    }
  }),
  
  isFavorite: (recipeId) => get().favorites.includes(recipeId),
  
  
  generateRecommendations: () => set((state) => {
    if (state.favorites.length === 0) {
      const shuffled = [...state.recipes].sort(() => 0.5 - Math.random())
      return { recommendations: shuffled.slice(0, 3) }
    }
    
    // Generate recommendations based on favorite ingredients
    const favoriteIngredients = new Set()
    state.favorites.forEach(favId => {
      const recipe = state.recipes.find(r => r.id === favId)
      if (recipe && recipe.ingredients) {
        recipe.ingredients.forEach(ingredient => {
          favoriteIngredients.add(ingredient.toLowerCase())
        })
      }
    })
    
    const recommended = state.recipes
      .filter(recipe => !state.favorites.includes(recipe.id)) // Exclude already favorited
      .filter(recipe => recipe.ingredients && recipe.ingredients.some(ingredient =>
        favoriteIngredients.has(ingredient.toLowerCase())
      ))
      .sort(() => 0.5 - Math.random())
      .slice(0, 5)
    
    return { recommendations: recommended }
  })
}))

export default useRecipeStore