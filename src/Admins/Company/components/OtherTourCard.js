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
export default function OtherTourCard({data}) {
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
      <Card.Title>{data?.Title}</Card.Title>
      <Card.Text>
      {data?.Description}

      </Card.Text>
      <div >
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
         
          <Button  className="d-flex justify-content-center align-items-center"  style={{ margin:'0px 0px 0px 60px',width:'15rem'}} variant="success" size="lg"  onClick={toggleDrawer(anchor, true)}>View</Button>
          
          
          <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                <div style={{ width: "600px", padding: 20 }}>
                  <Typography
                    className="d-flex justify-content-center align-items-center"
                    component="h1"
                    variant="h4"
                  >
                 {data?.Title}

                  </Typography>
                  <h4>Description</h4>
                  <p>
                  {data?.Description}
       
                  </p>

                  <div class="row">
                    <div class="col-4">
                      <strong>Departure Date</strong>
                      <br />
                      {data?.Departure_Day}
                    </div>
                    <div class="col-4">
                      <strong>No of Days</strong>
                      <br />{data?.No_Of_Days}
                    </div>
                    <div class="col-4">
                      <strong>Price</strong>
                      <br />
                      {data?.Price}
                    </div>
                  </div>

                  <h4>Complete Plan</h4>
                  <p>
                  {data?.Plan}
                  </p>

              
                </div>
              </Drawer>
       
        </React.Fragment>
      ))}
    </div> 
      
    </Card.Body>
   
  </Card>
  
);}
