import { useState } from 'react';
import SearchBar from './SearchBar';
import UserCard from './UserCard';
import githubService from '../services/githubService';

function Search() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);
    
    try {
      const data = await githubService.fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>🔍 GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}
      
      {error && (
        <div style={{ 
          color: 'red', 
          fontSize: '18px', 
          margin: '20px 0',
          padding: '10px',
          border: '1px solid red',
          borderRadius: '5px'
        }}>
          {error}
        </div>
      )}
      
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default Search;