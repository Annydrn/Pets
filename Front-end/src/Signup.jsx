import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="form_container p-5 rounded bg-white">
          <form>
            <h3 className="text-center">Crea tu cuenta</h3>
            <div className="mb-2">
              <label htmlFor="firstname"> Nombre</label>
              <input type="text" placeholder="Escribe tu nombre" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="lastname"> Apellido</label>
              <input type="text" placeholder="Escribe tu apellido" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="email"> Email</label>
              <input type="email" placeholder="Escribe tu Email" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="password"> Contraseña</label>
              <input type="password" placeholder="Escribe tu contraseña" className="form-control" />
            </div>
        
            <div className="d-grid mt-3">
              <button className="btn btn-primary"> Entrar</button>
            </div>
            <p className="text-end mt-2">
           Registro Completado
              <Link to="/" className="ms-2">Iniciar Sesión</Link>
            </p>
          </form>
        </div>
      </div>
  )
}

export default Signup