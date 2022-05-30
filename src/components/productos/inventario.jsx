import React, { useEffect, useState } from "react";
import { getAllProducts, getKardex } from "../../services/products.services";
import MenuButtons from "../buttons/menuButtonsProducts";

const Inventario = () => {
  const [products, setProducts] = useState([]);
  const [operations, setOperation] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    amount: "",
  });

  useEffect(async () => {
    const { data } = await getAllProducts();
    setProducts(data[0]);
  }, []);

  const handleSubmit = async (id) => {
    const { data } = await getKardex(id);
    setOperation(data);
  };

  const handleChange = (e) => {
    // Envio una cadena de texto como argumento y la descompongo como un array
    setProduct({
      ...product,
      id: e.target.value.split("-")[0],
      amount: parseInt(e.target.value.split("-")[1]),
    });
  };

  useEffect(() => {
    if (product.id != "") {
      handleSubmit(product.id);
    }
  }, [product.id]);

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center px-2">
        <h1 className="text-center">KARDEX</h1>
        <div className="d-flex w-100">
          <div
            className="tb p-2 rounded-3 overflow-auto shadow-md w-75 border"
            style={{ height: "475px" }}
          >
            <div className="d-flex">
              <div className="w-50 my-1">
                <form action="">
                  <div className="mb-3">
                    <label className="form-label fw-bolder">Producto</label>
                    <select
                      onChange={handleChange}
                      type="number"
                      className="form-select w-50"
                    >
                      {/* Valor por defecto es false */}
                      <option value={false} selected>
                        Productos
                      </option>
                      {products.map((p) => {
                        return (
                          <option value={`${p.idProduct}-${p.amount}`}>
                            {p.description}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </form>
              </div>
              {/* Tabla de referencia */}
              <div className="w-50 my-1">
                <div className="p-1">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Cantidad</th>
                        <th>Unidades</th>
                        <th>Referencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">{product.amount}</td>
                        <td className="text-center">Und</td>
                        <td className="text-center">01</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Tabla principal */}
            <table className="table table-bordered text-center w-100">
              <thead>
                <tr>
                  <th rowSpan={"2"} className="py-4">
                    Fecha
                  </th>
                  <th rowSpan={"2"} className="py-4">
                    Detalle
                  </th>
                  <th rowSpan={"2"} className="py-4">
                    Valor unitario
                  </th>
                  <th colSpan={"2"}>Entrada</th>
                  <th colSpan={"2"}>Salidas</th>
                  <th colSpan={"2"}>Saldo</th>
                </tr>
                <tr>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {operations.map((op) => {
                  return op.detalle == "venta" ? (
                    <tr>
                      <td>{op.fecha}</td>
                      <td>{`Venta N° - ${op.factura}`}</td>
                      <td>{op.unitario}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>{op.cantidad}</td>
                      <td>{op.valor}</td>
                      <td>coming soon</td>
                      <td>coming soon</td>
                    </tr>
                  ) : (
                    <tr>
                      <td>{op.fecha}</td>
                      <td>{`Compra N° - ${op.factura}`}</td>
                      <td>{op.unitario}</td>
                      <td>{op.cantidad}</td>
                      <td>{op.valor}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>coming soon</td>
                      <td>coming soon</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-">
            <MenuButtons/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventario;
