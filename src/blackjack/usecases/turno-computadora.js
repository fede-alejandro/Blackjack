import { crearCartaHTML, pedirCarta, valorCarta} from "./";

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
            confirm('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            confirm('Computadora gana')
        } else if (puntosComputadora > 21) {
            confirm('Jugador Gana');
        } else {
            confirm('Computadora Gana')
        }

    }, 100);
}
