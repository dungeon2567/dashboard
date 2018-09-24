import React from 'react';
import PropTypes from 'prop-types';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import Dashboard from './views/Dashboard'
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    height: "100%",
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  selected: {
    color: '#2196f3',
    fontWeight: 500
  },
  menuButton: {
    marginRight: 24,
  },
  content: {
    flexGrow: 1,
    overflow: "auto",
    backgroundColor: theme.palette.background.default,
    minWidth: 0, // So the Typography noWrap works
  },

  toolbar: theme.mixins.toolbar,
}
)

class NavigationItem extends React.Component {
  render() {
    return <Switch>
      <Route path={this.props.route} render={({ history }) => (
        <ListItem button onClick={() => { history.push(this.props.route) }}>
          <ListItemIcon style={{ color: '#2196f3' }}>
            {this.props.icon}
          </ListItemIcon>
          <ListItemText primary={<span style={{ color: "#2196f3", fontWeight: 500 }} >{this.props.name}</span>} />
        </ListItem>
      )} />
      <Route render={({ history }) => (
        <ListItem button onClick={() => { history.push(this.props.route) }}>
          <ListItemIcon>
            {this.props.icon}
          </ListItemIcon>
          <ListItemText primary={<span>{this.props.name}</span>} />
        </ListItem>
      )} />
    </Switch >
  }
}



class App extends React.PureComponent {
  state = {
    open: true,
    redirectTo: null,
  }


  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  handleDrawerOpen = (val) => {
    this.setState((state, props) => {
      return { ...state, open: !state.open }
    })
  }

  render() {
    const { classes } = this.props;

    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }

    return <Router >
      <CssBaseline>
        <MuiThemeProvider theme={theme}> <div className={classes.root}>
          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classes.menuButton}
              >
                {this.state.open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Dashboard
          </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar} />
            <List>
              <NavigationItem route="/dashboard" name="Dashboard" icon={<InboxIcon />} />
              <NavigationItem route="/starred" name="Starred" icon={<StarIcon />} />
              <NavigationItem route="/send-mail" name="Send mail" icon={<SendIcon />} />
              <NavigationItem route="/drafts" name="Drafts" icon={<DraftsIcon />} />
            </List>
            <Divider />
            <List>
              <NavigationItem route="/all-mail" name="All mail" icon={<MailIcon />} />
              <NavigationItem route="/trash" name="Treash" icon={<DeleteIcon />} />
              <NavigationItem route="/spam" name="Spam" icon={<ReportIcon />} />
            </List>
          </Drawer>
          <div className={classes.content} style={{ marginTop: 64 }}>
            <div style={{ overflowY: "auto", height: '100%', padding: 15 }}>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" render={props => (
                  <div></div>
                )} />
              </Switch>
            </div>
          </div>
        </div>
        </MuiThemeProvider >
      </CssBaseline>
    </Router>
  }
}


export default withStyles(styles)(App);
