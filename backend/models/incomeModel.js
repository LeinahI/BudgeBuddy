const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 15,
        trim: true
    },
    type: {
        type: String,
        /* default: "expense" */
        default: "income"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Income', IncomeSchema)