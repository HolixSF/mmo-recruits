var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

// GET NEW User
router.get('/signup', function(req, res, next) {
  res.render('signup', { message: req.flash('signupMessage') });
});

// POST NEW User
router.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/users/profile',
	failureRedirect : '/users/signup',
	failureFlash : true
})); 

// GET Login
router.get('/login', function(req, res, next) {
	res.render('login', { message: req.flash('loginMessage') });
});

// POST Login
router.post('/login', passport.authenticate('local-login', {
	successRedirect : '/users/profile',
	failureRedirect : '/users/login',
	failureFlash : true
}));

// GET Logout
router.get('/logout', function(req, res, next) {
	req.logout();
	res.redirect('/')
})

// GET Profile
router.get('/profile', function(req, res, next) {
	res.render('profile', {
		user : req.user
	});
})

router.get('/ping', function(req, res) {
	res.status(200).send('pong!');
})

module.exports = router;
