/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo: ['2C','3D','2H','7S'...];
 * @returns {String} La carta que se saco del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}