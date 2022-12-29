function menuDeTacosPrincipal(){
let total = 0
let menu

do {
    menu = prompt(" - Sigue estos 3 sencillos pasos como se enumeran, para pedir Tu Taco.com \n 1-Compra tu TACO.COM \n 2-Confirmar pedido \n 3-Finaliza la compra de tu pedido")
    menu = parseInt(menu)
    switch (menu) {
        case 1: total = total + comprarTacos()
            break
        case 2: alert(" el total acumulado del pedido " + total)
                total = 0
            break
        case 3: alert("enviado")
            break
        default: alert("Opción Invalida")
    }
} while (menu !=3)
}

function comprarTacos() {
    let acumulador = 0
    alert("Selecciones los Tacos.com para generar su pedido y total a pagar")
    alert(" 1-Tacos al Pastor.com \n 2-Tacos Campechano.com \n 3-Tacos ahumados.com ")
    let tipo = prompt("Elija el tipo de taco.com de su preferencia")
    tipo = parseInt(tipo)

    switch (tipo) {
        case 1: acumulador = 2500
            break
        case 2: acumulador = 3000
            break
        case 3: acumulador = 4000
            break

        default: alert("Opción Invalida")

    }

    return acumulador

}

menuDeTacosPrincipal()