import React from "react";
import NavBar from "../components/nav_bar/nav_bar.js";

export default (props) => {
  return (
    <NavBar pathName={props.location.pathname}>
      <div>content</div>
    </NavBar>
  );
}
