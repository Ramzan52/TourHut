import React from "react";
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
import Dashboard from '../Company/CompanyProfile';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Form } from "react-bootstrap";
const useStyles = makeStyles({
  list: {
    width: 550,
  },
  fullList: {
    width: 'auto',
  },
});
export default function AccountSetting(){
  const classes = useStyles();
  return(
  <div>
   
  <Typography className="d-flex justify-content-center align-items-center" component="h1" variant="h4">
           Account Setting
            </Typography><br/>
            <Typography className="d-flex justify-content-center align-items-center" component="h1" variant="h6">
         New Password
            </Typography>
            
            <div style={{ }} ><form className={classes.form}>
                    
                    
                                 <div style={{"padding-left":"390px" }}>
                                  <TextField
                                    className="col-8"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                   
                                    label="New Password"
                                    name=""
                                    autoComplete=""
                                    autoFocus
                                  />
                                 
                                  
                                
                                
                                  
                                 
                             
                                 </div>
                                 
                                 <div className="d-flex justify-content-center align-items-center " style={{'margin-top':"10px",'margin-bottom':"10px" }}>
                                <Button variant="success" size="lg">Update</Button>
                    </div>
                           
                                 </form></div>
                                
                                <br/>
                                       <br/>  
      
</div>);}
