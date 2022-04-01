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
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="w-75">
          <h1 className="text-center mt-4">Ventas</h1>
        </div>

        <div className="w-75">
          <MenuButtons />
        </div>

        <div className="p-2 rounded-3 shadow-lg m-4 mb-5 w-75">
          <div class="tb overflow-auto rounded-3" style={{ height: "450px" }}>
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
                      <td>{item.valorTotal}</td>
                      <td>{item.dateSale.split("").splice(0, 10).join("")}</td>
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
      </div>
    </>
  );
};

export default ListVentas;
