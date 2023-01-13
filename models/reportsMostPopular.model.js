const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newPopular = new Schema({
    service: {
        type: String,
        required: true
    },
    numCalls: {
    type: Number,
    required: true
    },
});

const popular = mongoose.model('mostPopularService', newPopular);
module.exports = popular;