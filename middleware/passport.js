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
	}, function(req,email,password,done){

        var config=require('.././database/config');
        
	
        const pool = postgre.Pool(config);

        pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
        })

        pool.connect((err, client, done) => {
            if (err) throw err
            client.query('SELECT * FROM datoscuenta WHERE loginemail = $1',[email], (err, res) => {
              done()
          
              if (err) {
                console.log(err.stack)
              } else {
                if (res.rows.length>0){
                    var user = res.rows[0];
                    if (bcrypt.compareSync(password,user.passwordhash)){
                        return done (null,user,{
                            userid : user.userid,
                            loginemail: user.loginemail,
                            usernames: user.usernames,
                            userlastnames: user.userlastnames,
                            dateofbirth: user.dateofbirth
                        });
                    }
    
                }
                return done(null,false);
              }
            })
          })

		return;
	}
	));
}