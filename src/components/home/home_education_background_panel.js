import React, { Component } from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Image from 'react-bootstrap/Image';
import uoftLogo from '../../statics/university_of_toronto.jpg';
import sduLogo from '../../statics/shandong_university.jpg';

class HomeEducationBackgroundPanel extends Component {
  render(){
    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
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
            <div 
              style={{width: '100%', marginTop: 10, cursor: 'pointer'}}
              onClick={() => window.open('https://en.wikipedia.org/wiki/University_of_Toronto', '_blank')}>
              <Image style={{width: '100%'}} src={uoftLogo} thumbnail />
            </div>
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
            <div 
              style={{width: '100%', marginTop: 10, cursor: 'pointer'}}
              onClick={() => window.open('https://en.wikipedia.org/wiki/Shandong_University', '_blank')}>
              <Image style={{width: '100%'}} src={sduLogo} thumbnail />
            </div>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}

export default HomeEducationBackgroundPanel;