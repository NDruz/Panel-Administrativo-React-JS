import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Clientes from "./vistas/Clientes"
import Proveedor from "./vistas/Proveedor"
import Usuarios from "./vistas/Usuarios"
import Logout from "./vistas/Logout"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Clientes />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/proveedor" element={<Proveedor />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
