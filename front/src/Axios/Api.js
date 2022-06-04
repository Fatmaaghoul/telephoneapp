import axios from "axios"; 
axios.defaults.baseURL = 'http://localhost:5000/api'; 
//Request
axios.interceptors.request.use( 
 config => { 
 if (!config.headers.Authorization) { 
 const token = localStorage.getItem("CC_Token"); 
 if (token) { console.log("Token --- : " + token); 
 axios.defaults.headers.common['Authorization'] = 'Bearer ' + token; 
 } 
 } 
 return config; 
 }, 
 error => Promise.reject(error) 
); 
// Response interceptor for API calls
axios.interceptors.response.use((response) => { 
 return response 
}, function (error) { 
 const originalRequest = error.config; 
 if (error.response.status === 401 && !originalRequest._retry) { 
 originalRequest._retry = true; 
 } 
 return Promise.reject(error); 
}); 
export default axios; 

