/**
 *  An Anchor component
 */

/**
 * 
 * @param {*} text Text as string
 * @param {*} className Give 1 ore more classnames
 * @param {*} onClick Insert a function to execute when the anchor is clicked
 * @returns An Anchor Component
 */

export const anchor = (text,className, onClick =(e) => e.preventDefault()) =>{
    const anchor = document.createElement('a');
    anchor.innerHTML = text;
    anchor.className = className;
    anchor.href="#";
    anchor.addEventListener('click',onClick);
    return anchor;
}