'use strict'

var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  var page = Page.build({
  	title: req.body.title[2],
  	content: req.body.title[3]
  });
   //console.log('Page', page);
    page.save()
    .then(function(){
    	res.redirect('/');
    })
    .catch(function(err){
    	console.error(err);
    });
  //console.log(req.body);
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.get('/:urlTitle', function(req, res, next){
  Page.findOne({ // returns the page instance as a promise (find it using the urlTitle)
    where: {
      urlTitle: 'req.params.urlTitle'
    }
  })
  .then(function(foundPage) {
    res.render('wikipage', {
      page: foundPage
    }); // Render the wikipage template, passing the retrieved page as the page property of the locals object of the render function.
  })
  .catch(next);
});






















//











module.exports = router;
