import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Application</h1>
        
        <SearchBar /> 
        
        <Routes>
          <Route path="/" element={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AddRecipeForm />
              <RecipeList />
            </div>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App