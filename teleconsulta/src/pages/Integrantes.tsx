import React, { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Integrantes() {
  const [integrantes, setIntegrantes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntegrantes([
        { nome: "Pamella Christiny", rm: "565206", funcao: "Frontend & UX" },
        { nome: "Felipe Ribeiro", rm: "565224", funcao: "Backend & Integração" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Carregando integrantes...</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-accent mb-6">Integrantes</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {integrantes.map((i) => (
          <Card key={i.rm} title={i.nome}>
            <p>RM: {i.rm}</p>
            <p>Função: {i.funcao}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
