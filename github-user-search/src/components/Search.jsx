import { useState } from 'react';
import AdvancedSearch from './AdvancedSearch';
import UserCard from './UserCard';
import githubService from '../services/githubService';

function Search() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [currentSearch, setCurrentSearch] = useState(null);

  const handleSearch = async (searchData, loadMore = false) => {
    const currentPage = loadMore ? page + 1 : 1;
    
    setLoading(true);
    setError(null);

    if (!loadMore) {
      setUsers([]);
      setPage(1);
      setCurrentSearch(searchData);
    }

    try {
      const result = await githubService.searchUsers(
        searchData.query,
        searchData.location,
        searchData.minRepos,
        currentPage
      );

      if (loadMore) {
        const userDetails = await Promise.all(
          result.items.map(user => githubService.getUserDetails(user.login))
        );
        setUsers(prev => [...prev, ...userDetails]);
        setPage(currentPage);
      } else {
        const userDetails = await Promise.all(
          result.items.map(user => githubService.getUserDetails(user.login))
        );
        setUsers(userDetails);
        setPage(currentPage);
      }

      setHasMore(result.items.length === 10);
    } catch (err) {
      setError('Failed to search users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (currentSearch) {
      handleSearch(currentSearch, true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🔍 GitHub User Search</h1>
          <p className="text-gray-600">Find GitHub users with advanced filters</p>
        </div>

        <AdvancedSearch onSearch={handleSearch} loading={loading} />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        {users.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Search Results ({users.length} users found)
            </h2>
            <div className="space-y-4">
              {users.map(user => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        )}

        {hasMore && (
          <div className="text-center">
            <button
              onClick={loadMore}
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              {loading ? 'Loading...' : 'Load More Users'}
            </button>
          </div>
        )}

        {users.length === 0 && !loading && !error && (
          <div className="text-center text-gray-500 py-12">
            <p className="text-lg">Enter search criteria to find GitHub users</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;