/**
 *  function to add to collection (HUB)
 */

import { QSELECT,USER,CHATROOMS } from "./consts.js";

/**
 * @returns A function that adds a chatroom to the firestore when button "submit" is clicked 
 */
 export const addChatroom = async () => {

    const chatroomName = QSELECT('.room-name').value; //Get the name of the room 

    const nameField = QSELECT('.room-name'); //Get all elements that need to be hidden again 
    const labelchatroomName = QSELECT('.chatroom-add-name');
    const submitBtn = QSELECT('.namesubmit-btn');

    const error = QSELECT('#errorLogin'); //to display if there is no value given

    const username = USER.currentUser.displayName; //gets the users name
    
    if(!nameField.value.trim() == ""){ //Trims the inputfield so no room can be created with spaces

    const chatroom = { //create the chatroom object to insert to firestore
        user: username,
        createdOn: firebase.firestore.FieldValue.serverTimestamp()
    }

    await CHATROOMS.doc(chatroomName).set(chatroom).then(() => { 
            labelchatroomName.classList.add('hide');
            nameField.classList.add('hide');
            submitBtn.classList.add('hide');
        })
        .catch((error) => {
            alert(error.message);
        });
        error.classList.add('hide'); //hides if there was an error (in else statement)
    }
    else{
        error.innerHTML = 'Please insert a name'; //error will show if there is no input
        error.classList.remove('hide');
    }
};

