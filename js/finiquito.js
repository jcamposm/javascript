let causaDespido = prompt(`Indique el número causa de desvinculación de la empresa:
1. Necesidades de la empresa
2. Renuncia Voluntaria
3. Mutuo acuerdo`)
let sueldoLiquido = Number(prompt("Ingrese su sueldo líquido mensual:"))
let cantidadServicio = Number(prompt("Ingrese la cantidad de años de servicio:"))
let vacaciones = Number(prompt("Ingrese la cantidad de dias de vacaciones restantes:"))

function finiquito() {
    resultadoBase = (sueldoLiquido * 0.25) + sueldoLiquido 
    resultadoVacaciones = vacaciones *(resultadoBase/30)
    vacacionesRetro = cantidadServicio/3 + vacaciones - 3.333

    switch (causaDespido) {
    case "1" :
    if (cantidadServicio >= 11){
    resultado = 11 * resultadoBase + vacacionesRetro*(resultadoBase/30)
    } else {
    resultado = cantidadServicio * resultadoBase + resultadoVacaciones
    }
    break
    case "2" :
    resultado = resultadoVacaciones + resultadoBase
    break
    case "3" :
    let montoAcuerdo = Number(prompt("Ingrese Monto acuerdo:"))
    resultado = montoAcuerdo + resultadoVacaciones + resultadoBase
    break
    default:
        alert("Usted no ha sido desvinculado, VUELVA AL TRABAJO!")
        break
}
return resultado

}
alert(`Su finiquito final será: ${finiquito()} pesos`)
