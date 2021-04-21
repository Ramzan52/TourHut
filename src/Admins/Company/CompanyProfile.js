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
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles({
  list: {
    width: 550,
  },
  fullList: {
    width: 'auto',
  },
});
export default function CompanyProfile(){
  const classes = useStyles();
  return(
    
      <div>
   <Typography className="d-flex justify-content-center align-items-center" component="h1" variant="h4">
                    Company Details
                  </Typography>
                  <div style={{ border:"2px solid black",margin:"30px"  }} >
                    
      <img src="./images/bg6.jpg" alt="logo"style={{ width: '100%' ,height:'30rem' }}></img>
                   <div style={{"padding-left":"390px" }}>
                  
                  <div style={{ width: "600px", padding: 20 }}>
                  <div col-12>
                    <span><h3><strong>Name:</strong>Tour Hunt</h3></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>Phone Number:</strong>03314115573</h3></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>Email:</strong>rarifkhalil123@gmail.com</h3></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>Facebook Page Link:</strong>rassjsjdjs</h3></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>About:</strong></h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam aliquam diam eu neque condimentum malesuada. Vivamus
                    aliquam ante et arcu aliquam, a rhoncus nisi luctus. Sed
                    ultrices varius justo, suscipit venenatis nulla consequat
                    sed. Morbi nulla nunc, vulputate non ligula vitae, ornare
                    interdum libero. Suspendisse at tristique quam, et dapibus
                    ligula. Phasellus ac risus viverra, dictum justo in,
                    vehicula dui. Duis eu interdum massa. Vivamus in finibus
                    nibh. Proin felis purus, suscipit in tristique a, tempor
                    tincidunt nisi. Donec dictum mi vitae tincidunt imperdiet.
                    Aliquam in lorem convallis, tempus ante id, egestas nibh.
                    Aenean gravida leo quis dolor facilisis, non fringilla nulla
                    gravida. Ut id nisi venenatis, tristique nisi in, facilisis
                    metus. Morbi cursus elit ac justo hendrerit pharetra.</p></span>
                  </div>
                  <div col-12>
                    <span><h3><strong>Address:</strong></h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam aliquam diam eu neque condimentum malesuada. Vivamus
                    aliquam ante et arcu aliquam, a rhoncus nisi luctus. Sed
                    ultrices varius justo, suscipit venenatis nulla consequat
                    sed. Morbi nulla nunc, vulputate non ligula vitae, ornare
                    interdum libero. </p></span>
                  </div>
                  </div>
               
                    
                    
                      
                    
                   </div></div>
                  
                  <br/>  <br/>  
                  <div className="d-flex justify-content-center align-items-center diver">
      Pictures
      </div>
           <br/>   <br/><br/><br/><br/><br/>   
      </div>
        );}
