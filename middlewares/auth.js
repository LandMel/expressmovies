module.exports = (req,res,next) =>{
    if(!req.session.authenticated){
        res.redirect('/users/login')
    } else {
        next();
    }
}