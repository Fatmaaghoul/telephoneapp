import {GET_TYPES} from "../types" 
import {TypeService} from "../../services/Type-Service"; 
export const loadTypes=()=>{ 
 return (dispatch)=>{ 
    TypeService.fetchTypes() 
 .then(res=>{ 
 dispatch({type:GET_TYPES, 
 payload:res.data}) 
 
 }).catch((error)=>console.log(error)); 
 
 } 
} 