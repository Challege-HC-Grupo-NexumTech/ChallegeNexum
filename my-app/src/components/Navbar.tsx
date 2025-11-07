import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle =
    "px-4 py-2 rounded-md font-medium transition-all hover:bg-blue-100 hover:text-blue-700";
  const activeStyle = "bg-blue-600 text-white";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-all"
        >
          Nexum Tech
        </Link>

        {/* LINKS */}
        <div className="flex gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }: { isActive: boolean }) =>
              `${linkStyle} ${isActive ? activeStyle : "text-gray-700"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pacientes"
            className={({ isActive }: { isActive: boolean }) =>
              `${linkStyle} ${isActive ? activeStyle : "text-gray-700"}`
            }
          >
            Pacientes
          </NavLink>

          <NavLink
            to="/medicos"
            className={({ isActive }: { isActive: boolean }) =>
              `${linkStyle} ${isActive ? activeStyle : "text-gray-700"}`
            }
          >
            Médicos
          </NavLink>

          <NavLink
            to="/consultas"
            className={({ isActive }: { isActive: boolean }) =>
              `${linkStyle} ${isActive ? activeStyle : "text-gray-700"}`
            }
          >
            Consultas
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
