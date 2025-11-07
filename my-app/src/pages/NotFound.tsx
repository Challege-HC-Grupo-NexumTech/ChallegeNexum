// About.tsx
import React from "react";
const About: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold">About</h2>
    <p>Informações do projeto > Sprint 03.</p>
  </section>
);
export default About;

// NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";
const NotFound: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold">404 - Página não encontrada</h2>
    <Link to="/" className="text-blue-600 underline">Ir para Home</Link>
  </section>
);
export default NotFound;
