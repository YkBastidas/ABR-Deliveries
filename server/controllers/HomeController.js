var postgre = require('pg');
var bcrypt = require('bcryptjs');

var config=require('.././database/config');
const pool = postgre.Pool(config);

module.exports = {

	index: function (req,res,next) {
        res.send('hola mundo');
        var config=require('.././database/config');
        var db= new postgre.Client(config);
        db.connect();
        db.query('SELECT * FROM usuario')
    .then(response => {
        console.log(response.rows);
        db.end();
    })
    .catch(err => {
        console.log(err);
        db.end();
    })
		//res.render('home.html');//,{
		//	isAuthenticated : req.isAuthenticated(),
		//	user : req.user
		//});
    }
    
  
}