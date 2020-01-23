const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const path=require('path');
const port = process.env.PORT || 4444;
const publicPath=path.join(__dirname,'..','public')
console.log('publicpath',publicPath);
app.use(express.static(publicPath))


const signIn = require("../routes/auth.js");

app.get("/", signIn);

app.listen(port, () => {
  console.log(`SERVER IS LISTENING ON PORT ${port}`);
});
