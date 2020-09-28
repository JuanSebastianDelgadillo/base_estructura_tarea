const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const tweetsSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'Users',
        type: ObjectId,
        require: true
    },
    message: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Tweets', tweetsSchema);