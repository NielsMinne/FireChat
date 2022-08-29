/**
 * A Div component with Onclick
 */

/**
 * 
 * @param {*} content Insert an array of HTMLElements
 * @param {*} className Give 1 or more classnames
 * @param {*} onClick Insert a function to execute when div is clicked
 * @returns A Div Component
 */

 export const div = (content, className,onClick = (e) => {e.preventDefault()}) =>{
    const div = document.createElement('div');
    div.className = className;
    div.addEventListener('click', onClick);
    for(const element of content) {div.appendChild(element);}
    return div;
 }