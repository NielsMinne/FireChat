/**
 * A Text component
 */

/**
 * 
 * @param {*} text Text as string
 * @param {*} className Give 1 or more classnames
 * @returns A simple text line as 'p'
 */

export const text = (text,className) =>{
    const p = document.createElement('p');
    p.innerHTML = text;
    p.className = className;
    return p;
}