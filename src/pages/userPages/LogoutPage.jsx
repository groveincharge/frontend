import Logout from '../../_helpers/Logout';
import Axios  from 'axios';
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {

     const navigate = useNavigate();
   // api callback to login route.
   Axios({
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
    url: "https://bossdetail-api.onrender.com/logout",
  }).then((res) => {
console.log(`result from inside logout after call to backend ${JSON.stringify(res.data)}`);
navigate('/login')
alert('Logout successful')
  });

  return(
    <Logout/>
    )


  }; //end LogoutPage

  export default LogoutPage;