import axios from "axios";

const Axios = axios.create({
  baseURL: "https://forkify-api.jonas.io/api/v2/recipes",
  timeout: 20000,
  params: {
    key: "25286f67-67ec-41fd-b574-5432de7159d7",
  },
});

export default Axios;
