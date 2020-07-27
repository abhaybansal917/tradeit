import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Updateprofile from '../Whole/Updateprofile';
import Axios from 'axios';
const useStyles = ((theme) =>({
  root: {
    width: '100%',
    // maxWidth: 500,
  },
      head:{
        marginTop:10,
       padding:5,
        marginLeft:200,
      },
    back:{
     paddingTop:100,
      paddingBottom:30,
       },
      paper: {
       
        marginTop:-100,
      
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
        // marginTop: 500,
        marginTop: theme.spacing(4),
        
        
      },
}));

class Profile1 extends Component {
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


    render()
    {
    const {classes} = this.props
    
    return (

      <div className={classes.back}>
           
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <center><img src="/tradeit.png" alt="trade" width="150" height="150"></img></center> 
    <Typography component="h1" variant="h5">
    Profile
    </Typography>


<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="email" label="Username" value={localStorage.getItem('name') } /> 
                  
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Contact" value={localStorage.getItem('contact') }  /> 
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Aadhaar no." value={localStorage.getItem('Aadhar') }  /> 
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Email id" value={localStorage.getItem('Email') }/> 
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Company Name" value={localStorage.getItem('companyname') } /> 
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Company Type" value={localStorage.getItem('companytype') } /> 
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Profession" value={localStorage.getItem('profession') }  /> 


<Button a href="/Whole/Updateprofile" size="small" variant="contained" color="primary" className={classes.submit}>Edit Profile </Button>
</div>
            
</div>
</Container>

    
  </div>
  );
}
}
export default withStyles(useStyles)(Profile1);