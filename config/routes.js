/**
 * Routes
 *
 * Your routes map URLs to views and controllers.
 * 
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.) 
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg` 
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or 
 * CoffeeScript for the front-end.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {


  // Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, etc. depending on your
  // default view engine) your home page.
  // 
  // (Alternatively, remove this and add an `index.html` file in your `assets` directory)
  'get /': {
    controller: 'HomeController',
    action: 'index'
  },
  
  'get /logout': 'AuthController.logout',
  /*
  'get /login': 'AuthController.login',
  'get /register': 'AuthController.register',
  */

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',


  // Custom routes here...

    /**
     * User routes
     */
    'get /api/user': 'UserController.getAll',
    'get /api/user/:id': 'UserController.getOne',
    'post /api/user': 'UserController.create',

  /**
     * Message routes
     *
     */
    'get /api/message': 'MessageController.getAll',
    'get /api/message/:id': 'MessageController.getOne',
    'post /api/message': 'MessageController.create',
    'delete /api/message/:id': 'MessageController.destroy',


  // If a request to a URL doesn't match any of the custom routes above, it is matched 
  // against Sails route blueprints.  See `config/blueprints.js` for configuration options
  // and examples.

  //Handle "/home" queries 
  'get /home/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/about" queries
  'get /about': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /about/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/about" queries
  'get /more': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /more/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/messages" queries
  'get /messages': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /messages/*': {
    controller: 'HomeController',
    action: 'index'
  },
  
  //Handle "/kitchen" queries "testing sitewide designs"
  'get /kitchen': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /kitchen/*': {
    controller: 'HomeController',
    action: 'index'
  },
  
  //Handle "/template" queries "testing sitewide designs"
  'get /template': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /template/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/community" queries "Community Section, News, Queries"
  'get /community': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /community/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/community" queries "Community Section, News, Queries"
  'get /profile': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /profile/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/help" queries "Help Section"
  'get /help': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /help/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/chat" queries "Chat Section"
  'get /chat': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /chat/*': {
    controller: 'HomeController',
    action: 'index'
  },
  
  //Handle "/creator" queries "Creator App"
  'get /docs': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /docs/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/start" queries "Getting Started"
  'get /start': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /start/*': {
    controller: 'HomeController',
    action: 'index'
  },

  
  
  //Handle "/creator" queries
  'get /creator': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /creator/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/search" queries
  'get /search': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /search/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/me" queries
  'get /me': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /me/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/login" queries "Login"
  'get /login': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /login/*': {
    controller: 'HomeController',
    action: 'index'
  },

  //Handle "/register" queries
  'get /register': {
    controller: 'HomeController',
    action: 'index'
  },
  'get /register/*': {
    controller: 'HomeController',
    action: 'index'
  }


};
