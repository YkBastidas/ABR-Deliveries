var postgre = require('pg');
var packagesNum

module.exports = {

     postPackageRegister: function(req, res, next) {
        console.log(req.body);
        var nombreEntrega=req.body.name;
        var apellidoEntrega=req.body.lastNames;
        var direccion_entrega=req.body.salida;
        var direccion_recogida=req.body.llegada;
        var peso=req.body.peso;
        var altura=req.body.altura;
        var ancho=req.body.ancho;
        var descripcion=req.body.descripcion;
        var id_usuario;   //FALTA COMPLETAR

        var textEntrega = 'INSERT INTO entrega (nombre_remitente,apellido_remitente,direccion_recogida,direccion_entrega,id_usuario) VALUES($1,$2,$3,$4,$5) RETURNING id_entrega';
        var values = [nombreEntrega,apellidoEntrega,direccion_recogida,direccion_entrega,id_usuario];

        var config = require('../database/config');
        var db = new postgre.Client(config);
        db.connect();
        var id_entrega;
        id_entrega = db.query(textEntrega, values, (err, res) => {
           if (err) {
             console.log(err.stack);
           }
           console.log(res.rows[0].id_entrega);
           return res.rows[0].id_entrega;           
        }); //FIN DEL QUERY
          console.log(id_entrega);
          var textPaquetes = 'INSERT INTO paquete (id_entrega,peso,altura,ancho,descripcion) VALUES($1,$2,$3,$4,$5) RETURNING *';
          values =[id_entrega,peso,altura,ancho,descripcion];
          db.query(textPaquetes, values, (err, res) => {
            if (err) {
              console.log(err.stack);
            }
          }); //FIN DEL QUERY
          res.send("Todo OK");
  },

  getEntregas: function(req,res,next){
    var idUsuario; //FALTA COMPLETAR
    var existe=0;

    var config = require('../database/config');
        var db = new postgre.Client(config);
        db.connect();

    var textEntrega = 'SELECT * FROM entrega WHERE id_usuario=VALUES($1)';
        var values = [idUsuario];

        db.query(textEntrega, values, (err, res) => {
           if (err) {
             console.log(err.stack());
           }
           else{
              existe=1;
              var entregas=res;
           }
        }); //FIN DEL QUERY

        if(existe){
          res.send(entregas);
        }
        else{
          res.send(null);
        }
  } ,
  eliminarEntregas: function(req,res,next){
    var exitoso=0;
    var config = require('../database/config');
        var db = new postgre.Client(config);
        db.connect();

    var textEntrega = 'DELETE * FROM entrega WHERE id_entrega=VALUES($1)';
        var values = [req.body.id_entrega];

     db.query(textEntrega, values, (err, res) => {
           if (err) {
             console.log(err.stack());
           }
           else{
              exitoso=1;
           }
        }); //FIN DEL QUERY

     var textPaquete = 'DELETE * FROM paquete WHERE id_entrega=VALUES($1)';
        var values = [req.body.id_entrega];

     db.query(textEntrega, values, (err, res) => {
           if (err) {
             console.log(err.stack());
           }
      }); //FIN DEL QUERY

    if (exitoso){
      res.send(1);
    }
    else{
      res.send(0);
    }
  }

};
