var repeticiones = parseInt(prompt("Ingresa la cantidad de veces que deseas jugar"))
var i = 0
var draw = 0
var win = 0
var lose = 0
var nulo = 0

while (i < repeticiones) {
    var jugada = prompt(`Ingresa el número de tu jugada: 
    0. Piedra
    1. Papel
    2. Tijeras`);
    var computador = (Math.floor(Math.random() * 3))
    if (jugada == computador) {
        alert(`Jugada nº ${i+1} : Se ha producido un empate.`)
        draw++
        document.write(`Jugada nº ${i+1} : <h2>Se ha producido un empate</h2> <img src=assets/img/has-empatado.gif><br><br><hr><br><br>`)
    } else if (jugada == 0 && computador == 1) {
        alert(`Jugada nº ${i+1} : Has perdido. Tú elegiste piedra y el computador escogió papel.`)
        lose++
        document.write(`Jugada nº ${i+1} : <h2>Has perdido. Tú elegiste piedra y el computador escogió papel.</h2> <img src=assets/img/has-perdido.gif><br><br><hr><br><br>`)
    } else if (jugada == 0 && computador == 2) {
        alert(`Jugada nº ${i+1} : Has ganado. Tú elegiste piedra y el computador escogió tijeras.`)
        win++
        document.write(`Jugada nº ${i+1} : <h2>Has ganado. Tú elegiste piedra y el computador escogió tijeras.</h2> <img src=assets/img/has-ganado.gif><br><br><hr><br><br>`)
    } else if (jugada == 1 && computador == 0) {
        alert(`Jugada nº ${i+1} : Has ganado. Tú elegiste papel y el computador escogió piedra.`)
        win++
        document.write(`Jugada nº ${i+1} : <h2>Has ganado. Tú elegiste papel y el computador escogió piedra.</h2> <img src=assets/img/has-ganado.gif><br><br><hr><br><br>`)
    } else if (jugada == 1 && computador == 2) {
        alert(`Jugada nº ${i+1} : Has perdido. Tú elegiste papel y el computador escogió tijeras.`)
        lose++
        document.write(`Jugada nº ${i+1} : <h2>Has perdido. Tú elegiste papel y el computador escogió tijeras.</h2> <img src=assets/img/has-perdido.gif><br><br><hr><br><br>`)
    } else if (jugada == 2 && computador == 0) {
        alert(`Jugada nº ${i+1} : Has perdido. Tú elegiste tijeras y el computador escogió piedra.`)
        lose++
        document.write(`Jugada nº ${i+1} : <h2>Has perdido. Tú elegiste tijeras y el computador escogió piedra.</h2> <img src=assets/img/has-perdido.gif>><br><br><hr><br><br>`)
    } else if (jugada == 2 && computador == 1) {
        alert(`Jugada nº ${i+1} : Has ganado. Tú elegiste tijeras y el computador escogió papel.`)
        win++
        document.write(`Jugada nº ${i+1} : <h2>Has ganado. Tú elegiste tijeras y el computador escogió papel.</h2> <img src=assets/img/has-ganado.gif><br><br><hr><br><br>`)
    } else{
        alert(`Jugada nº ${i+1} : Número no válido. Se registrará como jugada nula.`)
        nulo++
        document.write(`Jugada nº ${i+1} : <h2>Jugada NULA</h2> <img src=assets/img/nula.gif><br><br><hr><br><br>`)
    }
    i++
}

document.write(`<h2>RESUMEN DE PARTIDAS JUGADAS</h2> Partidas ganadas: ${win} <br>Partidas perdidas: ${lose} <br>Partidas empatadas: ${draw} <br>Partidas nulas: ${nulo} <br>`)