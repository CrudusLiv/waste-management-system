const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./model/post');
const app = express();
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://CrudusLiv:<pNqd4eHjHkWkMNND>@cluster0.n2yin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log("Connected to database!");
})
.catch(() => {
  console.log("Connection failed!");
});




app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
    
post.save(); });