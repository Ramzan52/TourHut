import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import N from '../Components/N';
import SearchBar from '../Components/SearchBar';
import Card from '../Components/TourCard';
import Loading from '../Components/Loading';
import { GET_ALL_TOURS } from "../Redux/Actions/Actions";
function Tour(){
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
<div><N/><br/>
<div className="d-flex justify-content-center align-items-center "><h4>Search Your Tour</h4></div>
<div className="d-flex justify-content-center align-items-center "><SearchBar/>
</div>

<div className="d-flex justify-content-center align-items-center diver">
All Tours
</div>
<div className="d-flex d.column flex-wrap">{all_tours.map((item,i)=><Card key={i} data={item}/>)}</div>


</div>
  );}
  export default Tour;