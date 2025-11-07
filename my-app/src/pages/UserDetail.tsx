import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { User } from "../types/User";

const fakeFetchUser = (id: number): User | null => {
  const db: User[] = [
    { id: 1, name: "Alice", active: true, age: 23 },
    { id: 2, name: "Bruno", active: false, age: 30 },
    { id: 3, name: "Carla", active: true, age: 27 },
  ];
  return db.find(u => u.id === id) ?? null;
};

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // tratar caso id indefinido / inválido
  const numericId = Number(id);
  if (!id || Number.isNaN(numericId)) {
    return (
      <div>
        <h2 className="text-xl font-semibold">ID inválido</h2>
        <p>O parâmetro passado não é um número válido.</p>
        <button className="mt-3 px-3 py-2 border rounded" onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }

  const user = fakeFetchUser(numericId);

  if (!user) {
    return (
      <div>
        <h2 className="text-xl font-semibold">Usuário não encontrado</h2>
        <p>Nenhum usuário com id {numericId}.</p>
        <button className="mt-3 px-3 py-2 border rounded" onClick={() => navigate("/users")}>Voltar pra lista</button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p>Id: {user.id}</p>
      <p>Idade: {user.age}</p>
      <p>Status: {user.active ? "Ativo" : "Inativo"}</p>
      <button className="mt-4 px-3 py-2 border rounded" onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default UserDetail;
