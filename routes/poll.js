const express = require('express');
const router = express.Router();
const { Poll, Option } = require('../database_scripts/models'); 

router.get('/', async (req, res) => {
    try {
        const data = await Poll.findAll();
        res.json(data);
    } catch (err) {
        console.error('Error fetching polls:', err);
        res.status(500).json({ error: 'Failed to fetch polls' });
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const data = await Poll.findByPk(req.params);
        res.json(data);
    } catch (err) {
        console.error('Error fetching poll:', err);
        res.status(500).json({ error: 'Failed to fetch polls' });
    }
})

router.post('/polls', async (req, res) => {
    try {
        const { title, description, options } = req.body;

        if (!title || !Array.isArray(options) || options.length < 2 || options.length > 5) {
            return res.status(400).json({ error: 'At least two options and no more than 5' });
        }

        const poll = await Poll.create({ title, description });

        const createdOptions = await Promise.all(
            options.map(text => Option.create({ text, PollId: poll.id }))
        );

        res.status(201).json({ ...poll.toJSON(), options: createdOptions });
    } catch (err) {
        console.error('Error creating poll:', err);
        res.status(500).json({ error: 'Failed to create poll' });
    }
});

module.exports = router;