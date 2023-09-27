const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
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
    }

})

//static signup method
userSchema.statics.register = async function(email, password, firstName, lastName) {

    //validation
    if (!email || !password || !firstName || !lastName) {
        throw Error('Tous les champs doivent etre complété')
    }
    if (!validator.isEmail(email)) {
        throw Error(`L'email n'est pas valide`)
    }
    if (!validator.isStrongPassword(password)) {
        throw Error(`Le mot de passe n'est pas assez robuste`)
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error(`L'email existe deja`)
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash, firstName, lastName})

    return user
}

//static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('Tous les champs doivent etre complété')
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error('Email incorrect')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Mot de passe incorrect')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)
