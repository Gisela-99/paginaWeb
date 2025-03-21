const datos=[];
const edades=[];

function anadeDatos(entrada,edadUsuarios){
  datos.push(entrada);
  edades.push(edadUsuarios);
}

anadeDatos('Joe Banana',36);
anadeDatos('Crazy Gallos',26);

console.log(datos);
datos.pop();
console.log(datos)

console.log(edades);
edades.pop();
console.log(edades)

datos.forEach(function(mafioso){
  console.log(mafioso)
})