let Sequelize = require("sequelize");
let config = require('../config/keys');
let sequelize = new Sequelize(config.sequelizeConfig.database, config.sequelizeConfig.username, config.sequelizeConfig.password, {
  host: config.sequelizeConfig.host,
  dialect: config.sequelizeConfig.dialect,
  operatorsAliases: false,
})


module.exports = sequelize;