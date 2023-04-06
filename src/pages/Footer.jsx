import React from "react";
import "./../styles/Footer.css";
import intro from "./../projectvideos/intro.mp4";

const Footer = () => {

    return(
    <div className="container">
    <footer className="page-footer font-small mdb-color darken-3 pt-4">
    
    <div className="row d-flex justify-content-center">

          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9 mb-4">
            <iframe className="embed-responsive-item" src={intro}
                    allowFullScreen title="topic video"></iframe>
            </div>
         </div>

          <div className="col-md-6 justify-content-right" >
          <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
            <p>Call <bold> Grovers Detailing Service</bold> for your Next detail job. We do <big>Full Details</big>, that 
            includes interior & exterior recovery procedures. If your vehicle color is fading, and the interior needs
             some attention. Grovers Detailing Servce will happy to you restore your vehicle's look. We do polishing,
             sap removal, scratch removal, wet sanding and clay bar procedures. Call Grover at (757)-581-9156 today, and set
             an appointment. We appreciate you business!
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