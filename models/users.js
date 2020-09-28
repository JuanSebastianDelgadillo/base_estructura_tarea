const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema;


const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    surnames: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: Number,
        trim: true,
        required: true
    },
    birthdate: {
        type: Boolean,
        default: new Date()
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    avatar: {
        type: String,
        trim: true,
        default: ''
    },
    banner: {
        type: String,
        trim: true,
        default: ''

    },
    biography: {
        type: String,
        trim: true,
        default: ''
    },
    location: {
        type: String,
        trim: true,
        default: ''
    },
    website: {
        type: String,
        trim: true,
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('Users', usersSchema);