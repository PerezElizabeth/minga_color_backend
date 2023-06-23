import app from '../app.js' //importo la aplicacion de back configurada
import debug from 'debug'                 //importo el modulo para debuguear
import http from 'http'     //importo el modulo para crear servidores


let port = normalizePort(process.env.PORT || '8080') //defino el puerto donde va a funcionar nuestro servidor
// defino un condicional OR para normalizar el puerto porque cuando hostee/deployee el servidor al hosting me va a asignar el puerto que tenga libre para mi app

// set es un metodo que CONFIGURA algo
app.set('port', port) //configuro el puerto con la variable port definida anteriormente



let server = http.createServer(app); // utilizo el modulo http para crear un servidor con las configuraciones que se realizaron en app



function ready() {       //ready es una funcion que se va a ejecutar cuando se levante correctamte en el 
  console.log('server ready on port' +port)
}
//listen se utiliza para escuchar un puerto y es el encargado de levantar efectivamente el servidor (empieza a funcionar)
server.listen(
  port,
  ready); //
server.on('error', onError);//manejo de errores del servidor
server.on('listening', onListening);



function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}



function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}



function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
