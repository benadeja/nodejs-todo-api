var env = process.env.NODE_ENV || 'development'; // On Heroku this will always be 'production'
console.log('env ***** ', env);

/**
 * Read the config from config.json, way more secure so we don't expose these endpoints to github 
 */
if (env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}