// for 

for (i=2; i<20; i++){
  console.log('Hola, soy el núm'+ i)
}

//while
let a=0;
while(a<6){
 console.log('hola, soy el número '+a)
  a++;
}

// Array

let frutas=['Banana','manzana','mandarina', 'pera']

// for(i=0; i<frutas.length; i++){
//   if(frutas[i].length<10){
//     console.log(frutas[i]);
//   }
// }

for(let fruta of frutas){
  console.log(fruta)
}

frutas.push('melón', 'sandia')

console.log(frutas)

console.log(frutas.indexOf('mandarina'))


let objetos=['pelota', 'mesa', 'botella', 'PC', 'jersei','móvil', 'carta', 'mochila', 'pizarra', 'moto',]

console.log(objetos)

console.log(objetos.indexOf('pizarra'))
console.log(objetos.shift(1))
console.log(objetos.unshift('ordenador', 'chocolate'))

console.log(objetos)