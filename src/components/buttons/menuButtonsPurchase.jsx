import React from "react";
import { Link } from "react-router-dom";

const MenuPurchase = () => {
  return (
    <div className="w-100 h-100 p-2 ms-2 h-100 border shadow-md rounded-3">
      <Link to="/compras" className="m-0 text-decoration-none text-dark">
        <div
          className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3 border-end"
          style={{ height: "50px" }}
        >
          <i class="bg-light fs-2 px-2 me-3 border-end bi bi-list-ol"></i>
          Compras
        </div>
      </Link>

      <Link
        to="/compras/registro"
        className="m-0 text-decoration-none text-dark"
      >
        <div
          className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3 border-end"
          style={{ height: "50px" }}
        >
          <i class="bg-light fs-2 px-2 me-3 border-end bi bi-search"></i>
          Registrar compra
        </div>
      </Link>
    </div>
  );
};

export default MenuPurchase;
