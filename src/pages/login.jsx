import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
        <div
          id="log-container"
          className="d-flex flex-column justify-content-center align-items-center shadow-lg p-4"
          style={{ width: "400px" }}
        >
          <div>
            <h1>Inicio de sesion</h1>
          </div>

          <form action="" className="w-100">
            <div className="w-100">
              <div className="mb-3">
                <label htmlFor="" for="userInput" className="form-label h6">
                  Username:
                </label>
                <input type="email" className="form-control" id="userInput" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label h6">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="w-100 text-center">
                <Link to="/inicio" className="btn btn-dark">
                  Iniciar sesion
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
