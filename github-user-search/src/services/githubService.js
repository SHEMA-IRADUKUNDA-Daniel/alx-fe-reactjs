const BASE_URL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const headers = token ? { Authorization: `token ${token}` } : {};

const fetchUserData = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`, { headers });
    if (!response.ok) throw new Error("User not found");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let queryParts = [];
    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    queryParts.push("type:user");

    const query = queryParts.join("+");

    const response = await fetch(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`,
      { headers }
    );
    if (!response.ok) throw new Error("Search failed");
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/${username}/repos?sort=updated&per_page=5`,
      { headers }
    );
    if (!response.ok) throw new Error("Failed to fetch repos");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
export default fetchUserData;
