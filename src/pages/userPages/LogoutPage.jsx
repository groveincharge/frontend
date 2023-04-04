import logout from '../../_helpers/Logout';
import Axios  from 'axios';

const LogoutPage = () => {

     logout();

     
   // api callback to login route.
   Axios({
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
    url: "https://bossdetail-api.onrender.com/logout",
  }).then((res) => {
console.log(`result from inside logout after call to backend ${JSON.stringify(res.data)}`);
// console.log(`userCookie from inside login after call to backend ${JSON.stringify(userCookie)}`)
  });


  }; //end LogoutPage

  export default LogoutPage;