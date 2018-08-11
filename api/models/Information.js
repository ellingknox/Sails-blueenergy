/**
* Information.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userid: {
      type: 'int',
    },
    firstname: {
      type: 'string',
    },
    lastname: {
      type: 'string',
    },
    phonenum: {
      type: 'string',
    },
    state: {
      type: 'string',
    },
    country: {
      type: 'string',
    },
  },


  /**
   * Create a new personal-information using the provided inputs,
   * but encrypt the password first.
   *
   * @param  {Object}   inputs
   *                     • name     {String}
   *                     • email    {String}
   *                     • password {String}
   * @param  {Function} cb
   */

  saveInfor: function (inputs, cb) {
    // Create a personal-information
    Information.findOne({
      userid: inputs.userid
    }).exec(function(err, data){
      if (err){
        console.log("err:" + err);
      }else if(!data){
        Information.create({
          userid: inputs.userid,
          firstname: inputs.firstname,
          lastname: inputs.lastname,
          // email: inputs.email,
          phonenum: inputs.phonenum,
          state: inputs.state,
          country: inputs.country,
        }).exec(cb);
      }else {
        Information.update({userid: inputs.userid}, {
          firstname: inputs.firstname,
          lastname: inputs.lastname,
          // email: inputs.email,
          phonenum: inputs.phonenum,
          state: inputs.state,
          country: inputs.country,
        }).exec(cb);
      }
    });
  },
  getInfor: function (input, cb) {
    // Create a user
    Information.findOne({
      userid: input.userid
    })
    .exec(cb);
  },
};

