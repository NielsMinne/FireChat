/**
 * 
 * Form Container 
 */

/**
 * 
 * @param {*} content Insert an array of HTMLElements
 * @param {*} className Give 1 or more classnames for the div around the form
 * @param {*} id Give a unique ID
 * @returns A form component inside a div
 */

export const form = (content, className, id) =>{
    const div = document.createElement('div');
    const form = document.createElement('form');
    if(className) div.className = className;
    div.id = id;
    for(const element of content) {form.appendChild(element);}
    div.appendChild(form);
    return div;
}