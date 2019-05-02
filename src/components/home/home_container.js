import React, { Component } from "react";
import HomeNavBar from './home_nav_bar.js';
import HomeContent from './home_content.js';

class HomeContainer extends Component {
  state = {
    n_homeNavBarIndex: 0,
  }

  // get called when clicking the home nav bar item
  // @params {int} index - 
  //   - 0: Introduction
  //   - 1: Education Background
  //   - 2: Skills
  //   - 3: Work Experience
  _changeHomeNavBarIndex(index){
    this.setState({n_homeNavBarIndex: index});
  }

  render(){
    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '20%', position: 'fixed'}}>
          <HomeNavBar 
            changeHomeNavBarIndex={this._changeHomeNavBarIndex.bind(this)}
            homeNavBarIndex={this.state.n_homeNavBarIndex} />
        </div>
        <div 
          style={{width: '80%', marginLeft: '20%', paddingLeft: 30}}>
          <HomeContent homeNavBarIndex={this.state.n_homeNavBarIndex} />
        </div>
      </div>
    );
  }
}

export default HomeContainer;