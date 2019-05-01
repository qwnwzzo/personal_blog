import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';

class NavBar extends Component {
  render(){
    const { classes, pathName } = this.props;

    return (
      <div className={classes.container}>
        <AppBar 
          position="static"
          classes={{
            root: classes.navBarContainer
          }}>
          <Toolbar>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <div style={{width: '40%', fontSize: 'large'}}>Jiaqiang Li</div>
              <div className={pathName === '/'? classes.selectedTitle: classes.unselectedTitle}>
                Home
              </div>
              <div className={pathName === '/algorithms'? classes.selectedTitle: classes.unselectedTitle}>
                Algorithms
              </div>
              <div 
                style={{marginRight: 30, flex: '1 1 auto', textAlign: 'right', cursor: 'pointer'}}>
                <Icon className={classes.githubIcon}>
                  open_in_new
                </Icon>
                <span onClick={() => window.open('https://github.com/qwnwzzo', '_blank')}>
                  Github
                </span>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  navBarContainer: {
    backgroundColor: '#1E1E1E',
    color: 'white',
    width: '100%'
  },
  githubIcon: {
    fontSize: 'small',
    marginRight: 5,
  },
  selectedTitle: {
    padding: '0px 5px 3px 5px',
    marginRight: 30,
    fontWeight: 'bold',
    borderBottom: 'solid 1px white',
  },
  unselectedTitle: {
    padding: '0px 5px 3px 5px',
    marginRight: 30,
    fontWeight: 100,
  },
})

export default withStyles(styles)(NavBar);