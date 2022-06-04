import express from 'express'; 
const router = express.Router(); 
import { getTelephones, getTelephoneByID, createTelephone, updateTelephone, deleteTelephone } from'../controllers/telephone.controller.js'; 
import {auth} from "../middleware/auth.js"
/**
 * @route GET /api/Telephones
 * @desc Get All Telephones
 * @access Public
 */
router.get('/',getTelephones); 
/**
 * @route POST /api/Telephones
 * @desc Ajouter un Telephone
 * @access Public
 */
 router.post('/', createTelephone); 
 /**
  * @route GET /api/Telephones/:id
  * @desc Renvoyer un Telephone
  * @access Public
  */
 router.get('/:id', getTelephoneByID); 
 /**
  * @route PUT /api/Telephones/:id
  * @desc Modifier un Telephone
  * @access Public
  */
 router.put('/:id', updateTelephone); 
 /**
  * @route DELETE /api/Telephones/:id
  * @desc Supprimer un Telephone
  * @access Public
  */
 router.delete('/:id', deleteTelephone); 
 export default router; 
 