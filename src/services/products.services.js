import axios from "axios";

const getAllProducts = () => {
  return axios.get("http://localhost:5000/api/products");
};

const saveProduct = (data) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(
    `http://localhost:5000/api/products`,
    JSON.stringify(data),
    { headers }
  );
};

const searchProduct = (idProduct) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get(`http://localhost:5000/api/products/${idProduct}`, {
    headers,
  });
};

const updateProduct = (data) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(
    `http://localhost:5000/api/products/${data.idProduct}`,
    JSON.stringify(data),
    { headers }
  );
};

const getKardex = (idProduct) => {
    console.log(idProduct);
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(`http://localhost:5000/api/products/kardex/${idProduct}`, {
    headers,
  });
};

export { getAllProducts, saveProduct, searchProduct, updateProduct, getKardex };
