import axios from "axios";

const getAllCostumers = () => {
  return axios.get("http://localhost:5000/api/costumers");
};

const saveCostumer = (data) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(
    "http://localhost:5000/api/costumers",
    JSON.stringify(data),
    { headers }
  );
};

const searchCostumer = (data) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get(`http://localhost:5000/api/costumers/${data.idCostumer}`, {
    headers,
  });
};

const updateCostumer = (data) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(
    `http://localhost:5000/api/costumers/${data.idCostumer}`,
    JSON.stringify(data),
    {headers}
  );
};

export { getAllCostumers, saveCostumer, searchCostumer, updateCostumer };
