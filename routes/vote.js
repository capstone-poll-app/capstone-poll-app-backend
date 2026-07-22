const express = require('express');
const router = express.Router();
const { Poll, Option, Vote } = require('../database_scripts/models'); 


router.get('/:optionId', async (req, res)=>{
    const votes = Option.findByPk(req.params.optionId)
    console.log(votes.length)
    res.json(votes)
})

module.exports = router