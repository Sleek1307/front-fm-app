import React from "react";
import NavDash from "../components/navBarDash";
import Foot from "../components/footer";
import SideBar from "../components/sideBar";
import Home from "./home";

const Layout = (props) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="d-flex flex-column w-100 m-0">
          <div className="position-fixed top-0 start-0 end-0" style={{zIndex:"2"}}>
            <NavDash/>
          </div>
          <div className="d-flex w-100">
            <div className="position-fixed start-0 bottom-0 top-0">
             <SideBar/> 
            </div>
            <div className="d-flex justify-content-center align-items-center w-100" style={{marginTop:"80px", marginLeft: "66px"}}>
              {props.page}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Layout;
