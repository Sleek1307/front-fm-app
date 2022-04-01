import React from "react";
import "jquery/dist/jquery.js";
import LogOut from "./buttons/logout";
import {Link} from 'react-router-dom';
import {PersonOutline, ClipboardOutline, BagOutline, CardOutline, PricetagOutline, ReceiptOutline, MenuOutline } from 'react-ionicons';

const showToggler = () =>{
  const e = document.querySelector('#navbarToggleExternalContent2');
  e.classList.remove('show');
}

const NavDash = () => {
  return (
    <section className="nav-container d-flex w-100 p-0 bg-light border-bottom" style={{ height: "80px"}}>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="ms-3">
          <img id='logo' src="http://localhost:3000/logo192.png" alt="" style={{ height: '70px'}} />
        </div>
        <div
          className="navbar"
          style={{ height: "80px" }}
        >
          <div id="burgerMenu" className='col-12' >
            <div class="container-fluid my-auto" >
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent2" aria-controls="navbarToggleExternalContent2"
                aria-expanded="false" aria-label="Toggle navigation">
                <MenuOutline
                  height="40px"
                  width="40px"
                />
              </button>
            </div>
            <div class="collapse" id="navbarToggleExternalContent2">
              <div class="bg-light shadow-3 p-4 mt-2 w-100 d-flex justify-content-start">
                <div>
                <Link to="/listProducts" onClick={showToggler} class="fs-3 font-weight d-block text-dark ps-5 pb-4 border-0">
                  <BagOutline
                    height="30px"
                    width="30px"
                    className="p-2 text-dark"
                  />
                  Productos
                </Link>

                <Link to="/inventario" onClick={showToggler} class="fs-3 font-weight d-block text-dark ps-5 pb-4 border-0">
                  <ClipboardOutline
                    height="30px"
                    width="30px"
                    className="p-2 text-dark"
                  />
                  Inventario
                </Link>

                <Link to="/listCostumers" onClick={showToggler} class="fs-3 font-weight d-block text-dark ps-5 pb-4 border-0">
                  <PersonOutline
                    height="30px"
                    width="30px"
                    className="p-2 text-dark"
                  />
                  Clientes
                </Link>
                <Link to="/proveedor" onClick={showToggler} class="fs-3 font-weight d-block text-dark ps-5 pb-4 border-0">
                  <PersonOutline
                    height="30px"
                    width="30px"
                    className="p-2 text-dark"
                  />
                  Proveedores
                </Link>
                <Link to="#" onClick={showToggler} class="fs-3 font-weight d-block text-dark ps-5 pb-4 border-0">
                  <CardOutline
                    height="30px"
                    width="30px"
                    className="p-2 text-dark"
                  />
                  Creditos
                </Link>

                <Link to="/compras" onClick={showToggler} class="fs-3 font-weight d-block text-dark ps-5 pb-4 border-0">
                  <PricetagOutline
                    height="30px"
                    width="30px"
                    className="p-2 text-dark"
                  />
                  Compras
                </Link>

                <Link to="/Sales" onClick={showToggler} class="fs-3 font-weight d-block text-dark ps-5 pb-4 border-0">
                  <ReceiptOutline
                    height="30px"
                    width="30px"
                    className="p-2 text-dark"
                  />
                  Ventas
                </Link>
                <LogOut />
                </div>
              </div>
            </div>
          </div>

          <div id="logOut" className='col-12 p-0' >
            <div className="nav-item my-auto pe-5 d-flex justify-content-end">
              <LogOut />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavDash;
