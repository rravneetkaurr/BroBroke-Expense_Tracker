const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    members: [{ type: String }], // List of member email addresses or IDs
    expenses: [
        {
            description: String,
            amount: Number,
            paidBy: String, // Email or ID of the user who paid
            splitAmong: [{ type: String }], // List of users sharing this expense
        },
    ],
});

module.exports = mongoose.model('Group', GroupSchema);
