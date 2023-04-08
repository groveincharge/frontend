import Register from './pages/userPages/Register';
import Login from './pages/userPages/Login';
import Logout from './pages/userPages/LogoutPage';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NoPage from './pages/NoPage';
import About from './pages/commentPages/About';
import Comment from './pages/commentPages/Comment';
import ProtectedRoutes from './pages/ProtectedRoutes';
import DetailHeader from './pages/DetailHeader';
import MakeAppointment from './pages/appointmentPages/MakeAppointment';
import Address from './pages/appointmentPages/Address';


import { useState, useEffect } from 'react';

function App() {

  const [isloggedin, setIsloggedin] = useState(false)

   useEffect(()=>{
    const user_id = localStorage.getItem('user_id');
    if (user_id){
      setIsloggedin(true)
    }
  else {
    setIsloggedin(false)
  }
   },[])

  return (
      <div className='container'>
      
      <BrowserRouter >
      <DetailHeader/>
       <Routes>
        <Route path="/" element={<Navbar 
                                    isloggedin={isloggedin}
                                  />}>
          <Route index element={<Home />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login setIsloggedin={setIsloggedin}/>}/>
  
          <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/comment" element={<Comment/>}/>
            <Route path="/address" element={<Address/>}/>
            <Route path="/makeAppointment" element={<MakeAppointment/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
    
  );
}

export default App;