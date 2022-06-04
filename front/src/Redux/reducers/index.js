import { combineReducers } from "redux"; 
import telephonesReducers from "./telephonesReducer"; 
import typeReducers from "./typesReducer"; 
import marquesReducers from "./marquesReducer"; 
const rootReducer= combineReducers({ 
 alltelephones:telephonesReducers, 
 alltypes:typeReducers, 
 allmarques:marquesReducers, 

}); 
export default rootReducer 