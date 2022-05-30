import React from "react";
import { Link } from "react-router-dom";

const ButtonsProvider = () => {
  return (
    <>
      <div className="w-100 h-100 p-2 ms-2 border shadow-md rounded-3">
        <Link to="/proveedores" className="m-0 text-decoration-none text-dark">
          <div className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3">
            <i class="bg-light fs-2 px-2 me-3 border-end bi bi-file-person"></i>
            <span>Proveedores</span>
          </div>
        </Link>
        <Link
          to="/proveedores/gestion"
          className="m-0 text-decoration-none text-dark"
        >
          <div className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3">
            <i class="bg-light fs-2 px-2 me-3 border-end bi bi-person-badge"></i>
            <span>Gestionar proveedor</span>
          </div>
        </Link>
        <Link
          to="/proveedores/agregar"
          className="m-0 text-decoration-none text-dark"
        >
          <div className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3">
            <i class="bg-light fs-2 px-2 me-3 border-end bi bi-plus"></i>
            <span>Nuevo proveedor</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ButtonsProvider;
