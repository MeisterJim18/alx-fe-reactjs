import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  return (
    <div className="app container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Application de Partage de Recettes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AddRecipeForm />
        <RecipeList />
      </div>
    </div>
  )
}

export default App