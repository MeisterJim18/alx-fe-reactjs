import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-8">
          Recipe Sharing Platform
        </h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to Our Recipe Platform
          </h2>
          <p className="text-gray-600 mb-4">
            This application will allow you to discover, share, and save your favorite recipes.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200">
              Explore Recipes
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-200">
              Add a Recipe
            </button>
          </div>
        </div>
        
        {/* Test section to verify Tailwind styles */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-red-700">Popular Recipes</h3>
            <p className="text-red-600">Discover the most loved recipes</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-700">New Recipes</h3>
            <p className="text-green-600">Latest recipes added</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-700">Categories</h3>
            <p className="text-blue-600">Browse by cuisine type</p>
          </div>
        </div>

        {/* Additional content to demonstrate more Tailwind features */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">
            Platform Features
          </h3>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>Browse thousands of user-submitted recipes</li>
            <li>Share your own culinary creations</li>
            <li>Save and organize your favorite recipes</li>
            <li>Rate and review other recipes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App