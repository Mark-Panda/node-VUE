const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();


//引入user.js
const User = require('./router/api/user');


//DB
const db = require('./config/keys').url;

//connect mongo

mongoose.connect(db)
        .then(() => { console.log('mongo connect success'); })
        .catch(err => { console.log('mongo error');})

//passport初始化
app.use(passport.initialize());
require('./config/passport')(passport);


// app.get('/',(req,res) => {
//     res.send('hello world!')
// })

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 



//使用router
app.use('/api/user',User )

const port = process.env.port || 5000;

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})