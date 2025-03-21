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

let nombres=["Ana", "Juan", "Pedro"];
let nombresenMayuscula=nombres.map((nombre)=> nombre.toUpperCase());

console.log(nombresenMayuscula);

let frutas=["Manzana", "Banana", "Naranja", "Uva", "Mandarina", "Sandia", "Kiwi", "Melón","Fresas"];
frutas.splice(1,3,'Chocolate','Papaya');
console.log(frutas)