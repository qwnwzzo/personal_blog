import React from "react";
import NavBar from "../components/nav_bar/nav_bar.js";
import HomeContainer from "../components/home/home_container.js";

export default (props) => {
  return (
    <NavBar pathName={props.location.pathname}>
      <HomeContainer />
    </NavBar>
  );
}
