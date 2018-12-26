var mongoose = require('mongoose')
var User =  mongoose.model('Users')
var jwtService = require('./v1/auth')
module.exports = {
  login: async (req, res) => {
    try {
      console.log(req.body);
      let data = JSON.parse(JSON.stringify(req.body));
      const user = await User.find({ email: data.email , password:data.password});
      if (user.length) {
        console.log(data.password, user);
          return res.json({
            success: "success",
            token: jwtService.createToken(user[0])
          });
      }else{
        return res.json({ success: false });
      }
    } catch (error) {
      console.log("error", error);
    }
  },
  getUsers: async(req, res)=>{
    try{
      let users = await User.find({});
      console.log(users)
      return res.json({users})

    } catch(err){

    }
  },

  verifyToken: async(req,res)=>{
    try {
      jwt.verify(req.body.token, 'chandu@sai', function(err, decoded) {
        if (err) {
          return res.json({verified:false})
        }
        return res.json({verified:true})
      });
    } catch (err) {

    }
  }
};