const Sequelize = require('sequelize');
const path = require('path');


const sequelize = require(path.join(__dirname,"..","util","databases.js"));

const News = sequelize.define("news",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    headings:{
        type:Sequelize.STRING,
        allowNull:true
    },
    describe:{
        type:Sequelize.STRING,
        allowNull:true
    },
    link:{
        type:Sequelize.STRING,
        allowNull:true
    },
    posterUrl:{
        type:Sequelize.STRING,
        allowNull:true
    }
});

module.exports = News;