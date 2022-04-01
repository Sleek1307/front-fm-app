import axios from "axios";

const getAllCredits = () => {
  const headers = {
    "Content-type": "application/json;",
  };
  return axios.get(
    `http://localhost:5000/api/credits/`,
    { headers }
  );
};


export default getAllCredits;