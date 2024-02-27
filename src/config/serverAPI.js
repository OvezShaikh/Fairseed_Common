
import axios from 'axios'

// let headers = {}

// if(localStorage.getItem('token')){
//     headers["x-access-token"] = localStorage.getItem('token');
// }
const serverAPI =  axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
   
     
  });
export default serverAPI;