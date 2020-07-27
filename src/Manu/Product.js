
import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const useStyles = ((theme) =>({
  root: {
    width: '100%',
    
  },
}));

class Product extends Component {

    render()
    {
    const {classes} = this.props
  
    return (
    <div className={classes.root}>
        <Typography variant="h3" gutterBottom align="center">
                            PRODUCT 
                            </Typography>
      <Typography variant="body1" gutterBottom>



      <ul><li>
<Link
component="button"
variant="body2"
onClick={() => {
alert("product");
console.info("I'm a button.");
}}
>
what kind of products can we sell?
</Link></li>
<li>
<Link
component="button"
variant="body2"
onClick={() => {
alert("product");
console.info("I'm a button.");
}}
>
How can we sell our products?
</Link></li></ul>
</Typography>
    </div>
  );
}
}
export default withStyles(useStyles)(Product);



