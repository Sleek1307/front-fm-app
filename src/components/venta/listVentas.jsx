import React, { useEffect, useState } from "react";
import { getAllSales } from "../../services/sales.services";
import MenuButtons from "../buttons/menuButtonsSale";

const ListVentas = () => {
  const [sales, setSales] = useState([]);
  var no = 0;

  useEffect(() => {
    getAllSales().then((items) => {
      setSales(items.data);
    }, []);
  }, []);

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center px-3 mb-1">
        <h1 className="text-center text-uppercase">ventas</h1>
        <div className="d-flex w-100">
          <div
            className="p-2 border rounded-3 w-75 shadow-md"
            style={{ height: "475px" }}
          >
            <div class="tb overflow-auto rounded-3" style={{ height: "400px" }}>
              <table class="table table-bordered overflow-auto">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Valor total</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">detalles</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{++no}</th>
                        <td>{item.idSale}</td>
                        <td>{item.nameCostumer}</td>
                        <td>{item.valor}</td>
                        <td>{item.date.split("").splice(0, 10).join("")}</td>
                        <td>
                          <a href="">ver mas...</a>
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

export default ListVentas;
