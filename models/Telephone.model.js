import mongoose from "mongoose"
var TelephoneSchema = mongoose.Schema({ 
 titre: {type: String, required: true}, 
 color:String, 
 prix: Number,
 qtestock: Number, 
 stockage:String,
 couverture: String, 
 type: { 
 type: mongoose.Schema.Types.ObjectId, 
 ref: 'Type'
 }, 
marques: [{ 
 type: mongoose.Schema.Types.ObjectId, 
 ref: 'Marque'
 }] 
}) 
const Telephone = mongoose.model('Telephone', TelephoneSchema); 
export default Telephone 