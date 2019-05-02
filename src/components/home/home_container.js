import React from "react";
import HomeNavBar from './home_nav_bar.js';
import HomeContent from './home_content.js';

export default (props) => {
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', paddingTop: 30}}>
      <div style={{width: '20%', position: 'fixed'}}><HomeNavBar /></div>
      <div style={{width: '80%', marginLeft: '20%'}}><HomeContent /></div>
    </div>
  );
}