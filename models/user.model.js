const mongoose = require('mongoose')


const userScema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true,
    },
    createdAtd: {
        type: Date,
        default: Date.now
    }
})

module.exports = new mongoose.model('users', userScema)