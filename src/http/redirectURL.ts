import axios from "axios";

const redirectURL = axios.create({
    baseURL: "https://fakestoreapi.com"
})

export default redirectURL;