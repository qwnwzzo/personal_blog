import React, { Component } from "react";

class HomeIntroductionPanel extends Component {
  render(){
    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <h5 style={{fontSize: 'x-large'}}>Jiaqiang Li</h5>
        <div style={{fontWeight: 100}}>
          Hi, my name is <span style={{fontWeight: 'bold'}}>Jiaqiang Li</span>. I got my Master's Degree in the 
          <span style={{fontWeight: 'bold'}}> Electrical and Computer Engineering Department (ECE) </span> 
          at <span style={{fontWeight: 'bold'}}>the University of Toronto</span> in 2016.
        </div>
        <div style={{fontWeight: 100, marginTop: 10}}>
          Now I am working as a <span style={{fontWeight: 'bold'}}>full stack engineer</span>, 
          focusing on <span style={{fontWeight: 'bold'}}>web app, mobile app and desktop app development</span>.
          I am quite interested in <span style={{fontWeight: 'bold'}}>data structure and algorithms</span>. Furthermore, I am also learning and doing some
          stuff about <span style={{fontWeight: 'bold'}}>Data Analysis, Machine Learning, Game Development, etc</span>.
        </div>
        <div style={{fontWeight: 100, marginTop: 10}}>
          I am a quick learner and like learning the new technology. 
          If you want to make a friend with me, feel free to contact with me.
        </div>
      </div>
    );
  }
}

export default HomeIntroductionPanel;