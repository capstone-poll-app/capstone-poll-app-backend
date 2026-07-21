require('dotenv').config();
const { title } = require('node:process');
const { Sequelize, DataTypes, Model } = require('sequelize');


const db = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
})


module.exports = {db};