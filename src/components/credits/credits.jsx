import React, { useEffect, useState } from "react";
import getAllCredits from "../../services/credits.services";
import MenuCredits from "../buttons/menuButtonsCredits";
import moment from "moment";
import "moment/locale/es";
import { Link } from "react-router-dom";

const Credits = () => {
  const [credits, setCredit] = useState([]);
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
      <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="w-100 text-center text-uppercase">lista de creditos</h1>
        <div className="w-100 d-flex px-3">
          <div
            className="w-75 d-flex flex-column align-items-center overflow-auto shadow-md border rounded-3"
            style={{ height: "475px" }}
          >
            <div
              className="d-flex justify-content-between w-100"
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
                        <td>{moment(row.date).format("LL")}</td>
                        <td>detalles...</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-25">
            <MenuCredits/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credits;
