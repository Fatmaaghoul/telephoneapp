import {GET_TELEPHONES,DELETE_TELEPHONE,ADD_TELEPHONE,GET_SINGLE_TELEPHONE,UPDATE_TELEPHONE} from
'../types'
const initialState={ 
 telephones:[], 
 telephone:{} 
 
}; 
const telephonesReducers =(state=initialState,action)=>{ 
 switch(action.type){ 
 case GET_TELEPHONES: 
 return{ 
 ...state, 
telephones:action.payload, 
 
 }; 
 case ADD_TELEPHONE: 
 return{ 
 ...state, 
 telephones : [...state.telephones, action.payload], 
 telephone:action.payload 
 }; 
 case DELETE_TELEPHONE: 
 return{ 
 ...state, 
 telephones: state.telephones.filter(telephone=> telephone._id !== 
action.payload) 
 }; 
 case UPDATE_TELEPHONE: 
 return { 
 ...state, 
 telephones:state.telephones.map(telephone => telephone._id === 
action.payload._id ? (telephone = action.payload) : telephone) 
 }; 
 case GET_SINGLE_TELEPHONE: 
 return { ...state, 
 telephone:action.payload }; 
 default: return state 
 } 
} 
export default telephonesReducers