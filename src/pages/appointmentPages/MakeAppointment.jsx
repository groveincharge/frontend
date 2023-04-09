import React, {useState} from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Link} from 'react-router-dom';
import "./MakeAppointment.css";
import Address from './Address';

function MakeAppointment() {

const [selectedDate, setSelectedDate] = useState(null)

  if (!selectedDate) {
    return (
        <div>
    <h5 className='header'>Click Appointment Calender.</h5>
     <Datepicker
        controls={['date', 'time']}
        dateFormat="DDD d MMM, yyyy"
        timeFormat="H:mm"
        dateWheels="|DDD D MMM, YYYY|"
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
       />
        </div>
      )
  }
else
  return(
    <div>
      <Address appointment={selectedDate}/>
    </div>
   )

}

export default MakeAppointment
