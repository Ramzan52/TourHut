import React from "react";
import N from '../Components/N';
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
const useStyles = makeStyles({
  list: {
    width: 550,
  },
  fullList: {
    width: 'auto',
  },
});
function Company({data}){
  const classes = useStyles();
  const history = useHistory();
  return(
<div>
<N/><br/>
<div>
   <Typography className="d-flex justify-content-center align-items-center" component="h1" variant="h4">
                    Company Details
                  </Typography>
                  <div style={{ border:"2px solid black",margin:"30px"  }} >
                    
      <img src="./images/bg6.jpg" alt="logo"style={{ width: '100%' ,height:'30rem' }}></img>
                   <div style={{"padding-left":"390px" }}>
                  
                  <div style={{ width: "600px", padding: 20 }}>
                  <div col-12>
                    <span><h3><strong>Name:</strong>{data.Title}</h3></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>Phone Number:</strong>{data.Phone_No}</h3></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>Email:</strong>{data.Email}</h3></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>Facebook Page Link:</strong>{data.Facebook}</h3></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>About:</strong></h3><p>{data.About}</p></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>Address:</strong></h3><p>{data.Address} </p></span>
                  </div>
                  </div>
               
                    
                    
                      
                    
                   </div></div>
           
                  
        
            
            <br/>  <br/>  
            <div className="d-flex justify-content-center align-items-center diver">
{data.Pictures}
</div>
     <br/>   <br/><br/><br/><br/><br/>   
</div></div>
  );}
  export default Company;