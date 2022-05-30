import React, { useState, useEffect } from "react";
import MenuButtons from "../buttons/menuButtonsClientes";
import { getAllCostumers } from "../../services/costumer.services";

const ListCostumer = () => {
  const [costumers, setCostumers] = useState([]);

  useEffect(() => {
    getAllCostumers().then((items) => {
      setCostumers(items.data);
    }, []);
  }, []);

  return (
    <>
      <div className="w-100 px-3 d-flex flex-column align-items-center">
        <h1 className="text-center text-uppercase">lista de Clientes</h1>
        <div className="d-flex w-100">
          <div
            className="p-2 rounded-3 shadow-md w-75 border"
            style={{ height: "475px" }}
          >
            <div class="tb overflow-auto rounded-3" style={{ height: "400px" }}>
              <table class="table table-bordered overflow-auto">
                <thead>
                  <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Detalles</th>
                  </tr>
                </thead>
                <tbody>
                  {costumers.map((item) => {
                    return (
                      <tr>
                        <td>{item.idCostumer}</td>
                        <td>{item.nameCostumer}</td>
                        <td>{item.addres}</td>
                        <td>{item.numberCostumer}</td>
                        <td>
                          <a href="#" className="text-dark">
                            ver mas...
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-25">
            <MenuButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCostumer;
