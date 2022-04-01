import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login.jsx";
// import b from "./pages/b.jsx";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Registro from "./components/productos/registrarProducto";
import Lista from "./components/productos/listarProductos";
import Buscar from "./components/productos/buscarProductos";
import ListVentas from "./components/venta/listVentas";
import RegistrarVenta from "./components/venta/registrarVenta";
import ButtonsSale from "./components/buttons/menuButtonsSale";
import ButtonsClients from "./components/buttons/menuButtonsClientes";
import ListCostumer from "./components/costumers/listCostumer";
import RegisterCostumer from "./components/costumers/registrarCostumers";
import SearchCostumers from "./components/costumers/searchCostumers";
import Inventario from "./components/productos/inventario";
import ListProveedores from "./components/proveedores/listProveedores";
import RegistroProveedores from "./components/proveedores/registrarProveedores";
import RegistrarCompra from "./components/compras/registrarCompra";
import ListCompra from "./components/compras/listCompras";
import Credits from "./components/credits/credits";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout page={<Home/>}/>} />
        <Route path="/inicio" element={<Layout page={<Home/>}/>} />
        <Route path="/compras" element={<Layout page={<ListCompra />} />} />
        <Route
          path="/compras/registro"
          element={<Layout page={<RegistrarCompra />} />}
        />
        <Route
          path="/proveedores"
          element={<Layout page={<ListProveedores />} />}
        />
        <Route
          path="/proveedores/registro"
          element={<Layout page={<RegistroProveedores />} />}
        />
        <Route
          path="/inventario"
          element={<Layout page={<Inventario />} />}
        />
        <Route
          path="/productos"
          element={<Layout page={<Lista />}/>}
        />
        <Route
          path="/productos/registro"
          element={<Layout page={<Registro />}/>}
        />
        <Route
          path="/productos/gestion"
          element={<Layout page={<Buscar />}/>}
        />
        <Route
          path="/ventas"
          element={<Layout page={<ListVentas />}/>}
        />
        <Route
          path="/ventas/registro"
          element={<Layout page={<RegistrarVenta />}/>}
        />
        <Route
          path="/clientes"
          element={
            <Layout page={<ListCostumer />} menu={<ButtonsClients />} />
          }
        />
        <Route
          path="/clientes/registro"
          element={
            <Layout page={<RegisterCostumer />} menu={<ButtonsClients />} />
          }
        />
        <Route
          path="/clientes/gestion"
          element={
            <Layout page={<SearchCostumers />} menu={<ButtonsClients />} />
          }
        />
        <Route
          path="/creditos"
          element={
            <Layout page={<Credits/>}/>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
