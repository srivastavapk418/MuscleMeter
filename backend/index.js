const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');
const adminRoute = require('./Routes/adminRoute');
const feedRoute = require('./Routes/feedRoute');
const membershipRoute = require('./Routes/membershipRoute');
const workoutRoute = require('./Routes/workoutRoute');

const url = `${process.env.MONGODB_URL}`
mongoose.connect(url)
.then(()=>{
    console.log("Mongodb connect success")
})
.catch((e)=>console.log("Something went wrong with database connection",e))


// middleware
app.use(cors())
app.use(express.json())

app.use(userRoute)
app.use(adminRoute)
app.use(feedRoute)
app.use(membershipRoute)
app.use(workoutRoute)

app.listen(port,()=>console.log(`Server started at ${port}`));
