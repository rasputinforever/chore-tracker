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
  putEditChore: function(query) {
    return axios({
      method: 'put',
      url: "/api/chores-edit",
      data: query
    })
  },
};

export default API
