import axios from 'axios';
import { useEffect } from 'react';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_LINK,
    withCredentials: true
})
const useAxiosSecure = () => {
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
                return res  
        },(err)=>{
            return Promise.reject(err)
        })
    },[])
    return axiosSecure
};

export default useAxiosSecure;