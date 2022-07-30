import axios from "axios";

const httpUsuario = axios.create({
  baseURL: 'http://localhost:3500/api'
});

export default httpUsuario