const mongoose = require('mongoose');

// GoogleLogin Schema Definition
const googleLoginSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
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

}, {
    timestamps: true
});



const GoogleLogin = mongoose.model("Review", googleLoginSchema);


module.exports = GoogleLogin;
