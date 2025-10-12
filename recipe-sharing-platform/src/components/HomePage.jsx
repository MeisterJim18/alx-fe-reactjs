import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section with Add Recipe button */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Delicious Recipes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover and share amazing recipes from around the world. 
            Find your next favorite dish!
          </p>
          <Link 
            to="/add-recipe"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Recipe
          </Link>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Recipe Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Recipe Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {recipe.summary}
                </p>
                
                {/* Recipe Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{recipe.prepTime}</span>
                  <span>{recipe.difficulty}</span>
                  <span>{recipe.servings} servings</span>
                </div>
                
                {/* View Recipe Button */}
                <Link 
                  to={`/recipe/${recipe.id}`}
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-medium py-2 px-4 rounded-lg transition duration-200"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes found.</p>
            <Link 
              to="/add-recipe"
              className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Add the First Recipe
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;