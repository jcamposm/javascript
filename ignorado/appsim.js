let montoAcuerdo = 0
let causaDespido = prompt(`Indique el número de la causa de su despido:
1. Necesidades de la empresa
2. Renuncia Voluntaria
3. Mutuo acuerdo`)

let sueldoLiquido = Number(prompt("Ingrese su sueldo líquido mensual:"))
let cantidadServicio = Number(prompt("Ingrese la cantidad de años de servicio:"))
let vacaciones = Number(prompt("Ingrese la cantidad de dias de vacaciones restantes:"))


let resultadoBase = (sueldoLiquido * 0.25) + sueldoLiquido 
let resultadoServicio = resultadoBase * cantidadServicio 
let resultadoVacaciones = vacaciones *(resultadoBase/30)


function finiquito() {

    switch (causaDespido) {
    case "1" :
    if (cantidadServicio >= 11){
    resultado = 11 * resultadoBase
    } else {
    resultado = cantidadServicio * resultadoBase + resultadoVacaciones
    }
    break
    case "2" :
    resultado = resultadoBase + resultadoVacaciones
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
finiquito()
alert(`Su finiquito final será: ${resultado}`)
