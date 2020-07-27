import React,{ Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Redirect} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

const useStyles = ((theme) => ({
 back:{
   paddingTop:100,
    paddingBottom:30,
    },
    paper: {
     
     
      marginTop: theme.spacing(4),
      marginDown: theme.spacing(4),
     backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    
    },
    form: {
      padding:5,
      float: 'left',
      width: '90%', 
      marginTop: theme.spacing(4),
      
      
    },
    submit: {
      backgroundColor: '#004F9D',
      margin: theme.spacing(3, 0, 2),
    },
  }));

  class Login2 extends Component
  {
  constructor()
{
    super();
    this.state={
      t1:"",
      t2:"",
      t3:"",
     kalu:[],
      message:"" 
      }
}
fun(e){
  this.setState({
 [e.target.name]:e.target.value     
  })
}
sendData(ev){
  const t1=this.state.t1
  const t2=this.state.t2
  
  

  const data={
      t1,t2
         }
  Axios.get('http://localhost/log1.php',{params:data}).then(response=>{
console.log(response);
this.setState({
  kalu: response.data.responses ,
  message:response.data.response,
  })
  if(this.state.message=="no")
  { 
    alert("wrong information")
  }
  else{
    localStorage.setItem('user',this.state.t1)
    localStorage.setItem('userdetail',JSON.stringify((this.state.kalu),null,"  "))
   localStorage.setItem('currentuser',true)
 }
  }).catch(err=>{
  console.log("Failed");
  })
  }
  
  
      render(){
     localStorage.setItem('currentUser',false)
          const {classes} = this.props
          return (
            
              <div >
              <div>
                  
                  {   this.state.kalu.map((ag,key) => 
                  
                 localStorage.setItem('name',JSON.stringify((ag.name),null,"  ")),
                 
                
                  )
                      
                      
                  }
                  {   this.state.kalu.map((ag,key) => 
                  localStorage.setItem('contact',JSON.stringify((ag.contact),null,"  ")),
                  
                  )    
      }
      {   this.state.kalu.map((ag,key) => 
                  localStorage.setItem('Aadhar',JSON.stringify((ag.aadhar),null,"  ")),
                  
                  )    
      }
      {   this.state.kalu.map((ag,key) => 
                  localStorage.setItem('Email',JSON.stringify((ag.email),null,"  ")),
                  
                  )    
      }
      {   this.state.kalu.map((ag,key) => 
                  localStorage.setItem('Password',JSON.stringify((ag.password),null,"  ")),
                  )    
      }
      {   this.state.kalu.map((ag,key) => 
                  localStorage.setItem('companyname',JSON.stringify((ag.companyname),null,"  ")),
                  )    
      }
      {   this.state.kalu.map((ag,key) => 
                  localStorage.setItem('companytype',JSON.stringify((ag.companytype),null,"  ")),
                  
                  )    
      }
       {   this.state.kalu.map((ag,key) => 
                  localStorage.setItem('profession',JSON.stringify((ag.profession),null,"  "))
                  
                  )    
      }
              </div>
                
            
            <div className={classes.back}>
            {this.state.message=="manu"? <Redirect to="/Manu/Menu"/> : this.state.message=="whole"?<Redirect to="/Whole/Menu2"/>:(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <center><img src="/tradeit.png" alt="trade" width="150" height="150"></img></center> 
    <Typography component="h1" variant="h5">
      Log in
    </Typography>


<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="email" label="Username" name="t1" autoComplete="email" autoFocus onChange={this.fun.bind(this)}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Password" type="password" name="t2" id="password" autoComplete="current-password"  onChange={this.fun.bind(this)}/> 



<Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>Log In </Button>



                  <Grid container>
                    <Grid item xs>
                      <a href="/Forget" variant="body2">
                        {"Forgot password?"}
                      </a>
                    </Grid>
                    <Grid item>
                      < a href="/Signup2" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </a>
                      
                    </Grid>

                    
                  </Grid>
                  
              </div>
              
</div>

</Container>

              )
           
              }
              
               
              </div>
              
              </div>          
           
        );
    }

}
export default withStyles(useStyles)(Login2);