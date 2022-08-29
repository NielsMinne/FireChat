/**
 * A Header Component
 */

/**
 * @param {*} text text as string
 * @param {*} headerWeight (h1-h6)
 * @param {*} className Give 1 or more classnames
 * @returns A Header Component
 */

 export const header = (text,headerWeight,className) =>{
    if(headerWeight <0 || headerWeight > 6) {
        throw new Error('headerWeight should be between 0 and 6');
    }
    const h = document.createElement(`h${headerWeight}`);
    h.className = className;
    h.textContent = text;
    return h;
}