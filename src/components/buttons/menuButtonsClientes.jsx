import React from "react";
import { Link } from "react-router-dom";
import {
  PersonAddOutline,
  ClipboardOutline,
  SearchOutline,
} from "react-ionicons";

const ButtonsClients = () => {
  return (
    <>
      <div className="w-100 h-100 ms-2 p-2 border shadow-md rounded-3">
        <Link to="/clientes" className="m-0 text-decoration-none text-dark">
          <div
            className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3 border-end"
            style={{ height: "50px" }}
          >
            <i className="bg-light fs-2 px-2 me-3 border-end bi bi-file-earmark-person"></i>
            <span>Clientes</span>
          </div>
        </Link>
        <Link
          to="/clientes/gestion"
          className="m-0 text-decoration-none text-dark"
        >
          <div
            className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3 border-end"
            style={{ height: "50px" }}
          >
            <i className="bg-light fs-2 px-2 me-3 border-end bi bi-person-badge"></i>
            Gestionar clientes
          </div>
        </Link>
        <Link
          to="/clientes/registro"
          className="m-0 text-decoration-none text-dark"
        >
          <div
            className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3 border-end"
            style={{ height: "50px" }}
          >
            <i className="bg-light fs-2 px-2 me-3 border-end bi bi-plus"></i>
            <span>Nuevo cliente</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ButtonsClients;
