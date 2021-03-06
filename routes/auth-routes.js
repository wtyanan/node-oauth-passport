const router = require('express').Router();
const passport = require('passport');
const mongoose = require('mongoose');

const passportSetup = require('../configs/passport-setup');

// auth login
router.get('/login', (req, res) => {
  res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/auth/login' }), (req, res) => {
  res.redirect('/profile');
});

module.exports = router;
