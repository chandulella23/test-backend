var jwt = require('jsonwebtoken');
var secret = 'chandu@sai';
module.exports ={
    createToken : (user)=>{
        let today = new Date();
        let exp = new Date(today);
        exp.setDate(today.getDate()+60);
    
        return jwt.sign({
            id: user._id,
            email: user.email,
            userName: user.userName,
            role: user.role,
            type: user.type,
            exp: parseInt(exp.getTime() / 1000),
        }, secret);
    }
}