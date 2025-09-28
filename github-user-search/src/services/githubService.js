import axios from 'axios';

const githubService = {
  async fetchUserData(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default githubService;