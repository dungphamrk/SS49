import React from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
    const users = [
        { id: 1, name: "Dũng" },
        { id: 2, name: "Nam" },
        { id: 3, name: "Nghĩa" }
      ];
  return (
    <div>
    <h2>Users:</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`/UserDetail/${user.id}/${user.name}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  );
}
