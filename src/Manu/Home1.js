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
import TextField from '@material-ui/core/TextField';
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
    padding: 5,
  },
  head: {
    
  marginTop: 0,
    color: theme.palette.common.white,
  },
  root:{
    flexGrow: 1,
        padding: theme.spacing(2),
    marginTop:-105,
   
  },
  submit:{
marginTop:30,
  },
}));

class Home1 extends Component 
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
    fun(e){
      this.setState({
     [e.target.name]:e.target.value     
      })
    }
    sendData(ev){
      const t1=this.state.t1
     
      
    const data={
        t1
           }
    
          
    
      Axios.get('http://localhost/search.php',{params:data}).then(response=>{
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
      <TextField variant="outlined" margin="normal" width="150" name="search"  autoComplete="Name" label="What are you looking for" type="name"  name="t1" autoComplete="Name"  value={this.state.t1} autoFocus onChange={this.fun.bind(this)}/> 
        
      <Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>Search </Button>


                     
      </div>

      <Grid container justify="center" >
                {    this.state.kalu.map((ag,key) => 
                    <div key>
 <Container component="main">
      <CssBaseline />
     
      <div className={classes.paper}>
      <Card className={classes.card1}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
          image={ag.image}
          src="C:\Users\dell\project\public\images"
      
        />
        <CardContent>
          <Typography  >
        <div gutterBottom variant="h10" component="h2">
            ProductId :{ag.productid}
          </div>
          <div gutterBottom variant="h10" component="h2">
            Product :{ag.product}
          </div>
          <div gutterBottom variant="h10" component="h2">
            Categories :{ag.category}
          </div>
          <div gutterBottom variant="h10" component="h2">
            SubCategories :{ag.subcategory}
          </div>
          <div gutterBottom variant="h10" component="h2">
          Product Description :{ag.productdescription}
          </div>
          <div gutterBottom variant="h10" component="h2">
          Stock :{ag.stock}(Max order)
          </div>
          <Typography gutterBottom variant="h8" component="h3">
          Price :Rs.{ag.price}
          </Typography>
          </Typography>
          
        
        </CardContent>
      </CardActionArea>
    </Card>
    
  
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
export default withStyles(useStyles)(Home1);