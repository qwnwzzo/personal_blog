import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

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
              <div style={{fontWeight: 500}}>Computer Language</div>
              <div style={{marginLeft: 20}}>
                <ul>
                  <li>Python, Javascript, Java, sql</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div style={{fontWeight: 500}}>Database</div>
              <div style={{marginLeft: 20}}>
                <ul>
                  <li>MySQL, PostgreSQL</li>
                  <li>MongoDB, GraphQL</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div style={{fontWeight: 500}}>Software Development</div>
              <div style={{marginLeft: 20}}>
                <ul>
                  <li>Android Development</li>
                  <li>Cross-platform Mobile Development (React Native)</li>
                  <li>Desktop Development (Electron.js)</li>
                  <li>Game Development (Unity 3D)</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div style={{fontWeight: 500}}>Front-end skills</div>
              <div style={{marginLeft: 20}}>
                <ul>
                  <li>HTML, CSS, Javascript</li>
                  <li>React, React Native, Webpack</li>
                  <li>
                    <div>Some Node.js Libraries I like</div>
                    <div>
                      <ul>
                        <li>Immutable.js</li>
                        <li>Moment.js</li>
                        <li>D3.js</li>
                        <li>Electron.js</li>
                        <li>Lodash</li>
                        <li>CrossFilter</li>
                        <li>Superagent</li>
                        <li>Gatsby</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div style={{fontWeight: 500}}>Backend skills</div>
              <div style={{marginLeft: 20}}>
                <ul>
                  <li>Language: Python, Java</li>
                  <li>Framework: Django, Spring</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div style={{fontWeight: 500}}>Software Test</div>
              <div style={{marginLeft: 20}}>
                <ul>
                  <li>Robot Framework</li>
                  <li>Enzyme, Mocha</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div style={{fontWeight: 500}}>Cloud</div>
              <div style={{marginLeft: 20}}>
                <ul>
                  <li>Google Cloud Platform</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div style={{fontWeight: 500}}>Data Analysis</div>
              <div style={{marginLeft: 20}}>
                <ul>
                  <li>Machine Learning ( Python, TensorFlow, Keras )</li>
                  <li>Deep Learning</li>
                  <li>Digital Image Processing</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div style={{fontWeight: 500}}>Tools</div>
              <div style={{marginLeft: 20}}>
                <ul>
                  <li>Git</li>
                  <li>Webpack</li>
                </ul>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default HomeSkillsDescription;