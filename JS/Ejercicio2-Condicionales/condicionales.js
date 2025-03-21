
export function restar(a,b){
  return a-b;
 }
export function sumar(a,b){
return a+b;
}

export function multiplicar(a,b){
  return a*b;
}
export function division(a,b){
  return a/b;
}

 export function argumentOperador(num1,num2,operador){

  if(operador==="+"){
    return num1 + num2;
  } else if(operador ==="-"){
    return num1 - num2;
  } else if( operador === "*"){
    return num1*num2;
  }else if(operador ==="/"){
    if(num2!=0){
      return num1/num2;
    }else{
      return "No divisible"
    }
  }

  return "Operador no válido"
}


console.log(argumentOperador(10, 3, "+")); 
console.log(argumentOperador(85, 30, "-"));  // 4
console.log(argumentOperador(21, 3, "*"));  // 21
console.log(argumentOperador(7, 3, "/"));

// Switch
export function calcular(num1,num2,operador){
  let resultado;
  switch(operador){
    case '+':
    resultado = num1 + num2;
    break

    case '-':
    resultado = num1 - num2;
    break
    
    case '*':
    resultado = num1 + num2;
    break

    case '/':
      if(num2!==0){
        resultado = num1 / num2;
      }else{
        resultado="Error: divisible"
      }
    default:
      resultado ='Operador no vàlido'
    break
  }

}

