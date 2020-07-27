import React, { Component } from 'react';
import { makeStyles,withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import{BrowserRouter as Router,
    Switch,Route} from "react-router-dom";
    import HomeIcon from "@material-ui/icons/Home";
    
import Product from '../Whole/Product';
import Account from '../Whole/Account';

const useStyles = ((theme) => ({
  root: {
   flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: 5,
  },
  head: {
    marginTop:-90,
    color: theme.palette.common.white,
  },
}));

class Help2 extends Component {
  render(){
     const { classes} = this.props
 
   return (
     <div className={classes.root}>
       <AppBar position="static" className={classes.head}>
         <Toolbar>
             
          
           <div className={classes.title}>
           <Button a href="/Manu/Help2/Product"  color="inherit" >Product </Button>
           <Button a href="/Manu/Help2/Account"  color="inherit" >Account </Button>
           <Button a href="/Manu/Help2/Billing"  color="inherit" >Billing </Button>
           <Button a href="/Manu/Help2/Security"  color="inherit" >Security</Button>
           <Button a href="/Manu/Help2/Setting"  color="inherit" >Setting </Button>
           <Button a href="/Manu/Help2/Feedback"  color="inherit" >Feedback </Button>
           </div>
           
         </Toolbar>
       </AppBar>
 
       <Router>      
       <Switch>
       <Route exact path="/Manu/Help2/Product" component={Product}></Route>
       </Switch>
       </Router>
 
     </div>
   );
 }
 }
 export default withStyles(useStyles)(Help2);