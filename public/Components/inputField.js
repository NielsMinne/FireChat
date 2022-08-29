/**
 * Input Field Component
 */

/**
 * 
 * @param {*} className Give 1 or more classnames 
 * @param {*} inputType Specify the type of the inputfield
 * @param {*} inputName  Specify the name of the inputfield
 * @param {*} placeholder Give string for the placeholder text
 * @param {*} maxLength Maximum amount of characters allowed
 * @returns An Inputfield Component
 */

export const inputField = (className, inputType, inputName, placeholder,maxLength) =>{
    const input = document.createElement('input');
    input.maxLength = maxLength;
    input.className = className;
    input.type = inputType;
    input.name = inputName;
    input.placeholder = placeholder;
    return input;
}