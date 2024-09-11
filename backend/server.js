const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose')
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const FormData = require('./models/formData.js');
// Middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/bizGrow', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
// Handle POST requests to the /submit-form endpoint
app.post('/submit-form', async(req, res) => {
    const formData = req.body;
    try {
        // Save the form data to MongoDB
        const newFormData = new FormData(formData);
        await newFormData.save();
    
        // Send a response back to the client
        res.status(200).json({ message: 'Form submitted successfully', data: formData });
      } catch (err) {
        console.error('Error saving form data:', err);
        res.status(500).json({ message: 'Error saving form data' });
      }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
