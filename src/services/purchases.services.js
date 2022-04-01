import axios from "axios";

const getAllPurchases = () =>{
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
    }
    return axios.get("http://localhost:5000/api/purchase", {headers, });
}

const createPurchase = (data) =>{
    console.log(data)
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
    }
    return axios.post('http://localhost:5000/api/purchase', JSON.stringify(data), {headers, })
}



export {getAllPurchases, createPurchase};