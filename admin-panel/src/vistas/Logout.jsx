const Logout = () => {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: "#67b939", color: "white" }}>
        <h2>Logout</h2>
      </div>
      <div className="card-body">
        <p>Has cerrado sesión correctamente.</p>
        <button className="btn" style={{ backgroundColor: "#67b939", color: "white" }}>
          Volver a iniciar sesión
        </button>
      </div>
    </div>
  )
}

export default Logout