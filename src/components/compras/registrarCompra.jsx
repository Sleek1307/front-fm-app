import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getAllProducts } from "../../services/products.services";
import { getAllProviders } from "../../services/providers.services";
import { createPurchase } from "../../services/purchases.services";

const RegistrarCompra = () => {
  const [products, setProducts] = useState([]);
  const [providers, setProvider] = useState([]);
  const [row, setRow] = useState({
    nameProduct: "",
    idProduct: "",
    cantidad: null,
    valor: null,
  });

  const [purchase, setPurchase] = useState({
    idProvider: "",
    date: "",
  });

  const [rows, setRows] = useState([]);

  useEffect(async () => {
    const product = await getAllProducts();
    setProducts(product.data[0]);

    const provider = await getAllProviders();
    setProvider(provider.data);
  }, []);

  useEffect(() => {
    setRow({
      ...row,
      idProduct: row.nameProduct.split(" - ")[0],
    });
  }, [row.nameProduct]);

  const onChangeRow = (e) => {
    setRow({
      ...row,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePurchase = (e) => {
    console.log(e.target.value);
    setPurchase({
      ...purchase,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = (e) => {
    setRows([...rows, row]);
    e.preventDefault();
  };

  const sumCost = () => {
    let c = 0;
    rows.map((e) => {
      c += e.valor * e.cantidad;
    });
    return c;
  };

  const handleSubmit = async (e) => {
    const totalCost = sumCost();
    const pedido = {
      idProvider: purchase.idProvider,
      costPurchase: totalCost,
      productos: rows,
      date: purchase.date,
    };
    console.log(pedido);
    e.preventDefault();
    await createPurchase(pedido);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center w-50">
        <div className="my-4">
          <h1 className="text-center">Registrar Compra</h1>
        </div>
        <div className="row my-5">
          <div className="col-6 text-center menuBtn">
            <Link
              to="/compras"
              className="text-decoration-none btn btn-primary"
            >
              Compras
            </Link>
          </div>
          <div className="col-6 text-center menuBtn">
            <Link
              to="/compras/registro "
              className="text-decoration-none btn btn-primary"
            >
              Registrar compra
            </Link>
          </div>
        </div>
        <div className="mb-5 border p-4 rounded-3 shadow-lg">
          <div className="border p-3">
            <table className="table p-1 border overflow-auto">
              <thead>
                <tr className="text-center">
                  <th>Producto</th>
                  <th>Valor</th>
                  <th>Cantidad</th>
                  <th>Valor total</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((e) => {
                  return (
                    <tr className="text-center">
                      <th>{e.nameProduct}</th>
                      <th>{e.valor}</th>
                      <th>{e.cantidad}</th>
                      <th>{e.valor * e.cantidad}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="d-flex flex-column align-items-center">
              <div className="d-flex">
                <div className="mb-3 mx-1 w-50">
                  <label className="form-label">Productos</label>
                  <select
                    name="nameProduct"
                    id=""
                    className="dropdown-menu-end dropdown-header w-100 fs-6"
                    onChange={onChangeRow}
                  >
                    <option value={false} selected>
                      Productos
                    </option>
                    {products.map((p) => {
                      return (
                        <option
                          value={`${p.idProduct} - ${p.description}`}
                        >{`${p.idProduct} - ${p.description}`}</option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-3 mx-1 w-50">
                  <label className="form-label">Valor unitario</label>
                  <input
                    type="number"
                    className="form-control"
                    id="userInput"
                    name="valor"
                    value={row.valor}
                    onChange={onChangeRow}
                  />
                </div>

                <div className="mb-3 mx-1 w-25">
                  <label className="form-label">Cantidad</label>
                  <input
                    type="number"
                    className="form-control"
                    id="userInput"
                    name="cantidad"
                    value={row.cantidad}
                    onChange={onChangeRow}
                  />
                </div>
              </div>
              <div className="mb-3 justify-content-center">
                <button
                  type="button"
                  onClick={onAdd}
                  className="btn btn-dark btnP"
                >
                  Agregar
                </button>
              </div>
            </div>
            <hr className="w-100" />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="userInput" className="form-label rounded-3">
                    Proveedor
                  </label>
                  <select
                    name="idProvider"
                    className="dropdown-menu-end dropdown-header fs-6 w-100"
                    onChange={onChangePurchase}
                  >
                    <option value={false}>Proveedores</option>
                    {providers.map((e) => {
                      return (
                        <option
                          value={e.idProvider}
                        >{`${e.idProvider} - ${e.nameProvider}`}</option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-3 col-12 col-md-6">
                  <label htmlFor="userInput" className="form-label rounded-3">
                    Fecha
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    id="userInput"
                    onChange={onChangePurchase}
                  />
                </div>
              </div>

              <div>
                <button type="submit" class="btn btn-dark btnP d-block mx-auto">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrarCompra;
