const Sequelize = require('sequelize');
const path = require('path');


const sequelize = require(path.join(__dirname,"..","util","databases.js"));

const User = sequelize.define("user",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    userName:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    fullName:{
        type:Sequelize.STRING,
        allowNull:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:true
    },
    teacher:{
        type:Sequelize.BOOLEAN,
        allowNull:true
    },
    student:{
        type:Sequelize.BOOLEAN,
        allowNull:true
    },
    profilePic:{
        type:Sequelize.STRING,
        allowNull:true
    },
    occupation:{
        type:Sequelize.STRING,
        allowNull:true
    },
    facebookLink:{
        type:Sequelize.STRING,
        allowNull:true
    },
    twitterLink:{
        type:Sequelize.STRING,
        allowNull:true
    },
    googlePlusLink:{
        type:Sequelize.STRING,
        allowNull:true
    },
    linkedinLink:{
        type:Sequelize.STRING,
        allowNull:true
    },
    batch:{
        type:Sequelize.STRING,
        allowNull:true
    }
});

module.exports = User;