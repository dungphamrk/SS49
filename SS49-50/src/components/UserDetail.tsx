import React from "react";
import { useParams } from "react-router-dom";

interface User {
  id: string;
  name: string;
}

const UserDetail: React.FC = () => {
  let { userId,userName } = useParams<{ userId: string ,userName:string}>();
  const user: User = {
    id: userId||"",
    name: userName||"",
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {user.id}</p>
      <p>User Name: {user.name}</p>
    </div>
  );
};

export default UserDetail;
