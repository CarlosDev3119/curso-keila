import { PersonProps } from "./interfaces/interfaces";


// const person2: PersonProps = {
//     name: 'Carlos',
//     address: {
//         num: 22,
//         street: 'Tempestad',
//         province: 'San Jeronimo'
//     },
//     email: 'Carlos@gmail.com',
//     hobbies: ['Jugar', 'Programar', 'Besar a su novia']
// }

//Propiedas del obeto con interfaces
const person: PersonProps = {
    name: 'Keila',
    address: {
        street: 'Lluvia',
        num: 'Ret 50',
        province: 'Cuatro Vientos',
    },
    email: 'keila@gmail.com',
    hobbies: ['Comer chocolates', 'Comerse a su novio']
};
// let emailUser: string = person2.email;
// let hobbiesUser: string[] = person2.hobbies;
// let nombreUser: string = person2.name;
// let calle: string = person2.address.street;
// let numeroExterior: string | number = person2.address.num;

// let card: string = `
//     Nombre de Usuario: ${name}
//     ================================
//     -------Datos del contacto-------
//     Correo electronico: ${email}
//     Direccion de emergencia: 
//         calle: ${street}
//         Numero Exterior: ${num}
//     ================================
// `

//desestructuracion
const { name: nombreUser, address, email: emailUser } = person;
const { num: numeroExterior, street: calle } = address;

console.log(emailUser);

let card: string = `
    Nombre de Usuario: ${nombreUser}
    ================================
    -------Datos del contacto-------
    Correo electronico: ${emailUser}
    Direccion de emergencia: 
        calle: ${calle}
        Numero Exterior: ${numeroExterior}
    ================================
`



// console.log( person );