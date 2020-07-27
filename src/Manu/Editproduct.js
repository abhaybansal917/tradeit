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
    
    import Addproduct from '../Manu/Addproduct';
import Deleteproduct from '../Manu/Deleteproduct';
import Updateproduct from '../Manu/Updateproduct';
const useStyles = ((theme) => ({
  root: {
    //marginTop: 0,
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // marginLeft: 100,
    padding: 5,
  },
  head: {
    marginTop:-30,
    color: theme.palette.common.white,
  },
}));

class Editproduct extends Component {
 render(){
    const { classes} = this.props

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.head}>
        <Toolbar>
            
         
          <div className={classes.title}>
          <Button a href="/Manu/Editproduct/Add"  color="inherit" >Add </Button>
          <Button a href="/Manu/Editproduct/Delete"  color="inherit" >Delete </Button>
          <Button a href="/Manu/Editproduct/Update"  color="inherit" >Update </Button>
          </div>
          
        </Toolbar>
      </AppBar>

      <Router>      
      <Switch>
      <Route exact path="/Manu/Editproduct/Add" component={Addproduct}></Route>
      <Route exact path="/Manu/Editproduct/Delete" component={Deleteproduct}></Route>
      <Route exact path="/Manu/Editproduct/Update" component={Updateproduct}></Route>
      
      </Switch>
      </Router>

    </div>
  );
}
}
export default withStyles(useStyles)(Editproduct);