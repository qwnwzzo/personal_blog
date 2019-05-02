import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import logo from "../../statics/qwnwzzo.jpeg";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdEmail } from "react-icons/md";

class HomeContent extends Component {

  render(){
    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '70%', display: 'flex', flexDirection: 'column'}}>
          <div>
            <span style={{fontSize: 'medium', color: '#898989', borderBottom: 'solid 1px #373737', paddingBottom: 5, fontWeight: 'bold'}}>
              Education Background
            </span>
          </div>
          <Timeline 
            lineColor={'#ddd'}>
            <TimelineItem
              key="001"
              dateText="2014-09 ~ 2016-06"
              dateInnerStyle={{ color: 'white', fontSize: 'small' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
            >
              <h5>University of Toronto</h5>
              <div>Master's Degree, Electrical and Computer Engineering</div>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="2010-09 ~ 2014-06"
              dateInnerStyle={{ background: '#61b8ff', color: 'white', fontSize: 'small' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
            >
              <h5>Shandong University</h5>
              <div>Bachelor's Degree, Automation Engineering</div>
            </TimelineItem>
          </Timeline>
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
                  <span style={{marginLeft: 10}}>xiaoxiaoljq@126.com</span>
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