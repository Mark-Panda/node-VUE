const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get('/test',(req,res) => {
    res.json({
        msg: "login sunn"
    })
})

//注册
router.post('/register',async (req,res) => {

    console.log('----',req.body);
    await User.findOne({email:req.body.email})
        .then( (user) => {
            if(user){
                console.log('--- find success ---');
                return res.status(400).json('邮箱占用')
            }else{
                const newUser = new User({
                    email: req.body.email,
                    name: req.body.name,
                    password: req.body.password
                })
                console.log('=====22 ===',newUser);
                // newUser.save()
                //                 .then(user => res.json(user))
                //                 .catch(err => console.log(err))
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;

                        newUser.password = hash
                        newUser.save()
                                .then(user => res.json(user))
                                .catch(err => console.log(err))
                    });
                });
            }
        })
})

//登录
router.post('/login',async (req,res) => {
    console.log('----',req.body);
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email})
        .then(user => {
            if(!user){
                return res.status(404).json({msg:"用户不存在！"})
            }
            //密码匹配
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch){
                            const rule = {id:user.id,name:user.name}
                            // jwt.sign("规则","加密名字","过期时间","箭头函数")
                            jwt.sign(rule  ,keys.secretOrKey,{expiresIn:3600},(err,token) => {
                                if(err) throw err;
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                })
                            })
                        }else{
                            return res.status(400).json({msg:"密码错误"});
                        }
                    })
        })
})

/**
 *  GET   验证token
 *   private
 */
router.get('/current',passport.authenticate("jwt",{session:false}),(req,res) => {
    res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email
    })
})

module.exports = router;