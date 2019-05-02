import React, { Component } from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Image from 'react-bootstrap/Image';
import meazureupLogo from '../../statics/meazureup.png';

class HomeWorkExperiencePanel extends Component {
  render(){
    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <div>
          <span style={{fontSize: 'medium', color: '#898989', borderBottom: 'solid 1px #373737', paddingBottom: 5, fontWeight: 'bold'}}>
            Work Experience
          </span>
        </div>
        <Timeline 
          lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="2017-09 ~ present"
            dateInnerStyle={{ background: '#FDA741', color: 'white', fontSize: 'small' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h5>Full Stack Developer</h5>
            <div 
              style={{width: '100%', marginTop: 10, cursor: 'pointer'}}
              onClick={() => window.open('https://meazureup.com/', '_blank')}>
              <Image style={{width: '100%'}} src={meazureupLogo} thumbnail />
            </div>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="2016-08 ~ 2017-08"
            dateInnerStyle={{ background: '#16A05A', color: 'white', fontSize: 'small' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h5>Front-end Developer</h5>
            <div 
              style={{width: '100%', marginTop: 10, cursor: 'pointer'}}
              onClick={() => window.open('https://meazureup.com/', '_blank')}>
              <Image style={{width: '100%'}} src={meazureupLogo} thumbnail />
            </div>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}

export default HomeWorkExperiencePanel;