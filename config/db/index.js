const mongoose = require('mongoose')
// var isProduction = process.env.NODE_ENV === 'production';
if(true){
mongoose.connect('mongodb://chandulella23:Chandu3$@ds263989.mlab.com:63989/ipac-test',{
  useNewUrlParser: true
},
(err,db)=>{
    if(!err)
    {
      console.log('Database connected successfully');
    }else{
            console.log('mongoose connection failed')
    }
  });
  mongoose.set('debug', true);
}

// mongoose.connection.on('connected',function(){
//     console.log('mongoose connection successfull')
// })

// mongoose.connection.on('disconnected',function(){
//     console.log('mongoose connection failed')
// })