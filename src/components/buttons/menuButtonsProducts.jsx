import React from "react";
import { Link } from "react-router-dom";
import { BagAddOutline, ClipboardOutline, SearchOutline } from "react-ionicons";

const MenuButtons = () => {
  return (
    <>
      <div className="d-flex justify-content-around my-4">
        <div className="col-sm-4 col-12 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fw-bolder">Lista de productos</h5>
              <div className="text-center">
                <ClipboardOutline width={"150px"} height={"150px"} />
              </div>
              <hr className="w-100" />
              <Link
                to="/productos"
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
              <h5 className="card-title fw-bolder">Registro de productos</h5>
              <div className="text-center">
                <BagAddOutline width={"150px"} height={"150px"} />
              </div>
              <hr className="w-100"/>
              <Link
                to="/productos/registro"
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
              <h5 className="card-title fw-bolder">Busqueda de productos</h5>
              <div className="text-center">
                <SearchOutline width={"150px"} height={"150px"} />
              </div>
              <hr className="w-100"/>
              <Link
                to="/productos/gestion"
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

export default MenuButtons;
