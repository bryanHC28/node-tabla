
 const {cargarArchivo} = require ('./helpers/multiplicar')
 const argv= require('./config/yargs')
 console.clear();
cargarArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err=>console.log(err))


 /*
const [ , ,arg3='base=5'] = process.argv; //extraer base
const [ , base = 5] = arg3.split('=');   //extraer numero



//node app.js --base=7

 //const base = 7;
*/
 
 
 


