import axios from "axios";

const BASE_URL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const headers = token ? { Authorization: `token ${token}` } : {};

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    if (!username) return [];

    // Task 2: advanced search
    let users = [];

    if (location || minRepos) {
      // Search API
      const queryParts = [`${username} in:login`];
      if (location) queryParts.push(`location:${location}`);
      if (minRepos) queryParts.push(`repos:>=${minRepos}`);
      queryParts.push("type:user");

      const query = queryParts.join("+");
      const { data } = await axios.get(
        `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`,
        { headers }
      );
      users = data.items || [];

      const detailedUsers = await Promise.all(
        users.map(async (user) => {
          const { data: fullData } = await axios.get(
            `${BASE_URL}/users/${user.login}`,
            { headers }
          );
          return fullData;
        })
      );
      return detailedUsers;
    } else {
      const { data } = await axios.get(`${BASE_URL}/users/${username}`, {
        headers,
      });
      return [data];
    }
  } catch (error) {
    console.error("Fetch user failed:", error.message);
    return [];
  }
};
