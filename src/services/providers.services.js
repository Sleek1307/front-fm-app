import axios from "axios";

const getAllProviders = () => {
  return axios.get("http://localhost:5000/api/providers");
};

const createProvider = (data) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(
    "http://localhost:5000/api/providers",
    JSON.stringify(data),
    { headers }
  );
};

export { getAllProviders, createProvider };
