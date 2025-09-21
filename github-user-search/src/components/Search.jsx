import { useState } from "react";

export default function SearchBar({ onSearch, isLoading }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      username: username.trim(),
      location: location.trim(),
      minRepos: minRepos.trim(),
    });
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto flex flex-col md:flex-row gap-4 items-end"
      onSubmit={handleSubmit}
    >
      <div className="flex-1">
        <label className="block text-gray-700 mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g., SHEMA-IRADUKUNDA-Daniel"
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="flex-1">
        <label className="block text-gray-700 mb-1">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., Kigali"
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
  );
}
