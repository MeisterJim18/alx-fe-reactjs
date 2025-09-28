function UserCard({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
      <div className="flex items-start space-x-4">
        <img 
          src={user.avatar_url} 
          alt={`${user.login}'s avatar`}
          className="w-16 h-16 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h2 className="text-xl font-semibold text-gray-800 truncate">
              {user.name || user.login}
            </h2>
            {user.name && (
              <span className="text-gray-500 text-sm">({user.login})</span>
            )}
          </div>
          
          {user.bio && (
            <p className="text-gray-600 mb-3 line-clamp-2">{user.bio}</p>
          )}
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Followers:</span>
              <span className="ml-1 text-gray-600">{user.followers}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Following:</span>
              <span className="ml-1 text-gray-600">{user.following}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Repos:</span>
              <span className="ml-1 text-gray-600">{user.public_repos}</span>
            </div>
            {user.location && (
              <div>
                <span className="font-medium text-gray-700">Location:</span>
                <span className="ml-1 text-gray-600">{user.location}</span>
              </div>
            )}
          </div>
          
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-200"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;