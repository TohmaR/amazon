const express = require('express')
const {
    getAdresses,
    getAdresse,
    createAdresse,
    deleteAdresse,
    updateAdresse,
} = require('../controllers/adresseControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// router.use(requireAuth);

//GET all Adresse
router.get('/adresse', getAdresses)

//GET a single Adresse
router.get('/adresse/:id', getAdresse)

//POST a new Adresse
router.post('/addAdresse', createAdresse)

//DELETE a Adresse
router.delete('/adresse/:id', deleteAdresse)

//UPDATE a Adresse
router.patch('/adresse/:id', updateAdresse)




module.exports = router