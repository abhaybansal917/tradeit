import React,{ Component} from 'react';
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

 class Signup2 extends Component
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
  const t5=this.state.t5
  const t6=this.state.t6
  const t7=this.state.t7
  const t8=this.state.t8
  
  

  const data={
      t1,t2,t3,t4,t5,t6,t7,t8         }
  Axios.get('http://localhost/sign.php',{params:data}).then(response=>{
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
     <b> Sign Up </b>
    </Typography>


<div className={classes.form} noValidate>
<TextField varient="outlined" margin="normal" required fullWidth id="name" type="name" label="Name" name="t1" autoComplete="Name"  value={this.state.t1} autoFocus onChange={this.fun.bind(this)}></TextField>
<TextField varient="outlined" margin="norrmal" required fullWidth id="contact no"type="number" label="Contact No" name="t2" autoComplete="contact no."  value={this.state.t2} autoFocus onChange={this.fun.bind(this)}></TextField> 
<TextField varient="outlined" margin="normal" required fullWiidth id="Aadhaar no" label="Aadhaar No" name="t3" type="name" autoComplete="aadhaar no."  value={this.state.t3} autoFocus onChange={this.fun.bind(this)}></TextField>
<TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="t4" autoComplete="email" autoFocus  value={this.state.t4} onChange={this.fun.bind(this)}/> 
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Password" name="t5" type="password" id="password" autoComplete="current-password"  value={this.state.t5}  onChange={this.fun.bind(this)} /> 
<TextField varient="outlined" margin="normal" required fullWidth id="company name" type="name" label="Company Name" name="t6" autoComplete="company name"  value={this.state.t6} autoFocus onChange={this.fun.bind(this)}></TextField>
<TextField varient="outlined" margin="normal" required fullWidth id="company type" type="name" label="Company Type" name="t7" autoComplete="company type"  value={this.state.t7} autoFocus onChange={this.fun.bind(this)}></TextField>

<FormControl component="fieldset">
      <FormLabel component="legend">select</FormLabel>
      <RadioGroup  aria-label="profession" name="t8" >
<FormControlLabel value="Wholesaler" control={<Radio />} name="t8" label="Wholesaler" onChange={this.fun.bind(this)}/>
    <FormControlLabel value="Manufacturer" control={<Radio />} name="t8" label="Manufacturer" onChange={this.fun.bind(this)}/>
    </RadioGroup>
    </FormControl>
                  
<Button a href="/Login2" onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>Submit </Button>

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
export default withStyles(useStyles)(Signup2);