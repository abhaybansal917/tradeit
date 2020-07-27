import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const useStyles = ((theme) => ({
  palette: {
    primary: {
      main: '#004F9D',
    }},
    head:{
      marginTop:15,
     padding:5,
      marginLeft:200,
    },
  back:{
   paddingTop:20,
    // backgroundColor: '#004F9D',
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
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      padding:5,
      float: 'left',
      width: '90%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
      
      
    },
    submit: {
      backgroundColor: '#004F9D',
      margin: theme.spacing(3, 0, 2),
    },
  }));

 class Delete extends Component
  {
  constructor()
{
    super();
    this.state={
        t1:"",
          t2:"",
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
      t1,t2     }
  Axios.get('http://localhost/forget.php',{params:data}).then(response=>{
console.log(response);
this.setState({
message:response.data.response,

})
}).catch(err=>{
console.log("Failed");
})
}

render()
    {
        const {classes} = this.props
        return (
            <div>
            
            
            <div className={classes.back}>
              {this.state.pass}
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
 <center><img src="/tradeit.png" alt="trade" width="150" height="150"></img></center>
    <Typography component="h1" variant="h5">
     <b> Change Password </b>
    </Typography>


<div className={classes.form} noValidate>
<TextField varient="outlined" margin="normal" required fullWidth id="name" type="name" label="Username" name="t1" autoComplete="Name"  value={this.state.t1} autoFocus onChange={this.fun.bind(this)}></TextField>
 
<TextField varient="outlined" margin="normal" required fullWidth id="name" type="name" label="New Password" name="t2" autoComplete="Name"  value={this.state.t2} autoFocus onChange={this.fun.bind(this)}></TextField>
                  
<Button a href="/Login2"  onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>SUBMIT </Button>
<div>
                
                
    
                    </div>
                    
            </div>

                  
              
              </div>

</Container>

              )}
              </div>   
              </div>           

        );
    }

}
export default withStyles(useStyles)(Delete);