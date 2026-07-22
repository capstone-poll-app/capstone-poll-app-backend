const express = require('express');
const router = express.Router();
const { Poll } = require('../database_scripts/models'); 

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
module.exports = router;