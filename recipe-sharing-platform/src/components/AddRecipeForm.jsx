import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  
  // State for form fields
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'Easy',
    ingredients: '',
    instructions: ''
  });

  // State for validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes - FIXED: Properly using e.target.value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long';
    }

    // Summary validation
    if (!formData.summary.trim()) {
      newErrors.summary = 'Recipe summary is required';
    } else if (formData.summary.trim().length < 10) {
      newErrors.summary = 'Summary must be at least 10 characters long';
    }

    // Preparation time validation
    if (!formData.prepTime.trim()) {
      newErrors.prepTime = 'Preparation time is required';
    }

    // Cooking time validation
    if (!formData.cookTime.trim()) {
      newErrors.cookTime = 'Cooking time is required';
    }

    // Servings validation
    if (!formData.servings.trim()) {
      newErrors.servings = 'Number of servings is required';
    } else if (isNaN(formData.servings) || parseInt(formData.servings) <= 0) {
      newErrors.servings = 'Servings must be a positive number';
    }

    // Ingredients validation
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientsList = formData.ingredients.split('\n').filter(line => line.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please enter at least 2 ingredients';
      }
    }

    // Instructions validation
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
    } else {
      const instructionsList = formData.instructions.split('\n').filter(line => line.trim());
      if (instructionsList.length < 2) {
        newErrors.instructions = 'Please enter at least 2 steps';
      }
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // For now, just log the data to console
        console.log('Recipe submitted:', formData);
        
        // Reset form
        setFormData({
          title: '',
          summary: '',
          prepTime: '',
          cookTime: '',
          servings: '',
          difficulty: 'Easy',
          ingredients: '',
          instructions: ''
        });
        
        setIsSubmitting(false);
        
        // Redirect to home page
        navigate('/');
        
        // Show success message (in real app, use state or toast)
        alert('Recipe added successfully!');
      }, 1000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header with back button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Recipes
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Add New Recipe</h1>
          <p className="text-gray-600 mt-2">Share your delicious recipe with the community</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Spaghetti Carbonara"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Recipe Summary */}
            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
                Recipe Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows="3"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                  errors.summary ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="A brief description of your recipe..."
              />
              {errors.summary && (
                <p className="mt-1 text-sm text-red-600">{errors.summary}</p>
              )}
            </div>

            {/* Basic Information - Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preparation Time */}
              <div>
                <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preparation Time *
                </label>
                <input
                  type="text"
                  id="prepTime"
                  name="prepTime"
                  value={formData.prepTime}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                    errors.prepTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., 15 mins"
                />
                {errors.prepTime && (
                  <p className="mt-1 text-sm text-red-600">{errors.prepTime}</p>
                )}
              </div>

              {/* Cooking Time */}
              <div>
                <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Cooking Time *
                </label>
                <input
                  type="text"
                  id="cookTime"
                  name="cookTime"
                  value={formData.cookTime}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                    errors.cookTime ? 'border-red-500' : 'border-gray-300'
                }`}
                  placeholder="e.g., 30 mins"
                />
                {errors.cookTime && (
                  <p className="mt-1 text-sm text-red-600">{errors.cookTime}</p>
                )}
              </div>

              {/* Servings */}
              <div>
                <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-2">
                  Servings *
                </label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  value={formData.servings}
                  onChange={handleChange}
                  min="1"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                    errors.servings ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., 4"
                />
                {errors.servings && (
                  <p className="mt-1 text-sm text-red-600">{errors.servings}</p>
                )}
              </div>

              {/* Difficulty */}
              <div>
                <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
                Ingredients * (one per line)
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows="6"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter each ingredient on a new line:
- 400g spaghetti
- 200g pancetta
- 4 large eggs"
              />
              {errors.ingredients && (
                <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
              )}
            </div>

            {/* Instructions */}
            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
                Instructions * (one step per line)
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows="8"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                  errors.instructions ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter each step on a new line:
1. Bring a large pot of salted water to boil
2. Cook spaghetti according to package instructions
3. While pasta cooks, heat a large pan..."
              />
              {errors.instructions && (
                <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition duration-200 ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding Recipe...
                  </span>
                ) : (
                  'Add Recipe'
                )}
              </button>
              
              <Link
                to="/"
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium text-center hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;