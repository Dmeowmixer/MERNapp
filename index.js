const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');

require('./models/User.js');
require('./services/passport.js');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})

const app = express();

app.use(
  cookieSession({
    //Cookie maxAge = 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //Encryption on sessionID to prevent altering/hijacking of another id
    keys:[keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes.js')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);