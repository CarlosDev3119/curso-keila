import { v4 as uuidv4 } from 'uuid';


interface Address {
    street: string;
    num: string;
}

interface User {
    id?: string;
    password?: string;
    email: string;
    departament: string;
    nameUser: string;
    address: Address;
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

// quitar uno o mas elementos de un objeto con desestructuracion y operador rest

//metodo 1

const newUser = {
    id: user.id,
    email: user.email,
    departament: user.departament,
    nameUser: user.nameUser,
    address: user.address
}

// metodo 2
// const { id, email, departament, nameUser, address } = user;

// const newUser2 = {
//     id,
//     email,
//     departament,
//     nameUser,
//     address
// }

// metodo 3 utilizando delete

// delete user.password;

// metodo 4 desestructuracion y rest
const { password, ...rest } = user;

// delete rest.id;
// console.log({user});
// console.log({rest});

const { ...newUser3 } = user;

delete newUser3.password;
// console.log( {newUser3: newUser3} );
// console.log( {user} );

interface PeliProps {
    title: string;
    autor?: string;
    [key: string]: any;
}

const peliculas: PeliProps = {
    title: 'El Rey Leon',
}

// peliculas.autor = 'Disney';
peliculas['autor'] = 'Disney';

peliculas.duration = 1000;
peliculas.secuelas = ['El rey leon 2', 'El rey leon 3'];

console.log(peliculas);








