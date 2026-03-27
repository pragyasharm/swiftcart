import axios from "axios";

export const axiosinstace = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 5000
})

axiosinstace.interceptors.response.use((response)=> response, (err)=> {
    return Promise.reject("failed the API call")
})
