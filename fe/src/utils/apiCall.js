import axios from "axios";
import * as API_Link from "../constants/API_Links";

export default function callAPI(endpoint, method = "GET", body) {
  return axios({
    method,
    url: `${API_Link.API_URL}/${endpoint}`,
    data: body,
  });
}
