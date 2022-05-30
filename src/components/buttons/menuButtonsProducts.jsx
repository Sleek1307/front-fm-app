import React from "react";
import { Link } from "react-router-dom";

const MenuButtons = () => {
  return (
    <>
      <div className="w-100 h-100 p-2 ms-2 border shadow-md rounded-3">
        <Link to="/productos" className="m-0 text-decoration-none text-dark">
          <div
            className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3"
            style={{ height: "50px" }}
          >
            <i className="bg-light fs-2 px-2 me-3 border-end bi bi-list-ol"></i>
            Lista de productos
          </div>
        </Link>
        <Link
          to="/productos/registro"
          className="m-0 text-decoration-none text-dark"
        >
          <div
            className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3"
            style={{ height: "50px" }}
          >
            <i class="bg-light fs-2 px-2 me-3 border-end bi bi-bag-plus"></i>
            Registro de productos
          </div>
        </Link>
        <Link
          to="/productos/inventario"
          className="m-0 text-decoration-none text-dark"
        >
          <div
            className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3"
            style={{ height: "50px" }}
          >
            <i class="bg-light fs-2 px-2 me-3 border-end bi bi-clipboard"></i>
            Inventario
          </div>
        </Link>
        <Link
          to="/productos/gestion"
          className="m-0 text-decoration-none text-dark"
        >
          <div
            className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3"
            style={{ height: "50px" }}
          >
            <i class="bg-light fs-2 px-2 me-3 border-end bi bi-search"></i>
            Busqueda de productos
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuButtons;
