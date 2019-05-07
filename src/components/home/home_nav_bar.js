import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

class HomeNavBar extends Component {
  render(){
    return (
      <div style={{width: '100%', fontSize: 'medium', color: '#898989', marginTop: 30, boxShadow: '0.5rem 0.5rem 2rem 0 #808080'}}>
        <div style={{width: '100%', marginLeft: 10}}>
          <ListGroup>
            <ListGroup.Item 
                style={{border: 'solid 1px white', padding: 10, cursor: 'pointer', fontWeight: this.props.homeNavBarIndex === 0? 'bold': 'normal'}}
                onClick={() => this.props.changeHomeNavBarIndex(0)}>
              Introduction
            </ListGroup.Item>
            <ListGroup.Item 
                style={{border: 'solid 1px white', padding: 10, cursor: 'pointer', fontWeight: this.props.homeNavBarIndex === 1? 'bold': 'normal'}}
                onClick={() => this.props.changeHomeNavBarIndex(1)}>
              Education Background
            </ListGroup.Item>
            <ListGroup.Item 
                style={{border: 'solid 1px white', padding: 10, cursor: 'pointer', fontWeight: this.props.homeNavBarIndex === 2? 'bold': 'normal'}}
                onClick={() => this.props.changeHomeNavBarIndex(2)}>
              Skills
            </ListGroup.Item>
            <ListGroup.Item 
              style={{border: 'solid 1px white', padding: 10, cursor: 'pointer', fontWeight: this.props.homeNavBarIndex === 3? 'bold': 'normal'}}
              onClick={() => this.props.changeHomeNavBarIndex(3)}>
              Work Experience
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default HomeNavBar;