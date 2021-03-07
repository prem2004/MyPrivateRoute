import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'

const PrivateRoute = ({component:Component},...ar) => {
    const[isauth,setauth]=useState(true)
   if(isauth)  
   {
       return(<Component {...ar}></Component>) 
   } 
   else{
       return(<Redirect to="/Login"></Redirect>)
   }
}

export default PrivateRoute
