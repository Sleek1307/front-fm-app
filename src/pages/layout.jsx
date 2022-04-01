import React from "react";
import NavDash from "../components/navBarDash";
import Foot from "../components/footer";
import SideBar from "../components/sideBar";
import Home from "./home";

const Layout = (props) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="d-flex flex-column w-100 m-0">
          <div>
            <NavDash/>
          </div>
          <div className="d-flex w-100">
            <div>
             <SideBar/> 
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
              {props.page}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Layout;
