import { useState, useEffect} from 'react';
import  Axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const Address = ({appointment}) => {

  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user_id')?localStorage.getItem('user_id'):" ");

  useEffect(() => {
    setInputs({appointment, user})
  },[appointment, user]);


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  async function handleSubmit(event) {
    event.preventDefault();
   // alert(JSON.stringify(inputs));

      // api callback to register route.
     await Axios({
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: inputs,
        withCredentials: true,
        url: "https://bossdetail-api.onrender.com/appointment"
      }).then((res) => {
        console.log(`res.data from inside Address.jsx after call to backend ${JSON.stringify(res.data)}`);
        setInputs({}) 
        navigate("/");
          });

      };

  return (
    <div className='row bg-info'>
      <section className='col-md-6'>

    <form onSubmit={handleSubmit}>

    <div className='form-group'>
    <label htmlFor='phone'>Enter Phone Number:
      <input 
        type="text" 
        name="phone" 
        placeholder='1-(757)-555-5555'
        className='form-control'
        value={inputs.phone || ""} 
        onChange={handleChange}
      />
      </label>
      </div>

      <div className='form-group'>
      <label htmlFor='street'>Enter Street Address:
      <input 
        type="text" 
        name="street" 
        placeholder='#2555 Mystreet apt# 34'
        className='form-control'
        value={inputs.street || ""} 
        onChange={handleChange}
      />
      </label>
      </div>

      <div className='form-group'>
      <label htmlFor='city'>Enter City:
      <input 
        type="text" 
        name="city" 
        placeholder='Norfolk'
        className='form-control'
        value={inputs.city|| ""} 
        onChange={handleChange}
      />
      </label>
      </div>

      <div className='form-group'>
      <label htmlFor='state'>Enter State:
        <input 
          type="text" 
          name="state" 
          id='state'
          placeholder='virginia'
          className='form-control'
          value={inputs.state || ""} 
          onChange={handleChange}
        />
        </label>
        </div>

        <div className='form-group'>
      <label htmlFor='zipcode'>Enter Zipcode:
        <input 
          type="number" 
          name="zipcode" 
          id='zipcode'
          placeholder='Zipcode'
          className='form-control'
          value={inputs.zipcode || ""} 
          onChange={handleChange}
        />
        </label>
        </div>

        <button type='submit'>Submit</button>
    </form>
    </section>
    <section className='col-md-6 bg-light'>
      <h1>Appointments</h1>
      <p>
       <big>Date</big> and <big>Address</big> are necesary for all valid appointments. Customers must be 
        registered with the app to access contact features. We wil confirm all 
        appointment, so remember to include an appropreate <big>contact number</big>. We 
        are here to fullfil your detailing needs.
      </p>
    </section>
    </div>
  )
}
export default Address;
