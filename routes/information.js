
const express = require('express'); 

const { 
    getInformations, 
    getInformation, 
    createInformation, 
    updateInformation, 
    deleteInformation 
} = require('../controllers/informationController');

const authenticateToken = require("../middlewares/auth");

const router = express.Router();

router.get('/informations', authenticateToken, getInformations);
router.get('/information/:id', authenticateToken, getInformation);
router.post('/information', authenticateToken, createInformation);
router.put('/information/:id', authenticateToken, updateInformation);
router.delete('/information/:id', authenticateToken, deleteInformation);

module.exports = router;
