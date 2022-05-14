//importing Sequelize constructor from library
const Sequelize = require('sequelize');

//sets up .env to keep passwords hidden
require('dotenv').config();


//create connect to the db, sql info passed for username password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});


module.exports = sequelize;