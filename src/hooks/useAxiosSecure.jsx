import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: 'https://medicine-care-server-side.vercel.app'
})

const useAxiosSecure = () => {
                        // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('access-token')
    // console.log('stopped before req', token)
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    // Do something with request error
    
    return Promise.reject(error);
  });

                        // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
      return response;
    }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log('error status inside the interceptors', error)
      return Promise.reject(error);
  });


    return axiosSecure
};

export default useAxiosSecure;