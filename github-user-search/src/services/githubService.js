import axios from 'axios';

const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;

const githubService = {
  async fetchUserData(username) {
    try {
      const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default githubService;