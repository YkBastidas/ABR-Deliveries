//require('dotenv').config();

const express = require('express'); // framework de node para gestionar rutas/servidor
const bodyParser = require('body-parser'); // permite leer la data de las forms en req.body
const path = require('path'); //une fragmentos de url
const passport = require('passport'); //permite gestionar sesiones del usuario
const morgan = require('morgan'); //loggea las request en la consola (para debuggear)
const cookieParser = require('cookie-parser'); //permite leer las cookies
//const cookieSession = require('cookie-session'); //permite guardar sesion del usuario en una cookie
//const cors = require('cors'); //Permite el cors
//const helmet = require('helmet'); //escribe los headers de las requests
//const compression = require('compression');
const publicPath = path.join(__dirname, '..', 'client');
//const keys = require('./config/keys'); //accede a la informacion sensible
const PORT = process.env.PORT || 5432; // numero del puerto a escuchar
const router = require('server/routes/routes.js'); // conecta las rutas

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(publicPath))); //une server y cliente
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
//app.use(cors()); 
//app.use(helmet()); 
//app.use(compression());






// Passport Config
/*app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));*/
app.use(passport.initialize());
app.use(passport.session());
require('middleware/passport.js')(passport);

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'client/paginaPrincipal.html'));
});

app.get('/usuario', (req, res) => {
  res.sendFile(path.join(publicPath, 'client/paginaUsuario.html'));
});

// Usa las rutas
app.use('/', router);



//Error 404 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Comienza el server en el puerto
app.listen(PORT, (err) => {
  if (err) {
    console.log('Hubo un error conectando el servidor', err);
  } else {
    console.log('Usted se ha conectado en el puerto: ', PORT);
  }
});

module.exports = app;