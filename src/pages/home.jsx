import React, { useState } from "react";
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
import moment from 'moment'

const Home = () => {

  const [time, setTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))

  setInterval(() => {
    setTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }, 1000);

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
        <div className="my-4" style={{ width: "85%", height: "35%" }}>
          <div class="card">
            <div class="card-header fw-bolder">Administrative dashboard</div>
            <div class="card-body">
              <h5 class="card-title">Hi, welcome John Doe</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <p>{time}</p>
            </div>
          </div>
        </div>
        {/* Primera fila */}

        <div className="grid-container">
          <div className="grid-item">
            <div class="card card-up" style={{ width: "15rem" }}>
              <div className="my-2 ms-3">
                <h5 class="card-title fw-bolder">Inventario</h5>
                <div className="text-center">
                  <ClipboardOutline width={"140px"} height={"140px"} />
                </div>
              </div>
              <div className="card-body">
                <hr className="m-0 mb-2" />
                <Link to="/inventario" class="btn btnP btn-outline-dark">
                  Inventario
                </Link>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="card card-up" style={{ width: "15rem" }}>
              <div className="my-2 ms-3">
                <h5 class="card-title fw-bolder">Productos</h5>
                <div className="text-center">
                  <CubeOutline width={"140px"} height={"140px"} />
                </div>
              </div>
              <div class="card-body">
                <hr className="m-0 mb-2" />
                <Link to="/productos" class="btn btnP btn-outline-dark">
                  Productos
                </Link>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <div class="card card-up" style={{ width: "15rem" }}>
              <div className="my-2 ms-3">
                <h5 class="card-title fw-bolder">Ventas</h5>
                <div className="text-center">
                  <BagOutline width={"140px"} height={"140px"} />
                </div>
              </div>
              <div className="card-body">
                <hr className="m-0 mb-2" />
                <Link to="/ventas" class="btn btnP btn-outline-dark">
                  Ventas
                </Link>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="card card-up" style={{ width: "15rem" }}>
              <div className="my-2 ms-3">
                <h5 class="card-title fw-bolder">Clientes</h5>

                <div className="text-center">
                  <PersonOutline width={"140px"} height={"140px"} />
                </div>
              </div>
              <div className="card-body">
                <hr className="m-0 mb-2" />
                <Link to="/clientes" class="btn btnP btn-outline-dark">
                  Clientes
                </Link>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="card card-up" style={{ width: "15rem" }}>
              <div className="my-2 ms-3">
                <h5 class="card-title fw-bolder">Proveedores</h5>

                <div className="text-center">
                  <PeopleCircleOutline width={"140px"} height={"140px"} />
                </div>
              </div>
              <div className="card-body">
                <hr className="m-0 mb-2" />
                <Link to="/proveedores" class="btn btnP btn-outline-dark">
                  Proveedores
                </Link>
              </div>
            </div>
          </div>
          {/* Primera fila */}
          <div className="grid-item">
            <div class="card card-up" style={{ width: "15rem" }}>
              <img class="card-img-top" />
              <div className="my-2 ms-3">
                <h5 class="card-title fw-bolder">Creditos</h5>

                <div className="text-center">
                  <CardOutline width={"140px"} height={"140px"} />
                </div>
              </div>
              <div className="card-body">
                <hr className="m-0 mb-2" />
                <Link to="/creditos" class="btn btnP btn-outline-dark">
                  Creditos
                </Link>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div class="card card-up" style={{ width: "15rem" }}>
              <img class="card-img-top" />
              <div className="my-2 ms-3">
                <h5 class="card-title fw-bolder">Compras</h5>
                <div className="text-center">
                  <ReceiptOutline width={"140px"} height={"140px"} />
                </div>
              </div>
              <div className="card-body">
                <hr className="m-0 mb-2" />
                <Link to="/compras" className="btn btnP btn-outline-dark">
                  Compras
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
