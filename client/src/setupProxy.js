const proxy = require('http-proxy-middleware');



module.exports = function(app){
  app.use(proxy('/auth/google',{target: 'https://shrouded-ocean-71231.herokuapp.com/'}));
  app.use(proxy('api/*', {target: 'https://shrouded-ocean-71231.herokuapp.com/'}));
}