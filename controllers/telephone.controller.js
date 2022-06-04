import mongoose from 'mongoose'; 
import Telephone from '../models/Telephone.model.js'; 
export const getTelephones = async (req, res) => { 
 try { 
 const cat = await Telephone.find().populate('marques') .populate('type'); 
; 
 
 res.status(200).json(cat); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
} 
export const getTelephoneByID = async (req, res) => { 
 try { 
 const liv = await Telephone.findById(req.params.id).populate('marques') .populate('type'); 
 res.status(200).json(liv); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
} 
export const createTelephone = async (req, res) => { 
 const { titre,color,stockage,prix,qtestock,couverture,marques,type } = req.body; 
 
 const newTelephone = new Telephone({ titre:titre,color:color,stockage:stockage,prix:prix,qtestock:qtestock,couverture:couverture,marques:marques,type:type }) 
 try { 
 await newTelephone.save(); 
 res.status(201).json(newTelephone ); 
 } catch (error) { 
 res.status(409).json({ message: error.message }); 
 } 
} 
export const updateTelephone = async (req, res) => { 
 const { id } = req.params; 
 const { titre,color,stockage,prix,qtestock,couverture,marques,type } = req.body; 
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de telephone avec un id: ${id}`); 
 const liv1 = { titre:titre,color:color,stockage:stockage,prix:prix,qtestock:qtestock,couverture:couverture,marques:marques,type:type, _id: id 
}; 
 await Telephone.findByIdAndUpdate(id, liv1); 
 res.json(liv1); 
} 
export const deleteTelephone = async (req, res) => { 
 const { id } = req.params; 
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas 
de telephone avec l'ID: ${id}`); 
 await Telephone.findByIdAndDelete(id); 
 res.json({ message: "telephone supprimé avec succès." }); 
} 
