/* function mostrarNombreCompleto(nombre, apellido) {
     
     console.log(nombre, apellido)
 }
 mostrarNombreCompleto('Ada ', 'Lovelace')  */

 /* function obtenerNombreCompleto(nombre, apellido) {
    return nombre + apellido
 }
 
 console.log(obtenerNombreCompleto("Ada", " Lovelace"))  */

/*  function returnString(str) {
    return str
  }
  
  function sum(a, b) {
    // a y b son números
    // sumar a y b, y retornar el valor resultante de la suma
    
    return a+b
  }
  
  function res(a, b) {
    // a y b son números
    // restart a y b, y retornar el valor resultante de la resta
  
    return a-b
  }
  
  function mul(a, b) {
    // a y b son números
    // multiplicar a y b, y retornar el valor resultante de la multiplicación
    
  return a*b
  }
  
  function div(a, b) {
    
    return a/b
    // a y b son números
    // dividir a y b, y retornar el valor resultante de la división
  }
  console.log (returnString('Ada'))
  console.log (sum(3,6))
  console.log(res(4,8))
  console.log(div(8,2))
  console.log(mul(2,2))

  function sonIguales(a, b) {
    // retorna true si a y b son iguales
    // sino retorna false
  } */
  
    /* function tienenLaMismaLongitud(str1, str2) {
    // retorna true si los dos strings str1 y str2 tienen el mismo largo
    // sino retorna false
   return (str1.length==str2.length)? true:false
  
   } */
   
  
  
/* console.log (tienenLaMismaLongitud('uiiiiiiiiiiiii', 'dos') ) */
/*  
function exclamar(str) {

    // agregar un punto de exclamacion al principio y final del string que llega como parametro
  // retornar el nuevo string
  // por ejemplo: si el parametro es 'hola mundo' -> '¡hola mundo!'
  return str + '!'
} 

console.log (exclamar ('hola a todos')) */

/* function sonIguales(a, b) {
  // retorna true si a y b son iguales
  // sino retorna false
  return a===b?true : false
}
console.log (sonIguales(1,2)) 

 function tienenLaMismaLongitud(str1, str2) {
  // retorna true si los dos strings str1 y str2 tienen el mismo largo
  // sino retorna false
}*/

/* function esMenorQueNoventa(num) {
  // retorna true si el parametro de la funcion: num, es menor a 90
  // sino retorna false
  return num<90? true:false
}
console.log (esMenorQueNoventa(99)) */

/* function esMayorQueCincuenta(num) {
  // retorna true si el parametro de la funcion: num, es mayor a 50
  // sino retorna false
  return num>50? true:false
}
console.log(esMayorQueCincuenta(8)) */

/* function obtenerResto(a, b) {
  return a%b
  // retornar  el resto de dividir a y b
}
console.log(obtenerResto(9,3)) */

/* function esPar(num) { 
  return num%2==0? true:false
  // retorna true si el numero es par
  // sino retorna false
  // AYUDA: un numero es par si el resto de dividir por 2 es 0
  // podés utilizar la función desarrollada anteriormente obtenerResto()
}
console.log (esPar(80)) */

/* function esImpar(num) {
  return num%2!=0?true:false
  // retorna true si el numero es impar
  // sino retorna false
  // AYUDA: un numero es impar si el resto de dividir por 2 es distinto de 0
  // podés utilizar la función desarrollada anteriormente obtenerResto()
}
console.log (esImpar(3))
  */

 /* function exclamar(str) {
  // agregar un punto de exclamacion al principio y final del string que llega como parametro
  // retornar el nuevo string
  // por ejemplo: si el parametro es 'hola mundo' -> '¡hola mundo!'
  return str + '!'
}
console.log(exclamar('hola a todos'))
 */
/* function unirNombre(nombre, apellido) {
  return nombre.concat(apellido)
  // return nombre y apellido unidos en un solo string, separados por un espacio
  // 'Ada', 'Lovelace' -> 'Ada Lovelace'
}
console.log(unirNombre ('virginia' , ' bernasconi')) */

/* function saludar(nombre) {
  return 'hola '.concat(nombre)
  // recibimos un parametro nombre y tenemos que concatenarlo con otro string para generar el siguiente mensaje: 'Ada' -> '¡Hola Ada!'
  // si querés, podés reutilizar la función exclamar() que creamos más arriba
} 
console.log (saludar ('virginia')) */

function obtenerPrimerElemento (array){
  return array[0]
  }


let peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];
 let numeros = [1, 2,3 ]
 console.log( obtenerPrimerElemento(peliculasBatman) );
 console.log(obtenerPrimerElemento(numeros)) 
   

 
 