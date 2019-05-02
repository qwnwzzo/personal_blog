import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import logo from "../../statics/qwnwzzo.jpeg";
import ListGroup from 'react-bootstrap/ListGroup';
import { MdEmail } from "react-icons/md";
import HomeIntroductionPanel from './home_introduction_panel.js';
import HomeEducationBackgroundPanel from './home_education_background_panel.js';

class HomeContent extends Component {

  render(){

    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'row', marginTop: 30}}>
        <div style={{width: '70%'}}>
          {
            this.props.homeNavBarIndex === 0?
              (<HomeIntroductionPanel />):
            this.props.homeNavBarIndex === 1?
              (<HomeEducationBackgroundPanel />):
            this.props.homeNavBarIndex === 2?
              null:
            this.props.homeNavBarIndex === 3?
              null:
              null
          }
        </div>
        <div style={{width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{width: '80%'}}>
            <Image style={{width: '100%'}} src={logo} thumbnail />
          </div>
          <div style={{width: '80%'}}>
            <ListGroup>
              <ListGroup.Item style={{border: 'solid 1px white', padding: 10}}>
                <div>Contact Info</div>
                <div>
                  <MdEmail />
                  <span style={{marginLeft: 10, fontSize: 'small'}}>xiaoxiaoljq@126.com</span>
                </div>
                <div>
                  <MdEmail />
                  <span style={{marginLeft: 10, fontSize: 'small'}}>jiaqiang.li@mail.utoronto.ca</span>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;