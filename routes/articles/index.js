var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/zine");
mongoose.set('debug', true);


var articleSchema = new mongoose.Schema({
  title: String,
  artUrl: String,
  backgroundImg: Boolean,
  excerpt: String,
  body: String
})



router.get('/', function(req, res, next) {
  res.render('index', { });
});


router.get('/new', function(req,res,next){
  res.render('articles/new')
})

module.exports = router;
