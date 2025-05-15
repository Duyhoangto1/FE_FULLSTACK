import axios from "axios";


const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});


// const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const AUTH_TOKEN = localStorage.getItem("accessToken");
    console.log("AUTH_TOKEN:", AUTH_TOKEN); // Debugging
    config.headers.Authorization = AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // return response?.data ? response.data : response;
    if(response?.data || response ) {
      return response.data;
    }
    return response;

  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error?.response?.data ) return error?.response?.data;
    
    
    return Promise.reject(error);
  });
export default instance;