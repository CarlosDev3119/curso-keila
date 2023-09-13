import { v4 as uuidv4 } from 'uuid';


interface Address {
    street: string;
    num: string;
}

interface User {
    id: string;
    password: string;
    email: string;
    departament: string;
    nameUser: string;
    address: Address;
    [key: string]: any;
}

const user: User = {
    id: uuidv4(),
    password: 'Mip@assword',
    email: 'terry@gmail.com',
    departament: 'Informatica',
    nameUser: 'Carlos Ortega',
    address: {
        street: 'Tempestad',
        num: '22C'
    }
}

const letrasMayusculas: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let existChar: boolean = user.password.includes('@');
let letraMayuscula: string = user.password[0];
let existUpperCase: boolean = letrasMayusculas.includes(letraMayuscula);

const { password, email, id, nameUser, ...rest } = user;
const { num, street } = rest.address;

if( existChar && existUpperCase ){

    if( password === 'Mip@assword' && email === 'terry@gmail.com'){
        console.log(`Usuario autenticado
            Usuario: ${ nameUser }
            id: ${ id }
            Direccion: ${ street } ${ num }
        `);
    }else {
        console.log('Password o email incorrecto');
    }

}else{
    console.log('Password incorrecto')
}




