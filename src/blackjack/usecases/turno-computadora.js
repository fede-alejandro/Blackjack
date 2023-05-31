import { crearCartaHTML, pedirCarta, valorCarta } from './';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos
 * @param {divCartasCoHTMLElementmputadora} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesarios');

    let puntosComputadora = 0;
    let info = document.getElementById('divMensaje');

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            info.innerHTML += '<b>Nadie gana!!</b>'
        } else if (puntosMinimos > 21) {
            info.innerHTML += '<b>Computadora gana!!</b>'
        } else if (puntosComputadora > 21) {
            info.innerHTML += '<b>Jugador gana!!</b>'
        } else {
            info.innerHTML += '<b>Computadora gana!!</b>'
        }
    }, 1000);


}

