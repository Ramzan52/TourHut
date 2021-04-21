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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles({
  list: {
    width: 550,
  },
  fullList: {
    width: 'auto',
  },
});
export default function AddTour(){
  const classes = useStyles();
  const [category, setcategory] = React.useState('');

  const handleChange = (event) => {
    setcategory(event.target.value);
  };
  return(
  <div>
   
  <Typography className="d-flex justify-content-center align-items-center" component="h1" variant="h4">
              Add Tour Details
            </Typography>
            
            <div style={{ border:"2px solid black",margin:"30px"  }} ><form className={classes.form}>
                    
                    <img src="./images/bg6.jpg" alt="logo"style={{ width: '100%' ,height:'30rem' }}></img>
                                 <div style={{"padding-left":"390px" }}>
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
              
              
                autoComplete=""
              />
                <TextField
              className="col-8"
                variant="outlined"
                margin="normal"
                required
                name="price"
                label="price"
                type="number"              
              />
               <Select
               className="col-8"
               style={{'margin-top':"5px" }}
          value={category}
          onChange={handleChange}
          displayEmpty
         
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Select Tour Category
          </MenuItem>
          <MenuItem value={10}>Family Tour</MenuItem>
          <MenuItem value={20}>Group Tour</MenuItem>
          <MenuItem value={30}>Couple Tour</MenuItem>
        </Select>
              <TextareaAutosize className="col-8" style={{'margin-top':"10px" }}  rowsMin={5}  placeholder="Complete Plan" />
              <TextareaAutosize className="col-8" style={{  'margin-top':"10px" }}  rowsMin={5}  placeholder= "Description" />
              
                             
                                 </div>
                                 
                                 <div className="d-flex justify-content-center align-items-center " style={{'margin-top':"10px",'margin-bottom':"10px" }}>
                                <Button variant="success" size="lg">Add Tour</Button>
                    </div>
                           
                                 </form></div>
                                
                                <br/>
                                    
</div>);}
