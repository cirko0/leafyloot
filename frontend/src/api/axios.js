import axios from "axios";

let BASE_URL;
if (document.URL.startsWith("https")) {
  BASE_URL = "https://leafyloot.cyclic.app/api/v1/";
} else {
  BASE_URL = "http://localhost:3001/api/v1/";
}

export default axios.create({
  baseURL: BASE_URL,
});
