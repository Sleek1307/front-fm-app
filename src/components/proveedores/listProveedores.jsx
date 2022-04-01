import React, { useState, useEffect } from "react";
import { getAllProviders } from "../../services/providers.services";
import MenuButtons from "../buttons/menuButtonsProviders";

const ListProveedores = () => {
  const [providers, setProvider] = useState([]);
  var no = 0;

  useEffect(() => {
    getAllProviders().then((items) => {
      setProvider(items.data);
    }, []);
  }, []);

  return (
    <>
      <div className="w-75 d-flex flex-column align-items-center">
        <h1 className="text-center my-4">Proveedores </h1>
        <div className="w-100">
          <MenuButtons/>
        </div>
        <div className="p-2 rounded-3 shadow-lg w-100 mb-5" style={{ height: "475px" }}>
          <div class="tb overflow-auto rounded-3" style={{ height: "450px" }}>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Proveedor</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Telefono</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((item) => {
                  return (
                    <tr>
                      <th scope="row">{++no}</th>
                      <td>{item.idProvider}</td>
                      <td>{item.nameProvider}</td>
                      <td>{item.addres}</td>
                      <td>{item.numberProvider}</td>
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

export default ListProveedores;
