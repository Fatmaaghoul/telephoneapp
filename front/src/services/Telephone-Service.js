import Axios from "../Axios/Api"; 
const TELEPHONE_API="/telephones"
 const fetchTelephones=async()=> { 
 return await Axios.get(TELEPHONE_API); 
 } 
 const fetchTelephoneById=async(telephoneId)=> { 
 return await Axios.get(TELEPHONE_API + '/' + telephoneId); 
 } 
 const deleteTelephone=async(telephoneId) =>{ 
 return await Axios.delete(TELEPHONE_API + '/' + telephoneId); 
 } 
 const addTelephone=async(telephone)=> { 
 return await Axios.post(TELEPHONE_API, telephone); 
 
 } 
 const editTelephone=(telephone) =>{ 
 return Axios.put(TELEPHONE_API + '/' + telephone._id, telephone); 
 
 } 
 
 export const TelephoneService = { 
 fetchTelephones, 
 fetchTelephoneById, 
 deleteTelephone, 
 addTelephone, 
 editTelephone
 } 