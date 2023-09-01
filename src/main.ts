import './style.css';

// basic structure if(){}
// operators >, <, >=, <=, ==, ===, !=
// basic
let ifExist: boolean = false;
let number: number   = 0;

if( ifExist ){
  console.log('si existe')
}

if( number > 10  || number < 15 && number > 0){
  console.log('Esta en el rango')
}

// else 
let edad: number = 20;

if( edad > 60 ){
  console.log('ya eres viejo');
}else {
  console.log('aun eres joven');
}

//nested contitionals
let number1: number = 20;
let number2: number = 17;
let number3: number = 13;

//what is the max number?
if( number1 > number2 && number1 > number3 ){
  console.log(`el numero mayor es ${number1}`);
  /* agrega tu logica de programacion */
}else{
  if(number2 > number1 && number2 > number3){
    console.log(`El numero mayor es: ${number2}`);
  }else{
    console.log(`El numero mayor es: ${number3}`);
  }
}

//ternary conditional
let message: string = 'not authenticated';

(message === 'authenticated')
  ? console.log('usuario autenticado')
  : console.log('acceso denegado');

(message === 'authenticated') 
  && console.log('usuario autenticado');

let num1: number = 8, num2: string = '8';

if( num1 === +num2 ){
  console.log('si es igual ')
}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = ` 
  <div>
    
  </div>
`;




