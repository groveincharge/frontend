import React from "react";
import Axios from 'axios';


const About= ()=>{

   // api callback to login route.
     Axios({
    method: "GET",
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
    url: "https://bossdetail-api.com/users",
  }).then((res) => {
console.log(`user from inside about after call to backend ${JSON.stringify(res.data)}`);
// console.log(`userCookie from inside login after call to backend ${JSON.stringify(userCookie)}`)
  });


    return ( 
        <div className="row">

          <div className="bg-light col-md-6">
            <h2>About Us</h2>
            <p>We are a <big>Custom Auto Detailing</big> company, that provides
              interior and exterior detailing services.
              Whether at your home, or at our detail lot. We can come to
              your lacation, or you can bring the vehicle to the detail lot in <big>Norfolk</big>.
               We use only bio-degradable products
              for a chemical free cleaning. Most procedures are done
              by hand with limited machinery. The Full Detail Service usually
              takes 2-3 hours. Call today and make an appointment to
              have your vehicle detailed. The people at <big>bossdetail.onrender.com</big> know that
              our customers are the foundation of our business. We have been detailing
              in the Tidewater area since <big>2004</big>. This is the experience that our
              customers enjoy.
            </p>
          </div>
    
          <div className="bg-info col-md-6">
          <h2>Work Radius</h2>
          <p>We come to your location, ready to provide
            the latest products and best procedures for
            your vehicle. Our moblie services are available to the people of <big>Norfolk,
            Virginia Beach, Chesapeake and Portsmouth</big>. Please make appointments 1-2 days
            ahead. This will help us keep appointments oranized.
          </p>
          </div>

        </div>
       );
}
export default About