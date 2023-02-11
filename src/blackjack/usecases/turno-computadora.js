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

    // const modal = document.createElement('modal')
    // modal.className = 'alert'
    // const modal2 = document.createElement('modal')
    // modal.className = 'alert'
    // const modal3 = document.createElement('modal')
    // modal.className = 'alert'

    const p = document.createElement('p');
    p.className = 'alert frase';
    p.innerHTML = 'Nadie gana'
    // modal.append(p)

    const p2 = document.createElement('p');
    p2.className = 'alert frase';
    p2.innerHTML = 'Computadora gana'
    // modal2.append(p2)

    const p3 = document.createElement('p');
    p3.className = 'alert frase';
    p3.innerHTML = 'Jugador gana'
    // modal3.append(p3)

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
            document.body.append(p)
        } else if (puntosMinimos > 21) {
            document.body.append(p2)
        } else if (puntosComputadora > 21) {
            document.body.append(p3)
        } else {
            document.body.append(p2)
        }
    }, 100);

}
