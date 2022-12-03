// PRIMERA PRE ENTREGA!!

// Datos

let videoJuegos;
let cantidadJuegos;
let monto;
let cuotas;

do{
    videoJuegos = prompt("Ingrese su Tipo de Video Juego que Desea Comprar: (Deporte / Aventura / Acción / Pelea)").toLowerCase();
} while ((videoJuegos != "deporte") && (videoJuegos != "aventura") && (videoJuegos != "accion") && (videoJuegos != "pelea"));

do{
    cantidadJuegos = parseFloat(prompt("Cantidad de Juegos que Desea Comprar: (Maximo 5 Juegos)"));
} while ((cantidadJuegos < 1) || (cantidadJuegos > 5));

do{
    monto = parseFloat(prompt("Ingrese el Monto: (Maximo $100.000)"));
} while ((monto < 1000) || (monto > 100000));

do{
    cuotas = parseInt(prompt("Ingrese la Cantidad de Cuotas: (Maxímo 12 cuotas)"));
} while ((cuotas < 1) || (cuotas > 12));

// Proceso

let interes_videoJuego;
let descuento_videoJuego;

switch(videoJuegos) {
    case "deporte":
        interes_videoJuego = 5;
        descuento_videoJuego = 10;
        break;
    case "aventura":
        interes_videoJuego = 4;
        descuento_videoJuego = 8;
        break;
    case "accion":
        interes_videoJuego = 3;
        descuento_videoJuego = 6;
        break;
    case "pelea":
        interes_videoJuego = 2;
        descuento_videoJuego = 4;
        break;             
}

let monto_interes = monto + ((monto * interes_videoJuego) / 100); 
console.log("Monto c/Interes:$ " + monto_interes);

let valor_cuotas = (monto_interes / cuotas);
console.log("Cuota:$ " + valor_cuotas.toFixed(2));

let monto_descuento = monto - ((monto * descuento_videoJuego) / 100);
console.log("Descuento en Efectivo:$ " + monto_descuento.toFixed(2));


// Salida de Datos

alert("Video Juegos: " + videoJuegos + "\n" + "Cantidad de Juegos: " + cantidadJuegos + "\n" + "Monto: $ " + monto.toFixed(2) + "\n" + "Cuotas: " + cuotas);
alert("GRACIAS POR SU COMPRA!");

// FIN PRIMERA PRE ENTREGA






