/**
 * SettingsController
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
   * `SettingsController.index()`
   */
  index: function (req, res) {
    var username = 'username';
    User.getUser({id: req.session.me}, function(err, user){
      if (err) return res.negotiate(err);
      if (!user) {
        return res.redirect('/');
      }
      username = user.username.toUpperCase();
      useremail = user.email;
      Information.getInfor({userid: req.session.me}, function(err, data){
        if (err) return res.negotiate(err);
        if (!data) {
          var infor = sails.models.user;
          infor.firstname = '';
          infor.lastname = '';
          infor.phonenum = '';
          infor.state = '';
          infor.country = '-1';
          return res.view('user/settings', {username: username, useremail:useremail, infor: infor});
        }else{
          return res.view('user/settings', {username: username, useremail:useremail, infor: data});
        }
      });
    });
    
  },

  saveinfor: function(req, res){
    User.updateEmail({
      id: req.session.me,
      email: req.param('email')
    }, function(err, user){
      if (err) {
        return res.negotiate(err);
      }
      Information.saveInfor({
        userid: req.session.me,
        firstname: req.param('firstname'),
        lastname: req.param('lastname'),
        phonenum: req.param('phonenum'),
        state: req.param('state'),
        country: req.param('country'),
      }, function(err, data){
        if (err) return res.negotiate(err);
        return res.send('success');
      });
    });
  },
  savepassword: function(req, res){
    var sha256 = crypto.createHash("sha256");
    sha256.update(req.param('oldpassword'), "utf8");//utf8 here
    var oldpassword = sha256.digest("base64");
    User.getUser({id: req.session.me}, function(err, user){
      if (err) return res.negotiate(err);
      if (!user) {
        return res.send('0');
      }
      if (oldpassword == user.password) {
        var newhashpass = crypto.createHash("sha256");
        newhashpass.update(req.param('newpassword'), "utf8");//utf8 here
        var newpassword = newhashpass.digest("base64");
        User.updatepass({id: req.session.me, password: newpassword}, function(err, data){
          if (err) return res.negotiate(err);
          return res.send('1');
        });
      }else{
        return res.send('2');
      }
    });
  }

};

