import mongoose from 'mongoose';

import Marque from '../models/Marque.model.js';

export const getMarques = async (req, res) => { 
    try {
        const cat = await Marque.find();
                
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMarqueByID = async (req, res) => { 
    try {
        const cat = await Marque.findById(req.params.id);
        
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createMarque = async (req, res) => {
    const { nommarque} = req.body;

    const newMarque = new Marque({ nommarque:nommarque })

    try {
        await newMarque.save();

        res.status(201).json(newMarque );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateMarque= async (req, res) => {
    const { id } = req.params;
    const { nommarque} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Marque avec un id: ${id}`);

    const mar1 = { nommarque:nommarque, _id: id };

    await Marque.findByIdAndUpdate(id, mar1);

    res.json(mar1);
}

export const deleteMarque = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Marque avec l'ID: ${id}`);

    await Marque.findByIdAndDelete(id);

    res.json({ message: "Marque supprimé avec succès." });
}
