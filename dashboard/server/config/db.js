require('dotenv').config(); 
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URL 


mongoose.connect(mongoURI)

  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error', err));


  
