import React from "react";
import {
  Button,
  Form,
  NavDropdown,
  FormControl,
  Nav,
  Navbar,

} from "react-bootstrap";
import  { useState } from "react";
import Sign from '../Pages/Sign_In'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from "@material-ui/core/Avatar";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RIGHT } from "../Redux/Actions/Actions";



const useStyles = makeStyles({
  list: {
    width: 550,
  },
  fullList: {
    width: 'auto',
  },
});

function N() {
  const classes = useStyles();
  const history = useHistory();
  const right = useSelector(state => state.User.right)
  const dispatch = useDispatch()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [show, setShow] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    // setState({ ...state, [anchor]: open });
    dispatch(RIGHT(!right))
  };

 

return(
  <div>
<Navbar bg="dark" expand="lg">
  <Navbar.Brand href="" className="header">Tour Hunt</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="link">
        
      <Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="link"><Link to="/tour">Tour</Link></Nav.Link>
      <Nav.Link href="link"><Link to="/company">Companies</Link></Nav.Link>
      <Nav.Link href="link"><Link to="/about">About</Link></Nav.Link>
      {/* <Nav.Link href="link"><Link to="/about">Wheather</Link></Nav.Link> */}
    </Nav>
    <Nav.Link href="link">
    <Link to="/Reg_Comp">Register Company</Link></Nav.Link>
    <Nav.Link href="link"> <Link to="/signup">Sign Up</Link></Nav.Link>
     <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
         
          <Button  variant="outline-success"  onClick={toggleDrawer(anchor, true)}>Sign In</Button>
          <Drawer anchor={anchor} open={right} onClose={toggleDrawer(anchor, false)}>
          
          <Typography className="d-flex justify-content-center align-items-center" component="h1" variant="h4">
              Sign In
            </Typography>
            <form className={classes.form}>
              <TextField
               
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
              
              
                autoComplete="current-password"
              />
              <div className="d-flex justify-content-center align-items-center "><FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              </div>
            
              <div className="d-flex justify-content-center align-items-center ">
                
              <Button variant="success" size="lg" onClick={() => history.push('/companyID')} >Sign In</Button>
              <Button variant="success" size="lg" onClick={() => history.push('/admin')} >Admin</Button>

              </div>
              
              {/* <CircularProgress color="secondary" />; */}
             
           
             </form>
           
          </Drawer>
        </React.Fragment>
      ))}
    </div> 
    
   </Navbar.Collapse>
  
</Navbar>
  
  
  </div>
);}
export default N;

