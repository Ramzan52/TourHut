import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from 'react-router-dom';
import "../Components/Styles/SignIn.css"

export default function Sign_In({ handleShow, handleClose, show }) {
  const history = useHistory();
  
 
  return (
    <>
 

     <React.Fragment>
     <Typography variant="h6" gutterBottom >
       Recepit
      </Typography>
      <div>
      <div className="col-4">
          <TextField
            required
            id="Tour Name"
            label="Tour Name"
            fullWidth
            autoComplete="Tour Name"
        
          />
        </div>
        <div className="col-4">
          <TextField  
            required
            id="No of seat"
            label="No of seat"
            fullWidth
            autoComplete="No of seat"
        
          />
 </div>
      <div className="col-4">
          <TextField
            required
            id="Total"
            label="Total"
            fullWidth
            autoComplete="Total"
        
          />
</div>
        
    </div>    
      <Typography variant="h6" gutterBottom color="error">
        Payment method coming soon!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
        
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
           
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
           
            autoComplete="cc-csc"
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveCard"
                value="yes"
            
              />
            }
            label="Remember credit card details for next time"
          />

        </Grid>
        <Grid item xs={12}>
        <Button variant="warning" size="lg " style={{ width: '25%' ,margin:'0 0 0 350px' }} onClick={() => history.push('/')} >Cancel</Button>
              <Button variant="success" size="lg " style={{ width: '25%' ,margin:'0 0 0 50px' }}   >Pay</Button>
             </Grid>
      </Grid>
    </React.Fragment>
      
    </>
  );
}
