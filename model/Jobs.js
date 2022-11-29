const Sequelize = require('sequelize');
const path = require('path');


const sequelize = require(path.join(__dirname,"..","util","databases.js"));

const Jobs = sequelize.define("jobs",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    companyName:{
        type:Sequelize.STRING,
        allowNull:true
    },
    package:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    experence:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    workFromHome:{
        type:Sequelize.BOOLEAN,
        allowNull:true
    },
    field:{
        type:Sequelize.STRING,
        allowNull:true
    },
    posterUrl:{
        type:Sequelize.STRING,
        allowNull:true
    },
    location:{
        type:Sequelize.STRING,
        allowNull:true
    },
    shift:{
        type:Sequelize.STRING,
        allowNull:true
    },
    msg:{
        type:Sequelize.STRING,
        allowNull:true
    },
    cs:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    is:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    ec:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    ee:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    civil:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    mech:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    biotech:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    others:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    linkRegister:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = Jobs;