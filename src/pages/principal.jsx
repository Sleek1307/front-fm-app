import React from "react";
import NavDash from "../components/navBarDash";
import Foot from "../components/footer";
import SideBar from "../components/sideBar";

const Principal = (props) => {
  return (
    <section className='h-100'>
      <div className="d-flex h-100 w-100 m-0">

        <div className="col-3 p-0">
          <SideBar />
        </div>

        <div className="p-0 col-12 col-lg-9 d-flex flex-column">

          <NavDash />

          <div className='mt-5' style={{minHeight: '500px'}}>
            {props.page}
          </div>

          <div>
            {props.menu}
          </div>
          
          <Foot className='mt-auto'/>
        </div>

        
      </div>
    </section>
  );
};

export default Principal;