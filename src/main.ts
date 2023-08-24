import './style.css'
import { generateHobbiesList } from './generator';

// let, const y "var no se ocupa"

//strings
let name: string;
name = 'Keila';

// numbers
const age: number = 18;
const legalAge: number = 18;

// boolean
let isOfLegalAge: boolean; 

// condicionales

if( age >= legalAge ){
  isOfLegalAge = true;
}else {
  isOfLegalAge = false
}


const hobbies: string[] = [
  'Comer chocolate', 
  'Estudiar Ingles', 
  'Escuchar k-pop',
  'Ver a al mejor novio del mundo',
  'comer'
];

const favoriteFood: string[] = [
  'Pozole', 
  'Enchiladas Mole', 
  'Albondigas'
];


let hobbiesString: string = '';

for(let i: number = 0; i < hobbies.length; i++ ){
  hobbiesString += `<li>${hobbies[i]}</li>`
}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = ` 
  <div>
    <h2>Nombre: ${name}</h2>
    <h3>Edad: ${age}</h3>
    <span>Es mayor de edad?: ${(isOfLegalAge)? 'si' : 'no'} </span>

    <hr/>
    <h3>Ciclo for para hobbies</h3>
    <ul>
      ${ hobbiesString }
    </ul>

    <hr/>
    <h3>Ciclo for para comidas</h3>
    <ul>
        //TODO
        mostrar la lista de comidas
    </ul>

  </div>
`;


// <li>${hobbies[0]}</li>
// <li>${hobbies[1]}</li>
// <li>${hobbies[2]}</li>

// arrays

// const hobbies: (string | number)[] = [
//   'Comer chocolate', 
//   'Estudiar Ingles', 
//   'Escuchar k-pop',
//   10
// ];

