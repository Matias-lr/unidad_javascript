arrayPersona = [
    {
        nombre:"fabian",
        apellido:"daza"
    },{
        nombre:"Raul",
        apellido:"low"
    },{
        nombre:"felipe",
        apellido:"low"
    },{
        nombre:"matias",
        apellido:"larrondo"
    }
]

filtrado = arrayPersona.filter(val => val.apellido.includes("d"))
encontrado = arrayPersona.find(val => val.apellido.includes("d"))
arrayPersona.push({
    nombre:"angelica",
    apellido:"silva"
})

arrayPersona[1].rut = 111111
arrayPersona[0].nombre = "Fabian"
console.log(arrayPersona[1])

console.log(arrayPersona)