import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div
        id="sidebar-container"
        className="d-flex flex-column justify-content-center"
      >
        <div class="menu border-end w-100 h-100  bg-light">
          <Link
            to="/inicio"
            className="d-flex align-items-center justify-content-center border-bottom tooltip-2"
          >
            <i
              class="text-dark bi bi-house p-1 px-2"
              style={{ fontSize: "41px" }}
            ></i>
            <span className="tooltip-box fs-6">Inicio</span>
          </Link>

          <Link
            to="/productos"
            className="d-flex align-items-center justify-content-center border-bottom tooltip-2"
          >
            <i class="text-dark bi bi-archive" style={{ fontSize: "41px" }}></i>
            <span className="tooltip-box fs-6">Productos</span>
          </Link>

          <Link
            to="/clientes"
            class="d-flex align-items-center justify-content-center border-bottom tooltip-2"
          >
            <i
              className="text-dark bi bi-person p-1"
              style={{ fontSize: "41px" }}
            ></i>
            <span className="tooltip-box fs-6">Clientes</span>
          </Link>

          <Link
            to="/proveedores"
            class="d-flex align-items-center justify-content-center border-bottom tooltip-2"
          >
            <i
              className="text-dark bi bi-people p-1"
              style={{ fontSize: "41px" }}
            ></i>
            <span className="tooltip-box fs-6">Proveedores</span>
          </Link>

          <Link
            to="/creditos"
            class="d-flex align-items-center justify-content-center border-bottom tooltip-2"
          >
            <i
              class="text-dark bi bi-credit-card"
              style={{ fontSize: "41px" }}
            ></i>
            <span className="tooltip-box fs-6">Creditos</span>
          </Link>

          <Link
            to="/compras"
            class="d-flex align-items-center justify-content-center border-bottom tooltip-2"
          >
            <i
              className="text-dark bi bi-receipt p-1"
              style={{ fontSize: "41px" }}
            ></i>
            <span className="tooltip-box fs-6">Compras</span>
          </Link>

          <Link
            to="/ventas"
            class="d-flex align-items-center justify-content-center border-bottom tooltip-2"
          >
            <i
              className="text-dark bi bi-bag p-1"
              style={{ fontSize: "41px" }}
            ></i>
            <span className="tooltip-box fs-6">Ventas</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
