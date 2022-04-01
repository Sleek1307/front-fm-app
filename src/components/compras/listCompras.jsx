import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPurchases } from "../../services/purchases.services";

const ListCompra = () => {

  const [purchases, setPurchase] = useState([]);

  useEffect(() =>{
    getAllPurchases().then((items) =>{
      console.log(items.data);
      setPurchase(items.data)
    }, [])
  }, [])

  var n = 0;

  return (
    <>
      <div className="p-2 rounded-3 shadow-lg w-75 overflow-auto">
        <div>
          <h1 className="text-center">Compras</h1>
        </div>

        <div className="tb overflow-auto rounded-3" style={{ height: "450px" }}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Proveedor</th>
                <th scope="col">Valor total</th>
                <th scope="col">Fecha</th>
                <th scope="col">detalles</th>
              </tr>
            </thead>
            <tbody>
              {
                purchases.map((e) => {
                  return(
                    <tr>
                      <th>{n++}</th>
                      <th>{e.idPurchase}</th>
                      <th>{e.nameProvider}</th>
                      <th>{e.costPurchase}</th>
                      <th>{e.date.split('T')[0]}</th>
                      <th className="text-center"><a className="text-dark" href="">ver mas...</a></th>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        
      </div>
      <div className='row my-5'>
        <div className='col-6 text-center menuBtn'>
          <Link to="/compras" className='text-decoration-none btn btnP btn-dark' >Compras</Link>
        </div>
        <div className='col-6 text-center menuBtn'>
          <Link to="/compras/registro " className='text-decoration-none btn btnP btn-dark'>Registrar compra</Link>
        </div>
      </div>
    </>
  );
};

export default ListCompra;
