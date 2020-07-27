import React,{Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'react-toastify/dist/ReactToastify.css'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Axios from 'axios';
// import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


const useStyles = ((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    formControl: {
      // margin: theme.spacing(10),
      minWidth: 400,
    },
    
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 0),
    },
  }));

  
 class Addproduct extends Component
  {
  constructor()
{
    super();
    this.state={
      manu:"",
      // productid:"",
        product:"",
        categories:"",
       subcategories:"",
        prodescription:"",
        stock:"",
        price:"",
        image:"",
        kalu:[],
            k:[],
        message:""
    }
}


componentDidMount(){
  Axios.get('http://localhost/cate.php').then(response=>{
          this.setState({kalu: response.data.responses})  
          Axios.get('http://localhost/subcate.php').then(response=>{
            this.setState({k: response.data.responses1})  
          
          console.log(response.data.responses)
          console.log(response.data.responses1)
      })}).catch(err => {
            console.log("Failed");
        })

}

handleChange = (event) => {
  // setAge(event.target.value);
  this.setState({age:event.target.value})
  this.setState({a:event.target.value})
  this.setState({
      ...this.state,
      [event.target.name]: event.target.value
  })
};


fun(e){
    this.setState({
   [e.target.name]:e.target.value     
    })
  }
  
  sendData(ev){
    const manu=this.state.manu
    // const productid=this.state.productid
    const product=this.state.product
    const categories=this.state.categories
    const subcategories=this.state.subcategories
    const prodescription=this.state.prodescription
    const stock=this.state.stock
    const price=this.state.price
    const image=this.state.image
    
    
  
    const data={
        manu,product, categories, subcategories, prodescription, stock, price, image
           }
           
    Axios.get('http://localhost/add.php',{params:data}).then(response=>{
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
           <Box color="text.primary" clone>
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <center> <img src="\tradeit.png" width="160" height="150"/></center>
    <Typography component="h1" variant="h5">
      EDIT FORM
    </Typography>


<div className={classes.form} noValidate>
<Typography name="manu" value={this.state.manu=localStorage.getItem("user")}></Typography>
{/* <TextField variant="outlined" margin="normal" required fullWidth label="productid"
 name="productid"  value={this.state.productid} autoComplete="Name" autoFocus onChange={this.fun.bind(this)}/>  */}
<TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoFocus onChange={this.fun.bind(this)}
                id="u"
                label="Product Name"
                autoComplete="Name" 
               
                name="product" value={this.state.product}
              />
       <div className={classes.f}>
      <FormControl className={classes.formControl}>
         
      <InputLabel onChange={this.fun.bind(this)} id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         name="categories"
         value={this.state.categories}
         onChange={this.fun.bind(this)}
          // value={this.state.t1=ag.category}
          // onChange={this.handleChange.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.kalu.map((ag,key) => 
                
          <MenuItem name="categories"  value={ag.category}>{ag.category}</MenuItem>
        
          
        
           )}
          {/* <MenuItem value={10}>Hello</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        
        {/* <FormHelperText>All Vehicle ID's are dispalyed here</FormHelperText> */}
      </FormControl>
      
      </div>
      <div>
                        <FormControl className={classes.formControl}>
        <InputLabel >Subcategory</InputLabel>
        <Select
          name="subcategories"
        value={this.state.subcategories}
        onChange={this.fun.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.k.map((ag,key) => 
          // localStorage.setItem('category',JSON.stringify((ag.category),null,"  ")),
                    // <div k
                    // t1=localStorage.getItem('category'),
          <MenuItem name="subcategories" value={ag.subcategory}>{ag.subcategory}</MenuItem>
          // </div>
       )}
        {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        {/* <FormHelperText>All Driver Names are dispalyed here</FormHelperText> */}
      </FormControl>
       </div>
       <div>
       {/* <center> <Button className={classes.o} variant="contained" color="primary" fullWidth onClick={this.sendData.bind(this)}  >
                    Add
                  </Button></center> */}
       </div> 
       

<TextField variant="outlined" margin="normal" required fullWidth label="Product Description"
 name="prodescription" autoComplete="Name"  value={this.state.prodescription} autoFocus onChange={this.fun.bind(this)}/> 
<TextField variant="outlined" margin="normal" required fullWidth label="Stock Available in units" name="stock"  value={this.state.stock} autoComplete="Address" autoFocus onChange={this.fun.bind(this)}/>               

<TextField variant="outlined" margin="normal" required fullWidth label="Price In Rupees" name="price"  value={this.state.price} autoFocus onChange={this.fun.bind(this)}/>


<form name="form1" method="post" action="" enctype="multipart/form-data"> 
<TextField varient="outlined" input type="file" name="image" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"  value={this.state.image} autoFocus onChange= {this.fun.bind(this)} />

</form>



<Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>ADD </Button>

{this.state.message}                  


              </div>
</div>
</Container>

              )}</Box>
              </div>              

        );
    }

}
export default withStyles(useStyles)(Addproduct);
