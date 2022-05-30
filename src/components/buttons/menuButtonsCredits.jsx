import React from "react";
import { Link } from "react-router-dom";

const MenuCredits = () => {
  return (
    <>
      <div className="w-100 p-3 ms-2 h-100 border shadow-md rounded-3">
        <Link to="/creditos" className="m-0 text-decoration-none text-dark">
          <div
            className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3"
            style={{ height: "50px" }}
          >
            <i className="bg-light fs-2 px-2 me-3 border-end bi bi-list-ol"></i>
            Lista de creditos
          </div>
        </Link>
        <Link to="/creditos/gestion" className="m-0 text-decoration-none text-dark">
          <div
            className="pointer w-100 border my-2 fs-5 d-flex align-items-center rounded-3"
            style={{ height: "50px" }}
          >
            <i className="bg-light fs-2 px-2 me-3 border-end bi bi-credit-card"></i>
            Gestion de creditos
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuCredits;
