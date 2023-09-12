import { v4 as uuidv4 } from 'uuid';

const data = {
    id: uuidv4(),
    password: '1234',
    email: 'terry@gmail.com',
    departament: 'Informatica',
    nameUser: 'Carlos Ortega'
}

const dataUser = {
    id: uuidv4(),
    password: '1234',
    email: 'terry2@gmail.com',
    departament: 'Informatica',
    nameUser: 'Alberto Ortega'
}

let authenticated: boolean = false;

//forma tradicional para extraer la data
// const { id, email, departament, nameUser } = data;

// let userAuthenticaded = {
//     id, email, departament, nameUser
// }

//extraer la data con el operador rest 
const { password, id, ...rest } = data;

if( data.email === 'terry@gmail.com' && data.password === '1234' ){
    authenticated = true
}

let message: string = '';

message = ( authenticated )
                    ? `
                        Usuario Autenticado correctamente
                        ${rest.email + ' ' + rest.nameUser}
                    `
                    : 'usuario no autenticado';