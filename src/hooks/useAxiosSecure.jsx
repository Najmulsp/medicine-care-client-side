import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
                        // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('access-token')
    console.log('stopped before req', token)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
    return axiosSecure
};

export default useAxiosSecure;