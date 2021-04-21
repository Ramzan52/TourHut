import React from "react";
import N from './N';
import {Button} from "react-bootstrap"
import SearchBar from "material-ui-search-bar";
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import  "./Styles/Banner.css";
function Banner() {
  const [value, onChange] = useState(new Date());
return(
  <div>
    <N/>
      <img class="image_search" src="./Images/Banner.jpg" alt="Loading"/>
    
  <div id="form-box">
    <form>
   
      <div id="input-group">
        <div > <SearchBar/></div>
      
          </div>
      
    </form>
 
  </div>
</div>
);}
export default Banner;



