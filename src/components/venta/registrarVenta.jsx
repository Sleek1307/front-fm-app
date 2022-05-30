import React, { useEffect, useState } from "react";
import MenuButtons from "../buttons/menuButtonsSale";
import { getAllCostumers } from "../../services/costumer.services";
import { getAllProducts } from "../../services/products.services";
import { saveSale } from "../../services/sales.services";

const RegistrarVenta = () => {
  const [products, setProduct] = useState([]);
  const [costumers, setCostumer] = useState([]);
  const [sale, setSale] = useState({
    idCostumer: "",
    date: "",
    credit: false,
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
    if (row.nameProduct.length === 0) {
      return [false, "Selecciona un producto"];
    }
    if (row.unitValue === 0) {
      return [false, "El campo valor unitario no puede estar vacio"];
    }
    if (row.amount === 0) {
      return [false, "El campo cantidad no puede estar vacio"];
    }
    return [true];
  };

  const requireSale = () => {
    if (rows.length === 0) {
      return [false, "La tabla de productos está vacia"];
    }
    if (sale.idCostumer === "") {
      return [false, "Selecciona un cliente"];
    }
    if (sale.date === "") {
      return [false, "El campo de fecha no puede estar vacio"];
    }
    return [true];
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

  const handleChangeSale = (e) => {
    console.log(e.target);

    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setSale({
      ...sale,
      [name]: value,
    });
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    let require = requireProduct();

    if (require[0]) {
      if (rows.length != 0) {
        let flag;
        flag = rows.map((r) => {
          if (r.nameProduct == row.nameProduct) return true;
        });

        if (flag[0]) {
          alert("El producto ya existe en la tabla de productos");
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
      alert(require[1]);
    }
  };

  const sumCost = () => {
    let c = 0;
    rows.map((e) => {
      c += e.unitValue * e.amount;
    });
    return c;
  };

  const deleteProduct = (e) => {
    let products = rows.filter((row) => row.key != e.target.value);
    setRows(products);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let require = requireSale();

    if (require[0]) {
      const totalValue = sumCost();
      const pedido = {
        idCostumer: sale.idCostumer,
        date: sale.date,
        credit: sale.credit,
        costSale: totalValue,
        products: rows,
      };

      saveSale(pedido);

      setSale({
        ...sale,
        idCostumer: "",
        date: "",
      });
    } else {
      alert(require[1]);
    }
  };

  useEffect(() => {
    let require = requireProduct();

    if (require[0]) {
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

  useEffect(async () => {
    const product = await getAllProducts();
    setProduct(product.data[0]);

    const costumer = await getAllCostumers();
    setCostumer(costumer.data);
  }, []);

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center">
        <h1 className="text-center text-uppercase">registrar ventas</h1>
        <div className="d-flex w-100 px-3">
          <div
            className="w-75 p-3 shadow-md rounded-3"
            style={{ height: "450px" }}
          >
            <div className="w-100 h-100 d-flex justify-content-center">
              <div className="w-100 overflow-auto border rounded-3 d-flex flex-column align-items-center p-3">
                <table className="w-100 table table-striped">
                  <thead>
                    <tr className="text-center">
                      <th>#</th>
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
                        <tr key={row.key} className="text-center text-truncate">
                          <td>{row.key}</td>
                          <td>{row.nameProduct}</td>
                          <td>{row.amount}</td>
                          <td>{row.unitValue}</td>
                          <td>{row.totalValue}</td>
                          <td>
                            <button
                              className=" btn btn-light btn-outline-danger"
                              onClick={deleteProduct}
                              value={row.key}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="w-100 justify-content-center">
                  <form>
                    <div className="w-100 d-flex flex-column">
                      <div className="d-flex">
                        <div className="mb-3 mx-1 w-50">
                          <label className="form-label">Producto:</label>
                          <select
                            name="nameProduct"
                            className="form-control form-select"
                            required
                            onChange={handleChangeRow}
                            value={row.nameProduct}
                          >
                            <option value={false} selected>
                              Productos
                            </option>
                            {products.map((product) => {
                              return (
                                <option
                                  value={`${product.idProduct} - ${product.description}`}
                                >{`${product.idProduct} - ${product.description}`}</option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="mb-3 mx-1 w-50">
                          <label className="form-label">Valor unitario:</label>
                          <input
                            className="form-control"
                            type="number"
                            name="unitValue"
                            required
                            onChange={handleChangeRow}
                            value={row.unitValue}
                          />
                        </div>

                        <div className="mb-3 mx-1 w-25">
                          <label className="form-label">Cantidad:</label>
                          <input
                            className="form-control"
                            type="number"
                            name="amount"
                            required
                            onChange={handleChangeRow}
                            value={row.amount}
                          />
                        </div>
                      </div>

                      <div className="mb-3 mx-1 d-flex justify-content-center">
                        <button
                          className="btn btn-dark btnP"
                          onClick={handleAddRow}
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="w-100 mt-0">
                  <hr className="w-100 mt-0" />
                  <form className="w-100">
                    <div className="w-100 d-flex flex-column align-items-center">
                      <div className="w-100 d-flex mb-3">
                        <div className="w-50 px-1">
                          <label className="form-label">Cliente</label>
                          <select
                            name="idCostumer"
                            className="form-select"
                            onChange={handleChangeSale}
                            value={sale.idCostumer}
                          >
                            <option value="" selected>
                              Clientes
                            </option>
                            {costumers.map((costumer) => {
                              return (
                                <option value={costumer.idCostumer}>
                                  {costumer.nameCostumer}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="w-50 px-1">
                          <label className="form-label">Fecha:</label>
                          <input
                            name="date"
                            className="form-control date"
                            type="date"
                            value={sale.date}
                            onChange={handleChangeSale}
                          />
                        </div>
                      </div>

                      <div className="w-100 d-flex mb-2">
                        <div className="w-50 px-2">
                          <label className="form-label">Credito</label>
                          <input
                            className="form-check-input mx-1"
                            id="credit-y"
                            type="checkbox"
                            name="credit"
                            onChange={handleChangeSale}
                            checked={sale.credit}
                          />
                          <i class="bi bi-exclamation-circle align-middle ms-4"></i>
                        </div>
                      </div>

                      <div>
                        <button
                          className="btn btnP btn-dark"
                          onClick={handleSubmit}
                        >
                          Registrar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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

export default RegistrarVenta;
