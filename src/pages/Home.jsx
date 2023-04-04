import React from "react";

const Home= ()=>{

  
  return(
      
<div className="jumbotron text-center">

  <h4 className="card-title h4 pb-2"><strong>My adventure</strong></h4>

  <div className="view overlay my-4">
    <img src="https://bossdetail-api.onrender.com/images/exteriorDetail4.JPG" className="img-fluid" alt=""/>
    <a href="#home">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

  <h5 className="indigo-text h5 mb-4">Photography</h5>

  <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

  
  <a className="fa-lg p-2 m-2 li-ic" href="#home"><i className="fab fa-linkedin-in grey-text"></i></a>
  
  <a className="fa-lg p-2 m-2 tw-ic" href="#home"><i className="fab fa-twitter grey-text"></i></a>
  
  <a className="fa-lg p-2 m-2 fb-ic" href="#home"><i className="fab fa-facebook-f grey-text"></i></a>

 </div>

  )

  }; 
  //end HomePage

export default Home