const Sequelize = require('sequelize');
const path = require('path');


const sequelize = require(path.join(__dirname,"..","util","databases.js"));

const ContactUs = sequelize.define("contactUs",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:true
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:true
    },
    userName:{
        type:Sequelize.STRING,
        allowNull:true
    },
    msg:{
        type:Sequelize.STRING,
        allowNull:true
    }
});

module.exports = ContactUs;