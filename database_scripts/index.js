const { db } = require("./db");
const {Poll, Option, Vote} = require("./models");

Poll.hasMany(Option, {onDelete: 'CASCADE'});
Option.belongsTo(Poll);

Option.hasMany(Vote);
Vote.belongsTo(Option);

module.exports = {db, Poll, Option, Vote}