var postgre = require('pg');
var bcrypt = require('bcryptjs');
var packagesNum 

module.exports = {

     postPackageRegister function(req, res, next) {
        var nombreEntrega=req.body.nombreEntrega;
        var apellidoEntrega=req.body.apellidoEntrega;
        var direccion_entrega=req.body.direccion_entrega;
        var direccion_recogida=req.body.direccion_recogida;
        var arregloPaquetes=req.body.paquetes;
        var id_usuario;   //FALTA COMPLETAR

        var textEntrega = 'INSERT INTO entrega (nombre_remitente,apellido_remitente,direccion_recogida,direccion_entrega,id_usuario) VALUES($1,$2,$3,$4,$5) RETURNING idEntrega';
        var values = [nombreEntrega,apellidoEntrega,arregloDireccionSalida,arregloDireccionLlegada,id_usuario];
        var entregaValida=0;

        var config = require('../database/config');
        var db = new postgre.Client(config);
        db.connect();

        db.query(textEntrega, values, (err, res) => {
           if (err) {
             console.log(err.stack());
           }
           else{
              idEntrega=res.rows[0].id_entrega;
              idEntregaValida=1;
           }
        }); //FIN DEL QUERY 

        if(EntregaValida){
         var textPaquetes = 'INSERT INTO paquete (id_entrega,peso,altura,ancho,descripcion) VALUES($1,$2,$3,$4,$5) RETURNING *';
         for(let i in arregloPaquetes) {
            var peso=arregloPaquetes[i].peso;
            var altura=arregloPaquetes[i].altura;
            var ancho=arregloPaquetes[i].ancho;
            var descripcion=arregloPaquetes[i].descripcion;
            values =[idEntrega,peso,altura,ancho,descripcion];

            db.query(textPaquetes, values, (err, res) => {
               if (err) {
                 console.log(err.stack());
               }
               else{                   
                 arregloPaquetes.push(res.rows[0].idPaquete);
               }
            }); //FIN DEL QUERY
         } //FIN FOR DE PAQUETES
          res.send(1);
        } //FIN ENTREGA VALIDA
        else{
          res.send(0);
        }

  },

  getEntregas function(req,res,next){
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
  eliminarEntregas function(req,res,next){
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
