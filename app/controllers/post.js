var mongoose = require('mongoose')
var Post =  mongoose.model('Posts')
module.exports = {
  submitPost: async(req, res)=>{
    try{
      let newPost = new Post();
      newPost.name = req.body.name;
      newPost.description = req.body.description;
      newPost.team = req.body.team;
      newPost.campaign = req.body.campaign;
      await newPost.save();
      return res.json({success:true})

    } catch(err){

    }
  },
  getPosts: async(req, res)=>{
      try{
        let posts =await Post.find({});
        return res.json({posts:posts})
      } catch(err){

      }
  },
  getTeamStats: async(req,res)=>{
      try{
          let arr=[0,0,0,0,0,0];
        let posts = await Post.find({});
        if(posts){
            posts.map(post=>{
                switch(post.team){
                    case 'Data Analytcs':
                    arr[0]++;
                    break;
                    case 'Finance':
                    arr[1]++;
                    break;
                    case 'HR':
                    arr[2]++;
                    break;
                    case 'Leadership':
                    arr[3]++;
                    break;
                    case 'Media':
                    arr[4]++;
                    break;
                    case 'Social Media':
                    arr[5]++;
                    break;
                }
            })
        }
        return res.json({teamStats:arr})
      } catch(err){

      }
  }
};