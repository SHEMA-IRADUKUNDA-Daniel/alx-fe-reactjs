import axios from "axios";

const BASE_URL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const headers = token ? { Authorization: `token ${token}` } : {};

// Search users
const fetchUserData = async ({ username, location, minRepos }) => {
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

    // Get full user details for each user
    const detailedUsers = await Promise.all(
      data.items.map(async (user) => {
        const { data: userDetails } = await axios.get(
          `${BASE_URL}/users/${user.login}`,
          { headers }
        );
        return userDetails;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Search failed:", error.message);
    return [];
  }
};
export default fetchUserData;
