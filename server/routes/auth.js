const User = require("../models/UserModel")
const router = require("express").Router()
const bcrypt = require("bcrypt")

router.post("/register" , async (req, res) =>{
    
    try {

        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(req.body.password, salt)

        const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPass,
    })


        await user.save()
        
        res.status(200).json(user)
    } catch (error) {
        res.send(error)
    }
    
})


router.post("/login" , async (req,res) =>{
    try {
        const user = await User.findOne({ email: req.body.email})
        !user && res.status(404).json("No User Found")

        const validPass = await bcrypt.compare(req.body.password, user.password)
        !validPass && res.status(404).json("Invalid Pass")

    } catch (error) {
        console.log(error)
    }
})

module.exports = router