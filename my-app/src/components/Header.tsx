import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ← Aqui também

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="p-4 bg-white shadow flex justify-between">
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <button
          onClick={() => navigate("/old-about")}
          className="border px-2 py-1 rounded"
        >
          Ir para About (redirecionamento)
        </button>
      </nav>
    </header>
  );
};

export default Header;
