import axios from 'axios';

const githubService = {
  async fetchUserData(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async searchUsers(query, location = '', minRepos = 0, page = 1) {
    try {
      let searchQuery = query;
      
      if (location) {
        searchQuery += `+location:${location}`;
      }
      
      if (minRepos > 0) {
        searchQuery += `+repos:>${minRepos}`;
      }

      const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}&page=${page}&per_page=10`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getUserDetails(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default githubService;