const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const morgan = require("morgan")
const helmet = require("helmet")
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 4000
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

const app = express()

mongoose.connect(process.env.MONGO_URI)
.then((suc) =>{
    console.log(`Db connected`)
})
.catch((err) =>{
    console.log(err)
})

//middleware
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/user" , userRoute)
app.use("/api/auth" , authRoute)
app.use("/api/post" , postRoute)


app.listen(PORT , () =>{
    console.log(`Server stated at ${PORT}`)
})