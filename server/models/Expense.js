const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    groupId: mongoose.Schema.Types.ObjectId,
    description: String,
    amount: Number,
    paidBy: String, // User who paid
    splitAmong: [String], // List of users sharing the expense
});

module.exports = mongoose.model('Expense', ExpenseSchema);
