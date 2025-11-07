import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Home</h2>
      <p>Bem vindo ao projeto de Sprint 03 (Vite + React + TypeScript).</p>
      <Link to="/users" className="inline-block mt-4 underline">Ver usuários</Link>
    </section>
  );
};

export default Home;
