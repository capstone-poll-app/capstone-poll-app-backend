require('dotenv').config();
const { title } = require('node:process');
const { Sequelize, DataTypes, Model } = require('sequelize');


const db = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
})

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

module.exports = {db, Poll};