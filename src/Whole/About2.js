import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = ((theme) =>({
  root: {
    width: '100%',
    
  },
}));

class About2 extends Component {

    render()
    {
    const {classes} = this.props
  
    return (
    <div className={classes.root}>
        <Typography variant="h3" gutterBottom align="center">
                            About
                            </Typography>
      <Typography variant="body1" gutterBottom>

An innovative event that brought together Amazonians musically, virtually
The nation-wide lockdown might have distanced us, but music brought us all together…virtually! Welcome to Lockdown Legends 2020: Making history with Amazon India’s first-ever virtual music talent hunt!
By Day One Staff
on 19 June 2020
Facebook Share
Linked In Share
Twitter Share
Email Share

</Typography>
    </div>
  );
}
}
export default withStyles(useStyles)(About2);