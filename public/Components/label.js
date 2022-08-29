/**
 * 
 * Label component
 */


/**
 * 
 * @param {*} text Text as string
 * @param {*} className Give 1 or more classnames
 * @returns A Label Component
 */

export const label = (text,className) =>{
    const label = document.createElement('label');
    label.innerHTML = text;
    label.className = className;
    return label;
}