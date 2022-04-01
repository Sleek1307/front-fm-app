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
      <h1 className="text-center mt-4">Lista de Clientes</h1>
      <div className="w-100">
        <MenuButtons />
      </div>
      <div
        className=" p-2 rounded-3 shadow-lg mb-5 w-75"
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
    </>
  );
};

export default ListCostumer;
