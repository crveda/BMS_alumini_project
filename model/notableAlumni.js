const Sequelize = require('sequelize');
const path = require('path');


const sequelize = require(path.join(__dirname,"..","util","databases.js"));

const NotableUser = sequelize.define("notableAlumni",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    fullName:{
        type:Sequelize.STRING,
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

module.exports = NotableUser;