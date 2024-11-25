const express = require('express');
const router = express.Router();
const Group = require('../models/Group');

// Create a new group
router.post('/groups', async (req, res) => {
    const { name, members } = req.body;
    try {
        const group = new Group({ name, members });
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Add an expense to a group
router.post('/groups/:groupId/expenses', async (req, res) => {
    const { description, amount, paidBy, splitAmong } = req.body;
    try {
        const group = await Group.findById(req.params.groupId);
        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }
        group.expenses.push({ description, amount, paidBy, splitAmong });
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all groups
router.get('/groups', async (req, res) => {
    const groups = await Group.find();
    res.json(groups);
});

// Get a specific group
router.get('/groups/:groupId', async (req, res) => {
    const group = await Group.findById(req.params.groupId);
    if (!group) {
        return res.status(404).json({ error: 'Group not found' });
    }
    res.json(group);
});

module.exports = router;
