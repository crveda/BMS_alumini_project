const Sequelize = require('sequelize');
const path = require('path')

const sequelize = require(path.join(__dirname,"..","util","databases.js"));

const EventRegister = sequelize.define("eventRegister",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    }
})


module.exports = EventRegister;