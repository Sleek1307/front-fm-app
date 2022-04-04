import React, { useEffect, useState } from "react";
import MenuButtons from "../buttons/menuButtonsSale";

const RegistrarVenta = () => {
  const [sale, setSale] = useState({
    idCostumer: "",
    date: "",
  });
  const [rows, setRows] = useState([]);
  const [row, setRow] = useState({
    key: "",
    nameProduct: "",
    amount: 0,
    unitValue: 0,
    totalValue: 0,
  });

  // Pendiente por mejorar
  const requireProduct = () => {
    if (row.nameProduct.length === 0) {
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

  const requireSale = () => {
    if (sale.provider === "") {
      return false;
    }
    if (sale.provider === "") {
      return false;
    }
    if (rows.length === 0) {
      return false;
    }
    return true;
  };

  const handleChangeRow = (e) => {
    setRow({
      ...row,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSale = (e) => {
    setSale({
      ...sale,
      [e.target.name]: e.target.value,
    });
  };

  const onAddRow = (e) => {
    e.preventDefault();

    if (requireProduct()) {
      if (rows.length != 0) {
        let flag;
        flag = rows.map((r) => {
          if (r.nameProduct == row.nameProduct) return true;
        });

        if (flag[0]) {
          alert("El producto ya existe en la tabla de ventas");
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
    }
  };

  const deleteProduct = (e) => {
    let products = rows.filter((row) => row.key != e.target.value);
    setRows(products);
    console.log(products);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (requireSale()) {
      console.log("No faltan datos de la venta");
      console.log({ products: rows, data: sale });
    } else {
      console.log("Faltan datos de la venta");
    }
  };

  useEffect(() => {
    setRow({ ...row, totalValue: row.amount * row.unitValue });
  }, [row.amount, row.unitValue]);

  useEffect(() => {
    if (requireProduct()) {
      setRows([...rows, row]);
    }
  }, [row.key]);

  // Logica de la venta
  // if (rows.length > 0) {
  //     );

  //     if (flag[0]) {
  //       setRows([...rows, row]);
  //     } else {
  //       alert("El producto ya");
  //     }
  //   } else {
  //     if (requireProduct()) {
  //       setRows([...rows, row]);
  //     }
  //   }
  console.log(row);

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="w-75">
          <h1 className="text-center mt-4">Registrar ventas</h1>
        </div>

        <div className="w-75">
          <MenuButtons />
        </div>

        <div
          className="w-75 mb-5 p-3 shadow-lg rounded-3"
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
                        >
                          <option>All</option>
                          <option value="001 productoUno">producto1</option>
                          <option value="002 productoDOs">producto2</option>
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
                        />
                      </div>
                    </div>

                    <div className="mb-3 mx-1 d-flex justify-content-center">
                      <button className="btn btn-dark btnP" onClick={onAddRow}>
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
                          name="provider"
                          className="form-select"
                          onChange={handleChangeSale}
                        >
                          <option value="">All</option>
                          <option value="01">Beer1</option>
                          <option value="02">Beer2</option>
                        </select>
                      </div>
                      <div className="w-50 px-1">
                        <label className="form-label">Fecha:</label>
                        <input
                          name="date"
                          className="form-control date"
                          type="date"
                          onChange={handleChangeSale}
                        />
                      </div>
                    </div>

                    <div>
                      <button className="btn btnP btn-dark" onClick={onSubmit}>
                        Registrar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrarVenta;
