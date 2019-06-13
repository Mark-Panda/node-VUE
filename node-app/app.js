var express = require('express');
let Title = require('./models/Title')
let title = require('./services/title')
var app = express();

app.get('/', function(req, res) {
  res.send('hello, express');
});

app.get('/test',async (req,res) => {
  let result = []
  await Title().findAll()
            .then((title) => {
              (title instanceof Array) ? title = title : title = [title]
              title.forEach( v => {
                console.log('sss',v.dataValues);
                result.push(v.dataValues)
              })
            })
    res.send(result)
})

app.get('/app',async (req,res) => {
  let ss = await title.all()
  console.log('ffff',ss);
})

app.listen(3000)
