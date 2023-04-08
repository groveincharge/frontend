import React from "react";
import blkmustank from "./../projectimages/exteriorDetail4.JPG";

const Home= ()=>{

  
  return(
      
<div className="jumbotron text-center">

  <h4 className="card-title h4 pb-2"><strong>Featured Detail</strong></h4>

  <div className="view overlay my-4">
    <img src={blkmustank} className="img-fluid" alt=""/>
    <a href="#home">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

  <h5 className="indigo-text h5 mb-4">Ford Mustang</h5>

  <p className="card-text">
    <big>Experience</big> the <big>difference</big> with a detail from <big>Grovers Detailing Servive</big>.
    we have <big>done</big> it before!
    </p>

  
  <a className="fa-lg p-2 m-2 li-ic" href="#home"><i className="fab fa-linkedin-in grey-text"></i></a>
  
  <a className="fa-lg p-2 m-2 tw-ic" href="#home"><i className="fab fa-twitter grey-text"></i></a>
  
  <a className="fa-lg p-2 m-2 fb-ic" href="#home"><i className="fab fa-facebook-f grey-text"></i></a>

 </div>

  )

  }; 
  //end HomePage

export default Home