import React, { Component } from 'react';
import { makeStyles,withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import{BrowserRouter as Router,
    Switch,Route} from "react-router-dom";
    import Login2 from './Login2';
    import Forget from './Forget';
    import Signup2 from './Signup2';
    import About2 from './About2';
    import HomeIcon from "@material-ui/icons/Home";
    import Menu2 from '../Whole/Menu2';
import Menu from '../Manu/Menu';
import Cart2 from '../Whole/Cart2';  
import Editproduct from '../Manu/Editproduct';
   
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Tradeit
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
  
const useStyles = ((theme) => ({
  root: {
    marginTop: 0,
    flexGrow: 1,
    
    
  },
  back:{
    margintop:0,
    // marginLeft:500,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
     marginLeft: 50,
    padding: 12,
  },
  head: {
    // backgroundColor: "whitesmoke",
     backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    
  },
}));

class ButtonAppBar extends Component {
 render(){
    const { classes} = this.props

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.head}>
        <Toolbar>
        <IconButton  edge="start" className={classes.menuButton} color="inherit" ></IconButton>
         
        <div className={classes.title}>
                        {/* <img  src="tradeit1.png" alt="trade" width="190" height="50"></img> */}
                        
                        
                                          
    </div>
<div className={classes.back}>

          <Button a href="/Home"  color="inherit" >Home  </Button>
          <Button a href="/Login2"  color="inherit" >Login  </Button>
          <Button a href="/About2" color="inherit">About us</Button>
          <Button color ="inherit">Contact us</Button>
          </div>
        </Toolbar>
      </AppBar>

<Router>     
<Switch>
<Route exact path="/Login2" component={Login2}></Route>
<Route exact path="/About2" component={About2}></Route>
<Route exact path="/Signup2" component={Signup2}></Route>
<Route exact path="/Forget" component={Forget}></Route>
<Route exact path="/Login1" component={Login2}></Route>

<Route path="/Manu" component={Menu}></Route>

<Route path="/Whole" component={Menu2}></Route>
</Switch></Router>
    </div>
  );
}
}
export default withStyles(useStyles)(ButtonAppBar);