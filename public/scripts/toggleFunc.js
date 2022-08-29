/**
 * All Toggle Functions
 */

import { QSELECT } from "./consts.js";

/**
 * @returns Unhides/Hides the create chatroom input 
 */
const showChatroomInput = () => {

    const labelchatroomName = QSELECT('.chatroom-add-name'); //Get all the elements that are hidden
    const nameField = QSELECT('.room-name');
    const submitBtn = QSELECT('.namesubmit-btn');

    if(nameField.className === 'input-field room-name hide'){ //if hidden = unhide
        labelchatroomName.classList.remove('hide');
        nameField.classList.remove('hide');
        submitBtn.classList.remove('hide');
    }
    else{
        labelchatroomName.classList.add('hide'); // if unhidden = hide
        nameField.classList.add('hide');
        submitBtn.classList.add('hide');
    }
}

/**
 * @returns A toggle function that changes the icons and sets the theme
 */
const toggleDarkmode = () =>{

    const icon = QSELECT('.toggle'); // get the icon button
    const root = document.documentElement; //get the root to apply the theme to
    
    if(icon.className == 'fas fa-moon fa-2x toggle'){ //if icon is the moon icon set it to the sun icon
        root.setAttribute('theme','dark'); //Set Html to dark mode
        localStorage.setItem('mode','dark'); //Save the mode in the localstorage (for refresh)
        localStorage.setItem('icon-class','fas fa-sun fa-2x toggle'); //Save icon in localstorage (for refresh)
        icon.className ='fas fa-sun fa-2x toggle'; 
    }
    else if(icon.className == 'fas fa-sun fa-2x toggle'){ //same for sun icon
        root.setAttribute('theme','light');
        localStorage.setItem('mode','light');
        localStorage.setItem('icon-class','fas fa-moon fa-2x toggle');
        icon.className ='fas fa-moon fa-2x toggle';
    }
}

export { showChatroomInput,toggleDarkmode }