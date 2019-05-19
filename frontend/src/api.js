import axios from "axios";

export default {
  user : {
    login: ({ userId, password }) => 
      axios.post("http://localhost:8080/api/auth", { userId, password } ).then(res => res.data)
  },
  dashboard: {
    utilization: ({ profileName }) => 
      axios.get(`http://localhost:8080/api/utilization/${profileName}`).then(res => res.data)
  }

}