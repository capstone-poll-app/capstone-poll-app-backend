const { type } = require('node:os');
const { Sequelize, DataTypes, Model } = require('sequelize');
const { db } = require('./db');


const Poll = db.define(
    'Poll',{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,

        }
    }
)


const Option = db.define(
    'Option', {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)

const Vote = db.define(
    'Vote'
)

module.exports = {Poll, Option, Vote}