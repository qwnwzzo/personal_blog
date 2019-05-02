import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

class HomeNavBar extends Component {
  render(){
    return (
      <div style={{width: '100%', fontSize: 'medium'}}>
        <div style={{width: '80%', borderRight: 'solid 1px #ECECEC', color: '#898989'}}>
          <ListGroup>
            <ListGroup.Item style={{border: 'solid 1px white', padding: 10}}>
              Education Background
            </ListGroup.Item>
            <ListGroup.Item style={{border: 'solid 1px white', padding: 10}}>
              Skills
            </ListGroup.Item>
            <ListGroup.Item style={{border: 'solid 1px white', padding: 10}}>
              Work Experience
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default HomeNavBar;