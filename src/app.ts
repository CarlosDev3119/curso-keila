// type Heroe = {
//     nombre: string;
//     nombreNormal: string;
//     superPoder: string;
//     edad: number;
//     equipo: {
//         amigo1: string;
//     };
// }

type Equipo = {
    amigo1: string;
}

interface HeroeInterface {
    nombre: string;
    nombreNormal: string;
    superPoder: string;
    edad: number;
    equipo: Equipo;
}


const superHeroeDC: HeroeInterface = {
    nombre: 'Batman',
    nombreNormal: 'Bruce Wayne',
    superPoder: 'Billonario',
    edad: 38,
    equipo: {
        amigo1: 'wonder woman'
    }
}


let mensaje: string = `
    El super heroe es: ${ superHeroeDC.nombre }
    Su Nombre de pila es: ${ superHeroeDC.nombreNormal }
    Superpoder: ${ superHeroeDC.superPoder }
`;

type FechaNacimiento = {
    ciudad: string;
    Pais: string;
}

interface ArtistaInterface {
    nombre: string;
    edad: number;
    rol: string;
    lugarDeNacimiento: FechaNacimiento;
    altura: number;
    colorDeCabelloActual: string;
}

const jiminBTS: ArtistaInterface = {
    nombre: "Jimin",
    edad: 25,
    rol: "Vocalista principal y bailarín",
    lugarDeNacimiento: {
        ciudad: "Busan",
        Pais:  "Corea del Sur"
    },
    altura: 173, 
    colorDeCabelloActual: "Negro",  
};

const jungkook: ArtistaInterface = {
    altura: 180,
    colorDeCabelloActual: "Cafe",
    edad: 25,
    nombre: 'Jungkook',
    lugarDeNacimiento:{
        ciudad: "Busan",
        Pais: "Corea del Sur"
    },
    rol: "Cantante principal"
}

type Actor = {
    nombre: string;
    edad:number;
    personaje: string;
}

type Critica = {
    critico: string;
    opinion: string;
}

interface ResenaProps {
    calificacion: number;
    comentario: string;
    criticas: Critica[]
}

interface PeliculaInterface {
    titulo: string;
    director: string;
    genero: string;
    actores: Actor[];
    resena: ResenaProps;
}

const avengers: PeliculaInterface = 
{
    titulo: "Avengers: Endgame",
    director: "Anthony y Joe Russo",
    genero: "Acción",
    actores: [
      {
        nombre: "Chris Evans",
        edad: 41,
        personaje: "Steve Rogers / Capitán América",
      },
      {
        nombre: "Scarlett Johansson",
        edad: 37,
        personaje: "Natasha Romanoff / Viuda Negra",
      },
    ],
    resena: {
      calificacion: 4.9,
      comentario: "El épico cierre de la Saga del Infinito del MCU.",
      criticas: [
        {
          critico: "Critico 3",
          opinion: "Una película que no te puedes perder.",
        },
        {
          critico: "Critico 4",
          opinion: "Un homenaje a los fanáticos de Marvel.",
        },
      ],
    },
}


const ironman: PeliculaInterface = {
    titulo: "Iron Man",
    director: 'Jon Favreau',
    genero: "Accion",
    actores: [
        {
            nombre: 'Robert Downey Jr.',
            edad: 55,
            personaje: "Tony stark / Iron man"
        }
    ],
    resena: {
        calificacion: 4.7,
        comentario: "El comienzo del universo Cinematografico de marel",
        criticas: [
            {
                critico: 'Critico 1',
                opinion: "Una excelente película de superhéroes."
            }
        ]
    }
}

const peliculas: PeliculaInterface[] = [
    ironman, avengers
]

console.log(avengers);