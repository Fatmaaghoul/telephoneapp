import express from 'express';
const router = express.Router();
import { getTypes, getTypeByID, createType, updateType, deleteType } from'../controllers/type.controller.js';
/**
* @route GET /api/type
* @desc Get All type
* @access Public
*/
router.get('/', getTypes);
/**
* @route POST /api/types
* @desc Ajouter une type
* @access Public
*/
router.post('/', createType);
/**
* @route GET /api/types/:id
* @desc Renvoyer une type
* @access Public
*/
router.get('/:id', getTypeByID);
/**
* @route PUT /api/types/:id
* @desc Modifier une type
* @access Public
*/
router.put('/:id', updateType);
/**
* @route DELETE /api/types/:id
* @desc Supprimer une type
* @access Public
*/
router.delete('/:id', deleteType);
export default router;