const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newReports = new Schema({
    service: {
        type: String,
        required: true
    },
  lastEndpoint: {
    type: String,
    required: true
  },
  mostPopularService: {
    type: String,
    required: true
  },
  numCalls: {
    type: Number,
    required: true
  },
});

const reports = mongoose.model('reports', newReports);
module.exports = reports;