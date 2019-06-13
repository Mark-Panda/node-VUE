 module.exports = {
    url: 'mongodb://localhost:27017/blog',
    secretOrKey: 'secret',
    sequelizeConfig: {
      database: 'blog',
      username: 'root',
      password: '',
      host: '127.0.0.1',
      dialect: 'mysql', // 'mysql'|'sqlite'|'postgres'|'mssql'
      logging: true,  // 是否开始日志，默认是用console.log   建议开启，方便对照生成的sql语句
      omitNull: true,  // 是否将undefined转化为NULL    - 默认: false
      sync: { force: true },  // 是否同步
    }
 }