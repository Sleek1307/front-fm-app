import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { getAllProducts } from "../../services/products.services";
import { getAllProviders } from "../../services/providers.services";
import { createPurchase } from "../../services/purchases.services";
import MenuPurchase from "../buttons/menuButtonsPurchase";

const RegistrarCompra = () => {
  const [products, setProducts] = useState([]);
  const [providers, setProvider] = useState([]);
  const [purchase, setPurchase] = useState({
    idProvider: false,
    date: "",
  });

  const [rows, setRows] = useState([]);
  const [row, setRow] = useState({
    key: "",
    nameProduct: "",
    idProduct: "",
    amount: 0,
    unitValue: 0,
  });

  const requireProduct = () => {
    if (row.nameProduct === "") {
      return false;
    }
    if (row.unitValue === 0) {
      return false;
    }
    if (row.amount === 0) {
      return false;
    }
    return true;
  };

  const deleteProduct = (e) => {
    let products = rows.filter((row) => row.key != e.target.value);
    setRows(products);
  };

  const requirePurchase = () => {
    if (rows.length === 0) {
      return [
        false,
        "No has ingresado ningún elemento a la tabla de productos",
      ];
    }
    if (purchase.provider === false) {
      return [false, "Falta el id del proveedor"];
    }
    if (purchase.date === "") {
      return [false, "Falta la fecha de la compra"];
    }
    return true;
  };

  const handleChangeRow = (e) => {
    let nameInput = e.target.name;
    let valueInput = e.target.value;

    if (nameInput === "nameProduct") {
      setRow({
        ...row,
        [nameInput]: valueInput,
        idProduct: valueInput.split(" - ")[0],
      });
    } else {
      setRow({
        ...row,
        [nameInput]: valueInput,
      });
    }
  };

  const handleChangePurchase = (e) => {
    setPurchase({
      ...purchase,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    if (requireProduct()) {
      if (rows.length > 0) {
        let flag;
        flag = rows.map((r) => {
          if (r.nameProduct == row.nameProduct) return true;
        });

        if (flag[0]) {
          alert("El elemento ya existe en la tabla de productos");
          e.preventDefault();
          return;
        }

        setRow({
          ...row,
          key: rows[rows.length - 1].key + 1,
        });
      } else {
        setRow({
          ...row,
          key: 1,
        });
      }
    } else {
      alert("Datos del producto incompletos");
    }
    e.preventDefault();
  };

  const sumCost = () => {
    let c = 0;
    rows.map((e) => {
      c += e.unitValue * e.amount;
    });
    return c;
  };

  const handleSubmit = async (e) => {
    let require = requirePurchase();

    if (require) {
      const totalCost = sumCost();
      const pedido = {
        idProvider: purchase.idProvider,
        costPurchase: totalCost,
        productos: rows,
        date: purchase.date,
      };
      e.preventDefault();
      const { data } = await createPurchase(pedido);
      alert(data.text);
    } else {
      alert(require[1]);
    }

    e.preventDefault();
  };

  useEffect(async () => {
    const product = await getAllProducts();
    setProducts(product.data[0]);

    const provider = await getAllProviders();
    setProvider(provider.data);
  }, []);

  useEffect(() => {
    if (requireProduct()) {
      setRows([...rows, row]);
      setRow({
        ...row,
        key: "",
        nameProduct: "",
        idProduct: "",
        amount: 0,
        unitValue: 0,
      });
    }
  }, [row.key]);

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center justify-content-center px-3 mb-1">
        <h1 className="text-center text-uppercase">Registrar Compra</h1>

        <div className="d-flex w-100">
          <div
            className="p-2 border rounded-3 w-75 shadow-md"
            style={{ height: "475px" }}
          >
            <div className="w-100 h-100 rounded-3 p-2 border overflow-hidden">
              <table className="table p-1 border overflow-auto">
                <thead>
                  <tr className="text-center">
                    <th></th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Valor unitario</th>
                    <th>Valor total</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => {
                    return (
                      <tr className="text-center align-text-bottom">
                        <th>{row.key}</th>
                        <th>{row.nameProduct}</th>
                        <th>{row.amount}</th>
                        <th>{row.unitValue}</th>
                        <th>{row.unitValue * row.amount}</th>
                        <th>
                          <button
                            className="btn btn-light btn-outline-danger"
                            value={row.key}
                            onClick={deleteProduct}
                          >
                            Eliminar
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="d-flex flex-column align-items-center">
                <form>
                  <div className="d-flex">
                    <div className="mb-3 mx-1 w-50">
                      <label className="form-label">Productos:</label>
                      <select
                        name="nameProduct"
                        className="dropdown-menu-end dropdown-header w-100 fs-6"
                        onChange={handleChangeRow}
                        value={row.nameProduct}
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
                      <label className="form-label">Valor unitario:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="unitValue"
                        value={row.unitValue}
                        onChange={handleChangeRow}
                      />
                    </div>

                    <div className="mb-3 mx-1 w-25">
                      <label className="form-label">Cantidad:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="amount"
                        value={row.amount}
                        onChange={handleChangeRow}
                      />
                    </div>
                  </div>
                  <div className="d-flex mb-3 justify-content-center">
                    <button
                      type="submit"
                      onClick={handleAdd}
                      className="btn btn-dark btnP"
                    >
                      Agregar
                    </button>
                  </div>
                </form>
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
                      onChange={handleChangePurchase}
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
                      Fecha:
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      onChange={handleChangePurchase}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-dark btnP d-block mx-auto"
                  >
                    Registrar:
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-25">
            <MenuPurchase />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrarCompra;
