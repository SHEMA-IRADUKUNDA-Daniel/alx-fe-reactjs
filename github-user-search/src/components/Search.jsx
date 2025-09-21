import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsLoading(true);
    setUsers([]);

    const results = await fetchUserData({
      username: username.trim(),
      location: location.trim(),
      minRepos: minRepos.trim(),
    });

    setUsers(results);
    setIsLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-end"
      >
        <div className="flex-1">
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g., octocat"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex-1">
          <label className="block text-gray-700 mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., San Francisco"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex-1">
          <label className="block text-gray-700 mb-1">Min Repos</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="e.g., 10"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="mt-6">
        {isLoading && <p className="text-gray-500 text-center">Loading...</p>}
        {!isLoading && users.length === 0 && (
          <p className="text-red-500 text-center">
            Looks like we cant find the user
          </p>
        )}
        {!isLoading &&
          users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 mt-4 p-4 border rounded-lg"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.name || user.login}</p>
                {user.location && (
                  <p className="text-gray-500">Location: {user.location}</p>
                )}
                {user.public_repos !== undefined && (
                  <p className="text-gray-500">Repos: {user.public_repos}</p>
                )}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
