import React from "react";
import { useState } from 'react';
import Axios from 'axios'
import "./../../styles/Comment.css"
import commentpicture from "./../../projectimages/interiorCar2.JPG";

const Comment = () => {
  const [inputs, setInputs] = useState({});


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  //end handleChange

   async function handleSubmit(event) {
    event.preventDefault();

     // api callback to login route.
     await   Axios({
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      data: {
        email: inputs.email,
        comment: inputs.comment,
      },
      withCredentials: true,
      url: "https://bossdetail-api.com/comment",
    }).then((res) => {
      
setInputs({}) 
    });


     }; // end of handleSubmit.


  return(
    <div className="container">

  <div>
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>

  <div className="row">

    <div className="column">
    <img src={commentpicture} alt=" " style={{width: '100%', height: '100%'}}/>
    </div>

    <div className="column bg-light">
      <form onSubmit={handleSubmit}>

           <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" 
               id="email" 
               name="email" 
               placeholder="Your Email.."
               className='form-control'
               value={inputs.email || ""} 
               onChange={handleChange}
               />
           </div>    


        <label htmlFor="area">Area</label>
        <select id="area" name="area">
          <option value="norflok">Norfolk</option>
          <option value="vabch">Virginia Beach</option>
          <option value="chesapeake">Chesapeake</option>
        </select>
         
        <div className="form-group">
        <label htmlFor="comment">Subject</label>
        <textarea id="comment" 
                 name="comment"
                 placeholder="Write something.."
                 className='form-control'
                 value={inputs.comment || ""} 
                 onChange={handleChange}
                 ></textarea>
            </div>     
        <input type="submit" value="Submit"/>
      </form>
    </div>

  </div>
</div>
  )

} // end of Comment



export default Comment;