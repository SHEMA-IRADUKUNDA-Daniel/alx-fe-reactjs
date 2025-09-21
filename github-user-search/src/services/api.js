const BASE_URL = "https://api.github.com";

const fetchUserData = async (username) => {
  try {
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
    const headers = token ? { Authorization: `token ${token}` } : {};

    const response = await fetch(`${BASE_URL}/users/${username}`, { headers });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub user:", error.message);
    return null;
  }
};
export default fetchUserData;
