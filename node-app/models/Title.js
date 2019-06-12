let Sequelize = require("sequelize");
let sequelize = new Sequelize(
  'localtest',
  'root',
  '',
  {
    'dialect': 'mysql',
    'host': 'localhost',
    'port': 3306,
    'define': {  
                   // 字段以下划线（_）来分割（默认是驼峰命名风格）  
//                     'underscored': true ,
//                     'charset': 'utf8',
//                     'collate': 'utf8_general_ci',
//                     'freezeTableName': true,
                    'timestamps': true, //为模型添加 createdAt 和 updatedAt 两个时间戳字段
           },
            'pool': {//连接池
                        'maxConnections': 20,
                        'minConnections': 0,
                        'maxIdleTime': 10000 //	连接最大空置时间（毫秒），超时后将释放连接
            }
  }
)

module.exports = function () {
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
