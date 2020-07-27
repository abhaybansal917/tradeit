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

    import Grid from '@material-ui/core/Grid';
    import HomeIcon from "@material-ui/icons/Home";
    import Axios from 'axios';
    import Link from '@material-ui/core/Link';
    import CssBaseline from '@material-ui/core/CssBaseline';
    import Box from '@material-ui/core/Box';
    import Container from '@material-ui/core/Container';
    import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';

const useStyles = ((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper:{
    marginTop:70,
  },
  media: {
    height: 200,
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
    
    marginTop: 0,
      color: theme.palette.common.white,
    },
    root:{
      flexGrow: 1,
          padding: theme.spacing(2),
      marginTop:-100,
    },
    submit:{
      marginTop:30,
        },
}));

class Home2 extends Component 
{
  constructor()
    {
        super();
        this.state={
           t1:"",
        t2:"",
       t3:"",
        t4:"",
        t5:"",
        t6:"",
        t7:"",
        t8:"",
         t9:"",
        
         t10:"",
         t11:"",
         t12:"",
           kalu:[],
           message:"",
           bhalu:""
        };
    }
    fun1(e){
      this.setState({
     [e.target.name]:e.target.value     
      })
    }
    sendData1(ev){
      const t12=this.state.t12
     
      
    const data={
        t12
           }
    
          
    
      Axios.get('http://localhost/search1.php',{params:data}).then(response=>{
        console.log(response);
        this.setState({
        message:response.data.response,
        kalu: response.data.responses ,
        })
        }).catch(err=>{
        console.log("Failed");
        }
        
        
        )
    
      }

       



    fun(e){
      this.setState({
     [e.target.name]:e.target.value     
      })
    }
    handleInputChange = event => 
       this.setState({[event.target.name]: event.target.value})
 
    sendData(ev){
      const t1=this.state.t1
      const t2=this.state.t2
      const t3=this.state.t3
      const t4=this.state.t4
      const t5=this.state.t5
      const t6=this.state.t6
      const t7=this.state.t7
      const t8=this.state.t8
      const t9=this.state.t9
      const t10=this.state.t10
      const t11=this.state.t11


      
    
      const data={
          t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11
             }
             
      Axios.get('http://localhost/display.php',{params:data}).then(response=>{
    console.log(response);
    this.setState({
    message:response.data.response
    })
    }).catch(err=>{
    console.log("Failed");
    })
    }
      
    
    
    
    componentDidMount(){
      

     
        Axios.get('http://localhost/add2.php').then(response=>{
          this.setState({kalu: response.data.responses})  

        }).catch(err => {
            console.log("Failed");
        })

    }
  
 render(){
    const { classes} = this.props
    

    return (
      <div className={classes.root}>
        

        <AppBar position="static" className={classes.head}>
          <Toolbar>
              
            <div className={classes.title}>
            <Button a href="/"  color="inherit" > Product Added By You</Button>
                     
      </div>
           
          </Toolbar>
        </AppBar>
       
        
        
        <Grid item xs={12}>
        <div className={classes.head}>
      <TextField variant="outlined" margin="normal" width="150" name="search"  autoComplete="Name" label="What are you looking for" type="name"  name="t12" autoComplete="Name"  value={this.state.t12} autoFocus onChange={this.fun1.bind(this)}/> 
        
      <Button onClick={this.sendData1.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>Search </Button>

</div>
        <Grid container justify="center" >
                  {    this.state.kalu.map((ag,key) => 
                      <div key>
       
       
       
 
   <Container component="main">
        <CssBaseline />
        

        
        <div className={classes.paper}>
  
                           
  
  
  <Card className={classes.card1}>
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image={ag.image}
        
          />
          <CardContent>
          <Typography type gutterBottom variant="h10" component="h2" value={this.state.t1=localStorage.getItem('user')}>
              
              
              
            </Typography>
            <Typography >          
            <div type font-size="40px" value={this.state.t2=ag.manu} onChange={this.fun.bind(this)}>
              Manufacturer :{ag.manu}
            </div>
          <div type gutterBottom variant="h10" component="h2"  value={this.state.t3=ag.productid}>
              ProductId :{ag.productid}
            </div> 
            <div type gutterBottom variant="h10" component="h2"  value={this.state.t4=ag.product}>
                   Product :{ag.product}
            </div> 
            <div gutterBottom variant="h10" component="h2" name="t5" value={this.state.t5=ag.categories}>
              Category :{ag.categories}
            </div>
            <div gutterBottom variant="h10" component="h2" name="t6" value={this.state.t6=ag.subcategories}>
              SubCategory :{ag.subcategories}
            </div>
            <div gutterBottom variant="h10" component="h2" name="t7" value={this.state.t7=ag.prodescription}>
            Product Description :{ag.prodescription}
            </div> 
            <div gutterBottom variant="h10" component="h2" name="t8" value={this.state.t8=ag.stock}>
            Stock :{ag.stock}(Max order)
            </div>
            <Typography gutterBottom variant="h8" component="h3" name="t9" value={this.state.t9=ag.price}>
            Price :Rs.{ag.price}
            </Typography>
            <div gutterBottom variant="h10" component="h2" name="t10" value={this.state.t10=ag.image}>
            {/* Price :{ag.price} */}
          </div>
            <div gutterBottom variant="h10" component="h2"> Quantity:
            <input type="number" value={this.state.t11} name="t11" 
                 onChange={this.handleInputChange} className="float-right" 
                 style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}></input>
           </div>
           </Typography>
            <center> 
              <Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" value={key} className={classes.submit}>ADD TO CART </Button></center>
 
           
          </CardContent>
        </CardActionArea>
      </Card>
            {this.state.message} 
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
  export default withStyles(useStyles)(Home2);