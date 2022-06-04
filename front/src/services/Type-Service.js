import Axios from "../Axios/Api"; 
const TYPE_API="/types"
 const fetchTypes=async()=> { 
 return await Axios.get(TYPE_API); 
 } 
 
 export const TypeService = { 
 fetchTypes 
 } 
