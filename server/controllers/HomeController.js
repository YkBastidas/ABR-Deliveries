var postgre = require('pg');
var bcrypt = require('bcryptjs');

var config=require('.././database/config');
const pool = postgre.Pool(config);

module.exports = {

	index: function (req,res,next) {
        res.send({'saludo':'hola mundo'});
    }
    
  
}