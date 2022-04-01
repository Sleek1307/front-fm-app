import React from "react";
import { Link } from "react-router-dom";
import { ClipboardOutline, BagAddOutline } from "react-ionicons";

const ButtonsSale = () => {
  return (
    <>
      <div className="d-flex justify-content-around my-5">
        <div className="col-md-4 col-12 d-flex justify-content-center menuBtn">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title fw-bolder">Lista de ventas</h5>
              <div className="text-center">
                <ClipboardOutline width={'150px'} height={'150px'}/>
              </div>
              <hr />
              <Link
                to="/ventas"
                className="text-decoration-none btn btnP btn-dark"
              >
                Listar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 d-flex justify-content-center menuBtn">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title fw-bolder">Registro de ventas</h5>
              <div className="text-center">
                <BagAddOutline width={'150px'} height={'150px'}/>
              </div>
              <hr />
              <Link
                to="/ventas/registro"
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

export default ButtonsSale;
