//import { pedirCarta } from "./pedir-carta";
import { crearCartaHTML, pedirCarta, valorCarta } from "./";
/**
 * turno de la computadora
 * @param {Number} puntosMinimos que la compu necesita p/ ganar
 * @param {HTMLElement} puntosHTML elemento HTML p/ mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML p/ mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    
    if(!puntosMinimos) throw new Error ('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error ('Arg puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck); 

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        //crear carta html
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}