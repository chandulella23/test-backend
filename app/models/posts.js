const mongoose = require('mongoose')
let Schema = mongoose.Schema
var postSchema = new Schema({
    name:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    team:{
        type:String,
        default:''
    },
    campaign:{
        type:String,
        default:''
    }
})

module.exports = mongoose.model('Posts',postSchema)