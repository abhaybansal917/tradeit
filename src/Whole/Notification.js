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
    import Axios from 'axios';
    import Link from '@material-ui/core/Link';
    import CssBaseline from '@material-ui/core/CssBaseline';
    import Box from '@material-ui/core/Box';
    import Container from '@material-ui/core/Container';
    import Card from '@material-ui/core/Card';
    import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
  

const useStyles = ((theme) => ({
  root: {
    //marginTop: 0,
    flexGrow: 1,
    
  },
  media: {
    height: 200,
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  marginLeft: 100,
    padding: 5,
  },
  head: {
  marginTop: -105,
    color: theme.palette.common.white,
  },
  root:{
    flexGrow: 1,
        padding: theme.spacing(2),
   
  },
}));

class Notification extends Component 
{
  constructor()
    {
        super();
        this.state={
         
          kalu:[]
        };
    }
    
      
    componentDidMount(){
        Axios.get('http://localhost/notification.php').then(response=>{
          this.setState({kalu: response.data.responses})  
        }).catch(err => {
            console.log("Failed");
        })

    }
 render(){
    const { classes} = this.props

  return (
    <div className={classes.root}>
      
            
          <div className={classes.title}>
          <Typography component="h1" variant="h4">
    Notification
    </Typography>
    </div>
         
      
      <Grid item xs={12}>
      <Grid container justify="center" >
                {    this.state.kalu.map((ag,key) => 
                    <div key>
 <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        

                         


<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
          image={ag.image}
          src="C:\Users\dell\project\public\images"
      
        />
        <CardContent>
        <Typography >
        Manufacturer:{ag.manu}<br></br>
        Wholesaler :{ag.whole}<br></br>
        ProductId :{ag.productid}<br></br>
     
          Product :{ag.product}<br></br>
          Categories :{ag.categories}<br></br>
         SubCategories :{ag.subcategories}<br></br>
          Product Description :{ag.prodescription}<br></br>
          Price :{ag.price}<br></br>
          Quantity:{ag.quantity}<br></br>
          <Typography gutterBottom variant="h10" component="h2">
          {ag.accept}{ag.decline}<br></br>
          </Typography>
          </Typography>
          
        
   
        </CardContent>
      </CardActionArea>
    </Card><br></br>

    
    
  
  </div>
 
    </Container>
    </div>
  
                    )
                }
         </Grid>
</Grid>
    </div>
  );
}
}
export default withStyles(useStyles)(Notification);

  