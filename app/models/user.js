const mongoose = require('mongoose')
let Schema = mongoose.Schema
var userSchema = new Schema({
    email:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    },
    userName:{
        type:String,
        default:''
    },
    role:{
        type:String,
        enum:['Senior Associate','Junior Associate','Associate','Director']
    },
    team:{
        type:String,
        default:'Media'
    }
})

module.exports = mongoose.model('Users',userSchema)