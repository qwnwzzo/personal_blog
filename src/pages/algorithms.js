import React from "react";
import NavBar from "../components/nav_bar/nav_bar.js";

export default (props) => {
  return (
    <NavBar pathName={props.location.pathname}>
      <div 
        style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 'x-large', fontWeight: 'bold', marginTop: 100}}>
        Coming Soon ......
      </div>
    </NavBar>
  );
}