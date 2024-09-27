
require("./config/db")

const User = require("./model/Schema")
const Review = require("./model/Review")
const cors = require('cors');
const express = require('express');
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// checkEmail Endpoint

app.post('/checkEmail', async (req, res) => {
    console.log("enter")
    const  {email}  = req.body;
    console.log("Email:",email);
    const user = await User.findOne({ email });
    console.log("user",user)
    if (user) {
        return res.status(200).json({ message: 'Login successfully' });
    } else {
       return res.status(400).json({ message: 'Email not registered' });
    }
});



// Sample Registration Endpoint

app.post("/registerUser", async (req, res) => {
    const { email, name, companyName, designation, password } = req.body;
    
    console.log(email, name, companyName, designation, password )
    // Basic validation
    if (!email || !name || !companyName || !designation || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            name,
            companyName,
            designation,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email already exists" });
        }
        res.status(500).json({ message: "Server error" });
    }
});


//Review Endpoint



// Create a new review
app.post('/reviews', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all reviews
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a specific review by ID
app.get('/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a review
app.put('/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a review
app.delete('/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Search companies by name
app.get('/companies/search', async (req, res) => {
  try {
    const { name } = req.query;
    let query = {};
    
    if (name) {
      query.companyName = { $regex: name, $options: 'i' };
    }

    const companies = await Review.find(query).select('companyName paymentCycle defaultPayments defaultBy');
    
    res.json(companies);
  } catch (error) {
    console.error("Error searching companies:", error);
    res.status(500).json({ error: "An error occurred while searching for companies" });
  }
});




app.listen(PORT, () => console.log('Server running on port 5000'));
