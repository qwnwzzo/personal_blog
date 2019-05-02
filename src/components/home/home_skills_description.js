import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

class RenderDescriptionTooltip extends Component {
  render(){
    return (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3,
          ...this.props.style,
        }}
      >
        {this.props.description}
      </div>
    );
  }
}

class HomeSkillsDescription extends Component {
  render(){
    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <div>
          <span style={{fontSize: 'medium', color: '#898989', borderBottom: 'solid 1px #373737', paddingBottom: 5, fontWeight: 'bold'}}>
            Technical Skills
          </span>
        </div>
        <div style={{width: '100%', color: '#898989', marginTop: 20}}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <OverlayTrigger
                placement="auto"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <RenderDescriptionTooltip description={"I have work experience with Python, Javascript and Java. I am also familiar with C#, C, C++, Swift and R."} />
                }
              >
                <div>
                  <div style={{fontWeight: 500}}>Computer Language</div>
                  <div style={{marginLeft: 20}}>
                    <ul>
                      <li>Python, Javascript, Java</li>
                      <li>C#, C, C++, Swift, R</li>
                    </ul>
                  </div>
                </div>
              </OverlayTrigger>
            </ListGroup.Item>
            <ListGroup.Item>
              <OverlayTrigger
                placement="auto"
                delay={{ show: 100, hide: 100 }}
                overlay={
                  <RenderDescriptionTooltip description={"I have work experience with MySQL and PostgreSQL. I am also familiar with MongoDB."} />
                }
              >
                <div>
                  <div style={{fontWeight: 500}}>Database</div>
                  <div style={{marginLeft: 20}}>
                    <ul>
                      <li>MySQL, PostgreSQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
              </OverlayTrigger>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default HomeSkillsDescription;