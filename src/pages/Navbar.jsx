import { Outlet, Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useEffect } from "react";
import mylogo from "./../projectimages/detailogo.png";

function Navbar({isloggedin}) {

     //selected link
     let activePage = window.location.pathname;

     //match selected link and add active attribute
    useEffect(() => {
    const navlinks = document.querySelectorAll('.nav-link')
  
    navlinks.forEach(link => {
  
      if (window.location.href === link.href){
        link.classList.add('active')
      }
    })
   
    },[activePage])


  return (
  <div className="bg-dark nav">
    <nav className="navbar navbar-expand-md navbar-dark justify-content-end">
      <div className="col-md-4 mylogo">
    <img src={mylogo} className="img-fluid" alt=" " style={{width: '25%' ,height: '25%'}}/>
    <a className="navbar-brand" href="#mynavbar">(757) 581-9156</a>
    </div>
   
   <div className="col-md-8 pages">
    <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#mynavbar" 
            aria-expanded="false" 
            aria-controls="mynavbar"
            aria-label="toggle-navigation"
            >
     <span className="navbar-toggler-icon"></span>
  </button>

    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto nav-justified">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'none': 'block'}}>
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'none': 'block'}}>
          <Link to="./register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/comment" className="nav-link">Comment</Link>
        </li>
        <li className="nav-item">
          <Link to="/cost" className="nav-link">Cost</Link>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'block': 'none'}}>
          <Link to="./logout" className="nav-link">Logout</Link>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'block': 'none'}}>
          <Link to="./makeAppointment" className="nav-link">Appointments</Link>
        </li>
      </ul>
  </div>
  </div>
</nav>
<Outlet/>
</div>
  );
}

export default Navbar;