const Sequelize = require('sequelize');

const sequelize = new Sequelize("bmsceAlumni","root","Vachira@04",{
    dialect:"mysql",
    host:"localhost"
})

module.exports = sequelize;
