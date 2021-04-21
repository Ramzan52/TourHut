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
export default function CompanyCard({data}) {
 
  const history = useHistory();
 


  return (
    <Card style={{ width: '25rem' ,  margin:"25px"}}>
    <Card.Img style={{ height:'15rem'}} variant="top" src={data.logo} />
    <Card.Body >
      <Card.Title>{data.Title}</Card.Title>
      <Card.Text>
     {data.About}
      </Card.Text>
      
             
            
 
    
  
      
    </Card.Body>
   
  </Card>
  
);}
