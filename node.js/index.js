import { holalib,adiosLib} from "./lib/esterno.js";
import{ sumar, restar} from "../JS/Ejercicio2-Condicionales/condicionales.js"
// import { adiosLib } from "./lib/esterno.js";


const anadirNum=[];

// anadirNum.push(sumar(4,8));
console.log(anadirNum.push(sumar(4,8)), anadirNum.push(restar(8,60)) )

holalib();
adiosLib();
console.log('hola desde NodeJs');
const nombre='Joe';
console.log(`Hola voy a llamar la función adiosLib dentros de la plantilla de ${nombre}`)


