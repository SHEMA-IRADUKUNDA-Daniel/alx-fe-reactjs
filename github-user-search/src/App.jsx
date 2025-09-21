import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUserRepos, searchUsers } from "./services/githubService";

export default function App() {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async (criteria) => {
    setIsLoading(true);
    setUsers([]);
    setRepos({});

    const results = await searchUsers(criteria);
    setUsers(results);

    const reposData = await Promise.all(
      results.map(async (user) => {
        const userRepos = await fetchUserRepos(user.login);
        return { [user.login]: userRepos };
      })
    );

    const mergedRepos = Object.assign({}, ...reposData);
    setRepos(mergedRepos);

    setIsLoading(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub Advanced User Search
      </h1>
      <Search onSearch={handleSearch} isLoading={isLoading} />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p className="text-center text-gray-500 col-span-full">Loading...</p>
        ) : users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              repos={repos[user.login] || []}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Looks like we cant find the user
          </p>
        )}
      </div>
    </div>
  );
}
