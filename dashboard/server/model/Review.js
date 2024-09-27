const mongoose = require('mongoose');

// Review Schema Definition
const reviewSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    companyName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    paymentCycle: {
        type: String,
        required: true,
    },
    defaultPayments: {
        type: Boolean,
        default: false,
    },
    defaultBy: {
        type: Date,
        required: true,
    },

}, {
    timestamps: true
});






const Review = mongoose.model("Review", reviewSchema);


module.exports = Review;
