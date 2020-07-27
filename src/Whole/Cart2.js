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

class Cart2 extends Component 
{
  constructor()
    {
        super();
        this.state={
          t1:"",
          message:"",
          kalu:[]
        };
    }
    sendData(ev){
      const t1=this.state.t1
     
      const data={
          t1
             }
             
      Axios.get('http://localhost/remove.php',{params:data}).then(response=>{
    console.log(response);
    this.setState({
    message:response.data.response
    })
    }).catch(err=>{
    console.log("Failed");
    })
    }
      
    componentDidMount(){
        Axios.get('http://localhost/disp.php').then(response=>{
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
    Shopping Cart
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

       <div type gutterBottom variant="h10" component="h2"  value={this.state.t1=ag.productid}>
              ProductId :{ag.productid}
            </div> 
         <div> Product :{ag.product}</div>
          <div>Categories :{ag.categories}</div>
          <div>SubCategories :{ag.subcategories}</div>
          <div>Product Description :{ag.prodescription}</div>
          <div>Stock :{ag.stock}(Max order)</div>
          <div>Quantity:{ag.quantity}</div>
          <Typography gutterBottom variant="h8" component="h3" >
          Price :Rs.{ag.price}
          </Typography>
          
          </Typography>
          
        <Button  onClick={this.sendData.bind(this)}  size="small" variant="contained" color="primary" value="yes" className={classes.submit}>Remove</Button>       
        {this.state.message} 
   
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
export default withStyles(useStyles)(Cart2);

  