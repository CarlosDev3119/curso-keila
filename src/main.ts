import './style.css';

let edad: number = 19;

// convertir numeros a string 
let edadString: string = edad.toString();

//metodo valueOf: retorna el valor primitivo de un objeto 
let year: number = 2023;
// console.log({edad, edadString, year: year.valueOf()});

// operadores basicos + - * / 

let addition: number = 10 + 20;

//order of operations

let operation: number = (5 + (7 * 9));
console.log(operation);

//metodo Math.min
let number1: number = 20, number2: number = 10, number3 =38;
let answer: string;

if(number1 > number2 && number1 > number3){
  answer = `El numero mayor es ${number1}`
}else {
  if(number2 > number1 && number2 > number3){

    answer = `El numero mayor es ${number2}`
  }else{
    answer = `El numero mayor es ${number3}`
  }
}

let smallestNumber: number = Math.min(number1, number2, number3);
answer = `El numero Menor es ${smallestNumber}`;
//metodo Math.max

let largestNumber: number = Math.max(number1, number2, number3)
console.log(largestNumber)

//square root 
let numberSqrt: number = 16;
let resp: number = Math.sqrt(numberSqrt);
console.log(resp);

// Method pow 
let numberPow: number = Math.pow(2, 8);
console.log(numberPow)

// method round, toFixed

let decimal: number = 10.525123123123123123;
//round
console.log( Math.round(decimal) );
// toFixed
console.log(`fixed ${decimal.toFixed(2)}`);

//convert string to number
let numberString: string = '1998';
// let stringToNumber: number = Number(numberString);
let stringToNumber: number = +numberString;

const a = 3;
const b = 7;
const c = -10;

// let equation: number = ();

// -b+-raiz(bcuadrada-4ac/2a)






document.querySelector<HTMLDivElement>('#app')!.innerHTML = ` 
  <div>
    
  </div>
`;




