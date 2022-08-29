/**
 * An Error Message component
 */

/**
 * 
 * @param {*} className Give 1 or more classnames
 * @param {*} id Give an ID to the error
 * @returns An Error Message Component (readability)
 */

export const errorMessage = (className,id) => {
    const error = document.createElement('p');
    error.innerHTML = "";
    error.id = id;
    error.className = className;
    return error;
}