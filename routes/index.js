const express = require("express");
const router = express.Router();

const pollRouter = require("./poll");
const voteRouter = require("./vote")

router.use('/', pollRouter)
router.use('/polls/:id/:optionId', voteRouter)

module.exports = router