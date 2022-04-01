import React from "react";
import { Link } from "react-router-dom";
import { PersonAddOutline, ClipboardOutline, SearchOutline } from "react-ionicons";

const ButtonsClients = () => {
  return (
    <>
      <div className="d-flex justify-content-around my-4 w-100">
        <div className="col-sm-4 col-12 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fw-bolder">Listado de clientes</h5>
              <div className="text-center">
                <ClipboardOutline width={"150px"} height={"150px"} />
              </div>
              <hr className="w-100" />
              <Link
                to="/clientes"
                className="text-decoration-none btn btnP btn-dark"
              >
                Listar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12 d-flex justify-content-center menuBtn">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fw-bolder">Registro de clientes</h5>
              <div className="text-center">
                <PersonAddOutline width={"150px"} height={"150px"} />
              </div>
              <hr className="w-100" />
              <Link
                to="/clientes/registro"
                className="text-decoration-none btnP btn btn-dark"
              >
                Registrar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12 d-flex justify-content-center menuBtn">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fw-bolder">Busqueda de clientes</h5>
              <div className="text-center">
                <SearchOutline width={"150px"} height={"150px"} />
              </div>
              <hr className="w-100" />
              <Link
                to="/clientes/gestion"
                className="text-decoration-none btn btnP btn-dark"
              >
                Buscar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonsClients;
