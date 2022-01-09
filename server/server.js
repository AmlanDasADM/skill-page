const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const router = require('./routes/form-submiting-router')
const env = require('dotenv');
const PORT = process.env.PORT || 3001

const app = express();
app.use(express.json());
app.use(cors())
env.config();
// mongoose connect
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('connection successful')
})
.catch((err) => {
    console.log(err);
})


// hosting 
if (process.env.NODE_ENV = "production") {
    app.use(express.static("client/build/"))
}

// router
app.use("/",router)

app.listen( PORT, ()=>{
    console.log(`app is listening to port ${PORT}`)
})