/**
 * Devuelve el valor numerico de una carta
 * @param {String} carta Ej: "J"
 * @returns {Number} Ej: 10
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1); // Para no tomar la letra, ej de "4S" tomaria solo 4
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1; //convierte a valor numerico una cadena
}