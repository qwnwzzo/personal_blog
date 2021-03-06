import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import logo from '../../statics/qwnwzzo.jpeg';
import wechat from '../../statics/wechat.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdEmail } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import HomeIntroductionPanel from './home_introduction_panel.js';
import HomeEducationBackgroundPanel from './home_education_background_panel.js';
import HomeSkillsDescription from './home_skills_description.js';
import HomeWorkExperiencePanel from './home_work_experience_panel.js';

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
              (<HomeSkillsDescription />):
            this.props.homeNavBarIndex === 3?
              (<HomeWorkExperiencePanel />):
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
                {
                  /**
                    <div title={"Please download my resume."}>
                      <FaFileDownload />
                      <a 
                        style={{fontSize: 'small', marginLeft: 10, color: 'black'}}
                        href={"https://storage.googleapis.com/staging.test-dcfd2.appspot.com/resume.pdf"} 
                        target="_blank"
                        rel="noopener noreferrer">
                        Resume
                      </a>
                    </div>
                  */
                }
                <div title={"email address"}>
                  <MdEmail />
                  <span style={{marginLeft: 10, fontSize: 'small'}}>xiaoxiaoljq@126.com</span>
                </div>
                <div title={"email address"}>
                  <MdEmail />
                  <span style={{marginLeft: 10, fontSize: 'small'}}>jiaqiang.li@mail.utoronto.ca</span>
                </div>
                <div 
                  style={{width: '100%', display: 'flex', flexDirection: 'row', marginTop: 10}}
                  title={"wechat contact info"}>
                  <div>
                    <MdChat />
                  </div>
                  <div style={{flex: '1 1 auto', paddingLeft: 10}}>
                    <Image style={{width: '100%'}} src={wechat} thumbnail />
                  </div>
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