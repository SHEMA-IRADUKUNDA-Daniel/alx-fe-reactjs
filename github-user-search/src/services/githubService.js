import axios from "axios";

const BASE_URL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
console.log("GitHub token loaded:", token ? "✅ present" : "❌ missing");
const headers = token ? { Authorization: `Bearer ${token}` } : {};

export const fetchUserData = async (username) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users/${username}`, {
      headers,
    });
    return data;
  } catch (error) {
    console.error("User not found:", error.response?.status, error.message);
    return null;
  }
};

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
    return data.items || [];
  } catch (error) {
    console.error("Search failed:", error.response?.status, error.message);
    return [];
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/users/${username}/repos?sort=updated&per_page=5`,
      { headers }
    );
    return data;
  } catch (error) {
    console.error(
      "Failed to fetch repos:",
      error.response?.status,
      error.message
    );
    return [];
  }
};
