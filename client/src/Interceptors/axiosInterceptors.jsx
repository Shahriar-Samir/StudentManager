import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_LINK,
    withCredentials: true
})


axiosSecure.interceptors.response.use(res=>{
                return res  
        },(err)=>{
            return Promise.reject(err)
        })



export default axiosSecure;