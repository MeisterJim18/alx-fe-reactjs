import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Application</h1>
        
        <SearchBar />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AddRecipeForm />
              <RecipeList />
            </div>
          </div>
          
          <div className="space-y-8">
            <FavoritesList />
            <RecommendationsList />
          </div>
        </div>
        
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App