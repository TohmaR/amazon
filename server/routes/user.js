const express = require('express')
const { loginUser, registerUser} =  require('../controllers/userController')
const router = express.Router()

//login route
router.post('/connexion', loginUser)

//signup route
router.post('/inscription', registerUser)

module.exports = router