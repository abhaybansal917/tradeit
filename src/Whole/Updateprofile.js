import React,{ Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Axios from 'axios';



const useStyles = ((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));
 class Updateprofile extends Component
  {
  constructor()
{
    super();
    this.state={
      t1:"",
      t2:"",
      t3:"",
     t4:"",
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
  const t3=this.state.t3
  const t4=this.state.t4

  const data={
      t1,t2,t3,t4
         }
  Axios.get('http://localhost/updateprofile.php',{params:data}).then(response=>{
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
    <b> Update Profile</b>
    </Typography>


<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="Contact" placeholder={localStorage.getItem("contact")} label="Contact" name="t2" autoComplete="Contact" autoFocus onChange={this.fun.bind(this)}/> 
<TextField variant="outlined" margin="normal" required fullWidth id="Password" placeholder={localStorage.getItem("Password")} label="Password" name="t3" autoComplete="Password" autoFocus onChange={this.fun.bind(this)}/> 
<TextField variant="outlined" margin="normal" required fullWidth id="Email" label="Email" placeholder={localStorage.getItem("Email")} name="t4" autoComplete="Email" autoFocus onChange={this.fun.bind(this)}/> 
 
<Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>Update</Button>

{this.state.message}  
  </div>
</div>
</Container>

               )}
               </div>    
               </div>            

       );
    }

}
export default withStyles(useStyles)(Updateprofile);