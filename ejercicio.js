const temas = [{
    nombre: "alegría",
    descripcion: "Emoción que se siente cuando se está contento o feliz",
    estrategias: ["Identificar las cosas que te hacen feliz y hacerlas más seguido",
        "Buscar el apoyo de amigos y familiares para compartir momentos de alegría"]
},
{
    nombre: "procrastinación",
    descripcion: "Tendencia a posponer o aplazar tareas que se deben realizar",
    estrategias: [
        "Crear un plan detallado con plazos para cada tarea",
        "Dividir las tareas grandes en tareas más pequeñas y manejables"
    ]
},
{
    nombre: "tristeza",
    descripcion: "Emoción que se siente cuando se está triste o deprimido",
    estrategias: [
        "Buscar actividades que te gusten y te hagan sentir bien",
        "Hablar con alguien en quien confíes y pedir su apoyo emocional"
    ]
}
];

let datos = [
    { mes: "enero", persona: 5741, tema: "alegría", edad: 4 },
    { mes: "enero", persona: 1122, tema: "procrastinación", edad: 20 },
    { mes: "enero", persona: 3345, tema: "tristeza", edad: 13 },
    { mes: "febrero", persona: 7748, tema: "tristeza", edad: 9 },
    { mes: "febrero", persona: 7448, tema: "procrastinación", edad: 17 },
    { mes: "marzo", persona: 2244, tema: "alegría", edad: 2 },
    { mes: "abril", persona: 8114, tema: "alegría", edad: 9 },
    { mes: "abril", persona: 6363, tema: "tristeza", edad: 5 },
    { mes: "abril", persona: 3122, tema: "alegría", edad: 11 },
    { mes: "mayo", persona: 5501, tema: "procrastinación", edad: 24 }
];

function cantidadPersonasPorMes(mes) {
    let cantidad = 0;
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].mes === mes) {
            cantidad += datos[i].persona;
        }
    }
    return cantidad;
}

console.log(cantidadPersonasPorMes("enero"));

function cantidadPersonasPorTema(tema) {
    let cantidad = 0;
    let descripcion;
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].tema === tema) {
            cantidad += datos[i].persona;
        }
    }
    for (let j = 0; j < temas.length; j++) {
        if (temas[j].nombre === tema) {
            descripcion = temas[j].descripcion;
        }
    }

    return `el tema ${tema} tiene ${cantidad} personas y su descripcion es ${descripcion}`
}


console.log(cantidadPersonasPorTema("tristeza"));


function edadEstrategiaTema(tema) {
    let edades = 0;
    let contador = 0
    let estrategias;
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].tema === tema) {
            edades += datos[i].edad;
            contador++
        }
    }

    edades /= contador

    for (let j = 0; j < temas.length; j++) {
        if (temas[j].nombre === tema) {
            estrategias = temas[j].estrategias;
        }
    }


    return `el tema ${tema} tiene como promedio una edad de: ${edades}, y sus estrategias para combatirla son ${estrategias}`
}

console.log(edadEstrategiaTema('tristeza'));