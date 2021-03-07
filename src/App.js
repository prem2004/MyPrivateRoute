import React,{Fragment} from 'react'
import './App.css';
import Demo from './Demo';
import Home from './Home';
import Login from './Login'
import DashBord from './DashBord'
import PrivateRoute from './PrivateRoute'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

const App= ()=> {
  return (
    <Fragment>
      
    <Router>
      <div className="navdiv">
       <Link  to="/" className="lk">Home</Link>
       <Link to="/Login" className="lk">Login</Link>
       <Link to="/DashBord" className="lk">DashBord</Link> 
      </div> 
       <Switch>
       <Route exact path="/" component={Home}></Route>
       <PrivateRoute exact path="/DashBord" component={DashBord}/>
       <Route exact path="/Login" component={Login}></Route>
       

       </Switch>  
    </Router>
    </Fragment>
    
  
  );
}

export default App;
