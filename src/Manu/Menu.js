import React,{Component} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles , } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import{BrowserRouter as Router,
  Switch,Route} from "react-router-dom";
  import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
  import HomeIcon from "@material-ui/icons/Home";
  import EditIcon from "@material-ui/icons/Edit";
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ListIcon from '@material-ui/icons/List';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import Updateprofile from '../Manu/Updateprofile';
import {ListItem,
  ListItemIcon,ListItemText} from "@material-ui/core";
import Signup2 from '../Admin/Signup2';
import About2 from '../Admin/About2';
import Help2 from '../Manu/Help2';
import List2 from '../Manu/List2';
import Editproduct from '../Manu/Editproduct';
import Cat from '../Manu/Cat';
import Addproduct from '../Manu/Addproduct';
import Deleteproduct from '../Manu/Deleteproduct';
import Updateproduct from '../Manu/Updateproduct';
import Product from '../Manu/Product';
import Profile1 from '../Manu/Profile1';
import Account from '../Manu/Account';
import Home1 from '../Manu/Home1';




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

const drawerWidth = 240;

const useStyles =((theme) => ({
root: {
display: 'flex',

},
toolbar: {
paddingRight: 24, 
},
toolbarIcon: {
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-end',
padding: '0 8px',
...theme.mixins.toolbar,
},
appBar: {
    backgroundColor:'white',
zIndex: theme.zIndex.drawer + 1,
transition: theme.transitions.create(['width', 'margin'], {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.leavingScreen,

}),
},
appBarShift: {
marginLeft: drawerWidth,
width: `calc(100% - ${drawerWidth}px)`,
transition: theme.transitions.create(['width', 'margin'], {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.enteringScreen,
}),
},
menuButton: {
marginRight: 36,
},
menuButtonHidden: {
display: 'none',
},
title: {
flexGrow: 1,
paddingTop: theme.spacing(1),
},
drawerPaper: {
position: 'relative',
whiteSpace: 'nowrap',
width: drawerWidth,
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
width: theme.spacing(7),
[theme.breakpoints.up('sm')]: {
width: theme.spacing(9),
},
},
appBarSpacer: theme.mixins.toolbar,
content: {
flexGrow: 1,
height: '100vh',
overflow: 'auto',
},
container: {
paddingTop: theme.spacing(4),
paddingBottom: theme.spacing(4),
},
paper: {
padding: theme.spacing(2),
display: 'flex',
overflow: 'auto',
flexDirection: 'column',
},
fixedHeight: {
height: 240,
},
ls:{
color: 'black',
}
}));

class  Menu extends Component 
{ constructor()
{
super();
this.state={
open:false
};
}

handleDrawerOpen = () => {
this.setState({open:true})
};
handleDrawerClose = () => {
this.setState({open:false})
};

render() 
{
const {classes} = this.props;
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
return (

<div className={classes.root}>



<CssBaseline />
<AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
<Toolbar className={classes.toolbar}>
<IconButton
edge="start"
color="#004F9D"
aria-label="open drawer"
onClick={this.handleDrawerOpen}
className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
>
  
<MenuIcon />
</IconButton>
<Typography component="h1" variant="h6" color="" noWrap className={classes.title}>
<img src="/tradeit1.png" alt="trade" width="190" height="50"></img>
</Typography>

<Typography component="h1" variant="h4" color="" noWrap className={classes.ls}>
{"Welcome," + localStorage.getItem('user')}
</Typography>

</Toolbar>
</AppBar>
<Drawer
variant="permanent"
classes={{
paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
}}

open={this.state.open}
>
  
<div className={classes.toolbarIcon}>
  
<IconButton onClick={this.handleDrawerClose}>
<ChevronLeftIcon />
</IconButton>
</div>
<Divider/>
<Router> 
    <div> 
<List>
                     <ListItem button>
                            <ListItemIcon>  
                            <HomeIcon onClick={event=>window.location.href="/Manu/Home1"}/>
                            </ListItemIcon>
                            <a href ="/Manu/Home1" >Home</a>  
                        </ListItem>
                   
                   
                    <ListItem button>
                        <ListItemIcon>  
                        <PersonOutlineOutlinedIcon onClick={event=>window.location.href="/Manu/Profile1"}/>  
                        </ListItemIcon>
                        <a href="/Manu/Profile1">My Profile</a>
                    </ListItem>
                    
                    <ListItem button>
                        <ListItemIcon>  
                        <EditIcon onClick={event=>window.location.href="/Manu/Cat"}/>  
                        </ListItemIcon>
                         <a href="/Manu/Cat">Add categories</a>
                    </ListItem>
                        

                    <ListItem button>
                        <ListItemIcon>  
                        <EditIcon onClick={event=>window.location.href="/Manu/Editproduct"}/>  
                        </ListItemIcon>
                       <a href="/Manu/Editproduct">Edit product</a>
                    </ListItem>
                        
                    <ListItem button>
                            <ListItemIcon>  
                           <ListIcon onClick={event=>window.location.href="/Manu/List2"}/>
                            </ListItemIcon>
                           <a href="/Manu/List2">List</a>
                        </ListItem>

                      <ListItem button>
                            <ListItemIcon>  
                            <InfoIcon onClick={event=>window.location.href="/Manu/About2"}/>
                            </ListItemIcon>
                       <a href ="/Manu/About2">About</a>
                        </ListItem>
                        
                        <ListItem button>
                            <ListItemIcon>  
                            <HelpOutlinedIcon onClick={event=>window.location.href="Manu/Help2"}/>
                            </ListItemIcon>
                            <a href="/Manu/Help2">Help</a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <HelpOutlinedIcon onClick={event=>window.location.href="/Login2"}/>
                            </ListItemIcon>
                            
                        <a href="/Login2">Logout</a>
                        </ListItem>

                    </List></div></Router>
<Divider />
</Drawer>
<Router>
<main className={classes.content}>
<div className={classes.appBarSpacer} />
<Container maxWidth="lg" className={classes.container}>
<Switch>
<Route path="/Manu/Updateprofile" component={Updateprofile}></Route>
<Route exact path="/Manu/Home1" component={Home1}></Route>
<Route exact path="/Manu/Profile1" component={Profile1}></Route>
<Route exact path="/Manu/Editproduct" component={Editproduct}></Route>
<Route exact path="/Manu/Cat" component={Cat}></Route>
<Route exact path="/Manu/Help2" component={Help2}></Route>
<Route exact path="/Manu/List2" component={List2}></Route>
<Route exact path=".Manu/About2" component={About2}></Route>
<Route exact path="/Manu/Editproduct/Add" component={Addproduct}></Route> 
<Route exact path="/Manu/Editproduct/Delete" component={Deleteproduct}></Route>
<Route exact path="/Manu/Editproduct/Update" component={Updateproduct}></Route>
<Route exact path="/Manu/Product" component={Product}></Route> 
<Route exact path="/Manu/Account" component={Account}></Route>  
                     </Switch>
               
<Copyright />
</Container>
</main>
</Router>
</div>


);
}
}
export default withStyles(useStyles)(Menu);