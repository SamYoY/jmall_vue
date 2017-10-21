import axios from 'axios'
function login(username, password){
  return axios.post('/jmall/users/login', {
    username,
    password
  })
}
export default {
  login
}
