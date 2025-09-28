import { useState } from 'react';

function AdvancedSearch({ onSearch, loading }) {
  const [searchData, setSearchData] = useState({
    query: '',
    location: '',
    minRepos: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchData);
  };

  const handleChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Advanced GitHub Search</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
            Username or Name *
          </label>
          <input
            id="query"
            type="text"
            value={searchData.query}
            onChange={(e) => handleChange('query', e.target.value)}
            placeholder="Enter username or name..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={searchData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="e.g., New York, London"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-1">
              Minimum Repositories
            </label>
            <input
              id="minRepos"
              type="number"
              value={searchData.minRepos}
              onChange={(e) => handleChange('minRepos', e.target.value)}
              placeholder="e.g., 10"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !searchData.query.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
        >
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </form>
    </div>
  );
}

export default AdvancedSearch;