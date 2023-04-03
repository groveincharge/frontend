import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user_id = localStorage.getItem('user_id');
  
  if(user_id){
    return true
  } else {
    return false
  }
}

const  ProtectedRoutes=() =>{

  const auth=useAuth();
  console.log(`auth from inside ProtectedRoutes ${auth}`)

  return auth?<Outlet/>: <Navigate to="/login"/>
}

export default ProtectedRoutes;