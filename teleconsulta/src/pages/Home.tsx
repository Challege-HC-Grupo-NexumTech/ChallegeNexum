import { Link } from "react-router-dom";
import { Stethoscope, Users, CalendarDays } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center text-center px-4 py-20">
      {/* Cabeçalho principal */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">
        Nexum Tech
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
        Sistema de Teleconsultas Ágata 💙
      </h2>
      <p className="text-gray-600 max-w-2xl mb-10">
        Conectando pacientes e profissionais da saúde de forma prática e
        acessível. Gerencie atendimentos, cadastre médicos e mantenha o cuidado
        na palma da sua mão.
      </p>

      {/* Botão principal */}
      <Link
        to="/consultas"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-md"
      >
        Acessar Consultas
      </Link>

      {/* Seção de atalhos */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl">
        {/* Card 1 */}
        <Link
          to="/pacientes"
          className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100"
        >
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Pacientes
          </h3>
          <p className="text-gray-500 text-sm">
            Cadastre, edite e gerencie informações dos pacientes.
          </p>
        </Link>

        {/* Card 2 */}
        <Link
          to="/medicos"
          className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100"
        >
          <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Médicos
          </h3>
          <p className="text-gray-500 text-sm">
            Gerencie a equipe médica, especialidades e CRM.
          </p>
        </Link>

        {/* Card 3 */}
        <Link
          to="/consultas"
          className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-100"
        >
          <CalendarDays className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Consultas
          </h3>
          <p className="text-gray-500 text-sm">
            Visualize, agende e gerencie as consultas com facilidade.
          </p>
        </Link>
      </div>
    </section>
  );
}
