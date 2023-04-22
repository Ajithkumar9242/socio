const router = require("express").Router()
const User = require("../models/UserModel")
const bcrypt = require("bcrypt")

router.put("/:id", async (req,res) =>{
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (error) {
                console.log(error)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            res.json("Updated")
        } catch (error) {
            console.log(error)
        }
    } else {
        return res.json("Ooops")
    }
})





router.delete("/:id", async (req,res) =>{
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.json("Deleted")
        } catch (error) {
            console.log(error)
        }
    } else {
        return res.json("Ooops")
    }
})



router.get("/:id" , async (req,res) =>{
    try {
        const user = await User.findById(req.params.id)
        const { password, updatedAt, ...other } = user._doc
        res.json(other)
    } catch (error) {
        console.log(error)
    }
})


//follow


router.put("/:id/follow" , async (req,res) =>{
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.params.userId)
            
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({
                    $push: { followers: req.body.userId}
                })
                await currentUser.updateOne({
                    $push: { following: req.body.userId}
                })
                res.json("Following successfully")
            } else {
                res.json("you alerady follow")
            }
        } catch (error) {
            console.log(error)
        }
    } else {
        res.json("cant follow yourself")
    }
})




//unfollow


router.put("/:id/unfollow" , async (req,res) =>{
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.params.userId)
            
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({
                    $pull: { followers: req.body.userId}
                })
                await currentUser.updateOne({
                    $pull: { following: req.body.userId}
                })
                res.json("Unfollowing successfully")
            } else {
                res.json("you alerady unfollow")
            }
        } catch (error) {
            console.log(error)
        }
    } else {
        res.json("cant unfollow yourself")
    }
})

module.exports = router