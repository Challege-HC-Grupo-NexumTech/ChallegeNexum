import { useState, useEffect } from "react";
import Table from "../components/Table";

interface Paciente {
  id: number;
  nome: string;
  cpf: string;
  nascimento: string;
}

export default function Pacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  // 🔹 Carrega pacientes salvos
  useEffect(() => {
    const saved = localStorage.getItem("pacientes");
    if (saved) setPacientes(JSON.parse(saved));
  }, []);

  // 🔹 Salva sempre que mudar
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !cpf || !nascimento) {
      alert("Preencha todos os campos!");
      return;
    }

    const novo: Paciente = {
      id: editId ?? Date.now(),
      nome,
      cpf,
      nascimento,
    };

    if (editId) {
      setPacientes((prev) => prev.map((p) => (p.id === editId ? novo : p)));
      setEditId(null);
    } else {
      setPacientes((prev) => [...prev, novo]);
    }

    setNome("");
    setCpf("");
    setNascimento("");
  };

  const handleDelete = (id: number) => {
    if (confirm("Deseja excluir este paciente?"))
      setPacientes((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (id: number) => {
    const p = pacientes.find((x) => x.id === id);
    if (!p) return;
    setEditId(id);
    setNome(p.nome);
    setCpf(p.cpf);
    setNascimento(p.nascimento);
  };

  // 🔎 Filtro de busca
  const pacientesFiltrados = pacientes.filter((p) =>
    p.nome.toLowerCase().includes(search)
  );

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Cadastro de Pacientes
      </h2>

      <div className="flex flex-wrap gap-4 mb-4 items-center justify-between">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
          Total: {pacientes.length}
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
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
            className="border rounded-md px-3 py-2"
          />
          <input
            type="date"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            className="border rounded-md px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all"
        >
          {editId ? "Salvar" : "Adicionar Paciente"}
        </button>
      </form>

      <Table headers={["Nome", "CPF", "Nascimento", "Ações"]}>
        {pacientesFiltrados.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center py-4 text-gray-500">
              Nenhum paciente encontrado
            </td>
          </tr>
        ) : (
          pacientesFiltrados.map((p) => (
            <tr key={p.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{p.nome}</td>
              <td className="px-4 py-2">{p.cpf}</td>
              <td className="px-4 py-2">{p.nascimento}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleEdit(p.id)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
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
