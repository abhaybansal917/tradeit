import React,{ Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

const useStyles = ((theme) => ({
  
  back:{
   paddingTop:20,
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
      width: '90%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
      
      
    },
    submit: {
      backgroundColor: '#004F9D',
      margin: theme.spacing(3, 0, 2),
    },
  }));

 class Cat extends Component
  {
  constructor()
{
    super();
    this.state={
        t1:"",
        t2:"",
        t3:"",
    
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
  const t3=this.state.t3
  

  const data={
      t1,t2,t3
         }
  Axios.get('http://localhost/cat.php',{params:data}).then(response=>{
console.log(response);
this.setState({
message:response.data.response
})
}).catch(err=>{
console.log("Failed");
})
}
render()
    {
        const {classes} = this.props
        {this.state.t3=localStorage.getItem('user')}
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
     <b> PRODUCT CATEGORIES </b>
    </Typography>


<div className={classes.form} noValidate>
<TextField varient="outlined" margin="normal" required fullWidth id="name" type="name" label="Category" name="t1" autoComplete="name"  value={this.state.t1} autoFocus onChange={this.fun.bind(this)}></TextField>

<TextField varient="outlined" margin="norrmal" required fullWidth id="name2"type="name" label="SubCategory" name="t2" autoComplete="name"  value={this.state.t2} autoFocus onChange={this.fun.bind(this)}></TextField> 
        <center>          
<Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}> ADD </Button>
{this.state.message}</center>                  
              
              </div>
</div>
</Container>

              )}
              </div>   
              </div>           

        );
    }

}
export default withStyles(useStyles)(Cat);