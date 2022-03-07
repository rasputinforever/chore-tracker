import axios from "axios";

const API = {
  getChores: function(query) {
    return axios.get("/api/chores", { params: { q: query } });
  },
  putChore: function(query) {
    return axios({
      method: 'put',
      url: "/api/chores",
      data: query
    })
  },
};

export default API
