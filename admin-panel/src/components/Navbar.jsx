import { NavLink } from "react-router-dom"
import { Building } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#67b939" }}>
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src="/Logo.png" alt="Logo" className="logo-img" width="120" height="70" />

          <span className="ms-2 text-white fw-bold">Panel administrativo con React JS</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/clientes"
                className={({ isActive }) => (isActive ? "nav-link active fw-bold text-white" : "nav-link text-white")}
              >
                Clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/proveedor"
                className={({ isActive }) => (isActive ? "nav-link active fw-bold text-white" : "nav-link text-white")}
              >
                Proveedor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/usuarios"
                className={({ isActive }) => (isActive ? "nav-link active fw-bold text-white" : "nav-link text-white")}
              >
                Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/logout"
                className={({ isActive }) => (isActive ? "nav-link active fw-bold text-white" : "nav-link text-white")}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
