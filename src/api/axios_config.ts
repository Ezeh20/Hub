import axios from "axios";
import apiConfig from "./api_config";

/**
 * create an axios custom instance which will include the baseUrl,
 * headers and interceptors to be called whenever a request is made
 */

const axiosConfig = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        Accept: 'application/json'
    }
})

axiosConfig.interceptors.request.use((req) => {
    return req
},
    (error) => {
        return Promise.reject(error)
    })

axiosConfig.interceptors.response.use((res) => {
    if (res &&  res.data.status === 200) {
        return res.data
    }
    return res
},
    (error) => {
        return Promise.reject(error)
    })


export default axiosConfig