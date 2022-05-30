import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../services/products.services.js";
import MenuButtons from "../buttons/menuButtonsProducts";

const Lista = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(({ data }) => {
      setProducts(data[0]);
    }, []);
  }, []);

  return (
    <>
      <div className="d-flex flex-column align-items-center w-100 px-3 mb-1">
        <h1 className="text-center text-uppercase">lista de productos</h1>
        <div className="d-flex w-100">
          <div
            className="p-2 border rounded-3 w-75 shadow-md"
            style={{ height: "475px" }}
          >
            <div
              className="mb-5 pb-3 rounded-3 overflow-auto"
              style={{ height: "400px" }}
            >
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Cantidad llena</th>
                    <th scope="col">Cantidad vacia</th>
                    <th scope="col">Cantidad total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => {
                    return (
                      <tr>
                        <th>{p.idProduct}</th>
                        <th>{p.description}</th>
                        <th>{p.fullAmount}</th>
                        <th>{p.voidAmount}</th>
                        <th>{p.amount}</th>
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

export default Lista;
