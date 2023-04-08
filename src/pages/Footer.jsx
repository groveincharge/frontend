import intro from "./../projectvideos/intro.mp4";
import { Link } from "react-router-dom";
import "./styles/Footer.css"

const Footer = () => {

return(
<div>
<footer className="page-footer font-small mdb-color darken-3 pt-4">

    <div className="row d-flex justify-content-center">

      <div className="col-md-6">
        <div className="embed-responsive embed-responsive-16by9 mb-4">
          <iframe className="embed-responsive-item" src={intro}
            allowFullScreen title="topic video"></iframe>
        </div>
      </div>

      <div className="col-md-6">
      <h5 className="text-uppercase font-weight-bold">Detail Magic</h5>
        <p>
          Call or make appointment with <big>Grovers Detailing Service</big> for your next
          detail job. We have been detailing since 2004. We do <big>interior detail</big>, <big>exterior detail</big>
           and <big>full detail</big>. Use the links in the menu to check procedures and base prices. <big>Tar</big>, 
          <big>sap</big> and <big>overspray</big> removal services are also available. We get the job done.
        </p>
    </div>

  </div>

  <div className="footer-copyright text-center py-3">© 2023 Copyright:
    <Link to="./makeAppointment">Make Appointment</Link>
  </div>

</footer>
</div>
)
}

export default Footer;