const sendgrid = require('sendgrid');
const {helper} = sendgrid;
const keys = require('../config/keys');

class Mailer extends helper.Mail{
  constructor() {
    
  }
}

module.exports = Mailer;