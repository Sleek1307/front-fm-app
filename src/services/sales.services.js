import axios from "axios";

const getAllSales = () => {
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
    }
    return axios.get("http://localhost:5000/api/sales", {headers,})
}

export {getAllSales};