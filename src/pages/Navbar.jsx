import { Outlet, Link } from "react-router-dom";
import "./../styles/Navbar.css";
import { useEffect } from "react";

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
    <a className="navbar-brand" href="#mynavbar">bossdetail.com</a>
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
        <li className="nav-item" style={{display: isloggedin? 'block': 'none'}}>
          <Link to="./logout" className="nav-link">Logout</Link>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'block': 'none'}}>
          <Link to="./makeAppointment" className="nav-link">Appointments</Link>
        </li>
      </ul>

      <form className="d-flex search" >
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
  </div>
</nav>
<Outlet/>
</div>
  );
}

export default Navbar;