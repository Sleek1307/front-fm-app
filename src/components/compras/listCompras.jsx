import React, { useState } from "react";
import { useEffect } from "react";
import { getAllPurchases } from "../../services/purchases.services";
import MenuPurchase from "../buttons/menuButtonsPurchase";

const ListCompra = () => {
  const [purchases, setPurchase] = useState([]);

  useEffect(() => {
    getAllPurchases().then((items) => {
      console.log(items.data);
      setPurchase(items.data);
    }, []);
  }, []);

  var n = 0;

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="w-75">
          <h1 className="text-center mt-4">Compras</h1>
        </div>

        <div className="w-75">
          <MenuPurchase/>
        </div>

        <div className="p-2 rounded-3 shadow-lg w-75 overflow-auto mb-5">
          <div
            className="tb overflow-auto rounded-3"
            style={{ height: "450px" }}
          >
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Proveedor</th>
                  <th scope="col">Valor total</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">detalles</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((e) => {
                  return (
                    <tr>
                      <th>{n++}</th>
                      <th>{e.idPurchase}</th>
                      <th>{e.nameProvider}</th>
                      <th>{e.costPurchase}</th>
                      <th>{e.date.split("T")[0]}</th>
                      <th className="text-center">
                        <a className="text-dark" href="">
                          ver mas...
                        </a>
                      </th>
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

export default ListCompra;
