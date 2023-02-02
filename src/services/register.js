import axios from 'axios'
import { urlApi } from '../api/config'

const register = (data) => {
    return axios
      .post(`${urlApi}/api/auth/signup`, data)
      .then((res) => {
        //console.log(res.data);
        return res.data.statusCode
      })
      .catch(error => {
        console.log(error);
      })
};
export default register;