const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, unique: true},
    profilePic: { type: String,  default: ""},
    coverePic: { type: String,  default: ""},
    followers: { type: Array, default: []},
    following: { type: Array, default: []},
    isAdmin: { type: Boolean, default: false},
    desc: { type: String},
    city: { type: String},
    from: { type: String},
    relationship: { type: Number, enum: [1, 2, 3]},
}, { timestamps: true })

module.exports = mongoose.model("User" , userSchema)