const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adresseSchema = new Schema({
    country: {
        type: String, 
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true 
    },
    user_id: {
      type: String,
      required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Adresse', adresseSchema)
