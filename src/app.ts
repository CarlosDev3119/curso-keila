
const peliculas: string[] = ['El rey leon', 'El rey leon 2'];

//desestructuracion

// agregar datos a un arreglo al final
const longitud = peliculas.push('El rey leon 3', 'Bichos', 'Toy story', 'cars');
const [reyLeon, ...rest] = peliculas;

// agregar datos a un arreglo al inicio
peliculas.unshift('toy story 2');

let ultimaPosicion: number = peliculas.length - 1;
// console.log(peliculas.length);
// console.log(peliculas[ ultimaPosicion ]);

//ciclos 
// for(let i: number = 0; i < peliculas.length ; i++){
//     console.log(i, "-" , peliculas[i]);
// }

let j: number = 0;

// while(j < peliculas.length){
//     console.log(j, "-" , peliculas[j]);
//     j++;
// }


// for(let i = 1; i < 11; i++){
    
//     for(let j = 1; j <+ 100; j++){
        
//         console.log(`${i} * ${j} = ${ j * i}`);
//     }

// }


// const frutas: string[] = ['Naranjas', 'Peras', 'Sandias'];
// const verdura: string[] = [ 'chayote', 'colinflor', 'Apio'];


// const canasta: string[][] = [ frutas, verdura ];

// for(let i = 0; i < canasta.length; i++) {
//     // console.log(canasta[i])
//     for(let j = 0; j < canasta[i].length; j++){
//         console.log(canasta[i][j])

//     }
// }

// console.log( canasta[1][1] );

const frutas: string[] = ['Naranjas', 'Peras', 'Sandias'];

// console.log(frutas.includes('peras'));

//metodo pop

// let frutaRest: string | undefined = frutas.pop();

// console.log(frutaRest);

// metodo shift
// console.log( frutas.shift() ); 
// console.log(frutas);

// const numeros: number[] = [ 123,3,232,31,413,4,54,6,54,6431,5,765,6,5436,34,5];
// const numerosMayores: number[] = [];

// for(let i = 0; i < numeros.length; i++){
//     if( numeros[i] > 100 ){
//         numerosMayores.push( numeros[i] );
//     }
// }

// console.log(numerosMayores)

const numeros: number[] = [ 123,3,232,31,413,4,54,6,54,6431,5,765,6,5436,34,5];

//filter <
// const numerosMayoresLamdda: number[] = numeros.filter( (numero) => numero > 100 && numero < 1000 );
// console.log(numerosMayoresLamdda);

let acumulador: number = 0;
for(let i = 0; i < numeros.length; i++){
    
    acumulador = acumulador + numeros[i]
   
}
console.log( acumulador / numeros.length );


const promedio = numeros.reduce( (prev, curr) => prev + curr, 0) /  numeros.length

console.log(promedio );


