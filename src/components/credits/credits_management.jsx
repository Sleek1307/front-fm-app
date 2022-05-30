import React from "react";
import MenuCredits from "../buttons/menuButtonsCredits";

const CreditsManagement = () => {
  return (
    <>
      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center mb-3">
        <h1 className="w-100 ps-3 m-0">Gestión de creditos</h1>
        <div className="w-100 d-flex px-3">
          <div
            className="w-75 border rounded-3 shadow-md"
            style={{ height: "475px"}}
          >
            <div
              className="d-flex w-100 border rounded-3"
              style={{ height: "15%" }}
            >
              <div className="mx-2 w-25 h-100 border-end">
                <form className="w-100 h-100 d-flex">
                  <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <input
                      type="text"
                      className="w-100 me-2 form-control"
                      placeholder="Creditos"
                    />
                    <button className="btn btn-light btn-outline-dark border me-2">
                      <i class="bi bi-search"></i>
                    </button>
                  </div>
                </form>
              </div>

              <div className="w-50 d-flex align-items-center">
                <select className="w-50 me-1 form-select text-truncate">
                  <option value="">Fecha de inicio</option>
                </select>
                -
                <select
                  className="w-50 ms-1 form-select text-truncate"
                  name=""
                  id=""
                >
                  <option value="">Fecha de fin</option>
                </select>
                <i class="ms-5 d-flex align-items-center bi bi-info-square fs-3"></i>
              </div>
            </div>

            <table
              className="mt-2 table table-bordered w-75 overflow-auto"
              style={{ height: "150ox" }}
            >
              <thead>
                <tr className="text-center">
                  <th>Cliente</th>
                  <th>Credito</th>
                  <th>Valor</th>
                  <th>Fecha</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>Peranito</td>
                  <td>02</td>
                  <td>55000</td>
                  <td>22/04/2022</td>
                  <td>
                    <button className="btn btn-light btn-outline-dark">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                  </td>
                </tr>
                <tr className="h-25 text-center">
                  <td>Peranito</td>
                  <td>02</td>
                  <td>55000</td>
                  <td>22/04/2022</td>
                  <td>
                    <button className="btn btn-light btn-outline-dark">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              className="w-100 mt-2 p-1 border rounded-3"
              style={{ height: "180px" }}
            >

              <div className="w-25 overflow-auto h-100">
                <table className="w-100 text-center table table-bordered">
                  <thead className="">
                    <tr>
                      <th colSpan="2">Datos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cliente</td>
                      <td>Peranito</td>
                    </tr>
                    <tr className="align-baseline">
                      <td>Fecha</td>
                      <td>22/04/2022</td>
                    </tr>
                    <tr className="align-baseline">
                      <td>Venta</td>
                      <td>02</td>
                    </tr>
                    <tr className="align-baseline">
                      <td>Monto total</td>
                      <td>55000</td>
                    </tr>
                    <tr className="align-baseline">
                      <td>Monto pagado</td>
                      <td>25000</td>
                    </tr>
                    <tr className="align-baseline">
                      <td>Monto debido</td>
                      <td>30000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-25">
            <MenuCredits />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditsManagement;
