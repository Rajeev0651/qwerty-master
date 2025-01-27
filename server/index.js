const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')
const cors = require('cors')
const app = express();
app.use(cookieparser())
app.use(cors());
app.use(express.json());
const loginRoute = require('./routers/login')
const signupRoute = require('./routers/signup')
const homeRoute = require('./routers/home')
const logoutRoute = require('./routers/logout')

dotenv.config();
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open' , ()=>{
console.log("connection established")
})


app.use(homeRoute)
app.use(loginRoute)
app.use(signupRoute)
app.use(logoutRoute)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));