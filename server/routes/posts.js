const router = require("express").Router()
const User = require("../models/UserModel")
const Post = require("../models/postModel")

router.post("/", async (req,res) =>{
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.json(savedPost)
    } catch (error) {
        console.log(error)
    }
})

router.put("/:id" , async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await post.updateOne({
                $set: req.body
            })
            res.json("Updated a post")
        } else {
            res.json("Impossible")
        }
    } catch (error) {
        console.log(error)
    }
})


router.delete("/:id" , async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await post.deleteOne()
            res.json("Deleted a post")
        } else {
            res.json("Impossible")
        }
    } catch (error) {
        console.log(error)
    }
})


router.put("/:id/like" , async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({
                $push: { likes: req.body.userId}
            })
            res.json("Liked a post")
        } else {
            await post.updateOne({
                $pull: { likes: req.body.userId}
            })
            res.json("Disiked a post")
        }
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id" , async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (error) {
        console.log(error)
    }
})


router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router
