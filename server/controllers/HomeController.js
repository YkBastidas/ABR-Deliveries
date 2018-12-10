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
        db.query('SELECT * FROM datoscuenta')
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
    },
    
    tomarunoprueba: function (req,res,next){
        

        pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
          })

          pool.connect((err, client, done) => {
            if (err) throw err
            client.query('SELECT * FROM datoscuenta WHERE loginemail = $1',['marylicious@gmail.com'], (err, res) => {
              done()
          
              if (err) {
                console.log(err.stack)
              } else {
                console.log(res.rows[0].usernames)
                console.log(res.rows.length)
              }
            })
          })
    }
}