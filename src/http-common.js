import axios from "axios";
export default axios.create({
  baseURL: "http://paul-nobecourt.vpnuser.lan/Apo/projet-alert-pet-back/wp-json",
  headers: {
    "Content-type": "application/json",
  },
});
