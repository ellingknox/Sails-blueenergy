/**
 * SendController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var querystring = require('querystring');
var https = require('https');
var text = require('textbelt');  
var randtoken = require('rand-token');
var crypto = require("crypto");
var sha256 = crypto.createHash("sha256");

module.exports = {

  /**
   * `SendController.index()`
   */
  index: function (req, res) {
    var username = 'username';
    User.getUser({id: req.session.me}, function(err, user){
      if (err) return res.negotiate(err);
      if (!user) {
        return res.redirect('/');
      }
      username = user.username.toUpperCase();
      return res.view('user/send', {username: username});
    });
    
  },

};

