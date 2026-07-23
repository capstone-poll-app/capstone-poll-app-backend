const express = require('express');
const router = express.Router();
const { Poll, Option, Vote } = require('../database_scripts/models'); 
const { error } = require('node:console');


router.get('/:optionId', async (req, res) => {
  try {
    const option = await Option.findByPk(req.params.optionId, { include: Vote })
    if (!option) return res.status(404).json({ error: 'Option not found' })

    // console.log(option.Votes?.length)
    res.json(option)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.post('/:optionId', async (req,res) =>{
    try {
        const option = await Option.findByPk(req.params.optionId)

        if(!option){
            return res.status(404).json({error: 'Option not found'})
        }

        const vote = await Vote.create({
            OptionId: option.id
        })

        res.status(201).json(vote)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})


module.exports = router