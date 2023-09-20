
const peliculas: string[] = ['El rey leon', 'El rey leon 2'];

//desestructuracion

// agregar datos a un arreglo al final
const longitud = peliculas.push('El rey leon 3', 'Bichos', 'Toy story');
const [reyLeon, ...rest] = peliculas;

// agregar datos a un arreglo al inicio
peliculas.unshift('toy story 2');
console.log({peliculas, rest, longitud});