import { Link } from "react-router-dom";
import "./login.css";
import videoBg from "./assets/videoBg.mp4";

const Login = () => {
   
  return (
    <>
      <div className="video-fondo">
        <video src={videoBg} autoPlay loop muted />
      </div>
      
      <div className="login template d-flex justify-content-center align-items-center vh-100 ">
        <div className="form_container p-5  bg-white">
          <form>
            <h3 className="text-center">Ingresa a tu cuenta</h3>
            <div className="mb-2">
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                placeholder="Escribe tu Email"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password"> Contraseña</label>
              <input
                type="password"
                placeholder="Escribe tu contraseña"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
              />
              <label htmlFor="check" className="custom-input-label ms-2">
                Recuerdame
              </label>
            </div>
            <div className="d-grid">
              <button className="btn-bg"> Entrar</button>
            </div>
            <p className="text-end mt-2">
              No estas registrado?
              <Link to="/signup" className="ms-2 link_color" >
                
                Registrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
