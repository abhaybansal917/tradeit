import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const useStyles = ((theme) =>({
  root: {
    width: '100%',
    // maxWidth: 500,
  },
}));

class About2 extends Component {

    render()
    {
    const {classes} = this.props
  
    return (
    <div className={classes.root}>
        <Typography variant="h3" gutterBottom align="center">
                            ACCOUNTS 
                            </Typography>
      <Typography variant="body1" gutterBottom>



      <ul><li>
      <Link
  component="button"
  variant="body2"
  onClick={() => {
      alert("account");
    console.info("I'm a button.");
  }}
>
  how can i Change my personal info?
</Link></li>
<li>
      <Link
  component="button"
  variant="body2"
  onClick={() => {
      alert("account");
    console.info("I'm a button.");
  }}
>
  How can i contact to wholesaler account?
</Link></li></ul>
</Typography>
    </div>
  );
}
}
export default withStyles(useStyles)(About2);



