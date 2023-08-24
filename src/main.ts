import './style.css'

//Declaracion de variables de tipo string

let name:     string,
    lastName: string,
    birthday: string;

name     = 'keila';
lastName = 'Gutierrez';
birthday = '2003-11-19';

let name1:     string = 'Carlos';
let lastName1: string = 'Ortega';
let birthday1: string = '1995-01-22';

name1 = 'Alberto';
lastName1 = 'Juarez';
birthday1 = '2000-06-19';

//concatenacion de variables

let fullName: string = name + ' ' + lastName;
// console.log({fullName});

//salto de linea en un string \n
fullName = name + '\n' + lastName;
// console.log('salto de linea: ', fullName);

//Tabulacion en un string \t
fullName = name + '\t' + lastName;
// console.log('tabulacion: ', fullName);


// interpolacion de strings
fullName = `${name} ${lastName}`;


//metodos e indices

//metodo substring
//Extrae un texto en un rango determinado
let onlyNameSubstring = fullName.substring(0, 5);
console.log(onlyNameSubstring);

//metodo split
//divide la cadena en un arreglo, indicando su separador
let onlyNameSplit: string = fullName.split(' ')[0];
console.log(onlyNameSplit);

//metodo toUpperCase()
//Convierte a mayusculas un texto
let fullNameUpperCase: string = fullName.toUpperCase();
console.log(fullNameUpperCase);

//metodo toLowerCase()
//Convierte a minusculas un texto
let fullNameLowerCase: string = fullNameUpperCase.toLowerCase();
console.log(fullNameLowerCase);

//metodo trim()
// Borra los espacios al inicio y al final de un texto
let message: string = '      Necesito que me contactes urgentemente       ';
console.log( message.trim() );

//metodo slice()
//Extrae un fragmento de texto mediante el indice inicial y retorna un nuevo string
let pharagraph = 'The quick brown fox jumps over the lazy dog.';
let p = pharagraph.slice(31);
console.log( p )

//metodo replace()
//Remplaza un valor dentro de un string por otro valor
let text = 'Hola mundo mundo mundo mundo';
let replaceText = text.replace('mundo', 'a todos');
console.log(replaceText);

//metodo replaceAll()
//Remplaza todas las coincidencias en un texto
replaceText = text.replaceAll('mundo', 'a todos');
console.log(replaceText);


document.querySelector<HTMLDivElement>('#app')!.innerHTML = ` 
  <div>


  </div>
`;
