import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from '../Components/Banner';
import N from '../Components/N';
import Card from '.././Components/TourCard';
import SerachBar from '../Components/SearchBar';
import Loading from '../Components/Loading';
import { GET_NEAR_TOURS } from "../Redux/Actions/Actions";
import { GET_FAMILY_TOURS } from "../Redux/Actions/Actions";
import { GET_COUPLE_TOURS } from "../Redux/Actions/Actions";
import  "./Styles/Home.css";
function Home(){
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
const near_tours = useSelector(state => state.User.near_tours)
const family_tours = useSelector(state => state.User.family_tours)
const couple_tours = useSelector(state => state.User.couple_tours)

  useEffect(() => {
    
    dispatch(GET_NEAR_TOURS(()=>{
      setTimeout(() => {
         setLoading(true)
      }, 3000);
     
    }))
    dispatch(GET_FAMILY_TOURS(()=>{
      setTimeout(() => {
         setLoading(true)
      }, 3000);
     
    }))
    dispatch(GET_COUPLE_TOURS(()=>{
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
<Banner/><br/>
<div className="d-flex justify-content-center align-items-center diver">
Near By Tours
</div>
<div className="d-flex d.column flex-wrap">{near_tours.map((item,i)=><Card key={i} data={item}/>)}</div>
<div className="d-flex justify-content-center align-items-center diver">
Family Tours
</div>
<div className="d-flex d.column flex-wrap">{family_tours.map((item,i)=><Card key={i} data={item}/>)}</div>
<br/>
<div className="d-flex justify-content-center align-items-center diver">
Couple Tours
</div>
<div className="d-flex d.column flex-wrap">{couple_tours.map((item,i)=><Card key={i} data={item}/>)}</div>
</div>



  );}
  export default Home;