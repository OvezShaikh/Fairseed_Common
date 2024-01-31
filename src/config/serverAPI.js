
import axios from 'axios'

let headers = {}

if(localStorage.getItem('userToken')){
    headers["x-access-token"] = localStorage.getItem('userToken')
}
const serverAPI =  axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
     
  });
export default serverAPI;