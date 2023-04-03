import { useState } from 'react';
import  Axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
console.log(inputs);

  async function handleSubmit(event) {
    event.preventDefault();
   // alert(JSON.stringify(inputs));

      // api callback to register route.
     await Axios({
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: inputs,
        withCredentials: true,
        url: "http://localhost:5000/register"
      }).then((res) => {
        console.log(`res.data from inside login after call to backend ${JSON.stringify(res.data)}`);
        setInputs({}) 
        navigate("/login");
          });

      };

  return (
    <div className='row bg-info'>
      <section className='col-md-6'>
    <form onSubmit={handleSubmit}>
    <div className='form-group'>
    <label htmlFor='firstName'>Enter your first name:
      <input 
        type="text" 
        name="firstName" 
        placeholder='First Name'
        className='form-control'
        value={inputs.firstName || ""} 
        onChange={handleChange}
      />
      </label>
      </div>

      <div className='form-group'>
      <label htmlFor='lastName'>Enter your last name:
      <input 
        type="text" 
        name="lastName" 
        placeholder='Last Name'
        className='form-control'
        value={inputs.lastName || ""} 
        onChange={handleChange}
      />
      </label>
      </div>

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
          id='password'
          placeholder='Enter Password'
          className='form-control'
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        </div>

        <div className='form-group'>
      <label htmlFor='confirmPassword'>Enter comfirm password:
        <input 
          type="password" 
          name="confirmPassword" 
          id='confirmPassword'
          placeholder='Confirm Password'
          className='form-control'
          value={inputs.confirmPassword || ""} 
          onChange={handleChange}
        />
        </label>
        </div>
        <button type='submit'>Submit</button>
    </form>
    </section>
    <section className='col-md-6'>
      <h1>Register an Account</h1>
      <p>
        
      </p>
    </section>
    </div>
  )
}
export default Register;