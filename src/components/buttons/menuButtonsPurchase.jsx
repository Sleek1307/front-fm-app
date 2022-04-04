import React from "react";
import { Link } from "react-router-dom";
import {ClipboardOutline, BagAddOutline,} from "react-ionicons";

const MenuPurchase = () => {
  return (
    <div className="d-flex justify-content-around my-4">
      <div className="col-sm-4 col-12 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fw-bolder">Lista de compras</h5>
            <div className="text-center">
              <ClipboardOutline width={"150px"} height={"150px"} />
            </div>
            <hr className="w-100" />
            <Link
              to="/compras"
              className="text-decoration-none btn btnP btn-dark"
            >
              Compras
            </Link>
          </div>
        </div>
      </div>

      <div className="col-sm-4 col-12 d-flex justify-content-center menuBtn">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fw-bolder text-truncate|">Registro de compras</h5>
            <div className="text-center">
              <BagAddOutline width={"150px"} height={"150px"} />
            </div>
            <hr className="w-100" />
            <Link
              to="/compras/registro "
              className="text-decoration-none btn btnP btn-dark"
            >
              Registrar compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPurchase;
