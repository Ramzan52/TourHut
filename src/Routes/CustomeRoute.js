import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import SignUp from '../Pages/SignUp';
import tour from '../Pages/tour';
import Company from '../Pages/company';
import Reg_Comp from '../Pages/Reg_Comp';
import Sign_In from '../Pages/Sign_In';
import Error from "../Pages/Error";
import OneCompany from "../Pages/OneCompany"
import CompanyAdmin from "../Admins/Company/Main";
import SiteAdmin from "../Admins/SiteAdmin/Main";
import CompanyProfile from "../Admins/Company/CompanyProfile";
import UpdateCompany from "../Admins/Company/UpdateCompany";
import AddTour from "../Admins/Company/AddTour";
import CompanyTours from "../Admins/Company/MyTours"
import OtherTour from "../Admins/Company/OtherTour";
import OtherCompany from "../Admins/Company/OtherCompany";
import CompanyUser from "../Admins/Company/User";
import Account from "../Admins/Company/Account"
import AllUser from "../Admins/SiteAdmin/User";
import RegCompany from "../Admins/SiteAdmin/Regcompany";
import Unregcompany from "../Admins/SiteAdmin/Unregcompany";
import AllTour from "../Admins/SiteAdmin/Tour";
import AccountSetting from "../Admins/SiteAdmin/AccountSetting";
export default function CustomeRoute() {
  return(
    <Router>
      <div>
        <Switch>
        <Route path="/alltour" exact component={AllTour} />
        <Route path="/accountsetting" exact component={AccountSetting} />
        <Route path="/regcompany" exact component={RegCompany} />
        <Route path="/Unregcompany" exact component={Unregcompany} />
        <Route path="/alluser" exact component={AllUser} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/tour" exact component={tour} />
        <Route path="/company" exact component={Company } />
        <Route path="/reg_comp" exact component={Reg_Comp} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/booking" exact component={Sign_In} />
        <Route path="/profile" exact component={OneCompany} />
        <Route path="/companyID" exact component={CompanyAdmin} />
        <Route path="/admin" exact component={SiteAdmin} />
        <Route path="/companyprofile" component={CompanyProfile} />
        <Route path="/updatecompany" component={UpdateCompany} />
        <Route path="/addtour" component={AddTour} />
        <Route path="/tourer" component={CompanyTours} />
        <Route path="/othertour" component={OtherTour} />
        <Route path="/othercompany" component={OtherCompany} />
        <Route path="/user" component={CompanyUser} />
        <Route path="/account" component={Account} />

        
        <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
