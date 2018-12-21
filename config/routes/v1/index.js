const router = require('express').Router();
const user = require('../../../app/controllers/user')
const post = require('../../../app/controllers/post')
router.post('/login',user.login)
router.get('/users',user.getUsers)
router.post('/submitPost',post.submitPost)
router.get('/getPosts',post.getPosts)
router.get('/getTeamStats',post.getTeamStats)
module.exports = router
