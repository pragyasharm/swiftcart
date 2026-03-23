import axios from "axios";

export const axiosinstace = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 5000
})

axiosinstace.interceptors.response.use((response)=> response, (err)=> {
    return Promise.reject("failed the API call")
})

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });