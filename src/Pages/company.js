import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Components/Loading';
import { GET_APPROVE_COMPANY } from "../Redux/Actions/Actions";
import N from '../Components/N';
import SearchBar from "material-ui-search-bar";
import CompanyCard from '../Components/ComapnyCard';
function Company(){
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
const approve_company = useSelector(state => state.User.approve_company)
  useEffect(() => {
    
    dispatch(GET_APPROVE_COMPANY(()=>{
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
<div className="d-flex justify-content-center align-items-center diver">
All Companies
</div><br/>
<div className="d-flex justify-content-center align-items-center "><h4>Search Company</h4></div>
<div className="d-flex justify-content-center align-items-center "><SearchBar/>
</div>



<div className="d-flex d.column flex-wrap">
{approve_company.map((item,i)=><CompanyCard key={i} data={item}/>)}
</div>


</div>
  );}
  export default Company;