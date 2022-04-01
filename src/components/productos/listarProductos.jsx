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
      <div className="d-flex flex-column align-items-center w-100">
        <h1 className="text-center mt-4">Lista de productos</h1>
        <div className="w-100">
          <MenuButtons />
        </div>
        <div
          className="p-2 mb-5 rounded-3 w-75 shadow-lg"
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
      </div>
    </>
  );
};

export default Lista;
