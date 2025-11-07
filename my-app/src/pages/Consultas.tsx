import { useState, useEffect } from "react";
import Table from "../components/Table";

interface Consulta {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: "Agendada" | "Concluída" | "Cancelada";
}

export default function Consultas() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [paciente, setPaciente] = useState("");
  const [medico, setMedico] = useState("");
  const [data, setData] = useState("");
  const [status, setStatus] = useState<Consulta["status"]>("Agendada");
  const [editId, setEditId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("consultas");
    if (saved) setConsultas(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("consultas", JSON.stringify(consultas));
  }, [consultas]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paciente || !medico || !data) {
      alert("Preencha todos os campos!");
      return;
    }

    const nova: Consulta = {
      id: editId ?? Date.now(),
      paciente,
      medico,
      data,
      status,
    };

    if (editId) {
      setConsultas((prev) => prev.map((c) => (c.id === editId ? nova : c)));
      setEditId(null);
    } else {
      setConsultas((prev) => [...prev, nova]);
    }

    setPaciente("");
    setMedico("");
    setData("");
    setStatus("Agendada");
  };

  const handleEdit = (id: number) => {
    const c = consultas.find((x) => x.id === id);
    if (!c) return;
    setEditId(id);
    setPaciente(c.paciente);
    setMedico(c.medico);
    setData(c.data);
    setStatus(c.status);
  };

  const handleDelete = (id: number) => {
    if (confirm("Deseja excluir esta consulta?"))
      setConsultas((prev) => prev.filter((c) => c.id !== id));
  };

  const consultasFiltradas = consultas.filter((c) =>
    c.paciente.toLowerCase().includes(search)
  );

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Gerenciamento de Consultas
      </h2>

      <div className="flex flex-wrap gap-4 mb-4 items-center justify-between">
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded">
          Total: {consultas.length}
        </span>
        <input
          type="text"
          placeholder="Pesquisar por paciente..."
          className="border rounded-md px-3 py-2"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 mb-8"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
            placeholder="Paciente"
            className="border rounded-md px-3 py-2"
          />
          <input
            value={medico}
            onChange={(e) => setMedico(e.target.value)}
            placeholder="Médico"
            className="border rounded-md px-3 py-2"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="border rounded-md px-3 py-2"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Consulta["status"])}
            className="border rounded-md px-3 py-2"
          >
            <option>Agendada</option>
            <option>Concluída</option>
            <option>Cancelada</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all"
        >
          {editId ? "Salvar" : "Cadastrar Consulta"}
        </button>
      </form>

      <Table headers={["Paciente", "Médico", "Data", "Status", "Ações"]}>
        {consultasFiltradas.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center py-4 text-gray-500">
              Nenhuma consulta encontrada
            </td>
          </tr>
        ) : (
          consultasFiltradas.map((c) => (
            <tr key={c.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{c.paciente}</td>
              <td className="px-4 py-2">{c.medico}</td>
              <td className="px-4 py-2">{c.data}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    c.status === "Agendada"
                      ? "bg-blue-500"
                      : c.status === "Concluída"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleEdit(c.id)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(c.id)}
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
