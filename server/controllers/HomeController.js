module.exports = {

	index: function (req,res,next) {
        res.send('hola mundo');
        const postgre = require('pg');
        var config=require('server/database/config');
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
    
    pruebaInsertar: function (req,res,next){
        res.send('creando un nuevo usuario');
        const postgre = require('pg');
        var config=require('server/database/config');
        var db= new postgre.Client(config);
        db.connect();

        const text='INSERT INTO datoscuenta(loginemail,usernames,userlastnames,passwordhash,dateofbirth) VALUES($1,$2,$3,$4,$5) RETURNING *';
            const values= ['marylicious@gmail.com','maria veronica','ortiz algomas','5lL*649718','2018-1-1'];




        db.query(text,values,(err,res) =>{
            if (err) {
                console.log(err.stack());
            }
            else
            console.log(res.rows[0]);

			db.end();
        });

    }

}
