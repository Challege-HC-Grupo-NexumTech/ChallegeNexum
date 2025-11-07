import React from "react";
import { Link } from "react-router-dom";
import { User } from "../types/User";

const users: User[] = [
  { id: 1, name: "Alice", active: true, age: 23 },
  { id: 2, name: "Bruno", active: false, age: 30 },
  { id: 3, name: "Carla", active: true, age: 27 },
];

const Users: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <ul className="space-y-2">
        {users.map(u => (
          <li key={u.id} className="p-3 bg-white rounded shadow-sm flex justify-between items-center">
            <div>
              <div className="font-medium">{u.name}</div>
              <div className="text-sm text-gray-500">idade: {u.age} — {u.active ? "Ativo" : "Inativo"}</div>
            </div>
            <Link to={`/users/${u.id}`} className="text-blue-600 underline">Detalhes</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Users;
