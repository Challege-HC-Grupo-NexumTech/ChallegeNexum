import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import necessário

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // redireciona para a página inicial
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Sobre o Projeto</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Este sistema foi desenvolvido como parte do <strong>Challenge Nexum</strong>,
          com o objetivo de demonstrar navegação, gerenciamento de rotas e boas práticas
          no desenvolvimento de aplicações React modernas.
        </p>

        <p className="text-gray-600 mb-6">
          O projeto utiliza tecnologias como:
          <ul className="list-disc list-inside text-left mt-2">
            <li>React + TypeScript</li>
            <li>React Router DOM</li>
            <li>TailwindCSS</li>
            <li>Vite ou Create React App (dependendo da sua estrutura)</li>
          </ul>
        </p>

        <button
          onClick={handleGoHome}
          className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default About;
