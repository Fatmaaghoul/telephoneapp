import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import {addtelephone} from "../../Redux/actions/telephonesAction"; 
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
const AjoutTelephone=()=>{ 
 const [titre, setTitre] = useState(""); 
 const [color, setColor] = useState(""); 
 const [stockage, setStockage] = useState("");
 const [prix, setPrix] = useState(""); 
 const [qtestock, setQtestock] = useState(""); 
 const [type, setType] = useState(""); 
 const [lesmarques, setLesmarques] = useState([]); 
 const [files, setFiles] = useState("") 
 
 const dispatch = useDispatch(); 
 const navigate = useNavigate(); 
 useEffect(() => { 
 dispatch(loadTypes()); 
 dispatch(loadMarques()); 
 },[dispatch]); 
 const types = useSelector((state) =>state.alltypes.types); 
 const marques = useSelector((state) =>state.allmarques.marques); 
 
 const handleSubmit = async(event)=> { 
 event.preventDefault(); 
 const liv={ 
 titre:titre, 
 color:color, 
 stockage:stockage,
 prix:prix, 
 qtestock:qtestock, 
 couverture : files[0].file.name, 
 type:type, 
 marques:lesmarques 
 }; 
 dispatch(addtelephone(liv)); 
 navigate("/"); 
 } 
 return ( 
 
 <div className="container">
 
 <form style={{ marginLeft: 8}}>
 <div>
 <Button variant="contained"onClick={(event)=>handleSubmit(event)}>Ajoute</Button>
 </div>
 <FormControl> 
 <TextField
 variant="outlined"
label="Titre"
value={titre}
 onChange={e => setTitre(e.target.value)}
 required /> 
 <TextField
 variant="outlined"
label="Couleur"
value={color}
 onChange={e => setColor(e.target.value)}
 /> 
 <TextField
 variant="outlined"
label="Stockage"
value={stockage}
 onChange={e => setStockage(e.target.value)}
 /> 
 <TextField
 variant="outlined"
type="Number"
label="Prix"
value={prix}
 onChange={e => setPrix(e.target.value)}
 /> 
 <TextField
 variant="outlined"
type="Number"
label="Quantité"
value={qtestock}
 onChange={e => setQtestock(e.target.value)}
 />
 <TextField
 variant="outlined"
 select
 label="Type"
 value={type}
 helperText="Sélectionner un type"
 onChange={e => setType(e.target.value)}
 >
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
 variant="outlined"
 select
 label="Marques"
 SelectProps={{multiple: true}}
 value={lesmarques}
 helperText="Sélectionner des marques"
 onChange={e => setLesmarques(e.target.value)}
 >
 {
 marques ? 
 marques.map((aut)=>
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
 labelIdle='<span class="filepond--label-action">Browse 
One</span>'
 />
 </div>
 </FormControl>
 </div> 
 );} 
export default AjoutTelephone 