import React, { useState, useEffect } from "react"; 
import { useNavigate,useParams } from "react-router-dom"; 
import {loadSingletelephone,updatetelephone} from "../../Redux/actions/telephonesAction"; 
import {loadTypes} from "../../Redux/actions/typesAction"; 
import {loadMarques} from "../../Redux/actions/marquesAction"; 
import {useDispatch, useSelector} from "react-redux"; 
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField'; 
import FormControl from '@mui/material/FormControl'; 
import MenuItem from '@mui/material/MenuItem'; 
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'; 
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview) 
const EditTelephone=()=>{ 
 const [state, setState] = useState({ 
 titre: "", color:"",stockage:"", 
 prix:"",qtestock:"",type:"", 
 marques:[] 
 }); 
 
 const [aut, setAut] = useState([]) 
 const [files, setFiles] = useState("") 
 
 const dispatch = useDispatch(); 
 const navigate = useNavigate(); 
 const params = useParams(); 
 const _id=params._id; 
 useEffect(() => { 
 dispatch(loadSingletelephone(_id)); 
 dispatch(loadTypes()); 
 dispatch(loadMarques()); 
 setFiles(""); 
 },[_id,dispatch]); 
 
 const telephone = useSelector((state) => state.alltelephones.telephone); 
 const types = useSelector((state) =>state.alltypes.types); 
 const listemarques = useSelector((state) =>state.allmarques.marques); 
 
 useEffect(()=>{ 
 setState(telephone); 
 setFiles(telephone.couverture) 
 },[telephone]); 
 const handleSubmit = async(event)=> { 
 event.preventDefault(); 
 console.log(aut) 
 const liv={ 
 _id:_id, 
 titre:state.titre, 
 color:state.color, 
 stockage:state.stockage,
 prix:state.prix, 
 qtestock:state.qtestock, 
 couverture : files[0].file.name, 
 type:state.type,  
 marques:aut.length>0?aut:state.marques 
 }; 
 dispatch(updatetelephone(liv)); 
 navigate("/"); 
 } 
 const handelInputChange=(e)=>{ 
 const {name,value}=e.target; 
 setState({...state,[name]:value}); 
 } 
 const labeltype=()=>{ 
 if( state.type){ 
 if( state.type.type) return "Type : "+state.type.type 
 } 
 else return null
 } 
 const labelmarque=()=>{ 
 if(state.marques) { 
 let ch=""
 state.marques.map((aut)=>{ 
 if(aut.nommarque) 
 ch = ch+aut.nommarque 
 }) 
 return ch 
 } 
 else return null
 } 
 const handleMarques=(event)=>{ 
 setState({...state,"marques": []}); 
 
 setAut(event.target.value); 
 
 } 
 return ( 
 
 <div className="container">
 
 <form style={{ marginLeft: 8}}>
 <div>
 <Button color="secondary" variant="contained"onClick={(event)=>handleSubmit(event)}>Modifier</Button>
 </div>
 <FormControl> 
 <TextField name="titre"
 variant="outlined"
label="Titre"
value={state.titre}
 onChange={handelInputChange}
 required 
style={{ margin: 10}}/> 
 <TextField name="color"
 variant="outlined"
label="Couleur"
value={state.color}
 onChange={handelInputChange}
style={{ margin: 10}}/>
 <TextField name="stockage"
 variant="outlined"
label="Stockage"
value={state.stockage}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="prix"
 variant="outlined"
type="Number"
label="Prix"
value={state.prix}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 <TextField name="qtestock"
 variant="outlined"
type="Number"
label="Quantité"
value={state.qtestock}
 onChange={handelInputChange}
 style={{ margin: 10}}/>
 
 <TextField name="type"
 variant="outlined"
 select
 label={labeltype()}
 value={state.type}
 onChange={handelInputChange}
 style={{ margin: 10}}>
 
 {
 types ? 
 types.map((spec)=>
 <MenuItem key={spec._id}
value={spec._id}>{spec.type}</MenuItem>
 ) 
 :null
 }
 </TextField>
 <TextField
 name="marques"
 variant="outlined"
 select
 label={labelmarque()}
 SelectProps={{multiple: true}}
 value={aut?aut:state.marques}
 helperText="Sélectionner des marques"
 onChange={(event)=>handleMarques(event)}
 >
 {
 listemarques ? 
 listemarques.map((aut)=>
 <MenuItem key={aut._id}
value={aut._id}>{aut.nommarque}</MenuItem>
 ) 
 :null
 }
 </TextField> 
 </FormControl> 
 </form>
 
 <h4>Télécharger Image</h4>
 <FormControl> 
 <div style={{width:300, height:50}}>
 <FilePond
 files={files}
 allowMultiple={false}
 onupdatefiles={setFiles}
 labelIdle='<span class="filepond--label-action">Browse One</span>'
 />
 </div>
 </FormControl>
 </div> 
 );} 
export default EditTelephone