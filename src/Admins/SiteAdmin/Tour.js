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
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import SearchBar from "material-ui-search-bar";
import OtherTourCard from "../Company/components/OtherTourCard";
import { GET_ALL_TOURS } from "../../Redux/Actions/Actions";
import Loading from '../../Components/Loading';
import "../../Components/Styles/Card.css";
const useStyles = makeStyles({
  list: {
    width: 550,
  },
  fullList: {
    width: 'auto',
  },
});
export default function Tour() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
const all_tours = useSelector(state => state.User.all_tours)
  useEffect(() => {
    
    dispatch(GET_ALL_TOURS(()=>{
      setTimeout(() => {
         setLoading(true)
      }, 3000);
     
    }))
  }, [])
  if(!loading){
return (<Loading />)
  }else
 return(
 <div>
   <div className="d-flex justify-content-center align-items-center "><h4>Tours</h4></div>

<div className="d-flex d.column flex-wrap">
 {/* <OtherTourCard/> <OtherTourCard/><OtherTourCard/> */}
 {all_tours.map((item,i)=><OtherTourCard key={i} data={item}/>)}
 </div>
 </div> 
);}
