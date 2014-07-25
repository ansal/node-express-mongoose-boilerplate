// sample configurations for the app

module.exports = {
 
  // mongodb config line
  db: 'mongodb://localhost/node-express-mongoose-boilerplate',

  // session store
  sessionCollection: 'sessions',
  sessionSecret: 'thisShouldNotBeUsedInProduction',

  // social logins to be used with passportjs
  // google
  google: {
    clientID: '',
    clientSecret: '',
    callbackURL: '/auth/callback/google'
  },

  // facebook
  facebook: {
    clientID: '',
    clientSecret: '',
    callbackURL: '/auth/callback/facebook'
  },

  // twitter
  twitter: {
    clientID: '',
    clientSecret: '',
    callbackURL: '/auth/twitter/callback'
  }

};