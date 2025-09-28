function UserCard({ user }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px 0',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={user.avatar_url} 
        alt={`${user.login}'s avatar`}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          marginBottom: '15px'
        }}
      />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio || 'No bio available'}</p>
      <p><strong>Followers:</strong> {user.followers}</p>
      <p><strong>Following:</strong> {user.following}</p>
      <p><strong>Public Repos:</strong> {user.public_repos}</p>
      <a 
        href={user.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#24292e',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          marginTop: '10px'
        }}
      >
        View GitHub Profile
      </a>
    </div>
  );
}

export default UserCard;