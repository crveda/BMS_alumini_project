const Sequelize = require('sequelize');
const path = require('path');


const sequelize = require(path.join(__dirname,"..","util","databases.js"));

const Event = sequelize.define("event",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    msg:{
        type:Sequelize.STRING,
        allowNull:true
    },
    location:{
        type:Sequelize.STRING,
        allowNull:true
    },
    eventName:{
        type:Sequelize.STRING,
        allowNull:true
    },
    posterUrl:{
        type:Sequelize.STRING,
        allowNull:true
    },
    hostName:{
        type:Sequelize.STRING,
        allowNull:true
    },
    eventMode:{
        type:Sequelize.STRING,
        allowNull:true
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull:true
    },
    eventStartingTime:{
        type:Sequelize.DATE,
        allowNull:true
    },
    eventEndingTime:{
        type:Sequelize.DATE,
        allowNull:true
    }
});

module.exports = Event;