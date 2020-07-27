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
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import  Help2  from './Help2';
import {ListItem,
  ListItemIcon,ListItemText} from "@material-ui/core";
import Home2 from '../Whole/Home2';
import Cart2 from '../Whole/Cart2';
import About2 from '../Admin/About2';
import Profile2 from '../Whole/Profile2';
import Product from '../Whole/Product';
import Account from '../Whole/Account';
import Updateprofile from '../Whole/Updateprofile';
import Notification from '../Whole/Notification';


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

class  Menu2 extends Component 
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
                
                            <HomeIcon onClick={event=>window.location.href="/Whole/Home2"}/>
                            </ListItemIcon>
                            <a href ="/Whole/Home2" >Home</a>  
                        </ListItem>
                   
                   
                   <ListItem button>
                        <ListItemIcon>  
                        <PersonOutlineOutlinedIcon onClick={event=>window.location.href="/Whole/Profile2"}/>  
                        </ListItemIcon>
                        <a href="/Whole/Profile2">My Profile</a>
                    </ListItem>
                        
                    <ListItem button>
                            <ListItemIcon>  
                            <AddShoppingCartIcon onClick={event=>window.location.href="/Whole/Cart2"}/>
                            </ListItemIcon>
                            <a href="/Whole/Cart2">Cart</a>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>  
                            < NotificationsActiveIcon onClick={event=>window.location.href="/Whole/Notification"}/>
                            </ListItemIcon>
                        <a href ="/Whole/Notification">Notification</a>
                        </ListItem>

                     <ListItem button>
                            <ListItemIcon>  
                            <InfoIcon onClick={event=>window.location.href="/Whole/About2"}/>
                            </ListItemIcon>
                        <a href ="/Whole/About2">About</a>
                        </ListItem>
                        
                        <ListItem button>
                            <ListItemIcon>  
                            <HelpOutlinedIcon onClick={event=>window.location.href="/Whole/Help2"} />
                            </ListItemIcon>
                            <a href="/Whole/Help2">Help</a>
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

<Route exact path="/Whole/Home2" component={Home2}></Route>
<Route exact path="/Whole/Profile2" component={Profile2}></Route>
<Route exact path="/Whole/Help2" component={Help2}></Route>
<Route exact path="/Whole/Notification" component={Notification}></Route>
<Route exact path="/Whole/Cart2" component={Cart2}></Route>
<Route exact path="/Whole/About2" component={About2}></Route>
<Route exact path="/Whole/Product" component={Product}></Route> 
<Route exact path="/Whole/Account" component={Account}></Route>  
<Route path="/Whole/Updateprofile" component={Updateprofile}></Route>


                     </Switch>
               
<Copyright />
</Container>
</main>
</Router>
</div>


);
}
}
export default withStyles(useStyles)(Menu2);