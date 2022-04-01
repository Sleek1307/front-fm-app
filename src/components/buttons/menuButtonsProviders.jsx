import React from "react";
import { Link } from "react-router-dom";
import {ClipboardOutline, PersonAdd} from 'react-ionicons'

const ButtonsProvider = () => {
  return (
    <>
      <div className="d-flex justify-content-between my-4">
        <div className="col-sm-4 col-12 d-flex justify-content-center menuBtn">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fw-bolder">Lista de proveedores</h5>
              <div className="text-center">
                <ClipboardOutline width={"150px"} height={"150px"} />
              </div>
              <hr className="w-100" />
              <Link
                to="/proveedores"
                className="text-decoration-none btn btnP btn-dark"
              >
                Proveedores
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12 d-flex justify-content-center menuBtn">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fw-bolder">Registro de proveedores</h5>
              <div className="text-center">
                <PersonAdd width={"150px"} height={"150px"} />
              </div>
              <hr className="w-100" />
              <Link
                to="/proveedor/registro"
                className="text-decoration-none btn btnP btn-dark"
              >
                Registrar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonsProvider;
