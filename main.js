 /* var biblioteca = [
    {
        titulo: 'Cumbres Borrascosas',
        autor: 'Emily Brontë',
        leido: true
    },
    {
        titulo: 'Orlando',
        autor: 'Virginia Woolf',
        leido: false
    },
    {
        titulo: 'Arbol de Diana',
        autor: 'Alejandra Pizarnik',
        leido: false
    }
  ];
 
for (var i=0; i<biblioteca.length; i++){
    
    if (biblioteca[i].leido==true) {
        console.log('El libro ' +biblioteca[i].titulo + ' de ' +biblioteca[i].autor +' ha sido leido ')

    }
   else   {
       console.log('El libro ' + biblioteca[i].titulo + ' de ' + biblioteca[i].autor +' no ha sido leido ')
   }

}

// for (var i = 0; i < biblioteca.length; i++) 
//   

// biblioteca.map(function (item, indice, array ) {

//     if (item.leido === true) {
//       console.log(item.titulo + " leido")
//     } 
//     else {
//       console.log(item.titulo + " no fue leido")
//     }
    
//     })
var pikachu={
    nombre:"pikachu",
    vida:100,
    ataque:20,
    atacar: function() {
      //charmander.vida=  charmander.vida-pikachu.ataque 
      charmander.vida-=pikachu.ataque
        
    }
}

var charmander= {
    nombre: "charmander",
    vida:200,
    ataque:5,
atacar:function(){
    pikachu.vida-=charmander.ataque
}
}

    

pikachu.atacar() //charmander pierde 20 puntos
charmander.atacar() //pikachu pierde 5 puntos */

/* function pares() {
   for (let index = 0; index < 100; index++) {
       if (index%2==0) {
        console.log(index)
       };
   } 
}
pares () */
/* Declarar una función que muestre los siguientes datos en consola:
Tu Nombre
Edad
Teléfono
Calle
Altura
Código postal */

/* function datos() {
let nombre= 'Virginia'
let edad= 20
let telefono= '0303456'
let calle= 'peron'
let altura='285'
let codigo='1405'
console.log (nombre)
console.log (edad)
console.log (telefono);
console.log(calle)
console.log(altura)
console.log(codigo);
}
datos (); */






/* function pares(numero) {

    if (numero%2 == 0) {
        console.log (numero)
    }
}
pares(3)
pares(2);*/ 

/* var mostrarNombre=function ada() {
    console.log('=======')
    console.log ('= Ada =')
    console.log ('=======')

}

mostrarNombre() */
/* let numerosPares= 
    function pares() {
        for (let index = 0; index < 100; index++) {
            if (index%2==0) {
             console.log(index)
            };
        } 
     }
     numerosPares()
     numerosPares()
     numerosPares()
     numerosPares()
     numerosPares() */

     /* var fibonacci= function mostrarFibo() {

        var x = 1; 
        var y = 1; 
        var z; 
        //var fin = 10
        var fin = 32
        
        console.log("Partimos de: 1 conejo + 1 coneja= 2 conejos")
     
        console.log(x) //este no es ciclo for
        console.log(y) // este tampoco es ciclo for
        z = x + y
        console.log(z) //resultado de 1+1----> o sea 1 coneja + 1 conejo= 2 conejos 
        console.log('--> a partir de ahora empieza el ciclo for:')
        for (var i = 3; i < fin - 1; i++) { 
         x = y
          y = z 
          z = y + x
          console.log(z) 
        }
    }

fibonacci()

 */
/* function obtenerNombre() {
    return "virginia"}

    console.log("Mi nombre es " + obtenerNombre()); */

  /* let primerosNumerosPares= function numerosPares() {
      let ray= [0,2,4,6,8]
        return ray
    }
   console.log (primerosNumerosPares())
     */
    


/* function obtenerNombre() {
    return 'Virginia'
}
function obtenerSaludo() {
    return'Hola, '
    
}
var nombre=obtenerNombre()
var saludo=obtenerSaludo()

console.log ((saludo)+(nombre)) */

function obtenerIDUsuario(){
return 50
}
function usuarioValido() {
return true    
}

var id=obtenerIDUsuario()
var elUsuarioEsValido=usuarioValido ();

if (id<=30) {

    console.log('El usuario es válido')
    
}
else {
    console.log ('el usuario no es valido')
}


