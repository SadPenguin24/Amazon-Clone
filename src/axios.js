import axios from "axios";

const instance = axios.create({
  // API cloud function
  baseURL: "http://localhost:5001/clonez-f8ba5/us-central1/api",
});

export default instance;
