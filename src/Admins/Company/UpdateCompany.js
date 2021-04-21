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
export default function UpdateCompany(){
  const classes = useStyles();
  return(
  <div>
   
  <Typography className="d-flex justify-content-center align-items-center" component="h1" variant="h4">
              Company Details
            </Typography>
            
            <div style={{ border:"2px solid black",margin:"30px"  }} ><form className={classes.form}>
                    
                    <img src="./images/bg6.jpg" alt="logo"style={{ width: '100%' ,height:'30rem' }}></img>
                                 <div style={{"padding-left":"390px" }}>
                                  <TextField
                                    className="col-8"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                   
                                    label="Company Name"
                                    name=""
                                    autoComplete=""
                                    autoFocus
                                  />
                                  <TextField
                                   
                                   variant="outlined"
                                   margin="normal"
                                   required
                                   className="col-8"
                                   label="Phone Number"
                                   name=""
                                   autoComplete=""
                                   autoFocus
                                 />
                                   <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    className="col-8"
                                    name="Email"
                                    label="Email"
                                    type="Email"
                                  
                                  
                                    autoComplete="Email"
                                  />
                                     <TextField
                                     
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    className="col-8"
                                    name="FaceBook Link"
                                    label="FaceBook Links"
                                    type="FaceBook Link"
                                  
                                  
                                    autoComplete="FaceBook Link"
                                  />
                                   <TextareaAutosize  className="col-8" style={{ width: "100%", 'margin-top':"10px" }}  rowsMin={5}  placeholder= "About" />
                                  
                                
                                
                                  <TextareaAutosize  className="col-8" style={{ width: "100%",'margin-top':"10px" }}  rowsMin={5}  placeholder=" Office Address" />
                                 
                             
                                 </div>
                                 
                                 <div className="d-flex justify-content-center align-items-center " style={{'margin-top':"10px",'margin-bottom':"10px" }}>
                                <Button variant="success" size="lg">Update</Button>
                    </div>
                           
                                 </form></div>
                                
                                <br/>
                                       <br/>  
                                <div className="d-flex justify-content-center align-items-center diver">
                    Pictures
                    </div>
<div className="d-flex justify-content-center align-items-center " style={{'margin-top':"20px"}}>
              <Button variant="success" size="lg">Upload Images</Button></div>
<br/>   
</div>);}
