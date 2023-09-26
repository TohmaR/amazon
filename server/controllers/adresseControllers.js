const Adresse = require('../models/AdresseModel')
const mongoose =  require('mongoose')

// get all Adresses
const getAdresses = async (req, res) => {
    const user_id = req.user._id;

    const Adresses = await Adresse.find({user_id}).sort({createdAt: -1});

    res.status(200).json(Adresses);
}

//get a single Adresse
const getAdresse = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Adresse'})
    }

    const Adresses = await Adresse.findById(id)

    if(!Adresses) {
        return res.status(404).json({error: 'No such Adresse'})
    }
}

//create new Adresse
const createAdresse = async (req, res) => {
    const { country, firstName, lastName, phoneNumber, adresse, zipCode, city } = req.body

    try{
        const user_id = req.user._id;
        const Adresses = await Adresse.create({country, firstName, lastName, phoneNumber, adresse, zipCode, city, user_id})
        res.status(200).json(Adresses)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//delete a Adresse
const deleteAdresse = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Adresse'})
    }
    const Adresses = await Adresse.findOneAndDelete({_id: id})

    if(!Adresses) {
        return res.status(404).json({error: 'No such Adresse'})
    }

    return res.status(200).json(Adresses)
}

//update a Adresse
const updateAdresse = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Adresse'})
    }
    const Adresses = await Adresse.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!Adresses) {
        return res.status(404).json({error: 'No such Adresse'})
    }

    return res.status(200).json(Adresses)
}

module.exports = {
    getAdresses,
    getAdresse,
    createAdresse,
    deleteAdresse,
    updateAdresse,
}