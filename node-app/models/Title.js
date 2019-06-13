let Sequelize = require("sequelize");

let sequelize = require('./index');

module.exports = () => {
  let Title = sequelize.define('titless',{
    id: {type: Sequelize.INTEGER,field: 'id', allowNull: false, primaryKey: true,autoIncrement: true},
    title: {type: Sequelize.STRING, allowNull: false },
    author: {type: Sequelize.STRING, allowNull: false}
  },{
    freezeTableName: true,// Model 对应的表名将与model名相同
  });
  Title.sync()
  return Title
}
