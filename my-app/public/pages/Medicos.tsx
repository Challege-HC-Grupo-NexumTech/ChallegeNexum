import { useState, useEffect } from "react";
import Table from "../components/Table";

interface Medico {
  id: number;
  nome: string;
  especialidade: string;
  crm: string;
}

export default function Medicos() {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [nome, setNome] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [crm, setCrm] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("medicos");
    if (saved) setMedicos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("medicos", JSON.stringify(medicos));
  }, [medicos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !especialidade || !crm) {
      alert("Preencha todos os campos!");
      return;
    }

    const novo: Medico = {
      id: editId ?? Date.now(),
      nome,
      especialidade,
      crm,
    };

    if (editId) {
      setMedicos((prev) => prev.map((m) => (m.id === editId ? novo : m)));
      setEditId(null);
    } else {
      setMedicos((prev) => [...prev, novo]);
    }

    setNome("");
    setEspecialidade("");
    setCrm("");
  };

  const handleDelete = (id: number) => {
    if (confirm("Deseja excluir este médico?"))
      setMedicos((prev) => prev.filter((m) => m.id !== id));
  };

  const handleEdit = (id: number) => {
    const m = medicos.find((x) => x.id === id);
    if (!m) return;
    setEditId(id);
    setNome(m.nome);
    setEspecialidade(m.especialidade);
    setCrm(m.crm);
  };

  const medicosFiltrados = medicos.filter((m) =>
    m.nome.toLowerCase().includes(search)
  );

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Cadastro de Médicos
      </h2>

      <div className="flex flex-wrap gap-4 mb-4 items-center justify-between">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded">
          Total: {medicos.length}
        </span>
        <input
          type="text"
          placeholder="Pesquisar por nome..."
          className="border rounded-md px-3 py-2"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 mb-8"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            className="border rounded-md px-3 py-2"
          />
          <input
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            placeholder="Especialidade"
            className="border rounded-md px-3 py-2"
          />
          <input
            value={crm}
            onChange={(e) => setCrm(e.target.value)}
            placeholder="CRM"
            className="border rounded-md px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all"
        >
          {editId ? "Salvar" : "Adicionar Médico"}
        </button>
      </form>

      <Table headers={["Nome", "Especialidade", "CRM", "Ações"]}>
        {medicosFiltrados.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center py-4 text-gray-500">
              Nenhum médico encontrado
            </td>
          </tr>
        ) : (
          medicosFiltrados.map((m) => (
            <tr key={m.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{m.nome}</td>
              <td className="px-4 py-2">{m.especialidade}</td>
              <td className="px-4 py-2">{m.crm}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleEdit(m.id)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(m.id)}
                  className="text-red-600 hover:underline"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))
        )}
      </Table>
    </section>
  );
}

