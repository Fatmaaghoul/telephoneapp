import mongoose from 'mongoose';
import Type from '../models/Type.model.js';
export const getTypes = async (req, res) => { 
try {
const typ = await Type.find();
res.status(200).json(typ);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getTypeByID = async (req, res) => { 
try {
const ty = await Type.findById(req.params.id);
res.status(200).json(ty);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createType = async (req, res) => { 
const { type } = req.body;
const newType = new Type({ type:type })
try { 
await newType.save();
res.status(201).json(newType );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateType= async (req, res) => {
const { id } = req.params;
const { type } = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de type avec un id: ${id}`);
const ty1 = { type:type, _id: id };
await Type.findByIdAndUpdate(id, ty1);
res.json(ty1);
}
export const deleteType = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de type avec l'ID: ${id}`);
await Type.findByIdAndDelete(id);
res.json({ message: "type supprimée avec succès." });
}
