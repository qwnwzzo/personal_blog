import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import logo from "../../statics/qwnwzzo.jpeg";
import { MdOpenInNew } from "react-icons/md";

class NavBar extends Component {
  render(){
    const { pathName } = this.props;

    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand style={{marginRight: 100}}>
            <Image style={{width: 40, height: 40, marginRight: 10}} src={logo} roundedCircle />
            <span>Jiaqiang Li</span>
          </Navbar.Brand>
          <Nav className="mr-auto" style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <Nav.Item 
              style={{marginRight: 20}}>
              <Nav.Link style={{color: pathName === '/'? 'white': '#858585'}}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{color: pathName === '/algorithms'? 'white': '#858585'}}>Algorithms</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{flex: '1 1 auto', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Nav.Link onClick={() => window.open('https://github.com/qwnwzzo', '_blank')}>
                <MdOpenInNew/>
                <span style={{marginLeft: 10}}>Github</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default NavBar;