const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken,refreshToken,profile,done) => {
    User.findOne({googleId: profile.id}).then((existingUser) => {
      if(existingUser){
        // User exists w/ profile.id
        done(null, existingUser);
      }else{
        // !exist create record
        new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user)
        );
      }
    })
  })
);
