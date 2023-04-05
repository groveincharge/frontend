import React from "react";
import "./../styles/Footer.css";
import PlayerComponent from './PlayerComponent';

const Footer = () => {

    return(
    <div className="container">
    <footer className="page-footer font-small mdb-color darken-3 pt-4">
    
        <div className="row">
          <div className="col-md-6">
            <PlayerComponent/>
          </div>
    
          <div className="col-md-6 justify-content-right" >
          <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
              repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
              harum esse fugiat. Itaque, culpa?
            </p>
        </div>
    
      </div>
    
      <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a className="active" href="/products"> MDBootstrap.com</a>
      </div>
    
    </footer>
    </div>
    )
    }
    
    export default Footer;