import React from "react";
import  { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button } from "react-bootstrap";
import clsx from 'clsx';
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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useHistory } from 'react-router-dom';

import "../../../Components/Styles/Card.css";
const useStyles = makeStyles({
  list: {
    width: 550,
  },
  fullList: {
    width: 'auto',
  },
});
export default function TourCard() {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
 


  return (
    <Card style={{ width: '25rem' ,  margin:"25px"}}>
    <Card.Img style={{ height:'15rem'}} variant="top" src="holder.js/100px100" />
    <Card.Body >
      <Card.Title>Murree</Card.Title>
      <Card.Text>
      TOUR TO MUREEE   TOUR TO MUREEE  TOUR TO MUREEE  TOUR TO MUREEE  TOUR TO MUREEE  TOUR TO MUREEE  TOUR TO MUREEE  TOUR TO MUREEE  TOUR TO MUREEE  TOUR TO MUREEE  TOUR TO MUREEE  TOUR TO MUREEE
      </Card.Text>
      <div >
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
         <div className="d-flex d.column flex-wrap"><Button style={{ margin:'10px'}} className="d-flex justify-content-center align-items-center"   variant="success" size="lg"  onClick={toggleDrawer(anchor, true)}>View</Button>
          <Button style={{ margin:'10px'}} className="d-flex justify-content-center align-items-center"   variant="danger" size="lg" >Delete</Button></div>
          <Drawer   anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
          <div style={{ width: "600px", 'text-align':'center'}}>
         <Typography className="d-flex justify-content-center align-items-center" component="h1" variant="h4">
              Tour Details
            </Typography>
            
            <form >
              <TextField
               className="col-8"
                variant="outlined"
                margin="normal"
                required
                
                label="Tour Name"
                name=""
                autoComplete=""
                autoFocus
              />
               <TextareaAutosize className="col-8" style={{  'margin-top':"10px" }}  rowsMin={5}  placeholder= "Description" />
              
              <TextField
              className="col-8"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Departure Date"
                label="Departure Date"
                type="Departure Date"
              
              
                autoComplete=""
              />
               <TextField
               className="col-8"
                variant="outlined"
                margin="normal"
                required
             
                name="No of Days"
                label="No of Days"
                type="text"
              
              
                autoComplete="current-password"
              />
              <TextareaAutosize className="col-8" style={{'margin-top':"10px" }}  rowsMin={5}  placeholder="Complete Plan" />
              <TextField
              className="col-8"
                variant="outlined"
                margin="normal"
                required
                name="price"
                label="price"
                type="number"              
              />
              
             
            
   <div className="d-flex justify-content-center align-items-center ">
              <Button variant="success" size="lg " style={{ 'margin-top':"10px" }} >Update</Button></div>
            
             
           
             </form>
           
    
          </div>
          </Drawer>
       
        </React.Fragment>
      ))}
    </div> 
      
    </Card.Body>
   
  </Card>
  
);}
