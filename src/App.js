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
import CostCards from "./pages/pricePages/CostCards";
import InteriorDetail from "./pages/pricePages/InteriorDetail";
import ExteriorDetail from "./pages/pricePages/ExteriorDetail";
import MakeAppointment from './pages/appointmentPages/MakeAppointment';
import Address from './pages/appointmentPages/Address';
import AuthContext from "./context/AuthContext";
import { useState } from 'react';

function App() {

  const [authstatus, setauthstatus] = useState(false);

  const login = ()=> {
    const user_id = localStorage.getItem('user_id');
    if (user_id){
      setauthstatus(true)
    }
  else {
    setauthstatus(false)
  }
}
  return (
      <div className='container'>
      
      <BrowserRouter >
      <AuthContext.Provider value={{ status: authstatus, login: login }}>
       <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NoPage/>}/>
  
          <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/comment" element={<Comment/>}/>
            <Route path="/cost" element={<CostCards/>}/>
            <Route path="/cost/interior" element={<InteriorDetail/>}/>
            <Route path="/cost/exterior" element={<ExteriorDetail/>}/>
            <Route path="/address" element={<Address/>}/>
            <Route path="/makeAppointment" element={<MakeAppointment/>}/> 
          </Route>
        </Route>
      </Routes>
      <Footer/>
      </AuthContext.Provider>
    </BrowserRouter>
    </div>
    
  );
}

export default App;