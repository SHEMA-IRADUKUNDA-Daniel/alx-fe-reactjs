import axios from "axios";

const BASE_URL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const headers = token ? { Authorization: `token ${token}` } : {};

// Search users
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    const queryParts = [];
    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);
    queryParts.push("type:user");

    const query = queryParts.join("+");

    const { data } = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`,
      { headers }
    );

    // Fetch full profile for each user to get location and repo count
    const detailedUsers = await Promise.all(
      data.items.map(async (user) => {
        const { data: userDetails } = await axios.get(
          `${BASE_URL}/users/${user.login}`,
          { headers }
        );
        return userDetails; // contains location, public_repos, name, etc.
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Search failed:", error.message);
    return [];
  }
};
