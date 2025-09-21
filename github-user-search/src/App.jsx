import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import fetchUserData from "./services/api";

export default function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await fetchUserData(username);
    setUser(data);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserCard user={user} />
    </div>
  );
}
