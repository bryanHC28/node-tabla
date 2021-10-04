const { describe } = require('yargs');

const argv = require ('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'base del numero a multiplicar'
})
.option('l',{
   alias:'listar',
   type:'boolean',
   demandOption:true,
   default:false,
   describe:'para listar la tabla de multiplicar'
})
.option('h',{
   alias:'hasta',
   type:'number',
   demandOption:true,
   describe:'para saber hasta que numero iterar'
})
.check((argv,options)=>{
if(isNaN(argv.b)){
   throw 'la base tiene que ser un numero'
}
return true;

}).argv


module.exports=argv;