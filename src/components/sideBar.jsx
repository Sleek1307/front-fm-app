import React from "react";
import { Link } from "react-router-dom";
import {
  PersonOutline,
  ClipboardOutline,
  BagOutline,
  CubeOutline,
  CardOutline,
  PeopleCircleOutline,
  ReceiptOutline,
  HomeOutline,
} from "react-ionicons";

const SideBar = () => {
  return (
    <>
      <div id="sidebar-container">
        <div class="menu border-end w-100 h-100 justify-content-center bg-light">
          <Link
            to="/inicio"
            className="d-flex align-items-center justify-content-center border-bottom"
          >
            <HomeOutline height="50px" width="50px" className="p-2" />
          </Link>

          <Link
            to="/inventario"
            className="d-flex align-items-center justify-content-center border-bottom"
          >
            <ClipboardOutline height="50px" width="50px" className="p-2" />
          </Link>

          <Link
            to="/productos"
            className="d-flex align-items-center justify-content-center border-bottom"
          >
            <CubeOutline height="50px" width="50px" className="p-2" />
          </Link>

          <Link
            to="/clientes"
            class="d-flex align-items-center justify-content-center border-bottom"
          >
            <PersonOutline height="50px" width="50px" className="p-2" />
          </Link>

          <Link
            to="/proveedores"
            class="d-flex align-items-center justify-content-center border-bottom"
          >
            <PeopleCircleOutline height="50px" width="50px" className="p-2" />
          </Link>

          <Link
            to="/creditos"
            class="d-flex align-items-center justify-content-center border-bottom"
          >
            <CardOutline height="50px" width="50px" className="p-2" />
          </Link>

          <Link
            to="/ventas"
            class="d-flex align-items-center justify-content-center border-bottom"
          >
            <BagOutline height="50px" width="50px" className="p-2" />
          </Link>

          <Link
            to="/compras"
            class="d-flex align-items-center justify-content-center border-bottom"
          >
            <ReceiptOutline height="50px" width="50px" className="p-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
