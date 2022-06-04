import {GET_TELEPHONES,DELETE_TELEPHONE,ADD_TELEPHONE,GET_SINGLE_TELEPHONE,UPDATE_TELEPHONE} from
"../types" 
import {TelephoneService} from "../../services/Telephone-Service"; 
export const loadTelephones=()=>{ 
 return (dispatch)=>{ 
 TelephoneService.fetchTelephones() 
 .then(res=>{ 
 dispatch({type:GET_TELEPHONES, 
 payload:res.data}) 
 
 }).catch((error)=>console.log(error)); 
 
 } 
} 
export const loadSingletelephone=(_id)=>{ 
 return (dispatch)=>{ 
TelephoneService.fetchTelephoneById(_id) 
 .then((res)=>{ 
 dispatch({type:GET_SINGLE_TELEPHONE, 
 payload:res.data}); 
 }).catch((error)=>console.log(error)); 
 
 } 
} 
export const addtelephone=(telephone)=>{ 
 return (dispatch)=>{ 
 TelephoneService.addTelephone(telephone) 
 .then((res)=>{ 
 dispatch({type:ADD_TELEPHONE, 
 payload:res.data}) 
 
 }).catch((error)=>console.log(error)); 
 
 } 
} 
export const deletetelephone=(_id)=>{ 
 return dispatch=>{ 
 TelephoneService.deleteTelephone(_id) 
 .then((res)=>{ 
 dispatch({type:DELETE_TELEPHONE, 
 payload:_id}) 
 }).catch((error)=>console.log(error)); 
 
 } 
} 
export const updatetelephone=(telephone)=>{ 
 return dispatch=>{ 
 TelephoneService.editTelephone(telephone) 
 .then((res)=>{ 
 dispatch({type:UPDATE_TELEPHONE, 
 payload:res.data}) 
 }).catch((error)=>console.log(error)); 
 
 } 
} 