// models/FormData.js
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      companyName: {
        type: String,
        required: false
      },
      companyType: {
        type: String,
        enum: ['Edtech', 'E-Commerce', 'Real Estate', 'Astrology', 'Lead Generation', 'Other'],
        required: true
      },
      services: {
        type: String,
        enum: ['1-5', '5-10', '10-20', '20-50', '50+', 'none'],
        required: true
      }
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
