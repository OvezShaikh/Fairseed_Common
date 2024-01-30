
import axios from 'axios'

let headers = {}

if(localStorage.getItem('userToken')){
    headers["Authorization"] = localStorage.getItem('userToken')
}

const serverAPI =  axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    // headers: {'X-Custom-Header': 'foobar'}
  });
export default serverAPI;