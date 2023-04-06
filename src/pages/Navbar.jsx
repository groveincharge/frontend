import { Outlet, Link } from "react-router-dom";
import "./../styles/Navbar.css";
import { useEffect } from "react";

function Navbar({isloggedin}) {


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
          <Link to="/" className="active">Home</Link>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'none': 'block'}}>
          <Link to="/login" className="active">Login</Link>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'none': 'block'}}>
          <Link to="./register" className="active">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="active">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/comment" className="active">Comment</Link>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'block': 'none'}}>
          <Link to="./logout" className="active">Logout</Link>
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