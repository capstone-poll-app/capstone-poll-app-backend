const express = require('express')
const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const data = await Poll.findAll()
        res.json(data);
    }catch(err){
        console.error('Error fetching polls:', err);
        res.status(500).json({error: 'Failed to fetch polls'})
    } 
})