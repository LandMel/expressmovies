const bcrypt = require('bcrypt');
const { UserModel } = require('../models/usersmodel');

exports.index = (req,res,next) =>{
    res.render('users/add')
}

exports.login = (req,res,next) =>{
    res.render('users/login');
}

exports.registerUser = async (req,res,next) => {
    try{
        const hashed_password = await bcrypt.hash(req.body.password, 10);
        let user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: hashed_password
        });
        user.save((err, document)=>{
            if(err) res.render('users/add', {error:err});
            res.render('users/login', {data:document})
        })
    } catch(err){
        console.log(err);
        res.status(500).send("internal server error occured")
    }
}

exports.loginUser = async (req,res,next) =>{
    try{
        let user = await UserModel.findOne({email:req.body.email});
        if(user){
            let compare = await bcrypt.compare(req.body.password, user.password);
            if(compare){
                req.session.authenticated = true;
                res.render('users/user', {title:"Mon compte", username: user.name})
            } else {
                res.render('error', {message:"Mauvais nom d'utilisateur ou mot de passe"})
            }
        } else {
            res.render('error', {message:"Mauvais nom d'utilisateur ou mot de passe"})
        }
    } catch(err){
        console.log(err);
        res.status(500).send("internal server error occured")
    }
}