import axios from 'axios'

const Api = axios.create({baseUrl: 'http://localhost:3000/api/v1'});
export default Api