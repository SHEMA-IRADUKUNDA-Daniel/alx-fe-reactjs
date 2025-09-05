import { useContext } from "react";

function UserDetails({ userData }) {
  const UserContext = useContext(userData);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
