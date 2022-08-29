/**
 * Animation Component (after logging in/register) 
 */

import {header} from "./header.js";
import {div} from "./div.js";

/**
 * 
 * @param {*} mainParent The parent div to which this should be appended
 * @param {*} parentToHide The div that should be hidden in order to show this animation
 * @returns An Animation with text and a logo (intended for login animation)
 */

export const animationLogin = (mainParent, parentToHide) => {
    parentToHide.classList.add("hide");

    const img = document.createElement('img');
    img.src = './assets/images/firechat-logo.png';
    img.className = 'logo-image';

    mainParent.appendChild(div([
        img,
        header('FireChat 1.0', 2, 'logo-name')
    ], 'flex flex-column logo-animation-div'))
}