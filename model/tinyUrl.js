const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tinyUrl = new Schema({
    hash: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        expires: 10000
    }
});

const TinyUrl = mongoose.model('tinyUrl', tinyUrl);

module.exports = TinyUrl;