/*
 * This file contains all the routes corresponding to a user
 */
var countries = require('../data/countries.js');
var dbRoutes = require('./database.js');

exports.signup = function(req, res) {
	res.render('signup', { title: 'Dischost - Signup', countryList: countries });
};

exports.list = function(req, res) {
  res.send("respond with a resource");
};

