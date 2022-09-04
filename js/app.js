let pedido = prompt(`Ingresa el número de tu pedido y/o escribe ESC para terminar:
1. Hamburguesa ($6000)
2. Papas Fritas ($3000)
3. Hotdog ($4000)
4. Pizza ($5000)
5. Bebida ($2000)
6. Jugo ($1000)`)

let suma = " "
let total = 0

while (pedido != "ESC" && pedido != "esc") {

    switch (pedido) {
        case "1":
            suma = 6000
            break;
        case "2":
            suma = 3000
            break;    
        case "3":
            suma = 4000
        break;    
        case "4":
            suma = 5000
        break;
        case "5":
            suma = 2000
        break;
        case "6":
            suma = 1000
        break;
        default:
            suma = 0
            break;
    }
total += suma
pedido = prompt(`Ingresa el número de tu pedido y/o escribe ESC para terminar:
1. Hamburguesa ($6000)
2. Papas Fritas ($3000)
3. Hotdog ($4000)
4. Pizza ($5000)
5. Bebida ($2000)
6. Jugo ($1000)`)
}
if (total <= 10000) {
alert(`Te sabes medir con la comida. Total a pagar: ${total} pesos`);
} else if (total >= 10001 && total <= 16000 ) {
    alert (`Cuidado con los excesos. Total a pagar: ${total} pesos`)
} else {
    alert(`¿Todo es para tí? Eres un Glotón. Total a pagar: ${total} pesos`);
}