import React, { useEffect } from "react"; 
import { useDispatch } from "react-redux"; 
import {loadTelephones} from "../../Redux/actions/telephonesAction"
import AfficheTelephones from "./AfficheTelephones"
const ListTelephones=()=>{ 
 
 const dispatch = useDispatch(); 

 useEffect(() => { 
 dispatch(loadTelephones()); 
 }); 
 
 
 return( 
 
 <div><AfficheTelephones/></div>
 ) 
} 
export default ListTelephones