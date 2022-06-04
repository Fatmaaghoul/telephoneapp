import React, { useEffect } from "react"; 
import { useDispatch } from "react-redux"; 
import {loadTelephones} from "../../Redux/actions/telephonesAction"
import AfficheCards from "./AfficheCards"
const ListCards=()=>{ 
 
 const dispatch = useDispatch(); 
 
 useEffect(() => { 
 dispatch(loadTelephones()); 
 }); 
 
 
 return( 
 
 <div><AfficheCards/></div>
 ) 
} 
export default ListCards 