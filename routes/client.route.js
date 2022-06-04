import express from 'express'; 
import { createClient,getclientBYEmail,getclientBYEmailClient} 
from '../controllers/client.controller.js'; 
const router = express.Router(); 
router.post('/', createClient); 
router.post('/login', getclientBYEmail); 
router.post('/loginclient', getclientBYEmailClient); 

export default router; 
