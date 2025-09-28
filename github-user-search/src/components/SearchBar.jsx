import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        if (username.trim()) {
          onSearch(username.trim());
        }
      }} 
      style={{ marginBottom: '20px' }}
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginRight: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;