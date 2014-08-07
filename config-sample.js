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
    clientID: 'SECRET',
    clientSecret: 'SECRET',
    callbackURL: '/auth/callback/google'
  },

  // facebook
  facebook: {
    clientID: 'SECRET',
    clientSecret: 'SECRET',
    callbackURL: '/auth/callback/facebook'
  },

  // twitter
  twitter: {
    clientID: 'SECRET',
    clientSecret: 'SECRET',
    callbackURL: '/auth/twitter/callback'
  }

};