import axios from "axios";


const api = axios.create({baseURL : 'http://184.72.111.21/api/'});

export default api