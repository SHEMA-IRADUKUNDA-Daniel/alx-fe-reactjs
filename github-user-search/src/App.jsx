import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (criteria) => {
    setIsLoading(true);
    setUsers([]);

    // If only username is provided, fetch single user
    if (criteria.username && !criteria.location && !criteria.minRepos) {
      const user = await fetchUserData(criteria.username);
      setUsers(user ? [user] : []);
    } else {
      // Otherwise, use advanced search
      const results = await fetchUserData(criteria);
      setUsers(results);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search
      </h1>
      <Search onSearch={handleSearch} isLoading={isLoading} users={users} />
    </div>
  );
}
