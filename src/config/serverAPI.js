
import axios from 'axios'

// let headers = {}

// if(localStorage.getItem('token')){
//     headers["x-access-token"] = localStorage.getItem('token');
// }
const serverAPI =  axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
  
  });

  serverAPI.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['x-access-token'] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  serverAPI.interceptors.response.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['x-access-token'] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // serverAPI.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
  //   console.log(serverAPI.defaults.headers.common['x-access-token'])
export default serverAPI;