function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-8 md:my-20 rounded-lg shadow-lg">
      <img 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
        alt="User" 
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto border-2 border-white shadow-md"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4 text-center font-semibold">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm md:text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;