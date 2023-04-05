import { Outlet } from "react-router-dom";
import "./../styles/Navbar.css";
import { useEffect } from "react";

function Navbar({isloggedin}) {

  //selected link
   //let activePage = window.location.pathname;

   //match selected link and add active attribute
  useEffect(() => {
  const navlinks = document.querySelectorAll('a')

  navlinks.forEach(link => {

    if (window.location.href === link.href){
      link.classList.add('active')
    }
  })
 
  },[])
  
  

  return (
  <div className="bg-dark nav">
    <nav className="navbar navbar-expand-md navbar-dark">
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
          <a className="nav-link"  href="/https://bossdetail.onrender.com">Home</a>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'none': 'block'}}>
          <a className="nav-link" href="https://bossdetail.onrender.com/login">Login</a>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'none': 'block'}}>
          <a className="nav-link"  href="https://bossdetail.onrender.com/register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://bossdetail.onrender.com/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="https://bossdetail.onrender.com/comment">Comment</a>
        </li>
        <li className="nav-item" style={{display: isloggedin? 'block': 'none'}}>
          <a className="nav-link" href="https://bossdetail.onrender.com/logout">Logout</a>
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