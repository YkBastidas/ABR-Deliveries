var postgre = require('pg');
var bcrypt = require('bcryptjs');

module.exports = {

  /*redirecProfile: function(req, res, next) {
    return res.redirect('/perfil');
  },*/

  postSignUp: function(req, res, next) {
    console.log(req.body);
    var salt = bcrypt.genSaltSync(10);
    var contrasenha = bcrypt.hashSync(req.body.contrasenha, salt);

    var config = require('.././database/config');
    var db = new postgre.Client(config);
    db.connect();

    const text = 'INSERT INTO usuario(correo,nombre,apellido,contrasenha,fecha_nacimiento) VALUES($1,$2,$3,$4,$5) RETURNING *';
    const values = [req.body.correo, req.body.nombre, req.body.apellido, contrasenha, req.body.fecha_nacimiento];
    db.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      }

      db.end();
    });

    return res.redirect('/');
  },




  logout: function(req, res, next) {
    req.logout();
    req.session = null;
    res.send('Sesion finalizada en server')
  },




};
