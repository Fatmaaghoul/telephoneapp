import {GET_TYPES} from '../types'
const initialState={ 
 types:[] 
}; 
const typesReducers =(state=initialState,action)=>{ 
 switch(action.type){ 
 case GET_TYPES: 
 return{ 
 ...state, 
 types:action.payload, 
 
 }; 
 default: return state 
 } 
} 
export default typesReducers 
