/**
 * ApiController
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
   * `ApiController.login()`
   */
  login: function (req, res) {
    var email = req.param('email');
    var sha256 = crypto.createHash("sha256");
    sha256.update(req.param('password'), "utf8");//utf8 here
    var inputpassword = sha256.digest("base64");
    console.log('email=====', email);
    console.log('password=====', req.param('password'));
    User.attemptLogin({
      email: email,
      password: inputpassword
      }, function (err, user) {
        if (err) return res.json(err);
        if (!user) {
          var response = {
            success: false,
            error: true,
            message: '0',
          }
          console.log(email);
          res.json(response);
        }
        else{
          var response = {
            success: true,
           	username: user.username,
          }
          console.log(email);
          res.json(response);
        }
    });
    
  },
  signup: function(req, res) {
    var username = req.param('username');
    console.log('username====', username);
    var response = {
      success: true,
      username: username
    }
    res.json(response);
  }

};

