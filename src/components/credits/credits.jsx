import React, { useEffect, useState } from "react";
import getAllCredits from "../../services/credits.services";

const Credits = () => {
  const [credits, setCredit] = useState([
    // {
    //   cliente: "John Doe",
    //   venta: "001",
    //   credito: "001",
    //   valor: "5500",
    //   fecha: "25/03/2022",
    //   more: "ver mas..",
    // },
    // {
    //   cliente: "Juan Alvarez",
    //   venta: "003",
    //   credito: "001",
    //   valor: "5500",
    //   fecha: "25/03/2022",
    //   more: "ver mas..",
    // },
    // {
    //   cliente: "Andrea Carmona",
    //   venta: "002",
    //   credito: "001",
    //   valor: "5500",
    //   fecha: "25/03/2022",
    //   more: "ver mas..",
    // },
    // {
    //   cliente: "John Doe",
    //   venta: "004",
    //   credito: "001",
    //   valor: "5500",
    //   fecha: "25/03/2022",
    //   more: "ver mas..",
    // },
    // {
    //   cliente: "John Doe",
    //   venta: "005",
    //   credito: "001",
    //   valor: "5500",
    //   fecha: "25/03/2022",
    //   more: "ver mas..",
    // },
  ]);

  const [rows, setRow] = useState([]);
  const [client, setClient] = useState("");

  useEffect(() => {
    getAllCredits().then((data) => {
      setCredit(data.data);
    });
  }, []);

  useEffect(() => {
    setRow(credits);
  }, [credits]);

  const handleChange = (e) => {
    setClient(e.target.value);
  };

  const filter = () => {
    if (client != "") {
      let array = [];

      credits.map((item) => {
        let nombre = item.nameCostumer;

        if (nombre.indexOf(client) != -1) {

          array.push(item);
        }
      });
      setRow(array);
    } else {
      setRow(credits);
    }
  };

  useEffect(() => {
    filter();
  }, [client]);


  return (
    <>
      <div className="w-75 h-100">
        <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center">
          <div
            className="w-100 d-flex flex-column align-items-center overflow-auto p-4 shadow-lg rounded-3"
            style={{ height: "475px" }}
          >
            <div
              className="d-flex justify-content-between w-100 border border-1"
              style={{ height: "15%" }}
            >
              <div className="w-50 h-100">
                <form className="w-100 h-100 d-flex">
                  <div className="w-50 h-100 d-flex justify-content-center align-items-center">
                    <input
                      type="text"
                      className="w-100 mx-2 form-control"
                      placeholder="Cliente"
                      value={client}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="w-100">
              <table className="table table-bordered w-100">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Venta</th>
                    <th>Credito</th>
                    <th>Valor</th>
                    <th>Fecha</th>
                    <th>detalles...</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => {
                    return (
                      <tr>
                        <td>#</td>
                        <td>{row.nameCostumer}</td>
                        <td>{row.idSale}</td>
                        <td>{row.debtTotal}</td>
                        <td>{row.debtRemaining}</td>
                        <td>detalles...</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credits;
