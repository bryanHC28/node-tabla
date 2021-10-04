
const fs= require('fs');
const colors = require('colors/safe');

const cargarArchivo = (base=5,listar = false,hasta )=>{
    let archivo = `archivo-${base}.txt`

return new Promise((resolve,reject)=>{

const getTabla = (base )=>{

    let salida='';
    let consola='';

    for(let i=1;i<=hasta;i++){
    
     consola += `${base} ${colors.blue.underline('x')} ${i} = ${colors.white.inverse(i*base)} \n`;
     salida += `${base} x ${i} = ${i*base}\n`;
    
    }

 
 
    fs.writeFile(`./salida/${archivo}`,salida,(err)=>{
        if (err) throw err;
    });

    if(listar){
    
        return console.log(colors.green(consola))
    }
    
    
}




(base>0)

 ? resolve(archivo,getTabla(base))
 : reject('el valor ingresado no es un tipo numerico')

});

}


module.exports = {
    cargarArchivo
}