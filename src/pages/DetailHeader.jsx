import './styles/DetailHeader.css';
import React from 'react';
import mylogo from "./../projectimages/detailogo.png";


function DetailHeader() {
  return (    
    <div className="row d-flex justify-content-center bg-primary">
      <section className="col-md-3 mt-5">
      <img src={mylogo} className="img-fluid" alt=" " style={{width: '75%' ,height: '75%'}}/>
      </section>
      <section className="col-md-9" >
       <h1>Grovers Detailing Service</h1>
       <h2>(757)-581-9156</h2>
      </section>
    </div>
  );
}

export default DetailHeader;