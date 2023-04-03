import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

const Login = ({isloggedin, setIsloggedin}) => {

  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
         }

    async function handleSubmit(event) {
    event.preventDefault();
   // alert(JSON.stringify(inputs));

         // api callback to login route.
        await   Axios({
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                data: {
                  email: inputs.email,
                  password: inputs.password,
                },
                withCredentials: true,
                url: "https://bossdetail-api.com/login",
              }).then((res) => {
                
        // store user details and jwt token in local storage to keep user logged in between page refreshes
       localStorage.setItem('user_id', JSON.stringify(res.data._id));
       setIsloggedin(true)
       setInputs({}) 
       navigate("/");
              });

  }; //end function handleSumit()

  return (
    <div className='row bg-info'>
      <section className="col-md-6">
    <form onSubmit={handleSubmit}>

      <div className='form-group'>
      <label htmlFor='email'>Enter your email:
      <input 
        type="email" 
        name="email" 
        placeholder='Email'
        className='form-control'
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </label>
      </div>

      <div className='form-group'>
      <label htmlFor='password'>Enter password:
        <input 
          type="password" 
          name="password" 
          placeholder='Enter Password'
          className='form-control'
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        </div>

        <button type='submit'>Submit</button>
    </form>
    </section>
    <section className="col-md-6 bg-light">
      <h1>User Login</h1>
      <p>
        Users must be registered in order to login. Please remember your password for future sessions. This app
        is dedicated to <big>Grovers Detailing Service</big>. Any information shared with us is strictly confidential
        and is only used for service purposes. we appreciate our customer base, and welcome you to the website.  
      </p>
    </section>
    </div>
  )
}
export default Login;