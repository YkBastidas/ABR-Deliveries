var LocalStrategy = require('passport-local').Strategy;
var postgre = require('pg');
var bcrypt = require('bcryptjs');

module.exports = function (passport) {
	
	passport.serializeUser(function(user,done) {
		done(null,user);
	});

	passport.deserializeUser(function(obj,done) {
		done(null,obj);
	});

	passport.use(new LocalStrategy({
		passReqToCallback: true
	}, function(req,username,password,donepass){

        var config=require('.././database/config');
        const pool = postgre.Pool(config);

        pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
        })

        console.log('username', username);
        console.log('password', password);

        pool.connect((err, client, done) => {
            if (err) throw err
            client.query('SELECT * FROM usuario WHERE correo = $1',[username], (err, res) => {
           //  done()
          
              if (err) {
                console.log(err.stack)
              } else {
                if (res.rows.length>0){
                    var user = res.rows[0];

                    if (bcrypt.compareSync(password,user.contrasenha)){

                        console.log(user);
                        return donepass (null,user);
                    }
    
                } 
               return done(null,false)
              }
            })
          })

		return;
	}
	));
}