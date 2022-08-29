/**
 * A Button component
 */

/**
 * 
 * @param {*} text Text as string
 * @param {*} className Give 1 or more classnames
 * @param {*} onClick Insert a function to execute when the button is clicked
 * @returns A Button Component
 */

export const button = (text, className, onClick = (e) => {e.preventDefault()}) => {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.className = className;
    button.addEventListener('click', onClick);
    return button;
}
