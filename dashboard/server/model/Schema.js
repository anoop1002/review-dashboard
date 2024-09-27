const mongoose = require('mongoose');

// User Schema Definition
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
}, {
    timestamps: true 
});



const User = mongoose.model("User", userSchema);


module.exports = User;
