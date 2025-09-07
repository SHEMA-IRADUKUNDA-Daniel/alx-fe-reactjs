import { useContext } from "react";
import UserContext from "./UserContext";
const UserProfile = () => {
  const useData = useContext(UserContext);
  return (
    <div>
      <h2>{useData.name}</h2>
      <p>Age: {useData.age}</p>
      <p>Bio :{useData.bio}</p>
    </div>
  );
};

export default UserProfile;
